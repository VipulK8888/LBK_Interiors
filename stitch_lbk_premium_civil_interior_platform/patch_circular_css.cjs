const fs = require('fs');
const path = require('path');

let css = fs.readFileSync(path.join('..', 'src', 'styles', 'scrollytelling.css'), 'utf8');

const circularCss = `
/* --------------------------------------------------------------------------
   3D Circular Horizontal Carousel Enhancements
   -------------------------------------------------------------------------- */
.coverflow-stage {
  cursor: grab;
  touch-action: pan-y;
  user-select: none;
  -webkit-user-select: none;
}

.coverflow-stage:active {
  cursor: grabbing;
}

.circular-3d-card {
  transition: box-shadow 0.3s ease, border-color 0.3s ease !important;
  will-change: transform, opacity;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.circular-3d-card.is-active {
  cursor: pointer;
}

.coverflow-track {
  perspective: 1400px;
  transform-style: preserve-3d;
}
`;

css += circularCss;
fs.writeFileSync(path.join('..', 'src', 'styles', 'scrollytelling.css'), css, 'utf8');
console.log('scrollytelling.css patched for circular 3D carousel!');
