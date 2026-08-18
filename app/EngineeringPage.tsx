import { Icon } from "./Icon";
import { education, experienceYears, facts, timeline } from "./profile";
import { EngineeringDiagram } from "./Visuals";

type Locale = "fr" | "en";

const content = {
  fr: {
    title: "Le niveau technique derrière l’interface.",
    eyebrow: "ENGINEERING PROFILE · ALIASKAR MALABAEV",
    intro: `Je conçois des produits web de bout en bout : systèmes front-end, logique métier, données, intégrations et mise en production. ${experienceYears} ans d’expérience, dont plusieurs années à encadrer techniquement d’autres développeurs.`,
    home: "Retour au portfolio",
    language: "Choisir la langue",
    contact: "Parler d’un projet",
    overviewLabel: "01 — COMPÉTENCES",
    overviewTitle: "Full-stack, au sens complet.",
    overviewText: "La technologie vient après le problème. Mon rôle est de choisir une architecture lisible, de protéger les règles métier et de livrer une interface qui reste simple pour l’utilisateur.",
    capabilities: [
      ["Front-end systems", "React · TypeScript · composants · responsive · accessibilité · performance"],
      ["Back-end & domain logic", "PHP · Laravel · Node.js · API · permissions · validations · règles métier"],
      ["Architecture & data", "MySQL · Redis · files de traitement · modèles de données · intégrations"],
      ["Quality & delivery", "Tests · Docker · Git · CI/CD · observabilité · déploiement statique ou applicatif"],
      ["AI integrations", "Génération assistée · extraction documentaire · PDF vers données structurées · workflows"],
      ["Product engineering", "Cadrage · prototypes · découpage fonctionnel · arbitrages · évolution progressive"],
    ],
    careerLabel: "02 — PARCOURS",
    careerTitle: "Développement, produit et leadership.",
    careerText: "Je n’ai pas seulement écrit du code : j’ai aussi cadré des projets avec des clients et relu celui des autres. C’est ce qui façonne ma façon de concevoir aujourd’hui.",
    problemsLabel: "03 — PROBLÈMES COMPLEXES",
    problemsTitle: "Ce que j’aime résoudre.",
    problems: [
      ["Planning et règles métier", "Faire cohabiter interactions rapides, contraintes opérationnelles, droits utilisateurs et validations sans exposer la complexité à l’écran.", ["Drag & Drop", "Permissions", "State", "Validation"]],
      ["Documents et traitements asynchrones", "Transformer des fichiers en données exploitables, orchestrer des tâches longues et rendre leur progression compréhensible.", ["Queues", "Redis", "PDF", "AI"]],
      ["Interfaces durables", "Construire des systèmes de composants cohérents, accessibles et performants qui restent faciles à faire évoluer.", ["React", "TypeScript", "A11y", "Performance"]],
    ],
    principlesLabel: "04 — FAÇON DE TRAVAILLER",
    principlesTitle: "Pragmatique par défaut.",
    principles: [
      ["01", "Comprendre le domaine", "Les bonnes abstractions commencent par une compréhension précise des utilisateurs et de leurs contraintes."],
      ["02", "Rendre les choix explicites", "Architecture, dette et compromis sont expliqués clairement pour que les décisions restent maîtrisées."],
      ["03", "Livrer par incréments", "Des étapes courtes, testables et démontrables réduisent le risque et permettent d’apprendre plus vite."],
      ["04", "Préserver la maintenabilité", "Le code doit aider la prochaine évolution, pas seulement passer la démo du jour."],
    ],
    stackLabel: "STACK & OUTILS",
    stack: ["React", "TypeScript", "JavaScript", "Node.js", "PHP", "Laravel", "MySQL", "Redis", "Docker", "GitHub Actions", "REST APIs", "CSS"],
    ctaLabel: "UN BESOIN TECHNIQUE OU PRODUIT ?",
    ctaTitle: "Parlons du problème avant de parler de la stack.",
    ctaText: "Je peux intervenir sur une refonte, un produit métier, une intégration ou une mission full-stack plus longue.",
    email: "Écrire à Aliaskar",
    github: "Voir GitHub",
  },
  en: {
    title: "The engineering behind the interface.",
    eyebrow: "ENGINEERING PROFILE · ALIASKAR MALABAEV",
    intro: `I build web products end to end: front-end systems, domain logic, data, integrations and production delivery. ${experienceYears} years of experience, several of them leading other developers technically.`,
    home: "Back to portfolio",
    language: "Choose language",
    contact: "Discuss a project",
    overviewLabel: "01 — CAPABILITIES",
    overviewTitle: "Full-stack, in the complete sense.",
    overviewText: "Technology comes after the problem. My role is to choose a legible architecture, protect business rules and deliver an interface that stays simple for the user.",
    capabilities: [
      ["Front-end systems", "React · TypeScript · components · responsive design · accessibility · performance"],
      ["Back-end & domain logic", "PHP · Laravel · Node.js · APIs · permissions · validation · business rules"],
      ["Architecture & data", "MySQL · Redis · job queues · data modelling · integrations"],
      ["Quality & delivery", "Testing · Docker · Git · CI/CD · observability · static or application deployment"],
      ["AI integrations", "Assisted generation · document extraction · PDF to structured data · workflows"],
      ["Product engineering", "Discovery · prototypes · functional breakdown · trade-offs · progressive delivery"],
    ],
    careerLabel: "02 — CAREER",
    careerTitle: "Development, product and leadership.",
    careerText: "I have not only written code: I have scoped projects with clients and reviewed other people's work. That is what shapes how I design today.",
    problemsLabel: "03 — COMPLEX PROBLEMS",
    problemsTitle: "What I enjoy solving.",
    problems: [
      ["Planning and business rules", "Combining fast interactions, operational constraints, user permissions and validation without exposing that complexity on screen.", ["Drag & Drop", "Permissions", "State", "Validation"]],
      ["Documents and background processing", "Turning files into useful data, orchestrating long-running jobs and making their progress understandable.", ["Queues", "Redis", "PDF", "AI"]],
      ["Durable interfaces", "Building coherent, accessible and fast component systems that remain easy to evolve.", ["React", "TypeScript", "A11y", "Performance"]],
    ],
    principlesLabel: "04 — HOW I WORK",
    principlesTitle: "Pragmatic by default.",
    principles: [
      ["01", "Understand the domain", "Good abstractions begin with a precise understanding of users and their constraints."],
      ["02", "Make choices explicit", "Architecture, debt and trade-offs are explained clearly so decisions remain controlled."],
      ["03", "Deliver in increments", "Short, testable and demonstrable steps reduce risk and make learning faster."],
      ["04", "Protect maintainability", "Code should help the next evolution, not just pass today’s demo."],
    ],
    stackLabel: "STACK & TOOLS",
    stack: ["React", "TypeScript", "JavaScript", "Node.js", "PHP", "Laravel", "MySQL", "Redis", "Docker", "GitHub Actions", "REST APIs", "CSS"],
    ctaLabel: "A TECHNICAL OR PRODUCT NEED?",
    ctaTitle: "Let’s discuss the problem before the stack.",
    ctaText: "I can contribute to a redesign, a business product, an integration or a longer full-stack engagement.",
    email: "Email Aliaskar",
    github: "View GitHub",
  },
} as const;

