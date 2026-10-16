const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const scrollyPath = path.join(root, 'src/js/scrollytelling.js');
const hero3dPath = path.join(root, 'src/js/hero3dScrolly.js');

// 1. Fix querySelector in scrollytelling.js
if (fs.existsSync(scrollyPath)) {
  let scrollyJs = fs.readFileSync(scrollyPath, 'utf8');
  scrollyJs = scrollyJs.replace(
    "scene02.querySelector('.lg\\:col-span-7')",
    "scene02.querySelector('[class*=\"col-span-7\"]')"
  );
  scrollyJs = scrollyJs.replace(
    "scene02.querySelector('.lg\\:col-span-5')",
    "scene02.querySelector('[class*=\"col-span-5\"]')"
  );
  fs.writeFileSync(scrollyPath, scrollyJs, 'utf8');
  console.log('✓ Fixed selector DOMException in src/js/scrollytelling.js');
}

// 2. Adjust act timing in hero3dScrolly.js
if (fs.existsSync(hero3dPath)) {
  let heroJs = fs.readFileSync(hero3dPath, 'utf8');
  heroJs = heroJs.replace(
    'this.scrollProgress >= 0.28 && this.scrollProgress < 0.68',
    'this.scrollProgress >= 0.28 && this.scrollProgress < 0.58'
  );
  fs.writeFileSync(hero3dPath, heroJs, 'utf8');
  console.log('✓ Optimized Act 3 scroll threshold to 0.58 in src/js/hero3dScrolly.js');
}
