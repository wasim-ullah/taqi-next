import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:              "#ffffff",
        surface:         "#f8f8f8",
        border:          "#e0e0e0",
        "border-subtle": "#ebebeb",
        primary:         "#111111",
        secondary:       "#666666",
        muted:           "#999999",
      },
      fontFamily: {
        arabic:   ["'IndoPak Nastaleeq'", "var(--font-arabic)", "serif"],
        nastaliq: ["'Noto Nastaliq Urdu'", "var(--font-nastaliq)", "serif"],
        ui:       ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.65rem",
        xs:    "0.72rem",
        sm:    "0.8rem",
        base:  "0.875rem",
        lg:    "1rem",
        xl:    "1.125rem",
        "2xl": "1.3rem",
        "3xl": "1.6rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        marquee: "marquee 60s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      borderRadius: {
        DEFAULT: "0px",
        sm:      "0px",
        md:      "0px",
        lg:      "0px",
        xl:      "0px",
        "2xl":   "0px",
        full:    "9999px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
