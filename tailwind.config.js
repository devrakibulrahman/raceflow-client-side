/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "roboto": ["Roboto", "serif"]
      },
      colors: {
        "primary-yellow": '#f3e03b',
        "secondary-orange": '#ff7800',
        "head-charleston-green": '#27272A',
        "para-gray": '#52525B',
      },
      backgroundImage: {
        "login": 'url(/img/login.png)',
        "pattern": 'url(/pattern.png)',
      },
    },
  },
  plugins: [],
}

