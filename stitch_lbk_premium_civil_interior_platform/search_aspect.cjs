const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist') searchDir(full);
    } else if (f.endsWith('.js') || f.endsWith('.html') || f.endsWith('.cjs')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('.aspect-[4/3]') || content.includes("aspect-[4/3]")) {
        console.log(`Found in: ${full}`);
      }
    }
  }
}

searchDir(path.resolve(__dirname, '..'));
