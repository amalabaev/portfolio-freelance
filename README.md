# Portfolio freelance — Aliaskar Malabaev

Site vitrine bilingue français/anglais d’Aliaskar Malabaev, développeur web full-stack freelance. Les deux versions présentent son positionnement, ses services, sa méthode de travail et plusieurs directions créatives clairement identifiées comme des concepts.

## Technologies

- React 19
- Node.js 22+
- TypeScript
- vinext / Vite
- CSS responsive sur mesure

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

Les textes, services, concepts et étapes sont regroupés dans `app/page.tsx`. L’identité visuelle et le responsive se trouvent dans `app/globals.css`.

## Contact

[amalabaev@gmail.com](mailto:amalabaev@gmail.com) · [github.com/amalabaev](https://github.com/amalabaev)
