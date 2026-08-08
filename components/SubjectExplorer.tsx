"use client";

import { useMemo, useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { SubjectTabs } from "@/components/SubjectTabs";
import { StageToggle } from "@/components/StageToggle";
import { TopicSection } from "@/components/TopicSection";
import {
  TABS,
  TAB_STYLE,
  ALL_TAB,
  getSortedLessons,
  groupBy,
  matchesQuery,
  type TabValue,
  type Stage,
} from "@/data/lessons";

export function SubjectExplorer() {
  const [query, setQuery] = useState("");
  const [stage, setStage] = useState<Stage>("Ensino Médio");
  const [tab, setTab] = useState<TabValue>(ALL_TAB);

  const sorted = useMemo(() => getSortedLessons(), []);

  const byStageAndQuery = useMemo(
    () => sorted.filter((l) => l.stage === stage && matchesQuery(l, query)),
    [sorted, stage, query]
  );

  const counts = useMemo(() => {
    return Object.fromEntries(
      TABS.map((t) => [
        t,
        t === ALL_TAB
          ? byStageAndQuery.length
          : byStageAndQuery.filter((l) => l.subject === t).length,
      ])
    ) as Record<TabValue, number>;
  }, [byStageAndQuery]);

  const isAll = tab === ALL_TAB;

  const visible = useMemo(
    () => (isAll ? byStageAndQuery : byStageAndQuery.filter((l) => l.subject === tab)),
    [byStageAndQuery, isAll, tab]
  );

  const groups = useMemo(
    () => groupBy(visible, isAll ? (l) => l.subject : (l) => l.topic),
    [visible, isAll]
  );

  const getGroupStyle = (label: string) =>
    isAll ? TAB_STYLE[label as TabValue] : TAB_STYLE[tab];

  return (
    <div>
      <div className="mb-8">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <SubjectTabs active={tab} onChange={setTab} counts={counts} />
        <StageToggle active={stage} onChange={setStage} />
      </div>

      <div className="pt-10">
        {query.trim() && visible.length === 0 ? (
          <p className="py-12 text-chalk-dim">
            Nenhuma aula encontrada para &quot;{query}&quot; em{" "}
            {stage.toLowerCase()}.
          </p>
        ) : (
          <TopicSection
            groups={groups}
            getGroupStyle={getGroupStyle}
            showSubjectOnCards={isAll}
          />
        )}
      </div>
    </div>
  );
}
