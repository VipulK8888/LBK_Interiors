const fs = require('fs');
const content = fs.readFileSync('../src/js/hero3dScrolly.js', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('tile_') || l.includes('tiles/') || l.includes('FLOOR')) {
    console.log(i + 1, l);
  }
});
