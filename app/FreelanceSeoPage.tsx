type Locale = "fr" | "en";

const content = {
  fr: {
    eyebrow: "DÉVELOPPEUR FULL-STACK FREELANCE · FRANCE & REMOTE",
    title: "Développeur full-stack freelance pour vos projets web ambitieux.",
    intro: "Je suis Aliaskar Malabaev. J’accompagne les PME, startups et équipes produit dans la refonte de sites web, la création d’applications métier et l’intégration d’automatisations utiles.",
    introSecond: "Un seul interlocuteur pour comprendre le besoin, concevoir l’expérience, développer le front-end et le back-end, puis mettre le produit en ligne.",
    home: "Retour au portfolio",
    contact: "Parler de votre projet",
    language: "Choisir la langue",
    proof: ["React & TypeScript", "PHP & Laravel", "Node.js & API", "MySQL & Redis", "Docker & CI/CD"],
    servicesLabel: "01 — EXPERTISE FULL-STACK",
    servicesTitle: "De l’interface à la logique métier.",
    servicesText: "J’interviens là où le design, le produit et la technique doivent rester cohérents. La stack est choisie selon le problème, pas l’inverse.",
    services: [
      ["Refonte de site web", "Repenser un site vieillissant, clarifier son message, améliorer son référencement naturel et livrer une interface rapide, responsive et accessible.", ["Audit", "UX / UI", "React", "SEO technique"]],
      ["Application web sur mesure", "Transformer un processus métier en outil fiable : tableaux de bord, planification, permissions, workflows, formulaires complexes et gestion de données.", ["Front-end", "Back-end", "MySQL", "Règles métier"]],
      ["Automatisation, API & IA", "Connecter des services, supprimer des tâches répétitives et intégrer l’IA quand elle apporte une valeur mesurable au produit.", ["API REST", "Queues", "Redis", "IA"]],
    ],
    fitLabel: "02 — POUR QUELS BESOINS ?",
    fitTitle: "Un développeur freelance quand il faut avancer sans multiplier les intermédiaires.",
    fits: [
      ["Votre site ne reflète plus votre entreprise", "Le positionnement, le design ou la technologie ont vieilli et freinent la confiance."],
      ["Votre équipe perd du temps sur un processus manuel", "Un outil métier sur mesure peut fiabiliser les données et simplifier les opérations."],
      ["Votre produit existant doit évoluer", "Une fonctionnalité, une intégration ou une refonte technique doit être livrée proprement."],
      ["Vous avez besoin d’un profil autonome", "Une personne capable de cadrer, proposer, développer, tester et communiquer avec des profils non techniques."],
    ],
    stackLabel: "03 — TECHNOLOGIES",
    stackTitle: "Une stack moderne, adaptée au contexte.",
    stackLead: "Je travaille notamment avec React, TypeScript, JavaScript et CSS pour les interfaces ; PHP, Laravel et Node.js pour la logique serveur ; MySQL et Redis pour les données et les traitements ; Docker, GitHub Actions et les tests pour fiabiliser la livraison.",
    stackNote: "Je peux construire un projet neuf ou reprendre une base existante. L’objectif reste une solution compréhensible, maintenable et proportionnée à votre activité.",
    workLabel: "04 — EXPÉRIENCE",
    workTitle: "Des landing pages aux applications métier complexes.",
    workText: "Mon expérience couvre notamment une plateforme de planification opérationnelle, un produit d’analyse documentaire assisté par IA et la conception complète de ce portfolio bilingue.",
    workCta: "Voir les réalisations détaillées",
    methodLabel: "05 — COLLABORATION",
    methodTitle: "Une mission lisible du premier échange à la production.",
    steps: [
      ["01", "Diagnostic", "Objectifs, utilisateurs, contraintes et état de l’existant."],
      ["02", "Proposition", "Périmètre, priorités, approche technique et étapes de validation."],
      ["03", "Réalisation", "Développement progressif avec démonstrations régulières."],
      ["04", "Livraison", "Tests, mise en ligne, documentation et accompagnement."],
    ],
    faqLabel: "06 — QUESTIONS FRÉQUENTES",
    faqTitle: "Avant de travailler ensemble.",
    faqs: [
      ["Quels projets peut prendre en charge un développeur full-stack freelance ?", "Je peux réaliser une refonte de site, une application métier, un tableau de bord, une intégration API, une automatisation ou intervenir sur un produit web existant."],
      ["Travaillez-vous uniquement avec React et Node.js ?", "Non. J’utilise React et TypeScript côté interface, mais aussi PHP et Laravel côté serveur. Le choix dépend de l’existant, du besoin et de la maintenabilité attendue."],
      ["Pouvez-vous travailler avec une entreprise située en France ?", "Oui. Je travaille en français et en anglais, avec des entreprises en France et à distance. Les échanges, démonstrations et validations peuvent être organisés entièrement en ligne."],
      ["Pouvez-vous reprendre un projet déjà développé ?", "Oui. La mission commence alors par un audit ciblé du code, de l’architecture et des priorités afin de sécuriser la reprise avant toute modification importante."],
      ["Comment obtenir un prix et un délai ?", "Décrivez le contexte et l’objectif du projet. Après un premier échange, je peux proposer un périmètre, des étapes et une estimation adaptés au niveau d’incertitude."],
    ],
    ctaLabel: "VOTRE PROJET",
    ctaTitle: "Besoin d’un développeur full-stack freelance ?",
    ctaText: "Présentez-moi votre site, votre produit ou le processus que vous voulez améliorer. Je vous répondrai avec un premier avis concret.",
    ctaButton: "Faire analyser mon besoin",
    footer: "Aliaskar Malabaev · Développeur full-stack freelance",
  },
  en: {
    eyebrow: "FREELANCE FULL-STACK DEVELOPER · FRANCE & REMOTE",
    title: "A freelance full-stack developer for ambitious web projects.",
    intro: "I’m Aliaskar Malabaev. I help SMEs, startups and product teams redesign websites, build business applications and integrate useful automation.",
    introSecond: "One point of contact to understand the need, design the experience, develop the front end and back end, then ship the product.",
    home: "Back to portfolio",
    contact: "Discuss your project",
    language: "Choose language",
    proof: ["React & TypeScript", "PHP & Laravel", "Node.js & APIs", "MySQL & Redis", "Docker & CI/CD"],
    servicesLabel: "01 — FULL-STACK EXPERTISE",
    servicesTitle: "From interface to business logic.",
    servicesText: "I work where design, product and engineering need to remain coherent. The stack is selected for the problem, not the other way around.",
    services: [
      ["Website redesign", "Rethink an ageing website, clarify its message, improve organic search foundations and deliver a fast, responsive and accessible interface.", ["Audit", "UX / UI", "React", "Technical SEO"]],
      ["Bespoke web application", "Turn a business process into a reliable tool: dashboards, planning, permissions, workflows, complex forms and data management.", ["Front end", "Back end", "MySQL", "Business rules"]],
      ["Automation, APIs & AI", "Connect services, remove repetitive tasks and integrate AI where it brings measurable product value.", ["REST APIs", "Queues", "Redis", "AI"]],
    ],
    fitLabel: "02 — WHEN TO CALL",
    fitTitle: "A freelance developer when you need progress without layers of intermediaries.",
    fits: [
      ["Your website no longer reflects the company", "Its positioning, design or technology has aged and is reducing trust."],
      ["Your team loses time to a manual process", "A bespoke business tool can make data reliable and operations simpler."],
      ["An existing product needs to evolve", "A feature, integration or technical redesign needs to be delivered cleanly."],
      ["You need an autonomous contributor", "Someone able to define, propose, build, test and communicate with non-technical stakeholders."],
    ],
    stackLabel: "03 — TECHNOLOGIES",
    stackTitle: "A modern stack, adapted to the context.",
    stackLead: "I work with React, TypeScript, JavaScript and CSS for interfaces; PHP, Laravel and Node.js for server-side logic; MySQL and Redis for data and processing; Docker, GitHub Actions and tests for dependable delivery.",
    stackNote: "I can build a new product or take over an existing codebase. The goal remains a solution that is understandable, maintainable and proportionate to the business.",
    workLabel: "04 — EXPERIENCE",
    workTitle: "From landing pages to complex business applications.",
    workText: "My experience includes an operational planning platform, an AI-assisted document analysis product and the complete creation of this bilingual portfolio.",
    workCta: "See detailed selected work",
    methodLabel: "05 — COLLABORATION",
    methodTitle: "A clear engagement from first conversation to production.",
    steps: [
      ["01", "Diagnosis", "Goals, users, constraints and the current state of the product."],
      ["02", "Proposal", "Scope, priorities, technical approach and review stages."],
      ["03", "Delivery", "Progressive development with regular demonstrations."],
      ["04", "Launch", "Testing, production release, documentation and follow-up."],
    ],
    faqLabel: "06 — FREQUENTLY ASKED QUESTIONS",
    faqTitle: "Before we work together.",
    faqs: [
      ["What projects can a freelance full-stack developer handle?", "I can deliver a website redesign, business application, dashboard, API integration or automation, or contribute to an existing web product."],
      ["Do you only work with React and Node.js?", "No. I use React and TypeScript for interfaces, as well as PHP and Laravel on the server. The choice depends on the codebase, the need and expected maintainability."],
      ["Can you work with a remote or international team?", "Yes. I work in French and English with companies in France and remotely. Discussions, demonstrations and approvals can all take place online."],
      ["Can you take over an existing project?", "Yes. The engagement then begins with a focused review of the code, architecture and priorities before any significant change is made."],
      ["How do I get a price and timeline?", "Describe the context and objective. After an initial discussion, I can suggest a scope, stages and estimate suited to the level of uncertainty."],
    ],
    ctaLabel: "YOUR PROJECT",
    ctaTitle: "Looking for a freelance full-stack developer?",
    ctaText: "Tell me about your website, product or the process you want to improve. I’ll reply with a useful initial assessment.",
    ctaButton: "Get an initial review",
    footer: "Aliaskar Malabaev · Freelance full-stack developer",
  },
} as const;

