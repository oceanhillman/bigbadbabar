/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
    },
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      //"green": "#35654D",
      "shadow": "#272727",
      "light-shadow": "#606060"
    },
    fontFamily: {
      "brand": "'Fugaz One'",
      "slogan": "Courgette",
      "nav": "Lato",
      "body": "Roboto",
      "title": "Tauri",
    },
  },
  plugins: [],
}