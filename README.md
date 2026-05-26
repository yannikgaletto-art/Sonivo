# Sonivo

> **AI-Operator für lokale Servicebetriebe** — Voice Agents nehmen Anrufe an. Wir betreiben den Auftrag.

**Stand:** 2026-05-26 · Phase 0 (Setup)

---

## Wo bin ich?

```text
/Users/yannik/Sonivo/
├── AGENTS.md              ← Pflicht-Read 1: Operating-Rules für Claude/Agenten
├── CLAUDE.md              ← Symlink auf AGENTS.md
├── README.md              ← Du bist hier
├── docs/                  ← Projekt-Dokumentation
│   ├── 00-PROJECT_BRIEF.md     North Star, Zielgruppe, Stack
│   ├── 01-NAMING.md            Naming-Entscheidung (Sonivo vs. YInnovation)
│   ├── 02-CONTENT_PLAN.md      peira-Sections → Sonivo-Sections Mapping
│   ├── 03-STACK_SETUP.md       Vercel + GitHub + Supabase Setup (Step-by-Step)
│   └── 04-PHASE_PLAN.md        Phasen 0-5 + Estimates + Risiken
├── website/               ← Next.js-Code (noch leer, kommt in Phase 1)
└── KnowledgeHub/          ← Wissensbasis (war vorher YInnovation/KnowledgeHub)
    ├── 1) Miro/                Visuals/Boards (extern)
    ├── 2) KD/                  Knowledge Database (Generalistische Skills)
    ├── 3) OpenaI/              Produkt-Knowledge (AI Service Operator + Wettbewerb)
    └── 4) Old Peira/           Archiv-Snapshot (READ-ONLY)
```

---

## Wo anfangen?

1. **Lies `AGENTS.md`** — Operating Rules
2. **Lies `docs/00-PROJECT_BRIEF.md`** — Was wir bauen
3. **Lies `docs/01-NAMING.md`** — Naming-Entscheidung treffen
4. **Lies `docs/04-PHASE_PLAN.md`** — Was als Nächstes ansteht

---

## Tech-Stack

| Layer | Tool |
|---|---|
| Frontend | Next.js 16 + Turbopack |
| Hosting | Vercel (yanniks-projects-7665d957) |
| Repo | GitHub (yannikgaletto-art) |
| DB / Auth / Storage | Supabase (Frankfurt EU) |

---

## Nicht anfassen

- `/Users/yannik/peira.ai-monorepo/` — Vishal's Production
- `/Users/yannik/peira-landing-v2/` — Yanniks peira-Landing (separates Projekt)
- `/Users/yannik/Sonivo/KnowledgeHub/4) Old Peira/` — Archiv
