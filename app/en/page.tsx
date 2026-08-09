import type { Metadata } from "next";
import { PortfolioPage } from "../PortfolioPage";

const title = "Aliaskar Malabaev — Freelance full-stack web developer";
const description = "Website redesigns, bespoke web applications, automation and integrations by a product-minded full-stack developer.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en",
    languages: { "fr-FR": "/", "en-US": "/en", "x-default": "/" },
  },
  openGraph: {
    title,
    description,
    locale: "en_US",
    url: "/en",
    siteName: "Aliaskar Malabaev",
    images: [{ url: "/og-v2.png", width: 1536, height: 1024, alt: "Aliaskar Malabaev — Full-stack, product and design" }],
  },
  twitter: { title, description, images: ["/og-v2.png"] },
};

export default function EnglishHome() {
  return <PortfolioPage locale="en" />;
}
