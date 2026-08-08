import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-display text-5xl font-semibold text-accent-orange">Ops.</p>
      <p className="max-w-sm text-chalk-dim">
        Essa aula não existe (ainda) ou o link está errado.
      </p>
      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-widest text-accent-blue hover:text-accent-orange"
      >
        ← voltar para o hub
      </Link>
    </div>
  );
}
