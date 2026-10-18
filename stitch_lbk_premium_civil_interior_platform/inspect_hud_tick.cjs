const fs = require('fs');
const js = fs.readFileSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/src/js/hero3dScrolly.js', 'utf8');
const lines = js.split('\n');
for (let i = 1140; i < 1185; i++) {
  if (lines[i] !== undefined) console.log(`${i+1}: ${lines[i]}`);
}
