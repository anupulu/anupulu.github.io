import * as fs from 'fs'
import * as path from 'path'

interface FeedbackItem {
  type: 'bug' | 'idea';
  description: string;
  timestamp: string;
  status: 'pending' | 'synced';
}

const testData: FeedbackItem[] = [
  {
    type: 'bug',
    description: 'Test bug report from local storage',
    timestamp: new Date().toISOString(),
    status: 'pending'
  },
  {
    type: 'idea',
    description: 'Test feature idea from local storage',
    timestamp: new Date().toISOString(),
    status: 'pending'
  }
];

const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const feedbackPath = path.join(dataDir, 'feedback.json');
fs.writeFileSync(feedbackPath, JSON.stringify(testData, null, 2));

console.log('Test data created in data/feedback.json');