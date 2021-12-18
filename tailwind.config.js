module.exports = {
  content: ['./index.html', './src/**/*.{tsx,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', 'sans-serif'],
        // display: ['"Raleway"', 'sans-serif'],
      },
      colors: {
        card: '#1E213A',
        accent: '#A09FB1',
      },
    },
  },
  plugins: [],
}
