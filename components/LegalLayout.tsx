import Image from "next/image";
import Link from "next/link";
import { Footer } from "./Footer";

export function LegalLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-navy-deep">
        <div className="container-content flex h-16 items-center justify-between sm:h-20">
          <Link href="/" aria-label="Raven Contabilidade — página inicial">
            <Image
              src="/brand/logo-branco.png"
              alt="Raven Contabilidade"
              width={148}
              height={60}
              className="h-10 w-auto sm:h-12"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-white/85 hover:text-white"
          >
            Voltar ao site
          </Link>
        </div>
      </header>
      <main id="conteudo" className="bg-white py-12 sm:py-16">
        <article className="container-content max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-navy">{title}</h1>
          <p className="mt-2 text-sm text-slate2">Última atualização: {updatedAt}</p>
          <div className="prose-legal mt-8 space-y-6 text-[0.95rem] leading-relaxed text-ink [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy [&_li]:mt-1 [&_ul]:list-disc [&_ul]:pl-6">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
