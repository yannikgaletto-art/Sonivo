import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import { BRAND } from "@/lib/brand";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.name} — AI-Operator für lokale Servicebetriebe`,
  description:
    "Nie wieder verlorene Aufträge durch verpasste Anrufe. Der AI-Operator nimmt an, qualifiziert und übergibt Anliegen direkt in Ihr CRM, Ticketsystem oder zum Team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
