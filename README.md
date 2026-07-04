# Raven Contabilidade — Landing Page

Landing page institucional da Raven Serviços Contábeis, focada em converter
visitantes em contatos comerciais (WhatsApp e formulário de leads).

## Objetivo

Apresentar os serviços contábeis para profissionais PJ e conduzir o visitante a
uma ação: falar com um contador pelo WhatsApp ou enviar seus dados pelo
formulário. Sem portal do cliente, área autenticada ou painel nesta fase.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS 3
- React Hook Form + Zod (formulário e validação)
- Resend (e-mail de notificação de leads — opcional)
- Vitest + Testing Library (testes) · Playwright (e2e)
- ESLint + Prettier

## Requisitos

- Node.js 20 ou superior (https://nodejs.org)

## Instalação e execução local

```bash
npm install
cp .env.example .env.local   # preencha o que tiver disponível
npm run dev                  # http://localhost:3000
```

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | servidor de desenvolvimento |
| `npm run build` | build de produção |
| `npm run start` | serve o build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript sem emitir |
| `npm test` | testes unitários e de componentes |
| `npm run test:e2e` | testes end-to-end (requer `npx playwright install chromium` e um build) |

## Variáveis de ambiente

Copie `.env.example` para `.env.local`. Nenhuma variável é obrigatória para o
site funcionar — cada integração é ativada quando a variável existe.

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canônica (sitemap, OG, JSON-LD) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | número do WhatsApp (só dígitos, com 55) |
| `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_GTM_ID` | Google Analytics 4 / Tag Manager |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel (categoria “marketing” do consentimento) |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity |
| `EMAIL_FROM` / `EMAIL_TO` / `RESEND_API_KEY` | notificação de lead por e-mail via Resend |
| `LEAD_WEBHOOK_URL` | encaminha cada lead via POST JSON (CRM, Zapier, Make…) |

Chaves secretas (`RESEND_API_KEY` etc.) nunca vão para o frontend: são lidas
apenas na API route.

## Formulário de leads — como funciona

`POST /api/lead` ([app/api/lead/route.ts](app/api/lead/route.ts)):

1. valida com Zod (mesmo schema do frontend);
2. anti-spam: honeypot + tempo mínimo de preenchimento + rate limit por IP;
3. registra em `data/leads.jsonl` (quando o filesystem é gravável);
4. envia e-mail via Resend (se configurado);
5. encaminha para `LEAD_WEBHOOK_URL` (se configurado).

> **Atenção (serverless):** na Vercel e similares o filesystem é efêmero — o
> JSONL serve para desenvolvimento/VPS. Em produção serverless, configure
> Resend e/ou webhook como registro principal.

UTMs (`utm_*`, `gclid`, `fbclid`) são capturadas na chegada, guardadas na
sessão e anexadas ao lead e aos eventos de analytics.

## WhatsApp

Número e mensagens em [lib/whatsapp.ts](lib/whatsapp.ts). Cada CTA usa uma
mensagem contextual (abrir empresa, trocar de contador, Fator R, exterior…).
Para mudar o número, altere `NEXT_PUBLIC_WHATSAPP_NUMBER`.

## Analytics e LGPD

- Scripts de GA4/GTM/Clarity só carregam com consentimento “estatística”; Meta
  Pixel só com “marketing” ([components/AnalyticsScripts.tsx](components/AnalyticsScripts.tsx)).
- Banner de cookies em [components/CookieConsent.tsx](components/CookieConsent.tsx);
  a escolha fica registrada em `localStorage` com data e versão.
- Eventos disparados: `whatsapp_click`, `cta_abrir_empresa_click`,
  `cta_trocar_contador_click`, `form_start`, `form_submit`, `form_error`,
  `phone_click`, `email_click`, `faq_view`, `scroll_50`, `scroll_90`.

## Publicação

Ver [docs/deployment.md](docs/deployment.md). Resumo: `npm run build` e deploy
em Vercel (recomendado) ou qualquer Node host; configurar variáveis de
ambiente; apontar domínio; enviar `sitemap.xml` no Google Search Console.

## Substituição dos ativos da marca

Os arquivos em `public/brand/` foram extraídos do site atual da Raven:

- `logo-branco.png` — logotipo para fundos escuros (header/footer);
- `icone.png` — símbolo/favicon (também em `app/icon.png`).

Ao receber o manual da marca, substitua os arquivos mantendo os nomes (ou
ajuste os caminhos em `components/Header.tsx`, `Footer.tsx`, `LegalLayout.tsx`,
`app/not-found.tsx` e `components/sections/About.tsx`). Cores e fontes ficam em
[tailwind.config.ts](tailwind.config.ts) e [app/layout.tsx](app/layout.tsx).

## Documentação

- [docs/discovery.md](docs/discovery.md) — análise do site atual e decisões
- [docs/design-system.md](docs/design-system.md) — cores, tipografia, componentes
- [docs/seo.md](docs/seo.md) — SEO e dados estruturados
- [docs/deployment.md](docs/deployment.md) — publicação passo a passo
- [docs/content-guide.md](docs/content-guide.md) — tom de voz e manutenção de conteúdo
