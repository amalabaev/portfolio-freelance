import type { Metadata } from "next";
import { MasqCaseStudy } from "../../../MasqCaseStudy";

const title = "MASQ — un jeu de bluff multijoueur sur Android | Aliaskar Malabaev";
const description = "Découvrez MASQ, le jeu mobile de bluff d’Aliaskar Malabaev. Trois captures suivent une partie du salon privé au vote. Bêta fermée Android annoncée en septembre 2026.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/work/masq/", languages: { "fr-FR": "/work/masq/", "en-US": "/en/work/masq/", "x-default": "/work/masq/" } },
  openGraph: { title, description, type: "article", locale: "fr_FR", url: "/work/masq/", images: [{ url: "/og-v3.png", width: 1200, height: 630, alt: "Portfolio d’Aliaskar Malabaev" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-v3.png"] },
};

export default function Masq() { return <MasqCaseStudy locale="fr" />; }
