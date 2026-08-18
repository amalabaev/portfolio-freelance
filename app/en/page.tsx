import type { Metadata } from "next";
import { PortfolioPage } from "../PortfolioPage";

const title = "Aliaskar Malabaev — Web product design & development";
const description = "Aliaskar Malabaev’s portfolio: websites that earn trust, bespoke business applications and automation, from interface design to full-stack systems.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/",
    languages: { "fr-FR": "/", "en-US": "/en/", "x-default": "/" },
  },
  openGraph: {
    title,
    description,
    locale: "en_US",
    url: "/en/",
    siteName: "Aliaskar Malabaev",
    images: [{ url: "/og-en-v3.png", width: 1200, height: 630, alt: "Aliaskar Malabaev — Full-stack, product and design" }],
  },
  twitter: { title, description, images: ["/og-en-v3.png"] },
};

export default function EnglishHome() {
  return <PortfolioPage locale="en" />;
}
