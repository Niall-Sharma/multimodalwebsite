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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "Theme-Colors":{
          "Blackish" : "#OB0C10",
          "Charcoal" : "rgb(34, 34, 34);",
          "Greyish" : "#C5C6C7",
          "ElectricBlue" : "#66FCF1",
          "BetterBlue" : "#45A29E"
        },
      },
    },
  },
  plugins: [],
};
export default config;
