"use client";

import { useEffect, useRef } from "react";
import { Icon } from "./Icon";

export function SiteHeader({ locale, current, alternate, homePage = false }: {
  locale: "fr" | "en";
  current: string;
  alternate: string;
  homePage?: boolean;
}) {
  const menu = useRef<HTMLDetailsElement>(null);
  const fr = locale === "fr";
  const home = fr ? "/" : "/en/";
  const contact = `${home}#contact`;
  const closeMenu = () => { if (menu.current) menu.current.open = false; };
  const links = homePage
    ? [["#work", fr ? "Projets" : "Work"], ["#services", "Services"], ["#about", fr ? "À propos" : "About"]]
    : [[home, fr ? "Le portfolio" : "Portfolio"], [`${home}#work`, fr ? "Projets" : "Work"]];

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (menu.current?.open && !menu.current.contains(event.target as Node)) menu.current.open = false;
    };
    const closeEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeEscape);
    };
  }, []);

  return <>
    <a className="skip-link" href="#main-content">{fr ? "Aller au contenu" : "Skip to content"}</a>
    <header className="site-header">
      <a className="brand" href={home} aria-label={fr ? "Aliaskar Malabaev — accueil" : "Aliaskar Malabaev — home"}>
        <span className="brand-mark">AM</span>
        <span className="brand-copy"><strong>Aliaskar Malabaev</strong>{fr ? "Développeur full-stack freelance" : "Freelance full-stack developer"}</span>
      </a>
      <nav aria-label={fr ? "Navigation principale" : "Main navigation"}>{links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>
      <div className="header-actions">
        <div className="language-switch" aria-label={fr ? "Choisir la langue" : "Choose language"}>
          <a href={fr ? current : alternate} hrefLang="fr" className={fr ? "active" : ""} aria-current={fr ? "page" : undefined}>FR</a><span aria-hidden="true">/</span>
          <a href={fr ? alternate : current} hrefLang="en" className={!fr ? "active" : ""} aria-current={!fr ? "page" : undefined}>EN</a>
        </div>
        <a className="header-cta" href={contact}><span className="header-full">{fr ? "Parlons de votre projet" : "Let’s talk"}</span><span className="header-short">Contact</span><Icon name="upRight" size={14} /></a>
        <details ref={menu} className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label={fr ? "Navigation mobile" : "Mobile navigation"}>
            {links.map(([href, label]) => <a href={href} key={href} onClick={closeMenu}>{label}</a>)}
            <a href={fr ? "/engineering/" : "/en/engineering/"} onClick={closeMenu}>{fr ? "Profil technique" : "Engineering profile"}</a>
            <a className="menu-contact" href={contact} onClick={closeMenu}>{fr ? "Parler de mon projet" : "Discuss my project"}<Icon name="upRight" size={16} /></a>
          </nav>
        </details>
      </div>
    </header>
  </>;
}
