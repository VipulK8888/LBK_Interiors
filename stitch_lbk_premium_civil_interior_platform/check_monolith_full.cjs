const fs = require('fs');
const content = fs.readFileSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/src/js/hero3dScrolly.js', 'utf8');
const lines = content.split('\n');
const idx = lines.findIndex(l => l.includes('monolith(P, i)'));
for (let i = idx; i < idx + 60; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}
