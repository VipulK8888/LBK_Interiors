const fs = require('fs');
const path = require('path');

// 1. Update scrollytelling.css to ensure reveal-section is always visible and stone canvas has robust sizing
let cssContent = fs.readFileSync(path.join('..', 'src', 'styles', 'scrollytelling.css'), 'utf8');

// Ensure reveal-section is always visible
cssContent += `
/* Ensure sections are always 100% visible and interactive */
.reveal-section {
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
}

.stone-3d-canvas-wrap {
  min-height: 400px;
  height: 420px;
  position: relative;
  width: 100%;
}
`;

fs.writeFileSync(path.join('..', 'src', 'styles', 'scrollytelling.css'), cssContent, 'utf8');
console.log('scrollytelling.css updated!');
