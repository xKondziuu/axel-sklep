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
      colors: {
        "red": "#f00",
        "green": "#0f0",
        "blue": "#00f",
        "cyan": "#0ff",
        "magenta": "#f0f",
        "yellow": "#ff0",
      },
      backgroundColor: {
        "header": "#343333D5",
        "headertop": "#343333D0",
        "headerlg": "#343333F0",
        "headernav": "#4e4b48F0"
      },
      fontFamily: {
        "fredoka": "Fredoka",
        "opensans": "OpenSans, Verdana, Arial"
      }
    },
    screens: {
      '2xl': {'max': '1439px'},
      'xl': {'max': '1189px'},
      'lg': {'max': '979px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'xs': {'max': '379px'},
      '+2xl': {'max': '1440px'},
      '+xl': {'min': '1190px'},
      '+lg': {'min': '980px'},
      '+md': {'min': '768px'},
      '+sm': {'min': '640px'},
      '+xs': {'max': '380px'},
    }
  },
  plugins: [],
};
export default config;
