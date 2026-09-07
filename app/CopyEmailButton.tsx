"use client";

import { useEffect, useRef, useState } from "react";

import { CopyIcon } from "./Icon";

export function CopyEmailButton({
  email,
  idleLabel,
  copiedLabel,
  errorLabel,
}: {
  email: string;
  idleLabel: string;
  copiedLabel: string;
  errorLabel: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  async function copyEmail() {
    let copied = false;
    try {
      await navigator.clipboard.writeText(email);
      copied = true;
    } catch {
      const focused = document.activeElement;
      const input = document.createElement("textarea");
      input.value = email;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      try {
        input.select();
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      } finally {
        input.remove();
        if (focused instanceof HTMLElement) focused.focus();
      }
    }

    setStatus(copied ? "copied" : "error");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <button
      className="contact-copy"
      type="button"
      onClick={copyEmail}
      aria-label={`${status === "copied" ? copiedLabel : status === "error" ? errorLabel : idleLabel}: ${email}`}
    >
      <CopyIcon />
      <strong aria-live="polite">{status === "copied" ? `${copiedLabel} ✓` : status === "error" ? errorLabel : idleLabel}</strong>
    </button>
  );
}
