import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLessonBySlug, lessons } from "@/data/lessons";

export function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson) return {};
  return {
    title: `${lesson.title} — Divergence Point`,
    description: lesson.description,
  };
}

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson || lesson.comingSoon) return notFound();

  const src = `/aulas/${lesson.folder}/index.html`;

  return (
    <div className="flex h-screen flex-col bg-board">
      <div className="flex items-center justify-between gap-4 border-b border-chalk/10 bg-board-2 px-5 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/"
            className="shrink-0 font-mono text-xs uppercase tracking-widest text-chalk-dim transition-colors hover:text-accent-orange"
          >
            ← voltar
          </Link>
          <span className="truncate font-body text-sm font-semibold text-chalk">
            {lesson.title}
          </span>
        </div>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-mono text-xs uppercase tracking-widest text-accent-blue transition-colors hover:text-accent-orange"
        >
          abrir em nova aba ↗
        </a>
      </div>

      <iframe
        src={src}
        title={lesson.title}
        className="w-full flex-1 border-0"
        allow="fullscreen"
        allowFullScreen
      />
    </div>
  );
}
