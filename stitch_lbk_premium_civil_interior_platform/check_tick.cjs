const fs = require('fs');
const content = fs.readFileSync('../src/js/hero3dScrolly.js', 'utf8');
const lines = content.split('\n');
const idx = lines.findIndex(l => l.includes('this.bc.position'));
console.log('Lines around this.bc.position:');
console.log(lines.slice(Math.max(0, idx - 5), idx + 15).map((l, i) => `${i + idx - 4}: ${l}`).join('\n'));
