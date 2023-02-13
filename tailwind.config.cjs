/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      rubik:
        'rubik ,ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji, sans-serif,ui-sans-serif',
    },
    extend: {
      colors: {
        purple: {
          600: '#996DFF',
          700: '#8257E5',
          800: '#633BBC',
          900: '#271A45',
        },
      },
    },
  },
  plugins: [],
};
