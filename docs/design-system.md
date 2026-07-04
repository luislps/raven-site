# Design system — Raven Contabilidade

Base: identidade extraída do site atual (a pasta `/brand` não continha manual).
Substituir os tokens quando o manual oficial estiver disponível.

## Cores (tokens Tailwind)

| Token | Hex | Uso |
| --- | --- | --- |
| `navy` | `#02176d` | cor primária da marca — títulos, botões secundários, seção Fator R |
| `navy-dark` | `#010f4a` | variação para hovers em fundo navy |
| `navy-deep` | `#0a1330` | fundo do header, hero, rodapé e CTA final |
| `accent` | `#ffe16a` | CTA primário, destaques pontuais (usar com parcimônia) |
| `accent-dark` | `#f5cf35` | hover do CTA primário |
| `ink` | `#222222` | texto principal em fundo claro |
| `slate2` | `#4B4F58` | texto secundário |
| `mist` | `#F2F5F7` | fundo alternado de seções |

Contraste: `accent` sobre `navy`/`navy-deep` e `navy` sobre branco/`mist`
atendem WCAG AA para texto normal. Texto branco em navy usa opacidades ≥ 75%.

## Tipografia

- Família única: **Montserrat** (Google Fonts via `next/font`, subset latin,
  `display: swap`), variável `--font-montserrat`.
- Escala: h1 `text-3xl→5xl` bold · h2 `text-2xl→3xl` bold (`.section-title`) ·
  kicker `.section-kicker` (uppercase, tracking-widest) · corpo `text-base`,
  secundário `text-sm`.

## Componentes utilitários (globals.css)

- `.container-content` — largura máx. 72rem + padding responsivo.
- `.btn-primary` — amarelo/navy, CTA principal (mín. 48px de altura).
- `.btn-secondary-dark` / `.btn-secondary-light` — outline para fundos escuros/claros.
- Cards: `rounded-xl border border-navy/10` + hover sutil (`shadow-md`).

## Padrões

- Seções alternam branco e `mist`; blocos de destaque usam navy.
- Ícones: SVG inline de traço único, sempre `aria-hidden="true"`.
- Microinterações apenas com `transition-colors/transform`; tudo respeita
  `prefers-reduced-motion` (ver `globals.css`).
- Áreas de toque ≥ 44px (`min-h-11/12` nos controles).
- Foco visível em todos os elementos interativos (`focus-visible:outline`).

## Logotipo

- Fundos escuros: `public/brand/logo-branco.png` (única versão disponível).
- Símbolo: `public/brand/icone.png` (corvo em círculo) — favicon e seção Sobre.
- **Pendente:** versão do logotipo para fundo claro. Enquanto não existir,
  manter logo apenas sobre `navy-deep`.
