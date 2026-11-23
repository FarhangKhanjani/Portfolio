# Farhang: portfolio

Personal portfolio site. Bilingual (English at `/`, German at `/de/`), fully static, built with
[Astro](https://astro.build), Tailwind CSS v4, MDX content and small Svelte islands for interactive demos.

## Run locally

Requires Node.js 22.12 or newer (see `.nvmrc`).

```bash
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # static build into dist/
npm run preview   # serve the built site locally
```

## Project structure

```text
public/
  fonts/            Self-hosted variable fonts (Big Shoulders Display, Inter) + licenses
  demos/            Demo clips (MP4/WebM), served as-is
  favicon.svg
src/
  assets/images/    Images processed by Astro (WebP/AVIF, resized, lazy loaded)
  components/       Astro components (static HTML, no JS)
    islands/        Svelte components that hydrate in the browser
    demos/          Interactive project demos (before/after slider, etc.)
  content/
    projects/       One MDX file per project  <-- add projects here
  i18n/
    config.ts       Languages and locale tags
    translations/   All UI strings: en.ts (source of truth), de.ts
    utils.ts        Translation and localized-path helpers
  layouts/          Page shells (<head>, meta, hreflang)
  pages/            Routes. /de/ mirrors the English routes
  views/            Page bodies shared by EN and DE routes
  styles/global.css Tailwind import, design tokens, @font-face
  content.config.ts Project schema (validated at build time)
```

## Add a project

1. Create `src/content/projects/<slug>.mdx`. The file name becomes the URL (`/projects/<slug>/`).
2. Fill in the frontmatter. Text fields take `en` (required) and `de` (optional, falls back to English):

```yaml
---
title: My Project
tagline:
  en: One line that says what it does.
  de: Eine Zeile, die sagt, was es tut.
problem:
  en: What was broken or missing.
approach:
  en: What I built and how.
result:
  en: What changed. Real numbers only.
stack: [Python, FastAPI]
topics: [CV]            # one of: CV, NLP, Healthcare, Automation, RecSys, RL, Web
demo:
  type: none            # live | gif | video | none (see src/content.config.ts)
githubUrl: https://github.com/...   # optional
liveUrl: https://...                # optional
featured: false         # true = large card on the home page (keep 3 to 4)
order: 10               # lower comes first
---

Optional longer write-up in MDX.
```

3. Run `npm run dev`. If a field is missing or wrong, the build stops and names the file and field.

To hide a project without deleting it, set `draft: true`.

## Translations

All interface text lives in `src/i18n/translations/`. `de.ts` is type-checked against `en.ts`, so a
missing German string is a build error. Copy rule for both languages: no em dashes.

## Deploy

Deploys to Vercel from the `main` branch (set up in Phase 7). Vercel detects Astro automatically:
build command `npm run build`, output directory `dist`.

## License

Code: [TODO: license]. Fonts: SIL Open Font License, see `public/fonts/`.
