const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = 'c:/Users/Vipul_kumawat/Documents/LBK_Interiors/user_screenshots';
async function run() {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const p = path.join(dir, f);
    try {
      const meta = await sharp(p).metadata();
      console.log(f, `${meta.width}x${meta.height}`, `${meta.format}`);
    } catch (e) {
      console.log(f, 'error:', e.message);
    }
  }
}
run();
