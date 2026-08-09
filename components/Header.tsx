import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-chalk/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/src/logo.png"
            alt="Divergence Point"
            width={60}
            height={60}
            className="h-18 w-18 rounded-full"
            priority
          />
          <span className="font-display text-xl font-semibold tracking-tight">
            <span className="text-accent-blue">Divergence</span>{" "}
            <span className="text-accent-orange">Point</span>
          </span>
        </Link>
        <div className="flex items-center gap-5">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
