const email = "amalabaev@gmail.com";

const services = [
  {
    number: "01",
    title: "Direction & conversion",
    text: "Une page d’accueil claire, un univers visuel singulier et un parcours qui transforme l’attention en prise de contact.",
    tags: ["Positionnement", "UX / UI", "Responsive"],
  },
  {
    number: "02",
    title: "Développement full-stack",
    text: "Un site React rapide, fiable et proprement construit, avec les fonctionnalités réellement utiles à votre activité.",
    tags: ["React", "Node.js", "Intégrations"],
  },
  {
    number: "03",
    title: "Mise en ligne & autonomie",
    text: "Je m’occupe des détails techniques et vous livre une base simple à faire évoluer, sans dépendance inutile.",
    tags: ["Performance", "SEO", "Suivi"],
  },
];

const concepts = [
  {
    type: "Architecture",
    index: "A—01",
    title: "Faire ressentir les espaces avant la première visite.",
    note: "Portfolio éditorial · Projets administrables",
    visual: "architecture",
  },
  {
    type: "Santé",
    index: "S—02",
    title: "Rassurer, orienter et faciliter la prise de rendez-vous.",
    note: "Clarté mobile · Informations pratiques",
    visual: "health",
  },
  {
    type: "Conseil B2B",
    index: "C—03",
    title: "Rendre une expertise complexe immédiatement lisible.",
    note: "Offre structurée · Demandes qualifiées",
    visual: "consulting",
  },
];