export function FreelanceSeoPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const home = locale === "fr" ? "/" : "/en";
  const current = locale === "fr" ? "/developpeur-full-stack-freelance" : "/en/freelance-full-stack-developer";
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=amalabaev%40gmail.com&su=${encodeURIComponent(locale === "fr" ? "Projet full-stack freelance" : "Freelance full-stack project")}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://amalabaev.com${current}#service`,
        name: locale === "fr" ? "Développement web full-stack freelance" : "Freelance full-stack web development",
        provider: { "@id": "https://amalabaev.com/#aliaskar-malabaev" },
        areaServed: "France",
        availableChannel: { "@type": "ServiceChannel", serviceUrl: `https://amalabaev.com${current}` },
        serviceType: ["Website redesign", "Bespoke web application", "API integration", "Automation"],
      },
      {
        "@type": "FAQPage",
        mainEntity: copy.faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: locale === "fr" ? "Accueil" : "Home", item: `https://amalabaev.com${home === "/" ? "" : home}` },
          { "@type": "ListItem", position: 2, name: copy.title, item: `https://amalabaev.com${current}` },
        ],
      },
    ],
  };

  return (
    <main className="seo-page" id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="engineering-header seo-header">
        <a className="brand" href={home}><span className="brand-mark">AM</span><span className="brand-copy">Aliaskar Malabaev<br />Full-stack freelance</span></a>
        <div className="engineering-nav">
          <a href={home}>← {copy.home}</a>
          <div className="language-switch" aria-label={copy.language}>
            <a className={locale === "fr" ? "active" : ""} href="/developpeur-full-stack-freelance" hrefLang="fr" aria-current={locale === "fr" ? "page" : undefined}>FR</a><span>/</span>
            <a className={locale === "en" ? "active" : ""} href="/en/freelance-full-stack-developer" hrefLang="en" aria-current={locale === "en" ? "page" : undefined}>EN</a>
          </div>
          <a className="header-cta" href="#seo-contact">{copy.contact} ↓</a>
        </div>
      </header>

      <section className="seo-hero">
        <div><p className="eyebrow"><span /> {copy.eyebrow}</p><h1>{copy.title}</h1></div>
        <div className="seo-hero-copy"><p>{copy.intro}</p><p>{copy.introSecond}</p><a className="button button-dark" href="#seo-contact">{copy.contact} <span aria-hidden="true">↓</span></a></div>
      </section>

      <section className="seo-proof" aria-label="Technologies">{copy.proof.map((item) => <strong key={item}>{item}</strong>)}</section>

      <section className="seo-section">
        <div className="seo-section-heading"><p className="section-index">{copy.servicesLabel}</p><h2>{copy.servicesTitle}</h2><p>{copy.servicesText}</p></div>
        <div className="seo-service-grid">{copy.services.map(([title, text, tags], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><div>{tags.map((tag) => <i key={tag}>{tag}</i>)}</div></article>)}</div>
      </section>

      <section className="seo-section seo-fit">
        <div className="seo-section-heading"><p className="section-index">{copy.fitLabel}</p><h2>{copy.fitTitle}</h2></div>
        <div className="seo-fit-grid">{copy.fits.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="seo-section seo-stack">
        <div className="seo-section-heading"><p className="section-index">{copy.stackLabel}</p><h2>{copy.stackTitle}</h2></div>
        <div className="seo-stack-copy"><p>{copy.stackLead}</p><p>{copy.stackNote}</p></div>
      </section>

      <section className="seo-work-band">
        <p className="section-index">{copy.workLabel}</p><h2>{copy.workTitle}</h2><p>{copy.workText}</p><a className="text-link" href={`${home}#work`}>{copy.workCta} <span aria-hidden="true">→</span></a>
      </section>

      <section className="seo-section seo-method">
        <div className="seo-section-heading"><p className="section-index">{copy.methodLabel}</p><h2>{copy.methodTitle}</h2></div>
        <div className="seo-step-grid">{copy.steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="seo-section seo-faq">
        <div className="seo-section-heading"><p className="section-index">{copy.faqLabel}</p><h2>{copy.faqTitle}</h2></div>
        <div className="faq-list">{copy.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="engineering-cta" id="seo-contact"><p className="section-index">{copy.ctaLabel}</p><h2>{copy.ctaTitle}</h2><p>{copy.ctaText}</p><div><a className="button button-acid" href={gmail} target="_blank" rel="noreferrer">{copy.ctaButton} ↗</a><a className="text-link engineering-github" href={home}>← {copy.home}</a></div></section>

      <footer className="engineering-footer"><a href={home}>← {copy.home}</a><span>{copy.footer}</span><a href="#top">↑ TOP</a></footer>
    </main>
  );
}
