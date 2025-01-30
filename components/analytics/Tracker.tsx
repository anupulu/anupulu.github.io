'use client'

import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { usePathname } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export function Tracker() {
  const pathname = usePathname()
  
  useEffect(() => {
    // Session management
    const SESSION_TIMEOUT = 30 * 60 * 1000 // 30 minutes
    const lastActivity = localStorage.getItem('lastActivity')
    const now = Date.now()
    
    const visitorId = localStorage.getItem('visitorId') || uuidv4()
    const sessionId = (!lastActivity || now - Number(lastActivity) > SESSION_TIMEOUT) 
      ? uuidv4() 
      : localStorage.getItem('sessionId') || uuidv4()

    localStorage.setItem('visitorId', visitorId)
    localStorage.setItem('sessionId', sessionId)
    localStorage.setItem('lastActivity', String(now))

    let debounceTimer: NodeJS.Timeout

    const logVisit = async () => {
      if (debounceTimer) clearTimeout(debounceTimer)

      debounceTimer = setTimeout(async () => {
        try {
          await supabase
            .from('visits')
            .insert({
              timestamp: new Date().toISOString(),
              path: pathname,
              session_id: sessionId,
              visitor_id: visitorId,
              user_agent: navigator.userAgent,
              screen_size: `${window.innerWidth}x${window.innerHeight}`,
              referrer: document.referrer
            })
        } catch (error) {
          console.error('Analytics error:', error)
        }
      }, 1000)
    }

    logVisit()

    return () => {
      if (debounceTimer) clearTimeout(debounceTimer)
    }
  }, [pathname])

  return null
}