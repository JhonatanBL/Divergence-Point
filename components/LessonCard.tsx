import Link from "next/link";
import { TAB_STYLE, type Lesson } from "@/data/lessons";

export function LessonCard({
  lesson,
  showSubject = false,
}: {
  lesson: Lesson;
  /** mostra o rótulo de matéria no card — usado na aba "Todas", onde o
   * agrupamento já é por matéria e o assunto some da visão */
  showSubject?: boolean;
}) {
  const dateLabel = new Date(lesson.date + "T00:00:00").toLocaleDateString(
    "pt-BR",
    { day: "2-digit", month: "short", year: "numeric" }
  );
  const subjectStyle = TAB_STYLE[lesson.subject];

  const content = (
    <div className="group relative flex h-full flex-col gap-3 rounded-sm border border-chalk/15 bg-board-2/70 p-6 transition-all hover:-translate-y-0.5 hover:border-accent-blue/50 hover:bg-board-2">
      <span
        aria-hidden="true"
        className={`absolute -top-1.5 left-6 h-3 w-3 rounded-full ring-4 ring-board ${subjectStyle.dot}`}
      />
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-chalk-dim">
        <span>
          {showSubject ? `${lesson.subject} · ${lesson.topic}` : lesson.topic}
        </span>
        <span>{lesson.level}</span>
      </div>

      <h3 className="font-body text-xl font-bold leading-snug text-chalk">
        {lesson.title}
      </h3>

      <p className="flex-1 text-sm leading-relaxed text-chalk-dim">
        {lesson.description}
      </p>

      <div className="flex items-center justify-between pt-2 font-mono text-[11px] text-chalk-dim">
        <span>{dateLabel}</span>
        {lesson.comingSoon ? (
          <span className="text-accent-orange">em breve</span>
        ) : (
          <span className={`opacity-0 transition-opacity group-hover:opacity-100 ${subjectStyle.text}`}>
            abrir →
          </span>
        )}
      </div>
    </div>
  );

  if (lesson.comingSoon) {
    return <div className="cursor-default opacity-60">{content}</div>;
  }

  return (
    <Link href={`/aulas/${lesson.slug}`} className="block h-full">
      {content}
    </Link>
  );
}
