import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          blue: "#5B788E",
          "blue-dark": "#4A6378",
          "blue-light": "#7A94A8",
        },
        gold: {
          DEFAULT: "#D1B78D",
          dark: "#B89D6E",
          light: "#E8D5B5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(91, 120, 142, 0.08)",
        card: "0 2px 12px rgba(91, 120, 142, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
