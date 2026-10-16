const fs = require('fs');
const path = require('path');

function searchAll(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') searchAll(full);
    } else if (file.endsWith('.js') || file.endsWith('.html') || file.endsWith('.css')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('94141') || content.includes('98765')) {
        console.log(`Found old number in: ${full}`);
      }
    }
  });
}

searchAll(path.resolve(__dirname, '../src'));
searchAll(path.resolve(__dirname, '..'));
