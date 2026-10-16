const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, '../src/js/scrollytelling.js');
let code = fs.readFileSync(target, 'utf8');

code = code.replace(".querySelector('.aspect-[4/3]')", ".querySelector('[class*=\"aspect-\"]')");
code = code.replaceAll(".aspect-[4/3]", "[class*=\"aspect-\"]");

fs.writeFileSync(target, code, 'utf8');
console.log('Fixed aspect selector cleanly');
