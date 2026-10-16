const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
const html = fs.readFileSync(indexPath, 'utf8');

const regex = /<section[^>]*id="([^"]*)"/g;
let match;
console.log('Sections found:');
while ((match = regex.exec(html)) !== null) {
  console.log('-', match[1]);
}
