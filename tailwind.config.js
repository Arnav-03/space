/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      colors: {
        'body-color': 'var(--body-color)', // Use your custom variable here
      },
    extend: {},
  },
  plugins: [],
}

