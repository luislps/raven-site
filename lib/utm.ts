const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

const STORAGE_KEY = "raven_utm";

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

/** Lê UTMs da URL atual e persiste em sessionStorage (primeiro toque da sessão vence). */
export function captureUtmParams(search: string): UtmParams {
  const params = new URLSearchParams(search);
  const found: UtmParams = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) found[key] = value.slice(0, 200);
  }
  if (typeof window !== "undefined" && Object.keys(found).length > 0) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    } catch {
      // sessionStorage indisponível (modo privado etc.) — segue sem persistir
    }
  }
  return found;
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}
