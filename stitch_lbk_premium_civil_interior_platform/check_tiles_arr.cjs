const fs = require('fs');
const content = fs.readFileSync('../src/js/hero3dScrolly.js', 'utf8');
const lines = content.split('\n');
const idx = lines.findIndex(l => l.includes('const TILES = ['));
console.log(lines.slice(idx, idx + 35).join('\n'));
