/**
 * Mutants & Masterminds 3e Quick Reference Application
 * Core rendering, modal interactions, calibrated styling, and instant search.
 * Engineered to taste-skills specifications.
 */

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    const mainContainer = document.getElementById("sections-container");
    const filterPillsContainer = document.getElementById("filter-pills");
    const searchInput = document.getElementById("search-input");
    const searchClear = document.getElementById("search-clear");
    const emptyStateClearBtn = document.getElementById("empty-state-clear-btn");
    const modal = document.getElementById("modal");
    const modalBackdrop = document.getElementById("modal-backdrop");
    const modalCloseBtn = document.getElementById("modal-close-btn");

    // 1. Render all sections & items
    renderSections(mainContainer);

    // 2. Render filter pills
    renderFilterPills(filterPillsContainer);

    // 3. Search interactions
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
            clearSearch();
        });
    }

    if (emptyStateClearBtn) {
        emptyStateClearBtn.addEventListener("click", () => {
            clearSearch();
        });
    }

    function clearSearch() {
        if (searchInput) {
            searchInput.value = "";
            searchInput.focus();
        }
        if (searchClear) {
            searchClear.style.display = "none";
        }
        filterItems("");
    }

    // Keyboard shortcuts: '/' to focus search, 'Esc' to close modal
    window.addEventListener("keydown", (e) => {
        if (e.key === "/" && document.activeElement !== searchInput) {
            e.preventDefault();
            if (searchInput) searchInput.focus();
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
        sectionEl.style.borderTop = `2px solid ${sec.color}`;

        // Sleek Section Title Bar
        const titleBar = document.createElement("div");
        titleBar.className = "section-title";
        titleBar.innerHTML = `
            <div class="section-title-left">
                <span class="section-indicator-pip" style="background-color: ${sec.color}; color: ${sec.color};"></span>
                <span class="section-title-text">${sec.title}</span>
            </div>
            <span class="section-limit" style="border-color: ${sec.color}35; color: ${sec.color};">${sec.limit || ""}</span>
        `;

        // Content Container
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
                        <th>Distance</th>
                        <th>Mass</th>
                        <th>Volume</th>
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
            // Modern CSS Grid of items
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
        <div class="item-icon" style="background-color: ${section.color}15; border-color: ${section.color}35; color: ${section.color};">
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

    // "All Categories" pill
    const allPill = document.createElement("div");
    allPill.className = "filter-pill active";
    allPill.textContent = "All Categories";
    allPill.addEventListener("click", () => {
        document.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
        allPill.classList.add("active");
        showAllSections();
    });
    container.appendChild(allPill);

    // Individual category pills
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
    const emptyState = document.getElementById("empty-state");
    if (emptyState) emptyState.style.display = "none";
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
    const emptyState = document.getElementById("empty-state");
    if (emptyState) emptyState.style.display = "none";
}

function filterItems(query) {
    const sections = document.querySelectorAll(".section-container");
    const emptyState = document.getElementById("empty-state");
    const emptyStateDesc = document.getElementById("empty-state-desc");
    let totalVisibleItems = 0;

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
            const isVisible = (!query || matchingRows > 0);
            sec.style.display = isVisible ? "flex" : "none";
            if (isVisible) totalVisibleItems += matchingRows;
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
        totalVisibleItems += visibleCount;
    });

    // Handle Empty State
    if (emptyState) {
        if (totalVisibleItems === 0 && query.length > 0) {
            emptyState.style.display = "block";
            if (emptyStateDesc) {
                emptyStateDesc.textContent = `No rules, actions, or measurements found matching "${query}".`;
            }
        } else {
            emptyState.style.display = "none";
        }
    }
}

function openModal(item, section) {
    const modal = document.getElementById("modal");
    const modalContainer = document.getElementById("modal-container");
    const modalCategoryPip = document.getElementById("modal-category-pip");
    const modalTitle = document.getElementById("modal-title");
    const modalType = document.getElementById("modal-type");
    const modalSubtitle = document.getElementById("modal-subtitle");
    const modalBullets = document.getElementById("modal-bullets");
    const modalReference = document.getElementById("modal-reference");

    // Modern subtle accent border & pip glow
    if (modalContainer) {
        modalContainer.style.borderColor = `${section.color}45`;
        modalContainer.style.boxShadow = `0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 24px ${section.color}18, inset 0 1px 0 rgba(255, 255, 255, 0.08)`;
    }

    if (modalCategoryPip) {
        modalCategoryPip.style.backgroundColor = section.color;
        modalCategoryPip.style.color = section.color;
    }

    if (modalTitle) {
        modalTitle.textContent = item.title;
    }

    if (modalType) {
        modalType.textContent = item.type || "";
        modalType.style.borderColor = `${section.color}40`;
        modalType.style.color = section.color;
    }

    if (modalSubtitle) {
        modalSubtitle.textContent = item.subtitle || "";
    }

    // Bullet points formatted cleanly
    if (modalBullets) {
        if (item.bullets && item.bullets.length > 0) {
            modalBullets.innerHTML = item.bullets
                .map((b) => `<p>${b}</p>`)
                .join("<hr>");
        } else {
            modalBullets.innerHTML = "";
        }
    }

    if (modalReference) {
        modalReference.textContent = item.reference || "Hero's Handbook 3e";
    }

    if (modal) {
        modal.classList.add("modal-visible");
        document.body.classList.add("modal-open");
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.classList.remove("modal-visible");
    }
    document.body.classList.remove("modal-open");
}
