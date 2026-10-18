const fs = require('fs');
const cssFile = 'c:/Users/Vipul_kumawat/Documents/LBK_Interiors/src/styles/scrollytelling.css';
let css = fs.readFileSync(cssFile, 'utf8');

// Check around line 867
const lines = css.split('\n');
console.log('Total lines:', lines.length);
for (let i = Math.max(0, lines.length - 25); i < lines.length; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}