const steps = [
  ["01", "Cadrer", "Un échange court pour comprendre votre activité, vos priorités et les personnes que vous voulez convaincre."],
  ["02", "Concevoir", "Une première direction visuelle privée pour valider l’idée avant d’aller plus loin."],
  ["03", "Développer", "Une construction par étapes, avec des points de validation clairs et visibles."],
  ["04", "Lancer", "Mise en ligne, vérifications et prise en main. Votre vitrine est prête à travailler."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Retour en haut">
          <span className="brand-mark">AM</span>
          <span className="brand-copy">Aliaskar Malabaev<br />Développeur indépendant</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#expertise">Expertise</a>
          <a href="#concepts">Concepts</a>
          <a href="#methode">Méthode</a>
        </nav>
        <a className="header-cta" href={`mailto:${email}?subject=Mon projet de site vitrine`}>
          Parler du projet <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Développeur web full-stack freelance</p>
          <h1>Votre activité mérite mieux qu’un site <em>« en construction ».</em></h1>
          <p className="hero-lede">
            Je conçois des sites vitrines rapides, modernes et faciles à faire évoluer — pour inspirer confiance et donner envie de vous contacter.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={`mailto:${email}?subject=Mon projet de site vitrine`}>Démarrer un projet <span>↗</span></a>
            <a className="text-link" href="#concepts">Voir mon approche <span>↓</span></a>
          </div>
          <div className="availability">
            <span className="status-dot" />
            <span><strong>Disponible pour de nouveaux projets</strong><br />Réponse sous 24 heures</span>
          </div>
        </div>

        <div className="hero-stage" aria-label="Aperçu d’une méthode de conception web">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="browser-card">
            <div className="browser-bar">
              <span className="browser-dots"><i /><i /><i /></span>
              <span className="browser-url">votre-site.fr</span>
              <span className="browser-live">LIVE</span>
            </div>
            <div className="browser-body">
              <p className="browser-kicker">Votre nouvelle vitrine</p>
              <p className="browser-title">Claire.<br /><span>Rapide.</span><br />Mémorable.</p>
              <div className="browser-score">
                <div><strong>01</strong><span>Message<br />juste</span></div>
                <div><strong>02</strong><span>Mobile<br />fluide</span></div>
                <div><strong>03</strong><span>Contact<br />évident</span></div>
              </div>
            </div>
          </div>
          <div className="stage-note note-top">Design singulier <b>✦</b></div>
          <div className="stage-note note-bottom"><b>↳</b> Pensé pour convertir</div>
        </div>
      </section>

      <div className="ticker" aria-label="Compétences clés">
        <div>
          <span>DESIGN SUR MESURE</span><i>✦</i><span>REACT + NODE.JS</span><i>✦</i><span>RESPONSIVE</span><i>✦</i><span>SEO</span><i>✦</i><span>PERFORMANCE</span><i>✦</i><span>DESIGN SUR MESURE</span><i>✦</i>
        </div>
      </div>

      <section className="services section" id="expertise">
        <div className="section-heading">
          <p className="section-index">01 — EXPERTISE</p>
          <h2>Je construis le site.<br /><em>Vous gardez le contrôle.</em></h2>
          <p>De la première idée à la mise en ligne, un seul interlocuteur et une méthode lisible.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
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
          <p className="section-index">02 — DIRECTIONS CRÉATIVES</p>
          <h2>Un site qui ressemble<br /><em>à votre métier.</em></h2>
          <p>Quelques pistes exploratoires pour montrer comment une identité peut servir un objectif concret.</p>
        </div>
        <div className="concept-list">
          {concepts.map((concept) => (
            <article className="concept-card" key={concept.index}>
              <div className={`concept-visual visual-${concept.visual}`} aria-hidden="true">
                <span className="concept-stamp">CONCEPT<br />EXPLORATOIRE</span>
                <div className="visual-frame"><i /><i /><i /></div>
                <span className="visual-word">{concept.type}</span>
              </div>
              <div className="concept-meta">
                <div><span>{concept.index}</span><span>{concept.type}</span></div>
                <h3>{concept.title}</h3>
                <p>{concept.note}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="concept-disclaimer">Ces directions sont des démonstrations créatives, pas des réalisations attribuées à des clients.</p>
      </section>

      <section className="process section" id="methode">
        <div className="section-heading process-heading">
          <p className="section-index">03 — MÉTHODE</p>
          <h2>Simple à suivre.<br /><em>Solide à l’arrivée.</em></h2>
        </div>
        <div className="steps">
          {steps.map(([number, title, text]) => (
            <article className="step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <i aria-hidden="true">↘</i>
            </article>
          ))}
        </div>
        <div className="promise-strip">
          <span className="promise-mark">AM</span>
          <p><strong>Pas de jargon. Pas d’agence entre nous.</strong><br />Vous échangez directement avec la personne qui conçoit et développe votre site.</p>
          <span className="promise-side">VALIDATIONS<br />PAR ÉTAPES</span>
        </div>
      </section>

      <section className="about section">
        <div className="about-label">
          <p className="section-index">04 — À PROPOS</p>
          <div className="portrait-type" aria-hidden="true"><span>A</span><i>+</i><span>M</span></div>
        </div>
        <div className="about-copy">
          <p className="about-intro">Je suis <strong>Aliaskar</strong>, développeur full-stack indépendant.</p>
          <p className="about-large">J’aide les petites entreprises et les professionnels à transformer une présence web provisoire ou datée en une vitrine <em>crédible, utile et vivante.</em></p>
          <p className="about-small">Plutôt que de vous montrer un portfolio générique, je préfère partir de votre métier et vous proposer une première direction concrète. Nous ne poursuivons que si elle vous paraît juste.</p>
          <a className="text-link" href="https://github.com/amalabaev" target="_blank" rel="noreferrer">Voir mon GitHub <span>↗</span></a>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-orb" aria-hidden="true"><span>?</span></div>
        <p className="section-index">UN PROJET EN TÊTE ?</p>
        <h2>Votre site peut commencer<br />à convaincre <em>dès maintenant.</em></h2>
        <p>Parlez-moi de votre activité et de ce que votre site devrait enfin accomplir.</p>
        <a className="button button-acid" href={`mailto:${email}?subject=Mon projet de site vitrine`}>Écrire à Aliaskar <span>↗</span></a>
        <a className="contact-email" href={`mailto:${email}`}>{email}</a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">AM</span><span>Sites web sur mesure<br />React · Node.js</span></a>
        <p>© 2026 Aliaskar Malabaev<br />Développeur web full-stack freelance</p>
        <div><a href="https://github.com/amalabaev" target="_blank" rel="noreferrer">GitHub ↗</a><a href={`mailto:${email}`}>Email ↗</a></div>
      </footer>
    </main>
  );
}
