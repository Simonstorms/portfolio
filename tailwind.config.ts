import type { Config } from 'tailwindcss'

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    typography: {
      DEFAULT: { // this is for prose class
        css: {
          color: "black dark:white"
        }
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-archia)']
      },
      colors: {
        primary: "#6178F1",
      },
      boxShadow: {
        grid: "0px 4px 10px 0px rgba(0, 0, 0, 0.05);",
        'custom': '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
      },

      backgroundImage: {
        'gradient-custom': 'linear-gradient(145deg, #ffffff, #e6e6e6)',
      }
    }
  },
  plugins: [require('@tailwindcss/typography'),require("daisyui"),
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
          {
            "bg-grid": (value: any) => ({
              backgroundImage: `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
              )}")`,
            }),
            "bg-grid-small": (value: any) => ({
              backgroundImage: `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
              )}")`,
            }),
            "bg-dot": (value: any) => ({
              backgroundImage: `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
              )}")`,
            }),
          },
          { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
}
export default config
