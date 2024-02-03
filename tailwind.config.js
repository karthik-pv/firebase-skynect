module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inconsolata': ['Inconsolata'],
      }
    },
  },
  plugins: [
    require('tailwindcss-patterns')
  ],
}