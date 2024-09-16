/** @type {import('tailwindcss').Config} */


// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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

