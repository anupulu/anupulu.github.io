import fs from 'fs';
import path from 'path';

interface FeedbackItem {
  type: 'bug' | 'idea';
  description: string;
  timestamp: string;
  status: 'pending' | 'synced';
}

const testData: FeedbackItem[] = [
  {
    type: 'bug',
    description: 'Test bug report - Debug sync',
    timestamp: new Date().toISOString(),
    status: 'pending'
  }
];

const feedbackPath = path.join(process.cwd(), 'data', 'feedback.json');

// Create data directory if it doesn't exist
if (!fs.existsSync(path.dirname(feedbackPath))) {
  fs.mkdirSync(path.dirname(feedbackPath), { recursive: true });
}

fs.writeFileSync(feedbackPath, JSON.stringify(testData, null, 2));
console.log('Created test feedback data');