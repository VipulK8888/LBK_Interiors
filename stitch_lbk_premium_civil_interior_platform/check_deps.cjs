const fs = require('fs');
const path = require('path');
// Let's use canvas or jimp or sharp if installed, or check if sharp/canvas is installed
console.log('Dependencies in package.json:');
console.log(fs.readFileSync('../package.json', 'utf8'));
