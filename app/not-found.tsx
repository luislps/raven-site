import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-deep px-4 text-center text-white">
      <Image
        src="/brand/logo-branco.png"
        alt="Raven Contabilidade"
        width={180}
        height={73}
        className="h-14 w-auto"
      />
      <h1 className="mt-10 text-3xl font-bold">Página não encontrada</h1>
      <p className="mt-3 max-w-md text-white/80">
        O endereço que você acessou não existe ou foi movido.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Voltar para a página inicial
      </Link>
    </main>
  );
}
