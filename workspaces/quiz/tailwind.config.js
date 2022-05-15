module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('src/background.png')",
      },
      fontFamily: {
        poppins: [`'Poppins', sans-serif`],
      },
      colors: {
        'brand-white': '#F2F2F2',
        'brand-dark': '#2F527B',
        'brand-yellow': '#F9A826',
        'brand-puple': '#6066D0CC',
        'brand-red': '#EA8282',
        'brand-green': '#60BF88',
      },
    },
  },
  plugins: [],
};
