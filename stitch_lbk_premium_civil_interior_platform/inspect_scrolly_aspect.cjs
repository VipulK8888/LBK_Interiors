const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../src/js/scrollytelling.js');
const lines = fs.readFileSync(targetPath, 'utf8').split('\n');

console.log(lines.slice(170, 205).map((l, i) => `${i + 171}: ${l}`).join('\n'));
