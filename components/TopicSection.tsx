import { LessonCard } from "@/components/LessonCard";
import { TAB_STYLE, type TabValue, type Lesson } from "@/data/lessons";

export function TopicSection({
  groups,
  getGroupStyle,
  showSubjectOnCards = false,
}: {
  groups: { label: string; lessons: Lesson[] }[];
  /** decide a cor do separador de cada grupo — por matéria (aba "Todas")
   * ou fixa na matéria ativa (demais abas) */
  getGroupStyle: (label: string) => (typeof TAB_STYLE)[TabValue];
  /** true na aba "Todas": mostra a matéria no card, já que o agrupamento
   * deixou de ser por assunto */
  showSubjectOnCards?: boolean;
}) {
  if (groups.length === 0) {
    return <p className="py-12 text-chalk-dim">Nenhuma aula encontrada.</p>;
  }

  return (
    <div className="flex flex-col gap-12">
      {groups.map(({ label, lessons }) => {
        const style = getGroupStyle(label);
        return (
          <div key={label}>
            <div className="mb-5 flex items-center gap-3">
              <span
                className={`h-px flex-1 max-w-[28px] ${style.border} border-t`}
                aria-hidden="true"
              />
              <h3 className="font-display text-xl font-semibold text-chalk">{label}</h3>
              <span className="font-mono text-[11px] text-chalk-dim">
                {lessons.length}
              </span>
              <span
                className={`h-px flex-1 ${style.border} border-t opacity-40`}
                aria-hidden="true"
              />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {lessons.map((lesson) => (
                <LessonCard
                  key={lesson.slug}
                  lesson={lesson}
                  showSubject={showSubjectOnCards}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
