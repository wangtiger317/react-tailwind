/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neon': ['NightLightOutline']
      }
    },
  },
  plugins: [require("daisyui")],
}