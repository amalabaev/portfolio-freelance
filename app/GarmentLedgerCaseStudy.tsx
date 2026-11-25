import { Icon } from "./Icon";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import "./garmentledger-case.css";

const copy = {
  fr: {
    category: "GarmentLedger · Application métier",
    title: "Du tarif prévu au contrat",
    titleEnd: "jusqu’à l’avoir reçu",
    intro: "J’ai développé GarmentLedger pour les équipes qui contrôlent les factures de location de vêtements de travail. Le logiciel repère les lignes à vérifier et permet de suivre la réponse du fournisseur jusqu’à l’imputation d’un avoir.",
    status: "Produit en ligne en français et en anglais. Pilote privé sur invitation.",
    product: "Voir le site du produit",
    example: "Une ligne de facture fictive",
    comparison: "Location de 40 articles pour une semaine",
    contract: "Montant contractuel",
    contractCalc: "40 × 2,50 USD",
    contractAmount: "100 USD",
    invoice: "Montant facturé",
    invoiceCalc: "40 × 3,00 USD",
    invoiceAmount: "120 USD",
    difference: "Écart à vérifier, hors taxes",
    amount: "20 USD",
    reviewTitle: "Vérifier l’écart avant de le confirmer",
    reviewBody: "Le contrôle compare le tarif de la ligne avec la règle approuvée pour l’article et la période. Dans cet exemple, chaque article est facturé 0,50 USD de plus que prévu. La personne chargée de la revue relit le calcul et la référence du contrat, puis consigne sa décision.",
    reviewCaption: "Écran d’audit en anglais. L’écart de 20 USD attend encore une décision.",
    reviewAlt: "Le contrôle affiche 40 articles, 120 USD facturés, 100 USD attendus et un écart potentiel de 20 USD à vérifier.",
    creditTitle: "Suivre ce qu’il reste à régler",
    creditBody: "Une fois la correction acceptée par le fournisseur, l’équipe rattache l’avoir au dossier et conserve le justificatif de son imputation. Les trois montants ci-dessous suivent la même correction au fil du temps.",
    accepted: "Correction acceptée",
    received: "Avoir reçu",
    applied: "Avoir imputé",
    outstanding: "Il reste 5 USD d’avoir à recevoir et 5 USD de l’avoir reçu à imputer. Ce scénario utilise uniquement des données fictives.",
    creditCaption: "Extrait en anglais du PDF exporté par GarmentLedger pour ce dossier fictif.",
    creditAlt: "Le PDF récapitule 20 USD acceptés, 15 USD d’avoir affectés au dossier et 10 USD imputés avec justificatif.",
    enlarge: "Agrandir la capture",
    ctaTitle: "Quel contrôle votre équipe refait-elle à la main ?",
    ctaText: "Partons d’une règle, d’un exemple anonymisé et de la décision que votre équipe doit prendre quand les montants diffèrent.",
    cta: "Discuter de mon outil métier",
    back: "Tous les projets",
  },
  en: {
    category: "GarmentLedger · Business application",
    title: "From the agreed rate",
    titleEnd: "to the supplier’s credit note",
    intro: "I built GarmentLedger for teams that check workwear rental invoices. It flags lines that need review and helps the team track the supplier’s response until a credit is applied.",
    status: "Live in English and French. Private pilot by invitation.",
    product: "Visit the product site",
    example: "A fictional invoice line",
    comparison: "One week’s rental of 40 items",
    contract: "Contract amount",
    contractCalc: "40 × USD 2.50",
    contractAmount: "USD 100",
    invoice: "Invoiced amount",
    invoiceCalc: "40 × USD 3.00",
    invoiceAmount: "USD 120",
    difference: "Pre-tax difference to review",
    amount: "USD 20",
    reviewTitle: "Check the discrepancy before confirming it",
    reviewBody: "The software compares the invoice line with the approved rate for the item and billing period. Here, each item costs USD 0.50 more than agreed. The reviewer checks the calculation against the contract reference and records a decision.",
    reviewCaption: "The audit screen shows a USD 20 difference awaiting human review.",
    reviewAlt: "The audit shows 40 items, USD 120 invoiced, USD 100 expected and a potential difference of USD 20 to review.",
    creditTitle: "See what is still outstanding",
    creditBody: "Once the supplier accepts the correction, the team links the credit note to the case and records evidence of the amount applied. The three amounts below track that same correction over time.",
    accepted: "Correction accepted",
    received: "Credit received",
    applied: "Credit applied",
    outstanding: "USD 5 is still due from the supplier. Another USD 5 of the credit already received is waiting to be applied. This example uses fictional data throughout.",
    creditCaption: "An excerpt from the PDF that GarmentLedger exported for this fictional case.",
    creditAlt: "The PDF records USD 20 accepted, USD 15 in credit allocated to the case and USD 10 applied with evidence.",
    enlarge: "Enlarge screenshot",
    ctaTitle: "Which check does your team still run by hand?",
    ctaText: "Let’s start with one rule, an anonymised example and the decision your team needs to make when the amounts differ.",
    cta: "Discuss my business application",
    back: "All projects",
  },
};

