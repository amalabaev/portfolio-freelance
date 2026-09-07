import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Icon } from "./Icon";
import { experienceYears } from "./profile";

type Locale = "fr" | "en";

const content = {
  fr: {
    eyebrow: `DÉVELOPPEUR FULL-STACK FREELANCE · ${experienceYears} ANS D’EXPÉRIENCE · FRANCE & REMOTE`,
    title: "Développeur full-stack freelance : du besoin à la livraison.",
    intro: `Je suis Aliaskar Malabaev, développeur full-stack avec ${experienceYears} ans d’expérience. J’accompagne les PME, startups et équipes produit dans la refonte de sites web, la création d’applications métier et l’intégration d’automatisations utiles.`,
    introSecond: "Développeur, puis chef de projet, puis responsable d’équipe front-end : un seul interlocuteur pour comprendre le besoin, concevoir l’expérience, développer le front-end et le back-end, puis mettre le produit en ligne.",
    home: "Retour au portfolio",
    contact: "Parler de votre projet",
    proof: [`${experienceYears} ans d’expérience`, "Front-end + back-end", "Ex-Team Lead front", "France & remote", "FR · EN · RU"],
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
    stackLabel: "03 — LIVRABLES",
    stackTitle: "Vous repartez avec les clés du projet.",
    stackLead: "Le périmètre est convenu avant le développement : parcours et maquettes à valider, code source versionné, vérifications des fonctions essentielles, mise en ligne et documentation des accès et de la configuration.",
    stackNote: "Les prestations de maintenance, les évolutions et les frais de services tiers sont précisés séparément. La livraison comprend une transmission pour vous permettre de comprendre et de faire évoluer votre outil.",
    methodLabel: "04 — COLLABORATION",
    methodTitle: "Une mission lisible du premier échange à la production.",
    steps: [
      ["01", "Diagnostic", "Objectifs, utilisateurs, contraintes et état de l’existant."],
      ["02", "Proposition", "Périmètre, priorités, approche technique et étapes de validation."],
      ["03", "Réalisation", "Développement progressif avec démonstrations régulières."],
      ["04", "Livraison", "Tests, mise en ligne, documentation et accompagnement."],
    ],
    faqLabel: "05 — QUESTIONS FRÉQUENTES",
    faqTitle: "Avant de travailler ensemble.",
    faqs: [
      ["Quels projets peut prendre en charge un développeur full-stack freelance ?", "Je peux réaliser une refonte de site, une application métier, un tableau de bord, une intégration API, une automatisation ou intervenir sur un produit web existant."],
      ["Travaillez-vous uniquement avec React et Node.js ?", "Non. J’utilise React et TypeScript côté interface, mais aussi PHP et Laravel côté serveur. Le choix dépend de l’existant, du besoin et de la maintenabilité attendue."],
      ["Pouvez-vous travailler avec une entreprise située en France ?", "Oui. Je travaille en français et en anglais, avec des entreprises en France et à distance. Les échanges, démonstrations et validations peuvent être organisés entièrement en ligne."],
      ["Pouvez-vous reprendre un projet déjà développé ?", "Oui. La mission commence par un audit ciblé du code et des priorités. Pour une refonte de site, la migration des contenus, les redirections et la continuité des fonctionnalités sont intégrées au cadrage."],
      ["Comment obtenir un prix et un délai ?", "Décrivez votre objectif, l’existant et vos contraintes. L’estimation précise les livrables, les étapes de validation, les hypothèses et les exclusions. Hébergement, abonnements et maintenance sont identifiés séparément ; un changement de périmètre fait l’objet d’un nouvel accord."],
    ],
    ctaLabel: "VOTRE PROJET",
    ctaTitle: "Besoin d’un développeur full-stack freelance ?",
    ctaText: "Présentez-moi votre site, votre produit ou le processus que vous voulez améliorer. Je vous répondrai avec une première estimation du périmètre et des prochaines étapes — directement, sans intermédiaire.",
    ctaButton: "Demander une estimation",
  },
  en: {
    eyebrow: `FREELANCE FULL-STACK DEVELOPER · ${experienceYears} YEARS' EXPERIENCE · FRANCE & REMOTE`,
    title: "A freelance full-stack developer, from brief to handover.",
    intro: `I’m Aliaskar Malabaev, a full-stack developer with ${experienceYears} years of experience. I help SMEs, startups and product teams redesign websites, build business applications and integrate useful automation.`,
    introSecond: "Developer, then project manager, then front-end team lead: one point of contact to understand the need, design the experience, develop the front end and back end, then ship the product.",
    home: "Back to portfolio",
    contact: "Discuss your project",
    proof: [`${experienceYears} years' experience`, "Front-end + back-end", "Former front-end lead", "France & remote", "FR · EN · RU"],
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
    stackLabel: "03 — HANDOVER",
    stackTitle: "The project is yours to run and evolve.",
    stackLead: "The scope is agreed before development: journeys and designs for review, versioned source code, checks of essential features, launch, and documentation of access and configuration.",
    stackNote: "Maintenance, future changes and third-party service fees are specified separately. Handover helps you understand, operate and evolve your tool.",
    methodLabel: "04 — COLLABORATION",
    methodTitle: "A clear engagement from first conversation to production.",
    steps: [
      ["01", "Diagnosis", "Goals, users, constraints and the current state of the product."],
      ["02", "Proposal", "Scope, priorities, technical approach and review stages."],
      ["03", "Delivery", "Progressive development with regular demonstrations."],
      ["04", "Launch", "Testing, production release, documentation and follow-up."],
    ],
    faqLabel: "05 — FREQUENTLY ASKED QUESTIONS",
    faqTitle: "Before we work together.",
    faqs: [
      ["What projects can a freelance full-stack developer handle?", "I can deliver a website redesign, business application, dashboard, API integration or automation, or contribute to an existing web product."],
      ["Do you only work with React and Node.js?", "No. I use React and TypeScript for interfaces, as well as PHP and Laravel on the server. The choice depends on the codebase, the need and expected maintainability."],
      ["Can you work with a remote or international team?", "Yes. I work in French and English with companies in France and remotely. Discussions, demonstrations and approvals can all take place online."],
      ["Can you take over an existing project?", "Yes. The engagement begins with a focused review of the code and priorities. For a website redesign, content migration, redirects and continuity of existing features are part of the scoping discussion."],
      ["How do I get a price and timeline?", "Describe your goal, current setup and constraints. The estimate sets out deliverables, review stages, assumptions and exclusions. Hosting, subscriptions and maintenance are identified separately; scope changes require a new agreement."],
    ],
    ctaLabel: "YOUR PROJECT",
    ctaTitle: "Looking for a freelance full-stack developer?",
    ctaText: "Tell me about your website, product or the process you want to improve. I’ll reply with an initial estimate of scope and next steps — directly, without an intermediary.",
    ctaButton: "Request an estimate",
  },
} as const;

