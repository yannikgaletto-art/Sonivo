# 06 — Implementation Plan: Sonivo Landing-Site

**Stand:** 2026-05-26 · **Owner:** Yannik (User) + Claude (Eng) · **Ziel-Deploy:** Vercel via GitHub `yannikgaletto-art/sonivo-landing`

> Konkreter Bauplan in 8 Phasen, jede Phase besteht aus 2-4 Batches.
> Nach jeder Phase: Vercel-Preview-Deploy als Gate. Erst nach grünem Build geht es zur nächsten Phase.

---

## 0. Grundannahmen (vor Phase 1 verifiziert)

| # | Annahme | Folge bei "Nein" |
|---|---|---|
| A1 | Wir bauen **from scratch** (kein Import aus `peira-landing-v2/`, das ist Forbidden Path) | Falls Yannik den Read-Only-Zugriff freigeben will → Plan erweitern um "rsync"-Batch |
| A2 | Brand-Name = **Sonivo** (Folder-Name) bis Naming-Entscheidung final ist | Falls anderer Name → Suchen/Ersetzen in einem späten Batch (~10min) |
| A3 | Domain wird **erst in Phase 8** angebunden — Phase 1-7 laufen auf `*.vercel.app` | – |
| A4 | Tech: Next.js 16 (App Router) + Tailwind v4 + Vercel + Supabase | Falls peira-landing-v2 doch geforked werden soll → Versions-Lock anpassen |
| A5 | Sprache primär Deutsch (Sie-Form), Englisch-Toggle ist Phase 7 | – |

**Change Impact Rating für den Plan selbst:** Komplexität 4/5 · Kaskadenrisiko 2/5 (jede Phase hat Vercel-Gate, Rückrollen pro Phase möglich) · Simpler-Path: gibt es nicht, wenn finaler Stand "Vercel-Live-Site mit Lead-Capture" sein soll.

---

## Phase 1 — Project Bootstrap (~3-4h)

**Ziel:** Leeres aber lauffähiges Next.js 16-Repo, das auf Vercel deployt. Sichtbar ist nur eine Platzhalter-Seite.

| Batch | Tasks | Aufwand |
|---|---|---|
| **1A · Next.js Init** | `npx create-next-app@latest website` (TypeScript, App Router, Tailwind, ESLint) · `.gitignore` checken · `package.json` cleanup (Beschreibung, License) | 30min |
| **1B · Design-Tokens** | `app/globals.css`: CSS-Variablen für Cream-BG, Off-Black, Forest-Green, Mint-Accent · Tailwind-Config: Custom Color-Palette + Font-Family (Inter + Caveat für cursive Akzente) · `next/font` für beide Fonts | 1h |
| **1C · Layout Shell** | `app/layout.tsx`: Header (Logo-Platzhalter, Nav: Leistungen, Use Cases, Pakete, Vorgehen, Testing, FAQ, Sprache-Switcher, Tel., CTA) · Footer-Stub · `app/page.tsx`: "Coming Soon"-Marker | 1h |
| **1D · GitHub + Vercel** | Git-Init im `website/`-Subfolder OR im Root (Entscheidung: Root, damit `KnowledgeHub/` & `docs/` mit-gepusht werden — siehe Risiko unten) · Repo auf GitHub anlegen (User-Klick) · `git push -u origin main` · Vercel-Projekt anlegen mit `website/` als Root Directory (User-Klick) | 1h |

**Vercel-Gate:** `*.vercel.app` lädt eine leere Seite mit Header+Footer in Cream/Off-Black/Green-Tonalität. Build-Time < 60s.

**Risiken:**
- **Repo-Topologie** ist eine Einbahnstraße. Wenn wir `KnowledgeHub/` ins selbe Repo committen, ist das public visible (Repo-Visibility = ?). Empfehlung: GitHub-Repo **Private** bis Launch, oder zweites Repo nur für `website/`. → **Entscheidungs-Frage an Yannik** (siehe §"Offene Entscheidungen" unten).
- Next.js 16 Breaking Changes vs. Training-Data — vor Implementation `node_modules/next/dist/docs/` oder Context7 checken (AGENTS.md §6).

