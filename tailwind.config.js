/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '350px', // Define a custom small breakpoint
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
      },
      fontFamily: {
        "brand": "'Fugaz One'",
        "slogan": "Courgette",
        "nav": "Lato",
        "body": "Roboto",
        "title": "Tauri",
      },
    },
  },
  plugins: [],
}