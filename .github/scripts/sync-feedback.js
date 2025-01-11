require('dotenv').config({ path: '.env.local' });
const { Octokit } = require('@octokit/rest');
const fs = require('fs');
const path = require('path');

async function syncFeedback() {
  console.log('Starting sync process...');
  
  const token = process.env.GITHUB_ACCESS_TOKEN;
  const owner = process.env.GITHUB_REPO_OWNER;
  const repo = process.env.GITHUB_REPO_NAME;

  if (!token || !owner || !repo) {
    console.error('Error: Required environment variables not set');
    console.error('Values found:', { 
      token: token ? 'present' : 'missing',
      owner: owner || 'missing',
      repo: repo || 'missing'
    });
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
    process.exit(1);
  }
}

syncFeedback();