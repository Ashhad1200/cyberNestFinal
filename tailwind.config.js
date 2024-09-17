/** @type {import('tailwindcss').Config} */


// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode : "class" ,
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#1D4ED8',  // Example custom primary color
        secondary: '#9333EA',  // Example custom secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Example custom font family
      },
    },
  },
  plugins: [],
}

