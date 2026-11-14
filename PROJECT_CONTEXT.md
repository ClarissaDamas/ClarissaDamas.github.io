# Contexto do projeto

## 1. Objetivo

Portfólio profissional de Clarissa Damas. O repositório demonstra uma arquitetura desacoplada: frontend estático, API REST FastAPI e conteúdo estruturado por idioma (inglês e português), com fallback local para projetos.

## 2. Stack e tecnologias

- Frontend: HTML5, CSS3, JavaScript puro, Bootstrap 4.5.3, jQuery 3.5.1, jQuery Easing, Font Awesome e Google Fonts.
- Backend: Python, FastAPI e Uvicorn; respostas baseadas em arquivos JSON; CORS habilitado para todas as origens.
- Infraestrutura: Docker e GitHub Actions. O README declara GitHub Pages para o frontend e Render para o backend.
- Licença: MIT.

Não existem gerenciador de pacotes ou framework de build do frontend (`package.json`, npm, Vite etc.).

## 3. Estrutura principal

- `index.html`: página estática em inglês na raiz, com conteúdo e projetos escritos diretamente no HTML.
- `pt/`: versão estática em português (`pt/index.html`), CSS/JS, imagens e arquivos legados de formulário por PHP.
- `Front/`: frontend desacoplado/dinâmico. Contém `index.html`, CSS, JavaScript, imagens e JSONs de fallback.
- `Backend/`: API FastAPI, dados localizados, dependências e Dockerfile.
- `.github/workflows/`: dois YAMLs: um workflow GitHub Actions e um arquivo com sintaxe de Docker Compose.
- `README.md`: visão geral, arquitetura declarada e instrução básica de execução do backend.
- `LICENSE`: licença MIT.

## 4. Organização do frontend

Há duas implementações no mesmo repositório:

1. `index.html` e `pt/index.html` são páginas estáticas, com troca de idioma por navegação entre arquivos e conteúdo inserido no próprio HTML.
2. `Front/index.html` é a versão dinâmica. `Front/static/js/scripts.js` consulta a API com `fetch`, troca idioma via `localStorage`, renderiza projetos e atualiza perfil/skills. Projetos têm fallback em `Front/static/data/fallback_en.json` e `fallback_pt.json`; perfil e skills possuem fallback dentro do JavaScript.

O layout deriva do tema Start Bootstrap Freelancer 6.0.5. Bibliotecas e fontes externas são carregadas por CDN.

## 5. Organização do backend

`Backend/app/main.py` cria a aplicação FastAPI e expõe:

- `GET /`: verificação simples da API.
- `GET /api/projects?lang=en|pt`
- `GET /api/skills?lang=en|pt`
- `GET /api/profile?lang=en|pt`

As rotas leem arquivos sob `Backend/data/<idioma>/`. Não há banco de dados, autenticação, camada de serviços ou testes versionados. O parâmetro `lang` não é validado contra uma lista de idiomas.

## 6. Conteúdos e textos

- Versões estáticas publicáveis: diretamente em `index.html` e `pt/index.html`.
- Versão dinâmica: `Backend/data/en/*.json` e `Backend/data/pt/*.json` para perfil, projetos e skills.
- Fallback de projetos: `Front/static/data/fallback_en.json` e `fallback_pt.json`.
- Textos padrão/fallback adicionais: `Front/index.html` e `Front/static/js/scripts.js`.
- README e metadados gerais: `README.md`.

Essas fontes não estão completamente sincronizadas entre si.

## 7. Estilos, cores e elementos visuais

- Estilos: `Front/static/css/styles.css` e `pt/static/css/styles.css` (arquivos idênticos no estado analisado). Eles incluem Bootstrap 4.5.3 e customizações do portfólio.
- Paleta principal definida em `:root`: fundo `#fafafa`, texto `#2d3748`, texto secundário `#718096`, azul principal `#2563eb` e azul escuro `#1d4ed8`.
- Imagens e favicon: `Front/static/assets/img/` e `pt/static/assets/img/`; imagens de projetos ficam nos respectivos diretórios `portfolio/`.
- Fontes: Montserrat, Lato, Poppins e Roboto via Google Fonts; ícones via Font Awesome.

## 8. Execução local

Backend, a partir da raiz:

```bash
cd Backend
python -m uvicorn app.main:app --reload
```

