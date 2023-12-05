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
        "furniture-01": "url('/images/banner/banner-01.jpeg')",
        "furniture-02": "url('/images/banner/banner-02.jpeg')",
        "furniture-03": "url('/images/banner/banner-03.jpeg')",
        "newsletter-banner": "url('/images/newsletter-banner.png')"
      }
    },
    colors: {
      transparent: 'transparent',
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
      green: {
        "01": "#38CB89"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
export default config;
