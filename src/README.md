Pasta src para o astro

Na pasta pages tem 
o index.astro renderiza no servidor e na pagina oficial e na pasta pt, tem o index.astro pra portugues

o ui.ts tem textos curtos para traduzir, incluindo concentrar os textos do hero e da navbar por idioma.

O arquivo MainLayout.astro serve para criar a estrutura HTML única, usada por inglês e português. Depois ele receberá navbar, metadados, rodapé e estilos globais.

O arquivo navbar serve para ser uma barra unica para os dois idiomas

o arquivo hero astro serve como primeira seção visual compartilhada, recebendo apenas os textos traduzidos.

O token cssserve para centralizar cores, espaçamentos e dimensões reutilizáveis.

o arquivo global serve para centralizar fontes estilo de caixa, margem e etc