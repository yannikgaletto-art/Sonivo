import Link from "next/link";
import { DELIVERY_COPY, type DeliveryCard } from "@/lib/content";

type Tone = "cream" | "mint-soft" | "ink" | "mint-pale";

const TONES: Tone[] = ["cream", "mint-soft", "ink", "mint-pale"];

const COL_OFFSETS = [
  "lg:mt-[128px]",
  "lg:mt-[88px]",
  "lg:mt-[44px]",
  "lg:mt-0",
];

function cardChrome(tone: Tone): string {
  switch (tone) {
    case "cream":
      return "border-line/60 bg-cream-soft text-ink";
    case "mint-soft":
      return "border-ink/10 bg-mint-soft text-ink";
    case "ink":
      return "border-ink bg-ink text-cream-soft";
    case "mint-pale":
      return "border-ink/10 bg-mint-pale text-ink";
  }
}

function tagChrome(tone: Tone): string {
  return tone === "ink"
    ? "border-cream-soft/20 bg-cream-soft/10 text-cream-soft/90"
    : "border-ink/10 bg-ink/5 text-ink/70";
}

function bodyTone(tone: Tone): string {
  return tone === "ink" ? "text-cream-soft/75" : "text-ink/70";
}

function dotTone(tone: Tone): string {
  return tone === "ink" ? "bg-cream-soft/55" : "bg-ink-soft";
}

function NumberNode({ num, tone }: { num: string; tone: Tone }) {
  return (
    <span
      aria-hidden
      className={[
        "relative z-10 flex size-11 items-center justify-center rounded-full border-2 text-[11px] font-bold tracking-wider",
        tone === "ink"
          ? "border-ink bg-ink text-cream-soft"
          : "border-ink/80 bg-cream-soft text-ink",
      ].join(" ")}
      style={{
        boxShadow:
          "0 0 0 5px var(--color-cream), 0 6px 14px rgba(15,17,23,.10)",
      }}
    >
      {num}
    </span>
  );
}

function NodeStem() {
  return (
    <span
      aria-hidden
      className="my-2 block h-5 w-px text-ink/35"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, currentColor 0 4px, transparent 4px 8px)",
      }}
    />
  );
}

function StaircaseCard({
  card,
  tone,
  idx,
}: {
  card: DeliveryCard;
  tone: Tone;
  idx: number;
}) {
  return (
    <div
      className={[
        "relative z-10 flex flex-col items-center",
        COL_OFFSETS[idx],
      ].join(" ")}
    >
      <NumberNode num={card.num} tone={tone} />
      <NodeStem />
      <article
        className={[
          "w-full rounded-2xl border p-5 shadow-card sm:p-6",
          cardChrome(tone),
        ].join(" ")}
      >
        <span
          className={[
            "inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em]",
            tagChrome(tone),
          ].join(" ")}
        >
          {card.tag}
        </span>
        <h3 className="mt-3 text-lg font-semibold leading-tight tracking-tight">
          {card.title}
        </h3>
        <p className={["mt-2 text-sm leading-relaxed", bodyTone(tone)].join(" ")}>
          {card.body}
        </p>
        <ul className="mt-3 space-y-1.5 text-sm">
          {card.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span
                aria-hidden
                className={[
                  "mt-1.5 size-1 shrink-0 rounded-full",
                  dotTone(tone),
                ].join(" ")}
              />
              <span className={bodyTone(tone)}>{b}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

function StaircaseLine() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-0 hidden h-[200px] w-full text-ink/30 lg:block"
      viewBox="0 0 1200 200"
      preserveAspectRatio="none"
    >
      <path
        d="M 0 172 C 55 168 100 160 150 150 C 250 138 350 124 450 110 C 550 96 650 82 750 66 C 850 50 950 36 1050 22 C 1100 15 1150 10 1200 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 6"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function Delivery() {
  const { cards } = DELIVERY_COPY;

  return (
    <section
      id="leistungen"
      className="mx-auto max-w-[1240px] px-6 py-14 md:py-28"
    >
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
      <p className="mt-3 max-w-3xl text-sm font-medium text-ink/85 sm:text-base md:text-lg">
        {DELIVERY_COPY.punchline}
      </p>

      <div className="relative mt-14 md:mt-20">
        <StaircaseLine />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-4">
          {cards.map((card, idx) => (
            <StaircaseCard
              key={card.num}
              card={card}
              tone={TONES[idx]}
              idx={idx}
            />
          ))}
        </div>
      </div>

      <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink/70">
        {DELIVERY_COPY.trustStrip.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span aria-hidden className="size-1.5 rounded-full bg-ink-soft" />
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-8 text-center text-sm text-ink/65">
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
