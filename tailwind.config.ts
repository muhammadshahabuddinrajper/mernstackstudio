import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:                "#050507",
        "neon-blue":        "#5db2ff",
        "neon-purple":      "#a855f7",
        "neon-cyan":        "#22d3ee",
        surface:            "#0a0a0f",
        "surface-elevated": "#11131a",
      },
      fontFamily: {
        sans:    ["Outfit", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        body:    ["Outfit", "sans-serif"],
      },
      boxShadow: {
        glow:           "0 0 60px rgba(93,178,255,0.12), 0 30px 80px rgba(0,0,0,0.3)",
        "glow-lg":      "0 0 120px rgba(93,178,255,0.18), 0 40px 120px rgba(0,0,0,0.4)",
        "glow-purple":  "0 0 80px rgba(168,85,247,0.15)",
        "glow-cyan":    "0 0 80px rgba(34,211,238,0.15)",
        "inner-glow":   "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":   "radial-gradient(ellipse at 20% 20%, rgba(93,178,255,0.15), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(168,85,247,0.12), transparent 50%)",
        "section-gradient":"radial-gradient(ellipse at 50% 0%, rgba(93,178,255,0.06), transparent 60%)",
      },
      animation: {
        "scroll-indicator": "scroll 2s cubic-bezier(0.4,0,0.2,1) infinite",
        float:              "float 6s ease-in-out infinite",
        "float-slow":       "float-slow 20s ease-in-out infinite",
        "pulse-glow":       "pulse-glow 3s cubic-bezier(0.4,0,0.6,1) infinite",
        aurora:             "aurora-move 15s ease-in-out infinite",
        shimmer:            "shimmer 2s ease-in-out infinite",
        "glow-pulse":       "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        scroll: {
          "0%":   { transform: "translateY(-100%)", opacity: "0" },
          "50%":  { opacity: "1" },
          "100%": { transform: "translateY(100%)",  opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-30px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", filter: "blur(40px)" },
          "50%":      { opacity: "0.8", filter: "blur(60px)" },
        },
        "aurora-move": {
          "0%":   { transform: "translate(-50%,-50%) rotate(0deg)   scale(1)"   },
          "33%":  { transform: "translate(-45%,-55%) rotate(120deg) scale(1.1)" },
          "66%":  { transform: "translate(-55%,-45%) rotate(240deg) scale(0.9)" },
          "100%": { transform: "translate(-50%,-50%) rotate(360deg) scale(1)"   },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to:   { backgroundPosition: "-200% 0" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(93,178,255,0.2), 0 0 40px rgba(93,178,255,0.1)" },
          "50%":      { boxShadow: "0 0 40px rgba(93,178,255,0.45), 0 0 80px rgba(93,178,255,0.25)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
