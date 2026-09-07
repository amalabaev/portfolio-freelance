import { Icon } from "./Icon";

export function SiteFooter({ locale }: { locale: "fr" | "en" }) {
  const fr = locale === "fr";
  const home = fr ? "/" : "/en/";
  return <footer className="site-footer">
    <a className="brand" href={home}><span className="brand-mark">AM</span><span>Aliaskar Malabaev<br /><small>{fr ? "Design, produit & développement" : "Design, product & development"}</small></span></a>
    <p>© {new Date().getFullYear()} Aliaskar Malabaev</p>
    <nav aria-label={fr ? "Liens de pied de page" : "Footer links"}>
      <a href={fr ? "/engineering/" : "/en/engineering/"}>{fr ? "Profil technique" : "Engineering"}</a>
      <a href={fr ? "/confidentialite/" : "/en/privacy/"}>{fr ? "Confidentialité" : "Privacy"}</a>
      <a href="https://github.com/amalabaev" target="_blank" rel="noreferrer">GitHub <Icon name="upRight" size={13} /></a>
      <a href="https://fr.linkedin.com/in/aliaskar-malabaev-6850a0130" target="_blank" rel="noreferrer">LinkedIn <Icon name="upRight" size={13} /></a>
    </nav>
  </footer>;
}
