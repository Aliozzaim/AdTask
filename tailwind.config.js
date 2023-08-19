/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "475px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      lineHeight: {
        "extra-loose": "2.5",
        12: "4.375rem",
      },
    },
  },
  plugins: [],
};
