/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#a855f7",
          neutral: "#3d4451",
          "base-100": "#f3f4f6",
          banner: "#6ee7b7"
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
}