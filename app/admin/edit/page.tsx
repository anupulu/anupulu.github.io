'use client'

import { useState, useEffect, Suspense } from 'react'
import { Card } from '@/components/ui/card'
import { useRouter, useSearchParams } from 'next/navigation'
import { Octokit } from '@octokit/rest'
import { allLearnings } from '.contentlayer/generated'

interface FrontMatter {
  title: string
  date: string
  description: string
  tags: string[]
  relatedManifestoPrinciples?: string[]
  image?: {
    url: string
    alt: string
    caption?: string
  }
  relatedLinks?: Array<{
    title: string
    url: string
    description?: string
  }>
}

function parseFrontMatter(content: string): { frontMatter: FrontMatter; body: string } {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = content.match(frontMatterRegex)
  
  if (!match) {
    return {
      frontMatter: {
        title: '',
        date: new Date().toISOString().split('T')[0],
        description: '',
        tags: []
      },
      body: content
    }
  }

  const [, frontMatterYaml, body] = match
  
  // Split into lines and process
  const lines = frontMatterYaml.split('\n')
  const parsed: Record<string, any> = {}
  let currentKey: string | null = null
  let currentObject: Record<string, any> | null = null
  let currentArray: any[] | null = null
  
  for (let line of lines) {
    line = line.trim()
    if (!line) continue

    // Check for main level key
    if (!line.startsWith(' ') && !line.startsWith('-')) {
      const [key, ...rest] = line.split(':')
      if (key && rest.length) {
        currentKey = key.trim()
        const value = rest.join(':').trim()
        
        // Handle array format [item1, item2]
        if (value.startsWith('[') && value.endsWith(']')) {
          parsed[currentKey] = value
            .slice(1, -1)
            .split(',')
            .map(s => s.trim().replace(/^["']|["']$/g, ''))
            .filter(Boolean)
        }
        // Handle object start
        else if (!value) {
          currentObject = {}
          parsed[currentKey] = currentObject
        }
        // Handle simple value
        else {
          parsed[currentKey] = value.replace(/^["']|["']$/g, '')
        }
      }
    }
    // Handle object properties
    else if (line.startsWith('  ') && !line.startsWith('  -') && currentKey) {
      const [key, ...rest] = line.trim().split(':')
      if (key && rest.length && currentObject) {
        const value = rest.join(':').trim()
        currentObject[key.trim()] = value.replace(/^["']|["']$/g, '')
      }
    }
    // Handle array items
    else if (line.startsWith('  -') && currentKey) {
      if (!Array.isArray(parsed[currentKey])) {
        parsed[currentKey] = []
      }
      
      // If it's a simple array item
      const value = line.slice(3).trim()
      if (!value.includes(':')) {
        parsed[currentKey].push(value.replace(/^["']|["']$/g, ''))
      }
      // If it's an object in an array
      else {
        currentObject = {}
        parsed[currentKey].push(currentObject)
      }
    }
    // Handle object properties in array items
    else if (line.startsWith('    ') && currentObject) {
      const [key, ...rest] = line.trim().split(':')
      if (key && rest.length) {
        const value = rest.join(':').trim()
        currentObject[key.trim()] = value.replace(/^["']|["']$/g, '')
      }
    }
  }

  // Convert parsed data to FrontMatter type
  const frontMatter: FrontMatter = {
    title: parsed.title || '',
    date: parsed.date || new Date().toISOString().split('T')[0],
    description: parsed.description || '',
    tags: Array.isArray(parsed.tags) ? parsed.tags : [],
    relatedManifestoPrinciples: Array.isArray(parsed.relatedManifestoPrinciples) 
      ? parsed.relatedManifestoPrinciples 
      : undefined,
    image: parsed.image || undefined,
    relatedLinks: Array.isArray(parsed.relatedLinks) ? parsed.relatedLinks : undefined
  }

  return { frontMatter, body: body.trim() }
}

function stringifyFrontMatter(frontMatter: FrontMatter, body: string): string {
  const frontMatterLines = Object.entries(frontMatter)
    .filter(([_, value]) => value !== undefined && value !== '')
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}: [${value.map(v => `"${v}"`).join(', ')}]`
      }
      if (typeof value === 'object') {
        return `${key}:\n  ${Object.entries(value)
          .map(([k, v]) => `${k}: "${v}"`)
          .join('\n  ')}`
      }
      return `${key}: "${value}"`
    })

  return `---\n${frontMatterLines.join('\n')}\n---\n\n${body}`
}

const manifestoPrinciples = [
  "Ethical impact over short-term gains",
  "Responsible innovation over unchecked progress",
  "Human-centered design over pure technological advancement",
  "Continuous learning over stagnation",
  "Diverse perspectives over homogeneous thinking",
  "Transparency and honesty over opacity",
  "Empathy and understanding over assumptions",
  "Collaborative growth over individual success"
]

function EditPageContent() {
  const [frontMatter, setFrontMatter] = useState<FrontMatter>({
    title: '',
    date: new Date().toISOString().split('T')[0],
    description: '',
    tags: []
  })
  const [body, setBody] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const slug = searchParams.get('slug')

  useEffect(() => {
    if (!slug) {
      router.push('/admin')
      return
    }

    const loadContent = async () => {
      // Get content from Contentlayer
      const learning = allLearnings.find(l => l.slug === slug)
      if (learning) {
        // Use the parsed data directly from Contentlayer
        setFrontMatter({
          title: learning.title,
          date: new Date(learning.date).toISOString().split('T')[0],
          description: learning.description,
          tags: learning.tags,
          relatedManifestoPrinciples: learning.relatedManifestoPrinciples,
          image: learning.image,
          relatedLinks: learning.relatedLinks
        })
        // Set the body content directly from the raw MDX
        setBody(learning.body.raw.replace(/^---[\s\S]*?---\n/, '').trim())
        return
      }

      // If not found in Contentlayer, try GitHub API
      const token = localStorage.getItem('github_token')
      if (!token) {
        router.push('/admin')
        return
      }

      const octokit = new Octokit({ auth: token })
      
      try {
        const response = await octokit.repos.getContent({
          owner: 'anupulu',
          repo: 'anupulu.github.io',
          path: `content/learnings/${slug}.mdx`,
        })

        if ('content' in response.data) {
          const decodedContent = atob(response.data.content)
          const { frontMatter: parsedFrontMatter, body: parsedBody } = parseFrontMatter(decodedContent)
          setFrontMatter(parsedFrontMatter)
          setBody(parsedBody)
        }
      } catch (error) {
        console.error('Error fetching content:', error)
        setMessage('Error loading content')
      }
    }

    loadContent()
  }, [slug, router])

  const handleSave = async () => {
    if (!slug) return

    const token = localStorage.getItem('github_token')
    if (!token) {
      router.push('/admin')
      return
    }

    setIsSaving(true)
    setMessage('')

    try {
      const octokit = new Octokit({ auth: token })
      const content = stringifyFrontMatter(frontMatter, body)

      // Get the current file to get its SHA
      const currentFile = await octokit.repos.getContent({
        owner: 'anupulu',
        repo: 'anupulu.github.io',
        path: `content/learnings/${slug}.mdx`,
      })

      if (!('sha' in currentFile.data)) {
        throw new Error('Could not get file SHA')
      }

      // Update the file
      await octokit.repos.createOrUpdateFileContents({
        owner: 'anupulu',
        repo: 'anupulu.github.io',
        path: `content/learnings/${slug}.mdx`,
        message: `Update ${slug}.mdx`,
        content: btoa(content),
        sha: currentFile.data.sha,
      })

      setMessage('Content saved successfully!')
    } catch (error) {
      console.error('Error saving content:', error)
      setMessage('Error saving content')
    } finally {
      setIsSaving(false)
    }
  }

  if (!slug) {
    return null
  }

  return (
    <main className="min-h-screen py-16 bg-gradient-to-r from-sage-green/5 to-muted-terracotta/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-forest-green mb-2">
              Edit {slug}
            </h1>
            <p className="text-text-dark/70">
              Make changes to your content and click Save when you're done.
            </p>
          </div>
          <button
            onClick={() => router.push('/admin')}
            className="flex items-center gap-2 px-4 py-2 text-text-dark hover:text-forest-green transition-colors rounded-full hover:bg-white/50"
          >
            ← Back to Admin
          </button>
        </div>

        <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border-forest-green/10 hover:border-forest-green/20 transition-all duration-300">
          <div className="space-y-6">
            {/* Title field */}
            <div>
              <label className="block text-sm font-semibold text-forest-green mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={frontMatter.title}
                placeholder="Enter a descriptive title"
                onChange={(e) => setFrontMatter({ ...frontMatter, title: e.target.value })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green bg-white"
                required
              />
            </div>

            {/* Date and Description in a grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-forest-green mb-2">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={frontMatter.date}
                  onChange={(e) => setFrontMatter({ ...frontMatter, date: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-forest-green mb-2">
                  Tags <span className="text-red-500">*</span>
                  {frontMatter.tags.length > 0 && (
                    <span className="text-sm text-text-dark/60 ml-2">
                      Current: {frontMatter.tags.join(', ')}
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  value={frontMatter.tags.join(', ')}
                  placeholder="e.g., Next.js, React, TypeScript"
                  onChange={(e) => setFrontMatter({ 
                    ...frontMatter, 
                    tags: e.target.value.split(',').map(tag => tag.trim()).filter(Boolean)
                  })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-forest-green mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={frontMatter.description}
                placeholder="Write a brief description of your content"
                onChange={(e) => setFrontMatter({ ...frontMatter, description: e.target.value })}
                rows={3}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green bg-white"
                required
              />
            </div>

            {/* Manifesto Principles */}
            <div>
              <label className="block text-sm font-semibold text-forest-green mb-2">
                Related Manifesto Principles
                <span className="text-sm text-text-dark/60 ml-2">
                  {frontMatter.relatedManifestoPrinciples?.length 
                    ? `Selected: ${frontMatter.relatedManifestoPrinciples.length}` 
                    : '(Optional)'}
                </span>
              </label>
              <div className="space-y-2 p-4 border rounded-lg bg-white">
                <div className="grid md:grid-cols-2 gap-3">
                  {manifestoPrinciples.map((principle, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 hover:bg-sage-green/5 rounded-lg transition-colors">
                      <input
                        type="checkbox"
                        id={`principle-${index}`}
                        checked={frontMatter.relatedManifestoPrinciples?.includes(principle) || false}
                        onChange={(e) => {
                          const currentPrinciples = frontMatter.relatedManifestoPrinciples || []
                          const newPrinciples = e.target.checked
                            ? [...currentPrinciples, principle]
                            : currentPrinciples.filter(p => p !== principle)
                          setFrontMatter({
                            ...frontMatter,
                            relatedManifestoPrinciples: newPrinciples
                          })
                        }}
                        className="h-4 w-4 text-forest-green border-gray-300 rounded focus:ring-forest-green"
                      />
                      <label 
                        htmlFor={`principle-${index}`}
                        className="text-sm text-text-dark hover:text-forest-green cursor-pointer"
                      >
                        {principle}
                      </label>
                    </div>
                  ))}
                </div>
                {frontMatter.relatedManifestoPrinciples?.length > 0 && (
                  <div className="pt-3 mt-3 border-t">
                    <button
                      onClick={() => setFrontMatter({
                        ...frontMatter,
                        relatedManifestoPrinciples: []
                      })}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Clear All Selections
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Image section */}
            <div>
              <label className="block text-sm font-semibold text-forest-green mb-2">
                Image Details
                <span className="text-sm text-text-dark/60 ml-2">(Optional)</span>
              </label>
              <div className="space-y-3 p-4 border rounded-lg bg-white">
                {frontMatter.image?.url && (
                  <div className="text-sm text-forest-green mb-3 p-2 bg-sage-green/10 rounded-lg">
                    Current image: {frontMatter.image.url}
                  </div>
                )}
                <div className="grid gap-3">
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={frontMatter.image?.url || ''}
                    onChange={(e) => {
                      const currentImage = frontMatter.image || { url: '', alt: '' }
                      setFrontMatter({
                        ...frontMatter,
                        image: {
                          ...currentImage,
                          url: e.target.value
                        }
                      })
                    }}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                  />
                  <input
                    type="text"
                    placeholder="Alt text (required if URL is provided)"
                    value={frontMatter.image?.alt || ''}
                    onChange={(e) => {
                      const currentImage = frontMatter.image || { url: '', alt: '' }
                      setFrontMatter({
                        ...frontMatter,
                        image: {
                          ...currentImage,
                          alt: e.target.value
                        }
                      })
                    }}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                  />
                  <input
                    type="text"
                    placeholder="Caption (optional)"
                    value={frontMatter.image?.caption || ''}
                    onChange={(e) => {
                      const currentImage = frontMatter.image || { url: '', alt: '' }
                      setFrontMatter({
                        ...frontMatter,
                        image: {
                          ...currentImage,
                          caption: e.target.value
                        }
                      })
                    }}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                  />
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div>
              <label className="block text-sm font-semibold text-forest-green mb-2">
                Related Links
                <span className="text-sm text-text-dark/60 ml-2">
                  {frontMatter.relatedLinks?.length 
                    ? `(${frontMatter.relatedLinks.length} links)` 
                    : '(Optional)'}
                </span>
              </label>
              <div className="space-y-4">
                {(frontMatter.relatedLinks || []).map((link, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-white">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-forest-green">Link #{index + 1}</span>
                      <button
                        onClick={() => {
                          const newLinks = [...(frontMatter.relatedLinks || [])]
                          newLinks.splice(index, 1)
                          setFrontMatter({ ...frontMatter, relatedLinks: newLinks })
                        }}
                        className="text-red-500 hover:text-red-700 text-sm px-3 py-1 rounded-full hover:bg-red-50 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid gap-3">
                      <input
                        type="text"
                        placeholder="Link Title"
                        value={link.title}
                        onChange={(e) => {
                          const newLinks = [...(frontMatter.relatedLinks || [])]
                          newLinks[index] = { ...link, title: e.target.value }
                          setFrontMatter({ ...frontMatter, relatedLinks: newLinks })
                        }}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                      />
                      <input
                        type="text"
                        placeholder="URL"
                        value={link.url}
                        onChange={(e) => {
                          const newLinks = [...(frontMatter.relatedLinks || [])]
                          newLinks[index] = { ...link, url: e.target.value }
                          setFrontMatter({ ...frontMatter, relatedLinks: newLinks })
                        }}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                      />
                      <input
                        type="text"
                        placeholder="Description (optional)"
                        value={link.description || ''}
                        onChange={(e) => {
                          const newLinks = [...(frontMatter.relatedLinks || [])]
                          newLinks[index] = { ...link, description: e.target.value }
                          setFrontMatter({ ...frontMatter, relatedLinks: newLinks })
                        }}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => {
                    const newLinks = [...(frontMatter.relatedLinks || []), { title: '', url: '', description: '' }]
                    setFrontMatter({ ...frontMatter, relatedLinks: newLinks })
                  }}
                  className="text-forest-green hover:text-sage-green text-sm flex items-center gap-1 px-4 py-2 rounded-full hover:bg-white/50 transition-colors"
                >
                  <span>+ Add Related Link</span>
                </button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-white/80 backdrop-blur-sm border-forest-green/10 hover:border-forest-green/20 transition-all duration-300">
          <label className="block text-sm font-semibold text-forest-green mb-3">
            Content (MDX) <span className="text-red-500">*</span>
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full h-[400px] p-4 font-mono text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green bg-white"
            placeholder="Write your content in MDX format..."
            required
          />
          
          <div className="mt-8 flex items-center justify-between">
            <span className={`text-sm px-4 py-2 rounded-full ${
              message.includes('Error') 
                ? 'text-red-500 bg-red-50' 
                : message 
                  ? 'text-forest-green bg-sage-green/10'
                  : ''
            }`}>
              {message}
            </span>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-forest-green text-white px-8 py-3 rounded-full hover:bg-sage-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </Card>
      </div>
    </main>
  )
}

export default function EditPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Card className="p-6">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="h-[600px] bg-gray-200 rounded"></div>
            </div>
          </Card>
        </div>
      </div>
    }>
      <EditPageContent />
    </Suspense>
  )
} 