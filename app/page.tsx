import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChalkDoodles } from "@/components/ChalkDoodles";
import { SubjectExplorer } from "@/components/SubjectExplorer";
import { lessons } from "@/data/lessons";

export default function Home() {
  return (
    <>
      <Header />

      <section className="relative overflow-hidden border-b border-chalk/10">
        <ChalkDoodles />
        <div className="relative mx-auto max-w-5xl px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-blue">
            Física · Matemática · Computação
          </p>
          <h1 className="fade-up mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-chalk sm:text-6xl">
            Aqui é o ponto de divergência onde a teoria do universo se transforma em {" "}
            <span className="text-accent-orange underline-chalk">
              conhecimento
            </span>
            .
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-chalk-dim">
            o laboratório vivo das minhas apresentações e ideias. Conecte-se. Aprenda. Evolua.
          </p>
        </div>
      </section>

      <section id="aulas" className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-2 flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-widest text-chalk-dim">
            {lessons.length} aula{lessons.length !== 1 ? "s" : ""} no total
          </h2>
        </div>

        <SubjectExplorer />
      </section>

      <Footer />
    </>
  );
}
