"use client";

import { useEffect, useRef, useState } from "react";
import { SCENARIO_COPY } from "@/lib/content";

const CREAM = "250, 247, 239"; // --color-cream als rgb-Triplet für rgba()

const VIGNETTE = `
  linear-gradient(90deg, rgba(${CREAM}, 1) 0%, rgba(${CREAM}, 0.96) 28%, rgba(${CREAM}, 0.76) 44%, rgba(${CREAM}, 0.22) 61%, rgba(${CREAM}, 0) 76%, rgba(${CREAM}, 0.18) 100%),
  linear-gradient(270deg, rgba(${CREAM}, 0.34) 0%, rgba(${CREAM}, 0.14) 20%, rgba(${CREAM}, 0) 48%),
  linear-gradient(180deg, rgba(${CREAM}, 0.28) 0%, rgba(${CREAM}, 0.05) 35%, rgba(${CREAM}, 0.08) 65%, rgba(${CREAM}, 0.32) 100%)
`;

export function Scenario() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const active = SCENARIO_COPY.scenarios[activeIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  }, [activeIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="szenario" className="mx-auto max-w-310 px-6 py-14 md:py-28">
      {SCENARIO_COPY.eyebrow ? (
        <p className="mb-4 text-[11px] font-medium tracking-[0.18em] text-ink-soft uppercase md:text-xs">
          {SCENARIO_COPY.eyebrow}
        </p>
      ) : null}
      <h2 className="mb-8 text-3xl font-semibold leading-[1.1] text-ink sm:text-4xl md:mb-10 md:text-5xl">
        {SCENARIO_COPY.headlineParts.plain}{" "}
        <span className="font-display font-medium text-ink-soft">
          {SCENARIO_COPY.headlineParts.cursive}
        </span>
        {SCENARIO_COPY.headlineParts.tail ? <> {SCENARIO_COPY.headlineParts.tail}</> : null}
      </h2>

      <div
        className="relative overflow-hidden rounded-3xl border border-line/60 bg-white shadow-card lg:h-160"
        style={{ "--accent": active.accent } as React.CSSProperties}
      >
        {/* Background-Layer-Stack — nur Desktop; auf Mobile bleibt die Card clean weiß */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          {/* Layer 0 — Blur-Fill (nur bei contain/auto: seitliche Bereiche mit verschwommener Bildkopie füllen → keine harte Kante) */}
          {active.bgSize && active.bgSize !== "cover" ? (
            <div
              key={`${active.image}-blur`}
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${active.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: "blur(60px) saturate(0.55) brightness(1.1)",
                transform: "scale(1.15)",
                opacity: 0.55,
              }}
            />
          ) : null}

          {/* Layer 1 — Photo (background-image, kein <img>) */}
          <div
            key={active.image}
            className="absolute inset-0 z-0 transition-opacity duration-500"
            style={{
              backgroundImage: `url(${active.image})`,
              backgroundSize: active.bgSize ?? "cover",
              backgroundPosition: active.bgPosition,
              backgroundRepeat: "no-repeat",
              filter: "saturate(0.88) contrast(0.98) brightness(1.04)",
              ...(active.bgSize && active.bgSize !== "cover"
                ? {
                    maskImage:
                      "linear-gradient(to right, transparent 8%, #000 26%, #000 74%, transparent 92%)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 8%, #000 26%, #000 74%, transparent 92%)",
                  }
                : {}),
            }}
          />

          {/* Layer 2 — Blob (Akzentfarbe als weicher Glow hinter dem Bot) */}
          <div
            className="absolute z-10 mix-blend-screen"
            style={{
              inset: "-25% 2% -25% 28%",
              background: "radial-gradient(circle at 50% 50%, var(--accent), transparent 60%)",
              filter: "blur(100px)",
              opacity: 0.35,
            }}
          />

          {/* Layer 3 — Vignette (Cream-Schleier links für Text-Lesbarkeit) */}
          <div
            className="absolute inset-0 z-20"
            style={{ background: VIGNETTE }}
          />
        </div>

        <div className="relative z-30 grid h-full grid-cols-1 gap-8 px-8 py-10 lg:grid-cols-[minmax(0,430px)_minmax(0,1fr)_clamp(310px,27%,360px)] lg:items-center lg:gap-6 lg:px-12 lg:py-14">
          <div className="lg:col-start-1">
            <h3 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl md:text-[1.75rem] lg:text-[1.75rem]">
              {active.fullTitle}
            </h3>
            <p className="mt-4 text-sm text-ink/75 sm:text-base">
              <strong className="font-semibold text-ink">{active.bodyHighlight}</strong>{" "}
              {active.bodyText}
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-line bg-white px-3 py-2 shadow-card">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Demo-Anruf pausieren" : "Demo-Anruf abspielen"}
                aria-pressed={isPlaying}
                className="flex size-11 items-center justify-center rounded-full bg-ink text-cream-soft hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              >
                <span aria-hidden="true">{isPlaying ? "❚❚" : "▶"}</span>
              </button>
              <div className="flex items-center gap-1 px-1" aria-hidden="true">
                {[2, 5, 3, 7, 4, 8, 5, 6, 3, 5, 7, 4, 6, 5, 3, 7].map((h, i) => (
                  <span
                    key={i}
                    className="block w-0.75 rounded-full bg-ink/40"
                    style={{ height: `${h * 2}px` }}
                  />
                ))}
              </div>
              <span className="pr-3 text-xs font-medium text-ink/60">{active.audioDuration}</span>
              <audio
                ref={audioRef}
                src={active.audioSrc}
                preload="none"
                onEnded={() => setIsPlaying(false)}
              />
            </div>
          </div>

          <div className="lg:col-start-3">
            <ul className="space-y-3">
              {SCENARIO_COPY.scenarios.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <li key={item.num}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-pressed={isActive}
                      className={[
                        "flex w-full min-h-11 items-center gap-4 rounded-2xl border px-5 py-4 text-left shadow-card transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2",
                        isActive
                          ? "border-ink bg-mint-pale ring-2 ring-ink/20"
                          : "border-line/60 bg-white hover:border-ink/40",
                      ].join(" ")}
                    >
                      <span className={isActive ? "text-xs font-semibold text-ink" : "text-xs font-medium text-ink/60"}>{item.num}</span>
                      <div className="flex-1">
                        <p className={isActive ? "font-semibold text-ink" : "font-medium text-ink/85"}>
                          {item.shortTitle}
                        </p>
                        <p className="text-xs text-ink/60">{item.tag}</p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
