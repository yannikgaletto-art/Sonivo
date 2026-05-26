# 04 — Phasen-Plan & Estimates

**Stand:** 2026-05-26 · Ziel: Pilot-Vertrag in 14-21 Tagen

---

## Phase 0: Setup (~2-4h, heute fertig)

| Task | Owner | Status | Aufwand |
|---|---|---|---|
| Projekt-Ordner `/Users/yannik/Sonivo/` | Claude | ✅ | 5min |
| AGENTS.md + CLAUDE.md | Claude | ✅ | 30min |
| docs/00-PROJECT_BRIEF.md | Claude | ✅ | 30min |
| docs/01-NAMING.md | Claude | ✅ | 15min |
| docs/02-CONTENT_PLAN.md | Claude | ✅ | 30min |
| docs/03-STACK_SETUP.md | Claude | ✅ | 30min |
| docs/04-PHASE_PLAN.md | Claude | ✅ | 15min |

**Phase 0 abgeschlossen sobald:** Yannik hat alle 5 docs/ Files gelesen + Entscheidung zum Namen getroffen.

---

## Phase 1: Code-Migration + Stack-Setup (~1 Tag)

| Task | Owner | Status | Aufwand | Blocker |
|---|---|---|---|---|
| peira-landing-v2 nach Sonivo/website/ kopieren | Claude | ⏳ | 10min | Naming-Entscheidung |
| `peira` → Brand-Name ersetzen | Claude | ⏳ | 30min | Naming-Entscheidung |
| `git init` + initial commit | Claude | ⏳ | 5min | – |
| GitHub-Repo erstellen | Yannik (Klick) | ⏳ | 5min | – |
| Lokales Push zu GitHub | Claude | ⏳ | 5min | Repo-URL |
| Vercel-Projekt anlegen | Yannik (Klick) | ⏳ | 10min | GitHub-Repo |
| Vercel-Preview-Deploy verifizieren | Beide | ⏳ | 5min | Vercel-Project |
| Supabase-Projekt anlegen | Yannik (Klick) | ⏳ | 15min | – |
| Supabase `leads`-Tabelle anlegen | Claude (SQL) | ⏳ | 10min | Supabase-Projekt |
| ENV-Vars in Vercel + `.env.local` | Beide | ⏳ | 15min | Supabase-Keys |

**Verifikations-Gate:** Vercel-Preview rendert die Site (noch mit peira-Texten), Supabase ist erreichbar.

---

## Phase 2: Content + Branding (~2-3 Tage)

| Task | Owner | Status | Aufwand |
|---|---|---|---|
| Hero-Copy (Headline + Subline + Trust-Pills) | Yannik + Claude | ⏳ | 1h |
| Szenario-Card (SHK-Notfall Hauptbeispiel) | Yannik + Claude | ⏳ | 1h |
| 4-Karten-Grid "Was wir liefern" | Claude | ⏳ | 1h |
| Pricing-Section (3 Tiers) | Yannik | ⏳ | 30min |
| Prozess-Steps "In 30 Min wissen ob es passt" | Claude | ⏳ | 30min |
| Wettbewerber-Vergleich (6 Steps) | Claude | ⏳ | 1h |
| Compliance-Belt (DSGVO, AVV, AI Act) | Yannik + Claude | ⏳ | 1h |
| Footer + Impressum | Yannik | ⏳ | 30min |
| Logo + Favicon | Yannik (externer Designer?) | ⏳ | TBD |
| Audio-Demo (0:22) aufnehmen | Yannik | ⏳ | 1h |

**Verifikations-Gate:** `grep -ri "peira" website/src/` ist leer. Site rendert in Sonivo-Branding.

---

## Phase 3: Lead-Formular + Domain (~1 Tag)

