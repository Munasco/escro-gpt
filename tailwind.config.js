/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        mediumseagreen: "#79c677",
        gray: {
          "100": "#97866c",
          "200": "#111e30",
          "300": "#020b2c",
        },
        black: "#000",
        "dark-grey": "#616161",
        "light-grey": "#d5d5d5",
        silver: "#c4c4c4",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "#d8d8d8",
        },
        red: "#e60000",
        seashell: "#fffaf5",
        lightslategray: "#6c8f97",
        rosybrown: {
          "100": "#977c6c",
          "200": "#976c6c",
        },
      },
      fontFamily: {
        "proxima-nova": "'Proxima Nova'",
        "roboto-mono": "'Roboto Mono'",
      },
      borderRadius: {
        "8xs": "5px",
        "6xs": "7px",
        "10xs-1": "2.1px",
      },
    },
    fontSize: {
      xl: "20px",
      "31xl": "50px",
      base: "16px",
      xs: "12px",
      sm: "14px",
      "sm-4": "13.4px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
