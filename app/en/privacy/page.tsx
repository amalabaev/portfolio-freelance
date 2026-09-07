import type { Metadata } from "next";
import { PrivacyPage } from "../../PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy — Aliaskar Malabaev",
  description: "How information is used to respond to project enquiries sent to Aliaskar Malabaev.",
  alternates: { canonical: "/en/privacy/", languages: { "fr-FR": "/confidentialite/", "en-US": "/en/privacy/" } },
};
export default function Privacy() { return <PrivacyPage locale="en" />; }
