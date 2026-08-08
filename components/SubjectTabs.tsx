"use client";

import { TABS, TAB_STYLE, type TabValue } from "@/data/lessons";

export function SubjectTabs({
  active,
  onChange,
  counts,
}: {
  active: TabValue;
  onChange: (s: TabValue) => void;
  counts: Record<TabValue, number>;
}) {
  return (
    <div
      role="tablist"
      aria-label="Matérias"
      className="flex flex-wrap gap-2 border-b border-chalk/10 pb-px"
    >
      {TABS.map((tab) => {
        const isActive = tab === active;
        const style = TAB_STYLE[tab];
        return (
          <button
            key={tab}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab)}
            className={`group relative flex items-center gap-2 px-4 py-3 font-mono text-xs uppercase tracking-widest transition-colors ${
              isActive ? style.text : "text-chalk-dim hover:text-chalk"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isActive ? style.dot : "bg-chalk-dim/50"
              }`}
              aria-hidden="true"
            />
            {tab}
            <span className="text-[10px] opacity-60">({counts[tab]})</span>
            {isActive && (
              <span
                className={`absolute -bottom-px left-0 right-0 h-0.5 ${style.dot}`}
                aria-hidden="true"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
