import type { Metadata } from "next";
import "./globals.css";

const origin = "https://amalabaev.com";
const title = "Aliaskar Malabaev — Développeur web full-stack freelance";
const description = "Sites vitrines rapides, modernes et sur mesure en React et Node.js pour indépendants, cabinets et petites entreprises.";

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
      <body>{children}</body>
    </html>
  );
}
