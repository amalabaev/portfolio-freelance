import type { Metadata } from "next";
import { EngineeringPage } from "../../EngineeringPage";

const title = "Engineering profile — Aliaskar Malabaev";
const description = "Full-stack capabilities across product architecture, React, Laravel, Node.js, data, testing, Docker and AI integrations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/engineering",
    languages: { "fr-FR": "/engineering", "en-US": "/en/engineering" },
  },
  openGraph: { title, description, locale: "en_US", images: ["/og-en.png"] },
  twitter: { title, description, images: ["/og-en.png"] },
};

export default function EnglishEngineering() {
  return <EngineeringPage locale="en" />;
}
