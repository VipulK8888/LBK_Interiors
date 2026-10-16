const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
const lines = fs.readFileSync(indexPath, 'utf8').split('\n');

console.log('--- QUOTE SECTION CONTACT DETAILS ---');
lines.forEach((l, i) => {
  if (i > 950 && (l.includes('tel:') || l.includes('Call') || l.includes('Phone') || l.includes('94141') || l.includes('Udaipur') || l.includes('Sukher'))) {
    console.log(`${i + 1}: ${l.trim()}`);
  }
});
