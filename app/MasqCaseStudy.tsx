import { Icon } from "./Icon";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import "./masq-case.css";

const announcement = "https://afjv.com/forums/sujet/8-2644-1-masq-des-joueurs-pour-une-beta-de-bluff-sur-android";

const copy = {
  fr: {
    category: "MASQ — Undercover Pop",
    title: "À chacun son mot.",
    titleEnd: "Au groupe de trouver l’intrus.",
    intro: "J’ai développé MASQ, un jeu de bluff où chacun joue sur son téléphone. La plupart des joueurs reçoivent le même mot. Un seul en reçoit un autre et tente de passer inaperçu.",
    project: "Projet personnel",
    status: "Bêta fermée Android annoncée en septembre 2026",
    languages: "Français et anglais",
    play: "Jouer une manche",
    see: "Suivre une partie",
    secretTitle: "Un mot pour soi",
    secretAlt: "Dans l’interface de jeu, la carte de Nova révèle le nom Truman Burbank.",
    secretCaption: "Nova maintient la carte pour lire « Truman Burbank ». Dès qu’elle la relâche, le nom se cache.",
    flow: "Comment se joue une manche",
    flowLead: "À partir de trois joueurs, il suffit d’un code de salon et d’un téléphone Android par personne. Chaque joueur doit savoir quand c’est à lui d’agir, même lorsque son écran affiche autre chose que celui du voisin.",
    source: "Ces trois captures montrent l’interface web de MASQ pendant une partie locale avec quatre profils fictifs.",
    rooms: "Retrouver son groupe",
    roomAlt: "Salon privé de MASQ. Nova, Luna, Pixel et Orion sont prêts à jouer.",
    roomText: "Les joueurs rejoignent le salon avec le même code. L’hôte voit qui est prêt et lance la manche. Chacun découvre alors son mot sur son propre écran.",
    votes: "Choisir son suspect",
    voteAlt: "Sur l’écran de vote, Pixel est sélectionné. Les indices des deux tours sont visibles et aucun vote n’est encore enregistré.",
    voteText: "Chacun écrit un indice à son tour. Après le dernier indice du deuxième tour, le vote s’ouvre pour tout le groupe. On peut relire les indices de chaque joueur avant de confirmer son choix.",
    zoom: "Agrandir la capture",
    role: "Mon rôle",
    build: "Partager le tour, garder le mot secret",
    buildText: "J’ai développé l’application avec React Native et Expo. Le serveur garde l’état commun de la partie et transmet à chaque joueur son propre mot. Quand un indice arrive, les autres écrans récupèrent le tour en cours. Cette séparation permet de suivre la même manche sans dévoiler les cartes des voisins.",
    replay: "Du premier salon à la revanche",
    replayText: "À la fin du vote, les joueurs découvrent les rôles et peuvent demander une revanche. Chacun confirme dans le même salon, puis le jeu distribue de nouveaux mots. Pour la préversion de septembre 2026, deux tests automatisés ont suivi une partie puis une revanche dans trois sessions web distinctes.",
    beta: "Le 16 septembre 2026, j’ai annoncé la bêta fermée Android sur Google Play en français et en anglais.",
    announcement: "Lire l’annonce de la bêta",
    cta: "Une étape de votre travail se joue sur téléphone ?",
    ctaText: "Décrivez qui utilise le téléphone, où cette personne se trouve et ce qu’un collègue doit voir après son action.",
    button: "Étudier mon parcours mobile",
    back: "Tous les projets",
  },
  en: {
    category: "MASQ — Undercover Pop",
    title: "Everyone gets a word.",
    titleEnd: "Can the group spot the impostor?",
    intro: "I built MASQ, a bluffing game people play together on their own phones. Most players get the same word. One gets a different word and tries to blend in.",
    project: "Personal project",
    status: "Android closed beta announced in September 2026",
    languages: "French and English",
    play: "Play a round",
    see: "Follow a round",
    secretTitle: "A word of your own",
    secretAlt: "Nova’s card reveals the name Truman Burbank in the French game interface.",
    secretCaption: "In the French interface, Nova holds the card to read “Truman Burbank”. Lifting a finger hides the name again.",
    flow: "How a round works",
    flowLead: "A group of three or more needs a room code and one Android phone per player. Everyone needs to know when to act, even when their screen shows something different from the one next to them.",
    source: "All three screenshots show MASQ’s French web interface during a local game with four fictional player profiles.",
    rooms: "Get the group together",
    roomAlt: "The private room in French. Nova, Luna, Pixel and Orion are all ready to play.",
    roomText: "Players join with the same room code. The host can see who is ready and starts the round. Each player then discovers their word on their own screen.",
    votes: "Pick a suspect",
    voteAlt: "Pixel is selected on the voting screen. Clues from both rounds are visible and no votes have been submitted yet.",
    voteText: "Players take turns writing clues. When the last clue of the second round is in, voting opens for everyone. Each player can read the clues again before confirming a choice.",
    zoom: "Enlarge screenshot",
    role: "My role",
    build: "A shared turn and a private word",
    buildText: "I developed the app with React Native and Expo. The server keeps track of the shared game and sends each player their own word. When a clue comes in, the other screens pick up the current turn. Everyone can follow the same round while keeping their neighbours’ cards a mystery.",
    replay: "From the first room to a rematch",
    replayText: "After the vote, players discover their roles and can ask for a rematch. Everyone confirms in the same room and the game deals a fresh set of words. For the September 2026 preview, two automated tests took three separate browser sessions through a game and a rematch.",
    beta: "On 16 September 2026, I announced a closed Android beta on Google Play, available in French and English at the time.",
    announcement: "Read the beta announcement (French)",
    cta: "Does part of your team’s work happen on a phone?",
    ctaText: "Tell me who uses the phone, where they are and what a colleague needs to see after they act.",
    button: "Discuss my mobile workflow",
    back: "All projects",
  },
};

