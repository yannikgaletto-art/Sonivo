# Product Marketing Context

*Last updated: 2026-05-26*
*Source: `KnowledgeHub/3) OpenaI/AI_Service_Operator_Knowledge_Base.md` (canonical) + `Wettbewerb.md` + `docs/00-PROJECT_BRIEF.md`*

> Dieser Context ist die Foundation für alle Sonivo-Marketing-Skills. Andere Skills (`/copywriting`, `/launch`, `/pricing`, `/customer-research`) referenzieren dieses File. Sprache durchgehend: Deutsch, Sie-Form, einfach erklärt.

---

## Product Overview

**One-liner:**
Sonivo ist der AI-Operator, der eingehende Anrufe für lokale Servicebetriebe annimmt, qualifiziert und in fertige Aufträge im bestehenden System verwandelt.

**What it does:**
Nimmt Anrufe rund um die Uhr an (auch verpasste, nach Feierabend, während Einsätzen). Erkennt Notfälle, erfasst Pflichtdaten strukturiert, fordert Fotos vom Schaden an, informiert den richtigen Techniker und schreibt Tickets/Termine direkt in CRM, Kalender oder Branchen-ERP. Sensible Aktionen warten auf menschliche Freigabe.

**Product category:**
AI-Operator für lokale Servicebetriebe (nicht: "Voice Agent", nicht: "KI-Telefonassistent", nicht: "Chatbot"). Kategorie-Anker: "digitaler Empfang mit Operations-Layer".

**Product type:**
B2B SaaS + Done-for-you Setup-Service (Hybrid). Anschluss an bestehende Telefonie statt Ersatz.

**Business model:**
Setup-Fee + monatliches Abo + nutzungsabhängige Zusatzminuten. Kein billiges Self-Service-Modell — bewusst Premium-Wedge gegen 49-99€-Anbieter wie Agentino / HalloPetra / Fonio.

| Paket | Setup | Monat | Inhalt |
|---|---:|---:|---|
| Pilot | 299-499 € | 149 € | 150 Min · verpasste Anrufe · Zusammenfassung · E-Mail-Notification |
| **Dispatcher** *(Hauptpaket)* | **799 €** | **299 €** | 500 Min · Notfalltriage · Job-Erfassung · Fotolink · Techniker-Notification · Dashboard |
| Operator | 1.500 € | 599 € | 1.200 Min · Kalender-Integration · mehrere Mitarbeiter · Branchenregeln · wöchentliche Optimierung Monat 1 |
| Custom | ab 2.500 € | ab 999 € | Branchen-ERP · WhatsApp · mehrere Standorte · SLA · Custom Evals |

Zusatzminuten: 0,19-0,35 €/Min je nach Paket. Setup-Fee nicht verhandelbar — finanziert Done-for-you (Company Brain, Agenten-TÜV, Testnummer, Go-live-Begleitung).

---

## Target Audience

**Target companies:**
Lokale Handwerks- und Servicebetriebe in DACH mit 5-30 Mitarbeitenden, hohem Anrufvolumen, Außendienst und Notfallcharakter.

**Priorisierte Segmente** (KB §1):

| Prio | Segment | Warum zuerst |
|---:|---|---|
| 1 | **Sanitär/Heizung (SHK)** inkl. Notdienst | Beste Kombi aus Schmerz, Zahlungsbereitschaft, Standardisierbarkeit, messbarem ROI |
| 2 | **Rohrreinigung / Kanalservice** | Notfallcharakter, klare Erstabfrage, sehr hohe Zahlungsbereitschaft |
| 3 | **Elektriker / Wallbox / PV** | Sicherheits-Triage, hohe Ticketwerte, Erweiterbarkeit Smart Home |
| 4 | **Dachdecker / Leckage / Sturmschäden** | Multimodal (Stimme + Foto + Schadenklassifizierung), Wetter-Peaks |
| 5 | **Kälte/Klimatechnik (Gewerbekälte)** | B2B-SLA-Pricing möglich, hohe Ausfallkosten |

