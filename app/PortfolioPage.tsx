import { CopyEmailButton } from "./CopyEmailButton";

type Locale = "fr" | "en";

const email = "amalabaev@gmail.com";

const content = {
  fr: {
    backToTop: "Retour en haut",
    brandRole: "Développeur indépendant",
    navigation: "Navigation principale",
    nav: ["Expertise", "Concepts", "Méthode"],
    language: "Choisir la langue",
    contactSubject: "Mon projet de site vitrine",
    contactBody: "Bonjour Aliaskar,\n\nJe souhaite vous parler de mon projet :\n\n",
    copyEmail: "Copier l’adresse",
    copiedEmail: "Adresse copiée",
    headerCta: "Parler du projet",
    eyebrow: "Développeur web full-stack freelance",
    heroTitle: "Votre activité mérite mieux qu’un site",
    heroEmphasis: "« en construction ».",
    heroText: "Je conçois des sites vitrines rapides, modernes et faciles à faire évoluer — pour inspirer confiance et donner envie de vous contacter.",
    startProject: "Démarrer un projet",
    seeApproach: "Voir mon approche",
    available: "Disponible pour de nouveaux projets",
    reply: "Réponse sous 24 heures",
    stageLabel: "Aperçu d’une méthode de conception web",
    browserUrl: "votre-site.fr",
    browserKicker: "Votre nouvelle vitrine",
    browserWords: ["Claire.", "Rapide.", "Mémorable."],
    score: [["Message", "juste"], ["Mobile", "fluide"], ["Contact", "évident"]],
    noteTop: "Design singulier",
    noteBottom: "Pensé pour convertir",
    tickerLabel: "Compétences clés",
    ticker: ["DESIGN SUR MESURE", "REACT + NODE.JS", "RESPONSIVE", "SEO", "PERFORMANCE", "DESIGN SUR MESURE"],
    expertiseLabel: "01 — EXPERTISE",
    expertiseTitle: "Je construis le site.",
    expertiseEmphasis: "Vous gardez le contrôle.",
    expertiseText: "De la première idée à la mise en ligne, un seul interlocuteur et une méthode lisible.",
    services: [
      { number: "01", title: "Direction & conversion", text: "Une page d’accueil claire, un univers visuel singulier et un parcours qui transforme l’attention en prise de contact.", tags: ["Positionnement", "UX / UI", "Responsive"] },
      { number: "02", title: "Développement full-stack", text: "Un site React rapide, fiable et proprement construit, avec les fonctionnalités réellement utiles à votre activité.", tags: ["React", "Node.js", "Intégrations"] },
      { number: "03", title: "Mise en ligne & autonomie", text: "Je m’occupe des détails techniques et vous livre une base simple à faire évoluer, sans dépendance inutile.", tags: ["Performance", "SEO", "Suivi"] },
    ],
    conceptsLabel: "02 — DIRECTIONS CRÉATIVES",
    conceptsTitle: "Un site qui ressemble",
    conceptsEmphasis: "à votre métier.",
    conceptsText: "Quelques pistes exploratoires pour montrer comment une identité peut servir un objectif concret.",
    conceptStamp: ["CONCEPT", "EXPLORATOIRE"],
    concepts: [
      { type: "Architecture", index: "A—01", title: "Faire ressentir les espaces avant la première visite.", note: "Portfolio éditorial · Projets administrables", visual: "architecture", visualLabels: ["MAISON 08", "FAÇADE SUD", "PLAN / 2026", "ÉCHELLE 1:100"] },
      { type: "Santé", index: "S—02", title: "Rassurer, orienter et faciliter la prise de rendez-vous.", note: "Clarté mobile · Informations pratiques", visual: "health", visualLabels: ["BONJOUR", "VOTRE PROCHAIN RENDEZ-VOUS", "09:30", "TÉLÉCONSULTATION"] },
      { type: "Conseil B2B", index: "C—03", title: "Rendre une expertise complexe immédiatement lisible.", note: "Offre structurée · Demandes qualifiées", visual: "consulting", visualLabels: ["TABLEAU DE BORD", "CROISSANCE", "LEADS QUALIFIÉS", "TRIMESTRE ACTUEL"] },
    ],
    conceptDisclaimer: "Ces directions sont des démonstrations créatives, pas des réalisations attribuées à des clients.",
    methodLabel: "03 — MÉTHODE",
    methodTitle: "Simple à suivre.",
    methodEmphasis: "Solide à l’arrivée.",
    steps: [
      ["01", "Cadrer", "Un échange court pour comprendre votre activité, vos priorités et les personnes que vous voulez convaincre."],
      ["02", "Concevoir", "Une première direction visuelle privée pour valider l’idée avant d’aller plus loin."],
      ["03", "Développer", "Une construction par étapes, avec des points de validation clairs et visibles."],
      ["04", "Lancer", "Mise en ligne, vérifications et prise en main. Votre vitrine est prête à travailler."],
    ],
    promiseTitle: "Pas de jargon. Pas d’agence entre nous.",
    promiseText: "Vous échangez directement avec la personne qui conçoit et développe votre site.",
    promiseSide: ["VALIDATIONS", "PAR ÉTAPES"],
    aboutLabel: "04 — À PROPOS",
    aboutIntroStart: "Je suis",
    aboutIntroEnd: "développeur full-stack indépendant.",
    aboutText: "J’aide les petites entreprises et les professionnels à transformer une présence web provisoire ou datée en une vitrine",
    aboutEmphasis: "crédible, utile et vivante.",
    aboutSmall: "Plutôt que de vous montrer un portfolio générique, je préfère partir de votre métier et vous proposer une première direction concrète. Nous ne poursuivons que si elle vous paraît juste.",
    github: "Voir mon GitHub",
    contactLabel: "UN PROJET EN TÊTE ?",
    contactTitle: "Votre site peut commencer",
    contactEmphasis: "à convaincre dès maintenant.",
    contactText: "Parlez-moi de votre activité et de ce que votre site devrait enfin accomplir.",
    write: "Écrire à Aliaskar",
    footerBrand: "Sites web sur mesure",
    footerRole: "Développeur web full-stack freelance",
  },
  en: {
    backToTop: "Back to top",
    brandRole: "Independent developer",
    navigation: "Main navigation",
    nav: ["Expertise", "Concepts", "Process"],
    language: "Choose language",
    contactSubject: "My website project",
    contactBody: "Hello Aliaskar,\n\nI would like to tell you about my project:\n\n",
    copyEmail: "Copy email address",
    copiedEmail: "Email copied",
    headerCta: "Discuss your project",
    eyebrow: "Freelance full-stack web developer",
    heroTitle: "Your business deserves more than an",
    heroEmphasis: "“under construction” website.",
    heroText: "I design fast, modern websites that are easy to evolve — built to inspire trust and turn attention into genuine enquiries.",
    startProject: "Start a project",
    seeApproach: "See my approach",
    available: "Available for new projects",
    reply: "Reply within 24 hours",
    stageLabel: "Preview of a web design approach",
    browserUrl: "your-website.com",
    browserKicker: "Your new website",
    browserWords: ["Clear.", "Fast.", "Memorable."],
    score: [["Right", "message"], ["Smooth", "mobile"], ["Easy", "contact"]],
    noteTop: "Distinctive design",
    noteBottom: "Built to convert",
    tickerLabel: "Core skills",
    ticker: ["BESPOKE DESIGN", "REACT + NODE.JS", "RESPONSIVE", "SEO", "PERFORMANCE", "BESPOKE DESIGN"],
    expertiseLabel: "01 — EXPERTISE",
    expertiseTitle: "I build the website.",
    expertiseEmphasis: "You stay in control.",
    expertiseText: "From the first idea to launch, you get one point of contact and a process you can follow.",
    services: [
      { number: "01", title: "Direction & conversion", text: "A clear homepage, a distinctive visual world and a journey designed to turn attention into enquiries.", tags: ["Positioning", "UX / UI", "Responsive"] },
      { number: "02", title: "Full-stack development", text: "A fast, reliable React website, carefully built around the features your business actually needs.", tags: ["React", "Node.js", "Integrations"] },
      { number: "03", title: "Launch & independence", text: "I handle the technical details and leave you with a solid foundation that is simple to evolve.", tags: ["Performance", "SEO", "Support"] },
    ],
    conceptsLabel: "02 — CREATIVE DIRECTIONS",
    conceptsTitle: "A website shaped",
    conceptsEmphasis: "around your work.",
    conceptsText: "A few exploratory directions showing how a distinctive identity can serve a practical goal.",
    conceptStamp: ["EXPLORATORY", "CONCEPT"],
    concepts: [
      { type: "Architecture", index: "A—01", title: "Make people feel the space before their first visit.", note: "Editorial portfolio · Editable projects", visual: "architecture", visualLabels: ["HOUSE 08", "SOUTH FACADE", "PLAN / 2026", "SCALE 1:100"] },
      { type: "Healthcare", index: "H—02", title: "Reassure, guide and make booking an appointment effortless.", note: "Mobile clarity · Practical information", visual: "health", visualLabels: ["HELLO", "YOUR NEXT APPOINTMENT", "09:30", "VIDEO CONSULTATION"] },
      { type: "B2B Consulting", index: "C—03", title: "Make complex expertise immediately understandable.", note: "Structured services · Qualified enquiries", visual: "consulting", visualLabels: ["DASHBOARD", "GROWTH", "QUALIFIED LEADS", "CURRENT QUARTER"] },
    ],
    conceptDisclaimer: "These directions are creative demonstrations, not work attributed to real clients.",
    methodLabel: "03 — PROCESS",
    methodTitle: "Simple to follow.",
    methodEmphasis: "Solid when delivered.",
    steps: [
      ["01", "Define", "A focused conversation to understand your business, your priorities and the people you want to reach."],
      ["02", "Design", "A private first visual direction to validate the idea before moving further."],
      ["03", "Build", "Development in clear stages, with visible review points along the way."],
      ["04", "Launch", "Publishing, final checks and handover. Your new website is ready to work."],
    ],
    promiseTitle: "No jargon. No agency in between.",
    promiseText: "You work directly with the person designing and developing your website.",
    promiseSide: ["VALIDATED", "IN STAGES"],
    aboutLabel: "04 — ABOUT",
    aboutIntroStart: "I’m",
    aboutIntroEnd: "an independent full-stack developer.",
    aboutText: "I help small businesses and professionals turn a temporary or dated online presence into a website that feels",
    aboutEmphasis: "credible, useful and alive.",
    aboutSmall: "Instead of showing you a generic portfolio, I prefer to start with your field and propose a concrete first direction. We only continue if it feels right for your business.",
    github: "View my GitHub",
    contactLabel: "HAVE A PROJECT IN MIND?",
    contactTitle: "Your website can start",
    contactEmphasis: "making a difference today.",
    contactText: "Tell me about your business and what your website should finally achieve.",
    write: "Write to Aliaskar",
    footerBrand: "Bespoke websites",
    footerRole: "Freelance full-stack web developer",
  },
} as const;

