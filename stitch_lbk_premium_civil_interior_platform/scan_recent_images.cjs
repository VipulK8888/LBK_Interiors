const fs = require('fs');
const path = require('path');

const targetRoots = [
  'C:/Users/Vipul_kumawat/AppData/Local/Temp',
  'C:/Users/Vipul_kumawat/AppData/Roaming',
  'C:/Users/Vipul_kumawat/AppData/Local',
  'C:/Users/Vipul_kumawat/.gemini'
];

const now = Date.now();
const MAX_AGE_MS = 25 * 60 * 1000; // last 25 minutes (since ~00:45 AM)

let matches = [];

function scan(dir, depth) {
  if (depth <= 0) return;
  try {
    const list = fs.readdirSync(dir);
    for (const f of list) {
      if (f === 'node_modules' || f === '.git' || f === 'Cache' || f === 'Code Cache') continue;
      const full = path.join(dir, f);
      try {
        const s = fs.statSync(full);
        if (s.isDirectory()) {
          scan(full, depth - 1);
        } else if (/\.(jpg|jpeg|png|webp)$/i.test(f)) {
          if (now - s.mtimeMs < MAX_AGE_MS && s.size > 20000) {
            matches.push({ file: full, size: s.size, mtime: s.mtime });
          }
        }
      } catch (e) {}
    }
  } catch (e) {}
}

for (const root of targetRoots) {
  console.log('Scanning', root, '...');
  scan(root, 4);
}

matches.sort((a,b) => b.mtime - a.mtime);
console.log('Total matches found:', matches.length);
matches.slice(0, 30).forEach(m => console.log(m.file, m.size, m.mtime.toISOString()));
