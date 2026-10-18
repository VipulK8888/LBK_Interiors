const fs = require('fs');
const cssFile = 'c:/Users/Vipul_kumawat/Documents/LBK_Interiors/src/styles/scrollytelling.css';
let css = fs.readFileSync(cssFile, 'utf8');

// Add display: none !important for hudTop, hudBot, rail
const hideRules = `
/* User Request: Completely removed HUD telemetry, right-rail dots, and instructions from UI */
#hudTop, #hudBot, #rail, #hudTxt, #bar {
  display: none !important;
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}
`;

if (!css.includes('#hudTop, #hudBot, #rail')) {
  css += hideRules;
}

// Adjust floorTag position to sit elegantly at bottom center
css = css.replace(/#floorTag\s*\{[\s\S]*?\}/, `#floorTag {
  bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
  background: rgba(26, 24, 22, 0.85);
  color: #C5A15B;
  font-weight: 500;
  border: 1px solid rgba(197, 161, 91, 0.35);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}`);

// Also clean media query for floorTag
css = css.replace(/@media\s*\(min-width:\s*768px\)\s*\{[\s\S]*?#floorTag[\s\S]*?\}/, `@media (min-width: 768px) {
  #floorTag {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
  }
}`);

fs.writeFileSync(cssFile, css, 'utf8');
console.log('Updated scrollytelling.css: hid #hudTop, #hudBot, #rail, adjusted #floorTag!');
