import { Icon, Spark } from "./Icon";
import { PlanningVisual } from "./Visuals";

type Locale = "fr" | "en";

const content = {
  fr: {
    back: "Retour au portfolio",
    language: "English version",
    contact: "Parler d’un projet",
    eyebrow: "ÉTUDE DE CAS · APPLICATION MÉTIER ANONYMISÉE",
    title: "Rendre une planification complexe directe à utiliser.",
    intro: "Une plateforme opérationnelle où un déplacement visuel doit rester cohérent avec les disponibilités, les permissions, les validations et les règles métier.",
    facts: [
      ["Rôle", "Développement full-stack"],
      ["Périmètre", "Produit métier · front & back"],
      ["Stack", "PHP · JavaScript · MySQL · Docker"],
      ["Confidentialité", "Interface et contexte anonymisés"],
    ],
    contextLabel: "01 — CONTEXTE",
    contextTitle: "Planifier des ressources sans perdre la réalité du terrain.",
    contextText: "L’application réunit les ressources, affectations, absences et contraintes opérationnelles dans un même espace de travail. L’enjeu n’était pas seulement d’afficher un planning : chaque action devait rester valide pour les bonnes personnes, au bon moment et selon les règles du métier.",
    challengeLabel: "02 — PROBLÈME",
    challengeTitle: "Une interaction simple. Plusieurs règles derrière.",
    challengeText: "Un glisser-déposer paraît immédiat dans l’interface. Côté système, il peut pourtant déclencher des contrôles de disponibilité, de permission, de cohérence et de validation. Le vrai défi consistait à préserver la simplicité du geste sans masquer les conséquences utiles à l’utilisateur.",
    constraints: ["Disponibilités et absences", "Permissions selon le profil", "Règles d’affectation", "Validation et cohérence des données"],
    solutionLabel: "03 — APPROCHE",
    solutionTitle: "Mettre la complexité dans le système, pas dans le geste.",
    solutions: [
      ["Interaction directe", "Le planning reste l’espace principal : les ressources et affectations se manipulent là où elles sont comprises."],
      ["Validation centralisée", "L’interface guide l’action tandis que les règles métier garantissent la cohérence côté application."],
      ["États explicites", "Les refus, exceptions et étapes de validation sont rendus lisibles au lieu de laisser l’utilisateur deviner."],
    ],
    outcomeLabel: "04 — RÉSULTAT DE CONCEPTION",
    outcomeTitle: "Un workflow métier ramené à une interaction directe.",
    outcomeText: "L’expérience permet de travailler visuellement sur le planning tout en conservant les garde-fous nécessaires derrière l’interface. Le produit paraît simple à manipuler parce que la complexité a été structurée, pas supprimée.",
    confidentiality: "Par respect de la confidentialité, cette étude de cas décrit le problème, mon rôle et l’approche sans exposer de données, d’écrans ni de résultats propriétaires.",
    ctaLabel: "UN PRODUIT MÉTIER À SIMPLIFIER ?",
    ctaTitle: "Parlons du problème avant de parler de technologie.",
    ctaText: "Décrivez-moi le processus, les règles ou les outils qui ralentissent votre équipe. Je vous répondrai avec une première estimation du périmètre et des prochaines étapes.",
    ctaButton: "Demander une estimation",
  },
  en: {
    back: "Back to portfolio",
    language: "Version française",
    contact: "Discuss a project",
    eyebrow: "CASE STUDY · ANONYMISED BUSINESS APPLICATION",
    title: "Making complex workforce planning direct to use.",
    intro: "An operational platform where a visual move still has to respect availability, permissions, validation steps and business rules.",
    facts: [
      ["Role", "Full-stack development"],
      ["Scope", "Business product · front end & back end"],
      ["Stack", "PHP · JavaScript · MySQL · Docker"],
      ["Confidentiality", "Interface and context anonymised"],
    ],
    contextLabel: "01 — CONTEXT",
    contextTitle: "Planning resources without losing operational reality.",
    contextText: "The application brings resources, assignments, absences and operational constraints into one workspace. The challenge was not simply to display a schedule: every action had to remain valid for the right people, at the right time and under the relevant business rules.",
    challengeLabel: "02 — PROBLEM",
    challengeTitle: "One simple interaction. Several rules behind it.",
    challengeText: "Drag and drop feels immediate in the interface. Behind the scenes, it can trigger availability, permission, consistency and validation checks. The real challenge was to preserve the simplicity of the gesture without hiding the consequences users need to understand.",
    constraints: ["Availability and absence", "Role-based permissions", "Assignment rules", "Data validation and consistency"],
    solutionLabel: "03 — APPROACH",
    solutionTitle: "Keep complexity in the system, not in the gesture.",
    solutions: [
      ["Direct interaction", "The planning board stays central: resources and assignments are handled where their context is visible."],
      ["Centralised validation", "The interface guides the action while business rules preserve consistency within the application."],
      ["Explicit states", "Rejections, exceptions and approval steps are made readable instead of leaving users to guess."],
    ],
    outcomeLabel: "04 — DESIGN OUTCOME",
    outcomeTitle: "A business workflow reduced to a direct interaction.",
    outcomeText: "Users can work visually on the schedule while the product retains the safeguards required behind the interface. It feels straightforward because the complexity has been structured, not removed.",
    confidentiality: "To respect confidentiality, this case study describes the problem, my role and the approach without exposing proprietary data, screens or business results.",
    ctaLabel: "A BUSINESS PRODUCT TO SIMPLIFY?",
    ctaTitle: "Let’s discuss the problem before the technology.",
    ctaText: "Tell me about the process, rules or tools slowing your team down. I’ll reply with an initial estimate of scope and sensible next steps.",
    ctaButton: "Request an estimate",
  },
} as const;

