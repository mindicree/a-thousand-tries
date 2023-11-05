/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        titlefont: ['TITLEFONT', 'sans']
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
        '3500': '3500ms',
        '4000': '4000ms',
        '4500': '4500ms',
        '5000': '5000ms'
      }
    },
  },
  plugins: [],
}

