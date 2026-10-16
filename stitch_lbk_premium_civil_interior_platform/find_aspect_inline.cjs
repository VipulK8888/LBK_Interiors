const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
const lines = fs.readFileSync(indexPath, 'utf8').split('\n');

lines.forEach((l, i) => {
  if (l.includes('.aspect-[4/3]') || (l.includes('querySelector') && l.includes('aspect'))) {
    console.log(`${i + 1}: ${l}`);
  }
});
