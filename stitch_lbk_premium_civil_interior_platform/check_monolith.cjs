const fs = require('fs');
const content = fs.readFileSync('c:/Users/Vipul_kumawat/Documents/LBK_Interiors/src/js/hero3dScrolly.js', 'utf8');

const regex = /monolith\s*\([^)]*\)\s*\{[\s\S]*?\n\s*\}/g;
const match = content.match(regex);
if (match) {
  console.log(match[0].slice(0, 1500));
} else {
  // search for texture loader or slab
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('slab_0') || l.includes('makeSlabMat') || l.includes('monolith(')) {
      console.log(`${i+1}: ${l}`);
    }
  });
}
