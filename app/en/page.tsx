import type { Metadata } from "next";
import { PortfolioPage } from "../PortfolioPage";

const title = "Freelance web, mobile and AI integration developer | Aliaskar Malabaev";
const description = "Based in Bishkek, Aliaskar Malabaev builds websites and mobile apps and integrates AI into business workflows and customer-facing products.";

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
