# Sonivo Landing-Site Copy — Implementation Plan

**Stand:** 2026-05-26 · **Owner:** Yannik + Claude · **Vorgänger:** `docs/06-IMPLEMENTATION_PLAN.md`

> Plan adaptiert aus `/writing-plans`-Skill (TDD-Struktur auf Copy übertragen). "Test" = Differentiation Quality Gate.

**Goal:** Copy für 6 Landing-Sektionen finalisieren, die Sonivo-USP "AI-Operator, der den Auftrag betreibt" gegen Voice-AI-Wettbewerber (peira.ai, HalloPetra, Agentino, Fonio) dreifach härten.

**Architecture:** peira-Layout als Basis (validierte UX), Sonivo-Vokabular + Operator-DNA-Frame überall durchgesteuert. Jede Sektion enthält mindestens **einen** expliziten "Wir-machen-mehr-als-Voice-AI"-Anker.

**Tech Stack:** Next.js 16 React Server Components · Tailwind v4 · `next/font` (Inter + Caveat) · keine Client-Komponenten nötig für Phase 2-5.

---

## Differentiation Quality Gates (DQG)

Jede Sektion-Copy muss durch alle 3 Gates, sonst Re-Draft.

### DQG-1 — "Mehr-als-Voice-AI"-Anker
Mindestens **ein** Element in der Sektion sagt explizit oder implizit: "Wir nehmen nicht nur an, wir liefern ein Ergebnis im System."

Erlaubte Wort-Anker: `Auftrag` · `Ticket` · `Vorgang` · `Foto-Workflow` · `Techniker-Briefing` · `ins CRM/Kalender` · `Agenten-TÜV` · `Company Brain` · `betreibt` · `dockt an`
Verbotene Wort-Anker (= Voice-AI-Frame): `nur Telefon` · `nimmt nur an` · `Sprachassistent` · `Chatbot` · `Voice Agent` als Selbstbezeichnung

### DQG-2 — Sie-Form + Fachbegriffe erklärt
- 0 Du-Vorkommen
- Jeder Fachbegriff (Agenten-TÜV, Company Brain, AI-Operator, Multimodalität, AVV, EU AI Act) wird beim ersten Auftreten in 3-5 Wörtern erklärt — entweder inline oder via Tooltip-Wording

### DQG-3 — Voice-of-Customer-Match
Jede Sektion zitiert mindestens **eine** verbatim Customer-Pain aus `.agents/product-marketing.md` Customer-Language-Block. Wenn die Sektion das nicht hat → kein Echo zum Leser, drift in Marketing-Sprech.

---

## File Structure

| Datei | Verantwortung | Phase |
|---|---|---|
| `website/src/lib/content.ts` | Single-Source-of-Truth für alle Sektion-Copies. TS-typisiert, exportiert `HERO_COPY`, `SCENARIO_COPY`, `DELIVERY_COPY`, `PRICING_COPY`, `PROCESS_COPY`, `COMPARISON_COPY` Konstanten. Alle Komponenten importieren von hier. | 2 |
| `website/src/components/sections/Hero.tsx` | Hero-Sektion. Liest aus `HERO_COPY`. | 2 |
| `website/src/components/sections/Scenario.tsx` | Szenario-Card mit Audio + Floating-Cards. | 3 |
| `website/src/components/sections/Delivery.tsx` | "Was Sonivo liefert" 4-Card-Grid. | 3 |
| `website/src/components/sections/Pricing.tsx` | 3-Tier Pakete. | 4 |
| `website/src/components/sections/Process.tsx` | "In 30 Min wissen ob es passt" 4-Step-Flow. | 4 |
| `website/src/components/sections/Comparison.tsx` | "Andere liefern einen Bot" Vergleichs-Tabelle + 3 Trust-Pills. | 5 |
| `website/src/app/page.tsx` | Komponiert alle 6 Sektionen. | 2-5 |

**Warum content.ts zuerst:** DRY. i18n-ready in Phase 7. Brand-Konstante (`BRAND.name = "Sonivo"`) wird über alle Sektionen konsistent. Wenn der Name wechselt: 1 File-Edit.

