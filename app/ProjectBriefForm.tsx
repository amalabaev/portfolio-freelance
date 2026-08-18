"use client";

import { FormEvent, useState } from "react";

import { Icon } from "./Icon";

type Locale = "fr" | "en";

const formEndpoint = "https://formsubmit.co/ajax/1f5c10e1a1fa645be497048d08b9cb5a";

const copy = {
  fr: {
    name: "Nom",
    email: "Email",
    company: "Entreprise",
    website: "Site actuel",
    need: "Que voulez-vous améliorer ?",
    budget: "Budget indicatif",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "vous@entreprise.fr",
    companyPlaceholder: "Nom de votre entreprise",
    websitePlaceholder: "https://votre-site.fr",
    needPlaceholder: "Une refonte, un outil métier, une automatisation…",
    chooseBudget: "Choisir une fourchette",
    budgets: ["Moins de 3 000 €", "3 000–8 000 €", "8 000–20 000 €", "Plus de 20 000 €", "À définir ensemble"],
    submit: "Demander une estimation",
    submitting: "Envoi en cours…",
    note: "Votre demande est envoyée directement et reste sur cette page.",
    success: "Merci, votre demande a bien été envoyée. Je vous répondrai personnellement sous 24 heures.",
    error: "L’envoi n’a pas abouti. Réessayez dans un instant ou utilisez l’adresse email indiquée ci-dessous.",
    subject: "Demande d’estimation — projet web",
  },
  en: {
    name: "Name",
    email: "Email",
    company: "Company",
    website: "Current website",
    need: "What would you like to improve?",
    budget: "Indicative budget",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@company.com",
    companyPlaceholder: "Your company name",
    websitePlaceholder: "https://your-website.com",
    needPlaceholder: "A redesign, a business tool, an automation…",
    chooseBudget: "Choose a range",
    budgets: ["Under €3,000", "€3,000–8,000", "€8,000–20,000", "Over €20,000", "To be defined together"],
    submit: "Request an estimate",
    submitting: "Sending…",
    note: "Your request is sent directly without leaving this page.",
    success: "Thank you, your request has been sent. I’ll reply personally within 24 hours.",
    error: "The request could not be sent. Please try again shortly or use the email address below.",
    subject: "Project estimate request — web project",
  },
} as const;

export function ProjectBriefForm({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          company: String(data.get("company") ?? "").trim() || "—",
          website: String(data.get("website") ?? "").trim() || "—",
          need: String(data.get("need") ?? "").trim(),
          budget: String(data.get("budget") ?? "").trim() || "—",
          _subject: text.subject,
          _template: "table",
          _honey: String(data.get("_honey") ?? ""),
        }),
      });
      const result = await response.json() as { success?: boolean | string };
      if (!response.ok || (result.success !== true && result.success !== "true")) throw new Error("Form submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="brief-form" onSubmit={handleSubmit} onChange={() => status !== "idle" && setStatus("idle")}>
      <input className="brief-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="brief-fields">
        <label>
          <span>{text.name}</span>
          <input name="name" autoComplete="name" placeholder={text.namePlaceholder} required />
        </label>
        <label>
          <span>{text.email}</span>
          <input name="email" type="email" inputMode="email" autoComplete="email" placeholder={text.emailPlaceholder} required />
        </label>
        <label>
          <span>{text.company}</span>
          <input name="company" autoComplete="organization" placeholder={text.companyPlaceholder} />
        </label>
        <label>
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
        <button className="button button-acid" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? text.submitting : text.submit} {status !== "submitting" && <Icon name="upRight" />}
        </button>
        <p>{text.note}</p>
      </div>
      <p className={`brief-status${status === "success" ? " brief-status-success" : status === "error" ? " brief-status-error" : ""}`} aria-live="polite">
        {status === "success" ? text.success : status === "error" ? text.error : ""}
      </p>
    </form>
  );
}
