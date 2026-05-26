import Link from "next/link";
import { HERO_COPY } from "@/lib/content";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 pt-10 pb-20 md:pt-16 md:pb-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="mb-6 text-xs font-medium tracking-[0.18em] text-ink-soft uppercase">
            {HERO_COPY.eyebrow}
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] text-ink md:text-6xl lg:text-7xl">
            {HERO_COPY.headlineParts.plain}{" "}
            <span className="font-display font-medium text-ink-soft">
              {HERO_COPY.headlineParts.cursive}
            </span>
            {HERO_COPY.headlineParts.tail ? <> {HERO_COPY.headlineParts.tail}</> : null}
          </h1>

          <p className="mt-7 max-w-[36rem] text-base text-ink/75 md:text-lg">
            {HERO_COPY.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={HERO_COPY.ctas[0].href}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream-soft hover:bg-forest"
            >
              {HERO_COPY.ctas[0].label}
              <span aria-hidden>→</span>
            </Link>
            <Link
              href={HERO_COPY.ctas[1].href}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-cream-soft px-6 py-3 text-sm font-medium text-ink hover:bg-cream-tint"
            >
              <span aria-hidden>▶</span>
              {HERO_COPY.ctas[1].label}
            </Link>
          </div>

          <p className="mt-3 text-xs text-ink/55">{HERO_COPY.microcopy}</p>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/70">
            {HERO_COPY.trustPills.map((pill) => (
              <li key={pill.label} className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 rounded-full bg-ink-soft" />
                {pill.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-br from-mint-pale via-cream-soft to-cream-tint shadow-card">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 text-ink/40">
                <div className="flex size-24 items-center justify-center rounded-full bg-ink/5 text-4xl" aria-hidden>
                  🤖
                </div>
                <p className="text-xs font-medium tracking-[0.18em] uppercase">
                  Sonivo Bot
                </p>
                <p className="text-[10px] text-ink/30">Visual folgt in Phase 7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
