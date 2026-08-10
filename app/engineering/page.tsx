import type { Metadata } from "next";
import { EngineeringPage } from "../EngineeringPage";

const title = "Profil technique — Aliaskar Malabaev";
const description = "Compétences full-stack, architecture produit, React, Laravel, Node.js, données, tests, Docker et intégrations IA.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/engineering",
    languages: { "fr-FR": "/engineering", "en-US": "/en/engineering", "x-default": "/engineering" },
  },
  openGraph: { title, description, locale: "fr_FR", url: "/engineering", images: ["/og-v3.png"] },
  twitter: { title, description, images: ["/og-v3.png"] },
};

export default function Engineering() {
  return <EngineeringPage locale="fr" />;
}
