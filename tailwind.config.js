/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "2rem",
      "2xl": "2rem",
      "3xl": "4rem",
      "4xl": "5rem",
      "5xl": "6rem",
      "6xl": "7rem",
      "7xl": "8rem",
      "8xl": "9rem",
      "9xl": "10rem",
      "10xl": "11rem",
      "11xl": "12rem",
      large: "1.5rem",
    },

    fontFamily: {
      body: ["Mingzat"],
    },
    extend: {
      colors: {
        "light-sandel": "#F3f3ef",
        "brown-custom": "#393f4d",
        "laundry-blue": "#bcbbac",
      },
    },
    screens: {
      small: { max: "575px" },
      medium: { max: "1024x" },
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