**NICHT zuerst:** Friseur, Kosmetik, Tierärzte, Ärzte, Kanzleien, Finanzberatung. Begründung: Markt ist commoditized (Terminbots), Differenzierungshebel kleiner, oder Datenschutz/Haftung zu komplex.

**Decision-makers:**
Inhaber-Geschäftsführer + Bürokraft. B2B-Buying-Center klein (1-2 Personen). Inhaber entscheidet, Bürokraft nutzt täglich.

**Primary use case:**
"Kein eingehender Anruf geht mehr verloren, jeder landet als sauber qualifizierter Auftrag im richtigen Prozess."

**Jobs to be done:**
- "Damit ich keine Notfall-Aufträge mehr verpasse, weil das Telefon ins Leere klingelt."
- "Damit das Büro morgens nicht 47 Mailbox-Nachrichten abhören muss."
- "Damit der Monteur vor Ort schon weiß, was Sache ist (Foto, Adresse, Gerätetyp, Vorbereitung)."

**Use cases / Szenarien:**
- Heizung fällt aus, Kunde ruft abends an → Notfall erkannt, Foto vom Display angefordert, Bereitschaft informiert
- Rohrbruch in Mehrfamilienhaus → kritische Priorität, Sofort-Eskalation an Notdienst
- Dachschaden nach Sturm → Foto angefordert, Versicherungsthema markiert, Besichtigungstermin vorbereitet
- Wallbox-Anfrage → Lead qualifiziert (PLZ, Stromanschluss, Hauseigentümer), Angebots-Ticket erzeugt
- Bestandskunde fragt nach laufendem Auftrag → keine Neuanlage, Rückruf-Notiz an zuständigen Techniker
- Werbeanruf / Spam → kein Job angelegt

---

## Personas

| Persona | Cares about | Challenge | Value we promise |
|---|---|---|---|
| **Inhaber (Geschäftsführer)** | Umsatz, Ruf, Mitarbeiter-Entlastung, kein Kontrollverlust | "Verpasste Anrufe = verpasste Aufträge, aber ich kann mein Team nicht mit Mailbox-Abhören belasten" | "Jeder Anruf wird angenommen und dokumentiert. Sie entscheiden weiterhin, was passiert." |
| **Bürokraft (User)** | Saubere Vorgänge, keine Überlastung, Ende der Doppel-Eingabe | "Ich höre 47 Mailbox-Nachrichten ab und tippe alles nochmal ins CRM" | "Sie kriegen morgens eine priorisierte Liste mit allen Pflichtfeldern schon erfasst." |
| **Monteur / Techniker** | Vorbereitete Einsätze, keine Rückfragen unterwegs | "Ich komme an und weiß nicht, welches Gerät, welcher Fehler, kein Foto" | "Briefing mit Foto, Adresse, Fehlercode und Vorbereitungshinweisen am Handy." |
| **Inhaber als Financial Buyer** | ROI, Marge, keine versteckten Kosten | "799€ Setup ist viel, wenn das Ding am Ende nichts taugt" | "Agenten-TÜV vor Go-live + 14-Tage-Pilot. Ein geretteter Notfall finanziert den Monat." |

---

## Problems & Pain Points

**Core problem:**
Verpasste Anrufe = verpasste Aufträge. Lokale Servicebetriebe verlieren systematisch Umsatz, weil das Büro während Einsätzen, nach Feierabend oder bei Anruf-Peaks nicht erreichbar ist. Mailbox-Lösungen schaffen Folge-Arbeit statt Entlastung.

**Why alternatives fall short:**
- **Mailbox:** Anrufer hängen oft auf; Bürokraft tippt nachträglich ab — Doppel-Erfassung, keine Notfalltriage, Notfälle gehen unter
- **Externes Callcenter:** kennt den Betrieb nicht, gibt generische Antworten, keine Branchenlogik
- **Mitarbeiter zwingen ans Telefon:** unmöglich auf Baustelle, schadet Konzentration, frustriert das Team
- **Einfache KI-Telefonassistenz (HalloPetra, Agentino, Fonio):** liefert Zusammenfassungen, aber baut keinen Auftrag — kein Foto, kein Ticket, keine Notfall-Eskalation, keine Branchenregeln, kein TÜV
- **Branchen-ERP-Voice-Module (HERO Voice, pds Hey Telo):** Vendor-Lock-in, oft nur Anrufannahme, keine Multimodalität

