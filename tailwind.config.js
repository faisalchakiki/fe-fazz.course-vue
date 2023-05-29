/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        'second-gray': '#797e86',
        'blue-dongker': '#2452a8',
        'primary-orange': '#ef6807',
      },
    }
  },

  plugins: [require("daisyui")],
};