const fs = require('fs');
const path = require('path');

// Let's copy frames 0, 5, 10, 15, 20, 25, 30 to artifact directory and analyze them
const srcDir = 'C:\\Users\\Vipul_kumawat\\Documents\\LBK_Interiors\\web_design_2_frames';
const files = fs.readdirSync(srcDir);
console.log('Total files:', files.length);
files.forEach((f, i) => {
  if (i % 5 === 0 || i === files.length - 1) {
    console.log(`[${i}] ${f}`);
  }
});
