import { CopyEmailButton } from "./CopyEmailButton";
import { ProjectBriefForm } from "./ProjectBriefForm";

type Locale = "fr" | "en";

const email = "amalabaev@gmail.com";

const content = {
  fr: {
    backToTop: "Retour en haut",
    brandRole: "Développeur full-stack indépendant",
    navigation: "Navigation principale",
    nav: ["Réalisations", "Services", "Méthode"],
    menu: "Menu",
    language: "Choisir la langue",
    copyEmail: "Copier l’adresse",
    copiedEmail: "Adresse copiée",
    headerCta: "Faire analyser mon site",
    eyebrow: "Développeur full-stack · produit · design",
    heroTitle: "Votre entreprise a évolué.",
    heroEmphasis: "Votre site devrait le montrer.",
    heroText: "Je refonds les sites vieillissants et je développe des outils web sur mesure — avec le même niveau d’exigence pour le design, le produit et la technique.",
    startProject: "Faire analyser mon site",
    seeWork: "Voir mes réalisations",
    available: "Disponible pour de nouveaux projets",
    reply: "Premier retour sous 24 heures",
    browserUrl: "votre-projet.fr",
    browserKicker: "Une présence web à votre niveau",
    browserWords: ["Crédible.", "Utile.", "Évolutive."],
    score: [["Design", "singulier"], ["Métier", "compris"], ["Code", "solide"]],
    noteTop: "Pensé produit",
    noteBottom: "Construit sur mesure",
    proofLabel: "Ce que je réunis",
    proof: ["Développement full-stack", "Produits métier", "Design sur mesure", "Français · English"],
    workLabel: "01 — RÉALISATIONS",
    workTitle: "Des interfaces soignées.",
    workEmphasis: "Des systèmes sérieux derrière.",
    workText: "Trois projets qui montrent l’étendue du travail : comprendre un métier, structurer un produit et livrer une expérience claire.",
    workRole: "Rôle",
    workFocus: "Enjeux travaillés",
    workStack: "Stack",
    works: [
      {
        index: "01 / 03",
        kind: "APPLICATION MÉTIER · PROJET ANONYMISÉ",
        title: "Plateforme de planification opérationnelle",
        text: "Une application complexe pour gérer ressources, affectations, absences, plannings et contraintes opérationnelles.",
        role: "Développement full-stack",
        focus: "Planning interactif · Drag & Drop · règles métier · permissions · validations",
        stack: ["PHP", "JavaScript", "MySQL", "Docker"],
        visual: "planning",
        link: null,
        linkLabel: null,
      },
      {
        index: "02 / 03",
        kind: "PRODUIT IA · CARDZAP",
        title: "Transformer des documents en données utiles",
        text: "Un produit web qui orchestre l’analyse de PDF, la génération assistée par IA et la restitution de données structurées.",
        role: "Architecture produit & développement",
        focus: "Traitements asynchrones · génération IA · PDF vers données structurées",
        stack: ["Laravel", "React", "Redis", "MySQL"],
        visual: "cardzap",
        link: null,
        linkLabel: null,
      },
      {
        index: "03 / 03",
        kind: "IDENTITÉ & DÉVELOPPEMENT · AMALABAEV.COM",
        title: "Une vitrine de freelance sans template",
        text: "Une identité éditoriale bilingue, responsive et performante, conçue puis développée intégralement sur mesure.",
        role: "Direction, design & développement",
        focus: "Identité personnalisée · bilingue · responsive · déploiement automatisé",
        stack: ["React 19", "TypeScript", "Node.js", "CSS sur mesure"],
        visual: "portfolio",
        link: "https://github.com/amalabaev/portfolio-freelance",
        linkLabel: "Voir le code",
      },
    ],
    servicesLabel: "02 — SERVICES",
    servicesTitle: "Un partenaire technique.",
    servicesEmphasis: "Trois façons d’avancer.",
    servicesText: "Du premier diagnostic à un produit complet, la solution reste proportionnée à votre vrai besoin.",
    services: [
      { number: "01", title: "Refonte de site web", text: "Pour transformer un site daté ou peu crédible en une présence claire, rapide et convaincante.", tags: ["Positionnement", "UX / UI", "SEO"] },
      { number: "02", title: "Application web sur mesure", text: "Pour digitaliser un processus métier qu’un thème ou un CMS générique ne peut pas correctement résoudre.", tags: ["React", "Back-end", "Données"] },
      { number: "03", title: "Automatisation & intégrations", text: "Pour connecter vos outils, supprimer les tâches répétitives et intégrer des API ou de l’IA avec discernement.", tags: ["API", "IA", "Workflows"] },
    ],
    whyLabel: "03 — POURQUOI MOI",
    whyTitle: "Le regard produit.",
    whyEmphasis: "La profondeur technique.",
    whyText: "Vous n’avez pas à arbitrer entre une belle interface et un développement robuste.",
    reasons: [
      ["01", "Comprendre avant de construire", "Je pars de votre activité, de vos utilisateurs et de la décision que le produit doit faciliter."],
      ["02", "Un seul interlocuteur", "La stratégie, l’interface et le développement restent cohérents du premier échange à la mise en ligne."],
      ["03", "Prévoir la suite", "Je construis une base maintenable, documentée et capable d’évoluer avec votre activité."],
    ],
    engineeringCta: "Voir mon profil technique",
    labLabel: "04 — CREATIVE LAB",
    labTitle: "Explorer une identité.",
    labEmphasis: "Servir un objectif.",
    labText: "Des directions libres pour montrer comment un langage visuel peut changer selon le métier sans perdre en clarté.",
    conceptStamp: ["PISTE", "CRÉATIVE"],
    concepts: [
      { type: "Architecture", index: "A—01", title: "Faire ressentir les espaces avant la première visite.", note: "Portfolio éditorial · Projets administrables", visual: "architecture", visualLabels: ["MAISON 08", "FAÇADE SUD", "PLAN / 2026", "ÉCHELLE 1:100"] },
      { type: "Santé", index: "S—02", title: "Rassurer, orienter et faciliter la prise de rendez-vous.", note: "Clarté mobile · Informations pratiques", visual: "health", visualLabels: ["BONJOUR", "VOTRE PROCHAIN RENDEZ-VOUS", "09:30", "TÉLÉCONSULTATION"] },
      { type: "Conseil B2B", index: "C—03", title: "Rendre une expertise complexe immédiatement lisible.", note: "Offre structurée · Demandes qualifiées", visual: "consulting", visualLabels: ["TABLEAU DE BORD", "CROISSANCE", "LEADS QUALIFIÉS", "TRIMESTRE ACTUEL"] },
    ],
    labDisclaimer: "Directions exploratoires — elles démontrent une approche créative et ne sont pas attribuées à des clients.",
    methodLabel: "05 — MÉTHODE",
    methodTitle: "Simple à suivre.",
    methodEmphasis: "Solide à l’arrivée.",
    steps: [
      ["01", "Cadrer", "Un échange ciblé pour comprendre le contexte, les priorités et les personnes que vous voulez convaincre."],
      ["02", "Concevoir", "Une direction visuelle et fonctionnelle pour valider l’idée avant d’investir dans sa construction."],
      ["03", "Développer", "Une réalisation par étapes, avec des démonstrations et des points de validation clairs."],
      ["04", "Lancer", "Mise en ligne, vérifications, transmission et suivi. Le produit est prêt à travailler."],
    ],
    promiseTitle: "Pas de jargon. Pas d’agence entre nous.",
    promiseText: "Vous échangez directement avec la personne qui pense et développe votre produit.",
    promiseSide: ["VALIDATIONS", "PAR ÉTAPES"],
    aboutLabel: "06 — À PROPOS",
    aboutIntro: "Je suis Aliaskar, développeur full-stack indépendant.",
    aboutText: "J’aime rendre les sujets complexes",
    aboutEmphasis: "simples à utiliser et difficiles à oublier.",
    aboutSmall: "Mon terrain de jeu va de l’identité d’une page publique aux règles métier d’une application complète. Cette double culture me permet de parler aussi bien de confiance, de conversion et de responsive que d’architecture, de données et de maintenabilité.",
    aboutProof: ["Full-stack", "Orienté produit", "Bilingue FR / EN"],
    contactLabel: "UN PROJET À FAIRE AVANCER ?",
    contactTitle: "Commençons par",
    contactEmphasis: "un premier avis concret.",
    contactText: "Décrivez brièvement votre activité, votre site ou votre idée. Je vous répondrai avec une première lecture, sans jargon et sans engagement.",
    emailAlternative: "Ou écrivez directement à",
    footerBrand: "Design & systèmes web sur mesure",
    footerRole: "Développeur full-stack freelance",
  },
  en: {
    backToTop: "Back to top",
    brandRole: "Independent full-stack developer",
    navigation: "Main navigation",
    nav: ["Selected work", "Services", "Process"],
    menu: "Menu",
    language: "Choose language",
    copyEmail: "Copy email address",
    copiedEmail: "Email copied",
    headerCta: "Get a website review",
    eyebrow: "Full-stack developer · product · design",
    heroTitle: "Your business has evolved.",
    heroEmphasis: "Your website should show it.",
    heroText: "I redesign ageing websites and build bespoke web tools — with the same care for design, product thinking and technical quality.",
    startProject: "Get a website review",
    seeWork: "See selected work",
    available: "Available for new projects",
    reply: "Initial reply within 24 hours",
    browserUrl: "your-project.com",
    browserKicker: "A web presence at your level",
    browserWords: ["Credible.", "Useful.", "Built to evolve."],
    score: [["Distinct", "design"], ["Business", "understood"], ["Solid", "code"]],
    noteTop: "Product-minded",
    noteBottom: "Built from scratch",
    proofLabel: "What I bring together",
    proof: ["Full-stack development", "Business products", "Bespoke design", "Français · English"],
    workLabel: "01 — SELECTED WORK",
    workTitle: "Considered interfaces.",
    workEmphasis: "Serious systems behind them.",
    workText: "Three projects showing the full scope of the work: understanding a business, shaping a product and delivering a clear experience.",
    workRole: "Role",
    workFocus: "Problems addressed",
    workStack: "Stack",
    works: [
      {
        index: "01 / 03",
        kind: "BUSINESS APPLICATION · ANONYMISED PROJECT",
        title: "Operational workforce planning platform",
        text: "A complex application for managing resources, assignments, absences, schedules and operational constraints.",
        role: "Full-stack development",
        focus: "Interactive planning · Drag & Drop · business rules · permissions · validation",
        stack: ["PHP", "JavaScript", "MySQL", "Docker"],
        visual: "planning",
        link: null,
        linkLabel: null,
      },
      {
        index: "02 / 03",
        kind: "AI PRODUCT · CARDZAP",
        title: "Turning documents into useful data",
        text: "A web product orchestrating PDF analysis, AI-assisted generation and the delivery of structured data.",
        role: "Product architecture & development",
        focus: "Background processing · AI generation · PDF to structured data",
        stack: ["Laravel", "React", "Redis", "MySQL"],
        visual: "cardzap",
        link: null,
        linkLabel: null,
      },
      {
        index: "03 / 03",
        kind: "IDENTITY & DEVELOPMENT · AMALABAEV.COM",
        title: "A freelance portfolio without a template",
        text: "A bilingual, responsive and fast editorial identity, designed and developed entirely from scratch.",
        role: "Direction, design & development",
        focus: "Custom identity · bilingual · responsive · automated deployment",
        stack: ["React 19", "TypeScript", "Node.js", "Custom CSS"],
        visual: "portfolio",
        link: "https://github.com/amalabaev/portfolio-freelance",
        linkLabel: "View the code",
      },
    ],
    servicesLabel: "02 — SERVICES",
    servicesTitle: "One technical partner.",
    servicesEmphasis: "Three ways forward.",
    servicesText: "From an initial diagnosis to a complete product, the solution stays proportionate to the real need.",
    services: [
      { number: "01", title: "Website redesign", text: "Turn a dated or unconvincing website into a clear, fast and credible presence.", tags: ["Positioning", "UX / UI", "SEO"] },
      { number: "02", title: "Bespoke web application", text: "Digitise a business process that a generic theme or CMS cannot properly support.", tags: ["React", "Back-end", "Data"] },
      { number: "03", title: "Automation & integrations", text: "Connect tools, remove repetitive work and integrate APIs or AI where they genuinely help.", tags: ["APIs", "AI", "Workflows"] },
    ],
    whyLabel: "03 — WHY ME",
    whyTitle: "Product judgement.",
    whyEmphasis: "Technical depth.",
    whyText: "You should not have to choose between a beautiful interface and robust engineering.",
    reasons: [
      ["01", "Understand before building", "I start with your business, your users and the decision the product needs to make easier."],
      ["02", "One point of contact", "Strategy, interface and development remain coherent from the first conversation to launch."],
      ["03", "Plan for what comes next", "I build a maintainable, documented foundation that can evolve with your business."],
    ],
    engineeringCta: "View my engineering profile",
    labLabel: "04 — CREATIVE LAB",
    labTitle: "Explore an identity.",
    labEmphasis: "Serve an objective.",
    labText: "Independent directions showing how a visual language can shift with the field while keeping the experience clear.",
    conceptStamp: ["CREATIVE", "DIRECTION"],
    concepts: [
      { type: "Architecture", index: "A—01", title: "Make people feel the space before their first visit.", note: "Editorial portfolio · Editable projects", visual: "architecture", visualLabels: ["HOUSE 08", "SOUTH FACADE", "PLAN / 2026", "SCALE 1:100"] },
      { type: "Healthcare", index: "H—02", title: "Reassure, guide and make booking an appointment effortless.", note: "Mobile clarity · Practical information", visual: "health", visualLabels: ["HELLO", "YOUR NEXT APPOINTMENT", "09:30", "VIDEO CONSULTATION"] },
      { type: "B2B Consulting", index: "C—03", title: "Make complex expertise immediately understandable.", note: "Structured services · Qualified enquiries", visual: "consulting", visualLabels: ["DASHBOARD", "GROWTH", "QUALIFIED LEADS", "CURRENT QUARTER"] },
    ],
    labDisclaimer: "Exploratory directions — they demonstrate a creative approach and are not attributed to clients.",
    methodLabel: "05 — PROCESS",
    methodTitle: "Simple to follow.",
    methodEmphasis: "Solid when delivered.",
    steps: [
      ["01", "Define", "A focused conversation to understand the context, priorities and the people you need to convince."],
      ["02", "Design", "A visual and functional direction to validate the idea before investing in its construction."],
      ["03", "Build", "Development in clear stages, with demonstrations and visible review points along the way."],
      ["04", "Launch", "Publishing, final checks, handover and follow-up. The product is ready to work."],
    ],
    promiseTitle: "No jargon. No agency in between.",
    promiseText: "You work directly with the person thinking through and developing your product.",
    promiseSide: ["VALIDATED", "IN STAGES"],
    aboutLabel: "06 — ABOUT",
    aboutIntro: "I’m Aliaskar, an independent full-stack developer.",
    aboutText: "I like making complex subjects",
    aboutEmphasis: "simple to use and hard to forget.",
    aboutSmall: "My work spans from the identity of a public page to the business rules of a complete application. That dual perspective lets me discuss trust, conversion and responsive design just as comfortably as architecture, data and maintainability.",
    aboutProof: ["Full-stack", "Product-minded", "Bilingual FR / EN"],
    contactLabel: "A PROJECT TO MOVE FORWARD?",
    contactTitle: "Let’s start with",
    contactEmphasis: "a useful first opinion.",
    contactText: "Briefly describe your business, website or idea. I’ll reply with an initial assessment, without jargon or obligation.",
    emailAlternative: "Or email me directly at",
    footerBrand: "Bespoke web design & systems",
    footerRole: "Freelance full-stack developer",
  },
} as const;

