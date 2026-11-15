# Clarissa Damas — Portfolio

Professional bilingual portfolio built with [Astro](https://astro.build/) and Bootstrap 5.

## Routes

- `/` — English (default)
- `/pt/` — Português

## Development

```bash
npm ci
npm run dev
```

Validate and build the static site:

```bash
npm run check
npm run build
```

## Content

- `src/content/projects/`: one validated Content Collection entry per project.
- `src/data/profile.json`: professional profile and links.
- `src/data/skills.json`: skills and career highlights.
- `src/i18n/ui.ts`: interface copy in English and Portuguese.

## Deployment

Pushes to `main` build and deploy `dist/` to GitHub Pages through `.github/workflows/deploy.yml`.

## Legacy material

The prior FastAPI prototype and static implementations are preserved in `legacy/` for historical and reference purposes. They are not part of the published Astro site.
