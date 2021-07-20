module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#060833',
        'dark-secondary': '#333a64',
        blue: '#3148c5',
        'blue-secondary': '#1e33a8',
        'light-bg': '#f8f9fd',
        'light-bg-secondary': 'rgba(49, 72, 197, 0.16)',
        'light-gray': '#959db8',
        white: '#fff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
