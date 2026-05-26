import { COMPARISON_COPY } from "@/lib/content";

export function Comparison() {
  return (
    <section id="testing" className="mx-auto max-w-[1240px] px-6 py-20 md:py-28">
      <p className="mb-4 text-xs font-medium tracking-[0.18em] text-ink-soft uppercase">
        {COMPARISON_COPY.eyebrow}
      </p>
      <h2 className="mb-10 max-w-4xl text-4xl font-semibold leading-[1.1] text-ink md:text-5xl">
        {COMPARISON_COPY.headlineParts.plain}{" "}
        <span className="font-display font-medium text-ink-soft">
          {COMPARISON_COPY.headlineParts.cursive}
        </span>
      </h2>

      <div className="mb-8 inline-flex rounded-full border border-line bg-cream-soft p-1 text-sm">
        <button
          type="button"
          className="rounded-full px-4 py-1.5 text-ink/55"
          aria-pressed="false"
          disabled
        >
          {COMPARISON_COPY.toggle.leftLabel}
        </button>
        <button
          type="button"
          className="rounded-full bg-ink px-4 py-1.5 font-medium text-cream-soft"
          aria-pressed="true"
        >
          {COMPARISON_COPY.toggle.rightLabel}
        </button>
      </div>

      <div className="relative rounded-3xl border-2 border-ink/20 bg-cream-soft p-6 shadow-card md:p-10">
        <span className="absolute -top-3 right-6 rounded-full bg-cream-soft px-3 py-1 text-xs font-medium text-ink-soft ring-1 ring-ink/15">
          {COMPARISON_COPY.containerLabel}
        </span>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {COMPARISON_COPY.columns.map((col) => (
            <div key={col.heading}>
              <span
                className={[
                  "mb-5 inline-block rounded-full px-3 py-1 text-[10px] font-medium tracking-[0.18em] uppercase",
                  col.highlighted ? "bg-ink text-cream-soft" : "bg-mint-pale text-ink-soft",
                ].join(" ")}
              >
                {col.heading}
              </span>
              <ol className="space-y-2.5">
                {col.steps.map((step, idx) => (
                  <li
                    key={step}
                    className="flex items-center gap-4 rounded-2xl border border-line/60 bg-cream px-5 py-3"
                  >
                    <span className="font-display text-2xl leading-none text-ink/30">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-ink/90">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {COMPARISON_COPY.trustPills.map((pill) => (
          <li
            key={pill.label}
            className="flex items-center gap-4 rounded-2xl border border-line/60 bg-cream-soft px-5 py-4"
          >
            <span
              aria-hidden
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-mint-pale text-sm font-semibold text-ink-soft"
            >
              {pill.icon}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-ink">{pill.label}</p>
              {pill.sublabel ? <p className="text-xs text-ink/60">{pill.sublabel}</p> : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