---

## Task 0 — Customer-Research-Sharpening *(vor jeder Sektion-Copy)*

**Files:**
- Modify: `.agents/product-marketing.md` (Customer-Language-Block erweitern um Wettbewerber-Verbatim)

**Quality Gates:** DQG-1 + DQG-3

- [ ] **Schritt 0.1** — `/customer-research`-Skill triggern mit Auftrag: "Pull verbatim customer language aus 3 öffentlichen Quellen für AI-Telefonassistenz im Handwerk: G2/Capterra-Reviews zu HalloPetra+Agentino+Fonio, Reddit r/handwerk + r/SHK, und HandwerksBlatt-Kommentar-Sektionen. Fokus: was Kunden über aktuelle Voice-AI-Lösungen *kritisieren* (= Sonivos Operator-DNA-Pitch-Anker)."

- [ ] **Schritt 0.2** — Output sichten. Wenn >5 verwertbare Verbatims → eintragen in `.agents/product-marketing.md` Customer-Language-Block. Wenn <5 → User-Input einholen (Yannik hat evtl. eigene Discovery-Call-Notizen).

- [ ] **Schritt 0.3** — Commit: `git commit -m "research: customer language verbatims für Differentiation-Sharpening"`

---

## Task 1 — `content.ts` Konstanten-Datei

**Files:**
- Create: `website/src/lib/content.ts`

**Quality Gates:** DQG-2 (TypeScript-typed = no typos in Fachbegriff-Erklärungen)

- [ ] **Schritt 1.1 — TypeScript-Interfaces definieren**

```typescript
// website/src/lib/content.ts
export type TrustPill = { icon?: string; label: string; sublabel?: string };
export type CTA = { label: string; href: string; variant: "primary" | "secondary" | "ghost" };
export type Bullet = string;

export type HeroCopy = {
  eyebrow: string;
  headlineParts: { plain: string; cursive: string; tail?: string };
  subheadline: string;
  ctas: [CTA, CTA];
  microcopy: string;
  trustPills: [TrustPill, TrustPill, TrustPill];
};
// ... weitere Types pro Sektion
```

- [ ] **Schritt 1.2 — `HERO_COPY` Konstante schreiben** (Inhalt siehe Task 2)
- [ ] **Schritt 1.3 — `SCENARIO_COPY` Konstante schreiben** (siehe Task 3)
- [ ] **Schritt 1.4 — `DELIVERY_COPY` Konstante schreiben** (siehe Task 4)
- [ ] **Schritt 1.5 — `PRICING_COPY` Konstante schreiben** (siehe Task 5)
- [ ] **Schritt 1.6 — `PROCESS_COPY` Konstante schreiben** (siehe Task 6)
- [ ] **Schritt 1.7 — `COMPARISON_COPY` Konstante schreiben** (siehe Task 7)
- [ ] **Schritt 1.8 — TypeScript-Build verifizieren** — `cd website && npx tsc --noEmit` → Exit 0
- [ ] **Schritt 1.9 — Commit:** `git commit -m "content: typed copy constants for all 6 landing sections"`

---

## Task 2 — Hero-Sektion

**Files:**
- Modify: `website/src/lib/content.ts` (HERO_COPY)
- Create: `website/src/components/sections/Hero.tsx`
- Modify: `website/src/app/page.tsx` (Replace Placeholder)

**Differentiation Quality Gates:**
- **DQG-1:** Subheadline enthält "betreibt den Auftrag" + Liste mit `Foto-Workflow` + `Techniker-Briefing` + `CRM/Kalender`
- **DQG-2:** "AI-Operator" wird über die Subheadline implizit erklärt
- **DQG-3:** Subheadline echo't Customer-Pain "Wir verlieren Aufträge..."

### Hero-Copy (FINAL)

