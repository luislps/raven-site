# SEO — Raven Contabilidade

## Implementado

- `title` e `meta description` únicos por página (template em `app/layout.tsx`).
- Canonical via `alternates.canonical` (home e páginas legais).
- `sitemap.xml` (`app/sitemap.ts`) e `robots.txt` (`app/robots.ts`, bloqueia `/api/`).
- Open Graph + Twitter Card; imagem OG gerada em `app/opengraph-image.tsx`.
- Favicon (`app/icon.png`) e manifest (`app/manifest.ts`).
- Headings semânticos: um único `h1` (hero), `h2` por seção, `h3` em cards.
- Dados estruturados JSON-LD:
  - `AccountingService` + `LocalBusiness` + `Organization` (layout) — nome,
    CNPJ, endereço, telefone, área atendida;
  - `FAQPage` (home) — gerado de `lib/faq.ts` (mesma fonte do FAQ visível).
- Página 404 personalizada.
- Imagens com `next/image` (AVIF/WebP) e `alt` adequado; fonte com `display: swap`.

## Palavras-chave trabalhadas (sem stuffing)

Contabilidade para PJ · contador para PJ · abrir CNPJ para prestar serviços ·
trocar de contador · Fator R · contabilidade Simples Nacional · contabilidade
para desenvolvedor/profissionais de tecnologia · contador em Campinas.

Distribuição: title (PJ + Simples Nacional), description (abrir CNPJ, Fator R,
troca de contador), h1 (contabilidade para profissionais PJ), h2/seções
(Fator R, troca de contador, abertura de empresa), Sobre (Campinas, atendimento
nacional).

## Pós-publicação (checklist)

1. Google Search Console: verificar propriedade e enviar `sitemap.xml`.
2. Validar dados estruturados em https://search.google.com/test/rich-results.
3. Conferir OG em https://developers.facebook.com/tools/debug/.
4. Google Business Profile: manter endereço/telefone idênticos aos do site (NAP).
5. Medir Core Web Vitals reais no relatório do Search Console após ~28 dias.

## Oportunidades futuras (fase 2)

- Blog/artigos: “Fator R na prática”, “CLT vs PJ”, “Como emitir NFS-e em Campinas”.
- Páginas por público (contabilidade para desenvolvedores, para médicos…).
- Backlinks locais (associações, comunidades tech de Campinas).
