# Site — Stéphanie Garcia, réflexologue plantaire

Site vitrine statique, orienté SEO local et performance.

- **Stack** : [Astro 7](https://astro.build) (statique, ~0 JS) + [Tailwind CSS 4](https://tailwindcss.com)
- **Domaine** : https://stephaniegarcia.fr

## Développement

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère /dist
npm run preview    # sert le build
```

## Configuration — à compléter

Tout est centralisé dans **`src/data/site.ts`** :

| Champ | Statut |
|---|---|
| `resalibUrl` | URL Resalib de la Stéphanie Garcia | A Faire !
| `umami.websiteId` | Renseigner pour activer la mesure d'audience Umami (sinon désactivée) |
| `address.lat` / `lng` | Coordonnées approximatives de Bouaye — à affiner si besoin |

Autres contenus éditables :
- `src/data/content.ts` — publics, déroulé de séance, FAQ
- `src/pages/mentions-legales.astro` — SIRET, statut juridique, hébergeur à compléter

## SEO — checklist post-mise en ligne

1. Déployer sur Cloudflare Pages / Netlify (gratuit) et brancher `stephaniegarcia.fr`
2. **Google Business Profile** (levier n°1 en local) — fiche « Réflexologue » à Bouaye
3. **Google Search Console** — soumettre `https://stephaniegarcia.fr/sitemap-index.xml`
4. Vérifier la cohérence NAP (nom/adresse/tél) entre site, Google et annuaires (Resalib…)
5. Encourager les avis Google

## Structure

```
src/
├── data/          # site.ts (config), content.ts (contenus)
├── layouts/       # Layout.astro (SEO, schema.org, header/footer)
├── components/    # Header, Footer, Seo, Button, Section, Faq, ...
├── pages/         # une page = une URL = un mot-clé cible
├── assets/        # images optimisées par Astro
└── styles/        # global.css (charte, thème Tailwind)
public/            # favicons, og-image, robots.txt, PDF Ingham
```