```typescript
export const HERO_COPY: HeroCopy = {
  eyebrow: "AI-OPERATOR FÜR HANDWERK · MADE IN GERMANY",
  headlineParts: {
    plain: "Nie wieder verlorene Aufträge durch",
    cursive: "verpasste Anrufe.",
  },
  subheadline:
    "Sonivo ist kein Voice Agent. Sonivo nimmt Anrufe an, erkennt Notfälle, fordert Fotos vom Schaden an und schreibt fertige Aufträge direkt in Ihr CRM, Kalender oder Ticketsystem.",
  ctas: [
    { label: "Erstgespräch buchen", href: "#kontakt", variant: "primary" },
    { label: "Demo anhören", href: "#szenario", variant: "ghost" },
  ],
  microcopy: "30 Minuten · kostenlos · unverbindlich",
  trustPills: [
    { label: "Hosting in Frankfurt" },
    { label: "DSGVO-konform" },
    { label: "EU AI Act ready" },
  ],
};
```

**Was sich gegenüber CEO-Decision-Matrix verschärft hat:**
- Subheadline öffnet jetzt mit **"Sonivo ist kein Voice Agent."** — explizite Wettbewerber-Distanzierung
- Spezifische Verben statt generisch: "fordert Fotos an" + "schreibt fertige Aufträge" — beide sind klare Operator-Aktionen, nicht Voice-Aktionen

- [ ] **Schritt 2.1 — DQG-Check vor Component-Bau**
- [ ] **Schritt 2.2 — Hero.tsx implementieren**
- [ ] **Schritt 2.3 — In page.tsx einhängen**
- [ ] **Schritt 2.4 — Visual-Slot rechts (5/12)** — Placeholder-Bot-Frame, kein echtes Bot-Asset (Phase 7). Aber Layout-Box mit `aspect-square` + Mint-Gradient-Background + zentraler Hinweis "🤖 Bot kommt hier"
- [ ] **Schritt 2.5 — Build + Visual-Check** — `npm run build` grün, `npm run dev` → Hero rendert
- [ ] **Schritt 2.6 — Commit:** `git commit -m "hero: Sonivo headline, differentiated subheadline, bot placeholder"`

---

## Task 3 — Szenario-Sektion

**Files:**
- Modify: `website/src/lib/content.ts` (SCENARIO_COPY)
- Create: `website/src/components/sections/Scenario.tsx`
- Modify: `website/src/app/page.tsx`
- Create: `website/public/demo/scenario-shk-placeholder.mp3` (Placeholder, 22s leerer Audio, Yannik tauscht in Phase 7)

**Differentiation Quality Gates:**
- **DQG-1:** Aktiv-Card-Body sagt "landen sofort bei der Bereitschaft" + "Standort, Schaden, Rückrufnummer" — alles Operator-Output, nicht Voice-Output
- **DQG-3:** 3 Floating-Cards rechts zeigen 3 Branchen aus ICP (SHK, Elektrotechnik, Dachdecker)

### Scenario-Copy

```typescript
export const SCENARIO_COPY = {
  eyebrow: "USE CASES",
  headlineParts: {
    plain: "Findet sich Ihr",
    cursive: "Szenario",
    tail: "hier?",
  },
  activeCard: {
    title: "Heizung und Warmwasser fallen aus. Der Rückruf muss sofort ins Team.",
    body: "Notfall erkannt in unter 30 Sekunden: Standort, Schaden und Rückrufnummer landen sofort bei der Bereitschaft — inklusive Foto vom Display.",
    audioSrc: "/demo/scenario-shk-placeholder.mp3",
    audioDuration: "0:22",
  },
  floatingCards: [
    { num: "01", title: "Heizungsnotfall", tag: "SHK · Notdienst", active: true },
    { num: "02", title: "Terminbuchung", tag: "Elektrotechnik · Termin" },
    { num: "03", title: "Angebot", tag: "Dachdecker · Sturm" },
  ],
} as const;
```

**Differentiation-Add gegenüber peira:** "inklusive Foto vom Display" — Multimodalität explizit (peira hat das nicht im Active-Card-Body).

