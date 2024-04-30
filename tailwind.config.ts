import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "11.11px",
      sm: "13.33px",
      text: "16px",
      xl: "19.2px",
      lg: "23.04px",
      "2xl": "27.65px",
      "3xl": "33.18px",
      "4xl": "39.81px",
      "5xl": "47.78px",
    },
    typography: {
      DEFAULT: {
        css: {
          color: "black dark:white",
        },
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-archia)"],
      },
      colors: {
        primary: "#6178F1",
      },
      boxShadow: {
        grid: "0px 4px 10px 0px rgba(0, 0, 0, 0.05);",
        custom: "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff",
        custom2: "20px 20px 60px red, -20px -20px 60px blue",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
};
export default config;
