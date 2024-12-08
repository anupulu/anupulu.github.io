import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-[400px] mb-16">
      <Image
        src="/hero-image.jpg"
        alt="Sustainable technology concept"
        fill
        className="object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-soft-cream">
            Mission-driven innovator & lifelong learner
          </h1>
          <p className="text-xl text-soft-cream max-w-2xl mx-auto">
            Product Manager with 8+ years of experience in creating meaningful, user-centered experiences 
            by combining data insights with thoughtful service design.
          </p>
        </div>
      </div>
    </section>
  )
}