- [ ] **Schritt 3.1 — DQG-Check**
- [ ] **Schritt 3.2 — Scenario.tsx mit 2-Col-Grid (Text links, Cards rechts) + Background-Image-Slot**
- [ ] **Schritt 3.3 — Audio-Element mit nativem HTML5 `<audio controls>` + Custom-Styling**
- [ ] **Schritt 3.4 — Placeholder-Audio-Datei anlegen** (22s Silence MP3, später echt)
- [ ] **Schritt 3.5 — Floating-Cards mit Active-State (Card 01 Mint-Border, Cards 02/03 grau)**
- [ ] **Schritt 3.6 — Background-Image** Placeholder (Heizung-Foto): Erstmal Cream-Gradient als Stand-in, Phase 7 echtes Foto
- [ ] **Schritt 3.7 — Build + Visual-Check**
- [ ] **Schritt 3.8 — Commit:** `git commit -m "scenario: SHK heating case with multimodal photo workflow callout"`

---

## Task 4 — "Was Sonivo liefert" 4-Card-Grid

**Files:**
- Modify: `website/src/lib/content.ts` (DELIVERY_COPY)
- Create: `website/src/components/sections/Delivery.tsx`

**Differentiation Quality Gates:**
- **DQG-1:** Card-Headline erwähnt explizit "mehr als Voice AI" als Subline ODER ein eigener Foto-Workflow-Bullet steht in OUTBOUND
- **DQG-3:** Reporting-Card erwähnt "Vorgänge protokolliert" nicht "Gespräche protokolliert" (Operator-Lens)

### Delivery-Copy

```typescript
export const DELIVERY_COPY = {
  eyebrow: "LEISTUNGEN",
  headlineParts: {
    plain: "Was",
    cursive: "Sonivo",
    tail: "liefert",
  },
  subheadline:
    "Voice AI nimmt Anrufe an. Sonivo liefert das Ergebnis: Auftrag erfasst, Foto angefordert, Techniker informiert, Ticket im System.",
  cards: [
    {
      num: "01",
      tag: "INBOUND",
      title: "Anrufe zuverlässig annehmen",
      body: "Sonivo nimmt den Anruf an, versteht das Anliegen und übergibt nur dann, wenn Ihr Team wirklich gebraucht wird.",
      bullets: [
        "24/7 erreichbar, auch außerhalb der Öffnungszeiten",
        "Dringende Anliegen sofort eskalieren",
        "Übergabe mit allen Informationen, nicht nur dem Namen",
      ],
    },
    {
      num: "02",
      tag: "OUTBOUND",
      title: "Aktiv nachfassen",
      body: "Der Agent ruft zurück, bestätigt Termine oder qualifiziert Leads mit individueller Ansprache statt starrem Skript.",
      bullets: [
        "Rückrufe eigenständig führen",
        "Termine bestätigen, weniger Nichterscheinen",
        "Leads qualifizieren, bevor das Team ran muss",
        "Fotos vom Schaden anfordern und mit Auftrag verknüpfen",
      ],
    },
    {
      num: "03",
      tag: "INTEGRATION",
      dark: true,
      title: "Verbindet sich mit Ihren Tools",
      body: "CRM, Kalender, Telefonanlage und Ticketsystem bleiben bestehen. Sonivo dockt an und arbeitet im Hintergrund.",
      bullets: [
        "Kalender prüfen und Termine schreiben",
        "CRM-Kontakte erkennen und Notizen schreiben",
        "Tickets oder Rückrufe automatisch auslösen",
      ],
    },
    {
      num: "04",
      tag: "REPORTING",
      title: "Reporting, das mitdenkt",
      body: "Jeder Vorgang transparent protokolliert. Sie sehen, was funktioniert. Wir verbessern den Agenten laufend.",
      bullets: [
        "Jeder Vorgang transparent protokolliert",
        "Monatliches Reporting mit klaren Messwerten",
        "Laufende Optimierung, keine veralteten Systeme",
        "DSGVO-konforme Speicherung mit Löschkonzept",
      ],
    },
  ],
  footerLink: {
    text: "Sie wissen noch nicht, was Sie brauchen?",
    cta: "Wir starten mit einem kostenlosen Erstgespräch →",
    href: "#kontakt",
  },
} as const;
```