---

## Phase 2 — Hero + Trust Strip (~3-4h)

**Ziel:** Sektion 1 aus Content-Plan live. Above-the-fold sieht aus wie der peira-Hero, aber mit Sonivo-Copy.

| Batch | Tasks | Aufwand |
|---|---|---|
| **2A · Hero-Layout** | `components/sections/Hero.tsx`: 2-Spalten (Text links, Visual rechts), Mobile = Stacked · Eyebrow-Pill "AI-OPERATOR FÜR HANDWERK · MADE IN GERMANY" · Headline H1 + Cursive-Akzent ("durch verpasste Anrufe") · CTA-Button "Erstgespräch buchen →" | 1h |
| **2B · Visual** | Entscheidungs-Frage Yannik (siehe Offene Entscheidungen): Spline-3D-Bot? Statischer SVG-Bot? Echtes Handwerker-Foto? · Erstmal **Platzhalter-Illustration** (geometric shape) — Visual final in Phase 7 | 30min |
| **2C · Trust Strip** | Drei Pills "Hosting in Deutschland · DSGVO-konform · EU AI Act ready" · Mit Bullet-Dot-Trennung wie im Screenshot | 30min |
| **2D · Responsive + a11y** | Mobile-Breakpoint (<768px) testen · Lighthouse a11y > 95 · Heading-Hierarchie · Kontrast-Check | 1h |

**Vercel-Gate:** Hero ist auf Vercel-Preview pixel-nah am peira-Screenshot, aber mit Sonivo-Texten. Lighthouse-Performance > 90, a11y > 95.

---

## Phase 3 — Content-Sektionen Batch A (~4-5h)

**Ziel:** Sektion 2 (Szenario) + Sektion 3 (Was wir liefern) live.

| Batch | Tasks | Aufwand |
|---|---|---|
| **3A · Szenario-Card** | `components/sections/Scenario.tsx`: Headline mit Cursive "Szenario" · Large-Card mit Foto-Hintergrund (Heizung-E03-Bild als Platzhalter aus `public/`) · Text-Overlay links · Floating Cards rechts (Heizungsnotfall / Terminbuchung / Angebot) · Audio-Snippet-Pill (HTML5 `<audio>` mit echtem oder Placeholder-MP3) | 2h |
| **3B · Was wir liefern** | `components/sections/WhatWeDeliver.tsx`: 4-Card-Grid auf Diagonal-Linie (CSS-Pseudo-Element) · Stage-Numbers 01-04 · Pill-Tags (INBOUND/OUTBOUND/INTEGRATION/REPORTING) · Card #3 (INTEGRATION) dark-themed · Bullet-Listen pro Card | 2h |
| **3C · Section-Spacing + Anker-Links** | Vertikale Rhythmus-Spacings standardisieren (z.B. `py-24` Standard) · Nav-Anchors (`#use-cases`, `#leistungen`) verdrahten · Smooth-Scroll-Behavior | 1h |

**Vercel-Gate:** Beide Sektionen auf Mobile + Desktop sauber. Klick auf Nav-Link springt zur Sektion. CLS < 0.05.

---

## Phase 4 — Content-Sektionen Batch B (~3-4h)

**Ziel:** Sektion 4 (Pricing) + Sektion 5 (Prozess) live.

