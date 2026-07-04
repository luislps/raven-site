"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { WhatsAppLink } from "./WhatsAppLink";

const navLinks = [
  { href: "#para-quem", label: "Para quem é" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#por-que-a-raven", label: "Por que a Raven" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-navy-deep/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-lg shadow-navy-deep/30" : ""
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link
          href="#inicio"
          className="flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Raven Contabilidade — voltar ao início"
        >
          <Image
            src="/brand/logo-branco.png"
            alt="Raven Contabilidade"
            width={148}
            height={60}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/85 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <WhatsAppLink
            context="default"
            location="header"
            className="btn-primary hidden min-h-11 px-5 py-2 text-sm sm:inline-flex"
          >
            Falar com um contador
          </WhatsAppLink>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md text-white lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu"
          className="border-t border-white/10 bg-navy-deep lg:hidden"
        >
          <ul className="container-content flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-white/90 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <WhatsAppLink
                context="default"
                location="menu-mobile"
                className="btn-primary w-full"
              >
                Falar com um contador
              </WhatsAppLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
