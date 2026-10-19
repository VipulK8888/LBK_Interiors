const fs = require('fs');
const path = require('path');

const compPath = path.resolve(__dirname, '../src/styles/components.css');
let css = fs.readFileSync(compPath, 'utf8');

const footerBottomRule = '\n@media (max-width: 640px) {\n  footer {\n    padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 86px) !important;\n  }\n}\n';

css += footerBottomRule;
fs.writeFileSync(compPath, css, 'utf8');
console.log('Added mobile bottom padding to footer');
