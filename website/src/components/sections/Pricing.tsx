"use client";

import Link from "next/link";
import { useState } from "react";
import { PRICING_COPY } from "@/lib/content";

const defaultSelectedIndex = Math.max(
  PRICING_COPY.tiers.findIndex((tier) => tier.highlighted),
  0,
);

export function Pricing() {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);

  return (
    <section id="pakete" className="mx-auto max-w-[1240px] px-6 py-14 md:py-28">
      <div className="rounded-3xl border border-line/60 bg-cream-soft p-6 shadow-card sm:p-8 md:p-14">
        <h2 className="mb-10 text-3xl font-semibold leading-[1.1] text-ink sm:text-4xl md:mb-12 md:text-5xl">
          <span className="font-display font-medium text-ink-soft">
            {PRICING_COPY.headlineParts.cursive}
          </span>{" "}
          {PRICING_COPY.headlineParts.tail}
        </h2>

        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10 lg:px-6 lg:py-10">
          {PRICING_COPY.tiers.map((tier, index) => {
            const isSelected = index === selectedIndex;

            return (
              <article
                key={tier.name}
                className={[
                  "relative flex flex-col rounded-3xl border bg-cream-soft p-6 sm:p-7",
                  "transition-[transform,opacity,box-shadow,border-color] duration-[650ms] ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform",
                  "motion-reduce:transition-none",
                  isSelected
                    ? "border-ink/80 opacity-100 shadow-[0_0_0_1px_rgba(23,38,84,0.08),0_28px_60px_-20px_rgba(23,38,84,0.45),0_0_120px_-8px_rgba(36,59,120,0.55)] lg:z-10 lg:-translate-y-6 lg:scale-[1.08]"
                    : "border-line/50 opacity-100 lg:translate-y-0 lg:scale-[0.93] lg:opacity-50 lg:shadow-none cursor-pointer hover:lg:opacity-80 hover:lg:scale-[0.96] hover:lg:border-ink/30",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  onFocus={() => setSelectedIndex(index)}
                  aria-pressed={isSelected}
                  aria-label={`${tier.name} Paket anzeigen`}
                  className="flex flex-1 flex-col text-left outline-none focus-visible:rounded-2xl focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream-soft"
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
                </button>

                <Link
                  href={tier.ctaHref}
                  onFocus={() => setSelectedIndex(index)}
                  className={[
                    "mt-auto inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-medium",
                    isSelected
                      ? "bg-ink text-cream-soft hover:bg-forest"
                      : "border border-line bg-cream-soft text-ink hover:bg-cream-tint",
                  ].join(" ")}
                >
                  {tier.ctaLabel}
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <p className="text-sm text-ink/65">
            <span className="font-medium text-ink">{PRICING_COPY.bottomStrip.label}</span>{" "}
            <span className="mx-2 text-ink/30">·</span>
            <span className="text-ink-soft">{PRICING_COPY.bottomStrip.range}</span>{" "}
            <span className="mx-2 text-ink/30">·</span>
            {PRICING_COPY.bottomStrip.note}
          </p>
        </div>
      </div>
    </section>
  );
}
