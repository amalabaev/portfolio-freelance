import type { Metadata } from "next";
import { CardzapCaseStudy } from "../../../CardzapCaseStudy";

const title = "Cardzap — document analysis & AI product | Aliaskar Malabaev";
const description = "Cardzap product architecture and development: background processing, PDF analysis and checkable data.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/en/work/cardzap/", languages: { "fr-FR": "/work/cardzap/", "en-US": "/en/work/cardzap/", "x-default": "/work/cardzap/" } },
  openGraph: { title, description, type: "article", locale: "en_US", url: "/en/work/cardzap/", images: [{ url: "/og-en-v3.png", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-en-v3.png"] },
};
export default function Cardzap() { return <CardzapCaseStudy locale="en" />; }
