# Portfolio freelance — Aliaskar Malabaev

Portfolio bilingue français/anglais : sites web, applications métier et automatisations. L’accueil présente les services et les projets ; les pages dédiées détaillent le planning opérationnel, Cardzap, la collaboration et le profil technique.

## Lancer en local

Node.js 22 est requis. La version de référence est fixée dans `.nvmrc` et utilisée par la CI.

```bash
nvm install
nvm use
npm ci
npm run dev
```

Français : http://localhost:3000/ · Anglais : http://localhost:3000/en/

La commande `dev` reste active dans le terminal. `Ctrl+C` arrête le serveur. Si le navigateur conserve une ancienne redirection locale, utiliser http://127.0.0.1:3000/ ou recharger sans cache.

## Vérifier sans publier

```bash
npm run lint
npx tsc --noEmit
npm run export:pages
npm audit
```

`export:pages` construit le site, exécute les tests et génère 12 pages statiques dans `pages-dist`, avec leurs variantes de langue, liens canoniques, sitemap et robots.txt. Cette commande ne publie rien. Pour examiner cet export :

```bash
python3 -m http.server 4173 --bind 127.0.0.1 --directory pages-dist
```

Les tests du formulaire utilisent des réponses simulées : ils ne contactent pas FormSubmit et n’envoient aucun email. Ils vérifient la validation des URL, les envois simultanés, les erreurs, les nouvelles tentatives explicites et l’expiration du délai d’attente. `npm test` reconstruit puis lance tous les tests ; `npm run test:checks` utilise le dernier build.

Le workflow existant `.github/workflows/deploy-pages.yml` publie sur GitHub Pages lors d’un push sur `main`. Les modifications locales et les vérifications ci-dessus ne le déclenchent pas.

## Organisation

| Fichier | Rôle |
| --- | --- |
| `app/Document.tsx` | Document HTML, polices locales, métadonnées communes et données structurées |
| `app/(fr)/layout.tsx`, `app/en/layout.tsx` | Langue HTML définie dès le rendu serveur, sans mutation après chargement |
| `app/SiteHeader.tsx`, `app/SiteFooter.tsx` | Navigation commune, menu mobile, contact et confidentialité |
| `app/PortfolioPage.tsx` | Accueil, contenus FR/EN, services, méthode, FAQ et concepts |
| `app/PlanningCaseStudy.tsx`, `app/PlanningDemo.tsx` | Étude de cas et démonstration pédagogique du planning |
| `app/CardzapCaseStudy.tsx` | Étude de cas Cardzap et exemple de données structurées |
| `app/FreelanceSeoPage.tsx` | Besoins, livrables, déroulement et questions pratiques |
| `app/EngineeringPage.tsx` | Parcours et choix techniques |
| `app/ProjectBriefForm.tsx`, `app/lib/brief.ts` | Formulaire, normalisation des URL et envoi avec délai maximal |
| `app/PrivacyPage.tsx` | Explication du traitement des demandes de contact |
| `app/profile.ts` | Parcours, formation et années d’expérience à revalider avant publication |
| `app/globals.css` | Couleurs, typographie, composants, focus clavier et responsive |
| `app/Visuals.tsx`, `public/fonts/` | Illustrations d’interface et polices auto-hébergées |

## Contenus et contact

Les démonstrations et maquettes sont explicitement illustratives. Elles ne reproduisent pas un logiciel client, ses données ou ses règles propriétaires. Aucun score Lighthouse ni résultat commercial chiffré n’est affiché sans mesure. La démo de planning fonctionne uniquement dans la page.

Le formulaire existant transmet les demandes via FormSubmit à `amalabaev@gmail.com`. Son activation et la réception effective d’un message doivent être vérifiées par le propriétaire avant une mise en ligne ; les tests automatisés ne prouvent pas la délivrabilité des emails. Une adresse directe reste disponible en cas d’erreur.

La page de confidentialité décrit le fonctionnement actuel. Elle ne constitue pas des mentions légales complètes : adresse professionnelle, statut d’exercice exact, identifiants applicables et politique de conservation restent à préciser avec le propriétaire avant publication. Aucun outil de mesure d’audience n’est ajouté.

## Maintenance

React 19, TypeScript, vinext/Vite et CSS sur mesure. Les dépendances et le lockfile sont mis à jour ensemble. L’override ciblé d’`esbuild` dans `@esbuild-kit/core-utils` corrige une dépendance transitive de Drizzle Kit ; `npx drizzle-kit check` permet de vérifier la compatibilité de cet outil. La configuration Cloudflare/Sites existante est conservée.

[amalabaev@gmail.com](mailto:amalabaev@gmail.com) · [github.com/amalabaev](https://github.com/amalabaev)
