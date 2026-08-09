"use client";

import { useState } from "react";

export function CopyEmailButton({
  email,
  idleLabel,
  copiedLabel,
}: {
  email: string;
  idleLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const input = document.createElement("textarea");
      input.value = email;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  }

  return (
    <button
      className="contact-copy"
      type="button"
      onClick={copyEmail}
      aria-label={`${idleLabel}: ${email}`}
    >
      <span>{email}</span>
      <strong aria-live="polite">{copied ? `${copiedLabel} ✓` : idleLabel}</strong>
    </button>
  );
}
