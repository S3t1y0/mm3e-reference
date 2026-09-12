/**
 * Open Source Icons for Mutants & Masterminds 3e Quick Reference
 * Powered by Font Awesome 6 (Free) CDN
 */

window.ICONS = {
    // Combat & Attack
    "attack-close": `<i class="fa-solid fa-hand-fist"></i>`,
    "attack-ranged": `<i class="fa-solid fa-crosshairs"></i>`,
    "aid": `<i class="fa-solid fa-handshake-angle"></i>`,
    "charge": `<i class="fa-solid fa-bolt-lightning"></i>`,
    "defend": `<i class="fa-solid fa-shield-halved"></i>`,
    "disarm": `<i class="fa-solid fa-hand"></i>`,
    "grab": `<i class="fa-solid fa-handcuffs"></i>`,
    "smash": `<i class="fa-solid fa-hammer"></i>`,
    "trip": `<i class="fa-solid fa-person-falling"></i>`,
    "ready": `<i class="fa-solid fa-stopwatch"></i>`,

    // Movement
    "move": `<i class="fa-solid fa-person-running"></i>`,
    "acrobatics": `<i class="fa-solid fa-person-skating"></i>`,
    "crawl": `<i class="fa-solid fa-person-walking-arrow-right"></i>`,
    "escape": `<i class="fa-solid fa-lock-open"></i>`,
    "manipulate": `<i class="fa-solid fa-cube"></i>`,
    "stand": `<i class="fa-solid fa-person-arrow-up-from-line"></i>`,

    // Free & Reaction
    "drop": `<i class="fa-solid fa-arrow-down"></i>`,
    "speak": `<i class="fa-solid fa-comment-dots"></i>`,
    "cease": `<i class="fa-solid fa-power-off"></i>`,
    "counter": `<i class="fa-solid fa-rotate-left"></i>`,
    "triggered": `<i class="fa-solid fa-atom"></i>`,
    "deflect": `<i class="fa-solid fa-shield"></i>`,

    // Maneuvers
    "accurate": `<i class="fa-solid fa-bullseye"></i>`,
    "all-out": `<i class="fa-solid fa-fire"></i>`,
    "power-attack": `<i class="fa-solid fa-dumbbell"></i>`,
    "defensive": `<i class="fa-solid fa-shield-heart"></i>`,
    "slam": `<i class="fa-solid fa-meteor"></i>`,
    "surprise": `<i class="fa-solid fa-mask"></i>`,
    "team": `<i class="fa-solid fa-users"></i>`,

    // Conditions
    "condition": `<i class="fa-solid fa-triangle-exclamation"></i>`,
    "dazed": `<i class="fa-solid fa-face-dizzy"></i>`,
    "staggered": `<i class="fa-solid fa-heart-pulse"></i>`,
    "incapacitated": `<i class="fa-solid fa-skull"></i>`,
    "paralyzed": `<i class="fa-solid fa-lock"></i>`,
    "defenseless": `<i class="fa-solid fa-user-slash"></i>`,
    "vulnerable": `<i class="fa-solid fa-shield-halved"></i>`,
    "impaired": `<i class="fa-solid fa-triangle-exclamation"></i>`,
    "hindered": `<i class="fa-solid fa-shoe-prints"></i>`,
    "brain": `<i class="fa-solid fa-brain"></i>`,
    "blind": `<i class="fa-solid fa-eye-slash"></i>`,
    "prone": `<i class="fa-solid fa-person-falling-burst"></i>`,

    // Damage & Toughness
    "damage": `<i class="fa-solid fa-heart-crack"></i>`,
    "bruised": `<i class="fa-solid fa-bandage"></i>`,
    "toughness": `<i class="fa-solid fa-shield-halved"></i>`,

    // Hero Points & Extra Effort
    "hero-point": `<i class="fa-solid fa-star"></i>`,
    "extra-effort": `<i class="fa-solid fa-bolt"></i>`,
    "reroll": `<i class="fa-solid fa-dice-d20"></i>`,
    "power-stunt": `<i class="fa-solid fa-wand-magic-sparkles"></i>`,

    // Fallback
    "default": `<i class="fa-solid fa-circle-question"></i>`
};

window.get_icon_svg = function(iconName) {
    return window.ICONS[iconName] || window.ICONS["default"];
};

window.get_icon_html = function(iconName) {
    return window.ICONS[iconName] || window.ICONS["default"];
};
