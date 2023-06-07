/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        abc:['Mochiy Pop One','sans-serif'],
        popins:['Poppins','sans-serif']
       

      }
    },
  },
  plugins: [require("daisyui")],
}

