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

export type ScenarioItem = {
  num: string;
  shortTitle: string;
  tag: string;
  fullTitle: string;
  bodyHighlight: string;
  bodyText: string;
  audioSrc: string;
  audioDuration: string;
  image: string;
  imageAlt: string;
  accent: string;
  bgPosition: string;
  /** override für background-size; default "cover". Für hochkante/spezielle Bilder z.B. "contain" oder "auto 110%" */
  bgSize?: string;
};

export type ScenarioCopy = {
  eyebrow: string;
  headlineParts: { plain: string; cursive: string; tail: string };
  scenarios: ScenarioItem[];
};

export const SCENARIO_COPY: ScenarioCopy = {
  eyebrow: "",
  headlineParts: {
    plain: "Findet sich Ihr",
    cursive: "Szenario",
    tail: "hier?",
  },
  scenarios: [
    {
      num: "01",
      shortTitle: "Heizungsnotfall",
      tag: "SHK · Notdienst",
      fullTitle: "Heizung und Warmwasser fallen aus. Der Rückruf muss sofort ins Team.",
      bodyHighlight: "Notfall erkannt in unter 30 Sekunden:",
      bodyText:
        "Standort, Schaden und Rückrufnummer landen sofort bei der Bereitschaft — inklusive Foto vom Display.",
      audioSrc: "/demo/scenario-shk-placeholder.mp3",
      audioDuration: "0:22",
      image: "/scenarios/heizungsnotfall-v2.png",
      imageAlt: "Sonivo-Bot erkennt einen Heizungsnotfall, mit Warnhinweisen und Rückrufkontakt",
      accent: "#5fb898",
      bgPosition: "55% center",
    },
    {
      num: "02",
      shortTitle: "Verpasster Anruf",
      tag: "Alle Gewerke · Nach Feierabend",
      fullTitle: "Anruf nach Feierabend. Ihr Team ist auf der Baustelle, das Telefon klingelt ins Leere.",
      bodyHighlight: "Sonivo nimmt ab, qualifiziert und übergibt:",
      bodyText:
        "Name, Anliegen und Dringlichkeit landen morgens als sortierte Aufgabenliste — nicht als zwanzig unbeantwortete Mailbox-Nachrichten.",
      audioSrc: "/demo/scenario-shk-placeholder.mp3",
      audioDuration: "0:18",
      image: "/scenarios/verpasster-anruf-v2.png",
      imageAlt: "Sonivo-Bot mit Headset nimmt Anrufe an, im Hintergrund Tag-Nacht-Übergang am Schreibtisch",
      accent: "#9bb0e8",
      bgPosition: "55% center",
      bgSize: "contain",
    },
    {
      num: "03",
      shortTitle: "Reparatur mit Foto",
      tag: "SHK · Elektrik · Wartung",
      fullTitle: "Die Heizung zeigt einen Fehlercode. Der Kunde möchte einen Termin.",
      bodyHighlight: "Foto vom Display, Typenschild und Aufstellort per SMS angefordert:",
      bodyText:
        "Der Techniker weiß vor der Fahrt, welches Modell, welcher Fehlercode, welche Ersatzteile — keine Leerfahrt, kein zweiter Termin.",
      audioSrc: "/demo/scenario-shk-placeholder.mp3",
      audioDuration: "0:24",
      image: "/scenarios/reparatur-v2.png",
      imageAlt: "Sonivo-Bot vor einem Dashboard mit Geräte-Fotos und Reparatur-Daten",
      accent: "#7ec4d4",
      bgPosition: "55% center",
    },
    {
      num: "04",
      shortTitle: "Termin direkt vereinbart",
      tag: "Alle Gewerke · Terminvereinbarung",
      fullTitle: "Kunde möchte einen Wartungstermin. PLZ liegt im Gebiet, der Kalender ist offen.",
      bodyHighlight: "Termin direkt im Kalender, ohne Rückruf-Schleife:",
      bodyText:
        "Sonivo prüft das Einsatzgebiet, schlägt freie Slots vor und bestätigt per SMS — der Kunde legt mit einem Termin auf, Ihr Büro hat eine Aufgabe weniger.",
      audioSrc: "/demo/scenario-shk-placeholder.mp3",
      audioDuration: "0:20",
      image: "/scenarios/terminbuchung-v2.png",
      imageAlt: "Sonivo-Bot präsentiert einen Kalender mit verfügbaren Wartungsterminen",
      accent: "#7fc5b8",
      bgPosition: "50% center",
    },
  ],
};