function ConceptVisual({ concept, stamp }: { concept: (typeof content.fr.concepts)[number] | (typeof content.en.concepts)[number]; stamp: readonly [string, string] }) {
  return (
    <div className={`concept-visual visual-${concept.visual}`} aria-hidden="true">
      <span className="concept-stamp">{stamp[0]}<br />{stamp[1]}</span>
      {concept.visual === "architecture" && <>
        <div className="architecture-key"><strong>{concept.visualLabels[0]}</strong><span>{concept.visualLabels[1]}</span><span>{concept.visualLabels[2]}</span></div>
        <div className="architecture-blueprint"><span className="arch-sun" /><div className="arch-volume arch-volume-main"><i /><i /><i /></div><div className="arch-volume arch-volume-side"><i /><i /></div><span className="arch-scale">{concept.visualLabels[3]}</span></div>
        <span className="concept-signature">{concept.type}</span>
      </>}
      {concept.visual === "health" && <>
        <div className="health-ambient"><i /><i /><i /></div>
        <div className="health-appointment"><div className="health-header"><span>+</span><strong>{concept.visualLabels[0]}</strong><i>•••</i></div><p>{concept.visualLabels[1]}</p><div className="health-slot"><strong>{concept.visualLabels[2]}</strong><span>{concept.visualLabels[3]}</span><i>✓</i></div><div className="health-pulse"><i /><i /><i /><i /><i /></div></div>
        <span className="concept-signature">{concept.type}</span>
      </>}
      {concept.visual === "consulting" && <>
        <div className="consulting-dashboard"><div className="consulting-header"><strong>{concept.visualLabels[0]}</strong><span>Q3 / 26</span></div><div className="consulting-kpis"><div><span>{concept.visualLabels[1]}</span><strong>+38%</strong></div><div><span>{concept.visualLabels[2]}</span><strong>24</strong></div></div><div className="consulting-chart"><div className="chart-bars"><i /><i /><i /><i /><i /><i /></div><div className="chart-line"><i /><i /><i /><i /><i /></div><span>{concept.visualLabels[3]}</span></div></div>
        <span className="concept-signature">{concept.type}</span>
      </>}
    </div>
  );
}

