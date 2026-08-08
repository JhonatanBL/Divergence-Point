"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // evita mismatch de hidratação: só sabemos o tema real depois de montar no cliente
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-8 w-8 items-center justify-center rounded-sm border border-chalk/15 text-chalk-dim transition-colors hover:border-accent-blue/50 hover:text-accent-blue"
    >
      {isDark ? (
        // sol (clicar para ir ao tema claro)
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M10 2v2M10 16v2M18 10h-2M4 10H2M15.5 4.5l-1.4 1.4M5.9 14.1l-1.4 1.4M15.5 15.5l-1.4-1.4M5.9 5.9L4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        // lua (clicar para ir ao tema escuro)
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M17 11.5A7 7 0 1 1 8.5 3a5.5 5.5 0 0 0 8.5 8.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
