module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        'almost-black': '#3d3d3d',
        'almost-green': '#a09771',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}