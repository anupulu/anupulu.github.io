import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2C5530',
        'sage-green': '#687864',
        'muted-terracotta': '#C17C74',
        'text-dark': '#2A2B2A',
        'soft-cream': '#F7F7F2',
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#2A2B2A',
            a: {
              color: '#687864',
              '&:hover': {
                color: '#2C5530',
              },
            },
            h1: {
              color: '#2C5530',
            },
            h2: {
              color: '#2C5530',
            },
            h3: {
              color: '#2C5530',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config

export default config

