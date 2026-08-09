import type { Metadata } from "next";
import { PortfolioPage } from "./PortfolioPage";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/", "en-US": "/en", "x-default": "/" },
  },
};

export default function Home() {
  return <PortfolioPage locale="fr" />;
}
