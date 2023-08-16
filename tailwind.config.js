/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        "extra-loose": "2.5",
        12: "4.375rem",
      },
    },
  },
  plugins: [],
};
