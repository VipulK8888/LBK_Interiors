const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const heroJsPath = path.join(root, 'src/js/hero3dScrolly.js');
const indexPath = path.join(root, 'index.html');

console.log('--- Completely Removing All Scrollytelling Popups / Modals ---');

// 1. Update hero3dScrolly.js
let heroJs = fs.readFileSync(heroJsPath, 'utf8');

// Remove narrative act variables
heroJs = heroJs.replace(/this\.act1 = document\.getElementById\('hero-act-1'\);[\s\S]*?this\.act3 = document\.getElementById\('hero-act-3'\);/, '// Narrative cards completely removed for 100% clean unobstructed scrollytelling');

// Update initScrollTimeline to purely update telemetry without any popup modals
const oldTimelineRegex = /ScrollTrigger\.create\(\{[\s\S]*?pin: '#hero-pinned-stage',[\s\S]*?\}\);/;

const cleanTimelineCode = `ScrollTrigger.create({
      trigger: this.track,
      pin: '#hero-pinned-stage',
      anticipatePin: 1,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.0, // Silky smooth inertia response
      onUpdate: (self) => {
        this.scrollProgress = self.progress;

        // Telemetry Depth in meters
        const currentDepthMeters = (this.scrollProgress * 52.0).toFixed(1);
        if (this.hudDepth) this.hudDepth.textContent = \`-\${currentDepthMeters} m\`;

        // Telemetry Progress Bar
        if (this.hudProgress) {
          this.hudProgress.style.width = \`\${(this.scrollProgress * 100).toFixed(0)}%\`;
        }

        // Zone updates across the spatial flythrough corridor (pure telemetry, NO popup modals)
        if (this.scrollProgress < 0.33) {
          if (this.hudZone) this.hudZone.textContent = 'ZONE 01 • ARCHITECTURAL PAVILION';
        } else if (this.scrollProgress >= 0.33 && this.scrollProgress < 0.66) {
          if (this.hudZone) this.hudZone.textContent = 'ZONE 02 • PRECISION ENGINEERING SLABS';
        } else {
          if (this.hudZone) this.hudZone.textContent = 'ZONE 03 • MONUMENTAL EXECUTION DECK';
        }
      }
    });`;

heroJs = heroJs.replace(oldTimelineRegex, cleanTimelineCode);

// Remove setActState function
heroJs = heroJs.replace(/setActState\(el, opacity, translateY\) \{[\s\S]*?\}/, '// No popup modals during scrollytelling');

// Remove any toggle-hero-info event listeners
heroJs = heroJs.replace(/\/\/ Pro feature: Overview toggle and close buttons[\s\S]*?if \(closeBtn\) \{[\s\S]*?\}\s*\}/, '');

fs.writeFileSync(heroJsPath, heroJs, 'utf8');
console.log('✓ hero3dScrolly.js cleaned: All popup modal logic removed.');

// 2. Update index.html
let html = fs.readFileSync(indexPath, 'utf8');

const scene01Regex = /<!-- =+[\s\S]*?SCENE 01: ARRIVAL[\s\S]*?<\/section>/;

const pure3DScene01Html = `<!-- =====================================================================
           SCENE 01: ARRIVAL — 3D SPATIAL CAMERA FLYTHROUGH SCROLLYTELLING
           ===================================================================== -->
      <section id="scene-01" class="relative w-full bg-surface pt-16 sm:pt-18">
        <div id="hero-scrolly-track" class="relative w-full min-h-[350vh]">
          <div id="hero-pinned-stage" class="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-surface select-none">
            
            <!-- Three.js Real-Time 3D WebGL Camera Flythrough Viewport -->
            <div id="hero-3d-viewport" class="absolute inset-0 w-full h-full z-0 cursor-grab active:cursor-grabbing"></div>

            <!-- Soft Top & Bottom Ambient Vignette -->
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

            <!-- Bottom Floating Exploration Bar: 100% Clean, NO Modal Popups -->
            <div class="absolute bottom-6 sm:bottom-8 z-30 flex items-center justify-center w-full px-4 pointer-events-none">
              <div class="inline-flex items-center gap-2.5 sm:gap-3 px-5 py-2.5 bg-surface-container-lowest/85 backdrop-blur-xl rounded-full border border-primary/25 shadow-[0_4px_25px_rgba(0,0,0,0.08)] text-[11px] sm:text-xs font-mono text-on-surface">
                <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span class="font-semibold uppercase tracking-wider text-on-surface">3D Architectural Pavilion</span>
                <span class="text-outline-variant/60">•</span>
                <span class="text-on-surface-variant">DRAG TO ORBIT</span>
                <span class="text-outline-variant/60">•</span>
                <span class="text-primary font-bold">SCROLL TO FLY THROUGH ↓</span>
              </div>
            </div>

          </div>
        </div>
      </section>`;

html = html.replace(scene01Regex, pure3DScene01Html);
fs.writeFileSync(indexPath, html, 'utf8');
console.log('✓ index.html updated: All popup modal cards removed from Scene 01!');
