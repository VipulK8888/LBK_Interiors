const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
const lines = fs.readFileSync(indexPath, 'utf8').split('\n');

lines.forEach((l, i) => {
  if (l.includes('<section id="scene-01"') || l.includes('</section>') && i < 300) {
    console.log(`${i + 1}: ${l}`);
  }
});
