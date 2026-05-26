import Link from "next/link";
import { PRICING_COPY } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pakete" className="mx-auto max-w-[1240px] px-6 py-20 md:py-28">
      <div className="rounded-3xl border border-line/60 bg-cream-soft p-8 shadow-card md:p-14">
        <h2 className="mb-12 text-4xl font-semibold leading-[1.1] text-ink md:text-5xl">
          <span className="font-display font-medium text-ink-soft">
            {PRICING_COPY.headlineParts.cursive}
          </span>{" "}
          {PRICING_COPY.headlineParts.tail}
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PRICING_COPY.tiers.map((tier) => (
            <article
              key={tier.name}
              className={[
                "flex flex-col rounded-3xl border p-7",
                tier.highlighted
                  ? "border-ink bg-cream-tint shadow-card ring-1 ring-ink/10 lg:scale-[1.02]"
                  : "border-line/60 bg-cream opacity-90",
              ].join(" ")}
            >
              <div className="mb-1 flex items-center gap-3">
                <h3 className="text-2xl font-semibold text-ink">{tier.name}</h3>
                {tier.highlighted && tier.tagline ? (
                  <span className="rounded-full bg-ink px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-cream-soft uppercase">
                    Empfehlung
                  </span>
                ) : null}
              </div>
              {tier.tagline && tier.highlighted ? (
                <p className="mb-5 text-xs text-ink/60">{tier.tagline}</p>
              ) : (
                <div className="mb-5" />
              )}

              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-ink">{tier.monthly} €</span>
                <span className="text-sm text-ink/55">/ Monat</span>
              </div>
              <p className="mb-1 text-sm text-ink/65">
                + ab <span className="font-medium text-ink/80">{tier.setup.toLocaleString("de-DE")} €</span> einmaliges Setup
              </p>
              <p className="mb-5 text-sm text-ink">
                <span className="font-medium">{tier.minutes.toLocaleString("de-DE")} Min</span> / Monat
                <span className="text-ink/55"> · {tier.perExtraMinute.toString().replace(".", ",")} € / Zusatzminute</span>
              </p>

              <ul className="mb-7 space-y-2 text-sm text-ink/85">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span aria-hidden className="mt-0.5 text-ink-soft">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.ctaHref}
                className={[
                  "mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium",
                  tier.highlighted
                    ? "bg-ink text-cream-soft hover:bg-forest"
                    : "border border-line bg-cream-soft text-ink hover:bg-cream-tint",
                ].join(" ")}
              >
                {tier.ctaLabel}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-ink/65">
            <span className="font-medium text-ink">{PRICING_COPY.bottomStrip.label}</span>{" "}
            <span className="mx-2 text-ink/30">·</span>
            <span className="text-ink-soft">{PRICING_COPY.bottomStrip.range}</span>{" "}
            <span className="mx-2 text-ink/30">·</span>
            {PRICING_COPY.bottomStrip.note}
          </p>
          <Link href={PRICING_COPY.customLink.href} className="text-sm text-ink/70 hover:text-ink">
            {PRICING_COPY.customLink.text}{" "}
            <span className="font-medium text-ink underline-offset-4 hover:underline">
              {PRICING_COPY.customLink.cta}
            </span>
          </Link>
        </div>

        <details className="mt-8 rounded-2xl border border-line/60 bg-cream px-5 py-4 text-sm text-ink/80">
          <summary className="cursor-pointer font-medium text-ink">
            {PRICING_COPY.glossary.label}
          </summary>
          <p className="mt-3 text-ink/75">{PRICING_COPY.glossary.body}</p>
        </details>
      </div>
    </section>
  );
}
