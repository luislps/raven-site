"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, leadObjectives, type LeadInput } from "@/lib/leadSchema";
import { formatPhoneBR } from "@/lib/phone";
import { getStoredUtmParams } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type FormValues = Omit<LeadInput, "startedAt" | "utm" | "website"> & {
  website?: string;
};

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const startedRef = useRef<number | null>(null);
  const loadedAt = useMemo(() => Date.now(), []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(leadSchema.omit({ startedAt: true, utm: true })),
    defaultValues: { objective: undefined, website: "" },
  });

  const markStarted = () => {
    if (startedRef.current === null) {
      startedRef.current = Date.now();
      trackEvent("form_start");
    }
  };

  const onSubmit = async (values: FormValues) => {
    setStatus("sending");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          startedAt: startedRef.current ?? loadedAt,
          utm: getStoredUtmParams(),
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("success");
      trackEvent("form_submit", { objective: values.objective });
    } catch {
      setStatus("error");
      trackEvent("form_error", { reason: "request_failed" });
    }
  };

  const onInvalid = () => {
    trackEvent("form_error", { reason: "validation" });
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-navy/10 bg-white p-8 text-center"
      >
        <svg
          viewBox="0 0 48 48"
          className="mx-auto h-12 w-12 fill-navy"
          aria-hidden="true"
        >
          <path d="M24 4a20 20 0 1 0 0 40 20 20 0 0 0 0-40Zm9.7 15.3-11 11a1.5 1.5 0 0 1-2.2 0l-6.2-6.2a1.5 1.5 0 0 1 2.2-2.2l5.1 5.1 9.9-9.9a1.5 1.5 0 0 1 2.2 2.2Z" />
        </svg>
        <h3 className="mt-4 text-lg font-bold text-navy">Recebemos seus dados!</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate2">
          Obrigado pelo contato. A Raven vai retornar pelo WhatsApp ou e-mail
          informado. Se preferir adiantar a conversa:
        </p>
        <a
          href={buildWhatsAppUrl("default")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("whatsapp_click", { context: "default", location: "form-success" })
          }
          className="btn-primary mt-6"
        >
          Chamar no WhatsApp agora
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      noValidate
      className="rounded-xl border border-navy/10 bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="mb-1.5 block text-sm font-semibold">
            Nome*
          </label>
          <input
            id="lead-name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "lead-name-error" : undefined}
            {...register("name", { onChange: markStarted })}
            className="min-h-12 w-full rounded-lg border border-navy/20 px-4 py-3 text-base focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30"
          />
          {errors.name && (
            <p id="lead-name-error" role="alert" className="mt-1.5 text-sm text-red-700">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="lead-whatsapp"
            className="mb-1.5 block text-sm font-semibold"
          >
            WhatsApp*
          </label>
          <input
            id="lead-whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="(19) 90000-0000"
            aria-invalid={!!errors.whatsapp}
            aria-describedby={errors.whatsapp ? "lead-whatsapp-error" : undefined}
            {...register("whatsapp", {
              onChange: (e) => {
                markStarted();
                setValue("whatsapp", formatPhoneBR(e.target.value));
              },
            })}
            className="min-h-12 w-full rounded-lg border border-navy/20 px-4 py-3 text-base focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30"
          />
          {errors.whatsapp && (
            <p
              id="lead-whatsapp-error"
              role="alert"
              className="mt-1.5 text-sm text-red-700"
            >
              {errors.whatsapp.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lead-email" className="mb-1.5 block text-sm font-semibold">
            E-mail*
          </label>
          <input
            id="lead-email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "lead-email-error" : undefined}
            {...register("email", { onChange: markStarted })}
            className="min-h-12 w-full rounded-lg border border-navy/20 px-4 py-3 text-base focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30"
          />
          {errors.email && (
            <p id="lead-email-error" role="alert" className="mt-1.5 text-sm text-red-700">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="lead-profession"
            className="mb-1.5 block text-sm font-semibold"
          >
            Profissão ou atividade*
          </label>
          <input
            id="lead-profession"
            type="text"
            placeholder="Ex.: desenvolvedor, médica, consultor"
            aria-invalid={!!errors.profession}
            aria-describedby={errors.profession ? "lead-profession-error" : undefined}
            {...register("profession", { onChange: markStarted })}
            className="min-h-12 w-full rounded-lg border border-navy/20 px-4 py-3 text-base focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30"
          />
          {errors.profession && (
            <p
              id="lead-profession-error"
              role="alert"
              className="mt-1.5 text-sm text-red-700"
            >
              {errors.profession.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="lead-objective"
            className="mb-1.5 block text-sm font-semibold"
          >
            Objetivo*
          </label>
          <select
            id="lead-objective"
            aria-invalid={!!errors.objective}
            aria-describedby={errors.objective ? "lead-objective-error" : undefined}
            defaultValue=""
            {...register("objective", { onChange: markStarted })}
            className="min-h-12 w-full rounded-lg border border-navy/20 bg-white px-4 py-3 text-base focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30"
          >
            <option value="" disabled>
              Selecione…
            </option>
            {leadObjectives.map((objective) => (
              <option key={objective} value={objective}>
                {objective}
              </option>
            ))}
          </select>
          {errors.objective && (
            <p
              id="lead-objective-error"
              role="alert"
              className="mt-1.5 text-sm text-red-700"
            >
              {errors.objective.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="lead-message" className="mb-1.5 block text-sm font-semibold">
            Mensagem <span className="font-normal text-slate2">(opcional)</span>
          </label>
          <textarea
            id="lead-message"
            rows={4}
            {...register("message", { onChange: markStarted })}
            className="w-full rounded-lg border border-navy/20 px-4 py-3 text-base focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30"
          />
        </div>
      </div>

      {/* Honeypot anti-spam — invisível para pessoas, preenchido por bots */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="lead-website">Não preencha este campo</label>
        <input
          id="lead-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-3 text-sm text-slate2">
          <input
            type="checkbox"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "lead-consent-error" : undefined}
            {...register("consent")}
            className="mt-0.5 h-5 w-5 shrink-0 accent-navy"
          />
          <span>
            Autorizo o uso dos meus dados para que a Raven entre em contato sobre
            esta solicitação, conforme a{" "}
            <Link href="/politica-de-privacidade" className="underline">
              Política de Privacidade
            </Link>
            .*
          </span>
        </label>
        {errors.consent && (
          <p id="lead-consent-error" role="alert" className="mt-1.5 text-sm text-red-700">
            {errors.consent.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          Não foi possível enviar agora. Tente novamente em instantes ou fale
          direto pelo{" "}
          <a
            href={buildWhatsAppUrl("default")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
          >
            WhatsApp
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Enviando…" : "Enviar e receber contato"}
      </button>
    </form>
  );
}
