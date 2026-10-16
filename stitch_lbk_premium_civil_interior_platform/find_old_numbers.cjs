const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../index.html');
let html = fs.readFileSync(targetPath, 'utf8');

// Find all matches of 94141
const lines = html.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('94141') || line.includes('98765')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
