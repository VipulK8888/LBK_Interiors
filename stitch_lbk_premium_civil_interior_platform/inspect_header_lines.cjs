const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
const lines = fs.readFileSync(indexPath, 'utf8').split('\n');

console.log('--- HEADER LINES (235 - 280) ---');
console.log(lines.slice(234, 280).map((l, i) => `${i + 235}: ${l}`).join('\n'));

console.log('--- DRAWER & WHATSAPP LINES (330 - 375) ---');
console.log(lines.slice(330, 375).map((l, i) => `${i + 331}: ${l}`).join('\n'));
