/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: "#4CAF4F",
        neutralDGrey: "#4D4D4D",
        neutralGrey: "#717171",
        neutralSilver: "#F5F7FA",
        gray900: "#18191F",
        neutralBlack: "#263238",
        "gold-500": "#DB9200",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
