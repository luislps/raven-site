import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Raven Contabilidade",
    short_name: "Raven",
    description:
      "Contabilidade para profissionais PJ e prestadores de serviços, com atendimento direto e linguagem simples.",
    start_url: "/",
    display: "browser",
    background_color: "#0a1330",
    theme_color: "#02176d",
    icons: [
      { src: "/brand/icone.png", sizes: "270x270", type: "image/png" },
    ],
  };
}
