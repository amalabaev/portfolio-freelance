import type { Metadata } from "next";
import { PortfolioPage } from "../PortfolioPage";

const title = "Aliaskar Malabaev — Freelance full-stack web developer";
const description = "Website redesigns, bespoke web applications, automation and integrations by a product-minded full-stack developer.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en",
    languages: { "fr-FR": "/", "en-US": "/en" },
  },
  openGraph: {
    title,
    description,
    locale: "en_US",
    images: [{ url: "/og-en.png", width: 1735, height: 907, alt: "Aliaskar Malabaev — Freelance full-stack web developer" }],
  },
  twitter: { title, description, images: ["/og-en.png"] },
};

export default function EnglishHome() {
  return <PortfolioPage locale="en" />;
}
