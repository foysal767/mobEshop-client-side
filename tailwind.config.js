/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  daisyui: {
    themes: [
      {
        mobEshoptheme: {
          primary: '#05b3f2',
          secondary: '#06a16d',
          accent: "#3A4256",
          neutral: "#3D4451",
          'base-100': "#FFFFFF"
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
