const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const heroJsPath = path.join(root, 'src/js/hero3dScrolly.js');
const indexPath = path.join(root, 'index.html');

console.log('--- Refining 3D Scrollytelling for Pro UI/UX Perfection ---');

// 1. Update hero3dScrolly.js
let heroJs = fs.readFileSync(heroJsPath, 'utf8');

// Elevate crystal so it hovers dramatically at eye level above the arrival card
heroJs = heroJs.replace(
  'this.centralCrystal.position.set(0, 35, 340);',
  'this.centralCrystal.position.set(0, 110, 340);'
);

// Enhance crystal animation in animate()
heroJs = heroJs.replace(
  'this.centralCrystal.position.y = 35 + Math.sin(elapsedTime * 1.4) * 8;',
  'this.centralCrystal.position.y = 110 + Math.sin(elapsedTime * 1.4) * 10;'
);

// Add interactive click / drag feedback
if (!heroJs.includes('// Interactive click to focus nearest monolith')) {
  const clickHandlerCode = `
    // Pro touch: Interactive pointer cursor styling
    this.container.addEventListener('pointerdown', () => {
      this.container.style.cursor = 'grabbing';
    });
    window.addEventListener('pointerup', () => {
      if (this.container) this.container.style.cursor = 'grab';
    });
`;
  heroJs = heroJs.replace('this.bindEvents();', `this.bindEvents();\n${clickHandlerCode}`);
}

fs.writeFileSync(heroJsPath, heroJs, 'utf8');
console.log('✓ hero3dScrolly.js updated with elevated crystal centerpiece and grab cursor.');

// 2. Refine index.html narrative cards layout for maximum 3D visual breathing room
let html = fs.readFileSync(indexPath, 'utf8');

// Replace Scene 01 container with perfected glassmorphism & spacing
const refinedScene01Regex = /<!-- =+[\s\S]*?SCENE 01: ARRIVAL[\s\S]*?<\/section>/;

