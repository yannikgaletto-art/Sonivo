import Link from "next/link";
import { PROCESS_COPY } from "@/lib/content";

export function Process() {
  return (
    <section id="vorgehen" className="mx-auto max-w-[1240px] px-6 py-20 md:py-28">
      <p className="mb-4 text-xs font-medium tracking-[0.18em] text-ink-soft uppercase">
        {PROCESS_COPY.eyebrow}
      </p>
      <h2 className="mb-12 text-4xl font-semibold leading-[1.1] text-ink md:text-5xl">
        {PROCESS_COPY.headlineParts.plain}{" "}
        <span className="font-display font-medium text-ink-soft">
          {PROCESS_COPY.headlineParts.cursive}
        </span>{" "}
        {PROCESS_COPY.headlineParts.tail}
      </h2>

      <article className="rounded-3xl border border-ink/15 bg-mint-pale p-8 shadow-card md:p-12">
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <span className="font-display text-5xl leading-none text-ink-soft">
            {PROCESS_COPY.primaryStep.num}
          </span>
          <span className="rounded-full bg-cream-soft px-3 py-1 text-[10px] font-medium tracking-[0.18em] text-ink-soft uppercase">
            {PROCESS_COPY.primaryStep.tag}
          </span>
        </div>
        <h3 className="mb-4 text-3xl font-semibold text-ink md:text-4xl">
          {PROCESS_COPY.primaryStep.title}
        </h3>
        <p className="mb-7 max-w-2xl text-base text-ink/75 md:text-lg">
          {PROCESS_COPY.primaryStep.body}
        </p>
        {PROCESS_COPY.primaryStep.cta ? (
          <Link
            href={PROCESS_COPY.primaryStep.cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream-soft hover:bg-forest"
          >
            {PROCESS_COPY.primaryStep.cta.label}
            <span aria-hidden>→</span>
          </Link>
        ) : null}
      </article>

      <p className="mt-12 mb-5 text-xs font-medium tracking-[0.18em] text-ink/50 uppercase">
        {PROCESS_COPY.secondaryHeading}
      </p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {PROCESS_COPY.secondarySteps.map((step) => (
          <article
            key={step.num}
            className={[
              "rounded-3xl border p-6",
              step.dark
                ? "border-ink bg-ink text-cream-soft"
                : "border-line/60 bg-cream-soft text-ink",
            ].join(" ")}
          >
            <div className="mb-3 flex items-center justify-between">
              <span
                className={[
                  "font-display text-3xl leading-none",
                  step.dark ? "text-cream-soft/85" : "text-ink-soft",
                ].join(" ")}
              >
                {step.num}
              </span>
              <span
                className={[
                  "rounded-full px-3 py-1 text-[10px] font-medium tracking-[0.18em] uppercase",
                  step.dark ? "bg-cream-soft/15 text-cream-soft" : "bg-mint-pale text-ink-soft",
                ].join(" ")}
              >
                {step.tag}
              </span>
            </div>
            <h4 className="mb-3 text-lg font-semibold">{step.title}</h4>
            <p className={step.dark ? "text-sm text-cream-soft/80" : "text-sm text-ink/70"}>
              {step.body}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-ink/65">{PROCESS_COPY.footerNote}</p>
    </section>
  );
}
