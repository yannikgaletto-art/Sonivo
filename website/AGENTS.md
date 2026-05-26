<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Mobile-First: iPhone-perfekt ist Pflicht, nicht Bonus

**Iron Rule:** Jede Änderung an der Website wird auf iPhone-Größe (375 px = iPhone SE) UND iPhone 14 Pro (393 px) verifiziert, **bevor** committed wird. Desktop-Look reicht nicht.

## Pflicht-Workflow für jede Sektion-Edit

1. `npm run dev` → http://localhost:3000
2. Chrome DevTools öffnen (`Cmd + Opt + I`)
3. Device Toolbar aktivieren (`Cmd + Shift + M`)
4. Dropdown oben → **iPhone SE** (375 × 667)
5. Alle Sektionen durchscrollen — Header, Hero, Scenario, Delivery, Pricing, Process, Comparison, Footer
6. Dann **iPhone 14 Pro** (393 × 852) — gleicher Durchgang
7. Erst dann `git commit`

## Hard Constraints (bei Verletzung: Push verweigern)

| Constraint | Wert | Warum |
|---|---|---|
| Tap-Targets (CTAs, Buttons) | ≥ 44 × 44 px (`min-h-11` + `px-5+`) | iOS Human Interface Guideline |
| Horizontal-Scroll | ❌ verboten | Bricht Mobile-UX. Achtung bei `lg:scale-*`, fixen Breiten, `overflow-visible` mit Absolut-Position |
| H1 auf 375 px | max 4 Zeilen | Mehr = Hero-Krise, Headline kürzen |
| Section-Padding mobil | `py-14` (3.5 rem / 56 px) | `py-20` (80 px) ist auf 375 px zu viel Luft |
| Card-Padding mobil | `p-6` (1.5 rem / 24 px) | `p-8`/`p-10`/`p-12` ist auf 375 px zu fett |
| Body-Text mobil | `text-sm` (14 px), nicht `text-base` ohne Skala | 16 px reißt Cards auf |
| `100vh` | ❌ verboten | Safari-Bug → `100svh` oder `min-h-screen` mit Vorsicht |

## Standard-Skalen (Default für neue Sektionen)

```tsx
// Section-Padding
<section className="py-14 md:py-28">

// H1 (nur Hero)
<h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl">

// H2 (Section-Headlines)
<h2 className="text-3xl sm:text-4xl md:text-5xl">

// H3 (Card-Titles)
<h3 className="text-2xl sm:text-3xl md:text-4xl">

// Body
<p className="text-sm sm:text-base md:text-lg">

// Eyebrow / Caps-Labels
<p className="text-[11px] md:text-xs tracking-[0.18em] uppercase">

// CTA-Button
<Link className="inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-3 text-sm font-medium">

// Card mit responsivem Padding
<article className="p-6 sm:p-8 md:p-12">
```

## Header-Spezial

Auf Mobil zeigt der Header NUR:
- Logo (links)
- Primary CTA "Erstgespräch buchen" (rechts)

Versteckt:
- Nav-Items: `hidden lg:flex`
- Sprach-Switcher: `hidden md:flex`
- Telefon-Link: `hidden md:flex`

Falls später Hamburger-Menu nötig → eigener Sub-Task, nicht inline.

## Grid-Stacking

Alle `lg:grid-cols-*` müssen auf Mobil zu **`grid-cols-1`** stacken. Keine `md:grid-cols-2` ohne Default `grid-cols-1` davor. Sonst bricht das Layout zwischen 640 px und md (768 px).

## Common Mobile-Bugs (Checkliste vor Push)

- [ ] Sticky-Header verdeckt H1 auf Hero nicht (Hero-padding-top reicht)
- [ ] CTAs stacken statt zu überlaufen (`flex-wrap`)
- [ ] Trust-Pills wrappen sauber (`flex-wrap` + `gap-y-2`)
- [ ] Cards mit `lg:scale-[1.02]` brechen nicht aus dem Viewport
- [ ] Cursive-Font (Caveat) bleibt auf Sub-`<span class="block">` nach Line-Break sichtbar
- [ ] Lange deutsche Komposita (z.B. "Notfalltriage") brechen sauber, kein Overflow

## Pre-Push Pentest (zusätzlich zu den 3 aus AGENTS.md)

4. **Mobile-Tester:** Chrome Device-Mode iPhone SE + iPhone 14 Pro durchgescrollt. ✅ / ❌
   - Bei ❌: Push verweigern, fixen, neu testen.