O README usa `cd Backend/app` seguido de `python -m uvicorn main:app --reload`, que também corresponde à localização do módulo.

O frontend é estático e deve ser servido por um servidor HTTP apontado para a implementação desejada (raiz, `pt/` ou `Front/`). Para o frontend dinâmico, `Front/static/js/scripts.js` está configurado para `http://127.0.0.1:8000/api`.

## 9. Build

Não há processo de build para o frontend. Os HTMLs, CSS, JavaScript, JSONs e imagens são servidos diretamente.

O backend pode ser empacotado pelo arquivo `Backend/Dockerfile.dockerfile`, baseado em Python 3.11 slim, instalando `Backend/requirements.txt` e iniciando Uvicorn na porta 8000. Como o nome não é o padrão `Dockerfile`, seu uso exige indicar o arquivo explicitamente.

## 10. Deploy/publicação atual

- O README declara frontend no GitHub Pages e backend no Render.
- O repositório remoto é `ClarissaDamas/ClarissaDamas.github.io`, compatível com publicação de site de usuário pelo GitHub Pages a partir do conteúdo estático da raiz. Não há arquivo de configuração do GitHub Pages no repositório que confirme branch/origem ativa.
- `.github/workflows/githubactions_yaml_20260216_7cb5ee.yaml` é acionado em push para `main`, configura Python 3.11, instala `pytest` e os requisitos e executa `pytest`. Apesar do nome `Deploy`, não contém etapa de deploy.
- `.github/workflows/yaml_20260216_20f3e3.yaml` contém configuração de serviços no formato Docker Compose (API e PostgreSQL), não um workflow GitHub Actions válido. O backend atual não utiliza PostgreSQL.
- Não há `render.yaml`, URL do backend hospedado, segredo ou outra configuração Render versionada.

## 11. Dependências relevantes

- Python: `fastapi` e `uvicorn`, sem versões fixadas.
- Frontend por CDN: Bootstrap 4.5.3, jQuery 3.5.1, jQuery Easing 1.4.1, Font Awesome 5.15.1 e Google Fonts.
- Arquivos legados em `pt/static/assets/mail/`: jqBootstrapValidation 1.3.6, JavaScript de envio e `contact_me.php`. Eles não são referenciados por `pt/index.html` no estado analisado.

## 12. Pontos importantes antes de alterar

- Identificar qual frontend deve ser a fonte oficial: a raiz atualmente contém a implementação estática, enquanto a arquitetura descrita no README está em `Front/`.
- GitHub Pages normalmente serve a raiz do repositório; os assets usados pelo `index.html` raiz apontam para `static/...`, mas não existe diretório `static/` na raiz.
- `Front/index.html` referencia `static/js/portfolio.js`, que não existe.
- O fallback de projetos referencia `project1.jpg`, e o `onerror` do renderer referencia `placeholder.png`; nenhum dos dois arquivos existe em `Front/static/assets/img/portfolio/`.
- A URL da API no frontend dinâmico é somente localhost; nenhuma URL Render está configurada no código.
- `Front/static/js/scripts.js` declara `changeLanguage` duas vezes e o carregamento inicial chama somente projetos; não alterar sem avaliar o fluxo completo.
- Existem IDs HTML duplicados (`profile-contact`) em `Front/index.html`.
- O formulário das páginas atuais não possui `action` nem manipulador carregado; os arquivos PHP legados exigem servidor PHP e esperam também um campo `phone`, ausente nos formulários atuais.
- O workflow usa `cd backend` em ambiente Linux, mas o diretório versionado se chama `Backend`; além disso, não há testes, portanto a automação atual não comprova build/deploy funcional.
- O Docker Compose armazenado em `.github/workflows/` usa `./backend`, nome com capitalização diferente do diretório real, e declara PostgreSQL não usado pela aplicação.
- Há um `__pycache__/main.cpython-310.pyc` versionado apesar de `.dockerignore` excluir esse tipo de arquivo.
- Alguns textos exibidos nos comandos de inspeção apresentaram caracteres corrompidos; os arquivos declaram/empregam UTF-8, portanto qualquer edição futura deve preservar e verificar a codificação.
- Não há testes automatizados, lockfiles, configuração de lint/format, arquivo `.gitignore`, configuração de domínio customizado (`CNAME`) ou documentação verificável de variáveis de ambiente.
