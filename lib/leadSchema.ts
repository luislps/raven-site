import { z } from "zod";

export const leadObjectives = [
  "Quero abrir uma empresa",
  "Quero trocar de contador",
  "Já tenho empresa e preciso de suporte",
  "Quero entender meus impostos",
  "Presto serviços para o exterior",
  "Outro",
] as const;

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome.")
    .max(120, "Nome muito longo."),
  whatsapp: z
    .string()
    .trim()
    .refine((v) => v.replace(/\D/g, "").length >= 10, {
      message: "Informe um WhatsApp válido com DDD.",
    })
    .refine((v) => v.replace(/\D/g, "").length <= 13, {
      message: "Número muito longo.",
    }),
  email: z.string().trim().email("Informe um e-mail válido.").max(200),
  profession: z
    .string()
    .trim()
    .min(2, "Informe sua profissão ou atividade.")
    .max(120),
  objective: z.enum(leadObjectives, {
    errorMap: () => ({ message: "Selecione um objetivo." }),
  }),
  message: z.string().trim().max(2000, "Mensagem muito longa.").optional(),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "É preciso autorizar o contato para enviar o formulário.",
    }),
  }),
  // Anti-spam: honeypot deve ficar vazio; startedAt marca o carregamento do formulário
  website: z.string().max(0).optional(),
  startedAt: z.number().optional(),
  utm: z.record(z.string()).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
