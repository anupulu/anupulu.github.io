import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
        'sage-green': '#8BA888',
        'soft-cream': '#FAF7F2',
        'warm-neutral': '#D2C6B2',
        'muted-terracotta': '#E07A5F',
        'forest-green': '#2C5F2D',
        'text-dark': '#333333',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

