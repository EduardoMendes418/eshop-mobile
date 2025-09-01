/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components.{js,jsx,ts,tsx}",
    "./App/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        grayLight: "#f2f2f2",
        grayDark: "#1f2937",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        spaceMono: ["SpaceMono", "monospace"],
      },
    },
  },
  plugins: [],
};