| Batch | Tasks | Aufwand |
|---|---|---|
| **4A · Pricing 3-Tier** | `components/sections/Pricing.tsx`: 3-Karten-Grid · Middle-Card hervorgehoben (Cream-BG + Green-Border) · Side-Cards desaturiert (visueller Anker auf Business 499€) · "Einmalige Einrichtung 1.500-5.000€" Footer-Pill · Hover-States | 2h |
| **4B · Prozess-Timeline** | `components/sections/Process.tsx`: Step 01 (Erstgespräch, große Card mit CTA) · Sub-Grid 02-04 (Discovery/Aufbau/Live) · Step 04 dark-themed · Dauer-Tag-Pills pro Step | 1.5h |
| **4C · Cross-Linking** | "Paket wählen" → scrollt zu Lead-Formular (kommt in Phase 6) · Fallback bis Phase 6: scroll zu Footer | 30min |

**Vercel-Gate:** Pricing-Section ist scan-bar in <3 Sekunden (Y. liest die Cards). Process-Timeline-Linie ist auch auf Mobile sauber.

---

## Phase 5 — Content-Sektionen Batch C (~4-5h)

**Ziel:** Sektion 6 (Wettbewerber-Vergleich) + Compliance-Belt + FAQ-Stub.

| Batch | Tasks | Aufwand |
|---|---|---|
| **5A · Wettbewerber-Vergleich** | `components/sections/Comparison.tsx`: Toggle-Switch "Sonivo + Wettbewerber / Nur Sonivo" · Container "IM ANRUF" (links, 6 Steps) · Container "IM TESTING" (rechts, 6 Steps) · State-Management mit `useState` · Animated Toggle | 2h |
| **5B · Compliance-Belt** | 3 Trust-Pills am Ende der Comparison: "DSGVO & Hosting Deutschland · Frankfurt EU" · "Operator-DNA · Wir verstehen Mittelstand" · "Kein Vendor-Lock-in · Tele, CRM, Kalender bleiben" | 1h |
| **5C · FAQ-Section (Stub)** | `components/sections/FAQ.tsx`: Accordion mit 5 Platzhalter-Fragen aus Content-Plan ("Was passiert wenn das System einen Fehler macht?" etc.) · Echte Antworten kommen in Phase 7 oder werden direkt von Yannik gefüllt | 1h |
| **5D · Footer** | Logo · Nav-Spalten (Produkt, Unternehmen, Recht) · Impressum-Link (Stub) · Datenschutz-Link (Stub) · Copyright-Zeile | 1h |

**Vercel-Gate:** Site ist End-to-End scrollbar, alle 6 Sektionen + Compliance + FAQ + Footer. Sieht "fertig" aus (auch wenn Texte noch nicht final sind).

---

## Phase 6 — Lead-Capture + Supabase (~4-5h)

**Ziel:** "Erstgespräch buchen"-Button öffnet Modal/Section mit Formular, Lead landet in Supabase, Yannik bekommt E-Mail.

| Batch | Tasks | Aufwand |
|---|---|---|
| **6A · Supabase-Setup** | Supabase-Projekt anlegen (User-Klick, EU-Region Frankfurt) · `leads`-Tabelle anlegen (SQL aus docs/03) · RLS-Policy · Keys notieren | 30min |
| **6B · Env-Vars** | `.env.local` lokal · Vercel Env-Vars (Production/Preview/Development) · Verifikation: `.env.local` ist in `.gitignore` | 15min |
| **6C · Lead-Form-Component** | `components/forms/LeadForm.tsx`: Name, E-Mail, Firma, Branche (Dropdown SHK/Rohr/Elektrik/Dach/Kälte), Mitarbeiter-Range, Nachricht · DSGVO-Checkbox · Submit-State (loading/success/error) | 2h |
| **6D · Server Action** | `app/actions/submit-lead.ts`: Validierung (Zod) · Supabase-Insert (Service-Role-Key, Server-Side) · Honeypot-Field gegen Spam · Rate-Limit per IP (in-memory oder Upstash) | 1.5h |
| **6E · E-Mail-Notification** | Resend.com Account (kostenlos bis 100/Tag) · API-Key in Env · `lib/email.ts` sendet Mail an Yannik mit Lead-Daten · Confirmation-Mail an Submitter | 1h |

