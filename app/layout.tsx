import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anu Ylänen | Digital Gardener',
  description: 'Personal portfolio of Anu Ylänen - Bridging technology and human needs through curiosity, collaboration, and conscious innovation.',
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2C5530',
}

const navigation = [
  { name: 'About me', href: '/about' },
  { name: 'Journey', href: '/journey' },
  { name: 'Learnings', href: '/learnings' },
  { name: 'Contact me', href: '/contact' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-text-dark min-h-screen flex flex-col`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-forest-green text-white px-4 py-2 rounded-md">
          Skip to main content
        </a>
        <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
          <nav className="max-w-5xl mx-auto px-6 py-4" aria-label="Main navigation">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <Link 
                href="/" 
                className="text-xl font-medium text-forest-green hover:text-sage-green transition-colors focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2 rounded-sm"
                aria-label="Home"
              >
                Anu Ylänen
              </Link>
              <div className="flex flex-wrap gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-text-dark hover:text-forest-green transition-colors focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2 rounded-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </header>
        <main id="main-content" className="pt-[60px] flex-grow">
          {children}
        </main>
        <footer className="border-t mt-20 bg-gradient-to-r from-sage-green/5 to-muted-terracotta/5" role="contentinfo">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <p className="text-text-dark text-sm">
              © {new Date().getFullYear()} Anu Ylänen. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}

