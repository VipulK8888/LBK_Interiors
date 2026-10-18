const fs = require('fs');
const tiles = fs.readdirSync('../Tiles');
console.log('Total files in Tiles:', tiles.length);
tiles.forEach((f, i) => {
  const stat = fs.statSync('../Tiles/' + f);
  console.log(`${i+1}: ${f} (${(stat.size/1024).toFixed(1)} KB)`);
});
