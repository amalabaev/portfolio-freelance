import type { Metadata } from "next";
import { PlanningCaseStudy } from "../../../PlanningCaseStudy";

const title = "Case study: operational workforce planning platform — Aliaskar Malabaev";
const description = "Full-stack product design and development for a workforce planning application with drag and drop, business rules, permissions and validation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/work/operational-planning",
    languages: { "fr-FR": "/work/operational-planning", "en-US": "/en/work/operational-planning", "x-default": "/work/operational-planning" },
  },
  openGraph: { title, description, type: "article", locale: "en_US", url: "/en/work/operational-planning", images: [{ url: "/og-en-v3.png", width: 1200, height: 630, alt: "Aliaskar Malabaev — business application case study" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-en-v3.png"] },
};

export default function EnglishOperationalPlanningCaseStudy() {
  return <PlanningCaseStudy locale="en" />;
}
