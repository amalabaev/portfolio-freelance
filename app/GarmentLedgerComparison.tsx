"use client";

import { useEffect, useRef, useState } from "react";
import "./garmentledger-comparison.css";

const quantity = 40;
const contractRate = 2.5;
const invoiceRate = 3;
const contractTotal = quantity * contractRate;
const invoiceTotal = quantity * invoiceRate;

export function GarmentLedgerComparison({ locale }: { locale: "fr" | "en" }) {
  const fr = locale === "fr";
  const figure = useRef<HTMLElement>(null);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const element = figure.current;
    if (!element || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRun(current => current || 1);
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const money = (value: number, decimals = 0) => {
    const number = value.toLocaleString(fr ? "fr-FR" : "en-US", {
      minimumFractionDigits: decimals, maximumFractionDigits: decimals,
    });
    return fr ? `${number} USD` : `USD ${number}`;
  };
  const rows = [
    { label: fr ? "Montant contractuel" : "Contract amount", rate: contractRate, total: contractTotal },
    { label: fr ? "Montant facturé" : "Invoiced amount", rate: invoiceRate, total: invoiceTotal },
  ];

  return <figure id="invoice-check" className="ledger-comparison" ref={figure} data-animated={run > 0}>
    <figcaption>
      <span className="ledger-document-line">
        <span>{fr ? "Facture fictive" : "Fictional invoice"}</span>
        <span className="ledger-document-ref">DEMO-1-002</span>
      </span>
      <strong>{fr ? "Une semaine, 40 chemises" : "One week, 40 shirts"}</strong>
    </figcaption>
    <dl key={run}>
      {rows.map(({ label, rate, total }) =>
        <div className="ledger-rate-row" key={label}>
          <dt>{label}<small><span>{quantity}</span> × <span>{money(rate, 2)}</span></small></dt>
          <dd><span className="ledger-line-total">{money(total)}</span>
            <span className="ledger-rate-track" aria-hidden="true">
              <span className="ledger-rate-base" style={{ width: `${100 * contractTotal / invoiceTotal}%` }} />
              {total > contractTotal && <span className="ledger-rate-excess" />}
            </span>
          </dd>
        </div>)}
      <div className="ledger-rate-result">
        <dt>{fr ? "Écart à vérifier, hors taxes" : "Pre-tax difference to review"}</dt>
        <dd><span className="ledger-difference-total">{money(invoiceTotal - contractTotal)}</span></dd>
      </div>
    </dl>
    <button type="button" className="ledger-replay" onClick={() => setRun(current => current + 1)}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 10a8 8 0 1 1 1 7M4 4v6h6" /></svg>
      {fr ? "Rejouer la comparaison" : "Replay comparison"}
    </button>
  </figure>;
}
