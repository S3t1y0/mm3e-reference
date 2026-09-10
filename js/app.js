/**
 * Mutants & Masterminds 3e Quick Reference Application
 * Core rendering, modal interactions, dynamic color styling, and instant search.
 */

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    const mainContainer = document.getElementById("sections-container");
    const filterPillsContainer = document.getElementById("filter-pills");
    const searchInput = document.getElementById("search-input");
    const searchClear = document.getElementById("search-clear");
    const modal = document.getElementById("modal");
    const modalBackdrop = document.getElementById("modal-backdrop");
    const modalCloseBtn = document.getElementById("modal-close-btn");

    // 1. Render all sections & items
    renderSections(mainContainer);

    // 2. Render filter pills
    renderFilterPills(filterPillsContainer);

    // 3. Search & Filter interactions
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (searchClear) {
                searchClear.style.display = query.length > 0 ? "block" : "none";
            }
            filterItems(query);
        });
    }

    if (searchClear) {
        searchClear.addEventListener("click", () => {
            searchInput.value = "";
            searchClear.style.display = "none";
            filterItems("");
            searchInput.focus();
        });
    }

    // Keyboard shortcut: '/' to focus search, 'Esc' to close modal
    window.addEventListener("keydown", (e) => {
        if (e.key === "/" && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        } else if (e.key === "Escape") {
            closeModal();
        }
    });

    // 4. Modal listeners
    if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
}

function renderSections(container) {
    if (!container || !SECTIONS_DATA) return;
    container.innerHTML = "";

    SECTIONS_DATA.forEach((sec) => {
        const sectionEl = document.createElement("div");
        sectionEl.id = `section-${sec.id}`;
        sectionEl.className = "section-container";
        sectionEl.dataset.sectionId = sec.id;
        sectionEl.style.borderColor = sec.color;

        // Title bar
        const titleBar = document.createElement("div");
        titleBar.className = "section-title";
        titleBar.style.backgroundColor = sec.color;
        titleBar.innerHTML = `
            <span>${sec.title}</span>
            <span class="section-limit">${sec.limit || ""}</span>
        `;

        // Content
        const contentBox = document.createElement("div");
        contentBox.className = "section-content";

        // Subtitle
        if (sec.subtitle) {
            const sub = document.createElement("div");
            sub.className = "section-subtitle";
            sub.textContent = sec.subtitle;
            contentBox.appendChild(sub);
        }

        if (sec.type === "table" && sec.table) {
            sectionEl.dataset.type = "table";

            // Formulas chips
            if (sec.formulas && sec.formulas.length > 0) {
                const formulasBox = document.createElement("div");
                formulasBox.className = "rank-formulas-container";
                sec.formulas.forEach((f) => {
                    const chip = document.createElement("div");
                    chip.className = "formula-chip";
                    chip.innerHTML = `
                        <span class="formula-chip-label">${f.label}:</span>
                        <span>${f.formula}</span>
                    `;
                    formulasBox.appendChild(chip);
                });
                contentBox.appendChild(formulasBox);
            }

            // Table wrapper
            const tableWrapper = document.createElement("div");
            tableWrapper.className = "ranks-table-wrapper";

            const table = document.createElement("table");
            table.className = "ranks-table";
            table.innerHTML = `
                <thead>
                    <tr>
                        <th style="width: 90px;">Rank</th>
                        <th>Time</th>
                        <th>Distance (m / km)</th>
                        <th>Mass (kg / tonnes)</th>
                        <th>Volume (L / m³)</th>
                    </tr>
                </thead>
                <tbody></tbody>
            `;

            const tbody = table.querySelector("tbody");
            sec.table.forEach((row) => {
                const tr = document.createElement("tr");
                const isBenchmark = row.rank === "0";
                if (isBenchmark) tr.className = "benchmark-row";
                tr.dataset.search = `${row.rank} ${row.time} ${row.distance} ${row.mass} ${row.volume}`.toLowerCase();

                tr.innerHTML = `
                    <td>
                        <span class="rank-badge ${isBenchmark ? 'benchmark' : ''}">${row.rank}</span>
                    </td>
                    <td>${row.time}</td>
                    <td>${row.distance}</td>
                    <td>${row.mass}</td>
                    <td>${row.volume}</td>
                `;
                tbody.appendChild(tr);
            });

            tableWrapper.appendChild(table);
            contentBox.appendChild(tableWrapper);
        } else if (sec.items) {
            // Grid of items
            const grid = document.createElement("div");
            grid.className = "items-grid";

            sec.items.forEach((item) => {
                const itemEl = createItemElement(item, sec);
                grid.appendChild(itemEl);
            });

            contentBox.appendChild(grid);
        }

        sectionEl.appendChild(titleBar);
        sectionEl.appendChild(contentBox);
        container.appendChild(sectionEl);
    });
}

