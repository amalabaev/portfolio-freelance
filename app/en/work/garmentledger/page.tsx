import type { Metadata } from "next";
import { GarmentLedgerCaseStudy } from "../../../GarmentLedgerCaseStudy";

const title = "GarmentLedger — from contract rates to credit notes | Aliaskar Malabaev";
const description = "A case study in checking workwear rental invoices, reviewing discrepancies and tracking supplier credits, illustrated with fictional data in the product.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/en/work/garmentledger/", languages: { "fr-FR": "/work/garmentledger/", "en-US": "/en/work/garmentledger/", "x-default": "/work/garmentledger/" } },
  openGraph: { title, description, type: "article", locale: "en_US", url: "/en/work/garmentledger/", images: [{ url: "/og-en-v3.png", width: 1200, height: 630, alt: "Aliaskar Malabaev’s portfolio" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-en-v3.png"] },
};

export default function GarmentLedger() { return <GarmentLedgerCaseStudy locale="en" />; }
