'use client';

import React, { useEffect } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import FeedbackButton from '@/components/FeedbackButton'
import { Tracker } from '@/components/analytics/Tracker'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  useEffect(() => {
    console.log('Current pathname:', pathname);
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {pathname !== '/contact/' && <FeedbackButton />}
        <Tracker />
      </body>
    </html>
  )
}