/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-img": "url('assets/images/bg-mobile.png')",
        "desktop-img": "url('assets/images/bg-desktop.png')",
      },
      backgroundPosition: {
        "bottom-50": "10% 50vh",
      },
      colors: {
        "pale-blue": "hsl(243, 100%, 93%)",
        "grayish-blue": "hsl(229, 7%, 55%)",
        "dark-blue": "hsl(228, 56%, 26%)",
        "very-dark-blue": "hsl(229, 57%, 11%)",
        "g-from": "hsl(6, 100%, 80%)",
        "g-to": "hsl(335, 100%, 65%)",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
