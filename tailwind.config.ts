import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        skyBlue: "#71CED0",
        darkBlack: "#0F0D10",
        lightBlack: "#232224",
        gray: "#BCBBBC",
        dark: "#434244",
        blackLight: "#4C4C4C",
        green: "#00C11F",
        red: "#D01314",
      },
      backgroundImage: {
        footer: "url('/assets/images/webp/footer-image.webp')",
        driven: "url('/assets/images/webp/driven-bg.webp')",
      },
    },
  },
  plugins: [],
} satisfies Config;
