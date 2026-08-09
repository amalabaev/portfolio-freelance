import type { Metadata } from "next";
import { FreelanceSeoPage } from "../FreelanceSeoPage";

const title = "Développeur full-stack freelance — Aliaskar Malabaev";
const description = "Aliaskar Malabaev, développeur full-stack freelance : refonte de sites, applications métier, React, Laravel, Node.js, API, automatisation et IA.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/developpeur-full-stack-freelance",
    languages: { "fr-FR": "/developpeur-full-stack-freelance", "en-US": "/en/freelance-full-stack-developer", "x-default": "/developpeur-full-stack-freelance" },
  },
  openGraph: { title, description, type: "website", locale: "fr_FR", url: "/developpeur-full-stack-freelance", images: [{ url: "/og-v2.png", width: 1536, height: 1024, alt: "Aliaskar Malabaev — Développeur full-stack freelance" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-v2.png"] },
};

export default function FreelanceFullStackDeveloper() {
  return <FreelanceSeoPage locale="fr" />;
}
