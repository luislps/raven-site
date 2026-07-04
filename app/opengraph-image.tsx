import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Raven Contabilidade — contabilidade para profissionais PJ com clareza e atendimento direto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a1330",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, color: "#ffe16a", fontWeight: 700 }}>
          RAVEN CONTABILIDADE
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Contabilidade para profissionais PJ que querem clareza para trabalhar e
          crescer.
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#c9d2e8" }}>
          Abertura de CNPJ · Simples Nacional · Fator R · Troca de contador
        </div>
      </div>
    ),
    size,
  );
}
