/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hoverBgColor": "#F3F3FB",
        "blueColor": "rgba(5, 104, 253, 1)"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
