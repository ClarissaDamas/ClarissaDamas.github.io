
import { defineConfig } from "astro/config"; //o astro consegue configurar diferentes tipos

export default defineConfig({
  site: "https://clarissadamas.github.io", //site é o endereço do site, para que o astro consiga gerar o sitemap.xml

  i18n: {
    defaultLocale: "en", //coloca ingles como idioma padrao 
    locales: ["en", "pt"], //informa idiomas que aceita
    routing: {
      prefixDefaultLocale: false //informa que o idioma padrao nao precisa de prefixo na url
    }
  }
});
