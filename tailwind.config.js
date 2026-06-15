/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        royal: "#1f3d36",
        royalDark: "#15291f",
        gold: "#c9a04e",
        goldLight: "#e6cf95",
        sand: "#f6efe2",
        cream: "#fbf7ee",
        earth: "#8a6d4b",
      },
      fontFamily: {
        sans: ["var(--font-tajawal)", "system-ui", "sans-serif"],
        display: ["var(--font-amiri)", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(31,61,54,0.25)",
        gold: "0 8px 30px -8px rgba(201,160,78,0.45)",
      },
    },
  },
  plugins: [],
};
