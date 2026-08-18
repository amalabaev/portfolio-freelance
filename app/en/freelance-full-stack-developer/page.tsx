import type { Metadata } from "next";
import { FreelanceSeoPage } from "../../FreelanceSeoPage";

const title = "Freelance full-stack developer — Aliaskar Malabaev";
const description = "Aliaskar Malabaev, freelance full-stack developer for website redesigns, business applications, React, Laravel, Node.js, APIs, automation and AI.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/freelance-full-stack-developer/",
    languages: { "fr-FR": "/developpeur-full-stack-freelance/", "en-US": "/en/freelance-full-stack-developer/", "x-default": "/developpeur-full-stack-freelance/" },
  },
  openGraph: { title, description, type: "website", locale: "en_US", url: "/en/freelance-full-stack-developer/", images: [{ url: "/og-en-v3.png", width: 1200, height: 630, alt: "Aliaskar Malabaev — Freelance full-stack developer" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-en-v3.png"] },
};

export default function EnglishFreelanceFullStackDeveloper() {
  return <FreelanceSeoPage locale="en" />;
}
