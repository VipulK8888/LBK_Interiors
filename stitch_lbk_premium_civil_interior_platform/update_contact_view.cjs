const fs = require('fs');
const path = require('path');

const contactPath = path.resolve(__dirname, '../src/js/views/contact.js');
let contactCode = fs.readFileSync(contactPath, 'utf8');

console.log('--- contact.js snippet ---');
contactCode.split('\n').forEach((l, i) => {
  if (l.includes('94141') || l.includes('98765') || l.includes('tel:')) {
    console.log(`${i + 1}: ${l}`);
  }
});

contactCode = contactCode.replace(/98765\s*43210/g, '88881 99091');
contactCode = contactCode.replace(/98765\s*43211/g, '88881 99091');
contactCode = contactCode.replace(/9876543210/g, '8888199091');
contactCode = contactCode.replace(/9876543211/g, '8888199091');
contactCode = contactCode.replace(/94141\s*62659/g, '88881 99091');
contactCode = contactCode.replace(/9414162659/g, '8888199091');

fs.writeFileSync(contactPath, contactCode, 'utf8');
console.log('Successfully updated contact.js with new number!');
