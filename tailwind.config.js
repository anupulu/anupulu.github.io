/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2F4F4F',
        'sage-green': '#8FBC8F',
        'muted-terracotta': '#E2725B',
        'text-dark': '#333333',
        'muted-terracotta': {
        500: '#E2725B',
        700: '#B85642',
      },
    },
  },
  plugins: [],
}

