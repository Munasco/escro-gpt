/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#97866c",
          "200": "#111e30",
          "300": "#020b2c",
        },
        silver: "#c4c4c4",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "#d8d8d8",
        },
        black: "#000",
        "dark-grey": "#616161",
        "light-grey": "#d5d5d5",
        mediumseagreen: "#79c677",
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
        "6xs": "7px",
        "8xs": "5px",
        "10xs-1": "2.1px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "31xl": "50px",
      xs: "12px",
      sm: "14px",
      "sm-4": "13.4px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
