# Sonivo — Projekt-Brief

**Stand:** 2026-05-26 · **Phase:** 0 (Setup) · **Owner:** Yannik Galetto

> Dies ist das zentrale Brief-Dokument. Alle anderen docs/ Files bauen darauf auf.

---

## 1. Was bauen wir?

**Eine Marketing-Landing-Site + dahinter ein AI-Operations-Produkt** für lokale Handwerksbetriebe.

**Produkt (langfristig):** AI-Operator, der Anrufe annimmt, Anliegen versteht, qualifiziert, Tickets/Termine ins bestehende System (CRM, ERP, Kalender) übergibt und sensible Aktionen mit Mensch im Loop bestätigt.

**Landing-Site (jetzt):** Erklärt das Produkt, sammelt erste Pilot-Anfragen, schafft Vertrauen (DSGVO, Made-in-Germany, lokale Nähe).

---

## 2. Kernthese (aus Knowledge Base)

> "Voice Agents nehmen Anrufe an. Wir betreiben den Auftrag."

**MVP-Wedge:** 24/7 AI-Dispatcher für **Sanitär-, Heizungs- und Rohrreinigungsbetriebe**. Erkennt Notfälle, erfasst Aufträge, fordert Fotos an, informiert den richtigen Mitarbeiter.

**Ein-Satz-Pitch:** "Wir bauen Handwerksbetrieben in 7 Tagen einen digitalen Empfang, der Anrufe annimmt, Anliegen strukturiert und Rückrufe, Termine oder Aufträge direkt in das bestehende System übergibt."

---

## 3. Zielgruppe (Priorität 1-5)

| Prio | Segment | Warum |
|---:|---|---|
| 1 | Sanitär/Heizung (SHK) inkl. Notdienst | Hohe Dringlichkeit, viele Anrufe außerhalb Bürozeiten |
| 2 | Rohrreinigung / Kanalservice | Notfallcharakter, abends/wochenends, standardisierbar |
| 3 | Elektriker / Elektro-Notdienst / Wallbox / PV | Sicherheits-Triage, hohe Ticketwerte |
| 4 | Dachdecker / Leckage / Sturmschäden | Multimodal: Stimme + Foto + Schadenklassifizierung |
| 5 | Kälte/Klimatechnik (besonders Gewerbekälte) | B2B-Schmerz, SLA-Pricing möglich |

**Nicht zuerst:** Friseur, Kosmetik, Tierärzte, Ärzte, Kanzleien.

**Betriebsgröße:** 5–30 Mitarbeitende.

---

## 4. Tech-Stack (entschieden)

| Layer | Choice | Begründung |
|---|---|---|
| Frontend | Next.js 16 (App Router) + Turbopack | Vorlage aus peira-landing-v2 |
| Hosting | Vercel | Yanniks eigener Account: `yanniks-projects-7665d957` |
| Repo | GitHub | Yanniks Account: `yannikgaletto-art` |
| DB / Auth | Supabase | Für Lead-Formular, evtl. Pilot-Dashboard |
| Sprache | Deutsch primär (Sie-Form), Englisch als Toggle | aus peira-Wireframe übernommen |
| Design-Tonalität | Off-Black + Warm-Beige (grün-grau Akzente wie peira-Referenz) | TBD final, siehe [docs/01-NAMING.md](01-NAMING.md) |

---

## 5. Source of Truth

| Inhalt | Pfad | Rolle |
|---|---|---|
| Produkt-Knowledge | `KnowledgeHub/3) OpenaI/AI_Service_Operator_Knowledge_Base.md` | Produktstrategie, MVP-Scope, Pricing, Onboarding |
| Wettbewerb + CEO-Modus | `KnowledgeHub/3) OpenaI/Wettbewerb.md` | Operating-System, Compliance-Hinweise, PESTEL/Porter |
| Design-Vorlage | `~/peira-landing-v2/` (READ-ONLY) | 11-Sektionen-Wireframe, Off-Black + Warm-Beige |
| Skills-Router | `KnowledgeHub/2) KD/START_HERE_FOR_AGENTS.md` | Bootstrap für Agenten |

---

## 6. Was JETZT passiert (Phase 0 — heute)

- [x] Projekt-Ordner `/Users/yannik/Sonivo/` angelegt
- [x] `AGENTS.md` + `CLAUDE.md` + `docs/` initialisiert
- [ ] Naming-Entscheidung dokumentieren → [docs/01-NAMING.md](01-NAMING.md)
- [ ] Content-Mapping peira → Sonivo → [docs/02-CONTENT_PLAN.md](02-CONTENT_PLAN.md)
- [ ] Stack-Setup-Anleitung → [docs/03-STACK_SETUP.md](03-STACK_SETUP.md)
- [ ] Phase-Plan mit Estimates → [docs/04-PHASE_PLAN.md](04-PHASE_PLAN.md)

## 7. Phase 1 (Setup, ~1-2 Tage)

1. Naming finalisieren (User-Entscheidung, siehe NAMING.md)
2. peira-landing-v2 Code in `website/` kopieren (ohne node_modules/.next/HANDOVER.md)
3. Branding ausstrippen: alle "peira" → Placeholder
4. GitHub-Repo unter `yannikgaletto-art/sonivo` (oder finalen Namen) erstellen
5. Vercel-Deploy auf Preview-Branch
6. Supabase-Projekt anlegen (für Lead-Formular)

## 8. Phase 2 (Content + Brand, ~3-5 Tage)

1. Hero-Copy schreiben (basierend auf Knowledge Base "Kernthese")
2. Szenario-Section: SHK-Notfall + 2 weitere Branchen (Elektrik, Dachdecker)
3. "Was wir liefern"-Section: Inbound / Outbound / Integration / Reporting
4. Pricing-Section: 3 Stufen (Basis / Business / Premium) — Preise aus KB übernehmen oder neu festlegen
5. Prozess-Section: Erstgespräch → Discovery → Aufbau → Live-Betrieb
6. Wettbewerber-Vergleich-Section

## 9. Phase 3 (Pilot-Akquise, ~14 Tage)

- 10 Lead-Gespräche mit SHK-Betrieben aus ICP-Liste
- Ziel: 1 zahlender Pilot in 14 Tagen
- Compliance-Paket schnüren (DSGVO-konforme Einrichtung, AVV, Löschkonzept)

---

## 10. Offene Entscheidungen (User-Input nötig)

1. **Name:** Sonivo (Folder-Name) vs. YInnovation (Wettbewerb.md) vs. anderer Name?
2. **Domain:** sonivo.de / sonivo.ai / yinnovation.de / yinnovation.com?
3. **Pricing:** Übernehme peira's 199/499/899€ oder eigenes Modell?
4. **Co-Founder-Frame:** Wie wird Yannik nach außen positioniert?
5. **Pilot-Beta-Programm:** Mit "Beta"-Tag oder direkt voll vermarkten?

---

## 11. Politische Sensibilität

- Sonivo ist NICHT peira. Keine Cross-Referenz zwischen den Brands nach außen.
- peira-landing-v2 Code ist Inspiration, nicht Quelle für direkten Reuse.
- Wenn Vishal/Jan im Slack zu peira-Themen schreibt: Yannik prüft, ob es Sonivo-relevant ist. Antwort niemals mit "Sonivo statt peira".
