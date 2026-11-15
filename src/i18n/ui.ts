export const ui = {
  en: {
    pageTitle: 'Clarissa Damas | Backend Developer',
    nav: {
      brand: 'Clarissa Damas',
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      language: 'Português',
    },
    hero: {
      heading: 'Clarissa Damas',
      role: 'Backend Development | APIs and Integrations',
      message:
        'Backend developer with over 7 years of professional experience, a degree in Physics, and studies in Computer Science. I work with maintenance, testing, documentation, and governance of REST APIs, OpenAPI/Swagger contract analysis, and systems integration.',
      imageAlt: 'Portrait of Clarissa Damas',
    },
  },
  pt: {
    pageTitle: 'Clarissa Damas | Desenvolvimento Backend e APIs',
    nav: {
      brand: 'Clarissa Damas',
      home: 'Início',
      projects: 'Portfólio',
      skills: 'Competências',
      contact: 'Contato',
      language: 'English',
    },
    hero: {
      heading: 'Clarissa Damas',
      role: 'Desenvolvimento Backend | APIs e Integrações',
      message:
        'Desenvolvedora com mais de 7 anos de experiência profissional, formação em Física e conhecimentos em Ciência da Computação. Atuo com manutenção, testes, documentação e governança de APIs REST, análise de contratos OpenAPI/Swagger e integração de sistemas.',
      imageAlt: 'Retrato de Clarissa Damas',
    },
  },
} as const;

export type Locale = keyof typeof ui;