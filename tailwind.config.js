/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    extend: {
      height: {
        screen: '100dvh',
      },
      colors: {
        'scarlet': '#9f2b25',
        'taupe': '#d6cdcc',
        'ebony': '#111d1d',
        'forest': '#00735c'
      }
    },
  },
  plugins: [],
};
