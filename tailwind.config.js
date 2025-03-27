/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './pages/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
        helveticaBold: ['Helvetica-Bold', 'sans-serif'],
        brand: ['FogtwoNo5', 'cursive'],
      },
    },
  },
  plugins: [],
}
