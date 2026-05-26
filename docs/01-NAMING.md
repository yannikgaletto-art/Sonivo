# 01 — Naming-Entscheidung

**Status:** OFFEN · **Entscheider:** Yannik · **Stand:** 2026-05-26

---

## Optionen auf dem Tisch

| Name | Pro | Contra | Domain-Verfügbarkeit |
|---|---|---|---|
| **Sonivo** | Klingt freundlich, kurz, abstrakt → kein Branchen-Lock-in. "Sonus" (Klang) + "vivo" (lebendig). Folder existiert schon. | Markenrecherche TBD. Vielleicht zu nah an Sonos/Sonoco. | TBD prüfen: sonivo.de, sonivo.ai |
| **YInnovation** | Y wie Yannik, "Innovation" als Generalist-Term. In Wettbewerb.md schon als Brand-Anker verwendet. | Generisch, klingt nach Agentur, nicht nach Produkt. SEO-schwach. | TBD: yinnovation.de, yinnovation.com |
| **Neuer Name** | Frei wählbar — könnte aus Kernthese abgeleitet sein (z.B. "Auftragnahme", "Empfangsbüro", "Dispatchr") | Branding-Aufwand höher. | TBD |

---

## Bewertungskriterien (Vorschlag)

| Kriterium | Gewicht | Sonivo | YInnovation |
|---|---:|---:|---:|
| Aussprechbar DE+EN | 3 | 3 | 2 |
| Verfügbarkeit .de / .ai / .com | 3 | TBD | TBD |
| Branchen-Neutral (skaliert von SHK zu Elektrik etc.) | 2 | 3 | 2 |
| Markenrechtsfrei | 5 | TBD | TBD |
| Eingängig / merkbar | 2 | 3 | 1 |
| **Score (provisorisch)** |  | **15+ TBD** | **9+ TBD** |

---

## To-Dos vor finaler Entscheidung

1. **DPMA-Markenrecherche** für Top-Kandidaten (https://register.dpma.de/) — keine Rechtsberatung, nur First-Pass
2. **DENIC-Whois** für `.de`-Domains
3. **Vercel/GitHub Org-Name-Check** — gibt es Konflikte?
4. **Slack-Lautcheck:** Den Namen 3× laut aussprechen + 3 Bekannten zeigen.

---

## Empfehlung (vorläufig)

**Sonivo** als Produkt-Name + **YInnovation** als Holding/Operating-Company. So bleibt das Produkt eigenständig, aber die Firma kann mehrere Produkte halten.

Aber: **finale Entscheidung trifft Yannik**, sobald Markenrecherche + Domain-Check durch sind.

---

## Nach Entscheidung: Was passiert

1. Folder `Sonivo/website/` ggf. umbenennen
2. GitHub-Repo-Slug festlegen (z.B. `sonivo-landing`)
3. Vercel-Project-Name setzen
4. Supabase-Project-Name setzen
5. Domain bestellen
6. Logo-Briefing (separater Auftrag — nicht Phase 0)