// ---------------------------------------------------------------------------

export type DeliveryCard = {
  num: string;
  tag: string;
  title: string;
  body: string;
  bullets: Bullet[];
};

export type DeliveryCopy = {
  eyebrow: string;
  headlineParts: { plain: string; cursive: string; tail: string };
  subheadline: string;
  punchline: string;
  cards: DeliveryCard[];
  trustStrip: string[];
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
    "Sonivo ist Ihr erster Mitarbeiter am Telefon: Empfang, Disponent und Vorqualifizierer in einem.",
  punchline:
    "Sonivo nimmt nicht nur Anrufe an — Sonivo macht aus jedem Anruf einen klaren nächsten Schritt: Auftrag, Rückruf, Termin, Foto oder Eskalation.",
  cards: [
    {
      num: "01",
      tag: "INBOUND",
      title: "Anrufe zuverlässig annehmen",
      body: "Sonivo nimmt jeden Anruf entgegen, versteht das Anliegen und erkennt, ob es dringend ist oder normal bearbeitet werden kann.",
      bullets: [
        "24/7 erreichbar, auch außerhalb der Öffnungszeiten",
        "Notfälle erkennen und sofort eskalieren",
        "Name, Adresse, Rückrufnummer und Anliegen erfassen",
        "Nur relevante Fälle an Ihr Team übergeben",
      ],
    },
    {
      num: "02",
      tag: "QUALIFIZIERUNG",
      title: "Aus Anrufen werden saubere Aufträge",
      body: "Der Agent fragt die Informationen ab, die Ihr Team wirklich braucht — damit aus einem Anruf direkt ein verwertbarer Vorgang wird.",
      bullets: [
        "Problem, Dringlichkeit und Einsatzort erfassen",
        "Einsatzgebiet und Leistung prüfen",
        "Fotos vom Schaden oder Gerät anfordern",
        "Rückruf-, Termin- oder Auftragsticket erstellen",
      ],
    },
    {
      num: "03",
      tag: "INTEGRATION",
      title: "Informiert Ihr Team automatisch",
      body: "Sonivo arbeitet im Hintergrund mit Ihren bestehenden Tools und leitet neue Vorgänge an die richtigen Personen weiter.",
      bullets: [
        "Tickets oder Rückrufe automatisch auslösen",
        "Techniker per E-Mail, SMS oder WhatsApp informieren",
        "Kalender oder CRM anbinden",
        "Gesprächszusammenfassung im System speichern",
      ],
    },
    {
      num: "04",
      tag: "REPORTING",
      title: "Jeder Vorgang bleibt sichtbar",
      body: "Sie sehen, welche Anrufe eingegangen sind, welche Fälle dringend waren und wo noch etwas offen ist.",
      bullets: [
        "Anrufe, Tickets und Eskalationen protokollieren",
        "Kunden an Fotos oder Termine erinnern",
        "Monatliches Reporting mit klaren Kennzahlen",
        "Laufende Optimierung der Gesprächslogik",
      ],
    },
  ],
  trustStrip: [
    "Agenten-TÜV vor Go-live",
    "DSGVO-konform",
    "Hosting Frankfurt",
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
  eyebrow: "VOM ANRUF ZUM AUFTRAG",
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
      heading: "IM AUFTRAG",
      highlighted: true,
      steps: [
        "Ticket landet sauber im CRM",
        "Foto vom Schaden per SMS-Link",
        "Techniker bekommt Briefing aufs Handy",
        "Termin steht im Kalender",
        "Notfall geht direkt an Bereitschaft",
        "Inhaber sieht morgens saubere Liste",
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
      sublabel: "Telefon, CRM, Kalender bleiben",
    },
  ],
};
