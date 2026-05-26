import Link from "next/link";
import { BRAND } from "@/lib/brand";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line/60 bg-cream-soft">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link
            href="/"
            className="font-display text-3xl leading-none text-mint"
          >
            {BRAND.name.toLowerCase()}
          </Link>
          <p className="mt-3 text-sm text-ink/70">
            AI-Operator für lokale Servicebetriebe. Hosting in Deutschland,
            DSGVO-konform, EU AI Act ready.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
          <div>
            <p className="mb-3 font-medium text-ink">Produkt</p>
            <ul className="space-y-2 text-ink/70">
              <li><Link href="#leistungen" className="hover:text-ink">Leistungen</Link></li>
              <li><Link href="#use-cases" className="hover:text-ink">Use Cases</Link></li>
              <li><Link href="#pakete" className="hover:text-ink">Pakete</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-medium text-ink">Unternehmen</p>
            <ul className="space-y-2 text-ink/70">
              <li><Link href="#vorgehen" className="hover:text-ink">Vorgehen</Link></li>
              <li><Link href="#testing" className="hover:text-ink">Testing</Link></li>
              <li><Link href="#kontakt" className="hover:text-ink">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-medium text-ink">Recht</p>
            <ul className="space-y-2 text-ink/70">
              <li><Link href="/impressum" className="hover:text-ink">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-ink">Datenschutz</Link></li>
              <li><Link href="/agb" className="hover:text-ink">AGB</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-2 px-6 py-6 text-xs text-ink/60 md:flex-row md:items-center md:justify-between">
          <span>© {year} {BRAND.legalName}. Alle Rechte vorbehalten.</span>
          <span>Made in Germany · Hosting in Frankfurt</span>
        </div>
      </div>
    </footer>
  );
}
