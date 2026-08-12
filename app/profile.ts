/**
 * Career facts quoted across the site — single source of truth.
 *
 * ⚠️ VÉRIFIER AVANT MISE EN LIGNE. Ces entrées décrivent des rôles et des
 * contextes, jamais des noms d'employeurs : c'est plus sûr, ça reste cohérent
 * avec les projets anonymisés du portfolio, et ça évite de figer sur une page
 * publique une chronologie qui n'aurait pas été revalidée.
 *
 * Le nombre d'années est calculé au build (le site est reconstruit à chaque
 * push) plutôt qu'écrit en dur, pour qu'il ne vieillisse pas en silence.
 */

export const CAREER_START_YEAR = 2019;

export const experienceYears = new Date().getFullYear() - CAREER_START_YEAR;

/** period · role · what the role actually involved. Newest first. */
export const timeline = {
  fr: [
    ["2023 → aujourd’hui", "Développeur full-stack · produits SaaS & métier", "Applications de planification et de gestion : règles de disponibilité, permissions, validations, architecture front et back."],
    ["2020 → 2023", "Développeur full-stack, puis responsable d’équipe front-end", "Développement produit, revue du code des collègues, coordination technique et accompagnement des développeurs."],
    ["2019 → 2020", "Chef de projet & développeur", "Cadrage, relation client, coordination d’équipe et livraison de projets web."],
    ["2019", "Développeur front-end · Paris", "Intégration responsive, JavaScript, premiers projets web professionnels."],
  ],
  en: [
    ["2023 → today", "Full-stack developer · SaaS & business products", "Planning and management applications: availability rules, permissions, validation, front-end and back-end architecture."],
    ["2020 → 2023", "Full-stack developer, then front-end team lead", "Product development, reviewing colleagues' code, technical coordination and mentoring developers."],
    ["2019 → 2020", "Project manager & developer", "Scoping, client relationships, team coordination and project delivery."],
    ["2019", "Front-end developer · Paris", "Responsive integration, JavaScript, first professional web projects."],
  ],
} as const;

export const education = {
  fr: {
    label: "FORMATION",
    degree: "Master Informatique — Université Pierre et Marie Curie / Sorbonne, Paris",
    note: "Avant de me spécialiser dans le web : Python, machine learning, réseaux et développement mobile.",
  },
  en: {
    label: "EDUCATION",
    degree: "M.Sc. Computer Science — Université Pierre et Marie Curie / Sorbonne, Paris",
    note: "Before specialising in the web: Python, machine learning, networking and mobile development.",
  },
} as const;

/** The scannable facts, used on the engineering profile. */
export const facts = {
  fr: [
    [`${experienceYears} ans`, "d’expérience web professionnelle"],
    ["3 langues", "français · anglais · russe"],
    ["Front + back", "du composant à la règle métier"],
    ["Leadership", "projet, équipe et revue de code"],
  ],
  en: [
    [`${experienceYears} years`, "of professional web experience"],
    ["3 languages", "French · English · Russian"],
    ["Front + back", "from component to business rule"],
    ["Leadership", "projects, teams and code review"],
  ],
} as const;
