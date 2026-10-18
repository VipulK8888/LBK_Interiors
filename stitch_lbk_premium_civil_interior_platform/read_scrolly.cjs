const fs = require('fs');
const content = fs.readFileSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/src/js/hero3dScrolly.js', 'utf8');
const lines = content.split('\n');
console.log('Total lines:', lines.length);
for (let i = 20; i < 45; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}
