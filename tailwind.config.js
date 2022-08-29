/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./calculator.html"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      pink: "#ff49db",
      yellow: "#ffc82c",
      "gray-light": "#d3dce6",
      white: "#fff",
      black: "#333"
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
