const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
const html = fs.readFileSync(indexPath, 'utf8');

const matches94141 = [];
const matchesUdaipur = [];
const matchesWa = [];

html.split('\n').forEach((line, idx) => {
  if (line.includes('94141')) matches94141.push(`${idx + 1}: ${line.trim()}`);
  if (line.toLowerCase().includes('udaipur')) matchesUdaipur.push(`${idx + 1}: ${line.trim()}`);
  if (line.includes('wa.me')) matchesWa.push(`${idx + 1}: ${line.trim()}`);
});

console.log('--- 94141 matches ---');
console.log(matches94141.join('\n'));

console.log('--- wa.me matches ---');
console.log(matchesWa.join('\n'));

console.log('--- Udaipur matches count:', matchesUdaipur.length);
console.log(matchesUdaipur.slice(0, 10).join('\n'));
