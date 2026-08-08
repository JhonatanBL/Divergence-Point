"use client";

import { STAGES, type Stage } from "@/data/lessons";

export function StageToggle({
  active,
  onChange,
}: {
  active: Stage;
  onChange: (s: Stage) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Etapa de ensino"
      className="inline-flex items-center gap-0.5 rounded-sm border border-chalk/15 bg-board-2/60 p-0.5"
    >
      {STAGES.map((stage) => {
        const isActive = stage === active;
        return (
          <button
            key={stage}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(stage)}
            className={`rounded-sm px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors ${
              isActive
                ? "bg-accent-blue text-board"
                : "text-chalk-dim hover:text-chalk"
            }`}
          >
            {stage}
          </button>
        );
      })}
    </div>
  );
}
