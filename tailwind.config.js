/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    colors: {
      "default-background": "#242424",
      "shippers-orange": "#f5a02b"
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