**What it costs them:**
- 1 verpasster Notfall-Anruf SHK = 500-2.500 € verlorener Umsatz
- Bürokraft verbringt 1-2 h/Tag mit Mailbox-Abhören + Datenpflege
- Schlechtere Kundenbewertungen ("Niemand geht ran")
- Monteure verschwenden 30-60 Min/Tag mit Rückfragen unterwegs

**Emotional tension:**
- "Ich weiß nicht, wie viele Aufträge ich verliere, das ist das Schlimmste."
- "Wenn nachts der Notdienst nicht erreichbar ist, schämt sich der Betrieb am nächsten Tag."
- Angst vor "KI ersetzt Menschen" → muss als "KI entlastet das Team" geframed werden
- Angst vor Datenschutz-Falle / DSGVO-Abmahnung

---

## Competitive Landscape

### ⚠️ peira.ai ist NICHT Wettbewerber (Erkenntnis aus VoC-Recherche 2026-05-26)

Die produktive peira.ai (`peira-sme-prod.vercel.app`) positioniert sich als **Voice-Agent-Testing-Plattform** ("creates realistic test scenarios from your agent data... simulates real calls"), nicht als Voice-Agent selbst. Der vom User initial geteilte Prototyp (`peira-ai-seven.vercel.app`) zeigt offenbar einen früheren Voice-Operator-Frame, von dem peira inzwischen pivot't ist.

**Konsequenz für Sonivo:**
- peira.ai wird als **mögliches Tool unter Sonivos Stack** behandelt (für Agenten-TÜV) — nicht als Wettbewerber attackiert
- Comparison-Section adressiert Voice-AI-Wettbewerber generisch ("Andere liefern einen Bot") ohne peira-Namen
- Politische Sensibilität bleibt gewahrt (Vishal/Jan-Konflikt-frei)

### Direct competitors (KI-Telefonassistenz für Handwerk)

- **HalloPetra** (99/199/499 € · Minutenpakete) — Anrufannahme + Zusammenfassung, kein Operator-Layer, kein Agenten-TÜV. **Tech-Insight:** läuft auf VAPI (US-Drittanbieter) — wird aber als "deutsche KI-Lösung" vermarktet. Sonivo kann transparent kommunizieren, wo der Voice-Layer herkommt.
- **Agentino** (49/99/199 € Handwerker-Fokus) — Self-Service, generische Templates, keine Branchen-Tiefe. Hat aber den breit zitierten "30% verpasste Anrufe = €100k Jahresverlust"-Frame etabliert (Hero-ROI-Anker übernehmbar).
- **Fonio** (99-499 € breit) — generisch, nicht handwerk-spezifisch. **VoC-Pains:** fehlende PBX-Integration (Capterra/Christian), Pricing-Intransparenz-Beschwerden nach Modellwechsel (Capterra/Rene). Dialekt-Probleme.
- **VITAS, smao, Synthflow, CallOne, Placetel AI, IONOS Momentum, Parloa, Voisa, Vokaro, Assistent24, Bots4You, comdesk, telfo, meiti** — generische oder Self-Service-Voice-AI, niemand mit echter Operator-DNA.

### Secondary competitors (Branchen-ERP mit Voice-Modul)

- **HERO Voice** — gut, aber an HERO-ERP gekoppelt (Vendor-Lock-in). OneQrew-Partnerschaft mit HalloPetra macht es zur Standard-Bündel-Lösung im autarc.energy / handwerker-software.org Ecosystem.
- **pds Hey Telo** — pds-only
- **ToolTime / Streit V.1 / TAIFUN / Labelwin** — Voice-Add-ons schwach

### Tertiary / Voice-AI-Testing (= peira.ai-Kategorie)

- **peira.ai** — Voice-Agent-Testing-Plattform (B2B2B). Konkurriert NICHT mit Sonivo's Operator-Funktionen, sondern ist Tool, das Voice-AI-Anbieter (inkl. Sonivo) nutzen können um Agenten-TÜV zu skalieren.

