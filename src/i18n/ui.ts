export const ui = {
  en: {
    pageTitle: 'Clarissa Damas | Backend Developer',
    heading: 'Clarissa Damas',
    message: 'The English portfolio is being migrated to Astro.',
  },
  pt: {
    pageTitle: 'Clarissa Damas | Desenvolvedora Backend',
    heading: 'Clarissa Damas',
    message: 'O portfólio em português está sendo migrado para Astro.',
  },
} as const;

export type Locale = keyof typeof ui;