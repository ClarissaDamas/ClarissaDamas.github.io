export const ui = {
  en: {
    pageTitle: 'Clarissa Damas | Backend Developer',
    description: 'Professional portfolio of Clarissa Damas, a backend developer focused on APIs and system integrations.',
    nav: { brand: 'Clarissa Damas', projects: 'Projects', skills: 'Skills', contact: 'Contact', language: 'Português' },
    hero: { eyebrow: 'Backend developer', imageAlt: 'Portrait of Clarissa Damas' },
    projects: { eyebrow: 'Selected work', title: 'Projects', view: 'View on GitHub' },
    skills: { eyebrow: 'Technical toolkit', title: 'Skills & technologies' },
    contact: { eyebrow: 'Let’s talk', title: 'Get in touch', text: 'I am available to talk about backend development, APIs, and systems integration.', emailLabel: 'Send an email' },
    footer: 'Built with Astro and Bootstrap',
  },
  pt: {
    pageTitle: 'Clarissa Damas | Desenvolvimento Backend e APIs',
    description: 'Portfólio profissional de Clarissa Damas, desenvolvedora backend com foco em APIs e integrações de sistemas.',
    nav: { brand: 'Clarissa Damas', projects: 'Projetos', skills: 'Competências', contact: 'Contato', language: 'English' },
    hero: { eyebrow: 'Desenvolvedora backend', imageAlt: 'Retrato de Clarissa Damas' },
    projects: { eyebrow: 'Trabalhos selecionados', title: 'Projetos', view: 'Ver no GitHub' },
    skills: { eyebrow: 'Ferramentas técnicas', title: 'Competências e tecnologias' },
    contact: { eyebrow: 'Vamos conversar', title: 'Entre em contato', text: 'Estou disponível para conversar sobre desenvolvimento backend, APIs e integração de sistemas.', emailLabel: 'Enviar e-mail' },
    footer: 'Feito com Astro e Bootstrap',
  },
} as const;

export type Locale = keyof typeof ui;
