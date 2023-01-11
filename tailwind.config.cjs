/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*", "./internal/index.html"],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(226deg 71% 40%)',
        'secondary': 'hsl(142deg 77% 73%)',
        'highlight': '#3fa5d4',
        'selection-bg': 'rgb(64, 64, 64)',
      },
      padding: {
        'fluid': 'max(calc((100vw - 72rem) / 2), 2rem)',
      }
    },
  },
  plugins: [require("tailwindcss-fluid-type")],
}
