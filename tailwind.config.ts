import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      black: "#000000",
      blue: {
        "01": "#377DFF"
      },
      white: {
        "01": "#FEFEFE",
        "02": "#F3F5F7",
        "03": "#E8ECEF",
      },
      neutral: {
        "04": "#6C7275",
        "05": "#343839",
        "06": "#232627",
        "07": "#141718",
      },
    },
  },
  plugins: [],
};
export default config;
