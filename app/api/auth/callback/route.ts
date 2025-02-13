export const dynamic = 'force-static'

export async function GET() {
  return new Response(
    `
    <html>
      <body>
        <script>
          const code = new URLSearchParams(window.location.search).get('code');
          if (code) {
            fetch('/api/auth/token', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code }),
            })
            .then(response => response.json())
            .then(data => {
              if (data.access_token) {
                localStorage.setItem('github_token', data.access_token);
                window.location.href = '/admin';
              } else {
                window.location.href = '/admin?error=auth_failed';
              }
            })
            .catch((error) => {
              console.error('Auth error:', error);
              window.location.href = '/admin?error=auth_failed';
            });
          } else {
            window.location.href = '/admin';
          }
        </script>
      </body>
    </html>
    `,
    {
      headers: {
        'Content-Type': 'text/html',
      },
    }
  )
} 