import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    // "./pages/**/*.{ts,tsx}",
    // "./components/**/*.{ts,tsx}",
    // "./app/**/*.{ts,tsx}",
    // "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#f97316",
        accent: "#f59e0b",
        background: "#f3f4f6",
        text: "#111827",
      },
      fontFamily: {
        dmsans: "var(--font-dmsans)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
