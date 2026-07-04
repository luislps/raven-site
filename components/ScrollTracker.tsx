"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

/** Dispara eventos únicos de rolagem em 50% e 90% da página. */
export function ScrollTracker() {
  const fired = useRef({ half: false, ninety: false });

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
        if (!fired.current.half && ratio >= 0.5) {
          fired.current.half = true;
          trackEvent("scroll_50");
        }
        if (!fired.current.ninety && ratio >= 0.9) {
          fired.current.ninety = true;
          trackEvent("scroll_90");
          window.removeEventListener("scroll", onScroll);
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
