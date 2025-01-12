import { Octokit } from '@octokit/rest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

console.log('=== Debug Token Loading ===');

// Load env file
const envPath = path.resolve(process.cwd(), '.env.local');
console.log('1. Env file:', {
  path: envPath,
  exists: fs.existsSync(envPath)
});

// Read raw content
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  console.log('2. Raw content:', content.replace(/ghp_[a-zA-Z0-9]+/g, '[TOKEN]'));
}

// Load with dotenv
const result = dotenv.config({ path: envPath });
console.log('3. Dotenv result:', result);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function syncFeedback() {
  console.log('Starting sync process...');
  console.log('Environment:', {
    isGitHubActions: !!process.env.GITHUB_ACTIONS,
    hasToken: !!process.env.GITHUB_ACCESS_TOKEN
  });
  
  const token = process.env.GITHUB_ACCESS_TOKEN;
  console.log('4. Token loaded:', {
    exists: !!token,
    prefix: token?.substring(0, 4),
    length: token?.length
  });

  const owner = process.env.GITHUB_REPO_OWNER;
  const repo = process.env.GITHUB_REPO_NAME;

  console.log('Step 4: Token check:', {
    exists: !!token,
    prefix: token?.substring(0, 4),
    length: token?.length
  });

  if (!token) {
    console.error('GitHub token not found');
    process.exit(1);
  }

  console.log('Loaded env variables:', {
    tokenExists: !!token,
    tokenPrefix: token?.substring(0, 4) || 'none',
    tokenLength: token?.length || 0,
    owner,
    repo
  });

  if (!token?.startsWith('ghp_')) {
    console.error('Error: Invalid token format. Token should start with ghp_');
    console.error('Current token:', token?.substring(0, 10));
    process.exit(1);
  }

  const octokit = new Octokit({
    auth: token
  });

  try {
    console.log('Testing repository access...');
    await octokit.repos.get({
      owner,
      repo
    });
    console.log('Repository access confirmed');

    const feedbackPath = path.join(process.cwd(), 'data', 'feedback.json');
    console.log(`Looking for feedback file at: ${feedbackPath}`);
    
    if (!fs.existsSync(feedbackPath)) {
      console.log('No feedback file found');
      return;
    }

    const feedback = JSON.parse(fs.readFileSync(feedbackPath, 'utf8'));
    console.log('Current feedback:', feedback);

    const pendingFeedback = feedback.filter(item => item.status === 'pending');
    console.log(`Found ${pendingFeedback.length} pending items`);

    for (const item of pendingFeedback) {
      console.log(`Processing feedback item: ${item.type}`);
      await octokit.issues.create({
        owner,
        repo,
        title: `[${item.type.toUpperCase()}] New Feedback`,
        body: `${item.description}\n\nSubmitted: ${item.timestamp}`,
        labels: [item.type]
      });
      console.log(`Created issue for: ${item.type}`);
      item.status = 'synced';
    }

    fs.writeFileSync(feedbackPath, JSON.stringify(feedback, null, 2));
    console.log('Sync completed successfully');
    
  } catch (error) {
    console.error('Sync failed:', error);
    if (error.status === 401) {
      console.error('Authentication failed. Please check your GitHub token.');
    }
    process.exit(1);
  }
}

syncFeedback();