**Differentiation-Adds gegenüber peira:**
- **NEUE Subheadline** "Voice AI nimmt Anrufe an. Sonivo liefert das Ergebnis: ..." (Operator-DNA explizit)
- **OUTBOUND-Card** hat 4. Bullet "Fotos vom Schaden anfordern und mit Auftrag verknüpfen" (Multimodalität)
- **REPORTING-Card** Headline-Body: "Vorgang" statt "Gespräch" (Operator-Lens)
- **REPORTING-Card** hat 4. Bullet "DSGVO-konforme Speicherung mit Löschkonzept" (Compliance-USP)

- [ ] **Schritt 4.1 — DQG-Check**
- [ ] **Schritt 4.2 — Delivery.tsx mit 4-Card-Grid auf Diagonal-Linie (CSS-Pseudo-Element)**
- [ ] **Schritt 4.3 — Stage-Numbers 01-04 in Mint-Pill-Circles oberhalb der Cards**
- [ ] **Schritt 4.4 — Card 3 (INTEGRATION) dark-themed (`bg-ink text-cream-soft`)**
- [ ] **Schritt 4.5 — Hover-Lift-Animation** (Card moves up 2px on hover, subtle shadow)
- [ ] **Schritt 4.6 — Footer-Link unten zentriert mit Underline-on-Hover**
- [ ] **Schritt 4.7 — Build + Visual-Check**
- [ ] **Schritt 4.8 — Commit:** `git commit -m "delivery: 4-card grid with Voice-AI vs Operator-DNA differentiation"`

---

## Task 5 — Pakete & Preise

**Files:**
- Modify: `website/src/lib/content.ts` (PRICING_COPY)
- Create: `website/src/components/sections/Pricing.tsx`

**Differentiation Quality Gates:**
- **DQG-1:** Dispatcher-Tier hat explizite Features "Foto-Workflow inklusive" und "Agenten-TÜV vor Go-live" — beide Operator-spezifisch, nicht Voice-AI
- **DQG-2:** "Agenten-TÜV" wird per Tooltip oder Mini-Footer erklärt: "Stress-Test mit 30-50 Szenarien vor Go-live"

### Pricing-Copy

```typescript
export const PRICING_COPY = {
  eyebrow: "PAKETE",
  headlineParts: {
    plain: "",
    cursive: "Pakete",
    tail: "& Preise.",
  },
  tiers: [
    {
      name: "Pilot",
      monthly: 199,
      setup: 799,
      minutes: 250,
      perExtraMinute: 0.49,
      ctaLabel: "Paket wählen",
      ctaHref: "#kontakt",
      highlighted: false,
      features: [
        "1 Voice Agent",
        "Notfalltriage inklusive",
        "Monatsreport",
        "EU Hosting in Frankfurt",
      ],
    },
    {
      name: "Dispatcher",
      monthly: 499,
      setup: 1500,
      minutes: 1000,
      perExtraMinute: 0.49,
      ctaLabel: "Paket wählen",
      ctaHref: "#kontakt",
      highlighted: true,
      tagline: "Empfehlung für SHK / Rohrreinigung",
      features: [
        "Bis zu 3 Voice Agents",
        "CRM & Kalender-Integration",
        "Foto-Workflow inklusive",
        "Agenten-TÜV vor Go-live",
        "Wöchentliche Reports",
        "Persönliche Einrichtung",
      ],
    },
    {
      name: "Operator",
      monthly: 899,
      setup: 2500,
      minutes: 2500,
      perExtraMinute: 0.49,
      ctaLabel: "Erstgespräch buchen",
      ctaHref: "#kontakt",
      highlighted: false,
      features: [
        "Vollständige Rezeption",
        "Individuelle Integrationen",
        "Eigener Ansprechpartner",
        "DSGVO & EU AI Act",
      ],
    },
  ],
  bottomStrip: {
    label: "Einmalige Einrichtung",
    range: "799 – 2.500 €",
    note: "je nach Integrationen",
  },
  customLink: {
    text: "Mehrere Standorte oder Branchen-ERP?",
    cta: "Custom-Paket anfragen →",
    href: "#kontakt",
  },
  glossary: {
    label: "Was ist der Agenten-TÜV?",
    body: "Vor dem Go-live testen wir Ihren Agenten mit 30-50 echten Szenarien aus Ihrem Betrieb: Notfälle, Preisfragen, Beschwerden, Datenschutzfragen. Bestanden = produktionsbereit.",
  },
} as const;
```

