import type { Metadata } from "next";
import "./globals.css";

const origin = "https://amalabaev.com";
const title = "Développeur freelance web, mobile et intégration IA | Aliaskar Malabaev";
const description = "Depuis Bichkek, Aliaskar Malabaev crée des sites et des applications web et mobiles, et intègre l’IA aux outils internes et aux produits de ses clients.";
const linkedIn = "https://fr.linkedin.com/in/aliaskar-malabaev-6850a0130";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${origin}/#aliaskar-malabaev`,
      name: "Aliaskar Malabaev",
      url: origin,
      image: `${origin}/aliaskar-malabaev.jpg`,
      email: "mailto:amalabaev@gmail.com",
      jobTitle: "Développeur full-stack freelance",
      knowsLanguage: ["fr", "en", "ru"],
      sameAs: ["https://github.com/amalabaev", linkedIn],
      knowsAbout: ["Full-stack web development", "Mobile applications", "AI integration", "React", "TypeScript", "Laravel", "Node.js", "Business applications", "Web design", "Automation"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${origin}/#service`,
      name: "Aliaskar Malabaev — Web, mobile & AI development",
      url: origin,
      email: "amalabaev@gmail.com",
      founder: { "@id": `${origin}/#aliaskar-malabaev` },
      description,
      areaServed: "France",
      availableLanguage: ["French", "English", "Russian"],
      serviceType: ["Website redesign", "Bespoke web applications", "Mobile app development", "AI integration and automation"],
    },
    {
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      url: origin,
      name: "Aliaskar Malabaev — Web, mobile et intégration IA",
      description,
      inLanguage: ["fr-FR", "en-US"],
      author: { "@id": `${origin}/#aliaskar-malabaev` },
    },
  ],
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(origin),
  title,
  description,
  applicationName: "Aliaskar Malabaev — Portfolio freelance",
  authors: [{ name: "Aliaskar Malabaev", url: origin }],
  creator: "Aliaskar Malabaev",
  publisher: "Aliaskar Malabaev",
  category: "technology",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/favicon.png", sizes: "512x512", type: "image/png" }],
  },
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

export function Document({ children, locale }: Readonly<{ children: React.ReactNode; locale: "fr" | "en" }>) {
  return (
    <html lang={locale}>
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
