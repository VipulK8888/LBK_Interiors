const fs = require('fs');
const path = require('path');

const userHome = 'C:/Users/Vipul_kumawat';
const MAX_AGE = 48 * 3600 * 1000;
let results = [];

function search(dir, depth = 3) {
  if (depth <= 0) return;
  try {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      if (['node_modules', '.git', 'AppData', 'Application Data', 'Local Settings'].includes(item)) continue;
      const full = path.join(dir, item);
      try {
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          search(full, depth - 1);
        } else if (/\.(png|jpg|jpeg|webp)$/i.test(item)) {
          if (Date.now() - stat.mtimeMs < MAX_AGE) {
            results.push({
              path: full,
              size: stat.size,
              mtime: stat.mtime.toISOString()
            });
          }
        }
      } catch (e) {}
    }
  } catch (e) {}
}

search(userHome, 4);
results.sort((a,b) => b.mtime.localeCompare(a.mtime));
console.log('Total files in last 48h:', results.length);
results.slice(0, 40).forEach(r => console.log(r.path, r.size, r.mtime));
