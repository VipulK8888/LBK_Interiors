const fs = require('fs');
const html = fs.readFileSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/index.html', 'utf8');
const lines = html.split('\n');
for (let i = 405; i < 455; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}
