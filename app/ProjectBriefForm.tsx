"use client";

import { FormEvent, useRef, useState } from "react";
import { createBriefSender, normalizeWebsite } from "./lib/brief";

import { Icon } from "./Icon";

type Locale = "fr" | "en";

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
    note: "Premier échange gratuit : périmètre et prochaines étapes, puis budget et délai lorsque le besoin est précisé.",
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
    note: "Free initial conversation: scope and next steps, then budget and timing once the brief is clear.",
    success: "Thank you, your request has been sent. I’ll reply personally within 24 hours.",
    error: "The request could not be sent. Please try again shortly or use the email address below.",
    subject: "Project estimate request — web project",
  },
} as const;

export function ProjectBriefForm({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const sender = useRef<ReturnType<typeof createBriefSender> | null>(null);
  const busy = useRef(false);
  const [timedOut, setTimedOut] = useState(false);
  const fr = locale === "fr";
  const optional = fr ? "facultatif" : "optional";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    for (const name of ["name", "need"]) {
      const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
      field.setCustomValidity(field.value.trim() ? "" : fr ? "Merci de renseigner ce champ." : "Please complete this field.");
    }
    const websiteField = form.elements.namedItem("website") as HTMLInputElement;
    let website = "";
    try {
      website = normalizeWebsite(websiteField.value);
      websiteField.setCustomValidity("");
    } catch {
      websiteField.setCustomValidity(fr ? "Indiquez une adresse comme entreprise.fr." : "Enter an address such as company.com.");
    }
    if (!form.reportValidity()) return;
    // A hidden field filled by a bot never triggers a request.
    if (String(data.get("_honey") ?? "")) return;
    busy.current = true;
    setTimedOut(false);
    setStatus("submitting");

    try {
      sender.current ??= createBriefSender();
      await sender.current({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          company: String(data.get("company") ?? "").trim() || "—",
          website: website || "—",
          need: String(data.get("need") ?? "").trim(),
          budget: String(data.get("budget") ?? "").trim() || "—",
          _subject: text.subject,
          _template: "table",
          _honey: String(data.get("_honey") ?? ""),
      });
      form.reset();
      setStatus("success");
    } catch (error) {
      setTimedOut(error instanceof Error && (error.message === "confirmation-timeout" || error.name === "AbortError"));
      setStatus("error");
    } finally {
      busy.current = false;
    }
  }

  return (
    <form className="brief-form" onSubmit={handleSubmit} aria-busy={status === "submitting"} onInput={(event) => {
      const field = event.target;
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) field.setCustomValidity("");
    }} onChange={() => {
      if (!busy.current && status !== "idle") setStatus("idle");
    }}>
      <p className="brief-required-note">{fr ? "Nom, email et besoin sont nécessaires pour vous répondre." : "Name, email and project details are needed to reply."}</p>
      <fieldset disabled={status === "submitting"}>
      <legend className="sr-only">{fr ? "Décrire mon projet" : "Describe my project"}</legend>
      <input className="brief-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="brief-fields">
        <label>
          <span>{text.name}</span>
          <input name="name" autoComplete="name" placeholder={text.namePlaceholder} maxLength={120} required />
        </label>
        <label>
          <span>{text.email}</span>
          <input name="email" type="email" inputMode="email" autoComplete="email" placeholder={text.emailPlaceholder} maxLength={254} required />
        </label>
        <label>
          <span>{text.company} <em>{optional}</em></span>
          <input name="company" autoComplete="organization" placeholder={text.companyPlaceholder} maxLength={200} />
        </label>
        <label>
          <span>{text.website} <em>{optional}</em></span>
          <input name="website" type="text" inputMode="url" autoComplete="url" placeholder={fr ? "votre-site.fr" : "your-website.com"} maxLength={2048} />
        </label>
        <label className="brief-wide">
          <span>{text.need}</span>
          <textarea name="need" rows={4} placeholder={text.needPlaceholder} maxLength={6000} required />
        </label>
        <label className="brief-wide">
          <span>{text.budget} <em>{optional}</em></span>
          <select name="budget" defaultValue="">
            <option value="">{text.chooseBudget}</option>
            {text.budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
          </select>
        </label>
      </div>
      </fieldset>
      <div className="brief-submit">
        <button className="button button-acid" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? text.submitting : text.submit} {status !== "submitting" && <Icon name="upRight" />}
        </button>
        <p>{text.note}</p>
      </div>
      <p className={`brief-status${status === "success" ? " brief-status-success" : status === "error" ? " brief-status-error" : ""}`} aria-live="polite">
        {status === "success" ? text.success : status === "error" ? (timedOut ? (fr ? "La confirmation tarde à arriver. Votre demande a peut-être été reçue ; contactez-moi par email avant de la renvoyer." : "Confirmation is taking longer than expected. Your request may have arrived; please email me before sending it again.") : text.error) : ""}
      </p>
      <p className="brief-required-note">{fr ? "Envoi via FormSubmit à Aliaskar Malabaev pour répondre à votre demande. " : "Sent through FormSubmit to Aliaskar Malabaev to respond to your request. "}<a href={fr ? "/confidentialite/" : "/en/privacy/"}>{fr ? "Utilisation des données" : "Use of your data"}</a></p>
    </form>
  );
}
