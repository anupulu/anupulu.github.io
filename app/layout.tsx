'use client';

import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import FeedbackButton from '@/components/FeedbackButton'
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { ErrorBoundary } from '@/components/error-boundary'
import { usePerformanceMonitoring } from '@/hooks/use-performance'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Ensure text remains visible during webfont load
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  usePerformanceMonitoring();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Personal portfolio and digital garden of Anu Ylanen" />
        <Script 
          defer
          src="https://cloud.umami.is/script.js" 
          data-website-id="9c3b7778-ed3a-47a9-b5d1-3cd93790449b"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-white text-text-dark antialiased`}>
        <ErrorBoundary>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          {pathname !== '/contact/' && <FeedbackButton />}
        </ErrorBoundary>
      </body>
    </html>
  )
}