'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { allLearnings } from '.contentlayer/generated'
import { format } from 'date-fns'
import Link from 'next/link'

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('github_token')
    setIsAuthenticated(!!token)
  }, [])

  const handleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
    // Always use localhost:3000 in development
    const redirectUri = 'http://anupulu.github.io/api/auth/callback'
    
    // Log the values for debugging
    console.log('Environment:', process.env.NODE_ENV)
    console.log('Client ID:', clientId)
    console.log('Redirect URI:', redirectUri)
    
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo`
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Card className="p-6 text-center">
            <h1 className="text-2xl font-bold text-forest-green mb-4">
              Admin Login Required
            </h1>
            <p className="text-text-dark mb-6">
              Please log in with GitHub to access the admin dashboard.
            </p>
            <button
              onClick={handleLogin}
              className="bg-forest-green text-white px-6 py-2 rounded-full hover:bg-sage-green transition-colors"
            >
              Login with GitHub
            </button>
          </Card>
        </div>
      </main>
    )
  }

  // Sort learnings by date, most recent first
  const sortedLearnings = [...allLearnings].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-forest-green">
            Admin Dashboard
          </h1>
          <button
            onClick={() => {
              localStorage.removeItem('github_token')
              setIsAuthenticated(false)
            }}
            className="text-text-dark hover:text-forest-green transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="space-y-6">
          {sortedLearnings.map((learning) => (
            <Link 
              key={learning.slug}
              href={`/admin/edit?slug=${learning.slug}`}
            >
              <Card className="p-6 hover:border-forest-green transition-all duration-200">
                <div className="flex flex-col">
                  <h2 className="text-xl font-semibold text-forest-green mb-2">
                    {learning.title}
                  </h2>
                  <p className="text-text-dark mb-2">
                    {learning.description}
                  </p>
                  <div className="text-sm text-text-dark/70">
                    {format(new Date(learning.date), 'MMMM d, yyyy')}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
} 