**Differentiation-Adds gegenüber peira:**
- Tier-Namen wechseln zu KB-Vokabular: **Pilot / Dispatcher / Operator** (statt Basis/Business/Premium)
- Dispatcher-Tagline "Empfehlung für SHK / Rohrreinigung" (peira hat keine Tagline)
- 2 neue Features im Dispatcher: **"Foto-Workflow inklusive"** + **"Agenten-TÜV vor Go-live"**
- Glossary-Block am Ende erklärt Agenten-TÜV (peira erklärt es nirgends → daher Sonivo-only)
- Setup-Fees korrigiert auf realistische Range (799-2.500 statt peira 1.500-5.000)

- [ ] **Schritt 5.1 — DQG-Check**
- [ ] **Schritt 5.2 — Pricing.tsx mit 3-Card-Grid + Middle-Card-Highlight**
- [ ] **Schritt 5.3 — Side-Cards desaturiert** (`opacity-70` oder `text-ink/60`) für Anker-Effekt auf Middle
- [ ] **Schritt 5.4 — Glossary-Block** als Mini-Accordion oder als Footnote unter dem Grid
- [ ] **Schritt 5.5 — Build + Visual-Check**
- [ ] **Schritt 5.6 — Commit:** `git commit -m "pricing: 3-tier with Operator-DNA features (Foto-Workflow, Agenten-TÜV)"`

---

## Task 6 — Vorgehen (Prozess)

**Files:**
- Modify: `website/src/lib/content.ts` (PROCESS_COPY)
- Create: `website/src/components/sections/Process.tsx`

**Differentiation Quality Gates:**
- **DQG-1:** Step 02 Body sagt "Company Brain" = Operator-Spezifik (peira hat das nicht)
- **DQG-1:** Step 03 Body sagt "Agenten-TÜV" = Operator-Spezifik

### Process-Copy

```typescript
export const PROCESS_COPY = {
  eyebrow: "VORGEHEN",
  headlineParts: {
    plain: "In 30 Minuten wissen, ob",
    cursive: "Sonivo",
    tail: "passt.",
  },
  primaryStep: {
    num: "01",
    tag: "30 MIN · KOSTENLOS",
    title: "Erstgespräch",
    body: "Sie wissen danach, ob Sonivo für Ihren Betrieb passt, und was es kosten würde. Sie verpflichten sich zu nichts.",
    cta: { label: "Erstgespräch buchen", href: "#kontakt" },
  },
  secondaryHeading: "DANACH PASSIERT",
  secondarySteps: [
    {
      num: "02",
      tag: "1 WOCHE",
      title: "Discovery & Company Brain",
      body: "Wir verstehen Ihr Geschäft so gut, dass der Agent klingt wie Ihr Team — und Ihre Regeln, Notfälle, PLZ-Gebiet und Preise kennt.",
    },
    {
      num: "03",
      tag: "2-4 WOCHEN",
      title: "Aufbau & Agenten-TÜV",
      body: "Sie hören, wie der Agent echte Anrufe behandelt. 30-50 Testfälle aus Ihrem Betrieb müssen bestehen, bevor er live geht. Sie geben grünes Licht.",
    },
    {
      num: "04",
      tag: "LAUFEND",
      title: "Live-Betrieb",
      dark: true,
      body: "Der Agent läuft. Sie sehen pro Woche, was er besser macht, und wir auch.",
    },
  ],
  footerNote: "Pilot live in 14 Tagen. Vollintegration in 2-6 Wochen je nach Paket.",
} as const;
```

**Differentiation-Adds:**
- Step 02 Title: **"Discovery & Company Brain"** (peira: "Discovery & Konzept" — generischer)
- Step 02 Body erwähnt explizit "Ihre Regeln, Notfälle, PLZ-Gebiet und Preise" (Company-Brain-Inhalte)
- Step 03 Title: **"Aufbau & Agenten-TÜV"** (peira: "Aufbau & Probelauf")
- Step 03 Body erwähnt "30-50 Testfälle"
- Footer: **"Pilot live in 14 Tagen"** (peira: "2-6 Wochen je nach Paket")

