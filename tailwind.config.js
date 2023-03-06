/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          fontFamily: {
              base: 'Montserrat, sans-serif',
              neon: 'Tilt Neon, cursive',
          },
          colors: {
              lightgrey: '#EFEFEF',
              semiblack: '#272628',
              marinegreen: '#3AB4AC',
              strongmarinegreen: '#1E5F5A',
              lightgreen: '#BEEDD6',
              grey: '#C0C0C0',
              red: '#CC2D2D'
          },
      },
  },
  variants: {
      extend: {},
  },
  plugins: [
    plugin(function({ addVariant }) {
        addVariant('current', '&.active');
    })
  ],
};
