const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    fontFamily: {
      display: ["Montserrat"],
      registry: ["Nunito"],
    },
    colors: {
      darkgray: "#333333",
      black: colors.black,
      white: colors.white,
      green: colors.green,
      blue: colors.blue,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      primary: "#219653",
      secundary: "#39E991",
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
