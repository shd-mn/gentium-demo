/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1264px",
      },
    },

    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        avantGarde: ["AvantGardeBold", "sans-serif"],
        tradegothic: ["tradegothic", "sans-serif"],
        "tradegothic-light": ["tradegothic-light", "sans-serif"],
      },
      colors: {
        "primary-clr": "#e9204f",
        "secondary-clr": "#1b1b1b",
        "dark-clr": "#101010",
        "gray-clr": "#747474",
        "gray-light": "#9c9c9c",
        "t-hover": "#ffb2c4",
      },
    },
  },
  plugins: [],
};
