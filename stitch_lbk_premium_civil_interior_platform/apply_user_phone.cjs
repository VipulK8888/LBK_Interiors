const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
const contactPath = path.resolve(__dirname, '../src/js/views/contact.js');

let html = fs.readFileSync(indexPath, 'utf8');
let contact = fs.readFileSync(contactPath, 'utf8');

// Replace in index.html
html = html.replace(/\+91\s*94141\s*62659/g, '+91 88881 99091');
html = html.replace(/\+919414162659/g, '+918888199091');
html = html.replace(/9414162659/g, '8888199091');

html = html.replace(/\+91\s*98765\s*43210/g, '+91 88881 99091');
html = html.replace(/\+91\s*98765\s*43211/g, '+91 88881 99091');
html = html.replace(/\+919876543210/g, '+918888199091');
html = html.replace(/\+919876543211/g, '+918888199091');
html = html.replace(/9876543210/g, '8888199091');
html = html.replace(/9876543211/g, '8888199091');

// Form input placeholder
html = html.replace(/placeholder="\+91 98765 00000"/g, 'placeholder="+91 88881 99091"');

// Replace in contact.js
contact = contact.replace(/\+91\s*98200\s*12345/g, '+91 88881 99091');
contact = contact.replace(/\+919820012345/g, '+918888199091');
contact = contact.replace(/placeholder="\+91 98765 43210"/g, 'placeholder="+91 88881 99091"');

fs.writeFileSync(indexPath, html, 'utf8');
fs.writeFileSync(contactPath, contact, 'utf8');

console.log('Successfully replaced all phone numbers with 8888199091 across the entire project!');
