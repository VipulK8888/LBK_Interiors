const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const oldScene01Regex = /<!-- =+[\s\S]*?SCENE 01: ARRIVAL[\s\S]*?<\/section>/;

const upgradedScene01Html = `<!-- =====================================================================
           SCENE 01: ARRIVAL — 3D SPATIAL CAMERA FLYTHROUGH SCROLLYTELLING
           ===================================================================== -->
      <section id="scene-01" class="relative w-full bg-surface">
        <div id="hero-scrolly-track" class="relative w-full min-h-[350vh]">
          <div id="hero-pinned-stage" class="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-surface">
            
            <!-- Three.js Real-Time 3D WebGL Camera Flythrough Viewport -->
            <div id="hero-3d-viewport" class="absolute inset-0 w-full h-full z-0 cursor-grab active:cursor-grabbing"></div>

            <!-- Soft Top & Bottom Non-blocking Lighting Vignette -->
            <div class="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-surface/90 via-surface/30 to-transparent z-10"></div>
            <div class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface/90 via-surface/30 to-transparent z-10"></div>

            <!-- Top Floating Flight Telemetry HUD Pill -->
            <div class="absolute top-20 md:top-24 z-30 flex flex-col items-center pointer-events-none px-4">
              <div class="inline-flex items-center gap-2.5 px-4 py-1.5 bg-surface-container-lowest/90 backdrop-blur-md rounded-full shadow-md border border-primary/30 text-[11px] font-mono text-on-surface-variant">
                <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span id="hud-zone-val" class="font-semibold uppercase tracking-wider text-on-surface">ZONE 01 • ARCHITECTURAL PAVILION</span>
                <span class="text-outline-variant/60">•</span>
                <span class="text-primary font-bold">DEPTH: <span id="hud-depth-val">-0.0 m</span></span>
                <span class="hidden sm:inline text-outline-variant/60">•</span>
                <span class="hidden sm:inline text-on-surface-variant/80">POS: <span id="hud-coords-val">[0, 48, 750]</span></span>
              </div>
              <div class="w-48 h-0.5 bg-outline-variant/30 rounded-full mt-1.5 overflow-hidden">
                <div id="hud-progress-fill" class="h-full bg-gradient-to-r from-primary to-primary-container w-0 transition-all duration-75"></div>
              </div>
            </div>

            <!-- Kinetic Scrollytelling Narrative Cards -->
            <div class="relative z-20 max-w-3xl w-full mx-auto px-4 flex items-center justify-center pointer-events-none">

              <!-- ACT 1: ARRIVAL (0% - 28% Scroll) -->
              <div id="hero-act-1" class="hero-act-panel flex flex-col items-center text-center opacity-100 transition-all duration-500 bg-surface-container-lowest/85 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-outline-variant/30 shadow-2xl pointer-events-auto">
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 bg-surface-container-low/90 backdrop-blur-md shadow-sm mb-space-sm border border-outline-variant/30 rounded-full">
                  <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span class="font-label-sm text-label-sm uppercase tracking-[0.15em] text-on-surface-variant font-medium">Master Civil Contracting • Sukher, Udaipur</span>
                </div>

                <h1 class="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface max-w-2xl tracking-tight mb-space-xs leading-[1.08]">
                  Spaces Crafted with Precision.
                </h1>

                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-md leading-relaxed">
                  Tiles, Granite, Marble and Interior Finishing — with care in every detail. Executing uncompromising stone engineering and luxury residential architectural craftsmanship.
                </p>

                <!-- Interactive CTA Buttons -->
                <div class="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-space-md">
                  <a class="w-full sm:w-auto px-7 py-3 bg-inverse-surface text-inverse-on-surface font-label-md text-label-md uppercase tracking-[0.12em] hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 text-center btn-shine-wrap relative border border-transparent hover:border-primary-container" href="#scene-03">
                    Explore Our Work
                  </a>
                  <a class="w-full sm:w-auto px-7 py-3 bg-surface-container-lowest text-on-surface font-label-md text-label-md uppercase tracking-[0.12em] hover:bg-surface-container-high transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5 text-center border border-outline-variant/30" href="#quote-section">
                    Get a Quote
                  </a>
                </div>

                <div class="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold animate-bounce">
                  <span>↓ Scroll to Pilot 3D Camera Forward</span>
                </div>

                <!-- Proof Stat Banner -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-2xl mt-space-md pt-space-xs border-t border-outline-variant/20">
                  <div class="text-left bg-surface-container-lowest/90 p-2.5 rounded-lg shadow-xs border border-transparent hover:border-primary/40 transition-all">
                    <span class="font-headline-sm text-headline-sm text-primary block font-bold">28+</span>
                    <span class="text-[10px] uppercase tracking-wider text-on-surface-variant">Years Legacy</span>
                  </div>
                  <div class="text-left bg-surface-container-lowest/90 p-2.5 rounded-lg shadow-xs border border-transparent hover:border-primary/40 transition-all">
                    <span class="font-headline-sm text-headline-sm text-on-surface block font-bold">450+</span>
                    <span class="text-[10px] uppercase tracking-wider text-on-surface-variant">Estates</span>
                  </div>
                  <div class="text-left bg-surface-container-lowest/90 p-2.5 rounded-lg shadow-xs border border-transparent hover:border-primary/40 transition-all">
                    <span class="font-headline-sm text-headline-sm text-primary block font-bold">100%</span>
                    <span class="text-[10px] uppercase tracking-wider text-on-surface-variant">Tolerance</span>
                  </div>
                  <div class="text-left bg-surface-container-lowest/90 p-2.5 rounded-lg shadow-xs border border-transparent hover:border-primary/40 transition-all">
                    <span class="font-headline-sm text-headline-sm text-on-surface block font-bold">Zero</span>
                    <span class="text-[10px] uppercase tracking-wider text-on-surface-variant">Hollow Sound</span>
                  </div>
                </div>
              </div>

              <!-- ACT 2: FLYTHROUGH DECK (28% - 68% Scroll) -->
              <div id="hero-act-2" class="hero-act-panel flex flex-col items-center text-center opacity-0 translate-y-6 pointer-events-none transition-all duration-500 absolute bg-surface-container-lowest/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-primary/30 shadow-2xl">
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 bg-surface-container-low/90 backdrop-blur-md shadow-sm mb-space-sm border border-primary/30 rounded-full">
                  <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  <span class="font-label-sm text-label-sm uppercase tracking-[0.15em] text-primary font-bold">Laser Calibrated Execution</span>
                </div>

                <h2 class="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface max-w-2xl tracking-tight mb-space-xs leading-[1.08]">
                  0.0mm Lippage. Diamond Polish.
                </h2>

                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-md leading-relaxed">
                  Full bookmatched Statuario marble slabs imported from Carrara and dry-laid at our Sukher facility for grain continuity before on-site bedding. Diamond disc crystallization polish achieving 98+ gloss specular reflection.
                </p>

                <div class="flex flex-wrap items-center justify-center gap-2.5">
                  <span class="px-3 py-1 bg-surface-container-low/90 border border-primary/30 rounded-full text-xs font-mono text-on-surface">Bookmatched Italian Statuario</span>
                  <span class="px-3 py-1 bg-surface-container-low/90 border border-primary/30 rounded-full text-xs font-mono text-on-surface">1mm Epoxy Grout Lines</span>
                  <span class="px-3 py-1 bg-surface-container-low/90 border border-primary/30 rounded-full text-xs font-mono text-on-surface">Anti-Slip R11 Thermal Flamed</span>
                </div>
              </div>

              <!-- ACT 3: SIGNATURE TRANSITION (68% - 100% Scroll) -->
              <div id="hero-act-3" class="hero-act-panel flex flex-col items-center text-center opacity-0 translate-y-6 pointer-events-none transition-all duration-500 absolute bg-surface-container-lowest/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-outline-variant/30 shadow-2xl">
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 bg-surface-container-low/90 backdrop-blur-md shadow-sm mb-space-sm border border-outline-variant/30 rounded-full">
                  <span class="w-2 h-2 rounded-full bg-primary"></span>
                  <span class="font-label-sm text-label-sm uppercase tracking-[0.15em] text-on-surface-variant font-medium">Turnkey Civil Infrastructure</span>
                </div>

                <h2 class="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface max-w-2xl tracking-tight mb-space-xs leading-[1.08]">
                  From Quarry Slabs to Palatial Estates.
                </h2>

                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-md leading-relaxed">
                  Explore our completed 3D portfolio deck featuring lakefront penthouses, ventilated granite facades, and curbless master bath wet rooms across Rajasthan.
                </p>

                <div class="flex items-center gap-3 mt-1">
                  <a class="px-7 py-3 bg-inverse-surface text-inverse-on-surface font-label-md text-label-md uppercase tracking-[0.12em] hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 text-center pointer-events-auto" href="#scene-03">
                    Enter Signature Portfolio Deck ↓
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>`;

html = html.replace(oldScene01Regex, upgradedScene01Html);
fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully upgraded index.html with refined glassmorphic narrative cards!');
