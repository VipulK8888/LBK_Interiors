const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

// 1. Update index.html
const indexPath = path.join(root, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const oldScene01Regex = /<!-- =+[\s\S]*?SCENE 01: ARRIVAL[\s\S]*?<\/section>/;

const newScene01Html = `<!-- =====================================================================
           SCENE 01: ARRIVAL — CINEMATIC FRAME-BY-FRAME SCROLLYTELLING
           ===================================================================== -->
      <section id="scene-01" class="relative w-full overflow-hidden bg-surface">
        <div id="hero-scrolly-track" class="relative w-full min-h-[260vh]">
          <div id="hero-pinned-stage" class="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-surface-container-low px-margin-mobile md:px-margin-tablet lg:px-margin">
            
            <!-- Soft Architectural Ambient Lighting -->
            <div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-surface via-transparent to-transparent z-0"></div>

            <div class="relative z-10 max-w-[1360px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-6">
              
              <!-- Left Column: LBK Hero Typography & Interactive Controls -->
              <div id="hero-text-content" class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-300">
                
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 bg-surface-container-lowest/95 backdrop-blur-md shadow-sm mb-space-md border border-outline-variant/30">
                  <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span class="font-label-sm text-label-sm uppercase tracking-[0.15em] text-on-surface-variant font-medium">Master Civil Contracting • Sukher, Udaipur</span>
                </div>

                <h1 class="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface max-w-xl tracking-tight mb-space-sm leading-[1.08]">
                  Spaces Crafted with Precision.
                </h1>

                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-lg leading-relaxed">
                  Tiles, Granite, Marble and Interior Finishing — with care in every detail. Executing uncompromising stone engineering and luxury residential architectural craftsmanship.
                </p>

                <!-- Interactive CTA Buttons -->
                <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-space-lg">
                  <a class="w-full sm:w-auto px-8 py-3.5 bg-inverse-surface text-inverse-on-surface font-label-md text-label-md uppercase tracking-[0.12em] hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 text-center btn-shine-wrap relative border border-transparent hover:border-primary-container" href="#scene-03">
                    Explore Our Work
                  </a>
                  <a class="w-full sm:w-auto px-8 py-3.5 bg-surface-container-lowest text-on-surface font-label-md text-label-md uppercase tracking-[0.12em] hover:bg-surface-container-high transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5 text-center border border-outline-variant/30" href="#quote-section">
                    Get a Quote
                  </a>
                </div>

                <!-- Real-time Scrollytelling HUD Status Badge -->
                <div class="inline-flex items-center gap-3 px-4 py-2 bg-surface-container-lowest/90 backdrop-blur-md border border-primary/30 shadow-sm rounded-full max-w-full">
                  <div class="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                  <span id="hero-frame-progress-badge" class="font-mono text-xs font-bold text-primary tracking-wider">01 / 32</span>
                  <span class="text-outline-variant">•</span>
                  <span id="hero-frame-phase" class="text-xs uppercase tracking-wider text-on-surface-variant font-medium truncate">01 / 04 • Virtual Architectural Experience</span>
                </div>

                <div class="flex items-center gap-2 mt-3 text-[11px] uppercase tracking-[0.18em] text-on-surface-variant/70">
                  <span>↓ Scroll to Advance Camera Sequence</span>
                </div>

                <!-- Proof Stat Banner -->
                <div id="hero-proof-banner" class="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl mt-space-lg pt-space-sm transition-opacity duration-300 border-t border-outline-variant/20">
                  <div class="text-left bg-surface-container-lowest/80 p-2.5 shadow-sm border border-transparent hover:border-primary/40 transition-all">
                    <span class="font-headline-sm text-headline-sm text-primary block font-bold">28+</span>
                    <span class="text-[10px] uppercase tracking-wider text-on-surface-variant">Years Legacy</span>
                  </div>
                  <div class="text-left bg-surface-container-lowest/80 p-2.5 shadow-sm border border-transparent hover:border-primary/40 transition-all">
                    <span class="font-headline-sm text-headline-sm text-on-surface block font-bold">450+</span>
                    <span class="text-[10px] uppercase tracking-wider text-on-surface-variant">Estates</span>
                  </div>
                  <div class="text-left bg-surface-container-lowest/80 p-2.5 shadow-sm border border-transparent hover:border-primary/40 transition-all">
                    <span class="font-headline-sm text-headline-sm text-primary block font-bold">100%</span>
                    <span class="text-[10px] uppercase tracking-wider text-on-surface-variant">Tolerance</span>
                  </div>
                  <div class="text-left bg-surface-container-lowest/80 p-2.5 shadow-sm border border-transparent hover:border-primary/40 transition-all">
                    <span class="font-headline-sm text-headline-sm text-on-surface block font-bold">Zero</span>
                    <span class="text-[10px] uppercase tracking-wider text-on-surface-variant">Hollow Sound</span>
                  </div>
                </div>

              </div>

              <!-- Right Column: Dedicated 32-Frame Scrollytelling Canvas Portal -->
              <div class="w-full lg:w-1/2 flex items-center justify-center">
                <div class="hero-canvas-portal w-full max-w-[360px] md:max-w-[400px] lg:max-w-[420px] h-[52vh] sm:h-[60vh] lg:h-[76vh] max-h-[760px] relative">
                  
                  <!-- Top Corner Brushed Gold Luxury Accent Details -->
                  <div class="absolute top-3 left-3 z-10 flex items-center gap-1.5 opacity-80 pointer-events-none">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span class="text-[9px] font-mono tracking-widest uppercase text-on-surface-variant/80">LBK • 3D SPATIAL DIVE</span>
                  </div>
                  <div class="absolute top-3 right-3 z-10 text-[9px] font-mono tracking-widest text-primary font-semibold opacity-90 pointer-events-none">
                    32 FRAMES • SCROLL SYNC
                  </div>

                  <!-- High-Performance HTML5 Canvas -->
                  <canvas id="hero-frame-canvas" class="w-full h-full block relative z-0" aria-label="Interactive 3D Architectural Frame Sequence"></canvas>

                  <!-- Bottom Bezel Hint -->
                  <div class="absolute bottom-3 inset-x-0 z-10 flex items-center justify-center pointer-events-none">
                    <span class="px-2.5 py-1 bg-surface/90 backdrop-blur-md rounded-full text-[9px] uppercase tracking-widest text-on-surface-variant border border-outline-variant/30">
                      Scroll Controlled
                    </span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>`;

if (oldScene01Regex.test(html)) {
  html = html.replace(oldScene01Regex, newScene01Html);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('SUCCESS: Updated index.html with Frame-by-Frame Scrollytelling Hero!');
} else {
  console.error('ERROR: Could not locate Scene 01 in index.html to replace.');
}

// 2. Update src/js/main.js
const mainPath = path.join(root, 'src/js/main.js');
let mainCode = fs.readFileSync(mainPath, 'utf8');

if (!mainCode.includes("from './frameSequence.js'")) {
  mainCode = mainCode.replace(
    "import { ScrollytellingEngine } from './scrollytelling.js';",
    "import { ScrollytellingEngine } from './scrollytelling.js';\nimport { FrameSequenceScrollytelling } from './frameSequence.js';"
  );

  const initFrameSeqCode = `  // 0. Initialize Frame-by-Frame Scrollytelling Hero (Scene 01)
  const heroTrack = document.getElementById('hero-scrolly-track');
  let frameSequenceInstance = null;
  if (heroTrack) {
    frameSequenceInstance = new FrameSequenceScrollytelling({
      trackId: 'hero-scrolly-track',
      canvasId: 'hero-frame-canvas'
    });
  }
`;

  mainCode = mainCode.replace(
    "  // 1. Initialize 3D Perspective Coverflow Carousel (Scene 03)",
    `${initFrameSeqCode}\n  // 1. Initialize 3D Perspective Coverflow Carousel (Scene 03)`
  );

  fs.writeFileSync(mainPath, mainCode, 'utf8');
  console.log('SUCCESS: Updated src/js/main.js to initialize FrameSequenceScrollytelling!');
} else {
  console.log('src/js/main.js already contains FrameSequenceScrollytelling import.');
}

// 3. Update src/js/scrollytelling.js
const scrollyPath = path.join(root, 'src/js/scrollytelling.js');
let scrollyCode = fs.readFileSync(scrollyPath, 'utf8');

// Replace initScene01Arrival to avoid conflicting with FrameSequenceScrollytelling
const oldArrivalFunc = `  // SCENE 01: ARRIVAL CAMERA PUSH-IN
  initScene01Arrival() {
    const heroSection = document.getElementById('scene-01');
    if (!heroSection) return;

    const heroBg = heroSection.querySelector('.hero-bg-anim');
    const heroContent = heroSection.querySelector('.relative.z-10');
    const statsBanner = heroSection.querySelector('.grid.grid-cols-2');

    if (heroBg) {
      gsap.to(heroBg, {
        scale: 1.15,
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8
        }
      });
    }

    if (heroContent) {
      gsap.to(heroContent, {
        y: -40,
        opacity: 0.85,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8
        }
      });
    }

    if (statsBanner) {
      const stats = statsBanner.querySelectorAll('div');
      gsap.from(stats, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: statsBanner,
          start: 'top 85%'
        }
      });
    }
  }`;

const newArrivalFunc = `  // SCENE 01: ARRIVAL CAMERA PUSH-IN (Handled by FrameSequenceScrollytelling)
  initScene01Arrival() {
    // Coordinated via FrameSequenceScrollytelling to maintain scroll-scrubbed frame sequence
  }`;

if (scrollyCode.includes(oldArrivalFunc)) {
  scrollyCode = scrollyCode.replace(oldArrivalFunc, newArrivalFunc);
  fs.writeFileSync(scrollyPath, scrollyCode, 'utf8');
  console.log('SUCCESS: Updated initScene01Arrival in scrollytelling.js');
}
