/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"], // Add Bebas Neue here
      },
      colors: {
        customGray: "#777",
        customWhite: "#AAAAAA",
        customBlack: "#070707",
        CustomDarkGrey: "#151515",
      },
    },
  },
  plugins: [],
};