### Wie alle scheitern (Sonivos Differenzierungs-Hebel)

Verifiziert durch VoC (siehe Customer-Language-Block):
1. **Pain #1 — Fehlende Integration:** Wettbewerber fordern eigene Rufnummer, integrieren nicht sauber in Kalender/CRM. Sonivo dockt an.
2. **Pain #2 — Eskalation hakt:** Wettbewerber haben harte Bot-Mensch-Übergaben mit Datenverlust. Sonivo: warmer Handoff mit voller Gesprächs-Zusammenfassung.
3. **Pain #3 — Akzeptanz:** Wettbewerber maskieren KI. Sonivo: explizite AI-Offenlegung ("Hallo, ich bin der digitale Assistent von X") — Placetel-Studie: 41% sehen das als Voraussetzung.
4. **Pain #6 — Hallucinations:** Wettbewerber haben keinen TÜV. Sonivo: 30-50 Testfälle vor Go-live, Pflichtfelder-Erzwingung, keine Festpreis-Zusagen.

**Indirect competitors** (alternative Lösungsansätze):
- Externes Callcenter (Backoffice24, AWS Connect-Reseller) — teuer, kein Branchenwissen, keine Integration
- Mailbox + manuelle Nacharbeit — der Status quo bei 95% der Zielgruppe
- Sekretärin-/Bürokraft-Stelle einstellen — Fachkräftemangel, monatlich teurer als Sonivo

**Wie alle scheitern:**
Sie sind Voice Agents (= das Gespräch ist das Produkt). Sonivo ist ein AI-Operator (= das fertige Ergebnis im System ist das Produkt). Sonivo legt Tickets an, sendet Fotolinks, briefs Techniker, eskaliert Notfälle, schreibt Termine in den Kalender. Andere liefern eine MP3-Zusammenfassung per E-Mail.

---

## Differentiation

**Key differentiators:**

1. **Operator-DNA statt Voice-Agent.** "Voice Agents nehmen Anrufe an. Wir betreiben den Auftrag." Sonivo betreibt nach dem Gespräch echte Aktionen (Ticket, Fotolink, Techniker-Briefing, Kalendereintrag).
2. **Agenten-TÜV vor jedem Go-live.** 30-50 Testfälle aus echten Notfall-, Preis-, Termin- und Beschwerdeszenarien. Wettbewerber liefern Demo-Bots ohne Stress-Test.
3. **Company Brain pro Betrieb.** Strukturierte Regeln: PLZ-Servicegebiet, Notfallregeln (Rohrbruch, Gasgeruch, Heizungsausfall), Preisrahmen, Terminlogik, Techniker-Skills, Eskalationsregeln. Versioniert.
4. **Multimodalität.** Stimme + Foto + Standort + Kalender + Historie. "Schicken Sie mir ein Foto vom Display" ist Pflicht-Funktion, nicht Bonus.
5. **Branchen-Templates statt Generik.** Vertikale Templates für SHK, Rohrreinigung, Elektrik, Dach, Kälte — jeweils mit Pflichtfeldern, Notfallregeln, Foto-Workflows.
6. **Human-in-the-loop bei sensiblen Aktionen.** Keine Festpreis-Zusagen, keine garantierten Termine ohne Kalenderprüfung, Notfälle eskalieren immer an Menschen.
7. **Compliance-by-design.** DSGVO + EU AI Act + §201 StGB von Tag 1 berücksichtigt. AI-Offenlegung als Standard ("Hallo, ich bin der digitale Assistent von ..."). Datenminimierung. EU-Hosting (Frankfurt).
8. **Done-for-you Setup statt Self-Service.** Wir bauen das Company Brain, nicht der Kunde. Setup-Fee finanziert das.
9. **Systemunabhängig (kein Vendor-Lock-in).** Telefon, CRM, Kalender, ERP bleiben. Sonivo dockt an.

**Why customers choose us:**
"Ich brauche keinen weiteren KI-Bot, ich brauche jemanden der den Vorgang erledigt — sauber, dokumentiert und im System."

---

## Objections

