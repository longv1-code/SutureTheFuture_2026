/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'robot-dreamer': ['Robot Dreamer', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'primary-cream': '#FFDEC3',
        'primary-white': '#FFFFFF',
        'button-main': '#D4A66D',
        'button-shadow': '#B78140',
        'button-highlight': '#FAEFD2',
        'button-highlight-shadow': '#FAEFD2',
        'button-highlight-main-shadow': '#CF9A59',
        'outer-space' : '#252525',
      },
    },
  },
  plugins: [],
}
