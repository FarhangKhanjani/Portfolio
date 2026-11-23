// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // [TODO: domain] Replace with the real custom domain before deploying.
  // Used for canonical URLs, hreflang tags, Open Graph URLs and the sitemap.
  site: 'https://example.com',

  // Fully static output: every page is pre-rendered HTML. No server needed.
  output: 'static',

  // English is the default language and lives at "/". German lives at "/de/".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // MDX for project content files, Svelte for the few interactive islands.
  integrations: [mdx(), svelte()],

  vite: {
    plugins: [tailwindcss()],
  },
});
