import type { Metadata } from "next";
import { GarmentLedgerCaseStudy } from "../../../GarmentLedgerCaseStudy";

const title = "GarmentLedger — du tarif au suivi de l’avoir | Aliaskar Malabaev";
const description = "Une étude de cas sur le contrôle des factures de vêtements de travail, la revue des écarts et le suivi des avoirs, illustrée par une démonstration sur données fictives.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/work/garmentledger/", languages: { "fr-FR": "/work/garmentledger/", "en-US": "/en/work/garmentledger/", "x-default": "/work/garmentledger/" } },
  openGraph: { title, description, type: "article", locale: "fr_FR", url: "/work/garmentledger/", images: [{ url: "/og-v3.png", width: 1200, height: 630, alt: "Portfolio d’Aliaskar Malabaev" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-v3.png"] },
};

export default function GarmentLedger() { return <GarmentLedgerCaseStudy locale="fr" />; }
