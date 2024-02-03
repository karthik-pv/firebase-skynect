module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inconsolata': ['Inconsolata'],
        'robo': ["Roboto Slab"]
      }
    },
  },
  plugins: [
    require('tailwindcss-patterns')
  ],
}