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
        "para-gray": '#52525B',
      },
    },
  },
  plugins: [],
}