export function MasqCaseStudy({ locale }: { locale: keyof typeof copy }) {
  const c = copy[locale];
  const fr = locale === "fr";
  const home = fr ? "/" : "/en/";
  const stages = [
    { image: "salon", alt: c.roomAlt, title: c.rooms, text: c.roomText },
    { image: "vote", alt: c.voteAlt, title: c.votes, text: c.voteText },
  ];

  return <>
    <SiteHeader locale={locale} current={`${home}work/masq/`} alternate={fr ? "/en/work/masq/" : "/work/masq/"} />
    <main id="main-content" tabIndex={-1} className="masq-case">
      <section className="masq-hero">
        <div className="masq-hero-copy">
          <p className="masq-kicker">{c.category}</p>
          <h1>{c.title} <em>{c.titleEnd}</em></h1>
          <p className="masq-intro">{c.intro}</p>
          <p className="masq-meta">{c.project} · {c.languages}<br />{c.status}</p>
          <div className="hero-actions">
            <a className="button button-dark" href={`/masq/manche/?lang=${locale}`}>{c.play}<Icon name="right" /></a>
            <a className="masq-jump" href="#masq-gameplay">{c.see}<Icon name="down" size={16} /></a>
          </div>
        </div>
        <figure className="masq-feature">
          <a className="masq-feature-image" href="/masq/mot-secret.webp" aria-label={`${c.zoom} — ${c.secretTitle}`}>
            <img src="/masq/mot-secret.webp" alt={c.secretAlt} width="1080" height="1920" />
          </a>
          <figcaption><strong>{c.secretTitle}</strong><span>{c.secretCaption}</span></figcaption>
        </figure>
      </section>
      <section id="masq-gameplay" className="masq-play" aria-labelledby="masq-play-title">
        <div className="masq-play-intro">
          <h2 id="masq-play-title">{c.flow}</h2>
          <div><p>{c.flowLead}</p><p className="masq-source">{c.source}</p></div>
        </div>
        <div className="masq-gallery">
          {stages.map(stage => <figure key={stage.image}>
            <a className={`masq-image-field masq-image-${stage.image}`} href={`/masq/${stage.image}.webp`} aria-label={`${c.zoom} — ${stage.title}`}>
              <img src={`/masq/${stage.image}.webp`} alt={stage.alt} width="1080" height="1920" loading="lazy" />
            </a>
            <figcaption><h3>{stage.title}</h3><p>{stage.text}</p></figcaption>
          </figure>)}
        </div>
      </section>
      <section className="masq-making" aria-label={c.role}>
        <p className="masq-kicker">{c.role}</p>
        <div><h2>{c.build}</h2><p>{c.buildText}</p></div>
        <div><h2>{c.replay}</h2><p>{c.replayText}</p><p>{c.beta}</p>
          <a className="masq-source-link" href={announcement} hrefLang="fr">{c.announcement}<Icon name="upRight" size={15} /></a>
        </div>
      </section>
      <section className="engineering-cta masq-cta">
        <h2>{c.cta}</h2><p>{c.ctaText}</p>
        <div><a className="button button-acid" href={`${home}?need=mobile#contact`}>{c.button}<Icon name="upRight" /></a>
          <a className="text-link" href={`${home}#work`}>{c.back}<Icon name="right" /></a></div>
      </section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}
