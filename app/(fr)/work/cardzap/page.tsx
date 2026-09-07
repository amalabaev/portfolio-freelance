import type { Metadata } from "next";
import { CardzapCaseStudy } from "../../../CardzapCaseStudy";

const title = "Cardzap — analyse documentaire & produit IA | Aliaskar Malabaev";
const description = "Architecture et développement de Cardzap : traitements asynchrones, analyse de PDF et données vérifiables.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/work/cardzap/", languages: { "fr-FR": "/work/cardzap/", "en-US": "/en/work/cardzap/", "x-default": "/work/cardzap/" } },
  openGraph: { title, description, type: "article", locale: "fr_FR", url: "/work/cardzap/", images: [{ url: "/og-v3.png", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-v3.png"] },
};
export default function Cardzap() { return <CardzapCaseStudy locale="fr" />; }
