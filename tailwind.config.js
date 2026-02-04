/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          light: '#0066cc',
          DEFAULT: '#1e3a8a', // Deep Blue
          dark: '#1e3a8a',
        },
        secondary: {
          DEFAULT: '#06b6d4', // Teal/Cyan
        },
        accent: {
          DEFAULT: '#fbbf24', // Yellow
        }
      },
    },
  },
  plugins: [],
}