export function PlanningCaseStudy({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const home = locale === "fr" ? "/" : "/en";
  const alternate = locale === "fr" ? "/en/work/operational-planning" : "/work/operational-planning";

  return (
    <main className="case-study-page">
      <header className="engineering-header">
        <a className="brand" href={home} aria-label={copy.back}>
          <span className="brand-mark">AM</span>
          <span className="brand-copy"><strong>Aliaskar Malabaev</strong>{copy.back}</span>
        </a>
        <nav className="engineering-nav" aria-label="Case study navigation">
          <a href={alternate}>{copy.language}</a>
          <a className="header-cta" href={`${home}#contact`}>{copy.contact} <Icon name="upRight" /></a>
        </nav>
      </header>

      <section className="case-study-hero">
        <p className="eyebrow"><span /> {copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="case-study-lede">{copy.intro}</p>
        <dl className="case-study-facts">
          {copy.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      </section>

      <section className="case-study-visual" aria-label={copy.contextTitle}>
        <div><PlanningVisual locale={locale} /></div>
      </section>

      <section className="case-study-section case-study-context">
        <p className="section-index">{copy.contextLabel}</p>
        <div><h2>{copy.contextTitle}</h2><p>{copy.contextText}</p></div>
      </section>

      <section className="case-study-section case-study-challenge">
        <p className="section-index">{copy.challengeLabel}</p>
        <div>
          <h2>{copy.challengeTitle}</h2>
          <p>{copy.challengeText}</p>
          <ul>{copy.constraints.map((item) => <li key={item}><Spark />{item}</li>)}</ul>
        </div>
      </section>

      <section className="case-study-solution">
        <div className="case-study-solution-head"><p className="section-index">{copy.solutionLabel}</p><h2>{copy.solutionTitle}</h2></div>
        <div className="case-study-solution-grid">
          {copy.solutions.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="case-study-outcome">
        <p className="section-index">{copy.outcomeLabel}</p>
        <h2>{copy.outcomeTitle}</h2>
        <p>{copy.outcomeText}</p>
        <aside>{copy.confidentiality}</aside>
      </section>

      <section className="engineering-cta case-study-cta">
        <p className="section-index">{copy.ctaLabel}</p>
        <h2>{copy.ctaTitle}</h2>
        <p>{copy.ctaText}</p>
        <div><a className="button button-acid" href={`${home}#contact`}>{copy.ctaButton} <Icon name="upRight" /></a><a className="text-link engineering-github" href={`${home}#work`}><Icon name="left" size={14} /> {copy.back}</a></div>
      </section>
    </main>
  );
}
