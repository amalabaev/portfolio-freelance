import type { Metadata } from "next";
import "./globals.css";

const origin = "https://amalabaev.com";
const title = "Aliaskar Malabaev — Développeur web full-stack freelance";
const description = "Refonte de sites vieillissants, applications web sur mesure, automatisations et intégrations par un développeur full-stack orienté produit.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${origin}/#aliaskar-malabaev`,
      name: "Aliaskar Malabaev",
      url: origin,
      email: "mailto:amalabaev@gmail.com",
      jobTitle: "Développeur web full-stack freelance",
      knowsLanguage: ["fr", "en"],
      sameAs: ["https://github.com/amalabaev"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${origin}/#service`,
      name: "Aliaskar Malabaev — Full-stack web development",
      url: origin,
      email: "amalabaev@gmail.com",
      founder: { "@id": `${origin}/#aliaskar-malabaev` },
      description,
      availableLanguage: ["French", "English"],
      serviceType: ["Website redesign", "Bespoke web application development", "Automation and API integrations"],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "fr_FR",
    images: [{ url: `${origin}/og.png`, width: 1735, height: 907, alt: "Aliaskar Malabaev — Développeur web full-stack freelance" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${origin}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
