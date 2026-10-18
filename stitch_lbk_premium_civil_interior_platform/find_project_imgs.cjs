const fs = require('fs');
const path = require('path');

function walk(d) {
  let r = [];
  if (!fs.existsSync(d)) return r;
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) r = r.concat(walk(p));
    else if (/\.(jpg|jpeg|png|webp|svg)$/i.test(f)) r.push({ path: p.replace(/\\/g, '/'), size: fs.statSync(p).size });
  }
  return r;
}

const imgs = walk('..');
console.log('Total images in project:', imgs.length);
console.log(imgs.filter(i => !i.path.includes('node_modules') && !i.path.includes('.git') && !i.path.includes('public/tiles') && !i.path.includes('Tiles')));
