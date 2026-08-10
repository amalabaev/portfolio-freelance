import type { Metadata } from "next";
import "./globals.css";

const origin = "https://amalabaev.com";
const title = "Aliaskar Malabaev — Développeur web full-stack freelance";
const description = "Aliaskar Malabaev, développeur full-stack freelance : refonte de sites, applications web sur mesure, React, Laravel, Node.js, API et automatisation.";
const linkedIn = "https://fr.linkedin.com/in/aliaskar-malabaev-6850a0130";

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
      sameAs: ["https://github.com/amalabaev", linkedIn],
      knowsAbout: ["Full-stack web development", "React", "TypeScript", "Laravel", "Node.js", "Business applications", "Web design", "Automation"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${origin}/#service`,
      name: "Aliaskar Malabaev — Full-stack web development",
      url: origin,
      email: "amalabaev@gmail.com",
      founder: { "@id": `${origin}/#aliaskar-malabaev` },
      description,
      areaServed: "France",
      availableLanguage: ["French", "English"],
      serviceType: ["Website redesign", "Bespoke web application development", "Automation and API integrations"],
    },
    {
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      url: origin,
      name: "Aliaskar Malabaev — Développeur full-stack freelance",
      description,
      inLanguage: ["fr-FR", "en-US"],
      author: { "@id": `${origin}/#aliaskar-malabaev` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title,
  description,
  applicationName: "Aliaskar Malabaev — Portfolio freelance",
  authors: [{ name: "Aliaskar Malabaev", url: origin }],
  creator: "Aliaskar Malabaev",
  publisher: "Aliaskar Malabaev",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "fr_FR",
    url: origin,
    siteName: "Aliaskar Malabaev",
    images: [{ url: `${origin}/og-v3.png`, width: 1200, height: 630, alt: "Aliaskar Malabaev — Full-stack, product et design" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${origin}/og-v3.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preload" href="/fonts/instrument-serif-normal-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-normal-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta name="theme-color" content="#161814" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
