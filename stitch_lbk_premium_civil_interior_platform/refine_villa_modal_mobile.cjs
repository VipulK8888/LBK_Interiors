const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(__dirname, '../src/styles/scrollytelling.css');
let css = fs.readFileSync(cssPath, 'utf8');

const mobileRefinement = `
@media (max-width: 640px) {
  .villa-modal-image {
    max-height: 320px !important;
  }
  .villa-modal-body > .grid > div:first-child {
    min-height: 240px !important;
    max-height: 340px !important;
  }
  .villa-modal-body > .grid > div:last-child {
    max-height: none !important;
    padding: 18px 16px !important;
  }
}
`;

css += mobileRefinement;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Added mobile image height refinement for villa modal');
