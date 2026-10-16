const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../src/js/scrollytelling.js');
let code = fs.readFileSync(targetPath, 'utf8');

// Replace with safe attribute selector
code = code.replace(/scene04\.querySelector\([^)]*aspect[^)]*\)/g, "scene04.querySelector('[class*=\"aspect-\"]')");

fs.writeFileSync(targetPath, code, 'utf8');
console.log('Fixed aspect querySelector in scrollytelling.js!');