export function EngineeringPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const home = locale === "fr" ? "/" : "/en/";

  return (
    <main className="engineering-page">
      <header className="engineering-header">
        <a className="brand" href={home}><span className="brand-mark">AM</span><span className="brand-copy"><strong>Aliaskar Malabaev</strong>Full-stack engineering</span></a>
        <div className="engineering-nav">
          <a href={home}><Icon name="left" size={14} /> {copy.home}</a>
          <div className="language-switch" aria-label={copy.language}><a className={locale === "fr" ? "active" : ""} href="/engineering/" hrefLang="fr" aria-current={locale === "fr" ? "page" : undefined}>FR</a><span>/</span><a className={locale === "en" ? "active" : ""} href="/en/engineering/" hrefLang="en" aria-current={locale === "en" ? "page" : undefined}>EN</a></div>
          <a className="header-cta" href="#engineering-contact">{copy.contact} <Icon name="down" /></a>
        </div>
      </header>

      <section className="engineering-hero">
        <p className="eyebrow"><span /> {copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
        <div className="engineering-diagram"><EngineeringDiagram locale={locale} /></div>
        <div className="facts-strip">{facts[locale].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section className="engineering-section capability-section">
        <div className="engineering-section-head"><p className="section-index">{copy.overviewLabel}</p><h2>{copy.overviewTitle}</h2><p>{copy.overviewText}</p></div>
        <div className="capability-grid">{copy.capabilities.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="engineering-section career-section">
        <div className="engineering-section-head"><p className="section-index">{copy.careerLabel}</p><h2>{copy.careerTitle}</h2><p>{copy.careerText}</p></div>
        <div className="timeline">
          {timeline[locale].map(([period, role, detail]) => (
            <article key={period}>
              <p className="timeline-period"><i aria-hidden="true" />{period}</p>
              <h3>{role}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
        <p className="education-note"><span>{education[locale].label}</span><span><strong>{education[locale].degree}</strong><em>{education[locale].note}</em></span></p>
      </section>

      <section className="engineering-section problem-section">
        <div className="engineering-section-head light"><p className="section-index">{copy.problemsLabel}</p><h2>{copy.problemsTitle}</h2></div>
        <div className="problem-list">{copy.problems.map(([title, text, tags], index) => <article key={title as string}><span>CASE / 0{index + 1}</span><h3>{title}</h3><p>{text}</p><div>{(tags as readonly string[]).map((tag) => <i key={tag}>{tag}</i>)}</div></article>)}</div>
      </section>

      <section className="engineering-section principles-section">
        <div className="engineering-section-head"><p className="section-index">{copy.principlesLabel}</p><h2>{copy.principlesTitle}</h2></div>
        <div className="principle-list">{copy.principles.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="stack-strip"><span>{copy.stackLabel}</span><div>{copy.stack.map((item) => <strong key={item}>{item}</strong>)}</div></section>

      <section className="engineering-cta" id="engineering-contact"><p className="section-index">{copy.ctaLabel}</p><h2>{copy.ctaTitle}</h2><p>{copy.ctaText}</p><div><a className="button button-acid" href={`${home}#contact`}>{copy.email} <Icon name="upRight" /></a><a className="text-link engineering-github" href="https://github.com/amalabaev" target="_blank" rel="noreferrer">{copy.github} <Icon name="upRight" /></a></div></section>

      <footer className="engineering-footer"><a href={home}><Icon name="left" size={14} /> {copy.home}</a><span>© 2026 Aliaskar Malabaev</span><a href="#top"><Icon name="up" size={14} /> TOP</a></footer>
    </main>
  );
}
