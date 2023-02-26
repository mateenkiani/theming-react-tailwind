/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#67e8f9',
          secondary: '#06b6d4',
          'primary-text': '#FFFFFF',
          background: '#1E293B',
          'background-secondary': '#334155'
        },
        primary: '#67e8f9',
        secondary: '#06b6d4',
        background: '#FFFFFF',
        'primary-text': '#0f172a',
        'background-secondary': '#FFFFFF'
        ,
      },
    },
  },

  plugins: [],
};
