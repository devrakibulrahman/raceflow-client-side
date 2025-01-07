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
        "register": 'url(/img/register.png)',
        "slider1": 'url(/img/bg1.png)',
        "slider2": 'url(/img/bg2.png)',
        "slider3": 'url(/img/bg3.png)',
        "contact": 'url(/img/contact.png)',
        "marathon": 'url(/img/marathon.png)',
        "about": 'url(/img/about.png)',
        "details": 'url(/img/details.png)',
        "left-column1-img": 'url(/img/details-left-column-img.png)',
        "tips1": 'url(/img/tips1.png)',
        "tips2": 'url(/img/tips2.png)',
        "tips3": 'url(/img/tips3.png)',
        "registration": 'url(/img/registration.png)',
        "marathon-registration": 'url(/img/marathon-registration.png)',
        "contact-form-img": 'url(/img/contact-form-img.png)',
        "pattern": 'url(/pattern.png)',
        "sub-pattern": 'url(/subscribe-pattern.png)'
      },
    },
  },
  plugins: [],
}