export function FreelanceSeoPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const home = locale === "fr" ? "/" : "/en/";
  const current = locale === "fr" ? "/developpeur-full-stack-freelance/" : "/en/freelance-full-stack-developer/";
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
    <><SiteHeader locale={locale} current={locale === "fr" ? "/developpeur-full-stack-freelance/" : "/en/freelance-full-stack-developer/"} alternate={locale === "fr" ? "/en/freelance-full-stack-developer/" : "/developpeur-full-stack-freelance/"} /><main className="seo-page" id="main-content" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />


      <section className="seo-hero">
        <div><p className="eyebrow"><span /> {copy.eyebrow}</p><h1>{copy.title}</h1></div>
        <div className="seo-hero-copy"><p>{copy.intro}</p><p>{copy.introSecond}</p><a className="button button-dark" href={`${home}#contact`}>{copy.contact} <Icon name="down" /></a></div>
      </section>

      <section className="seo-proof" aria-label={locale === "fr" ? "Le profil en bref" : "Profile at a glance"}>{copy.proof.map((item) => <strong key={item}>{item}</strong>)}</section>

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
        <div className="seo-stack-copy"><p>{copy.stackLead}</p><p>{copy.stackNote}</p><a className="text-link" href={`${home}#work`}>{locale === "fr" ? "Voir des exemples de projets" : "See project examples"} <Icon name="right" /></a></div>
      </section>

      <section className="seo-section seo-method">
        <div className="seo-section-heading"><p className="section-index">{copy.methodLabel}</p><h2>{copy.methodTitle}</h2></div>
        <div className="seo-step-grid">{copy.steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="seo-section seo-faq">
        <div className="seo-section-heading"><p className="section-index">{copy.faqLabel}</p><h2>{copy.faqTitle}</h2></div>
        <div className="faq-list">{copy.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="engineering-cta" id="seo-contact"><p className="section-index">{copy.ctaLabel}</p><h2>{copy.ctaTitle}</h2><p>{copy.ctaText}</p><div><a className="button button-acid" href={`${home}#contact`}>{copy.ctaButton} <Icon name="upRight" /></a><a className="text-link engineering-github" href={home}><Icon name="left" size={14} /> {copy.home}</a></div></section>


    </main><SiteFooter locale={locale} /></>
  );
}
