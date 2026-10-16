const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../src/js/scrollytelling.js');
let code = fs.readFileSync(targetPath, 'utf8');

const lines = code.split('\n');
lines.forEach((l, i) => {
  if (l.includes('aspect-')) {
    console.log(`${i + 1}: ${l}`);
  }
});

// Replace invalid unescaped querySelector with safe attribute selector
code = code.replace(/\.aspect-\[4\/3\]/g, '[class*="aspect-"]');
code = code.replace(/\.aspect-\[3\/2\]/g, '[class*="aspect-"]');
code = code.replace(/\.aspect-\[16\/9\]/g, '[class*="aspect-"]');

fs.writeFileSync(targetPath, code, 'utf8');
console.log('Fixed aspect querySelector in scrollytelling.js!');
