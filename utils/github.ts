interface GitHubIssueResponse {
  html_url: string;
  number: number;
  state: string;
}

const GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
const REPO_OWNER = process.env.GITHUB_REPO_OWNER;
const REPO_NAME = process.env.GITHUB_REPO_NAME;

export async function createGitHubIssue(type: string, description: string): Promise<GitHubIssueResponse> {
  if (!GITHUB_TOKEN || !REPO_OWNER || !REPO_NAME) {
    throw new Error('Missing GitHub configuration');
  }

  const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: `[${type.toUpperCase()}] New Feedback`,
      body: description,
      labels: [type.toLowerCase()]
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  return response.json();
}