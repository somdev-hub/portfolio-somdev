/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        marriweather: ["Marriweather", "serif"],
        outfit: ["Outfit", "sans-serif"],
        "dm-serif": ["DM Serif Display", "serif"],
        "glacial-indifference-regular": ["Glacial Indifference Regular", "sans-serif"],
        "glacial-indifference-bold": ["Glacial Indifference Bold", "sans-serif"],
      },
      colors: {
        pink: "#FFC5C5",
        purple: "#C499F3",
        blue: "#7360DF",
        navy: "#33186B"
      }
    }
  },
  plugins: []
};
