import { SCENARIO_COPY } from "@/lib/content";

export function Scenario() {
  return (
    <section id="szenario" className="mx-auto max-w-[1240px] px-6 py-14 md:py-28">
      <p className="mb-4 text-[11px] font-medium tracking-[0.18em] text-ink-soft uppercase md:text-xs">
        {SCENARIO_COPY.eyebrow}
      </p>
      <h2 className="mb-10 text-3xl font-semibold leading-[1.1] text-ink sm:text-4xl md:mb-12 md:text-5xl">
        {SCENARIO_COPY.headlineParts.plain}{" "}
        <span className="font-display font-medium text-ink-soft">
          {SCENARIO_COPY.headlineParts.cursive}
        </span>{" "}
        {SCENARIO_COPY.headlineParts.tail}
      </h2>

      <div className="relative overflow-hidden rounded-3xl border border-line/60 bg-cream-soft p-6 shadow-card sm:p-8 md:p-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl md:text-4xl">
              {SCENARIO_COPY.activeCard.title}
            </h3>
            <p className="mt-5 max-w-lg text-sm text-ink/75 sm:mt-6 sm:text-base">
              <strong className="font-semibold text-ink">
                Notfall erkannt in unter 30 Sekunden:
              </strong>{" "}
              {SCENARIO_COPY.activeCard.body.replace("Notfall erkannt in unter 30 Sekunden: ", "")}
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-line bg-cream px-3 py-2 md:mt-8">
              <button
                type="button"
                aria-label="Demo-Anruf abspielen"
                className="flex size-10 items-center justify-center rounded-full bg-ink text-cream-soft hover:bg-forest"
              >
                <span aria-hidden>▶</span>
              </button>
              <div className="flex items-center gap-1 px-1" aria-hidden>
                {[2, 5, 3, 7, 4, 8, 5, 6, 3, 5, 7, 4, 6, 5, 3, 7].map((h, i) => (
                  <span
                    key={i}
                    className="block w-[3px] rounded-full bg-ink/40"
                    style={{ height: `${h * 2}px` }}
                  />
                ))}
              </div>
              <span className="pr-3 text-xs font-medium text-ink/60">
                {SCENARIO_COPY.activeCard.audioDuration}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ul className="space-y-3">
              {SCENARIO_COPY.floatingCards.map((card) => (
                <li
                  key={card.num}
                  className={[
                    "flex items-center gap-4 rounded-2xl border bg-cream-soft px-5 py-4 shadow-card",
                    card.active ? "border-ink/40 ring-1 ring-ink/10" : "border-line/60",
                  ].join(" ")}
                >
                  <span className="text-xs font-medium text-ink/40">{card.num}</span>
                  <div className="flex-1">
                    <p className={card.active ? "font-semibold text-ink" : "font-medium text-ink/85"}>
                      {card.title}
                    </p>
                    <p className="text-xs text-ink/50">{card.tag}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
