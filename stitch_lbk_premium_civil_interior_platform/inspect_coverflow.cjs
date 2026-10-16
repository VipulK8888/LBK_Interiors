const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/js/coverflow3d.js');
const code = fs.readFileSync(filePath, 'utf8');

const lines = code.split('\n');
lines.forEach((l, i) => {
  if (l.includes('radius') || l.includes('calc') || l.includes('updateCardPositions') || l.includes('render(')) {
    console.log(`${i + 1}: ${l}`);
  }
});
