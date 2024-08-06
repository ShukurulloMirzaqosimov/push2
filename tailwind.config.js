/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // height: {
      //   '96': '60%',
      // },
      // width: {
      //   '96': '50%'
      // },
      // margin: {
      //   '64': '16rem',
      // }
      height: {
        '99': '99%',
        '1': '3px',
        '45': '360px',
        '90': '120vh'
      },
      width: {
        '85': '85%',
        '45': '49%',
        '60': '70%',
        '90': '85%'
      },
      colors: {
        'bgBlue': "#14649b",
        'blue': "#0074ba",
        'icon': '#a1c3da',
        "borderColor": "#105c8d"
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse closest-corner at center, #ffffff 30%, #9fbed1 100%)',
        'navRadial': 'radial-gradient(ellipse closest-corner at center, #135987 30%, #092f48 100%)'
      },
      borderWidth: {
        '2': '1px'
      }

    },
  },
  plugins: [],
}