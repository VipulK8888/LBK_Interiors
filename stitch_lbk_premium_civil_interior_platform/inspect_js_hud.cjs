const fs = require('fs');
const js = fs.readFileSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/src/js/hero3dScrolly.js', 'utf8');
const lines = js.split('\n');

const keywords = ['hudTop', 'hudTxt', 'hudBot', 'rail', 'barI', 'floorTag'];
lines.forEach((l, i) => {
  if (keywords.some(k => l.includes(k))) {
    console.log(`${i+1}: ${l}`);
  }
});
