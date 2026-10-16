const fs = require('fs');
const code = fs.readFileSync('src/js/coverflow3d.js', 'utf8');
const lines = code.split('\n');
for (let i = 0; i < 70; i++) {
  if (lines[i] && (lines[i].includes('image') || lines[i].includes('http') || lines[i].includes('title:'))) {
    console.log(lines[i].trim());
  }
}
