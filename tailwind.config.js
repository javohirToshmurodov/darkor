/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hoverBgColor": "#F3F3FB",
        "blueColor": "rgba(5, 104, 253, 1)",
        "expertbg": "rgba(243, 243, 251, 1)",
        "systemblue": "rgba(0, 122, 255, 1)"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
