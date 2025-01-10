'use client'

import { useState } from 'react'

type FeedbackType = 'bug' | 'idea'

export default function FeedbackForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('bug')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ feedbackType, description })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Feedback Type
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="bug"
              checked={feedbackType === 'bug'}
              onChange={(e) => setFeedbackType(e.target.value as FeedbackType)}
              className="mr-2"
            />
            Bug
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="idea"
              checked={feedbackType === 'idea'}
              onChange={(e) => setFeedbackType(e.target.value as FeedbackType)}
              className="mr-2"
            />
            Idea
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows={4}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Submit Feedback
      </button>
    </form>
  )
} 