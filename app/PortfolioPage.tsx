import { GarmentLedgerComparison } from "./GarmentLedgerComparison";
import { CopyEmailButton } from "./CopyEmailButton";
import { Icon, Spark } from "./Icon";
import { CAREER_START_YEAR } from "./profile";
import { ProjectBriefForm } from "./ProjectBriefForm";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import {
  ArchitectureBlueprint,
  CardzapVisual,
  ConsultingDashboard,
  HealthAppointment,
} from "./Visuals";
import "./portfolio-preview.css";

type Locale = "fr" | "en";

const email = "amalabaev@gmail.com";

const content = {
  fr: {
    copyEmail: "Copier l’adresse",
    copiedEmail: "Adresse copiée",
    heroTitle: "Web, mobile",
    heroEmphasis: "et intégration d’IA.",
    heroText: "Je développe votre site, vos outils métier et les applications que vous proposez à vos utilisateurs. J’intègre aussi l’IA à vos outils et à vos produits, par exemple pour extraire des champs à vérifier ou créer des cartes de révision.",
    startProject: "Parlons de votre projet",
    seeMasq: "Voir mon jeu mobile",
    proofLabel: "Mes domaines",
    workTitle: "Trois projets",
    workEmphasis: "à explorer.",
    workRole: "Rôle",
    works: [
      {
        index: "01 / 03",
        kind: "MASQ · PRODUIT PERSONNEL",
        title: "Un jeu multijoueur pour les soirées entre amis.",
        text: "J’ai créé MASQ, un jeu mobile de déduction sociale en français et en anglais. Découvrez ce que chaque joueur voit sur son téléphone et comment le groupe progresse jusqu’au vote.",
        role: "Conception du jeu et développement",
        stack: ["Jeu mobile", "Multijoueur", "FR / EN"],
        visual: "masq",
        link: "/work/masq/",
        linkLabel: "Découvrir MASQ en images",
      },
      {
        index: "02 / 03",
        kind: "GARMENTLEDGER · APPLICATION MÉTIER",
        title: "Le tarif facturé correspond-il au contrat ?",
        text: "GarmentLedger aide les équipes finance à contrôler leurs factures de location de vêtements de travail. À partir d’une ligne à vérifier, elles peuvent retrouver la règle du contrat, examiner l’écart et suivre l’avoir fournisseur.",
        role: "Conception produit et développement",
        stack: ["Application web B2B", "Pilote sur invitation"],
        visual: "garmentledger",
        link: "/work/garmentledger/",
        linkLabel: "Suivre un écart de facturation",
      },
      {
        index: "03 / 03",
        kind: "PRODUIT IA · CARDZAP",
        title: "Du document aux cartes de révision.",
        text: "Cardzap génère des cartes de révision à partir de documents. Sa fiche publique explique le traitement à l’aide d’un compte rendu fictif et montre comment signaler une date qui reste à confirmer.",
        role: "Architecture produit & développement",
        stack: ["Laravel", "React", "Redis", "MySQL"],
        visual: "cardzap",
        link: "/work/cardzap/",
        linkLabel: "Voir l’exemple documentaire",
      },
    ],
    services: [
      {
        number: "01",
        need: "web",
        title: "Sites et applications web",
        text: "Un site à créer ou à refondre, un portail client ou un outil interne. Nous partons de ce que votre visiteur ou votre équipe doit pouvoir faire.",
        deliverables: ["Parcours et maquette à valider ensemble", "Interface adaptée au téléphone et à l’ordinateur", "Prise en main par votre équipe"],
        action: "Décrire mon projet web",
      },
      {
        number: "02",
        need: "mobile",
        title: "Applications mobiles",
        text: "Un outil à utiliser sur le terrain, un jeu à partager entre amis… Nous testons le geste principal sur un téléphone avant de définir la première version.",
        deliverables: ["Un parcours prioritaire à prototyper", "Essais sur les téléphones visés", "Périmètre de la première version"],
        action: "Décrire mon projet mobile",
      },
      {
        number: "03",
        need: "ai",
        title: "Automatisation et intégration d’IA",
        text: "Je peux relier deux outils pour éviter une double saisie, proposer des champs à vérifier avant export ou ajouter une fonction IA à votre produit.",
        deliverables: ["Un flux ou une fonctionnalité à tester", "Un essai sur des exemples représentatifs", "Des critères pour décider de la suite"],
        action: "Décrire mon besoin d’intégration",
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
    contactPerson: "Votre demande m’arrive directement. Nous pouvons échanger en français, en anglais ou en russe.",
    contactPortraitAlt: "Portrait d’Aliaskar Malabaev",
    emailAlternative: "Ou écrivez directement à",
  },
  en: {
    copyEmail: "Copy email address",
    copiedEmail: "Email copied",
    heroTitle: "Web, mobile",
    heroEmphasis: "and AI integration.",
    heroText: "I build websites, internal tools and apps for your customers. I also integrate AI into the tools your team uses and the products you offer, whether that means extracting document fields for review or generating study flashcards.",
    startProject: "Let’s discuss your project",
    seeMasq: "Explore my mobile game",
    proofLabel: "What I build",
    workTitle: "Three projects",
    workEmphasis: "to explore.",
    workRole: "Role",
    works: [
      {
        index: "01 / 03",
        kind: "MASQ · PERSONAL PRODUCT",
        title: "A multiplayer game for a night with friends.",
        text: "I created MASQ, a mobile social deduction game in French and English. See what each player sees on their phone and how the group gets from the opening round to the vote.",
        role: "Game design and development",
        stack: ["Mobile game", "Multiplayer", "FR / EN"],
        visual: "masq",
        link: "/en/work/masq/",
        linkLabel: "See MASQ in action",
      },
      {
        index: "02 / 03",
        kind: "GARMENTLEDGER · BUSINESS SOFTWARE",
        title: "Does the invoiced rate match the contract?",
        text: "GarmentLedger helps finance teams check workwear rental invoices. They can trace a flagged line to the relevant contract rule, review the difference and follow the supplier credit through to its application.",
        role: "Product design and development",
        stack: ["B2B web app", "Invitation-only pilot"],
        visual: "garmentledger",
        link: "/en/work/garmentledger/",
        linkLabel: "Follow an invoice discrepancy",
      },
      {
        index: "03 / 03",
        kind: "AI PRODUCT · CARDZAP",
        title: "From documents to study flashcards.",
        text: "Cardzap generates flashcards from documents. The public case study uses fictional meeting notes to explain the workflow and show how a missing date can be flagged for review.",
        role: "Product architecture & development",
        stack: ["Laravel", "React", "Redis", "MySQL"],
        visual: "cardzap",
        link: "/en/work/cardzap/",
        linkLabel: "See the document example",
      },
    ],
    services: [
      {
        number: "01",
        need: "web",
        title: "Websites and web apps",
        text: "A new website, a redesign, a customer portal or an internal tool. We start with what your visitors or your team need to do.",
        deliverables: ["User flows and designs to review together", "An interface for phones and computers", "A handover for your team"],
        action: "Describe my web project",
      },
      {
        number: "02",
        need: "mobile",
        title: "Mobile apps",
        text: "Does your team work in the field, or does your game bring people together on their phones? We can try the main interaction on a device before defining the first release.",
        deliverables: ["A prototype of the main user journey", "Tests on the phones you want to support", "An agreed scope for the first release"],
        action: "Describe my mobile project",
      },
      {
        number: "03",
        need: "ai",
        title: "Automation and AI integration",
        text: "I can connect tools to avoid duplicate data entry, flag document fields for review before export, or add an AI feature to your product.",
        deliverables: ["One workflow or feature to test", "A trial with representative examples", "Criteria for deciding whether to proceed"],
        action: "Describe my integration project",
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
    contactPerson: "Your message comes straight to me. We can discuss your project in English, French or Russian.",
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
          <p className="eyebrow"><span /> {fr ? "ALIASKAR MALABAEV · DÉVELOPPEUR FULL-STACK FREELANCE" : "ALIASKAR MALABAEV · FREELANCE FULL-STACK DEVELOPER"}</p>
          <h1>{copy.heroTitle}<br /><em>{copy.heroEmphasis}</em></h1>
          <p className="hero-lede">{copy.heroText}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">{copy.startProject} <Icon name="upRight" /></a>
            <a className="text-link" href={`${home}work/masq/`}>{copy.seeMasq} <Icon name="right" /></a>
          </div>
          <div className="hero-person">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/aliaskar-malabaev.jpg" alt={copy.contactPortraitAlt} width="52" height="52" />
            <p><strong>{fr ? "Basé à Bichkek, formé à Paris" : "Based in Bishkek, trained in Paris"}</strong><span><i aria-hidden="true" />{fr ? "À distance · français, anglais et russe" : "Available remotely · English, French and Russian"}</span></p>
          </div>
        </div>
        <a className="hero-project" href={planning} aria-label={fr ? "Essayer la démo de planning" : "Try the planning demo"}>
          <div className="hero-project-heading"><span>{fr ? "ESSAYER LA DÉMO DE PLANNING" : "TRY THE PLANNING DEMO"}</span><Icon name="upRight" size={20} /></div>
          <div className="hero-project-visual"><div className="planning-preview" aria-hidden="true"><div className="preview-toolbar"><strong>{fr ? "Planning des équipes" : "Team schedule"}</strong><span>{fr ? "LUNDI" : "MONDAY"}</span></div><div className="preview-hours"><span>08:00</span><span>12:00</span><span>16:00</span></div><div className="preview-row"><strong>{fr ? "Équipe A" : "Team A"}</strong><span className="preview-assignment">08:00 — 10:00</span></div><div className="preview-row"><strong>{fr ? "Équipe B" : "Team B"}</strong><span className="preview-busy">09:00 — 12:00</span></div><div className="preview-result"><Icon name="cornerDown" size={24} /><p><strong>{fr ? "Un conflit ? Une explication." : "A conflict? A clear explanation."}</strong>{fr ? "Les disponibilités sont vérifiées avant validation." : "Availability is checked before confirmation."}</p></div></div></div>
          <div className="hero-project-copy"><span className="tag">{fr ? "Application métier" : "Business application"}</span><h2>{fr ? "Peut-on déplacer cette intervention ?" : "Can this team take the assignment?"}</h2><p>{fr ? "Essayez 9 h, puis 14 h, et voyez quand le planning autorise le changement." : "Try 9 am, then 2 pm, and see when the schedule allows the move."}</p></div>
          <span className="reconstruction-label">{fr ? "Interface reconstituée · données fictives" : "Reconstructed interface · fictional data"}</span>
        </a>
      </section>
      <section className="proof-strip" aria-label={copy.proofLabel}><span>{fr ? "MES DOMAINES" : "WHAT I BUILD"}</span>{[fr ? "Sites web" : "Websites", fr ? "Applications métier" : "Business apps", fr ? "Applications mobiles" : "Mobile apps", fr ? "Intégrations d’IA" : "AI integrations"].map(item => <strong key={item}><i><Spark /></i>{item}</strong>)}</section>

      <section className="work section" id="work">
        <div className="section-heading"><p className="section-index">01 — {fr ? "PROJETS" : "WORK"}</p><h2>{copy.workTitle}<br /><em>{copy.workEmphasis}</em></h2><p>{fr ? "Mon rôle, les choix de conception et le fonctionnement de chaque projet." : "My role, the design decisions and how each project works."}</p></div>
        <div className="work-list">
          {copy.works.map((work) => (
            <article className={`work-card ${work.visual === "masq" ? "work-featured" : "work-compact"}`} key={work.index}>
              <div className={`work-visual work-${work.visual}`}>
                {work.visual === "garmentledger" && (
                  <div className="ledger-home-preview">
                    <GarmentLedgerComparison locale={locale} />
                    <a className="ledger-home-evidence" href="/garmentledger/controle.webp">
                      {fr ? "Voir la capture du contrôle" : "View the audit screenshot"}<Icon name="upRight" size={14} />
                    </a>
                  </div>
                )}
                {work.visual === "cardzap" && <CardzapVisual locale={locale} />}
                {work.visual === "masq" && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="masq-home-screen" src="/masq/mot-secret.webp" width={1080} height={1920} loading="lazy" alt={fr ? "Dans MASQ, Nova découvre son mot secret, Truman Burbank." : "In MASQ, Nova sees their secret word, Truman Burbank."} />
                )}
                {work.visual === "masq" && <span className="visual-caption">{fr ? "Capture du jeu · partie locale" : "Game screenshot · local session"}</span>}
                {work.visual === "cardzap" && <span className="visual-caption">{fr ? "Illustration du fonctionnement" : "Workflow illustration"}</span>}
              </div>
              <div className="work-copy">
                <div className="work-kicker"><span>{work.index}</span><span>{work.kind}</span></div>
                <h3>{work.title}</h3><p>{work.text}</p>
                {work.visual === "masq" && <div className="work-outcome"><strong>{fr ? "LA PARTIE" : "HOW IT PLAYS"}</strong><p>{fr ? "Un joueur reçoit un mot différent des autres. Après deux tours d’indices, chacun vote pour démasquer l’intrus." : "One player gets a different word. After two rounds of clues, everyone votes to uncover the impostor."}</p></div>}
                <p className="work-role"><strong>{copy.workRole}</strong> {work.role}</p>
                <div className="work-stack">{work.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div>
                <a className="text-link" href={work.link}>{work.linkLabel}<Icon name="upRight" /></a>
              </div>
            </article>
          ))}
        </div>
        <a className="text-link services-profile-link" href="https://github.com/amalabaev/portfolio-freelance" target="_blank" rel="noreferrer">{fr ? "Voir le code de ce site bilingue" : "View the source for this bilingual website"}<Icon name="upRight" /></a>
      </section>

      <section className="services section" id="services">
        <div className="section-heading"><p className="section-index">02 — SERVICES</p><h2>{fr ? "De quoi avez-vous besoin ?" : "What do you need?"}</h2><p>{fr ? "Une intervention adaptée à votre situation, avec un périmètre défini ensemble." : "An engagement shaped around your situation, with a scope we agree together."}</p></div>
        <div className="service-grid">{copy.services.map((service) => <article className="service-card" key={service.number}>
          <div className="service-number">{service.number}</div><h3>{service.title}</h3><p>{service.text}</p>
          <ul className="service-deliverables">{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul>
          <a className="text-link" href={`${home}?need=${service.need}#contact`}>{service.action}<Icon name="upRight" /></a>
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
