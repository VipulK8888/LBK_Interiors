const fs = require('fs');
const cssFile = 'c:/Users/Vipul_kumawat/Documents/LBK_Interiors/src/styles/scrollytelling.css';
let css = fs.readFileSync(cssFile, 'utf8');
const lines = css.split('\n');
for (let i = 750; i < 790; i++) {
  if (lines[i] !== undefined) console.log(`${i+1}: ${lines[i]}`);
}
