const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../src/js/scrollytelling.js');
let code = fs.readFileSync(targetPath, 'utf8');

code = code.replace(
  "scene08.querySelector('.grid.md\\:grid-cols-5')",
  "scene08.querySelector('[class*=\"grid-cols-5\"], .grid')"
);
code = code.replace(
  "scene08.querySelector('.grid.md\\:grid-cols-5')",
  "scene08.querySelector('[class*=\"grid-cols-5\"], .grid')"
);

fs.writeFileSync(targetPath, code, 'utf8');
console.log('Fixed line 315 in scrollytelling.js!');
