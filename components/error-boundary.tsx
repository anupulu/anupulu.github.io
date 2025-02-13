'use client'

import React from 'react'
import { Card } from '@/components/ui/card'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center p-4">
          <Card className="max-w-lg w-full p-6 text-center">
            <h2 className="text-2xl font-bold text-forest-green mb-4">
              Something went wrong
            </h2>
            <p className="text-text-dark mb-6">
              I apologize for the inconvenience. Please try refreshing the page or come back later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-forest-green text-white px-6 py-2 rounded-full hover:bg-sage-green transition-colors"
            >
              Refresh page
            </button>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
} 