| Objection | Response |
|---|---|
| "KI ist unpersönlich, das passt nicht zu meinem Betrieb." | "Sonivo ersetzt Ihr Team nicht. Es sorgt dafür, dass das Team morgens eine saubere Liste hat statt Mailboxen abzuhören. Der Bot meldet sich klar als digitaler Assistent — kein Fake-Mensch." |
| "Was ist mit Datenschutz / DSGVO?" | "Wir starten mit AI-Offenlegung, Datenminimierung, optional ohne Aufnahme, EU-Hosting in Frankfurt, AVV im Standard. Menschliche Freigabe für sensible Aktionen." |
| "799€ Setup ist zu teuer." | "Setup finanziert Company Brain + Agenten-TÜV + Testnummer + Go-live-Begleitung. Wir bauen kein Self-Service-Tool, wir bauen Ihren digitalen Empfang. Ein geretteter Notfall-Auftrag finanziert den ersten Monat." |
| "Mein bestehender Mailbox-Service genügt." | "Mailbox erfasst keinen Notfall, fordert kein Foto, briefed keinen Techniker, schreibt nichts ins CRM. Sie bezahlen die Bürokraft für die Nacharbeit. Sonivo macht den ganzen Vorgang in 60 Sekunden." |
| "Wir nutzen schon HERO Voice / pds." | "Dann ist Ihr ERP-Voice an die ERP gekoppelt. Sonivo dockt zusätzlich an Telefon und Website an und kann auch andere Tools (Lexware, DATEV, Google Workspace) verbinden. Kein Vendor-Lock-in." |
| "Ich habe Angst, der Bot hängt sich auf / sagt was Dummes." | "Deshalb der Agenten-TÜV. 30-50 Testfälle vor Go-live. Bei jeder Unsicherheit eskaliert der Bot an einen Menschen. Soft-Launch zuerst nur für verpasste Anrufe nach Feierabend — Risiko minimal." |

**Anti-persona:**
- Solo-Selbstständige ohne Bürokraft (Setup-ROI nicht da)
- Betriebe mit < 5 Anrufen/Tag (kein Volumen, lohnt sich nicht)
- Friseure / Kosmetik / einfache Terminbranchen (commoditized von Cal.com, HalloPetra)
- Ärzte / Anwälte / Steuerberater (Datenschutz-Anforderungen zu spezialisiert)
- Betriebe die SELBST Bot-Setup machen wollen (wir verkaufen Done-for-you)

---

## Switching Dynamics (JTBD Four Forces)

**Push** (was sie wegtreibt vom Status quo):
- "Letzten Monat habe ich 12 Notfall-Aufträge verpasst, das sind 6.000-15.000 € weg"
- "Meine Bürokraft kündigt fast, sie hört nur noch Mailbox ab"
- "Google-Bewertung: 'Niemand geht ans Telefon'"
- "Der Monteur kommt unvorbereitet vor Ort und muss zurück ins Lager"

**Pull** (was Sonivo attraktiv macht):
- "Jeder Anruf wird angenommen, auch nachts"
- "Notfall wird sofort erkannt und richtige Person benachrichtigt"
- "Foto vom Display ist da, bevor der Monteur losfährt"
- "Saubere Liste morgens im Dashboard, keine Doppel-Eingabe"

**Habit** (was sie am Status quo festhält):
- Bestehende Mailbox-Routinen
- Angst vor Lernkurve mit "noch einem Tool"
- "Ich will mein bestehendes CRM/ERP nicht ändern"
- "Wir haben das immer so gemacht"

**Anxiety** (was sie blockiert beim Wechsel):
- "Was wenn der Bot etwas Falsches sagt?"
- "Was wenn der Notfall trotzdem nicht erkannt wird?"
- "Datenschutz / DSGVO-Falle"
- "Setup-Fee 799€ ist Risiko"
- "Mitarbeiter empören sich über 'KI ersetzt uns'"

**Antwort auf Anxiety:** Agenten-TÜV vor Go-live + Soft-Launch (nur After-Hours) + Human-Handoff bei Unsicherheit + Compliance-by-design + Pilot-Paket 149€/Mo zum Testen.

---

## Customer Language

### Verbatim aus eigener Recherche (VoC, 2026-05-26)

