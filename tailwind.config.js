/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'about' : "url('/images/pictures/about-us.jpg')"
      },
      fontFamily : {
        'nunito' : ['nunito', 'sans-serif']
      },
    },
  },
  plugins: [],
}

