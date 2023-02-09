/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'gris-oscuro': '#222831',
        'gris': '#393E46',
        'naranja': '#D65A31',
        'blanco': '#EEEEEE',
      }
    },
  },
  plugins: [],
}