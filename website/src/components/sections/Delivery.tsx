import Link from "next/link";
import { DELIVERY_COPY } from "@/lib/content";

export function Delivery() {
  return (
    <section id="leistungen" className="mx-auto max-w-[1240px] px-6 py-14 md:py-28">
      <p className="mb-4 text-[11px] font-medium tracking-[0.18em] text-ink-soft uppercase md:text-xs">
        {DELIVERY_COPY.eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-[1.1] text-ink sm:text-4xl md:text-5xl">
        {DELIVERY_COPY.headlineParts.plain}{" "}
        <span className="font-display font-medium text-ink-soft">
          {DELIVERY_COPY.headlineParts.cursive}
        </span>{" "}
        {DELIVERY_COPY.headlineParts.tail}
      </h2>
      <p className="mt-5 max-w-3xl text-sm text-ink/75 sm:text-base md:text-lg">
        {DELIVERY_COPY.subheadline}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
        {DELIVERY_COPY.cards.map((card, idx) => (
          <article
            key={card.num}
            className={[
              "flex flex-col rounded-3xl border p-6 shadow-card transition-transform hover:-translate-y-1",
              card.dark
                ? "border-ink bg-ink text-cream-soft"
                : "border-line/60 bg-cream-soft text-ink",
              idx === 1 ? "lg:mt-8" : "",
              idx === 2 ? "lg:mt-16" : "",
              idx === 3 ? "lg:mt-24" : "",
            ].join(" ")}
          >
            <div className="mb-4 flex items-center justify-between">
              <span
                className={[
                  "rounded-full px-3 py-1 text-[10px] font-medium tracking-[0.18em] uppercase",
                  card.dark ? "bg-cream-soft/15 text-cream-soft" : "bg-mint-pale text-ink-soft",
                ].join(" ")}
              >
                {card.tag}
              </span>
              <span
                className={[
                  "text-xs font-medium",
                  card.dark ? "text-cream-soft/50" : "text-ink/40",
                ].join(" ")}
              >
                {card.num}
              </span>
            </div>

            <h3 className="mb-3 text-xl font-semibold leading-tight">{card.title}</h3>

            <p className={card.dark ? "mb-5 text-sm text-cream-soft/80" : "mb-5 text-sm text-ink/70"}>
              {card.body}
            </p>

            <ul className={card.dark ? "space-y-2 text-sm text-cream-soft/85" : "space-y-2 text-sm text-ink/85"}>
              {card.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-current opacity-50" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-ink/65">
        {DELIVERY_COPY.footerLink.text}{" "}
        <Link
          href={DELIVERY_COPY.footerLink.href}
          className="font-medium text-ink underline-offset-4 hover:underline"
        >
          {DELIVERY_COPY.footerLink.cta}
        </Link>
      </p>
    </section>
  );
}
