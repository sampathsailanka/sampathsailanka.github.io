/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1900px",
        "4xl": "2000px",
      },
      // fontFamily: {
      //   "product-sans": ["Product Sans", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
