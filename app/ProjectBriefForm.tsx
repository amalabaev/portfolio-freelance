"use client";

import { FormEvent } from "react";

type Locale = "fr" | "en";

const email = "amalabaev@gmail.com";

const copy = {
  fr: {
    name: "Nom",
    company: "Entreprise",
    website: "Site actuel",
    need: "Que voulez-vous améliorer ?",
    budget: "Budget indicatif",
    namePlaceholder: "Votre nom",
    companyPlaceholder: "Nom de votre entreprise",
    websitePlaceholder: "https://votre-site.fr",
    needPlaceholder: "Une refonte, un outil métier, une automatisation…",
    chooseBudget: "Choisir une fourchette",
    budgets: ["Moins de 3 000 €", "3 000–8 000 €", "8 000–20 000 €", "Plus de 20 000 €", "À définir ensemble"],
    submit: "Recevoir un premier avis",
    note: "Le bouton prépare un email avec votre brief. Rien n’est envoyé sans votre validation.",
    subject: "Demande de premier avis — projet web",
    labels: ["Nom", "Entreprise", "Site actuel", "Besoin", "Budget"],
  },
  en: {
    name: "Name",
    company: "Company",
    website: "Current website",
    need: "What would you like to improve?",
    budget: "Indicative budget",
    namePlaceholder: "Your name",
    companyPlaceholder: "Your company name",
    websitePlaceholder: "https://your-website.com",
    needPlaceholder: "A redesign, a business tool, an automation…",
    chooseBudget: "Choose a range",
    budgets: ["Under €3,000", "€3,000–8,000", "€8,000–20,000", "Over €20,000", "To be defined together"],
    submit: "Get an initial review",
    note: "The button prepares an email with your brief. Nothing is sent without your approval.",
    subject: "Initial review request — web project",
    labels: ["Name", "Company", "Current website", "Need", "Budget"],
  },
} as const;

export function ProjectBriefForm({ locale }: { locale: Locale }) {
  const text = copy[locale];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = ["name", "company", "website", "need", "budget"].map((key) => String(data.get(key) ?? "").trim());
    const body = text.labels.map((label, index) => `${label}: ${values[index] || "—"}`).join("\n\n");
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(text.subject)}&body=${encodeURIComponent(body)}`;
    const opened = window.open(url, "_blank");
    if (opened) opened.opener = null;
    else window.location.assign(url);
  }

  return (
    <form className="brief-form" onSubmit={handleSubmit}>
      <div className="brief-fields">
        <label>
          <span>{text.name}</span>
          <input name="name" autoComplete="name" placeholder={text.namePlaceholder} required />
        </label>
        <label>
          <span>{text.company}</span>
          <input name="company" autoComplete="organization" placeholder={text.companyPlaceholder} />
        </label>
        <label className="brief-wide">
          <span>{text.website}</span>
          <input name="website" type="url" inputMode="url" autoComplete="url" placeholder={text.websitePlaceholder} />
        </label>
        <label className="brief-wide">
          <span>{text.need}</span>
          <textarea name="need" rows={4} placeholder={text.needPlaceholder} required />
        </label>
        <label className="brief-wide">
          <span>{text.budget}</span>
          <select name="budget" defaultValue="">
            <option value="" disabled>{text.chooseBudget}</option>
            {text.budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
          </select>
        </label>
      </div>
      <div className="brief-submit">
        <button className="button button-acid" type="submit">{text.submit} <span aria-hidden="true">↗</span></button>
        <p>{text.note}</p>
      </div>
    </form>
  );
}
