/**
 * Single-Source-of-Truth für alle Landing-Page-Texte.
 * Geschärft mit VoC-Recherche (siehe .agents/product-marketing.md).
 * i18n-Vorbereitung: Strings hier hardcoded auf Deutsch, in Phase 7 nach next-intl migrieren.
 */

export type TrustPill = { icon?: string; label: string; sublabel?: string };
export type CTA = { label: string; href: string; variant: "primary" | "secondary" | "ghost" };
export type Bullet = string;

export type HeroCopy = {
  eyebrow: string;
  headlineParts: { line1: string; line2plain: string; line2cursive: string };
  ctas: [CTA, CTA];
  microcopy: string;
  trustPills: [TrustPill, TrustPill, TrustPill];
};

export const HERO_COPY: HeroCopy = {
  eyebrow: "AI-OPERATOR FÜR HANDWERK · MADE IN GERMANY",
  headlineParts: {
    line1: "Wir übernehmen den Bürokram.",
    line2plain: "Sie machen das",
    line2cursive: "Handwerk.",
  },
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

// ---------------------------------------------------------------------------

export type ScenarioCopy = {
  eyebrow: string;
  headlineParts: { plain: string; cursive: string; tail: string };
  activeCard: {
    title: string;
    body: string;
    audioSrc: string;
    audioDuration: string;
  };
  floatingCards: { num: string; title: string; tag: string; active?: boolean }[];
};

export const SCENARIO_COPY: ScenarioCopy = {
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
};

// ---------------------------------------------------------------------------

export type DeliveryCard = {
  num: string;
  tag: string;
  title: string;
  body: string;
  bullets: Bullet[];
  dark?: boolean;
};

export type DeliveryCopy = {
  eyebrow: string;
  headlineParts: { plain: string; cursive: string; tail: string };
  subheadline: string;
  cards: DeliveryCard[];
  footerLink: { text: string; cta: string; href: string };
};

export const DELIVERY_COPY: DeliveryCopy = {
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
};

// ---------------------------------------------------------------------------

export type PricingTier = {
  name: string;
  tagline?: string;
  monthly: number;
  setup: number;
  minutes: number;
  perExtraMinute: number;
  ctaLabel: string;
  ctaHref: string;
  highlighted: boolean;
  features: string[];
};

export type PricingCopy = {
  eyebrow: string;
  headlineParts: { plain: string; cursive: string; tail: string };
  tiers: PricingTier[];
  bottomStrip: { label: string; range: string; note: string };
  customLink: { text: string; cta: string; href: string };
  glossary: { label: string; body: string };
};

export const PRICING_COPY: PricingCopy = {
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
      tagline: "Empfehlung für SHK / Rohrreinigung",
      monthly: 499,
      setup: 1500,
      minutes: 1000,
      perExtraMinute: 0.49,
      ctaLabel: "Paket wählen",
      ctaHref: "#kontakt",
      highlighted: true,
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
};

// ---------------------------------------------------------------------------

export type ProcessStep = {
  num: string;
  tag: string;
  title: string;
  body: string;
  cta?: { label: string; href: string };
  dark?: boolean;
};

export type ProcessCopy = {
  eyebrow: string;
  headlineParts: { plain: string; cursive: string; tail: string };
  primaryStep: ProcessStep;
  secondaryHeading: string;
  secondarySteps: ProcessStep[];
  footerNote: string;
};

export const PROCESS_COPY: ProcessCopy = {
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
};

// ---------------------------------------------------------------------------

export type ComparisonColumn = {
  heading: string;
  steps: string[];
  highlighted?: boolean;
};

export type ComparisonCopy = {
  eyebrow: string;
  headlineParts: { plain: string; cursive: string };
  toggle: { leftLabel: string; rightLabel: string };
  containerLabel: string;
  columns: [ComparisonColumn, ComparisonColumn];
  trustPills: [TrustPill, TrustPill, TrustPill];
};

export const COMPARISON_COPY: ComparisonCopy = {
  eyebrow: "TESTING",
  headlineParts: {
    plain: "Andere liefern einen Bot. Wir",
    cursive: "betreiben den Auftrag.",
  },
  toggle: {
    leftLabel: "Mit Wettbewerber-Vergleich",
    rightLabel: "Nur Sonivo",
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
};