**Quelle:** WebSearch + WebFetch durch `/customer-research`-Skill, public corpus (Capterra, Praxistest-Blogs, Handelsblatt, Placetel-Studie 2025, Wettbewerber-Blogs).

**Pain #1 — Fehlende Integration / "Voice ohne Operator-Layer":**
> "Integration in unser Kalendersystem oder eine nahtlose Einbindung in die Telefonanlage ohne zusätzliche Rufnummer."
> — Christian, Erneuerbare Energien, Capterra Review zu fonio.ai

**Pain #2 — Eskalation an Mensch funktioniert nicht sauber:**
> "Bei komplexen Themen oder wenn jemand wirklich emotional aufgewühlt ist, stößt der Bot an seine Grenzen."
> — Nicole Angela Buck, KI-Trainerin Praxistest fonio.ai, 2025-06-14

**Pain #3 — Akzeptanzproblem ohne AI-Offenlegung:**
> "Manche Leute wollen einfach grundsätzlich nicht mit einem Bot sprechen. Das muss man akzeptieren."
> — Nicole Angela Buck, Praxistest 2025

**Pain #4 — Voice-Limitierungen (= Sonivo kann das auch nicht 100% lösen, ehrlich kommunizieren!):**
> "Starker Dialekt, schlechte Verbindung oder wenn mehrere Personen durcheinander reden... da wird's manchmal holprig."
> — Nicole Angela Buck, Praxistest 2025

**Pain #5 — Pricing-Intransparenz:**
> "die Umstellung auf das neue Preismodell mit festen Monatspaketen. Die vorherige minutengenaue Abrechnung empfinde ich als deutlich fairer und transparenter."
> — Rene, IT, Capterra Review zu fonio.ai

**Pain #6 — Vertrauens-/Hallucination-Risiko:**
> "Was sie bekommen, ist ein Bot, der mit Selbstvertrauen Fakten erfindet, einfache Fragen falsch versteht oder veraltete Auskünfte gibt."
> — Handelsblatt, "Warum Chatbots trotz KI versagen"

### Industry-Stats für Hero/ROI-Anker (mehrfach bestätigt)

> **"Rund 30 % der eingehenden Anrufe im Handwerk werden nicht angenommen."**
> Quelle: Agentino-Blog "30% Handwerks-Anrufe verloren" — Zahl wird breit zitiert in mehreren Wettbewerber-Quellen, daher als Industrie-Konsens nutzbar.

> **"Bei einer konservativen Conversion-Rate von 30 % und einem durchschnittlichen Auftragswert von 800 €: 8.400–12.000 € monatlicher Umsatzverlust, 100.000–144.000 € jährlich pro Betrieb."**
> Quelle: identisch — solider ROI-Anker für Sales-Calls und Pricing-Argumentation.

### Marktforschung — 87% wollen Voice AI bei Bedingung (Placetel Studie 2025)

> **52% der Befragten:** Voice-AI nur, wenn jederzeit Übergabe an Menschen möglich ist.
> **41% der Befragten:** Voice-AI nur, wenn klar als KI gekennzeichnet.

Quelle: Placetel Voice-AI-Reality-Check-Studie 2025.
**Implikation für Sonivo:** Human-Handoff + AI-Offenlegung sind keine "Nice-to-have", sondern **Markterwartung**. Sonivo muss sie prominent kommunizieren (nicht im Footer verstecken).

### How they describe the problem (eigene + KB)

