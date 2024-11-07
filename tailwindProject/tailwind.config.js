/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red:{
          500:"blue"
        }
      }
    },
  },
  plugins: [],
}

//content represents where the frontend code or where did we write the frontend code give the path
