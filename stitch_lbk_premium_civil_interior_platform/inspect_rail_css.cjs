const fs = require('fs');
const css = fs.readFileSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/src/styles/scrollytelling.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('#rail') || l.includes('rail')) {
    console.log(`${i+1}: ${l}`);
  }
});
