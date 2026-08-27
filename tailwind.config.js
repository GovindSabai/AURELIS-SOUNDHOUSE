/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0D17', // deep charcoal / dark tone
        accent: {
          violet: '#8A2BE2', // electric violet
          cyan: '#00FFFF', // neon cyan
          lavender: '#E6E6FA', // soft lavender
          lime: '#32CD32', // bright lime
          coral: '#FF7F50', // warm coral
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
