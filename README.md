# Gabriel Camargo — Portfólio

Portfólio pessoal construído com **Angular 22** (standalone + signals + zoneless) e **Tailwind CSS v4**.
UI dark moderna com acentos neon, 100% responsiva e bilíngue (PT/EN).

## Stack

- Angular 22 (signals, componentes standalone, zoneless)
- Tailwind CSS v4 (via PostCSS)
- TypeScript
- Vitest (testes unitários)

## Estrutura

```
src/app/
  core/
    i18n.service.ts      # idioma (signal) + persistência em localStorage
    translations.ts      # dicionário PT/EN
  data/
    profile.ts           # dados do perfil (experiência, skills, projetos)
  shared/
    reveal.directive.ts  # animação de entrada no scroll (IntersectionObserver)
  components/
    navbar/ hero/ about/ skills/ experience/ projects/ contact/ footer/
```

## Como editar o conteúdo

Quase todo o conteúdo vive em `src/app/data/profile.ts` (experiência, skills, projetos)
e em `src/app/core/translations.ts` (textos de interface PT/EN).

Para preencher e-mail de contato, edite `PERSON.email` em `src/app/data/profile.ts`
(o botão de e-mail só aparece quando o campo está preenchido).

## Comandos

```bash
npm start     # dev server em http://localhost:4200
npm run build # build de produção em dist/portfolio
npm test      # testes unitários (Vitest)
```

## Deploy — GitHub Pages

O deploy é automático via GitHub Actions (`.github/workflows/deploy.yml`) a cada
push na branch `main`. O workflow calcula o `base-href` sozinho:

- repositório `usuario.github.io` → base `/`
- qualquer outro repositório → base `/nome-do-repo/`

Passos (uma vez):

1. Crie o repositório no GitHub e faça o push da branch `main`.
2. Em **Settings → Pages**, defina **Source: GitHub Actions**.
3. Faça um push na `main` (ou rode o workflow em **Actions → Deploy to GitHub Pages → Run workflow**).

O site fica em `https://<usuario>.github.io/<repo>/`.

Para gerar a build manualmente com o caminho certo:

```bash
npm run build -- --base-href /nome-do-repo/
```
