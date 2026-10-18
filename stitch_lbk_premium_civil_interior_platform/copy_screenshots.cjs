const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/Vipul_kumawat/OneDrive/Pictures/Screenshots';
const destDir = 'c:/Users/Vipul_kumawat/Documents/LBK_Interiors/user_screenshots';

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

if (fs.existsSync(srcDir)) {
  const files = fs.readdirSync(srcDir);
  for (const f of files) {
    const srcPath = path.join(srcDir, f);
    const destPath = path.join(destDir, f);
    const stat = fs.statSync(srcPath);
    // Copy if within last 48 hours
    if (Date.now() - stat.mtimeMs < 48 * 3600 * 1000) {
      fs.copyFileSync(srcPath, destPath);
      console.log('Copied:', f, stat.size);
    }
  }
}
