# Portfolio freelance — Aliaskar Malabaev

Site vitrine bilingue français/anglais d’Aliaskar Malabaev, développeur web full-stack freelance. Les deux versions présentent son positionnement, ses services, sa méthode de travail et plusieurs directions créatives clairement identifiées comme des concepts.

## Technologies

- React 19
- Node.js 22+
- TypeScript
- vinext / Vite
- CSS responsive sur mesure
- Polices auto-hébergées (Instrument Serif, Inter) — aucun appel à un CDN tiers

## Lancer le projet

Prérequis : Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

La version française est disponible sur `http://localhost:3000` et la version anglaise sur `http://localhost:3000/en`.

## Vérifier la version de production

```bash
npm run export:pages
```

Cette commande construit le site, exécute les tests et génère la version statique
dans `pages-dist`. Le workflow GitHub Actions `.github/workflows/deploy-pages.yml`
publie automatiquement cette version sur GitHub Pages à chaque push sur `main`.

## Personnalisation

| Fichier | Contenu |
| --- | --- |
| `app/profile.ts` | **Parcours, dates, formation et chiffres.** À revalider avant chaque mise en ligne |
| `app/PortfolioPage.tsx` | Textes, services, études de cas, concepts et étapes (FR + EN) |
| `app/Visuals.tsx` | Les maquettes d’interface en SVG : tableau de bord, planning, pipeline, plan d’architecte |
| `app/Icon.tsx` | Flèches et puces en SVG (les flèches Unicode tombaient sur la police emoji) |
| `app/globals.css` | Tokens de design, typographie, composants et responsive |
| `public/fonts/` | Les polices auto-hébergées |

Le nombre d'années d'expérience est calculé au build à partir de
`CAREER_START_YEAR` (`app/profile.ts`) : il ne vieillit donc pas tout seul entre
deux déploiements. La chronologie décrit des **rôles et des contextes**, jamais
des noms d'employeurs — ne pas y recopier un CV sans l'avoir remis à jour.

Les couleurs de graphique (`#2f47c9` indigo, `#d4482c` terre cuite, `#0f8a73` sarcelle)
ont été validées pour rester distinguables en cas de daltonisme ; toute modification
doit conserver cette séparation.

## Contact

[amalabaev@gmail.com](mailto:amalabaev@gmail.com) · [github.com/amalabaev](https://github.com/amalabaev)