- "Wir verlieren Aufträge, weil während Baustelle / Kundentermin / Feierabend niemand ans Telefon geht." *(KB §11)*
- "Wenn nachts der Notruf kommt, ist das eine Lotterie." *(KB §11)*
- "Mein Büro hat 47 Mailbox-Nachrichten am Montag — die Hälfte sind veraltete Anliegen." *(KB §11)*
- "Der Monteur ruft mich vom Auto an, weil er nicht weiß, was er mitnehmen soll." *(KB §11)*
- "Der Bot leitet nur weiter, statt das Anliegen wirklich zu lösen." *(Handelsblatt-Tenor)*
- "Bei komplexen Anliegen brauchen wir trotzdem den Menschen." *(VoC, Pain #2)*

### How they describe Sonivo (Wunsch-Verbatim, abgeleitet aus VoC-Pains)

- "Endlich nimmt nachts jemand ab, der **mitschreibt** und das Anliegen **vorbereitet ins System schreibt**." *(adressiert Pain #1)*
- "Wenn das Anliegen schwierig ist, übergibt er mich sauber an einen Menschen." *(adressiert Pain #2)*
- "Der Bot sagt klar 'Ich bin der digitale Assistent von X' — keine Tricks." *(adressiert Pain #3 + Placetel 41%)*
- "Mein Büro hat morgens eine fertige Liste mit Foto, Adresse und Priorität." *(adressiert Pain #1)*
- "Ich habe einen digitalen Disponenten, nicht einen Anrufbeantworter." *(Operator-DNA-Frame)*

**Words to use:**
- "Digitaler Empfang" / "AI-Operator" / "AI-Dispatcher" / "digitaler Disponent"
- "Auftrag betreiben" / "Vorgang erledigen" / "ins System übergeben"
- "Notfall erkennen" / "Techniker briefen" / "Foto anfordern"
- "DSGVO-konform" / "EU-Hosting Frankfurt" / "AI Act ready" / "AVV im Standard"
- "Done-for-you" / "Pilot in 7 Tagen" / "Agenten-TÜV"
- "Kein Vendor-Lock-in" / "Ihre Tools bleiben"

**Words to avoid:**
- ❌ "KI-Chatbot" (zu billig, falsche Kategorie)
- ❌ "Voice Agent" (Wettbewerber-Vokabular)
- ❌ "Telefonbot" (klingt nach Mailbox)
- ❌ "KI ersetzt Mitarbeiter" (politisch toxisch)
- ❌ "Vollautomatisch" (überverspricht, Compliance-Risiko)
- ❌ "Sprachmodell" / "LLM" / "GPT" (technisch, Zielgruppe versteht es nicht)
- ❌ "Garantiert" / "Festpreis am Telefon" / "100% Erkennung" (rechtlich gefährlich)
- ❌ "Du" (Zielgruppe ist Sie-Form)

**Glossary:**

| Term | Bedeutung in Kundenkommunikation |
|---|---|
| **AI-Operator** | Sonivo selbst — der Bot, der nicht nur spricht, sondern Vorgänge erledigt |
| **Company Brain** | Die Wissensbasis des Betriebs (Öffnungszeiten, PLZ, Notfallregeln, Preise) |
| **Agenten-TÜV** | Stress-Test mit 30-50 Szenarien vor Go-live |
| **Notfalltriage** | Sonivo erkennt Dringlichkeit und entscheidet Eskalation |
| **Fotolink** | SMS/WhatsApp-Link, über den Kunde Foto vom Schaden hochlädt |
| **Techniker-Briefing** | Kurz-Nachricht an Mitarbeiter mit Priorität + Adresse + Foto + Vorbereitung |
| **Pilot** | 14-Tage-Probelauf, nur verpasste Anrufe / After-Hours |
| **Soft-Launch** | Schrittweise Inbetriebnahme — nicht direkt Hauptnummer ersetzen |

---

## Brand Voice

**Tone:**
Sachlich, kompetent, geerdet, vertrauenswürdig. Nicht hype-y, nicht agenturhaft, nicht "Tech-Bro". Wie ein erfahrener Berater, der den Handwerksbetrieb seit Jahren kennt.

**Style:**
- Sie-Form, immer.
- Kurze Sätze. Fachbegriffe immer erklären, weil Zielgruppe nicht-technisch.
- Konkrete Zahlen statt Buzzwords ("12 verpasste Anrufe = 6.000-15.000 € weg" statt "viel ROI").
- Aktivierte Verben ("nimmt an", "erkennt", "briefed") statt Substantivierungen.
- Beispiel-driven: jede Behauptung wird mit einem Szenario aus Kunden-Realität belegt.

**Personality (5 Adjektive):**
- **Verlässlich** — wir versprechen nur was wir liefern (Agenten-TÜV, kein "klappt schon")
- **Geerdet** — sprechen Handwerker-Sprache, nicht Tech-Konferenz-Deutsch
- **Operativ** — wir liefern Ergebnisse, keine Demos
- **Compliance-bewusst** — DSGVO/AI Act sind kein Aufwand, sondern USP
- **Lokal** — Made in Germany, Hosting Frankfurt, Pilot beim Kunden vor Ort

**Forbidden:**
- Keine Emojis in Marketing-Copy
- Kein "wir revolutionieren..."
- Keine Anglizismen ohne Not (statt "Onboarding" → "Einrichtung", statt "Workflow" → "Prozess")
- Keine Rechtsberatung → bei Compliance immer "keine Rechtsberatung" markieren

---

## Proof Points

**Metrics (Outcome-Metriken aus KB §2.5):**
- Gerettete Anrufe (Anzahl angenommener Calls, die sonst verloren wären)
- Qualifizierte Aufträge (Pflichtfelder vollständig)
- Eskalierte Notfälle (richtig erkannt + weitergeleitet)
- Foto-Uploads pro Vorgang
- Gebuchte/vorbereitete Termine
- Reduzierte Rückfragen vom Techniker
- Geschätzte Umsatzpipeline aus Agenten-Leads

**Qualitätsziele aus KB §4.4 (vor Go-live garantiert):**
- 100 % kritische Notfälle richtig erkannt (Go-live-Testset)
- 0 verbotene Aussagen (Festpreise, Garantien)
- > 90 % Pflichtfelder vollständig
- > 95 % richtige Tool Calls in Kernfällen
- > 95 % Handoff bei Unsicherheit

**Customers / Logos:**
Phase 0: noch keine. Ziel Phase 5: 1 zahlender Pilot in 14 Tagen, dann 5 nach 60 Tagen.

**Testimonials:**
Phase 0: noch keine. Sammeln ab Pilot-Go-live.

**Value themes:**

| Theme | Proof |
|---|---|
| **Keine Anrufe verlieren** | 24/7-Annahme, auch nach Feierabend und während Einsätzen |
| **Notfälle richtig erkennen** | Branchenregeln pro Gewerk + Human-Handoff bei Unsicherheit |
| **Aufträge sauber erfassen** | Pflichtfelder-Erzwingung + Foto-Anforderung + strukturiertes Ticket |
| **Techniker vorbereiten** | Briefing mit Priorität, Adresse, Foto, Vorbereitungshinweisen |
| **Qualität vor Go-live** | Agenten-TÜV mit 30-50 echten Szenarien |
| **DSGVO + EU AI Act ready** | Hosting Frankfurt, AVV im Standard, AI-Offenlegung, optional ohne Aufnahme |
| **Kein Vendor-Lock-in** | Telefon, CRM, Kalender, ERP bleiben — Sonivo dockt an |

---

## Goals

**Business goal (Phase 0-5):**
1 zahlender Pilot in 14 Tagen ab Landing-Site live. 5 zahlende Kunden in 60 Tagen. Pilot-Conversion-Rate aus Discovery-Call ≥ 25%.

**Conversion action (Landing-Site):**
Primärer CTA: **"Erstgespräch buchen"** (30 Min kostenlos, unverbindlich, kalendarisch).
Sekundär: **"Live-Demo-Nummer anrufen"** (Demo-Nummer, die zeigt wie Sonivo klingt).

**Aktuelle Metriken (Phase 1):**
Site ist live (Bootstrap-Stand). Keine Leads bisher, Lead-Formular kommt in Phase 6.

---

## Cross-Refs

- **Implementation Plan:** `docs/06-IMPLEMENTATION_PLAN.md`
- **Content Plan (Sektion-Mapping):** `docs/02-CONTENT_PLAN.md` *(Conflict mit KB: Pricing + Hero-Headline — KB ist canonical)*
- **Knowledge Base:** `KnowledgeHub/3) OpenaI/AI_Service_Operator_Knowledge_Base.md`
- **CEO/CFO-Modus:** `KnowledgeHub/3) OpenaI/Wettbewerb.md`
- **Brand-Konstante:** `website/src/lib/brand.ts`