| Task | Owner | Status | Aufwand |
|---|---|---|---|
| Lead-Formular-Komponente (Next.js Server Action) | Claude | ⏳ | 2h |
| Insert in Supabase `leads`-Tabelle | Claude | ⏳ | 30min |
| E-Mail-Benachrichtigung an Yannik (via Resend/Supabase Auth) | Claude | ⏳ | 1h |
| DSGVO-Datenschutz-Hinweis + Einwilligung | Yannik (Rechts-Check) | ⏳ | 1h |
| Domain kaufen + DNS | Yannik (Klick) | ⏳ | 30min |
| Domain mit Vercel verbinden | Yannik (Klick) | ⏳ | 15min |
| HTTPS-Cert verifizieren | – | – | auto |

**Verifikations-Gate:** Test-Lead landet in Supabase + E-Mail kommt an. Site ist unter finaler Domain erreichbar.

---

## Phase 4: Pilot-Akquise-Vorbereitung (~3-5 Tage)

| Task | Owner | Status |
|---|---|---|
| ICP-Liste: 50 SHK-Betriebe (5-30 MA) im DACH-Raum recherchieren | Yannik | ⏳ |
| Kalt-E-Mail-Template (3 Varianten) | Claude | ⏳ |
| Discovery-Call-Skript (15 Fragen, 30 Min) | Claude | ⏳ |
| Pricing-Cheatsheet für Calls | Claude | ⏳ |
| Compliance-One-Pager (DSGVO + AVV + AI Act in 1 Seite) | Claude (kein Rechtsrat!) | ⏳ |
| Demo-Audio-Datei verbessern | Yannik | ⏳ |

**Verifikations-Gate:** Yannik kann 10 Outreach-Mails pro Tag versenden + 3 Discovery-Calls pro Woche führen.

---

## Phase 5: Pilot live (~2 Wochen)

| Task | Owner | Status |
|---|---|---|
| 10-50 Outreach-Mails versenden | Yannik | ⏳ |
| 3-5 Discovery-Calls führen | Yannik | ⏳ |
| 1 Pilot-Kunde unterschreiben | Yannik | ⏳ |
| Pilot-Onboarding (Company Brain, Tool-Anbindung) | Beide | ⏳ |
| Pilot-Go-Live | Beide | ⏳ |

**Erfolgs-Metrik:** 1 zahlender Pilot in 14 Tagen ab Phase-3-Ende.

---

## Risiken & Gegenmaßnahmen

| Risiko | Wahrscheinlichkeit | Impact | Gegenmaßnahme |
|---|---|---|---|
| Naming-Konflikt (Marke schon vergeben) | Mittel | Hoch | DPMA-Recherche vor finaler Entscheidung in Phase 0 |
| peira-Brand-Reste im Code nach Phase 2 | Mittel | Mittel | `grep -ri "peira"` vor jedem Push |
| Supabase-Free-Tier-Limit (500MB DB, 1GB Bandwidth) | Niedrig | Niedrig | Beim ersten Pilot evaluieren, ggf. Pro-Plan |
| DSGVO/AI-Act-Falschauslegung | Mittel | Hoch | Vor Pilot-Vertrag: Anwalt konsultieren (keine Eigenrechtsberatung) |
| Vishal/Jan haben Einwand gegen Brand-Verwechslung mit peira | Niedrig | Mittel | Andere Tonalität (Off-Black + Warm-Beige ist OK, aber kein direkter peira-Logo-Klon) |
| Audio-Demo wirkt "fake" | Mittel | Mittel | Echte Demo-Anrufe aufnehmen, nicht Studio-Sprecher |

---

## Out-of-Scope (NICHT in Phase 0-5)

- Voll funktionsfähiger AI-Operator (nur Landing + Lead-Capture)
- Twilio/SIP-Integration
- Custom CRM-Integrationen (HERO, pds etc.) — erst bei zahlendem Pilot
- Mobile App
- WhatsApp-Bot

Diese Punkte landen in Phase 6+ nach erstem Pilot.
