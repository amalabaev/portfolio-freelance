export function normalizeWebsite(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  const url = new URL(/^[a-z][a-z\d+.-]*:/i.test(trimmed) ? trimmed : `https://${trimmed}`);
  if (!["https:", "http:"].includes(url.protocol) || !url.hostname.includes(".") || url.username || url.password) {
    throw new Error("Invalid website");
  }
  return url.href;
}

export function createBriefSender({ fetcher = fetch, timeoutMs = 15000 }: { fetcher?: typeof fetch; timeoutMs?: number } = {}) {
  let pending = false;
  return async (payload: Record<string, string>) => {
    if (pending) throw new Error("already-submitting");
    pending = true;
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      const timeout = new Promise<never>((_, reject) => {
        timer = setTimeout(() => {
          controller.abort();
          reject(new Error("confirmation-timeout"));
        }, timeoutMs);
      });
      await Promise.race([
        (async () => {
          const response = await fetcher("https://formsubmit.co/ajax/1f5c10e1a1fa645be497048d08b9cb5a", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(payload),
            signal: controller.signal,
          });
          const result = await response.json() as { success?: boolean | string };
          if (!response.ok || ![true, "true"].includes(result.success ?? false)) throw new Error("submission-failed");
        })(),
        timeout,
      ]);
    } finally {
      clearTimeout(timer);
      pending = false;
    }
  };
}
