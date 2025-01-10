import FeedbackForm from '@/components/FeedbackForm'

export default function FeedbackPage() {
  return (
    <main className="min-h-screen py-12 sm:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-forest-green mb-3">
            Share Your Feedback
          </h1>
          <p className="text-text-dark">
            Help me improve by sharing your thoughts, reporting bugs, or suggesting new ideas.
          </p>
        </div>

        <FeedbackForm />
      </div>
    </main>
  )
} 