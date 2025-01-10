'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { MessageCircleIcon, MailIcon } from 'lucide-react'

type FormType = 'contact' | 'feedback'
type FeedbackType = 'bug' | 'idea'

export default function ContactFeedbackForm() {
  const [formType, setFormType] = useState<FormType>('contact')
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('bug')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ formType, feedbackType, email, description })
  }

  return (
    <Card className="max-w-md mx-auto p-8 bg-white border border-gray-100 hover-card">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form Type Selection */}
        <div className="flex gap-4 justify-center">
          <button
            type="button"
            onClick={() => setFormType('contact')}
            className={`px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2
              ${formType === 'contact' 
                ? 'bg-forest-green text-white shadow-md' 
                : 'bg-white border border-gray-200 text-text-dark hover:bg-gray-50 hover:border-forest-green'}
              transition-all duration-300`}
          >
            <MailIcon className="w-4 h-4" />
            Contact Me
          </button>
          <button
            type="button"
            onClick={() => setFormType('feedback')}
            className={`px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2
              ${formType === 'feedback' 
                ? 'bg-forest-green text-white shadow-md' 
                : 'bg-white border border-gray-200 text-text-dark hover:bg-gray-50 hover:border-forest-green'}
              transition-all duration-300`}
          >
            <MessageCircleIcon className="w-4 h-4" />
            Give Feedback
          </button>
        </div>

        {/* Conditional Fields */}
        {formType === 'feedback' && (
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
        )}

        {/* Email Field (only for Contact) */}
        {formType === 'contact' && (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-text-dark">
              Your Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@example.com"
              className="w-full p-3 border border-gray-200 rounded-lg
                       focus:ring-2 focus:ring-forest-green focus:border-forest-green
                       placeholder:text-gray-400"
              required
            />
          </div>
        )}

        {/* Message Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-text-dark">
            {formType === 'contact' ? 'Your Message' : 'Tell me more'}
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={formType === 'contact' 
              ? "What would you like to discuss?"
              : "Share your thoughts, ideas, or report a bug..."}
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
          {formType === 'contact' ? 'Send Message' : 'Submit Feedback'}
        </button>
      </form>
    </Card>
  )
} 