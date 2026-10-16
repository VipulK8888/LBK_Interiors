const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
const html = fs.readFileSync(indexPath, 'utf8');

const idx = html.indexOf('id="hero-pinned-stage"');
console.log(html.slice(idx, idx + 1400));
