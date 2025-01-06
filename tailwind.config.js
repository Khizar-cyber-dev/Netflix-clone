/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ['w-[240px]'],
  theme: {
    extend: {
      colors: {
        customGray: '#e5e5e5',
    },
    },
  },
  plugins: [],
}

