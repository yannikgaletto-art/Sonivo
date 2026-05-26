# Sonivo — Agent Operating Rules

**Stand:** 2026-05-26 · Projekt-Wurzel: `/Users/yannik/Sonivo/`

Dieses File ist der erste Pflicht-Read für jeden Agenten in diesem Projekt. Alles andere baut darauf auf.

---

## 0. Was ist Sonivo?

Ein **eigenes, neues Projekt** von Yannik — getrennt von peira.ai (das gehört Vishal/Jan).

**Arbeitsname:** Sonivo (Folder-Name) — finale Namensentscheidung steht aus, siehe [docs/01-NAMING.md](docs/01-NAMING.md).

**North Star:** "Nie wieder verlorene Aufträge durch verpasste Anrufe."

**Was wir bauen:** Einen autonomen AI-Operations-Mitarbeiter für lokale Handwerksbetriebe (SHK, Elektrik, Dachdecker, Rohrreinigung, Kälte/Klima). Nicht ein weiterer Voice Agent, sondern ein "AI-Operator, der den Auftrag betreibt".

**Tech-Stack:** Next.js 16 + Vercel + GitHub + Supabase.

---

## 1. Pflicht-Read-Reihenfolge für jeden Agenten

1. **Dieses File** (`/Users/yannik/Sonivo/AGENTS.md`)
2. **Knowledge-DB Bootstrap:** `/Users/yannik/Sonivo/KnowledgeHub/2) KD/START_HERE_FOR_AGENTS.md`
3. **Master Skill Router:** `/Users/yannik/Sonivo/KnowledgeHub/2) KD/0) Master Skill/SKILL.md`
4. **Produkt-Knowledge-Base:** `/Users/yannik/Sonivo/KnowledgeHub/3) OpenaI/AI_Service_Operator_Knowledge_Base.md`
5. **Wettbewerb + CEO-Modus:** `/Users/yannik/Sonivo/KnowledgeHub/3) OpenaI/Wettbewerb.md`
6. **Projekt-Brief:** `/Users/yannik/Sonivo/docs/00-PROJECT_BRIEF.md`

Erst nach diesen 6 Files Code anfassen.

---

## 2. Forbidden Files & Folders

Niemals anfassen, bestenfalls als Read-Only-Referenz öffnen:

| Pfad | Grund |
|---|---|
| `/Users/yannik/peira.ai-monorepo/` | Vishals Production-Code für peira.ai |
| `/Users/yannik/peira-landing-v2/` | Yanniks peira-Landing-V2 (politisch sensibel, eigenes Repo) |
| `/Users/yannik/Sonivo/KnowledgeHub/4) Old Peira/` | Archiv-Snapshot, keine Edits |
| `.env*` Files | Keine echten Keys committen |

Bei Konflikten zwischen "Sonivo soll wie peira-landing-v2 aussehen" und "peira-landing-v2 nicht anfassen": **Kopie**, niemals direkter Import.

---

## 3. Politische Sensibilität

Yannik arbeitet parallel an peira (Co-Founder-Frame, Vishal ist Tech-Founder) und an Sonivo (eigenes Projekt). Bei jeder Aktion prüfen:

- "Ist das eine Sonivo-Aktion oder eine peira-Aktion?" → Trennung wahren
- Sonivo-Repo ist Yanniks GitHub-Account (`yannikgaletto-art`), eigenes Vercel
- Keine Aktionen die Vishals peira-Production beeinflussen können

---

## 4. User-Direktiven (gelten immer)

| Direktive | Bedeutung |
|---|---|
| **Sprache** | Antworten auf Deutsch. Fachbegriffe immer kurz erklären (Yannik ist nicht-technisch). |
| **Lean, Root-Cause** | Sauber, ordentlich, DRY. Keine Bandaid-Fixes. CTO-Mandat zum proaktiven Korrigieren. |
| **Change Impact First** | Vor jeder Änderung: Komplexität 1-5 + Kaskadenrisiko 1-5 + Simpler-Path. Bei Kaskadenrisiko ≥ 3 → Rückfrage statt Durchführung. |
| **Pre-Push Pentest** | Vor `git push`: 3 Stress-Pentests aus Sicht CTO + QA + Senior Software Tester. Tabelle liefern. Bei ❌ Push verweigern. |
| **DevTools-Pfade** | Nummerierte Klickpfade mit Menünamen. "Console" allein ist zu vage. |
| **Keine Folge-Bugs** | Wenn ein Fix einen anderen verursacht → das ist Versagen, nicht Fortschritt. |

---

## 5. CEO/CTO/CFO-Operating-Modus (aus Wettbewerb.md übernommen)

- Strategie, Produkt, Technik, Compliance, Vertrieb, Unit Economics zusammen denken.
- Optimiere auf erste zahlende Pilotkunden in 14 Tagen.
- Jede Aufgabe erzeugt ein konkretes Artefakt: Website-Copy, Demo-Flow, Leadliste, Script, Architektur, Ticket, Testfall, Preismodell.
- Keine generischen Agenturantworten. Keine Rechtsberatung erfinden. DSGVO/UWG/AI Act/Telefonaufzeichnung immer als "keine Rechtsberatung" markieren.
- Sprache nach außen: einfach, lokal, vertrauenswürdig. Nicht "KI ersetzt Mitarbeiter", sondern "KI entlastet und dokumentiert".

---

## 6. Next.js — Achtung Version

Falls Code in `website/` von peira-landing-v2 kopiert wird: Next.js 16 hat Breaking Changes gegenüber älteren Versionen. **Vor Code-Edits** im Repo `node_modules/next/dist/docs/` checken oder offizielle Migration-Notes lesen. Nicht aus dem Training-Memory schreiben.
