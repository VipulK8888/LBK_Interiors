const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
const lines = fs.readFileSync(indexPath, 'utf8').split('\n');

console.log(lines.slice(970, 995).map((l, i) => `${i + 971}: ${l}`).join('\n'));
console.log('--- lines 1110 to 1135 ---');
console.log(lines.slice(1110, 1135).map((l, i) => `${i + 1111}: ${l}`).join('\n'));