**Vercel-Gate:** Test-Lead von Preview-URL landet in Supabase + E-Mail kommt an. Spam-Submit (>5/Min von gleicher IP) wird blockiert.

**Risiken:**
- **DSGVO:** Checkbox-Text und Datenschutz-Hinweis sind Rechtsthema. Phase 6 setzt nur die Mechanik auf. Final-Text kommt von Yannik bzw. via `/legal-privacy`-Skill.

---

## Phase 7 — Polish + i18n + SEO (~4-6h)

**Ziel:** Site ist Launch-Ready: Deutsch + Englisch, Meta-Tags, OG-Image, Sitemap, Performance.

| Batch | Tasks | Aufwand |
|---|---|---|
| **7A · i18n-Setup** | `next-intl` oder `next-i18next` · Locale-Routes `/` (DE) + `/en` · Übersetzungs-Files `messages/de.json` + `messages/en.json` · Sprache-Switcher im Header verdrahten | 2h |
| **7B · EN-Content** | Englische Übersetzung aller 6 Sektionen + FAQ + Footer · Tonality: gleicher Sie-/You-Stil wie DE | 1.5h |
| **7C · SEO-Meta** | `app/layout.tsx`: Default Meta-Title/Description · `app/page.tsx`: page-specific Overrides · OG-Image (1200×630) generieren · Twitter-Card · Favicon-Set (16/32/180/512) · `app/robots.ts` · `app/sitemap.ts` | 1h |
| **7D · Performance** | Lighthouse-Audit · LCP < 2.5s · Bilder als `next/image` mit AVIF · Fonts mit `font-display: swap` · Unused-CSS-Purge (Tailwind sollte das automatisch tun) | 1h |
| **7E · Echte Visuals** | Hero-Bot oder Hero-Bild final · Audio-Snippet aufnehmen (Yannik) · Logo-Datei (Yannik liefert) | TBD |

**Vercel-Gate:** Lighthouse alle 4 Scores > 90. Sprache-Toggle funktioniert. Test mit `view-source:` zeigt korrekte Meta-Tags.

---

## Phase 8 — Domain + Go-Live (~1-2h, gestreckt über 1 Tag wegen DNS-TTL)

**Ziel:** Site ist unter finaler Domain erreichbar mit HTTPS-Zertifikat.

| Batch | Tasks | Aufwand |
|---|---|---|
| **8A · Domain-Kauf** | User entscheidet Domain (sonivo.de? sonivo.ai?) · Kauf via Hetzner/Strato/Namecheap | 30min |
| **8B · Vercel-Domain-Connect** | Vercel Settings → Domains → Add · DNS-Records (A + CNAME) bei Provider eintragen · Warten auf Propagation (5min - 24h) | 15min + Wartezeit |
| **8C · Production-Branch-Switch** | Vercel: Production-Branch = `main` (default) · Letzten Build als Production deployen | 5min |
| **8D · Smoke-Test PROD** | Cross-Browser (Chrome, Safari, Firefox) · Mobile (iOS, Android) · Lead-Form von echter Domain · E-Mail-Empfang verifizieren | 30min |

**Vercel-Gate (= Launch-Gate):** Domain auflösbar, HTTPS-grün, alle 6 Sektionen rendern, Lead-Form funktioniert end-to-end.

---

## Phase 9 — Optional Stretch (Post-Launch)

Sobald Phase 8 live ist, optional:

| # | Stretch | Wann ziehen? |
|---|---|---|
| 9A | Branchen-Section (5-Tiles SHK/Rohr/Elektrik/Dach/Kälte) | Nach erstem Discovery-Call wenn Branche unklar war |
| 9B | Case-Strip mit 3 Mini-Cases | Sobald 1. Pilot-Kunde unterschrieben hat |
| 9C | Blog/Insights für SEO | Wenn organic Traffic Hebel wird |
| 9D | Live-Chat-Widget oder Cal.com-Embed | Wenn Lead-Form-Conversion < 5% |
| 9E | Status-Page (status.sonivo.de) | Nach 3+ aktiven Kunden |