export function PortfolioPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const home = locale === "fr" ? "/" : "/en";
  const engineering = locale === "fr" ? "/engineering" : "/en/engineering";
  const directEmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  const navLinks = [
    ["#work", copy.nav[0]],
    ["#services", copy.nav[1]],
    ["#method", copy.nav[2]],
  ] as const;

  return (
    <main>
      <header className="site-header">
        <a className="brand" href={`${home}#top`} aria-label={copy.backToTop}>
          <span className="brand-mark">AM</span>
          <span className="brand-copy">Aliaskar Malabaev<br />{copy.brandRole}</span>
        </a>
        <nav aria-label={copy.navigation}>{navLinks.map(([href, label]) => <a href={href} key={href}>{label}</a>)}</nav>
        <div className="header-actions">
          <div className="language-switch" aria-label={copy.language}>
            {/* Full document navigation switches between independently exported locales. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a className={locale === "fr" ? "active" : ""} href="/" hrefLang="fr" aria-current={locale === "fr" ? "page" : undefined}>FR</a><span>/</span>
            <a className={locale === "en" ? "active" : ""} href="/en" hrefLang="en" aria-current={locale === "en" ? "page" : undefined}>EN</a>
          </div>
          <a className="header-cta" href="#contact">{copy.headerCta} <span aria-hidden="true">↓</span></a>
          <details className="mobile-menu">
            <summary>{copy.menu}</summary>
            <div>{navLinks.map(([href, label]) => <a href={href} key={href}>{label}</a>)}<a href={engineering}>{copy.engineeringCta}</a></div>
          </details>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> {copy.eyebrow}</p>
          <h1>{copy.heroTitle}<br /><em>{copy.heroEmphasis}</em></h1>
          <p className="hero-lede">{copy.heroText}</p>
          <div className="hero-actions"><a className="button button-dark" href="#contact">{copy.startProject} <span aria-hidden="true">↓</span></a><a className="text-link" href="#work">{copy.seeWork} <span aria-hidden="true">↓</span></a></div>
          <div className="availability"><span className="status-dot" /><span><strong>{copy.available}</strong><br />{copy.reply}</span></div>
        </div>
        <div className="hero-stage" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="browser-card"><div className="browser-bar"><span className="browser-dots"><i /><i /><i /></span><span className="browser-url">{copy.browserUrl}</span><span className="browser-live">LIVE</span></div><div className="browser-body"><p className="browser-kicker">{copy.browserKicker}</p><p className="browser-title">{copy.browserWords[0]}<br /><span>{copy.browserWords[1]}</span><br />{copy.browserWords[2]}</p><div className="browser-score">{copy.score.map((label, index) => <div key={label[0]}><strong>0{index + 1}</strong><span>{label[0]}<br />{label[1]}</span></div>)}</div></div></div>
          <div className="stage-note note-top">{copy.noteTop} <b>✦</b></div><div className="stage-note note-bottom"><b>↳</b> {copy.noteBottom}</div>
        </div>
      </section>

      <section className="proof-strip" aria-label={copy.proofLabel}><span>{copy.proofLabel}</span>{copy.proof.map((item) => <strong key={item}>{item}<i aria-hidden="true">✦</i></strong>)}</section>

      <section className="work section" id="work">
        <div className="section-heading"><p className="section-index">{copy.workLabel}</p><h2>{copy.workTitle}<br /><em>{copy.workEmphasis}</em></h2><p>{copy.workText}</p></div>
        <div className="work-list">
          {copy.works.map((work) => <article className="work-card" key={work.index}>
            <div className={`work-visual work-${work.visual}`} aria-hidden="true">
              {work.visual === "planning" && <><div className="planning-head"><span>PLANNING / W32</span><i>● EN LIGNE</i></div><div className="planning-sidebar"><i /><i /><i /><i /></div><div className="planning-grid"><span /><span /><span /><span /><span /><span /><b className="shift shift-one">08:00 — 12:00</b><b className="shift shift-two">13:30 — 18:00</b><b className="shift shift-three">ABSENCE</b></div><strong className="work-monogram">OPS</strong></>}
              {work.visual === "cardzap" && <><div className="doc-stack"><span>PDF</span><i /><i /><i /><i /></div><div className="ai-path"><span>01</span><b>EXTRACT</b><i>→</i><span>02</span><b>STRUCTURE</b><i>→</i><span>03</span><b>GENERATE</b></div><div className="data-card"><span>STRUCTURED DATA</span><strong>{"{ AI }"}</strong><i>READY</i></div></>}
              {work.visual === "portfolio" && <><div className="mini-browser"><span>amalabaev.com</span><h4>{locale === "fr" ? "Votre entreprise a évolué." : "Your business has evolved."}</h4><p>FULL-STACK · PRODUCT · DESIGN</p></div><span className="portfolio-orb">AM</span><i className="portfolio-note">LIVE / 2026</i></>}
            </div>
            <div className="work-copy"><div className="work-kicker"><span>{work.index}</span><span>{work.kind}</span></div><h3>{work.title}</h3><p className="work-summary">{work.text}</p><dl><div><dt>{copy.workRole}</dt><dd>{work.role}</dd></div><div><dt>{copy.workFocus}</dt><dd>{work.focus}</dd></div><div><dt>{copy.workStack}</dt><dd className="tag-row">{work.stack.map((item) => <span key={item}>{item}</span>)}</dd></div></dl>{work.link && <a className="text-link" href={work.link} target="_blank" rel="noreferrer">{work.linkLabel} <span aria-hidden="true">↗</span></a>}</div>
          </article>)}
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading"><p className="section-index">{copy.servicesLabel}</p><h2>{copy.servicesTitle}<br /><em>{copy.servicesEmphasis}</em></h2><p>{copy.servicesText}</p></div>
        <div className="service-grid">{copy.services.map((service) => <article className="service-card" key={service.number}><div className="service-number">{service.number}</div><h3>{service.title}</h3><p>{service.text}</p><ul>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
      </section>

      <section className="why section">
        <div className="section-heading section-heading-light"><p className="section-index">{copy.whyLabel}</p><h2>{copy.whyTitle}<br /><em>{copy.whyEmphasis}</em></h2><p>{copy.whyText}</p></div>
        <div className="reason-grid">{copy.reasons.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <a className="button button-acid engineering-button" href={engineering}>{copy.engineeringCta} <span aria-hidden="true">↗</span></a>
      </section>

      <section className="concept-section section" id="lab">
        <div className="section-heading section-heading-light"><p className="section-index">{copy.labLabel}</p><h2>{copy.labTitle}<br /><em>{copy.labEmphasis}</em></h2><p>{copy.labText}</p></div>
        <div className="concept-list">{copy.concepts.map((concept) => <article className="concept-card" key={concept.index}><ConceptVisual concept={concept} stamp={copy.conceptStamp} /><div className="concept-meta"><div><span>{concept.index}</span><span>{concept.type}</span></div><h3>{concept.title}</h3><p>{concept.note}</p></div></article>)}</div>
        <p className="concept-disclaimer">{copy.labDisclaimer}</p>
      </section>

      <section className="process section" id="method">
        <div className="section-heading process-heading"><p className="section-index">{copy.methodLabel}</p><h2>{copy.methodTitle}<br /><em>{copy.methodEmphasis}</em></h2></div>
        <div className="steps">{copy.steps.map(([number, title, text]) => <article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true">↘</i></article>)}</div>
        <div className="promise-strip"><span className="promise-mark">AM</span><p><strong>{copy.promiseTitle}</strong><br />{copy.promiseText}</p><span className="promise-side">{copy.promiseSide[0]}<br />{copy.promiseSide[1]}</span></div>
      </section>

      <section className="about section">
        <div className="about-label"><p className="section-index">{copy.aboutLabel}</p><div className="portrait-type" aria-hidden="true"><span>A</span><i>+</i><span>M</span></div></div>
        <div className="about-copy"><p className="about-intro">{copy.aboutIntro}</p><p className="about-large">{copy.aboutText} <em>{copy.aboutEmphasis}</em></p><p className="about-small">{copy.aboutSmall}</p><div className="about-proof">{copy.aboutProof.map((item) => <span key={item}>{item}</span>)}</div><a className="text-link" href={engineering}>{copy.engineeringCta} <span aria-hidden="true">→</span></a></div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-intro"><p className="section-index">{copy.contactLabel}</p><h2>{copy.contactTitle}<br /><em>{copy.contactEmphasis}</em></h2><p>{copy.contactText}</p></div>
        <ProjectBriefForm locale={locale} />
        <div className="contact-alternative"><span>{copy.emailAlternative}</span><a href={directEmail} target="_blank" rel="noreferrer">{email}</a><CopyEmailButton email={email} idleLabel={copy.copyEmail} copiedLabel={copy.copiedEmail} /></div>
      </section>

      <footer><a className="brand footer-brand" href={`${home}#top`}><span className="brand-mark">AM</span><span>{copy.footerBrand}<br />React · Node.js</span></a><p>© 2026 Aliaskar Malabaev<br />{copy.footerRole}</p><div><a href={engineering}>{copy.engineeringCta} →</a><a href="https://github.com/amalabaev" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>
    </main>
  );
}
