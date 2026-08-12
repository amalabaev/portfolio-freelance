import { CopyEmailButton } from "./CopyEmailButton";
import { Icon, Spark } from "./Icon";
import { CAREER_START_YEAR, experienceYears } from "./profile";
import { ProjectBriefForm } from "./ProjectBriefForm";
import {
  ArchitectureBlueprint,
  CardzapVisual,
  ConsultingDashboard,
  HealthAppointment,
  HeroBrowser,
  Monogram,
  PlanningVisual,
  PortfolioVisual,
} from "./Visuals";

type Locale = "fr" | "en";

const email = "amalabaev@gmail.com";

const content = {
  fr: {
    backToTop: "Retour en haut",
    brandName: "Aliaskar Malabaev",
    brandRole: "Développeur full-stack indépendant",
    navigation: "Navigation principale",
    nav: ["Réalisations", "Services", "Méthode"],
    menu: "Menu",
    language: "Choisir la langue",
    copyEmail: "Copier l’adresse",
    copiedEmail: "Adresse copiée",
    headerCta: "Faire analyser mon site",
    eyebrow: `Développeur full-stack freelance · ${experienceYears} ans d’expérience · France & remote`,
    heroTitle: "Votre entreprise a évolué.",
    heroEmphasis: "Votre site devrait le montrer.",
    heroText: `Développeur, chef de projet puis responsable d’équipe front-end : ${experienceYears} ans à construire des sites et des outils web qui inspirent confiance dès la première seconde — et qui tiennent la route pendant des années.`,
    startProject: "Obtenir un premier avis gratuit",
    seeWork: "Voir mes réalisations",
    available: "Disponible pour de nouveaux projets",
    reply: "Premier retour sous 24 heures",
    browserUrl: "votre-projet.fr",
    browserKicker: "Une présence web à votre niveau",
    browserLive: "LIVE",
    browserWords: ["Crédible.", "Utile.", "Évolutive."],
    browserTrend: ["VISITEURS · 6 DERNIERS MOIS", "En progression"],
    score: [["Design", "singulier"], ["Métier", "compris"], ["Code", "solide"]],
    noteTop: "Pensé produit",
    noteBottom: "Construit sur mesure",
    proofLabel: "Le profil en bref",
    proof: [`${experienceYears} ans d’expérience web`, "Front-end + back-end", "Ex-responsable d’équipe front", "FR · EN · RU"],
    workLabel: "01 — RÉALISATIONS",
    workTitle: "Des interfaces soignées.",
    workEmphasis: "Des systèmes sérieux derrière.",
    workText: "Trois projets qui montrent l’étendue du travail : comprendre un métier, structurer un produit et livrer une expérience claire.",
    workRole: "Rôle",
    workStack: "Stack",
    caseLabels: ["Le problème", "Ma contribution", "Le défi"],
    works: [
      {
        index: "01 / 03",
        kind: "APPLICATION MÉTIER · PROJET ANONYMISÉ",
        title: "Plateforme de planification opérationnelle",
        text: "Une application complexe pour gérer ressources, affectations, absences, plannings et contraintes opérationnelles — sans jamais exposer cette complexité à l’écran.",
        role: "Développement full-stack",
        case: [
          "Permettre de déplacer une affectation en quelques secondes tout en respectant automatiquement disponibilités, permissions, validations déjà accordées et contraintes métier.",
          "Conception des interactions front-end, logique de transfert et de récurrence, validations côté serveur et traitement des différents états d’une affectation.",
          "Garder un geste simple à l’écran alors que plusieurs règles doivent être vérifiées derrière chaque action — chevauchements compris, et sans perdre la traçabilité des décisions.",
        ],
        stack: ["PHP", "JavaScript", "MySQL", "Docker"],
        visual: "planning",
        link: null,
        linkLabel: null,
      },
      {
        index: "02 / 03",
        kind: "PRODUIT IA · CARDZAP",
        title: "Transformer des documents en données utiles",
        text: "Un produit web qui orchestre l’analyse de PDF, la génération assistée par IA et la restitution de données structurées, vérifiables et exploitables.",
        role: "Architecture produit & développement",
        case: [
          "Transformer des PDF hétérogènes en données structurées fiables, sans laisser l’utilisateur attendre devant un écran figé.",
          "Architecture du produit, orchestration des traitements asynchrones, intégration de la génération assistée par IA et restitution de données vérifiables.",
          "Rendre lisible une chaîne de traitement longue et faillible : progression, reprise sur erreur et contrôle humain avant validation.",
        ],
        stack: ["Laravel", "React", "Redis", "MySQL"],
        visual: "cardzap",
        link: null,
        linkLabel: null,
      },
      {
        index: "03 / 03",
        kind: "IDENTITÉ & DÉVELOPPEMENT · AMALABAEV.COM",
        title: "Une vitrine de freelance sans template",
        text: "Une identité éditoriale bilingue, responsive et performante, conçue puis développée intégralement sur mesure. Le code est public : jugez sur pièce.",
        role: "Direction, design & développement",
        case: [
          "Démontrer un niveau de design et de code sans pouvoir s’appuyer sur le logo d’un client connu.",
          "Direction artistique, système de composants, contenu bilingue, accessibilité et déploiement statique automatisé.",
          "Tenir une identité forte tout en gardant des pages rapides, accessibles et bien référencées. Le code est public : la promesse est vérifiable.",
        ],
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
      {
        number: "01",
        title: "Refonte de site web",
        text: "Pour transformer un site daté ou peu crédible en une présence claire, rapide et convaincante.",
        deliverables: ["Message et positionnement retravaillés", "Maquette validée avant la première ligne de code", "Site rapide, responsive, prêt pour Google", "Prise en main et autonomie côté client"],
        tags: ["Positionnement", "UX / UI", "SEO"],
      },
      {
        number: "02",
        title: "Application web sur mesure",
        text: "Pour digitaliser un processus métier qu’un thème ou un CMS générique ne peut pas correctement résoudre.",
        deliverables: ["Cadrage précis du processus existant", "Prototype cliquable avant développement", "Application testée, documentée, déployée", "Évolutions livrées par étapes visibles"],
        tags: ["React", "Back-end", "Données"],
      },
      {
        number: "03",
        title: "Automatisation & intégrations",
        text: "Pour connecter vos outils, supprimer les tâches répétitives et intégrer des API ou de l’IA avec discernement.",
        deliverables: ["Repérage des tâches qui coûtent le plus", "Connexion de vos outils via leurs API", "IA intégrée uniquement là où elle sert", "Suivi lisible et reprise en main simple"],
        tags: ["API", "IA", "Workflows"],
      },
    ],
    seoProfile: "Découvrir mon offre de développeur full-stack freelance",
    whyLabel: "03 — POURQUOI MOI",
    whyTitle: "Le regard produit.",
    whyEmphasis: "La profondeur technique.",
    whyText: "Vous n’avez pas à arbitrer entre une belle interface, un développement robuste et quelqu’un qui comprend votre métier.",
    reasons: [
      ["01", "Une culture produit, pas seulement technique", "Avant de me concentrer sur le développement, j’ai travaillé en gestion de projet : cadrage, échanges clients, coordination et livraison. Je construis en gardant les contraintes de votre entreprise en tête, pas seulement celles du code."],
      ["02", "Habitué à parler produit, pas seulement code", "J’ai aussi dirigé une équipe front-end. Je peux échanger directement avec un dirigeant, un designer ou une équipe technique — sans que vous ayez à rédiger une spécification de 80 pages."],
      ["03", "Une base que quelqu’un d’autre peut reprendre", "Revue de code, documentation et architecture lisible : des années à relire le travail des autres m’ont appris ce qui rend un projet reprenable."],
    ],
    engineeringCta: "Voir mon profil technique",
    linkedIn: "Voir mon LinkedIn",
    labLabel: "04 — CREATIVE LAB",
    labTitle: "Explorer une identité.",
    labEmphasis: "Servir un objectif.",
    labText: "Des directions libres pour montrer comment un langage visuel peut changer selon le métier sans perdre en clarté.",
    conceptStamp: "Piste créative",
    concepts: [
      { type: "Architecture", index: "A—01", title: "Faire ressentir les espaces avant la première visite.", note: "Portfolio éditorial · Projets administrables", visual: "architecture", visualLabels: ["MAISON 08", "FAÇADE SUD", "PLAN / 2026", "ÉCHELLE 1:100"] },
      { type: "Santé", index: "S—02", title: "Rassurer, orienter et faciliter la prise de rendez-vous.", note: "Clarté mobile · Informations pratiques", visual: "health", visualLabels: ["BONJOUR", "VOTRE PROCHAIN RENDEZ-VOUS", "09:30", "TÉLÉCONSULTATION"] },
      { type: "Conseil B2B", index: "C—03", title: "Rendre une expertise complexe immédiatement lisible.", note: "Offre structurée · Demandes qualifiées", visual: "consulting", visualLabels: ["TABLEAU DE BORD", "CROISSANCE", "LEADS QUALIFIÉS", "TRIMESTRE ACTUEL"] },
    ],
    labDisclaimer: "Directions exploratoires — elles démontrent une approche créative et ne sont pas attribuées à des clients. Les données affichées sont fictives.",
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
    aboutIntro: "Je suis Aliaskar Malabaev, développeur full-stack orienté produit.",
    aboutText: "J’aime rendre les sujets complexes",
    aboutEmphasis: "simples à utiliser et difficiles à oublier.",
    aboutStory: [
      `Depuis ${CAREER_START_YEAR}, j’ai travaillé comme développeur front-end, chef de projet, puis responsable d’une équipe front-end, sur des projets allant de sites publics à des applications métier complexes. Cette expérience me permet d’aborder un projet autant par son produit et ses utilisateurs que par son architecture et son code.`,
      "Formé à Paris, j’ai travaillé avec des équipes et des clients en France comme à l’international, en français, en anglais et en russe.",
      "Concrètement : je peux cadrer un besoin avec un dirigeant le matin, arbitrer une règle métier avec vos équipes l’après-midi, et écrire le code qui la fait tenir.",
    ],
    aboutProof: [`${experienceYears} ans d’expérience`, "Ex-Team Lead front-end", "Front + back", "FR · EN · RU"],
    contactLabel: "UN PROJET À FAIRE AVANCER ?",
    contactTitle: "Commençons par",
    contactEmphasis: "un premier avis concret.",
    contactText: "Décrivez brièvement votre activité, votre site ou votre idée. Je vous répondrai avec une première lecture, sans jargon et sans engagement.",
    assurances: ["Une réponse personnelle sous 24 heures, jamais un message type.", "Un premier avis concret et gratuit, sans engagement.", "Vous parlez directement à un développeur qui a aussi géré des projets et une équipe."],
    emailAlternative: "Ou écrivez directement à",
    footerBrand: "Design & systèmes web sur mesure",
    footerRole: "Développeur full-stack orienté produit",
  },
  en: {
    backToTop: "Back to top",
    brandName: "Aliaskar Malabaev",
    brandRole: "Independent full-stack developer",
    navigation: "Main navigation",
    nav: ["Selected work", "Services", "Process"],
    menu: "Menu",
    language: "Choose language",
    copyEmail: "Copy email address",
    copiedEmail: "Email copied",
    headerCta: "Get a website review",
    eyebrow: `Freelance full-stack developer · ${experienceYears} years' experience · France & remote`,
    heroTitle: "Your business has evolved.",
    heroEmphasis: "Your website should show it.",
    heroText: `Developer, project manager, then front-end team lead: ${experienceYears} years building websites and web tools that earn trust in the first second — and keep working for years.`,
    startProject: "Get a free first review",
    seeWork: "See selected work",
    available: "Available for new projects",
    reply: "Initial reply within 24 hours",
    browserUrl: "your-project.com",
    browserKicker: "A web presence at your level",
    browserLive: "LIVE",
    browserWords: ["Credible.", "Useful.", "Built to last."],
    browserTrend: ["VISITORS · LAST 6 MONTHS", "Trending up"],
    score: [["Distinct", "design"], ["Business", "understood"], ["Solid", "code"]],
    noteTop: "Product-minded",
    noteBottom: "Built from scratch",
    proofLabel: "The profile at a glance",
    proof: [`${experienceYears} years of web experience`, "Front-end + back-end", "Former front-end team lead", "FR · EN · RU"],
    workLabel: "01 — SELECTED WORK",
    workTitle: "Considered interfaces.",
    workEmphasis: "Serious systems behind them.",
    workText: "Three projects showing the full scope of the work: understanding a business, shaping a product and delivering a clear experience.",
    workRole: "Role",
    workStack: "Stack",
    caseLabels: ["The problem", "My contribution", "The hard part"],
    works: [
      {
        index: "01 / 03",
        kind: "BUSINESS APPLICATION · ANONYMISED PROJECT",
        title: "Operational workforce planning platform",
        text: "A complex application for managing resources, assignments, absences, schedules and operational constraints — without ever exposing that complexity on screen.",
        role: "Full-stack development",
        case: [
          "Let a planner move an assignment in seconds while availability, permissions, approvals already granted and business constraints are all respected automatically.",
          "Design of the front-end interactions, transfer and recurrence logic, server-side validation and handling of an assignment's various states.",
          "Keeping the gesture simple on screen while several rules are checked behind every action — overlaps included, and without losing the audit trail.",
        ],
        stack: ["PHP", "JavaScript", "MySQL", "Docker"],
        visual: "planning",
        link: null,
        linkLabel: null,
      },
      {
        index: "02 / 03",
        kind: "AI PRODUCT · CARDZAP",
        title: "Turning documents into useful data",
        text: "A web product orchestrating PDF analysis, AI-assisted generation and the delivery of structured data that can be checked and actually used.",
        role: "Product architecture & development",
        case: [
          "Turn inconsistent PDFs into dependable structured data without leaving the user staring at a frozen screen.",
          "Product architecture, orchestration of background processing, integration of AI-assisted generation and delivery of checkable data.",
          "Making a long, failure-prone pipeline legible: progress, recovery from errors, and human review before anything is accepted.",
        ],
        stack: ["Laravel", "React", "Redis", "MySQL"],
        visual: "cardzap",
        link: null,
        linkLabel: null,
      },
      {
        index: "03 / 03",
        kind: "IDENTITY & DEVELOPMENT · AMALABAEV.COM",
        title: "A freelance portfolio without a template",
        text: "A bilingual, responsive and fast editorial identity, designed and developed entirely from scratch. The code is public — judge it for yourself.",
        role: "Direction, design & development",
        case: [
          "Demonstrate a level of design and engineering without a recognisable client logo to lean on.",
          "Art direction, component system, bilingual content, accessibility and automated static deployment.",
          "Holding a strong identity while keeping pages fast, accessible and search-ready. The code is public, so the claim can be checked.",
        ],
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
      {
        number: "01",
        title: "Website redesign",
        text: "Turn a dated or unconvincing website into a clear, fast and credible presence.",
        deliverables: ["Message and positioning reworked", "Design signed off before the first line of code", "Fast, responsive, search-ready site", "Handover so your team stays autonomous"],
        tags: ["Positioning", "UX / UI", "SEO"],
      },
      {
        number: "02",
        title: "Bespoke web application",
        text: "Digitise a business process that a generic theme or CMS cannot properly support.",
        deliverables: ["A precise read of your current process", "Clickable prototype before development", "Application tested, documented, deployed", "Improvements shipped in visible stages"],
        tags: ["React", "Back-end", "Data"],
      },
      {
        number: "03",
        title: "Automation & integrations",
        text: "Connect tools, remove repetitive work and integrate APIs or AI where they genuinely help.",
        deliverables: ["The costliest manual tasks identified", "Your tools connected through their APIs", "AI used only where it earns its place", "Readable monitoring and easy handover"],
        tags: ["APIs", "AI", "Workflows"],
      },
    ],
    seoProfile: "Explore my freelance full-stack services",
    whyLabel: "03 — WHY ME",
    whyTitle: "Product judgement.",
    whyEmphasis: "Technical depth.",
    whyText: "You should not have to choose between a beautiful interface, robust engineering and someone who understands your business.",
    reasons: [
      ["01", "Product judgement, not just technical skill", "Before focusing on development I worked in project management: scoping, client conversations, coordination and delivery. I build with your business constraints in mind, not only the code's."],
      ["02", "Used to talking product, not only code", "I have also led a front-end team. I can talk directly to a founder, a designer or an engineering team — without you having to write an 80-page specification."],
      ["03", "A codebase someone else can pick up", "Code review, documentation and legible architecture: years of reading other people's work taught me what makes a project inheritable."],
    ],
    engineeringCta: "View my engineering profile",
    linkedIn: "View my LinkedIn",
    labLabel: "04 — CREATIVE LAB",
    labTitle: "Explore an identity.",
    labEmphasis: "Serve an objective.",
    labText: "Independent directions showing how a visual language can shift with the field while keeping the experience clear.",
    conceptStamp: "Creative direction",
    concepts: [
      { type: "Architecture", index: "A—01", title: "Make people feel the space before their first visit.", note: "Editorial portfolio · Editable projects", visual: "architecture", visualLabels: ["HOUSE 08", "SOUTH FACADE", "PLAN / 2026", "SCALE 1:100"] },
      { type: "Healthcare", index: "H—02", title: "Reassure, guide and make booking an appointment effortless.", note: "Mobile clarity · Practical information", visual: "health", visualLabels: ["HELLO", "YOUR NEXT APPOINTMENT", "09:30", "VIDEO CONSULTATION"] },
      { type: "B2B Consulting", index: "C—03", title: "Make complex expertise immediately understandable.", note: "Structured services · Qualified enquiries", visual: "consulting", visualLabels: ["DASHBOARD", "GROWTH", "QUALIFIED LEADS", "CURRENT QUARTER"] },
    ],
    labDisclaimer: "Exploratory directions — they demonstrate a creative approach and are not attributed to clients. The figures shown are fictional.",
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
    aboutIntro: "I’m Aliaskar Malabaev, a product-minded full-stack developer.",
    aboutText: "I like making complex subjects",
    aboutEmphasis: "simple to use and hard to forget.",
    aboutStory: [
      `Since ${CAREER_START_YEAR} I have worked as a front-end developer, a project manager, and then as a front-end team lead, on projects ranging from public websites to complex business applications. That experience lets me approach a project through its product and its users as much as through its architecture and its code.`,
      "Trained in Paris, I have worked with teams and clients in France and internationally, in French, English and Russian.",
      "In practice: I can scope a need with a founder in the morning, settle a business rule with your team in the afternoon, and write the code that holds it together.",
    ],
    aboutProof: [`${experienceYears} years' experience`, "Former front-end lead", "Front + back", "FR · EN · RU"],
    contactLabel: "A PROJECT TO MOVE FORWARD?",
    contactTitle: "Let’s start with",
    contactEmphasis: "a useful first opinion.",
    contactText: "Briefly describe your business, website or idea. I’ll reply with an initial assessment, without jargon or obligation.",
    assurances: ["A personal reply within 24 hours, never a templated one.", "A concrete first opinion, free and with no obligation.", "You speak directly to a developer who has also run projects and led a team."],
    emailAlternative: "Or email me directly at",
    footerBrand: "Bespoke web design & systems",
    footerRole: "Product-minded full-stack developer",
  },
} as const;

type Concept = (typeof content.fr.concepts)[number] | (typeof content.en.concepts)[number];

function ConceptVisual({ concept, locale }: { concept: Concept; locale: Locale }) {
  if (concept.visual === "architecture") return <ArchitectureBlueprint labels={concept.visualLabels} signature={concept.type} />;
  if (concept.visual === "health") return <HealthAppointment labels={concept.visualLabels} locale={locale} signature={concept.type} />;
  return <ConsultingDashboard labels={concept.visualLabels} locale={locale} signature={concept.type} />;
}

export function PortfolioPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const home = locale === "fr" ? "/" : "/en";
  const engineering = locale === "fr" ? "/engineering" : "/en/engineering";
  const freelanceProfile = locale === "fr" ? "/developpeur-full-stack-freelance" : "/en/freelance-full-stack-developer";
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
          <span className="brand-copy"><strong>{copy.brandName}</strong>{copy.brandRole}</span>
        </a>
        <nav aria-label={copy.navigation}>{navLinks.map(([href, label]) => <a href={href} key={href}>{label}</a>)}</nav>
        <div className="header-actions">
          <div className="language-switch" aria-label={copy.language}>
            {/* Full document navigation switches between independently exported locales. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a className={locale === "fr" ? "active" : ""} href="/" hrefLang="fr" aria-current={locale === "fr" ? "page" : undefined}>FR</a><span>/</span>
            <a className={locale === "en" ? "active" : ""} href="/en" hrefLang="en" aria-current={locale === "en" ? "page" : undefined}>EN</a>
          </div>
          <a className="header-cta" href="#contact">{copy.headerCta} <Icon name="down" /></a>
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
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">{copy.startProject} <Icon name="down" /></a>
            <a className="text-link" href="#work">{copy.seeWork} <Icon name="down" /></a>
          </div>
          <div className="availability"><span className="status-dot" /><span><strong>{copy.available}</strong>{copy.reply}</span></div>
        </div>
        <div className="hero-stage">
          <div className="hero-stage-inner">
            <HeroBrowser url={copy.browserUrl} kicker={copy.browserKicker} words={copy.browserWords} score={copy.score} live={copy.browserLive} trend={copy.browserTrend} />
            <div className="stage-note note-top">{copy.noteTop} <b><Spark /></b></div>
            <div className="stage-note note-bottom"><b><Icon name="cornerDown" size={13} /></b> {copy.noteBottom}</div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label={copy.proofLabel}><span>{copy.proofLabel}</span>{copy.proof.map((item) => <strong key={item}><i><Spark /></i>{item}</strong>)}</section>

      <section className="work section" id="work">
        <div className="section-heading"><p className="section-index">{copy.workLabel}</p><h2>{copy.workTitle}<br /><em>{copy.workEmphasis}</em></h2><p>{copy.workText}</p></div>
        <div className="work-list">
          {copy.works.map((work) => <article className="work-card" key={work.index}>
            <div className={`work-visual work-${work.visual}`}>
              {work.visual === "planning" && <PlanningVisual locale={locale} />}
              {work.visual === "cardzap" && <CardzapVisual locale={locale} />}
              {work.visual === "portfolio" && <PortfolioVisual locale={locale} headline={copy.heroTitle} />}
            </div>
            <div className="work-copy">
              <div className="work-kicker"><span>{work.index}</span><span>{work.kind}</span></div>
              <h3>{work.title}</h3>
              <p className="work-summary">{work.text}</p>
              <div className="case-study">{work.case.map((item, i) => <div key={item}><h4>{copy.caseLabels[i]}</h4><p>{item}</p></div>)}</div>
              <dl><div><dt>{copy.workRole}</dt><dd>{work.role}</dd></div><div><dt>{copy.workStack}</dt><dd className="tag-row">{work.stack.map((item) => <span key={item}>{item}</span>)}</dd></div></dl>
              {work.link && <a className="text-link" href={work.link} target="_blank" rel="noreferrer">{work.linkLabel} <Icon name="upRight" /></a>}
            </div>
          </article>)}
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading"><p className="section-index">{copy.servicesLabel}</p><h2>{copy.servicesTitle}<br /><em>{copy.servicesEmphasis}</em></h2><p>{copy.servicesText}</p></div>
        <div className="service-grid">{copy.services.map((service) => <article className="service-card" key={service.number}>
          <div className="service-number">{service.number}</div>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <ul className="service-deliverables">{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
          <ul className="service-tags">{service.tags.map((tag) => <li className="tag" key={tag}>{tag}</li>)}</ul>
        </article>)}</div>
        <a className="text-link services-profile-link" href={freelanceProfile}>{copy.seoProfile} <Icon name="right" /></a>
      </section>

      <section className="why section">
        <div className="section-heading section-heading-light"><p className="section-index">{copy.whyLabel}</p><h2>{copy.whyTitle}<br /><em>{copy.whyEmphasis}</em></h2><p>{copy.whyText}</p></div>
        <div className="reason-grid">{copy.reasons.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <a className="button button-acid engineering-button" href={engineering}>{copy.engineeringCta} <Icon name="upRight" /></a>
      </section>

      <section className="concept-section section" id="lab">
        <div className="section-heading section-heading-light"><p className="section-index">{copy.labLabel}</p><h2>{copy.labTitle}<br /><em>{copy.labEmphasis}</em></h2><p>{copy.labText}</p></div>
        <div className="concept-list">{copy.concepts.map((concept) => <article className="concept-card" key={concept.index}>
          <div className={`concept-visual visual-${concept.visual}`}>
            <span className="concept-stamp">{copy.conceptStamp}</span>
            <ConceptVisual concept={concept} locale={locale} />
          </div>
          <div className="concept-meta"><div><span>{concept.index}</span><span>{concept.type}</span></div><h3>{concept.title}</h3><p>{concept.note}</p></div>
        </article>)}</div>
        <p className="concept-disclaimer">{copy.labDisclaimer}</p>
      </section>

      <section className="process section" id="method">
        <div className="section-heading process-heading"><p className="section-index">{copy.methodLabel}</p><h2>{copy.methodTitle}<br /><em>{copy.methodEmphasis}</em></h2></div>
        <div className="steps">{copy.steps.map(([number, title, text]) => <article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><i><Icon name="downRight" size={18} /></i></article>)}</div>
        <div className="promise-strip"><span className="promise-mark">AM</span><p><strong>{copy.promiseTitle}</strong><br />{copy.promiseText}</p><span className="promise-side">{copy.promiseSide[0]}<br />{copy.promiseSide[1]}</span></div>
      </section>

      <section className="about section">
        <div className="about-label"><p className="section-index">{copy.aboutLabel}</p><Monogram /></div>
        <div className="about-copy"><p className="about-intro">{copy.aboutIntro}</p><p className="about-large">{copy.aboutText} <em>{copy.aboutEmphasis}</em></p><div className="about-story">{copy.aboutStory.map((para) => <p key={para}>{para}</p>)}</div><div className="about-proof">{copy.aboutProof.map((item) => <span key={item}>{item}</span>)}</div><div className="about-links"><a className="text-link" href={engineering}>{copy.engineeringCta} <Icon name="right" /></a><a className="text-link" href="https://fr.linkedin.com/in/aliaskar-malabaev-6850a0130" target="_blank" rel="noreferrer">{copy.linkedIn} <Icon name="upRight" /></a></div></div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-intro">
          <p className="section-index">{copy.contactLabel}</p>
          <h2>{copy.contactTitle}<br /><em>{copy.contactEmphasis}</em></h2>
          <p>{copy.contactText}</p>
          <ul className="contact-assurances">{copy.assurances.map((item) => <li key={item}><i><Spark /></i>{item}</li>)}</ul>
        </div>
        <ProjectBriefForm locale={locale} />
        <div className="contact-alternative"><span>{copy.emailAlternative}</span><a href={directEmail} target="_blank" rel="noreferrer">{email}</a><CopyEmailButton email={email} idleLabel={copy.copyEmail} copiedLabel={copy.copiedEmail} /></div>
      </section>

      <footer><a className="brand footer-brand" href={`${home}#top`}><span className="brand-mark">AM</span><span>{copy.footerBrand}<br />React · Node.js</span></a><p>© 2026 Aliaskar Malabaev<br />{copy.footerRole}</p><div><a href={freelanceProfile}>Services <Icon name="right" size={13} /></a><a href={engineering}>Engineering <Icon name="right" size={13} /></a><a href="https://fr.linkedin.com/in/aliaskar-malabaev-6850a0130" target="_blank" rel="noreferrer">LinkedIn <Icon name="upRight" size={13} /></a></div></footer>
    </main>
  );
}
