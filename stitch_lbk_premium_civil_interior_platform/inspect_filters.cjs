const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
const html = fs.readFileSync(indexPath, 'utf8');

const idx = html.indexOf('id="portfolio-filters"');
if (idx !== -1) {
  console.log('portfolio-filters found:\n', html.slice(idx - 60, idx + 600));
} else {
  console.log('portfolio-filters NOT found');
}
