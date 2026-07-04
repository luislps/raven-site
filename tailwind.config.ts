import type { Config } from "tailwindcss";

// Paleta extraída do site atual da Raven (cores globais do tema).
// Substituir/ajustar caso o manual da marca defina valores diferentes.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#02176d",
          dark: "#010f4a",
          deep: "#0a1330",
        },
        accent: {
          DEFAULT: "#ffe16a",
          dark: "#f5cf35",
        },
        ink: "#222222",
        slate2: "#4B4F58",
        mist: "#F2F5F7",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
