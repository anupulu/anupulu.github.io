export async function POST(request: Request) {
  try {
    const { code } = await request.json()

    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    })

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    console.error('Token exchange error:', error)
    return Response.json({ error: 'Failed to exchange token' }, { status: 500 })
  }
} 