import Link from "next/link";
import { BRAND } from "@/lib/brand";

const NAV_ITEMS = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pakete", href: "#pakete" },
  { label: "Vorgehen", href: "#vorgehen" },
  { label: "Testing", href: "#testing" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="sticky top-4 z-40 mx-auto w-full max-w-[1240px] px-4">
      <nav className="flex items-center justify-between gap-6 rounded-full border border-line/60 bg-cream-soft/80 px-6 py-3 shadow-card backdrop-blur">
        <Link
          href="/"
          className="font-display text-2xl leading-none text-mint hover:text-forest"
        >
          {BRAND.name.toLowerCase()}
        </Link>

        <ul className="hidden items-center gap-7 text-sm text-ink/80 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Sprache wechseln"
            className="hidden items-center gap-1 rounded-full bg-cream px-3 py-1.5 text-xs text-ink ring-1 ring-line/60 md:flex"
          >
            <span aria-hidden>🇩🇪</span>
            <span className="font-medium">DE</span>
            <span aria-hidden className="text-ink/60">▾</span>
          </button>

          <a
            href={BRAND.phoneHref}
            className="hidden items-center gap-2 text-sm text-ink md:flex"
          >
            <span aria-hidden>☎</span>
            <span>{BRAND.phoneDisplay}</span>
          </a>

          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream-soft hover:bg-forest"
          >
            Erstgespräch buchen
          </Link>
        </div>
      </nav>
    </header>
  );
}
