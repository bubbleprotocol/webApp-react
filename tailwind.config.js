/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{tsx,js,ts}",
    "./components/**/*.{tsx,js,ts}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'Lato': ['Lato', 'sans-serif'],
      'Archivo' : ['Archivo', 'sans-serif'],
      'ArchivoBlack' : ['Archivo Black', 'sans-serif'],
      'Alfa' : ['Alfa Slab One', 'sans-serif'], 
      'Poppins' : ['Poppins', 'sans-serif'],
      'Roboto' : ['Roboto Slab', 'serif']
    },
  },
  plugins: [],
}
