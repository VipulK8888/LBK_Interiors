const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(__dirname, '../src/styles/scrollytelling.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCss = `

/* ==========================================================================
   HERO FRAME-BY-FRAME CANVAS PORTAL & HUD
   ========================================================================== */
#hero-scrolly-track {
  position: relative;
  width: 100%;
}

#hero-pinned-stage {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-warm-ivory);
  background-image: 
    radial-gradient(ellipse at 80% 20%, rgba(197, 161, 91, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 20% 80%, rgba(218, 203, 189, 0.12) 0%, transparent 60%);
}

.hero-canvas-portal {
  position: relative;
  border-radius: 1.5rem;
  box-shadow: 0 25px 60px -15px rgba(40, 40, 40, 0.16), 0 0 0 1px rgba(197, 161, 91, 0.28);
  background: #FFFFFF;
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-canvas-portal:hover {
  transform: translateY(-2px);
  box-shadow: 0 32px 75px -12px rgba(40, 40, 40, 0.22), 0 0 0 1.5px rgba(197, 161, 91, 0.45);
}

.hero-canvas-portal::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.04);
  z-index: 2;
}

#hero-frame-canvas {
  display: block;
  width: 100%;
  height: 100%;
  background: transparent;
}

@media (max-width: 1023px) {
  #hero-pinned-stage {
    min-height: auto;
    padding-top: 5rem;
    padding-bottom: 2rem;
  }
}
`;

if (!css.includes('HERO FRAME-BY-FRAME CANVAS PORTAL')) {
  css += additionalCss;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Appended hero frame canvas styles to scrollytelling.css');
} else {
  console.log('Styles already present in scrollytelling.css');
}
