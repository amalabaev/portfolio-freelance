import type { Metadata } from "next";
import { PrivacyPage } from "../../PrivacyPage";

export const metadata: Metadata = {
  title: "Confidentialité — Aliaskar Malabaev",
  description: "Les informations utilisées pour répondre aux demandes de projet envoyées à Aliaskar Malabaev.",
  alternates: { canonical: "/confidentialite/", languages: { "fr-FR": "/confidentialite/", "en-US": "/en/privacy/" } },
};
export default function Privacy() { return <PrivacyPage locale="fr" />; }
