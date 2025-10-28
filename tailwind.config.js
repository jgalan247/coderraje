/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'coderra-blue': '#1a7aa6',
        'coderra-purple': '#6a55ff',
        'coderra-green': '#0aa87a',
        'coderra-orange': '#de8a2a',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
