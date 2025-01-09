import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://your-website.com'
      : 'http://localhost:3000'
  ),
  title: 'Anu Ylänen',
  description: 'Digital gardener, growing good. Product leader with a passion for creating meaningful, user-centered experiences.',
  keywords: ['Product Management', 'UX Design', 'Digital Product', 'Switzerland', 'Product Leader'],
  authors: [{ name: 'Anu Ylänen' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anupulu.github.io',
    title: 'Anu Ylänen',
    description: 'Digital gardener, growing good. Product leader with a passion for creating meaningful, user-centered experiences.',
    siteName: 'Anu Ylänen'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anu Ylänen',
    description: 'Digital gardener, growing good. Product leader with a passion for creating meaningful, user-centered experiences.'
  },
  robots: {
    index: true,
    follow: true
  }
}

export const viewport: Viewport = {
  themeColor: '#2C5530',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/sprout.png" />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}


