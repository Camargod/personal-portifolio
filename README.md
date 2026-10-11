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

Para preencher e-mail de contato, defina `PERSON.email` em `src/app/data/profile.ts`
(o botão de e-mail só aparece quando o campo está preenchido).

## Comandos

```bash
npm start     # dev server em http://localhost:4200
npm run build # build de produção em dist/portfolio
npm test      # testes unitários (Vitest)
```

## Deploy

O build gera arquivos estáticos em `dist/portfolio/browser`, prontos para
Vercel, Netlify, GitHub Pages ou qualquer hospedagem estática.
