const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

// 1. Update hero3dScrolly.js with pin: '#hero-pinned-stage' and rock-solid pinning
const heroJsPath = path.join(root, 'src/js/hero3dScrolly.js');
let heroJs = fs.readFileSync(heroJsPath, 'utf8');

const oldStPattern = `    ScrollTrigger.create({
      trigger: this.track,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.8, // Buttery smooth momentum scrub`;

const newStPattern = `    ScrollTrigger.create({
      trigger: this.track,
      pin: '#hero-pinned-stage',
      anticipatePin: 1,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.8, // Buttery smooth momentum scrub`;

if (heroJs.includes(oldStPattern)) {
  heroJs = heroJs.replace(oldStPattern, newStPattern);
  fs.writeFileSync(heroJsPath, heroJs, 'utf8');
  console.log('SUCCESS: Added pin: "#hero-pinned-stage" to ScrollTrigger in hero3dScrolly.js');
} else {
  console.log('Pattern not matched in hero3dScrolly.js');
}

// 2. In index.html, remove overflow-hidden on #scene-01 so sticky/pin operates smoothly
const indexPath = path.join(root, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

html = html.replace(
  '<section id="scene-01" class="relative w-full overflow-hidden bg-surface">',
  '<section id="scene-01" class="relative w-full bg-surface">'
);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('SUCCESS: Removed overflow-hidden from #scene-01 in index.html');
