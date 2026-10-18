const fs = require('fs');
const path = require('path');

function searchRecent(dir, maxDepth = 4) {
  let r = [];
  if (maxDepth <= 0 || !fs.existsSync(dir)) return r;
  try {
    for (const f of fs.readdirSync(dir)) {
      const p = path.join(dir, f);
      try {
        const s = fs.statSync(p);
        if (s.isDirectory() && !f.includes('node_modules') && !f.includes('.git')) {
          r = r.concat(searchRecent(p, maxDepth - 1));
        } else if (/\.(png|jpg|jpeg|webp)$/i.test(f)) {
          const ageMs = Date.now() - s.mtimeMs;
          if (ageMs < 30 * 60 * 1000) { // within last 30 minutes
            r.push({ path: p, size: s.size, mtime: s.mtime });
          }
        }
      } catch (e) {}
    }
  } catch (e) {}
  return r;
}

const base1 = 'C:/Users/Vipul_kumawat/.gemini/antigravity-ide/brain/8ac78208-4dad-483f-87dc-4b6f2cef554e';
console.log('Recent in conversation brain:');
console.log(searchRecent(base1));

const base2 = 'C:/Users/Vipul_kumawat/.gemini/antigravity-ide';
console.log('Recent in appData:');
console.log(searchRecent(base2, 3).filter(x => !x.path.includes('.system_generated')));
