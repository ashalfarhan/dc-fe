module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{jsx,tsx,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: [`'Montserrat', sans-serif`],
        noto: [`'Noto Sans', sans-serif`],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