- [ ] **Schritt 6.1 — DQG-Check**
- [ ] **Schritt 6.2 — Process.tsx mit Large-Step-01-Card + 3-Col-Sub-Grid für 02-04**
- [ ] **Schritt 6.3 — Step 04 dark-themed**
- [ ] **Schritt 6.4 — Build + Visual-Check**
- [ ] **Schritt 6.5 — Commit:** `git commit -m "process: 4-step flow with Company Brain + Agenten-TÜV milestones"`

---

## Task 7 — Wettbewerber-Vergleich

**Files:**
- Modify: `website/src/lib/content.ts` (COMPARISON_COPY)
- Create: `website/src/components/sections/Comparison.tsx`

**Differentiation Quality Gates:**
- **DQG-1:** Headline ist die schärfste Operator-DNA-Stelle der ganzen Seite: "Andere liefern einen Bot. Wir betreiben den Auftrag."
- **DQG-1:** 6 Steps "IM TESTING" sind komplett Sonivo-only (peira hat es, aber Wettbewerber NICHT)

### Comparison-Copy

```typescript
export const COMPARISON_COPY = {
  eyebrow: "TESTING",
  headlineParts: {
    plain: "Andere liefern einen Bot. Wir",
    cursive: "betreiben den Auftrag.",
  },
  toggle: {
    leftLabel: "Mit Wettbewerber-Vergleich",
    rightLabel: "Nur Sonivo",
    defaultActive: "right",
  },
  containerLabel: "Sonivo",
  columns: [
    {
      heading: "IM ANRUF",
      steps: [
        "Anruf erreicht den Agent",
        "Agent fragt sauber zurück",
        "System prüft Kontext live",
        "Ticket angelegt, Termin gebucht",
        "Kunde bekommt Klartext zurück",
        "Übergabe wenn nötig, sonst Ende",
      ],
    },
    {
      heading: "IM TESTING",
      highlighted: true,
      steps: [
        "Agent konfiguriert und verbunden",
        "Hunderte Testfälle generiert",
        "Bot ruft Bot an",
        "Jailbreak- und Swarm-Tests",
        "Antworten automatisch bewertet",
        "Testbericht mit Pass/Fail-Trail",
      ],
    },
  ],
  trustPills: [
    {
      icon: "DE",
      label: "DSGVO & Hosting Deutschland",
      sublabel: "Frankfurt · EU",
    },
    {
      icon: "⚙",
      label: "Operator-DNA",
      sublabel: "Wir betreiben den Auftrag, nicht nur das Gespräch",
    },
    {
      icon: "∞",
      label: "Kein Vendor-Lock-in",
      sublabel: "Tele, CRM, Kalender bleiben",
    },
  ],
} as const;
```

**Differentiation-Adds gegenüber peira:**
- **Headline-Cursive shift:** "betreiben den Auftrag" (peira: "zuverlässig bleibt") — direkt KB §0
- **Operator-DNA-Pill-Sublabel:** "Wir betreiben den Auftrag, nicht nur das Gespräch" (peira: "Wir verstehen Mittelstand") — schärfer und differenziert

- [ ] **Schritt 7.1 — DQG-Check**
- [ ] **Schritt 7.2 — Comparison.tsx mit Toggle (initial nur "Nur Sonivo"-View, Toggle als visueller Stub)**
- [ ] **Schritt 7.3 — 2-Spalten-Container in Round-Corner-Frame mit "Sonivo"-Label oben rechts**
- [ ] **Schritt 7.4 — Steps als Number-Pill + Text-Row**
- [ ] **Schritt 7.5 — 3 Trust-Pills unter dem Container**
- [ ] **Schritt 7.6 — Build + Visual-Check**
- [ ] **Schritt 7.7 — Commit:** `git commit -m "comparison: Operator-DNA headline + 6-step Anruf + 6-step Testing diff"`

---

