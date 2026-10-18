const fs = require('fs');
const content = fs.readFileSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/src/js/hero3dScrolly.js', 'utf8');
const lines = content.split('\n');
for (let i = 0; i < 22; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}
