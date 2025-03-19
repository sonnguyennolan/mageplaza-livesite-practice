module.exports = {
  darkMode: 'class',
  content: [
    "./_includes/**/*.{html,js}",
    "./_layouts/**/*.{html,js}",
    "./_pages/**/*.{html,md}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001489", // Dark blue from image
        secondary: "#0cb6e9", // Light blue from image
        accent: "#ff5733", // Orange color for accents
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
