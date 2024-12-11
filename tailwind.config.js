/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bisco: "#75B8EE",
        green: "#046E1B",
        oreng: "#F79F1A",
        yellow: "#FFC170",

      },
      fontFamily:{
          body : [  "Inter", "serif" ],
      }
    },
  },
  plugins: [],
}