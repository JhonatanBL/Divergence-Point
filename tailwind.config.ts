import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        board: "rgb(var(--board) / <alpha-value>)",
        "board-2": "rgb(var(--board-2) / <alpha-value>)",
        "board-3": "rgb(var(--board-3) / <alpha-value>)",
        chalk: "rgb(var(--chalk) / <alpha-value>)",
        "chalk-dim": "rgb(var(--chalk-dim) / <alpha-value>)",
        "accent-green": "rgb(var(--accent-green) / <alpha-value>)",
        "accent-blue": "rgb(var(--accent-blue) / <alpha-value>)",
        "accent-orange": "rgb(var(--accent-orange) / <alpha-value>)",
        "accent-silver": "rgb(var(--accent-silver) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
