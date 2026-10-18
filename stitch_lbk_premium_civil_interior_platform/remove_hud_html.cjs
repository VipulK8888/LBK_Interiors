const fs = require('fs');
const htmlFile = 'c:/Users/Vipul_kumawat/Documents/LBK_Interiors/index.html';
let html = fs.readFileSync(htmlFile, 'utf8');

// Remove rail, hudTop, and hudBot
// Check lines before replacement
console.log('Contains rail:', html.includes('<nav id="rail"'));
console.log('Contains hudTop:', html.includes('id="hudTop"'));
console.log('Contains hudBot:', html.includes('id="hudBot"'));

// Remove #rail
html = html.replace(/\s*<!-- Right-rail Pagination Navigation -->\s*<nav id="rail" aria-label="Jump to project"><\/nav>/, '');

// Remove #hudTop
html = html.replace(/\s*<!-- Top Telemetry Flight Pill & Progress Track -->\s*<div class="pill" id="hudTop">[\s\S]*?<\/div>/, '');

// Remove #hudBot
html = html.replace(/\s*<!-- Bottom Guidance Pill -->\s*<div class="pill" id="hudBot">SCROLL TO FLY • TAP A SLAB TO INSPECT<\/div>/, '');

fs.writeFileSync(htmlFile, html, 'utf8');
console.log('Updated index.html: removed hudTop, rail, and hudBot!');
