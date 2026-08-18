import type { Metadata } from "next";
import { PlanningCaseStudy } from "../../PlanningCaseStudy";

const title = "Étude de cas : plateforme de planification opérationnelle — Aliaskar Malabaev";
const description = "Conception et développement full-stack d’une application métier de planification : drag & drop, règles métier, permissions et validations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/work/operational-planning/",
    languages: { "fr-FR": "/work/operational-planning/", "en-US": "/en/work/operational-planning/", "x-default": "/work/operational-planning/" },
  },
  openGraph: { title, description, type: "article", locale: "fr_FR", url: "/work/operational-planning/", images: [{ url: "/og-v3.png", width: 1200, height: 630, alt: "Aliaskar Malabaev — étude de cas application métier" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-v3.png"] },
};

export default function OperationalPlanningCaseStudy() {
  return <PlanningCaseStudy locale="fr" />;
}
