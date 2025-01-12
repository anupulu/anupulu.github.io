import { Octokit } from '@octokit/rest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

console.log('\n=== Environment Debug ===');

// Step 1: Clear cache
delete process.env.GITHUB_ACCESS_TOKEN;
console.log('1. Cleared env cache');

// Step 2: Read raw file
const envPath = path.resolve(process.cwd(), '.env.local');
try {
  const rawContent = fs.readFileSync(envPath, 'utf8');
  console.log('2. Raw file content:', rawContent.replace(/ghp_[a-zA-Z0-9]+/g, '[TOKEN]'));
} catch (err) {
  console.error('2. File read error:', err);
}

// Step 3: Load with dotenv
const config = dotenv.config({ path: envPath });
console.log('3. Dotenv config result:', config);

// Step 4: Check loaded value
console.log('4. Loaded token:', {
  value: process.env.GITHUB_ACCESS_TOKEN?.substring(0, 10),
  type: typeof process.env.GITHUB_ACCESS_TOKEN
});

async function syncFeedback() {
  console.log('\n=== Starting Sync Process ===');
  
  const token = process.env.GITHUB_ACCESS_TOKEN;
  const owner = process.env.GITHUB_REPO_OWNER;
  const repo = process.env.GITHUB_REPO_NAME;

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