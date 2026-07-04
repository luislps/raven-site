import { site } from "./site";

export type WhatsAppContext =
  | "default"
  | "abrir"
  | "trocar"
  | "fator-r"
  | "exterior"
  | "impostos"
  | "regularizar"
  | "proposta-pj"
  | "pro-labore";

export const whatsappMessages: Record<WhatsAppContext, string> = {
  default:
    "Olá, conheci a Raven pelo site e gostaria de conversar sobre serviços contábeis para minha empresa.",
  abrir:
    "Olá, conheci a Raven pelo site e gostaria de orientação para abrir meu CNPJ.",
  trocar:
    "Olá, conheci a Raven pelo site e gostaria de entender como funciona a troca de contador.",
  "fator-r":
    "Olá, conheci a Raven pelo site e gostaria de entender o Fator R e meu enquadramento tributário.",
  exterior:
    "Olá, conheci a Raven pelo site. Presto serviços para o exterior e gostaria de orientação contábil.",
  impostos:
    "Olá, conheci a Raven pelo site. Já tenho empresa e gostaria de entender melhor meus impostos.",
  regularizar:
    "Olá, conheci a Raven pelo site e preciso de ajuda para regularizar minha empresa.",
  "proposta-pj":
    "Olá, conheci a Raven pelo site. Recebi uma proposta para trabalhar como PJ e gostaria de orientação.",
  "pro-labore":
    "Olá, conheci a Raven pelo site e gostaria de orientação sobre pró-labore e distribuição de lucros.",
};

export function buildWhatsAppUrl(context: WhatsAppContext = "default"): string {
  const text = encodeURIComponent(whatsappMessages[context]);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