---

## Forbidden-Files-Reminder (für jeden Batch)

| Pfad | Regel |
|---|---|
| `/Users/yannik/peira.ai-monorepo/` | Niemals anfassen |
| `/Users/yannik/peira-landing-v2/` | Niemals anfassen, auch nicht für rsync. Reference nur via Screenshots + Live-URL |
| `KnowledgeHub/4) Old Peira/` | Read-Only |
| `.env.local` / `.env*` | Niemals committen, Pre-Push-Grep verifiziert |

---

## Pre-Push-Pentest (Pflicht vor JEDEM `git push`)

| Perspektive | Check | Pass-Kriterium |
|---|---|---|
| **CTO** | `grep -rE "(SUPABASE\|RESEND\|SECRET\|TOKEN).*=.*[A-Za-z0-9]{20,}" website/` | leer |
| **QA** | `npm run build` lokal | Exit 0 |
| **Senior Software Tester** | `npm start` Production-Mode + klick durch alle Sektionen | Keine Console-Errors, keine 404 |

Bei ❌ in einer Zeile: Push verweigern, Root-Cause fixen, neu testen.

---

## Offene Entscheidungen (Yannik, vor Phase 1)

| # | Frage | Default falls keine Antwort |
|---|---|---|
| **E1** | **Repo-Topologie:** Sonivo-Root (incl. `KnowledgeHub/` + `docs/` als private Repo) oder separates Repo nur für `website/`? | Default: aktueller Sonivo-Stand bleibt im bestehenden Repo (https://github.com/yannikgaletto-art/Sonivo, private), `website/` ist Subfolder. Vercel Root Directory = `website/`. |
| **E2** | **Hero-Visual:** Spline-3D-Bot (wie peira) / Statischer SVG / Echtes Handwerker-Foto / Platzhalter erstmal? | Default: Platzhalter (geometric shape) in Phase 2, finale Entscheidung in Phase 7. |
| **E3** | **Brand-Name jetzt fixieren oder später ersetzen?** | Default: Bauen mit "Sonivo" hardcoded, später (vor Phase 8) Suchen/Ersetzen falls anderer Name. |
| **E4** | **E-Mail-Provider** für Lead-Notification: Resend (modern, 100/Tag free) / Supabase Auth (Magic-Link) / SMTP via Strato? | Default: Resend (einfachste API, EU-Region verfügbar). |
| **E5** | **Audio-Snippet im Hero:** echte Aufnahme jetzt oder Placeholder-MP3 bis Phase 7? | Default: Placeholder, echte Aufnahme in Phase 7. |

Wenn du nichts sagst, gehe ich mit den Defaults rein.

---

## Gesamtaufwand-Schätzung

| Phase | Aufwand | Kumulativ |
|---|---:|---:|
| 1 Bootstrap | 3-4h | 4h |
| 2 Hero | 3-4h | 8h |
| 3 Sektionen A | 4-5h | 13h |
| 4 Sektionen B | 3-4h | 17h |
| 5 Sektionen C | 4-5h | 22h |
| 6 Lead-Capture | 4-5h | 27h |
| 7 Polish + i18n | 4-6h | 33h |
| 8 Domain | 1-2h + DNS-Wartezeit | 35h |

**Realistisch:** 4-5 Arbeitstage (à 7h), wenn keine Blocker. Mit Yannik-Reviews zwischen jeder Phase: 1 Woche bis Launch.

---

## Nächster Schritt

1. Yannik beantwortet E1-E5 (oder lässt Defaults stehen).
2. Yannik gibt grünes Licht für Phase 1.
3. Claude führt Phase 1 als Batches 1A → 1D aus.
4. Nach Vercel-Gate: Yannik prüft Preview, gibt Phase-2-Freigabe.
5. Iteration bis Phase 8.