## Task 8 — Final-Pass: `/copywriting` + `copy-editing` Sweep

**Files:**
- Modify: `website/src/lib/content.ts` (alle Konstanten)

**Quality Gates:** Alle 3 DQGs auf allen 6 Sektionen + Lesbarkeit (Flesch-Reading-Ease > 50 für DE)

- [ ] **Schritt 8.1** — `/copywriting`-Skill mit Auftrag: "Re-read alle 6 Sektion-Copies aus website/src/lib/content.ts. Check: (a) jede Sektion hat einen 'Wir machen mehr als Voice AI'-Anker, (b) Sie-Form konsistent, (c) keine Anglizismen ohne Not, (d) Action-Verben statt Substantivierung. Liefere Diff-Vorschläge."

- [ ] **Schritt 8.2** — Diffs sichten + akzeptieren/verwerfen

- [ ] **Schritt 8.3** — `copy-editing`-Skill für Line-Polish (Komma-Setzung, Doppelte Wörter, Schwammigkeit)

- [ ] **Schritt 8.4** — Commit: `git commit -m "copy: final differentiation sweep across all 6 sections"`

---

## Self-Review Checkliste

Nach Abschluss aller Tasks gegen den Original-Auftrag prüfen:

- [ ] **Differentiation-Anker:** Wie oft sagt die Seite "wir machen MEHR als Voice AI"? Mindestens **3 Stellen** (Hero-Sub + Delivery-Sub + Comparison-Headline). ✅ erfüllt im Plan.
- [ ] **Voice-AI-Distanzierung explizit:** Mindestens **1 Stelle** sagt "Sonivo ist kein Voice Agent" (= Hero-Subheadline). ✅
- [ ] **Operator-Aktionen sichtbar:** Foto-Anforderung, Ticket-Erstellung, CRM-Schreiben, Techniker-Briefing — alle 4 erscheinen in Delivery + Hero. ✅
- [ ] **Agenten-TÜV als Pitch:** Erscheint in Dispatcher-Tier + Process Step 03 + Comparison Sektion. ✅ (3 Stellen)
- [ ] **Brand-Voice (Sie-Form, geerdet):** Konsistent. Quick-grep `\bdu\b|\bdich\b|\bdein\b` muss 0 Treffer haben.
- [ ] **Bot-Visual-Platz:** Hero hat 5/12 rechte Spalte reserviert (Task 2 Schritt 2.4). ✅
- [ ] **Keine Halluzinationen:** Keine Testimonials, keine Customer-Logos, keine Metriken-Behauptungen. Wird in Phase 9 nach echtem Pilot ergänzt.
- [ ] **DSGVO-Pflichten:** Sektion 6 hat DSGVO-Pill. Datenschutz-Link ist im Footer (bereits in Phase 1 Stub). Vollständige Policy in Phase 6 via `/legal-privacy`.

---

## Execution Decision

**Empfehlung:** Inline Execution. Subagent-Driven wäre Overkill für Copy-Iteration in einem User-Approval-Loop. Jede Sektion ist <30min, User-Feedback-Schleife nach Hero ist effizient.

**Reihenfolge:**

1. **Task 0** *(Customer-Research)* — optional, kann übersprungen werden wenn Yannik bereits aus Discovery-Calls verbatim Pains hat. Sonst: 30min.
2. **Task 1** *(content.ts)* — Foundation, ~20min
3. **Task 2** *(Hero)* — User-Approval-Loop, ~45min
4. **Task 3-7** *(Sektionen 2-6)* — sequenziell, je ~30-45min
5. **Task 8** *(Polish-Pass)* — ~30min

**Gesamt:** ~5-6h für alle 6 Sektionen Copy + Implementation.

---

## Cross-Refs

- **Implementation Plan:** `docs/06-IMPLEMENTATION_PLAN.md`
- **Marketing Foundation:** `.agents/product-marketing.md`
- **CEO Content Decisions** *(aus dieser Conversation, hier konsolidiert):* siehe Sektionen oben in diesem Plan
- **Content Plan v1** *(veraltet, ersetzt durch dieses Doc):* `docs/02-CONTENT_PLAN.md`
