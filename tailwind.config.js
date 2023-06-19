/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    extend: {
      colors: {
        primary: "#101828",
        secondary: "#7F56D9",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1234px",
      },
      boxShadow: {
        1: "0px 4px 30px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
