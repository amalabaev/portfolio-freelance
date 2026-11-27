(() => {
  const copy = {
    fr: {
      caseLabel: "Retour à l’étude", pageTitle: "Contrôler une facture · GarmentLedger",
      nav: "Étapes du dossier", foot: "Dossier fictif · Montants en USD hors taxes",
      steps: ["Facture", "Contrat", "Avoir", "Solde"],
      folios: ["12–18 janv. · Facture DEMO-1-002", "12–18 janv. · Contrat", "8 févr. · Avoir DEMO-CR-001", "15 févr. · Imputation simulée"],
      titles: ["Cette facture est-elle <em>juste&nbsp;?</em>", "Quel tarif <em>s’applique&nbsp;?</em>", "Que faire de <em>l’avoir&nbsp;?</em>", "Que reste-t-il <em>à suivre&nbsp;?</em>"],
      intro: [
        "Un prestataire facture 40 chemises de travail à 3 USD pièce pour une semaine de location, soit 120 USD. Ouvrez le contrat pour vérifier ce tarif.",
        "Les deux barèmes sont approuvés. La semaine facturée commence le 12 janvier. Quel tarif aurait dû être appliqué à chaque chemise ?",
        "Le fournisseur accepte les 20 USD d’écart et émet un premier avoir de 15 USD. Dans le dossier fictif, l’équipe en impute 10. Déplacez le curseur pour essayer un autre montant.",
        "Le premier solde indique ce que le fournisseur doit encore émettre. Le second indique quelle part de l’avoir reçu reste utilisable."
      ],
      start: "Examiner le contrat", choose: "Quel tarif unitaire retenez-vous ?", january: "Barème du 5 janvier", february: "Avenant du 2 février",
      prices: ["2,50 USD", "3,00 USD"], verify: "Vérifier le tarif",
      verified: "Le barème de janvier s’applique. Les 40 chemises auraient dû coûter 100 USD. La facture indique 120 USD.",
      openCredit: "Suivre l’écart de 20 USD",
      missing: "Sélectionnez un barème pour comparer les montants.",
      wrong: "Cet avenant prend effet le 2 février. Pour la semaine du 12 janvier, consultez le premier barème.",
      applyLabel: "Montant de l’avoir à imputer", see: "Voir les soldes", edit: "Modifier le montant", replay: "Recommencer",
      due: "Avoir à recevoir du fournisseur", unused: "Avoir reçu encore disponible",
      unfold: "Déplier le dossier", book: "Revoir le carnet",
      unfoldedTitle: "Une correction, <em>trois dates.</em>",
      unfoldedIntro: "Le fil relie l’accord du fournisseur, l’avoir reçu et le montant que vous avez choisi d’imputer."
    },
    en: {
      caseLabel: "Back to case study", pageTitle: "Check an invoice · GarmentLedger",
      nav: "Case steps", foot: "Fictional case · Amounts in USD before tax",
      steps: ["Invoice", "Contract", "Credit", "Balance"],
      folios: ["12–18 Jan · Invoice DEMO-1-002", "12–18 Jan · Contract", "8 Feb · Credit DEMO-CR-001", "15 Feb · Simulated application"],
      titles: ["Is this invoice <em>right?</em>", "Which rate <em>applies?</em>", "How much credit will you <em>apply?</em>", "What’s still <em>outstanding?</em>"],
      intro: [
        "A supplier charges USD 3 per shirt for a week’s rental of 40 work shirts. The invoice totals USD 120. Open the contract to check the rate.",
        "Both rates are approved. The invoiced week began on 12 January. Which rate should the supplier have charged per shirt?",
        "After a review, the supplier accepts the USD 20 discrepancy and issues an initial USD 15 credit note. In the fictional case, the team applies USD 10. Try it yourself.",
        "The supplier still owes part of the credit. On your side, the amount available depends on how much credit you applied."
      ],
      start: "Examine the contract", choose: "Choose the unit rate", january: "5 January schedule", february: "2 February amendment",
      prices: ["USD 2.50", "USD 3.00"], verify: "Check my choice",
      verified: "The January schedule applies. The 40 shirts should have cost USD 100. The invoice shows USD 120.",
      openCredit: "Track the USD 20 difference",
      missing: "Choose a rate to compare the amounts.",
      wrong: "This amendment takes effect on 2 February. For the week of 12 January, look at the first schedule.",
      applyLabel: "Credit amount to apply", see: "See the balances", edit: "Adjust the amount", replay: "Start again",
      due: "Credit still due from the supplier", unused: "Received credit still available",
      unfold: "Unfold the case file", book: "Back to the ledger",
      unfoldedTitle: "One correction, <em>three dates.</em>",
      unfoldedIntro: "Follow the thread from the supplier’s agreement to the credit note and the amount you chose to apply."
    }
  };

  const byId = id => document.getElementById(id);
  const query = new URLSearchParams(location.search);
  let lang = query.get("lang") === "en" ? "en" : "fr";
  let step = 0;
  let furthest = 0;
  let rate = "";
  let verified = false;
  let applied = 10;
  let feedback = "";
  let unfolded = false;
  const scenes = ["desk", "compare", "credit", "balance"];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const amount = value => lang === "fr" ? `${value} USD` : `USD ${value}`;
  const player = window.createLedgerPlayer({
    studio: byId("studio"), reducedMotion,
    replay() {
      if (step === 1 && rate) renderStudio(verified ? "verify" : "choose");
      else renderStudio("enter");
    }
  });

  function renderControls(t) {
    const next = label => `<button type="button" class="primary" id="primary">${label}</button>`;
    if (step === 0) return next(t.start);
    if (step === 1) {
      const choices = ["january", "february"].map((key, i) =>
        `<label class="choice"><input type="radio" name="rate" value="${key}" ${rate === key ? "checked" : ""}><span>${t[key]}</span><strong>${t.prices[i]}</strong></label>`
      ).join("");
      return `<fieldset class="choices"><legend>${t.choose}</legend>${choices}</fieldset>
        <p id="feedback" role="status">${feedback ? t[feedback] : ""}</p>${next(verified ? t.openCredit : t.verify)}`;
    }
    if (step === 2) {
      return `<div class="adjust"><label for="applied">${t.applyLabel}<output id="applied-value" for="applied">${amount(applied)}</output></label>
        <input type="range" id="applied" min="0" max="15" step="1" value="${applied}" aria-valuetext="${amount(applied)}">
        <div class="ends" aria-hidden="true"><span>${amount(0)}</span><span>${amount(15)}</span></div></div>${next(t.see)}`;
    }
    return `<dl class="balances">
      <div><dt>${t.due}</dt><dd>${amount(5)}</dd></div>
      <div><dt>${t.unused}</dt><dd>${amount(15 - applied)}</dd></div>
      </dl><div class="actions"><button type="button" class="primary" id="foldout">${unfolded ? t.book : t.unfold}</button>
      <button type="button" class="secondary" id="primary">${t.edit}</button>
      <button type="button" class="text-action" id="replay">${t.replay}</button></div>`;
  }

  function renderStudio(action = "enter") {
    const scene = unfolded ? "foldout" : scenes[step];
    const props = { scene, action, lang, applied, rate, verified, reduced: reducedMotion.matches || action === "still" };
    let artwork;
    if (unfolded) artwork = window.ledgerFoldout(props);
    else if (step === 0) artwork = window.ledgerDesk(props);
    else artwork = window.ledgerEvidence(props);
    player.show(artwork, {scene, action, lang, onMount: scene === "compare" ? window.ledgerEvidence.startGesture : undefined});
  }

  function render(action = "enter") {
    const t = copy[lang];
    document.documentElement.lang = lang;
    document.title = t.pageTitle;
    byId("case-link").href = `${lang === "en" ? "/en" : ""}/work/garmentledger/`;
    byId("case-label").textContent = t.caseLabel;
    byId("foot-note").textContent = t.foot;
    document.querySelectorAll("[data-lang]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.lang === lang)));
    byId("steps").setAttribute("aria-label", t.nav);
    byId("steps").innerHTML = t.steps.map((name, i) =>
      `<button type="button" data-step="${i}" ${i === step ? 'aria-current="step"' : ""} ${i > furthest ? "disabled" : ""} class="${i < step ? "past" : ""}">${name}</button>`
    ).join("");
    byId("folio").textContent = unfolded ? (lang === "fr" ? "1–15 févr. · Suivi de l’avoir" : "1–15 Feb · Credit history") : t.folios[step];
    byId("title").innerHTML = unfolded ? t.unfoldedTitle : t.titles[step];
    byId("intro").textContent = unfolded ? t.unfoldedIntro : t.intro[step];
    renderStudio(action);
    byId("controls").innerHTML = renderControls(t);
  }

  function go(index) {
    step = index;
    unfolded = false;
    furthest = Math.max(furthest, index);
    feedback = step === 1 && verified ? "verified" : "";
    render();
    byId("title").focus({ preventScroll: true });
    if (byId("steps").getBoundingClientRect().top < 0) byId("steps").scrollIntoView({ block: "start" });
  }

  document.querySelector(".languages").addEventListener("click", event => {
    const button = event.target.closest("[data-lang]");
    if (!button || button.dataset.lang === lang) return;
    lang = button.dataset.lang;
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    render("still");
  });

  byId("steps").addEventListener("click", event => {
    const button = event.target.closest("button[data-step]");
    if (button && !button.disabled && Number(button.dataset.step) !== step) go(Number(button.dataset.step));
  });

  byId("controls").addEventListener("input", event => {
    if (event.target.name === "rate") {
      rate = event.target.value;
      verified = false;
      feedback = "";
      byId("feedback").textContent = "";
      byId("primary").textContent = copy[lang].verify;
      renderStudio("choose");
      if (furthest > 1) {
        furthest = 1;
        byId("steps").querySelectorAll("button").forEach((button, i) => { button.disabled = i > furthest; });
      }
    }
    if (event.target.id === "applied") {
      applied = event.target.valueAsNumber;
      byId("applied-value").value = amount(applied);
      event.target.setAttribute("aria-valuetext", amount(applied));
      const studio = byId("studio");
      studio.style.setProperty("--applied-ratio", String(applied / 15));
      studio.querySelectorAll("[data-gl-applied]").forEach(span => { span.textContent = String(applied); });
      studio.querySelectorAll("[data-gl-received-left]").forEach(span => { span.textContent = String(15 - applied); });
    }
  });

  byId("controls").addEventListener("click", event => {
    if (event.target.closest("#foldout")) {
      unfolded = !unfolded;
      render();
      byId("title").focus({preventScroll:true});
      if (byId("steps").getBoundingClientRect().top < 0) byId("steps").scrollIntoView({block:"start"});
      return;
    }
    if (event.target.closest("#replay")) {
      rate = "";
      verified = false;
      applied = 10;
      furthest = 0;
      go(0);
      return;
    }
    if (!event.target.closest("#primary")) return;
    if (step === 1 && rate !== "january") {
      feedback = rate ? "wrong" : "missing";
      byId("feedback").textContent = copy[lang][feedback];
      return;
    }
    if (step === 1 && !verified) {
      verified = true;
      feedback = "verified";
      byId("feedback").textContent = copy[lang].verified;
      byId("primary").textContent = copy[lang].openCredit;
      renderStudio("verify");
      return;
    }
    go(step === 3 ? 2 : step + 1);
  });

  reducedMotion.addEventListener("change", () => renderStudio("still"));
  render();
})();
