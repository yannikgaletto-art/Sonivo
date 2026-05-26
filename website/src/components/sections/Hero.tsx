import Link from "next/link";
import { HERO_COPY } from "@/lib/content";
import { SplineBot } from "@/components/SplineBot";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 pt-8 pb-14 md:pt-16 md:pb-28">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="mb-5 text-[11px] font-medium tracking-[0.18em] text-ink-soft uppercase md:mb-6 md:text-xs">
            {HERO_COPY.eyebrow}
          </p>

          <h1 className="text-[2.5rem] font-semibold leading-[1.05] text-ink sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">{HERO_COPY.headlineParts.line1}</span>
            <span className="block">
              {HERO_COPY.headlineParts.line2plain}{" "}
              <span className="font-display font-medium text-ink-soft">
                {HERO_COPY.headlineParts.line2cursive}
              </span>
            </span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={HERO_COPY.ctas[0].href}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream-soft hover:bg-forest"
            >
              {HERO_COPY.ctas[0].label}
              <span aria-hidden>→</span>
            </Link>
            <Link
              href={HERO_COPY.ctas[1].href}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-cream-soft px-6 py-3 text-sm font-medium text-ink hover:bg-cream-tint"
            >
              <span aria-hidden>▶</span>
              {HERO_COPY.ctas[1].label}
            </Link>
          </div>

          <p className="mt-3 text-xs text-ink/55">{HERO_COPY.microcopy}</p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/70 md:mt-10">
            {HERO_COPY.trustPills.map((pill) => (
              <li key={pill.label} className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 rounded-full bg-ink-soft" />
                {pill.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-square w-full overflow-visible">
            <SplineBot />
          </div>
        </div>
      </div>
    </section>
  );
}
