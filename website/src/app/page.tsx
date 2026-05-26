import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1240px] px-6">
        <section className="flex min-h-[60vh] flex-col items-start justify-center py-24">
          <p className="mb-6 text-xs font-medium tracking-[0.18em] text-mint uppercase">
            Phase 1 · Bootstrap
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] text-ink md:text-7xl">
            Sonivo Landing —{" "}
            <span className="font-display text-mint">Coming soon</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-ink/70">
            Diese Seite ist der Bootstrap-Stand. Hero, Szenarien, Pakete und
            Lead-Formular folgen in den Phasen 2 bis 6 laut{" "}
            <code className="rounded bg-mint-pale px-1.5 py-0.5 text-sm text-forest">
              docs/06-IMPLEMENTATION_PLAN.md
            </code>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