const perfectedScene01Html = `<!-- =====================================================================
           SCENE 01: ARRIVAL — 3D SPATIAL CAMERA FLYTHROUGH SCROLLYTELLING
           ===================================================================== -->
      <section id="scene-01" class="relative w-full bg-surface">
        <div id="hero-scrolly-track" class="relative w-full min-h-[350vh]">
          <div id="hero-pinned-stage" class="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-surface select-none">
            
            <!-- Three.js Real-Time 3D WebGL Camera Flythrough Viewport -->
            <div id="hero-3d-viewport" class="absolute inset-0 w-full h-full z-0 cursor-grab active:cursor-grabbing"></div>

            <!-- Soft Top & Bottom Ambient Vignette to seamlessly blend with header & sections -->
            <div class="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-surface/90 via-surface/40 to-transparent z-10"></div>
            <div class="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface/90 via-surface/40 to-transparent z-10"></div>

            <!-- Top Floating Flight Telemetry HUD Pill -->
            <div class="absolute top-20 md:top-24 z-30 flex flex-col items-center pointer-events-none px-4">
              <div class="inline-flex items-center gap-2.5 px-4 py-1.5 bg-surface-container-lowest/85 backdrop-blur-xl rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-primary/25 text-[11px] font-mono text-on-surface-variant transition-all">
                <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span id="hud-zone-val" class="font-semibold uppercase tracking-wider text-on-surface">ZONE 01 • ARCHITECTURAL PAVILION</span>
                <span class="text-outline-variant/60">•</span>
                <span class="text-primary font-bold">DEPTH: <span id="hud-depth-val">-0.0 m</span></span>
                <span class="hidden sm:inline text-outline-variant/60">•</span>
                <span class="hidden sm:inline text-on-surface-variant/80">POS: <span id="hud-coords-val">[0, 48, 750]</span></span>
              </div>
              <div class="w-44 h-0.5 bg-outline-variant/20 rounded-full mt-1.5 overflow-hidden">
                <div id="hud-progress-fill" class="h-full bg-gradient-to-r from-primary via-primary-container to-primary w-0 transition-all duration-75"></div>
              </div>
            </div>

            <!-- Kinetic Scrollytelling Narrative Cards -->
            <div class="relative z-20 max-w-2xl w-full mx-auto px-4 flex items-center justify-center pointer-events-none mt-16 sm:mt-20">

              <!-- ACT 1: ARRIVAL (0% - 28% Scroll) -->
              <div id="hero-act-1" class="hero-act-panel flex flex-col items-center text-center opacity-100 transition-all duration-500 bg-surface-container-lowest/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-primary/20 shadow-[0_20px_60px_rgba(40,40,40,0.08)] pointer-events-auto">
                
                <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-surface-container-low/80 backdrop-blur-md shadow-xs mb-space-xs border border-primary/20 rounded-full">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  <span class="text-[11px] uppercase tracking-[0.18em] text-on-surface-variant font-medium">Master Civil Contracting • Sukher, Udaipur</span>
                </div>

                <h1 class="font-display-hero text-3xl sm:text-4xl md:text-5xl text-on-surface tracking-tight mb-space-xs leading-[1.12]">
                  Spaces Crafted with Precision.
                </h1>

                <p class="font-body-md text-sm sm:text-base text-on-surface-variant max-w-lg mb-space-sm leading-relaxed">
                  Tiles, Granite, Marble & Interior Finishing — with care in every detail. Executing uncompromising stone engineering and luxury residential architectural craftsmanship.
                </p>

                <!-- Interactive CTA Buttons -->
                <div class="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-space-sm">
                  <a class="w-full sm:w-auto px-6 py-2.5 bg-inverse-surface text-inverse-on-surface text-xs font-semibold uppercase tracking-[0.14em] hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 text-center btn-shine-wrap relative border border-transparent hover:border-primary-container" href="#scene-03">
                    Explore Our Work
                  </a>
                  <a class="w-full sm:w-auto px-6 py-2.5 bg-surface-container-lowest text-on-surface text-xs font-semibold uppercase tracking-[0.14em] hover:bg-surface-container-high transition-all duration-300 shadow-xs hover:shadow text-center border border-outline-variant/30" href="#quote-section">
                    Get a Quote
                  </a>
                </div>

                <div class="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-primary font-bold animate-bounce mb-space-xs">
                  <span>↓ Scroll to Pilot 3D Camera Forward</span>
                </div>

                <!-- Proof Stat Banner -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-lg pt-space-xs border-t border-outline-variant/20">
                  <div class="text-left bg-surface-container-lowest/80 p-2 rounded-lg shadow-2xs border border-transparent hover:border-primary/30 transition-all">
                    <span class="text-base sm:text-lg text-primary block font-bold">28+</span>
                    <span class="text-[9px] uppercase tracking-wider text-on-surface-variant">Years Legacy</span>
                  </div>
                  <div class="text-left bg-surface-container-lowest/80 p-2 rounded-lg shadow-2xs border border-transparent hover:border-primary/30 transition-all">
                    <span class="text-base sm:text-lg text-on-surface block font-bold">450+</span>
                    <span class="text-[9px] uppercase tracking-wider text-on-surface-variant">Estates</span>
                  </div>
                  <div class="text-left bg-surface-container-lowest/80 p-2 rounded-lg shadow-2xs border border-transparent hover:border-primary/30 transition-all">
                    <span class="text-base sm:text-lg text-primary block font-bold">100%</span>
                    <span class="text-[9px] uppercase tracking-wider text-on-surface-variant">Tolerance</span>
                  </div>
                  <div class="text-left bg-surface-container-lowest/80 p-2 rounded-lg shadow-2xs border border-transparent hover:border-primary/30 transition-all">
                    <span class="text-base sm:text-lg text-on-surface block font-bold">Zero</span>
                    <span class="text-[9px] uppercase tracking-wider text-on-surface-variant">Hollow Sound</span>
                  </div>
                </div>
              </div>

              <!-- ACT 2: FLYTHROUGH DECK (28% - 68% Scroll) -->
              <div id="hero-act-2" class="hero-act-panel flex flex-col items-center text-center opacity-0 translate-y-6 pointer-events-none transition-all duration-500 absolute bg-surface-container-lowest/85 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-primary/30 shadow-[0_20px_60px_rgba(40,40,40,0.08)] max-w-xl">
                <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-surface-container-low/80 backdrop-blur-md shadow-xs mb-space-xs border border-primary/30 rounded-full">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                  <span class="text-[11px] uppercase tracking-[0.18em] text-primary font-bold">Laser Calibrated Execution</span>
                </div>

                <h2 class="font-display-hero text-2xl sm:text-3xl md:text-4xl text-on-surface tracking-tight mb-space-xs leading-[1.15]">
                  0.0mm Lippage. Diamond Polish.
                </h2>

                <p class="font-body-md text-sm sm:text-base text-on-surface-variant max-w-md mb-space-sm leading-relaxed">
                  Full bookmatched Statuario marble slabs imported from Carrara and dry-laid at our Sukher facility for grain continuity before on-site bedding. Diamond disc crystallization polish achieving 98+ gloss specular reflection.
                </p>

                <div class="flex flex-wrap items-center justify-center gap-2">
                  <span class="px-3 py-1 bg-surface-container-low/90 border border-primary/30 rounded-full text-[11px] font-mono text-on-surface">Bookmatched Italian Statuario</span>
                  <span class="px-3 py-1 bg-surface-container-low/90 border border-primary/30 rounded-full text-[11px] font-mono text-on-surface">1mm Epoxy Grout Lines</span>
                  <span class="px-3 py-1 bg-surface-container-low/90 border border-primary/30 rounded-full text-[11px] font-mono text-on-surface">Anti-Slip R11 Thermal Flamed</span>
                </div>
              </div>

              <!-- ACT 3: SIGNATURE TRANSITION (68% - 100% Scroll) -->
              <div id="hero-act-3" class="hero-act-panel flex flex-col items-center text-center opacity-0 translate-y-6 pointer-events-none transition-all duration-500 absolute bg-surface-container-lowest/85 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-primary/25 shadow-[0_20px_60px_rgba(40,40,40,0.08)] max-w-xl">
                <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-surface-container-low/80 backdrop-blur-md shadow-xs mb-space-xs border border-outline-variant/30 rounded-full">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span class="text-[11px] uppercase tracking-[0.18em] text-on-surface-variant font-medium">Turnkey Civil Infrastructure</span>
                </div>

                <h2 class="font-display-hero text-2xl sm:text-3xl md:text-4xl text-on-surface tracking-tight mb-space-xs leading-[1.15]">
                  From Quarry Slabs to Palatial Estates.
                </h2>

                <p class="font-body-md text-sm sm:text-base text-on-surface-variant max-w-md mb-space-sm leading-relaxed">
                  Explore our completed 3D portfolio deck featuring lakefront penthouses, ventilated granite facades, and curbless master bath wet rooms across Rajasthan.
                </p>

                <div class="flex items-center gap-3 mt-1">
                  <a class="px-6 py-2.5 bg-inverse-surface text-inverse-on-surface text-xs font-semibold uppercase tracking-[0.14em] hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 text-center pointer-events-auto" href="#scene-03">
                    Enter Signature Portfolio Deck ↓
                  </a>
                </div>
              </div>

            </div>

            <!-- Interactive Orbit / Look Around Hint (Bottom Right) -->
            <div class="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 bg-surface-container-lowest/70 backdrop-blur-md rounded-full border border-outline-variant/30 text-[10px] font-mono text-on-surface-variant pointer-events-none">
              <span class="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
              <span>DRAG CANVAS TO ORBIT 3D VIEW</span>
            </div>

          </div>
        </div>
      </section>`;

html = html.replace(refinedScene01Regex, perfectedScene01Html);
fs.writeFileSync(indexPath, html, 'utf8');
console.log('✓ index.html updated with perfected visual proportions and drag hint.');
