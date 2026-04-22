/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'attacker-bg': '#0f172a',
        'attacker-text': '#10b981',
        'attacker-highlight': '#34d399',
      }
    },
  },
  plugins: [],
}
