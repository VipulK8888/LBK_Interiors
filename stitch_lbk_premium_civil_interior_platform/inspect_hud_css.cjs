const fs = require('fs');
const css = fs.readFileSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/src/styles/scrollytelling.css', 'utf8');
const lines = css.split('\n');
for (let i = 720; i < 800; i++) {
  if (lines[i] !== undefined) {
    console.log(`${i+1}: ${lines[i]}`);
  }
}
