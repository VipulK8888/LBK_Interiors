const fs = require('fs');
const content = fs.readFileSync('../index.html', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('#intro') || l.includes('.cap')) {
    console.log(i + 1, l);
  }
});
