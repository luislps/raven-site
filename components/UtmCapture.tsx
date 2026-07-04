"use client";

import { useEffect } from "react";
import { captureUtmParams } from "@/lib/utm";

/** Captura utm_* / gclid / fbclid da URL e guarda na sessão para formulário e eventos. */
export function UtmCapture() {
  useEffect(() => {
    captureUtmParams(window.location.search);
  }, []);
  return null;
}
