/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        "mobile-s": "280px",
        "mobile-m": "375px",
        "mobile-l": "425px",
        "tablet": "768px",
        "laptop": "1024px",
        "desktop": "1280px",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "shadow": "#272727",
        "light-shadow": "#606060",
        "cloudy": "#DEF2F1",
        "almost-white": "#FEFFFF",
        "dark": "#17252A",
        "keppel": "#3AAFA9",
        "myrtle": "#2B7A78",

        "teal-blue": "#388087",
        "moonstone-blue": "#6FB3B8",
        "powder-blue": "#BADFE7",
        "magic-mint": "#C2EDCE",
        "white-smoke": "#F6F6F2",
      },
      fontFamily: {
        "brand": "'Bleqcki Trial'",
        "nav": "'Linotte-Heavy'",
      },
    },
  },
  plugins: [],
}