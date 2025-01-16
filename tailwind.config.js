/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        light: 200,
        normal: 300,
        medium: 500,
        semibold: 600,
      },
    },
  },
  plugins: [],
};