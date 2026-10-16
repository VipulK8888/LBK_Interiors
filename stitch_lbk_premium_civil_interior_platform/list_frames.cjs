const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Vipul_kumawat\\Documents\\LBK_Interiors\\web_design_2_frames';
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.png'));

console.log('Frame count:', files.length);
files.forEach((f, i) => {
  const stat = fs.statSync(path.join(srcDir, f));
  console.log(`${i.toString().padStart(2, '0')}: ${f} (${(stat.size / 1024).toFixed(1)} KB)`);
});
