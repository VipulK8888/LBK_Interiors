const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

console.log('Includes site-header:', indexHtml.includes('site-header'));
console.log('Includes mobile-nav-drawer:', indexHtml.includes('mobile-nav-drawer'));
console.log('Includes mobile-menu-btn:', indexHtml.includes('mobile-menu-btn'));

const bodyIdx = indexHtml.indexOf('<body');
console.log('Body snippet:\n', indexHtml.slice(bodyIdx, bodyIdx + 400));