function ProductScreen({ file, width, height, alt, caption, enlarge }: {
  file: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  enlarge: string;
}) {
  const src = `/garmentledger/${file}.webp`;
  return <figure className="ledger-screen">
    <a href={src} aria-label={`${enlarge} — ${caption}`}>
      <img src={src} alt={alt} width={width} height={height} loading="lazy" />
      <span className="ledger-screen-action">{enlarge}<Icon name="upRight" size={14} /></span>
    </a>
    <figcaption>{caption}</figcaption>
  </figure>;
}

export function GarmentLedgerCaseStudy({ locale }: { locale: keyof typeof copy }) {
  const c = copy[locale];
  const fr = locale === "fr";
  const home = fr ? "/" : "/en/";
  const stages = [
    [c.accepted, fr ? "20 USD" : "USD 20"],
    [c.received, fr ? "15 USD" : "USD 15"],
    [c.applied, fr ? "10 USD" : "USD 10"],
  ];

  return <>
    <SiteHeader locale={locale} current={`${home}work/garmentledger/`} alternate={fr ? "/en/work/garmentledger/" : "/work/garmentledger/"} />
    <main id="main-content" tabIndex={-1} className="ledger-case">
      <section className="ledger-shell ledger-hero">
        <div>
          <p className="ledger-kicker">{c.category}</p>
          <h1>{c.title} <em>{c.titleEnd}</em></h1>
          <p className="ledger-intro">{c.intro}</p>
          <p className="ledger-status">{c.status}</p>
          <a className="ledger-link" href="https://garmentledger.com/product">{c.product}<Icon name="upRight" size={15} /></a>
        </div>
        <figure className="ledger-calculation">
          <figcaption>{c.example}</figcaption>
          <p className="ledger-calculation-title">{c.comparison}</p>
          <dl>
            <div><dt>{c.contract}<span>{c.contractCalc}</span></dt><dd>{c.contractAmount}</dd></div>
            <div><dt>{c.invoice}<span>{c.invoiceCalc}</span></dt><dd>{c.invoiceAmount}</dd></div>
            <div className="ledger-difference"><dt>{c.difference}</dt><dd>{c.amount}</dd></div>
          </dl>
        </figure>
      </section>
      <section className="ledger-shell ledger-step" aria-labelledby="ledger-review">
        <div className="ledger-explanation">
          <h2 id="ledger-review">{c.reviewTitle}</h2>
          <p>{c.reviewBody}</p>
        </div>
        <ProductScreen file="controle" width={670} height={692} alt={c.reviewAlt} caption={c.reviewCaption} enlarge={c.enlarge} />
      </section>
      <section className="ledger-settlement" aria-labelledby="ledger-credit">
        <div className="ledger-shell ledger-step">
          <div className="ledger-explanation">
            <h2 id="ledger-credit">{c.creditTitle}</h2>
            <p>{c.creditBody}</p>
            <dl className="ledger-stages">{stages.map(([label, amount]) =>
              <div key={label}><dt>{label}</dt><dd>{amount}</dd></div>
            )}</dl>
            <p className="ledger-outstanding">{c.outstanding}</p>
          </div>
          <ProductScreen file="avoir" width={1024} height={472} alt={c.creditAlt} caption={c.creditCaption} enlarge={c.enlarge} />
        </div>
      </section>
      <section className="engineering-cta ledger-cta">
        <h2>{c.ctaTitle}</h2><p>{c.ctaText}</p>
        <div><a className="button button-acid" href={`${home}?need=web#contact`}>{c.cta}<Icon name="upRight" /></a>
          <a className="text-link" href={`${home}#work`}>{c.back}<Icon name="right" /></a></div>
      </section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}
