'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"

type FeedbackType = 'bug' | 'idea'
type Status = 'idle' | 'loading' | 'success' | 'error'

interface FeedbackItem {
  type: FeedbackType;
  description: string;
  timestamp: string;
  status: 'pending' | 'synced';
}

export default function FeedbackForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('bug')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!description.trim()) {
      setError('Please provide a description')
      return
    }

    try {
      const newFeedback: FeedbackItem = {
        type: feedbackType,
        description: description.trim(),
        timestamp: new Date().toISOString(),
        status: 'pending'
      }

      const existingFeedback: FeedbackItem[] = JSON.parse(localStorage.getItem('feedback') || '[]')
      localStorage.setItem('feedback', JSON.stringify([...existingFeedback, newFeedback]))

      setStatus('success')
      setDescription('')
      setFeedbackType('bug')
      setError('')
      setTimeout(() => setStatus('idle'), 3000)
    } catch (err) {
      setStatus('error')
      setError('Failed to save feedback')
    }
  }

  return (
    <Card className="max-w-md mx-auto p-8 bg-white border border-gray-100 hover-card">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-text-dark">
            What type of feedback do you have?
          </label>
          <div className="flex gap-4">
            {['bug', 'idea'].map((type) => (
              <label key={type} className="flex items-center group cursor-pointer">
                <input
                  type="radio"
                  value={type}
                  checked={feedbackType === type}
                  onChange={(e) => setFeedbackType(e.target.value as FeedbackType)}
                  className="sr-only"
                />
                <div className={`
                  px-4 py-2 rounded-full text-sm font-medium
                  ${feedbackType === type 
                    ? 'bg-forest-green/10 text-forest-green' 
                    : 'bg-white border border-gray-200 text-text-dark hover:bg-gray-50'}
                  transition-all duration-300
                `}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-text-dark">
            Tell me more
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Share your thoughts, ideas, or report a bug..."
            className="w-full p-3 border border-gray-200 rounded-lg
                     focus:ring-2 focus:ring-forest-green focus:border-forest-green
                     min-h-[120px] placeholder:text-gray-400"
            required
          />
        </div>

        {status === 'error' && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
        {status === 'success' && (
          <p className="text-green-500 text-sm">Feedback saved successfully!</p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-forest-green text-white py-3 px-6 rounded-lg
                   hover:bg-sage-green transition-colors duration-300
                   font-medium shadow-sm disabled:opacity-50"
        >
          {status === 'loading' ? 'Saving...' : 'Submit Feedback'}
        </button>
      </form>
    </Card>
  )
}