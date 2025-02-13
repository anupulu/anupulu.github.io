'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function usePerformanceMonitoring() {
  const pathname = usePathname()

  useEffect(() => {
    // Only run in production and if the Web Vitals API is available
    if (process.env.NODE_ENV === 'production' && 'performance' in window) {
      // Report page view timing
      const pageViewTiming = performance.now()
      console.info(`Page view timing for ${pathname}: ${pageViewTiming}ms`)

      // Report largest contentful paint
      const reportLCP = () => {
        const entries = performance.getEntriesByType('largest-contentful-paint')
        if (entries.length > 0) {
          const lcp = entries[0]
          console.info(`Largest Contentful Paint: ${lcp.startTime}ms`)
        }
      }

      // Report first input delay
      const reportFID = () => {
        const entries = performance.getEntriesByType('first-input')
        if (entries.length > 0) {
          const entry = entries[0] as PerformanceEventTiming
          const fid = entry.processingStart - entry.startTime
          console.info(`First Input Delay: ${fid}ms`)
        }
      }

      // Observe performance entries
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const entryType = entry.entryType
          if (entryType === 'largest-contentful-paint') {
            reportLCP()
          }
          if (entryType === 'first-input') {
            reportFID()
          }
        })
      })

      // Start observing
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] })

      return () => {
        observer.disconnect()
      }
    }
  }, [pathname])
} 