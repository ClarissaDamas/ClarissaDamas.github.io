import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://clarissadamas.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
