/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors:{
        'estate-primary' : '#88C7B2',
        'estate-secondary' : '#3C3B5D',
      }
    },
  },
  plugins: [],
}

