import type { Metadata } from "next";
import { MasqCaseStudy } from "../../../MasqCaseStudy";

const title = "MASQ — a multiplayer bluffing game on Android | Aliaskar Malabaev";
const description = "Explore Aliaskar Malabaev’s mobile bluffing game. Follow a game from its private room to the secret vote in three screenshots. Android closed beta announced in September 2026.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/en/work/masq/", languages: { "fr-FR": "/work/masq/", "en-US": "/en/work/masq/", "x-default": "/work/masq/" } },
  openGraph: { title, description, type: "article", locale: "en_US", url: "/en/work/masq/", images: [{ url: "/og-en-v3.png", width: 1200, height: 630, alt: "Aliaskar Malabaev’s portfolio" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-en-v3.png"] },
};

export default function Masq() { return <MasqCaseStudy locale="en" />; }
