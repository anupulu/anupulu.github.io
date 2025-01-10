'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"

type FeedbackType = 'bug' | 'idea'

export default function FeedbackForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('bug')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ feedbackType, description })
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

        <button
          type="submit"
          className="w-full bg-forest-green text-white py-3 px-6 rounded-lg
                   hover:bg-sage-green transition-colors duration-300
                   font-medium shadow-sm"
        >
          Submit Feedback
        </button>
      </form>
    </Card>
  )
} 