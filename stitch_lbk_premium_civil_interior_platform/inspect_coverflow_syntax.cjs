const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/js/coverflow3d.js');
const lines = fs.readFileSync(filePath, 'utf8').split('\n');
console.log(lines.slice(145, 185).map((l, i) => `${i + 146}: ${l}`).join('\n'));
