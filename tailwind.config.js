/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary:   "#2563EB",
        secondary: "#000000",
        accent:    "#F59E0B",
        // Blue mode palette
        "blue-bg":      "#0a1628",
        "blue-surface": "#0d1f3c",
        "blue-card":    "#112240",
        "blue-border":  "#1e3a5f",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body:    ["Inter",   "sans-serif"],
      },
    },
  },
  plugins: [],
};
