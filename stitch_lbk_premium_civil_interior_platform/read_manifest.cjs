const fs = require('fs');
if (fs.existsSync('tiles_manifest.json')) {
  console.log(fs.readFileSync('tiles_manifest.json', 'utf8').slice(0, 500));
}
