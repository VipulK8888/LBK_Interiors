const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/Vipul_kumawat/.gemini/antigravity-ide/brain/8ac78208-4dad-483f-87dc-4b6f2cef554e';
const tempDir = path.join(brainDir, '.tempmediaStorage');

if (fs.existsSync(tempDir)) {
  const files = fs.readdirSync(tempDir);
  console.log('Total files in .tempmediaStorage:', files.length);
  // Sort by mtime descending
  const sorted = files.map(f => {
    const s = fs.statSync(path.join(tempDir, f));
    return { f, mtime: s.mtimeMs, size: s.size };
  }).sort((a,b) => b.mtime - a.mtime);
  
  console.log('Top 10 newest files in tempmediaStorage:');
  sorted.slice(0, 10).forEach(x => console.log(x.f, x.size, new Date(x.mtime).toISOString()));
}
