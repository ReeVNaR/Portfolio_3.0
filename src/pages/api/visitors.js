import fs from 'fs';
import path from 'path';

const countFile = path.join(process.cwd(), 'data', 'visitors.json');

export default async function handler(req, res) {
  try {
    let count = 0;
    
    // Create data directory if it doesn't exist
    if (!fs.existsSync(path.join(process.cwd(), 'data'))) {
      fs.mkdirSync(path.join(process.cwd(), 'data'));
    }

    // Read existing count
    if (fs.existsSync(countFile)) {
      count = JSON.parse(fs.readFileSync(countFile, 'utf8')).count;
    }

    if (req.method === 'POST') {
      count += 1;
      fs.writeFileSync(countFile, JSON.stringify({ count }));
    }

    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process visitor count' });
  }
}