export function PortfolioPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const home = locale === "fr" ? "/" : "/en";
  const methodId = "method";
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(copy.contactSubject)}&body=${encodeURIComponent(copy.contactBody)}`;

  return (
    <main>
      <header className="site-header">
        <a className="brand" href={`${home}#top`} aria-label={copy.backToTop}>
          <span className="brand-mark">AM</span>
          <span className="brand-copy">Aliaskar Malabaev<br />{copy.brandRole}</span>
        </a>
        <nav aria-label={copy.navigation}>
          <a href="#expertise">{copy.nav[0]}</a>
          <a href="#concepts">{copy.nav[1]}</a>
          <a href={`#${methodId}`}>{copy.nav[2]}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label={copy.language}>
            <a className={locale === "fr" ? "active" : ""} href="/" hrefLang="fr" aria-current={locale === "fr" ? "page" : undefined}>FR</a>
            <span>/</span>
            <a className={locale === "en" ? "active" : ""} href="/en" hrefLang="en" aria-current={locale === "en" ? "page" : undefined}>EN</a>
          </div>
          <a className="header-cta" href="#contact">{copy.headerCta} <span aria-hidden="true">↓</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> {copy.eyebrow}</p>
          <h1>{copy.heroTitle} <em>{copy.heroEmphasis}</em></h1>
          <p className="hero-lede">{copy.heroText}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">{copy.startProject} <span>↓</span></a>
            <a className="text-link" href="#concepts">{copy.seeApproach} <span>↓</span></a>
          </div>
          <div className="availability">
            <span className="status-dot" />
            <span><strong>{copy.available}</strong><br />{copy.reply}</span>
          </div>
        </div>

        <div className="hero-stage" aria-label={copy.stageLabel}>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="browser-card">
            <div className="browser-bar">
              <span className="browser-dots"><i /><i /><i /></span>
              <span className="browser-url">{copy.browserUrl}</span>
              <span className="browser-live">LIVE</span>
            </div>
            <div className="browser-body">
              <p className="browser-kicker">{copy.browserKicker}</p>
              <p className="browser-title">{copy.browserWords[0]}<br /><span>{copy.browserWords[1]}</span><br />{copy.browserWords[2]}</p>
              <div className="browser-score">
                {copy.score.map((label, index) => <div key={label[0]}><strong>0{index + 1}</strong><span>{label[0]}<br />{label[1]}</span></div>)}
              </div>
            </div>
          </div>
          <div className="stage-note note-top">{copy.noteTop} <b>✦</b></div>
          <div className="stage-note note-bottom"><b>↳</b> {copy.noteBottom}</div>
        </div>
      </section>

      <div className="ticker" aria-label={copy.tickerLabel}>
        <div>{copy.ticker.map((item, index) => <span className="ticker-item" key={`${item}-${index}`}><span>{item}</span><i>✦</i></span>)}</div>
      </div>

      <section className="services section" id="expertise">
        <div className="section-heading">
          <p className="section-index">{copy.expertiseLabel}</p>
          <h2>{copy.expertiseTitle}<br /><em>{copy.expertiseEmphasis}</em></h2>
          <p>{copy.expertiseText}</p>
        </div>
        <div className="service-grid">
          {copy.services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="concept-section section" id="concepts">
        <div className="section-heading section-heading-light">
          <p className="section-index">{copy.conceptsLabel}</p>
          <h2>{copy.conceptsTitle}<br /><em>{copy.conceptsEmphasis}</em></h2>
          <p>{copy.conceptsText}</p>
        </div>
        <div className="concept-list">
          {copy.concepts.map((concept) => (
            <article className="concept-card" key={concept.index}>
              <div className={`concept-visual visual-${concept.visual}`} aria-hidden="true">
                <span className="concept-stamp">{copy.conceptStamp[0]}<br />{copy.conceptStamp[1]}</span>
                {concept.visual === "architecture" && (
                  <>
                    <div className="architecture-key">
                      <strong>{concept.visualLabels[0]}</strong>
                      <span>{concept.visualLabels[1]}</span>
                      <span>{concept.visualLabels[2]}</span>
                    </div>
                    <div className="architecture-blueprint">
                      <span className="arch-sun" />
                      <div className="arch-volume arch-volume-main"><i /><i /><i /></div>
                      <div className="arch-volume arch-volume-side"><i /><i /></div>
                      <span className="arch-scale">{concept.visualLabels[3]}</span>
                    </div>
                    <span className="concept-signature">{concept.type}</span>
                  </>
                )}
                {concept.visual === "health" && (
                  <>
                    <div className="health-ambient"><i /><i /><i /></div>
                    <div className="health-appointment">
                      <div className="health-header"><span>+</span><strong>{concept.visualLabels[0]}</strong><i>•••</i></div>
                      <p>{concept.visualLabels[1]}</p>
                      <div className="health-slot">
                        <strong>{concept.visualLabels[2]}</strong>
                        <span>{concept.visualLabels[3]}</span>
                        <i>✓</i>
                      </div>
                      <div className="health-pulse"><i /><i /><i /><i /><i /></div>
                    </div>
                    <span className="concept-signature">{concept.type}</span>
                  </>
                )}
                {concept.visual === "consulting" && (
                  <>
                    <div className="consulting-dashboard">
                      <div className="consulting-header"><strong>{concept.visualLabels[0]}</strong><span>Q3 / 26</span></div>
                      <div className="consulting-kpis">
                        <div><span>{concept.visualLabels[1]}</span><strong>+38%</strong></div>
                        <div><span>{concept.visualLabels[2]}</span><strong>24</strong></div>
                      </div>
                      <div className="consulting-chart">
                        <div className="chart-bars"><i /><i /><i /><i /><i /><i /></div>
                        <div className="chart-line"><i /><i /><i /><i /><i /></div>
                        <span>{concept.visualLabels[3]}</span>
                      </div>
                    </div>
                    <span className="concept-signature">{concept.type}</span>
                  </>
                )}
              </div>
              <div className="concept-meta">
                <div><span>{concept.index}</span><span>{concept.type}</span></div>
                <h3>{concept.title}</h3>
                <p>{concept.note}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="concept-disclaimer">{copy.conceptDisclaimer}</p>
      </section>

      <section className="process section" id={methodId}>
        <div className="section-heading process-heading">
          <p className="section-index">{copy.methodLabel}</p>
          <h2>{copy.methodTitle}<br /><em>{copy.methodEmphasis}</em></h2>
        </div>
        <div className="steps">
          {copy.steps.map(([number, title, text]) => (
            <article className="step" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true">↘</i>
            </article>
          ))}
        </div>
        <div className="promise-strip">
          <span className="promise-mark">AM</span>
          <p><strong>{copy.promiseTitle}</strong><br />{copy.promiseText}</p>
          <span className="promise-side">{copy.promiseSide[0]}<br />{copy.promiseSide[1]}</span>
        </div>
      </section>

      <section className="about section">
        <div className="about-label">
          <p className="section-index">{copy.aboutLabel}</p>
          <div className="portrait-type" aria-hidden="true"><span>A</span><i>+</i><span>M</span></div>
        </div>
        <div className="about-copy">
          <p className="about-intro">{copy.aboutIntroStart} <strong>Aliaskar</strong>, {copy.aboutIntroEnd}</p>
          <p className="about-large">{copy.aboutText} <em>{copy.aboutEmphasis}</em></p>
          <p className="about-small">{copy.aboutSmall}</p>
          <a className="text-link" href="https://github.com/amalabaev" target="_blank" rel="noreferrer">{copy.github} <span>↗</span></a>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-orb" aria-hidden="true"><span>?</span></div>
        <p className="section-index">{copy.contactLabel}</p>
        <h2>{copy.contactTitle}<br /><em>{copy.contactEmphasis}</em></h2>
        <p>{copy.contactText}</p>
        <div className="contact-actions">
          <a className="button button-acid" href={gmailCompose} target="_blank" rel="noreferrer">{copy.write} <span>↗</span></a>
          <CopyEmailButton email={email} idleLabel={copy.copyEmail} copiedLabel={copy.copiedEmail} />
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href={`${home}#top`}><span className="brand-mark">AM</span><span>{copy.footerBrand}<br />React · Node.js</span></a>
        <p>© 2026 Aliaskar Malabaev<br />{copy.footerRole}</p>
        <div><a href="https://github.com/amalabaev" target="_blank" rel="noreferrer">GitHub ↗</a><a href={gmailCompose} target="_blank" rel="noreferrer">Email ↗</a></div>
      </footer>
    </main>
  );
}
