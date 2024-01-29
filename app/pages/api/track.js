// pages/api/track.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.resolve('./', 'visitorCount.json');
  const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  fileData.count = (fileData.count || 0) + 1;
  fs.writeFileSync(filePath, JSON.stringify(fileData));

  res.status(200).json({ count: fileData.count });
}
