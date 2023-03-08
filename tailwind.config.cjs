/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
    './src/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: {
        700: '#8359E3',
        500: '#8359E380',
        200: '#8359E34d',
      },
      green: {
        700: '#0FD375',
      },
      orange: {
        700: '#F29D38',
      },
      gray: {
        500: '#444444',
        700: '#969696',
      },
      'gray-bg': {
        700: '#807F7F',
        500: '#C0C0C080',
        300: '#B6B6B64d',
      },
      tomato: {
        700: '#ED6363',
        200: '#ED636333',
      },
      white: '#FFFFFE',
      black: '#16161A',
    },
    extend: {},
  },
  plugins: [],
};
