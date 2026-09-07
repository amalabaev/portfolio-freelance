import { CopyEmailButton } from "./CopyEmailButton";
import { Icon, Spark } from "./Icon";
import { CAREER_START_YEAR, experienceYears } from "./profile";
import { ProjectBriefForm } from "./ProjectBriefForm";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import {
  ArchitectureBlueprint,
  CardzapVisual,
  ConsultingDashboard,
  HealthAppointment,
  PlanningVisual,
  PortfolioVisual,
} from "./Visuals";

type Locale = "fr" | "en";

const email = "amalabaev@gmail.com";

const content = {
  fr: {
    copyEmail: "Copier l’adresse",
    copiedEmail: "Adresse copiée",
    heroTitle: "Un site qui convainc.",
    heroEmphasis: "Des outils qui vous simplifient la vie.",
    heroText: "J’aide les PME et les équipes produit à refondre leur site, créer des applications métier et automatiser leurs opérations. Un seul interlocuteur, du premier croquis à la mise en ligne.",
    startProject: "Parlons de votre projet",
    seeWork: "Voir mes réalisations",
    proofLabel: "Le profil en bref",
    workTitle: "Trois projets.",
    workEmphasis: "Des problèmes concrets.",
    workRole: "Rôle",
    works: [
      {
        index: "01 / 03",
        kind: "APPLICATION MÉTIER · PROJET ANONYMISÉ",
        title: "Plateforme de planification opérationnelle",
        text: "Une application complexe pour gérer ressources, affectations, absences, plannings et contraintes opérationnelles — sans jamais exposer cette complexité à l’écran.",
        role: "Développement full-stack",
        stack: ["PHP", "JavaScript", "MySQL", "Docker"],
        visual: "planning",
        link: "/work/operational-planning/",
        linkLabel: "Voir l’étude de cas",
      },
      {
        index: "02 / 03",
        kind: "PRODUIT IA · CARDZAP",
        title: "Transformer des documents en données utiles",
        text: "Un produit web qui orchestre l’analyse de PDF, la génération assistée par IA et la restitution de données structurées, vérifiables et exploitables.",
        role: "Architecture produit & développement",
        stack: ["Laravel", "React", "Redis", "MySQL"],
        visual: "cardzap",
        link: "/work/cardzap/",
        linkLabel: "Explorer le projet",
      },
      {
        index: "03 / 03",
        kind: "IDENTITÉ & DÉVELOPPEMENT · AMALABAEV.COM",
        title: "Une vitrine de freelance sans template",
        text: "Une identité éditoriale bilingue, responsive et performante, conçue puis développée intégralement sur mesure. Le code est public : jugez sur pièce.",
        role: "Direction, design & développement",
        stack: ["React 19", "TypeScript", "Node.js", "CSS sur mesure"],
        visual: "portfolio",
        link: "https://github.com/amalabaev/portfolio-freelance",
        linkLabel: "Voir le code",
      },
    ],
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
    engineeringCta: "Voir mon profil technique",
    conceptStamp: "Piste créative",
    concepts: [
      { type: "Architecture", index: "A—01", title: "Faire ressentir les espaces avant la première visite.", note: "Portfolio éditorial · Projets administrables", visual: "architecture", visualLabels: ["MAISON 08", "FAÇADE SUD", "PLAN / 2026", "ÉCHELLE 1:100"] },
      { type: "Santé", index: "S—02", title: "Rassurer, orienter et faciliter la prise de rendez-vous.", note: "Clarté mobile · Informations pratiques", visual: "health", visualLabels: ["BONJOUR", "VOTRE PROCHAIN RENDEZ-VOUS", "09:30", "TÉLÉCONSULTATION"] },
      { type: "Conseil B2B", index: "C—03", title: "Rendre une expertise complexe immédiatement lisible.", note: "Offre structurée · Demandes qualifiées", visual: "consulting", visualLabels: ["TABLEAU DE BORD", "CROISSANCE", "LEADS QUALIFIÉS", "TRIMESTRE ACTUEL"] },
    ],
    labDisclaimer: "Directions exploratoires — elles démontrent une approche créative et ne sont pas attribuées à des clients. Les données affichées sont fictives.",
    steps: [
      ["01", "Cadrer", "Un échange ciblé pour comprendre le contexte, les priorités et les personnes que vous voulez convaincre."],
      ["02", "Concevoir", "Une direction visuelle et fonctionnelle pour valider l’idée avant d’investir dans sa construction."],
      ["03", "Développer", "Une réalisation par étapes, avec des démonstrations et des points de validation clairs."],
      ["04", "Lancer", "Mise en ligne, vérifications, transmission et suivi. Le produit est prêt à travailler."],
    ],
    contactLabel: "UN PROJET À FAIRE AVANCER ?",
    contactPerson: "Votre demande arrive directement chez moi. Je vous réponds personnellement sous 24 heures.",
    contactPortraitAlt: "Portrait d’Aliaskar Malabaev",
    emailAlternative: "Ou écrivez directement à",
  },
  en: {
    copyEmail: "Copy email address",
    copiedEmail: "Email copied",
    heroTitle: "A website that convinces.",
    heroEmphasis: "Tools that make work easier.",
    heroText: "I help small businesses and product teams redesign websites, build business applications and automate their operations. One person, from the first sketch to launch.",
    startProject: "Let’s discuss your project",
    seeWork: "See selected work",
    proofLabel: "The profile at a glance",
    workTitle: "Three projects.",
    workEmphasis: "Real problems to solve.",
    workRole: "Role",
    works: [
      {
        index: "01 / 03",
        kind: "BUSINESS APPLICATION · ANONYMISED PROJECT",
        title: "Operational workforce planning platform",
        text: "A complex application for managing resources, assignments, absences, schedules and operational constraints — without ever exposing that complexity on screen.",
        role: "Full-stack development",
        stack: ["PHP", "JavaScript", "MySQL", "Docker"],
        visual: "planning",
        link: "/en/work/operational-planning/",
        linkLabel: "Read the case study",
      },
      {
        index: "02 / 03",
        kind: "AI PRODUCT · CARDZAP",
        title: "Turning documents into useful data",
        text: "A web product orchestrating PDF analysis, AI-assisted generation and the delivery of structured data that can be checked and actually used.",
        role: "Product architecture & development",
        stack: ["Laravel", "React", "Redis", "MySQL"],
        visual: "cardzap",
        link: "/en/work/cardzap/",
        linkLabel: "Explore the project",
      },
      {
        index: "03 / 03",
        kind: "IDENTITY & DEVELOPMENT · AMALABAEV.COM",
        title: "A freelance portfolio without a template",
        text: "A bilingual, responsive and fast editorial identity, designed and developed entirely from scratch. The code is public — judge it for yourself.",
        role: "Direction, design & development",
        stack: ["React 19", "TypeScript", "Node.js", "Custom CSS"],
        visual: "portfolio",
        link: "https://github.com/amalabaev/portfolio-freelance",
        linkLabel: "View the code",
      },
    ],
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
    engineeringCta: "View my engineering profile",
    conceptStamp: "Creative direction",
    concepts: [
      { type: "Architecture", index: "A—01", title: "Make people feel the space before their first visit.", note: "Editorial portfolio · Editable projects", visual: "architecture", visualLabels: ["HOUSE 08", "SOUTH FACADE", "PLAN / 2026", "SCALE 1:100"] },
      { type: "Healthcare", index: "H—02", title: "Reassure, guide and make booking an appointment effortless.", note: "Mobile clarity · Practical information", visual: "health", visualLabels: ["HELLO", "YOUR NEXT APPOINTMENT", "09:30", "VIDEO CONSULTATION"] },
      { type: "B2B Consulting", index: "C—03", title: "Make complex expertise immediately understandable.", note: "Structured services · Qualified enquiries", visual: "consulting", visualLabels: ["DASHBOARD", "GROWTH", "QUALIFIED LEADS", "CURRENT QUARTER"] },
    ],
    labDisclaimer: "Exploratory directions — they demonstrate a creative approach and are not attributed to clients. The figures shown are fictional.",
    steps: [
      ["01", "Define", "A focused conversation to understand the context, priorities and the people you need to convince."],
      ["02", "Design", "A visual and functional direction to validate the idea before investing in its construction."],
      ["03", "Build", "Development in clear stages, with demonstrations and visible review points along the way."],
      ["04", "Launch", "Publishing, final checks, handover and follow-up. The product is ready to work."],
    ],
    contactLabel: "A PROJECT TO MOVE FORWARD?",
    contactPerson: "Your request comes straight to me. I will reply personally within 24 hours.",
    contactPortraitAlt: "Portrait of Aliaskar Malabaev",
    emailAlternative: "Or email me directly at",
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
  const home = locale === "fr" ? "/" : "/en/";
  const engineering = locale === "fr" ? "/engineering/" : "/en/engineering/";
  const freelanceProfile = locale === "fr" ? "/developpeur-full-stack-freelance/" : "/en/freelance-full-stack-developer/";
  const directEmail = `mailto:${email}`;

  const fr = locale === "fr";
  const planning = `${home}work/operational-planning/`;
  const privacy = fr ? "/confidentialite/" : "/en/privacy/";

  return (
    <>
      <SiteHeader locale={locale} current={home} alternate={fr ? "/en/" : "/"} homePage />
      <main id="main-content" tabIndex={-1} className="portfolio-page">
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> {fr ? "ALIASKAR MALABAEV · DÉVELOPPEUR WEB FREELANCE" : "ALIASKAR MALABAEV · FREELANCE WEB DEVELOPER"}</p>
          <h1>{copy.heroTitle}<br /><em>{copy.heroEmphasis}</em></h1>
          <p className="hero-lede">{copy.heroText}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">{copy.startProject} <Icon name="upRight" /></a>
            <a className="text-link" href="#work">{copy.seeWork} <Icon name="down" /></a>
          </div>
          <div className="hero-person">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/aliaskar-malabaev.jpg" alt={copy.contactPortraitAlt} width="52" height="52" />
            <p><strong>{fr ? `${experienceYears} ans d’expérience · ancien responsable d’équipe` : `${experienceYears} years’ experience · former team lead`}</strong><span><i aria-hidden="true" />{fr ? "Disponible · France & à distance" : "Available · France & remote"}</span></p>
          </div>
        </div>
        <a className="hero-project" href={planning} aria-label={fr ? "Explorer l’étude de cas de planification opérationnelle" : "Explore the workforce planning case study"}>
          <div className="hero-project-heading"><span>{fr ? "DANS LES COULISSES D’UN PROJET" : "INSIDE A PROJECT"}</span><Icon name="upRight" size={20} /></div>
          <div className="hero-project-visual"><div className="planning-preview" aria-hidden="true"><div className="preview-toolbar"><strong>{fr ? "Planning des équipes" : "Team schedule"}</strong><span>{fr ? "LUNDI" : "MONDAY"}</span></div><div className="preview-hours"><span>08:00</span><span>12:00</span><span>16:00</span></div><div className="preview-row"><strong>{fr ? "Équipe A" : "Team A"}</strong><span className="preview-assignment">08:00 — 10:00</span></div><div className="preview-row"><strong>{fr ? "Équipe B" : "Team B"}</strong><span className="preview-busy">09:00 — 12:00</span></div><div className="preview-result"><Icon name="cornerDown" size={24} /><p><strong>{fr ? "Un conflit ? Une explication." : "A conflict? A clear explanation."}</strong>{fr ? "Les disponibilités sont vérifiées avant validation." : "Availability is checked before confirmation."}</p></div></div></div>
          <div className="hero-project-copy"><span className="tag">{fr ? "Application métier" : "Business application"}</span><h2>{fr ? "Un geste simple. Les bonnes règles derrière." : "A simple move. The right rules behind it."}</h2><p>{fr ? "Déplacer une affectation, vérifier les disponibilités, expliquer un conflit." : "Move an assignment, check availability, explain a conflict."}</p></div>
          <span className="reconstruction-label">{fr ? "Interface reconstituée · données fictives" : "Reconstructed interface · fictional data"}</span>
        </a>
      </section>
      <section className="proof-strip" aria-label={copy.proofLabel}><span>{fr ? "DU BESOIN À LA LIVRAISON" : "FROM BRIEF TO DELIVERY"}</span>{[fr ? "Design & développement" : "Design & development", fr ? "Sites & applications métier" : "Websites & business tools", fr ? "Un interlocuteur direct" : "One point of contact", "FR · EN · RU"].map(item => <strong key={item}><i><Spark /></i>{item}</strong>)}</section>

      <section className="work section" id="work">
        <div className="section-heading"><p className="section-index">01 — {fr ? "PROJETS" : "WORK"}</p><h2>{copy.workTitle}<br /><em>{copy.workEmphasis}</em></h2><p>{fr ? "Mon rôle, les choix de conception et le fonctionnement de chaque projet." : "My role, the design decisions and how each project works."}</p></div>
        <div className="work-list">
          {copy.works.map((work, index) => {
            const external = work.link.startsWith("http");
            return <article className={`work-card${index === 0 ? " work-featured" : " work-compact"}`} key={work.index}>
              <div className={`work-visual work-${work.visual}`}>
                {work.visual === "planning" && <PlanningVisual locale={locale} />}
                {work.visual === "cardzap" && <CardzapVisual locale={locale} />}
                {work.visual === "portfolio" && <PortfolioVisual locale={locale} headline={copy.heroTitle} />}
                <span className="visual-caption">{fr ? "Illustration du fonctionnement" : "Illustration of the workflow"}</span>
              </div>
              <div className="work-copy">
                <div className="work-kicker"><span>{work.index}</span><span>{work.kind}</span></div>
                <h3>{work.title}</h3><p>{work.text}</p>
                {index === 0 && <div className="work-outcome"><strong>{fr ? "LE POINT CLÉ" : "THE KEY DECISION"}</strong><p>{fr ? "Guider le déplacement dans l’interface et vérifier les contraintes côté serveur avant toute validation." : "Guide the move in the interface and check constraints on the server before confirming it."}</p></div>}
                <p className="work-role"><strong>{copy.workRole}</strong> {work.role}</p>
                <div className="work-stack">{work.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div>
                <a className="text-link" href={work.link} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{work.linkLabel}<Icon name="upRight" /></a>
              </div>
            </article>;
          })}
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading"><p className="section-index">02 — SERVICES</p><h2>{fr ? "De quoi avez-vous besoin ?" : "What do you need?"}</h2><p>{fr ? "Une intervention adaptée à votre situation, avec un périmètre défini ensemble." : "An engagement shaped around your situation, with a scope we agree together."}</p></div>
        <div className="service-grid">{copy.services.map((service) => <article className="service-card" key={service.number}>
          <div className="service-number">{service.number}</div><h3>{service.title}</h3><p>{service.text}</p>
          <ul className="service-deliverables">{service.deliverables.slice(0, 3).map(item => <li key={item}>{item}</li>)}</ul>
          <a className="text-link" href="#contact">{fr ? "Parlons de ce besoin" : "Discuss this need"}<Icon name="upRight" /></a>
        </article>)}</div>
        <a className="text-link services-profile-link" href={freelanceProfile}>{fr ? "Livrables, collaboration et questions pratiques" : "Deliverables, collaboration and practical questions"}<Icon name="right" /></a>
      </section>

      <section className="about section" id="about">
        <div className="about-portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/aliaskar-malabaev.jpg" alt={copy.contactPortraitAlt} width="400" height="480" loading="lazy" />
          <span>{fr ? "ALIASKAR MALABAEV · VOTRE INTERLOCUTEUR" : "ALIASKAR MALABAEV · YOUR POINT OF CONTACT"}</span>
        </div>
        <div className="about-copy"><p className="section-index">03 — {fr ? "À PROPOS" : "ABOUT"}</p><h2>{fr ? "La personne qui vous répond est celle qui construit." : "The person you talk to is the person who builds."}</h2><p>{fr ? `Développeur depuis ${CAREER_START_YEAR}, j’ai aussi cadré des projets et dirigé une équipe front-end. Je relie les besoins de votre entreprise aux choix de design et de développement.` : `A developer since ${CAREER_START_YEAR}, I have also scoped projects and led a front-end team. I connect your business needs with design and engineering decisions.`}</p><p>{fr ? "Formé à Paris, je travaille en français, anglais et russe, avec des équipes en France et à l’international." : "Trained in Paris, I work in French, English and Russian with teams in France and internationally."}</p><div className="about-links"><a className="text-link" href={engineering}>{copy.engineeringCta}<Icon name="right" /></a><a className="text-link" href="https://fr.linkedin.com/in/aliaskar-malabaev-6850a0130" target="_blank" rel="noreferrer">LinkedIn<Icon name="upRight" /></a></div></div>
      </section>

      <section className="process section" id="method">
        <div className="section-heading"><p className="section-index">04 — {fr ? "MÉTHODE" : "PROCESS"}</p><h2>{fr ? "Vous savez où le projet en est." : "You know where the project stands."}</h2><p>{fr ? "Des étapes visibles, des décisions partagées et une transmission à la livraison." : "Visible milestones, shared decisions and a handover at launch."}</p></div>
        <div className="steps">{copy.steps.map(([number, title, text]) => <article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="concept-section section" id="lab">
        <div className="lab-heading"><div><p className="section-index">CREATIVE LAB</p><h2>{fr ? "Un autre métier, un autre langage." : "A different field. A different language."}</h2></div><p>{fr ? "Trois explorations visuelles personnelles, sans attribution à un client." : "Three personal visual explorations, not client commissions."}</p></div>
        <div className="concept-list">{copy.concepts.map(concept => <article className="concept-card" key={concept.index}><div className={`concept-visual visual-${concept.visual}`}><span className="concept-stamp">{copy.conceptStamp}</span><ConceptVisual concept={concept} locale={locale} /></div><div className="concept-meta"><div><span>{concept.index}</span><span>{concept.type}</span></div><h3>{concept.title}</h3></div></article>)}</div>
        <p className="concept-disclaimer">{copy.labDisclaimer}</p>
      </section>

      <section className="home-faq section">
        <div><p className="section-index">{fr ? "AVANT DE COMMENCER" : "BEFORE WE START"}</p><h2>{fr ? "Quelques réponses utiles." : "A few useful answers."}</h2></div>
        <div className="faq-list">{(fr ? [
          ["Que contient la première estimation ?", "Un premier avis sur le périmètre, les priorités et les étapes. Une fourchette de budget et de délai est proposée lorsque le besoin est assez précis ; sinon, nous clarifions d’abord les points ouverts. Ce premier échange est gratuit."],
          ["Pouvez-vous reprendre mon site ou mon application ?", "Oui. Nous commençons par examiner l’existant et les points qui bloquent, puis décidons de ce qu’il faut conserver, corriger ou faire évoluer."],
          ["Que se passe-t-il après la mise en ligne ?", "La livraison comprend une transmission du projet. Les besoins de maintenance et d’évolution sont définis ensemble dans le périmètre de la mission."],
        ] : [
          ["What does the initial estimate include?", "An initial view of scope, priorities and stages. A budget and timeline range follows when the brief is clear enough; otherwise we first clarify the open questions. This initial conversation is free."],
          ["Can you take over my website or application?", "Yes. We review the existing product and its blockers, then decide what to keep, fix or develop further."],
          ["What happens after launch?", "Delivery includes a project handover. Maintenance and future development needs are agreed as part of the engagement’s scope."],
        ]).map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-intro"><p className="section-index">{copy.contactLabel}</p><h2>{fr ? "Et si on parlait" : "Let’s talk about"}<br /><em>{fr ? "de votre projet ?" : "your project."}</em></h2><p>{fr ? "Quelques lignes suffisent pour commencer : votre situation, ce qui bloque et ce que vous aimeriez améliorer." : "A few lines are enough to start: your situation, what gets in the way and what you would like to improve."}</p><div className="contact-person">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/aliaskar-malabaev.jpg" alt="" width="72" height="72" loading="lazy" /><p><strong>Aliaskar Malabaev</strong><span>{copy.contactPerson}</span></p></div><ul className="contact-assurances"><li><i><Spark /></i>{fr ? "Premier échange gratuit, sans engagement." : "A free first conversation, with no obligation."}</li><li><i><Spark /></i>{fr ? "Périmètre, prochaines étapes, puis budget et délai selon les informations disponibles." : "Scope and next steps, then budget and timing based on the information available."}</li></ul></div>
        <ProjectBriefForm locale={locale} />
        <div className="contact-alternative"><span>{copy.emailAlternative}</span><a href={directEmail}>{email}</a><CopyEmailButton email={email} idleLabel={copy.copyEmail} copiedLabel={copy.copiedEmail} errorLabel={fr ? "Sélectionnez l’adresse pour la copier" : "Select the address to copy it"} /></div>
        <p className="contact-privacy"><a href={privacy}>{fr ? "Comment vos informations sont utilisées" : "How your information is used"}</a></p>
      </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
