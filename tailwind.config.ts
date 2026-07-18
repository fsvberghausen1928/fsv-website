import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#005BAC",
        "primary-dark": "#00438A",
        secondary: "#111827",
      },

      maxWidth: {
        container: "1440px",
      },

      fontFamily: {
        sans: [
          "var(--font-inter)",
          "sans-serif",
        ],
      },

      borderRadius: {
        DEFAULT: "0.5rem",
      },

      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px rgba(0,0,0,0.08)",
        lg: "0 10px 20px rgba(0,0,0,0.10)",
      },

      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },

  plugins: [],
};

export default config;