function createItemElement(item, section) {
    const itemEl = document.createElement("div");
    itemEl.className = "item";
    itemEl.dataset.title = item.title.toLowerCase();
    itemEl.dataset.desc = (item.subtitle || "").toLowerCase();
    itemEl.dataset.keywords = (item.bullets || []).join(" ").toLowerCase();

    const iconSvg = typeof get_icon_svg === "function" ? get_icon_svg(item.icon) : "";

    itemEl.innerHTML = `
        <div class="item-icon" style="background-color: ${section.color}">
            ${iconSvg}
        </div>
        <div class="item-text-container">
            <div class="item-title">${item.title}</div>
            <div class="item-desc">${item.subtitle || ""}</div>
        </div>
    `;

    itemEl.addEventListener("click", () => {
        openModal(item, section);
    });

    return itemEl;
}

function renderFilterPills(container) {
    if (!container || !SECTIONS_DATA) return;
    container.innerHTML = "";

    // "All" pill
    const allPill = document.createElement("div");
    allPill.className = "filter-pill active";
    allPill.textContent = "All Categories";
    allPill.addEventListener("click", () => {
        document.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
        allPill.classList.add("active");
        showAllSections();
    });
    container.appendChild(allPill);

    // Per-section pills
    SECTIONS_DATA.forEach((sec) => {
        const pill = document.createElement("div");
        pill.className = "filter-pill";
        pill.textContent = sec.title;
        pill.addEventListener("click", () => {
            document.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
            pill.classList.add("active");
            filterByCategory(sec.id);
        });
        container.appendChild(pill);
    });
}

function showAllSections() {
    document.querySelectorAll(".section-container").forEach((sec) => {
        sec.style.display = "flex";
    });
}

function filterByCategory(sectionId) {
    document.querySelectorAll(".section-container").forEach((sec) => {
        if (sec.dataset.sectionId === sectionId) {
            sec.style.display = "flex";
            sec.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            sec.style.display = "none";
        }
    });
}

function filterItems(query) {
    const sections = document.querySelectorAll(".section-container");

    sections.forEach((sec) => {
        if (sec.dataset.type === "table") {
            const rows = sec.querySelectorAll(".ranks-table tbody tr");
            let matchingRows = 0;
            rows.forEach((row) => {
                const searchStr = row.dataset.search || "";
                if (!query || searchStr.includes(query)) {
                    row.style.display = "";
                    matchingRows++;
                } else {
                    row.style.display = "none";
                }
            });
            sec.style.display = (!query || matchingRows > 0) ? "flex" : "none";
            return;
        }

        const items = sec.querySelectorAll(".item");
        let visibleCount = 0;

        items.forEach((item) => {
            const title = item.dataset.title || "";
            const desc = item.dataset.desc || "";
            const keywords = item.dataset.keywords || "";

            if (!query || title.includes(query) || desc.includes(query) || keywords.includes(query)) {
                item.style.display = "flex";
                visibleCount++;
            } else {
                item.style.display = "none";
            }
        });

        sec.style.display = visibleCount > 0 ? "flex" : "none";
    });
}

function openModal(item, section) {
    const modal = document.getElementById("modal");
    const modalContainer = document.getElementById("modal-container");
    const modalHeader = document.getElementById("modal-header");
    const modalTitle = document.getElementById("modal-title");
    const modalType = document.getElementById("modal-type");
    const modalSubtitle = document.getElementById("modal-subtitle");
    const modalBullets = document.getElementById("modal-bullets");
    const modalReference = document.getElementById("modal-reference");

    // Inherit the dynamic category color (signature dnd5e-quickref behavior!)
    modalContainer.style.borderColor = section.color;
    modalHeader.style.backgroundColor = section.color;

    modalTitle.textContent = item.title;
    modalType.textContent = item.type || "";
    modalSubtitle.textContent = item.subtitle || "";

    // Bullet points formatted cleanly
    if (item.bullets && item.bullets.length > 0) {
        modalBullets.innerHTML = item.bullets
            .map((b) => `<p>${b}</p>`)
            .join("<hr>");
    } else {
        modalBullets.innerHTML = "";
    }

    modalReference.textContent = item.reference || "Hero's Handbook 3e";

    modal.classList.add("modal-visible");
    document.body.classList.add("modal-open");
}

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.classList.remove("modal-visible");
    }
    document.body.classList.remove("modal-open");
}
