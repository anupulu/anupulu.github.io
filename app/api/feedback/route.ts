import { Octokit } from '@octokit/rest'
import { NextResponse } from 'next/server'

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN
})

export async function POST(request: Request) {
  try {
    const { feedbackType, description } = await request.json()

    // Create GitHub issue
    const response = await octokit.issues.create({
      owner: process.env.GITHUB_REPO_OWNER!,
      repo: process.env.GITHUB_REPO_NAME!,
      title: `[${feedbackType.toUpperCase()}] New feedback submitted`,
      body: description,
      labels: [feedbackType]
    })

    return NextResponse.json({ 
      success: true, 
      issueUrl: response.data.html_url 
    })

  } catch (error) {
    console.error('Error creating GitHub issue:', error)
    return NextResponse.json(
      { error: 'Failed to submit feedback' },
      { status: 500 }
    )
  }
} 