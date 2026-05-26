# 03 — Stack Setup: Vercel + GitHub + Supabase

**Stand:** 2026-05-26 · **Ziel-Account:** `yannikgaletto-art` (Yanniks eigener GitHub, eigener Vercel)

> Step-by-step. Pfade und Klicks sind nummeriert, weil Yannik nicht-technisch ist.

---

## Voraussetzungen (Check vor Start)

- [ ] GitHub-Account `yannikgaletto-art` — eingeloggt im Browser
- [ ] Vercel-Account verbunden mit GitHub (CLI-Login: `vercel whoami` → `yannikgaletto-art`)
- [ ] Supabase-Account erstellt (https://supabase.com) — kostenlos, EU-Region
- [ ] Node.js + npm lokal vorhanden (`node -v`, `npm -v`)

---

## Phase 1.1: Code von peira-landing-v2 nach Sonivo/website/ kopieren

**WICHTIG:** Nicht den ganzen Ordner kopieren. Nur was wir brauchen.

```bash
cd /Users/yannik/Sonivo/website

# Wir kopieren OHNE node_modules, .next, HANDOVER.md
rsync -av \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='.git' \
  --exclude='HANDOVER.md' \
  --exclude='Anfangsbild.png' \
  --exclude='Endbild.png' \
  --exclude='tsconfig.tsbuildinfo' \
  /Users/yannik/peira-landing-v2/ \
  /Users/yannik/Sonivo/website/
```

**Verifikation:**
```bash
ls /Users/yannik/Sonivo/website/
# Erwartung: src/, public/, package.json, tsconfig.json, next.config.ts, etc.
# OHNE node_modules/, .next/, HANDOVER.md
```

---

## Phase 1.2: peira-Branding entfernen

```bash
cd /Users/yannik/Sonivo/website

# Alle peira-Vorkommen anzeigen (nicht löschen!)
grep -ri "peira" src/ --exclude-dir=node_modules | head -50

# Nach Sichtung: ersetzen (case-sensitive)
# Mit Vorsicht, Backup nicht vergessen
```

**Backup vor Ersetzung:**
```bash
git init
git add .
git commit -m "Initial copy from peira-landing-v2 — pre-rebrand baseline"
```

---

## Phase 1.3: Local Dev starten

```bash
cd /Users/yannik/Sonivo/website
npm install
PORT=3002 npm run dev
```

→ Öffne http://localhost:3002 — Site sollte rendern (noch mit peira-Texten).

**Konflikt-Check:** peira-landing-v2 läuft auf Port 3001. Sonivo nutzt 3002 → parallel möglich.

---

## Phase 1.4: GitHub-Repo erstellen

**Click-Pfad (yannikgaletto-art Account):**

1. https://github.com/new öffnen
2. Repository name: `sonivo-landing` (oder finaler Name aus docs/01-NAMING.md)
3. Description: "Sonivo — AI-Operator für lokale Servicebetriebe (Landing Page)"
4. **Private** wählen (bis Launch öffentlich gemacht wird)
5. README/`.gitignore`/Lizenz NICHT erstellen lassen (wir haben schon Files)
6. Klick "Create repository"

**Lokal pushen:**
```bash
cd /Users/yannik/Sonivo/website
git remote add origin https://github.com/yannikgaletto-art/sonivo-landing.git
git branch -M main
git push -u origin main
```

---

## Phase 1.5: Vercel-Projekt anlegen

**Click-Pfad:**

1. https://vercel.com/new öffnen
2. "Import Git Repository" → `yannikgaletto-art/sonivo-landing` auswählen
3. Project Name: `sonivo-landing`
4. Framework Preset: **Next.js** (sollte automatisch erkannt werden)
5. Root Directory: `./` (default)
6. Environment Variables: leer lassen (Supabase-Keys kommen später)
7. "Deploy" klicken

**Verifikation:** Build sollte in 1-3 Minuten grün durchlaufen. URL z.B. `sonivo-landing-xxx.vercel.app`.

---

## Phase 1.6: Supabase-Projekt anlegen

**Click-Pfad:**

1. https://supabase.com/dashboard öffnen
2. "New project"
3. Organization: erstellen falls noch nicht da (z.B. "Sonivo")
4. Project Name: `sonivo`
5. Database Password: **starkes Passwort** (1Password speichern!)
6. Region: **Frankfurt (eu-central-1)** — DSGVO-konform
7. Pricing Plan: **Free** (für Start)
8. "Create new project" klicken (dauert ~2 Min)

**Erste Tabelle für Lead-Formular:**

```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  email text not null,
  name text,
  branche text,
  betrieb_groesse text,
  message text,
  source text default 'landing'
);

-- RLS aktivieren
alter table leads enable row level security;

-- Insert-Policy: nur via Service-Role-Key (Server-Side)
create policy "no public reads" on leads for select using (false);
```

**Keys aus Supabase Dashboard:**

1. **Settings → API** öffnen
2. Notieren (niemals committen!):
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public key` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role key` → `SUPABASE_SERVICE_ROLE_KEY` (NUR Server-Side!)

---

## Phase 1.7: Env-Variables in Vercel setzen

**Click-Pfad Vercel:**

1. Project öffnen → "Settings" Tab
2. "Environment Variables" im linken Menü
3. Add für jede Variable:
   - `NEXT_PUBLIC_SUPABASE_URL` = aus Supabase
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = aus Supabase
   - `SUPABASE_SERVICE_ROLE_KEY` = aus Supabase (Mark as Sensitive)
4. Environment: **Production, Preview, Development** alle anhaken
5. "Save"

**Lokal in `.env.local`** (nicht committen!):

```bash
# /Users/yannik/Sonivo/website/.env.local
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...
```

`.env.local` muss in `.gitignore` stehen — checken!

---

## Phase 1.8: Verifikation End-to-End

- [ ] `npm run dev` startet ohne Fehler auf Port 3002
- [ ] Vercel-Preview-Deploy ist grün
- [ ] Supabase-Tabelle `leads` ist erreichbar (Test-Insert via SQL-Editor)
- [ ] `.env.local` ist in `.gitignore`
- [ ] `grep -ri "peira" website/src/` → sollte später leer sein (nach Phase 2 Content-Rebrand)

---

## Phase 2 Vorschau: Domain anbinden

Nach finaler Naming-Entscheidung:

1. Domain bei Strato/Hetzner/Namecheap kaufen
2. Vercel Settings → Domains → "Add Domain"
3. DNS-Records (A + CNAME) bei Domain-Provider eintragen
4. Vercel verifiziert automatisch (5-30 Min)

**Subdomains:**
- `app.<domain>` für späteres Pilot-Dashboard
- `status.<domain>` für Statuspage (optional)

---

## Sicherheits-Check vor jedem Push

Pre-Push-Pentest aus Sicht CTO + QA + Senior Software Tester:

1. **CTO:** Sind echte Keys in den committed Files? `grep -rE "(SUPABASE|SECRET|KEY|TOKEN).*=.*[a-zA-Z0-9]{20,}" .` → muss leer sein
2. **QA:** Build lokal grün? `npm run build` → Exit 0
3. **Senior Tester:** Funktioniert die Site mit `next start` (Production-Mode)?

Bei ❌ Push verweigern.
