/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenDark: "#27ae60",
        greyLight: "#2d3954",
        greyDark: "#72809d",
        ice: "#f7f9fc",
        orangeDark: "#ff6922",
        blackLight: "rgba(17, 40, 72, 0.629)",
        blueDark: "#122947",
      },
      boxShadow: {
        box: "0 0 20px 0 rgb(112 121 138 / 18%)",
      },
      borderColor: {
        borderBox: "5px solid #27ae601f",
      },
      backgroundImage: {
        bgBanner: "url('/assets/banner.png')",
      },
    },
  },
  plugins: [],
};
