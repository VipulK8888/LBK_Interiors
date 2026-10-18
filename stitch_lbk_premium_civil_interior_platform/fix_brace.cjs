const fs = require('fs');
const cssFile = 'c:/Users/Vipul_kumawat/Documents/LBK_Interiors/src/styles/scrollytelling.css';
let css = fs.readFileSync(cssFile, 'utf8');

// Replace the duplicate closing brace
css = css.replace(/@media \(min-width: 768px\) \{\s*#floorTag \{\s*bottom: calc\(env\(safe-area-inset-bottom, 0px\) \+ 24px\);\s*\}\s*\}\s*\}/, `@media (min-width: 768px) {
  #floorTag {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
  }
}`);

fs.writeFileSync(cssFile, css, 'utf8');
console.log('Fixed extra brace in scrollytelling.css');
