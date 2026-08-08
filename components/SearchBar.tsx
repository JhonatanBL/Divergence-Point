"use client";

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative w-full max-w-md">
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-chalk-dim"
        fill="none"
      >
        <circle cx="8.5" cy="8.5" r="6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M17 17l-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por título ou assunto..."
        aria-label="Buscar aula"
        className="w-full rounded-sm border border-chalk/15 bg-board-2/60 py-2.5 pl-10 pr-3 font-body text-sm text-chalk placeholder:text-chalk-dim/70 outline-none transition-colors focus:border-accent-blue/60"
      />
    </div>
  );
}
