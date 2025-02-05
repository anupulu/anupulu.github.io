'use client';

import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import FeedbackButton from '@/components/FeedbackButton'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <Script 
          defer
          src="https://cloud.umami.is/script.js" 
          data-website-id="9c3b7778-ed3a-47a9-b5d1-3cd93790449b"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        {pathname !== '/contact/' && <FeedbackButton />}
      </body>
    </html>
  )
}