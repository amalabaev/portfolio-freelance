import type { Metadata } from "next";
import { PortfolioPage } from "./PortfolioPage";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/", "en-US": "/en" },
  },
};

export default function Home() {
  return <PortfolioPage locale="fr" />;
}
