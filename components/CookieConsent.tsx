"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { getConsent, saveConsent } from "@/lib/consent";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const headingId = useId();

  useEffect(() => {
    setVisible(getConsent() === null);
    const onOpen = () => {
      setShowPreferences(true);
      setVisible(true);
    };
    window.addEventListener("raven-open-cookie-preferences", onOpen);
    return () =>
      window.removeEventListener("raven-open-cookie-preferences", onOpen);
  }, []);

  if (!visible) return null;

  const decide = (choices: { analytics: boolean; marketing: boolean }) => {
    saveConsent(choices);
    setVisible(false);
    setShowPreferences(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby={headingId}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-white p-4 shadow-[0_-4px_24px_rgba(2,23,109,0.12)] sm:p-6"
    >
      <div className="container-content">
        <h2 id={headingId} className="text-base font-bold text-navy">
          Cookies e privacidade
        </h2>
        <p className="mt-1 max-w-3xl text-sm text-slate2">
          Usamos cookies essenciais para o funcionamento do site e, com a sua
          autorização, cookies de estatística e marketing para entender como o site é
          usado. Saiba mais na{" "}
          <Link href="/politica-de-privacidade" className="underline">
            Política de Privacidade
          </Link>
          .
        </p>

        {showPreferences && (
          <fieldset className="mt-4 space-y-3">
            <legend className="sr-only">Preferências de cookies</legend>
            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" checked disabled className="mt-0.5 h-4 w-4" />
              <span>
                <strong>Essenciais</strong> — necessários para o site funcionar.
                Sempre ativos.
              </span>
            </label>
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-navy"
              />
              <span>
                <strong>Estatística</strong> — Google Analytics, Tag Manager e
                Clarity, para medir uso do site.
              </span>
            </label>
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-navy"
              />
              <span>
                <strong>Marketing</strong> — Meta Pixel, para medir campanhas.
              </span>
            </label>
          </fieldset>
        )}

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => decide({ analytics: true, marketing: true })}
            className="btn-primary min-h-11 px-5 py-2 text-sm"
          >
            Aceitar todos
          </button>
          <button
            type="button"
            onClick={() => decide({ analytics: false, marketing: false })}
            className="btn-secondary-light min-h-11 px-5 py-2 text-sm"
          >
            Recusar opcionais
          </button>
          {showPreferences ? (
            <button
              type="button"
              onClick={() => decide({ analytics, marketing })}
              className="btn-secondary-light min-h-11 px-5 py-2 text-sm"
            >
              Salvar preferências
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowPreferences(true)}
              className="btn min-h-11 px-5 py-2 text-sm text-slate2 underline hover:text-navy focus-visible:outline-navy"
            >
              Preferências
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/** Link do rodapé que reabre as preferências de cookies. */
export function CookiePreferencesLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() =>
        window.dispatchEvent(new CustomEvent("raven-open-cookie-preferences"))
      }
    >
      Preferências de cookies
    </button>
  );
}
