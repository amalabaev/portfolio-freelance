"use client";

import { useState } from "react";

export function PlanningDemo({ locale }: { locale: "fr" | "en" }) {
  const fr = locale === "fr";
  const [state, setState] = useState<"initial" | "conflict" | "valid" | "saved">("initial");
  const moved = state === "saved";
  return <div className="planning-demo">
    <div className="demo-heading"><div><p className="section-index">{fr ? "DÉMONSTRATION PÉDAGOGIQUE" : "ILLUSTRATIVE DEMO"}</p><h2>{fr ? "Essayez une réaffectation." : "Try reassigning a task."}</h2></div><span className="tag">{fr ? "Données fictives" : "Fictional data"}</span></div>
    <p>{fr ? "Une même tâche, deux créneaux possibles. Le système explique ce qui autorise ou bloque le déplacement." : "One task, two possible time slots. The system explains what allows or blocks the move."}</p>
    <div className="demo-schedule">
      <div><strong>{fr ? "Équipe A" : "Team A"}</strong><span className={moved ? "demo-slot demo-slot-empty" : "demo-slot"}>{moved ? (fr ? "Créneau libéré" : "Slot available") : (fr ? "Intervention · 08:00–10:00" : "Assignment · 08:00–10:00")}</span></div>
      <div><strong>{fr ? "Équipe B" : "Team B"}</strong><span className="demo-slot demo-slot-busy">{fr ? "Déjà affectée · 09:00–12:00" : "Already assigned · 09:00–12:00"}</span></div>
      <div><strong>{fr ? "Équipe B" : "Team B"}</strong><span className={moved ? "demo-slot demo-slot-saved" : "demo-slot demo-slot-empty"}>{moved ? (fr ? "Intervention · 14:00–16:00" : "Assignment · 14:00–16:00") : (fr ? "Disponible · 14:00–16:00" : "Available · 14:00–16:00")}</span></div>
    </div>
    <div className="demo-controls"><button type="button" onClick={() => setState("conflict")} disabled={moved}>{fr ? "Déplacer vers B à 09:00" : "Move to B at 09:00"}</button><button type="button" onClick={() => setState("valid")} disabled={moved}>{fr ? "Déplacer vers B à 14:00" : "Move to B at 14:00"}</button></div>
    <div className={`demo-feedback demo-${state}`} aria-live="polite" aria-atomic="true">
      <strong>{state === "initial" ? (fr ? "Choisissez un créneau." : "Choose a time slot.") : state === "conflict" ? (fr ? "Déplacement bloqué : chevauchement." : "Move blocked: overlapping assignment.") : state === "valid" ? (fr ? "Le créneau est disponible." : "The time slot is available.") : (fr ? "Réaffectation confirmée." : "Reassignment confirmed.")}</strong>
      <p>{state === "initial" ? (fr ? "Aucun changement tant que la réaffectation n’est pas confirmée." : "Nothing changes until the reassignment is confirmed.") : state === "conflict" ? (fr ? "L’équipe B a déjà une affectation de 09:00 à 12:00. La tâche reste chez l’équipe A." : "Team B already has an assignment from 09:00 to 12:00. The task stays with Team A.") : state === "valid" ? (fr ? "Dans ce scénario, les disponibilités et les permissions permettent ce transfert. Il reste à le confirmer." : "In this scenario, availability and permissions allow the transfer. Confirm it to proceed.") : (fr ? "La tâche est passée de A à B, de 14:00 à 16:00. Le créneau initial est libéré." : "The task has moved from A to B, from 14:00 to 16:00. The original slot is now free.")}</p>
    </div>
    <div className="demo-actions"><button className="button button-dark" type="button" disabled={state !== "valid"} onClick={() => setState("saved")}>{fr ? "Confirmer le déplacement" : "Confirm the move"}</button><button className="demo-reset" type="button" onClick={() => setState("initial")}>{fr ? "Recommencer" : "Reset demo"}</button></div>
    <p className="demo-note">{fr ? "Reconstitution simplifiée de l’interaction décrite, exécutée uniquement dans cette page. Elle ne présente ni le logiciel client ni ses données ou ses règles propriétaires." : "A simplified reconstruction of the described interaction, running only on this page. It does not expose client software, data or proprietary rules."}</p>
  </div>;
}
