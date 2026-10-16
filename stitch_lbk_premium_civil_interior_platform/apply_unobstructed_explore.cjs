const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'index.html');
const heroJsPath = path.join(root, 'src/js/hero3dScrolly.js');

console.log('--- Applying Unobstructed Exploration & Luxury Navigation ---');

// 1. Update hero3dScrolly.js so Act 1 is NOT shown directly at scroll 0
let heroJs = fs.readFileSync(heroJsPath, 'utf8');

// Add manualInfoOpen state in constructor
heroJs = heroJs.replace(
  'this.isReducedMotion = window.matchMedia',
  'this.manualInfoOpen = false;\n    this.isReducedMotion = window.matchMedia'
);

// Update narrative act transitions in initScrollTimeline()
const oldTimelineLogic = /if \(this\.scrollProgress < 0\.28\)[\s\S]*?this\.setActState\(this\.act3, 1, 0\);[\s\S]*?}/;

const newTimelineLogic = `if (this.scrollProgress < 0.08) {
          if (this.hudZone) this.hudZone.textContent = 'ZONE 01 • ARCHITECTURAL PAVILION';
          // Unobstructed view: do not show card directly on load unless user explicitly toggled it
          if (!this.manualInfoOpen) {
            this.setActState(this.act1, 0, 30);
          } else {
            this.setActState(this.act1, 1, 0);
          }
          this.setActState(this.act2, 0, 25);
          this.setActState(this.act3, 0, 25);
        } else if (this.scrollProgress >= 0.08 && this.scrollProgress < 0.38) {
          if (this.hudZone) this.hudZone.textContent = 'ZONE 01 • MASTER CRAFTSMANSHIP';
          this.setActState(this.act1, 1, 0);
          this.setActState(this.act2, 0, 25);
          this.setActState(this.act3, 0, 25);
        } else if (this.scrollProgress >= 0.38 && this.scrollProgress < 0.68) {
          if (this.hudZone) this.hudZone.textContent = 'ZONE 02 • PRECISION ENGINEERING SLABS';
          this.setActState(this.act1, 0, -25);
          this.setActState(this.act2, 1, 0);
          this.setActState(this.act3, 0, 25);
        } else {
          if (this.hudZone) this.hudZone.textContent = 'ZONE 03 • MONUMENTAL EXECUTION DECK';
          this.setActState(this.act1, 0, -25);
          this.setActState(this.act2, 0, -25);
          this.setActState(this.act3, 1, 0);
        }`;

heroJs = heroJs.replace(oldTimelineLogic, newTimelineLogic);

// Add event listeners for overview toggle and close button
if (!heroJs.includes('toggle-hero-info')) {
  const toggleHandlerCode = `
    // Pro feature: Overview toggle and close buttons
    const toggleBtn = document.getElementById('toggle-hero-info');
    const closeBtn = document.getElementById('close-hero-act-1');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.manualInfoOpen = !this.manualInfoOpen;
        if (this.manualInfoOpen) {
          this.setActState(this.act1, 1, 0);
          toggleBtn.innerHTML = '<span>Close ×</span>';
        } else {
          this.setActState(this.act1, 0, 30);
          toggleBtn.innerHTML = '<span>Overview ℹ</span>';
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.manualInfoOpen = false;
        this.setActState(this.act1, 0, 30);
        if (toggleBtn) toggleBtn.innerHTML = '<span>Overview ℹ</span>';
      });
    }
`;
  heroJs = heroJs.replace('this.bindEvents();', `this.bindEvents();\n${toggleHandlerCode}`);
}

fs.writeFileSync(heroJsPath, heroJs, 'utf8');
console.log('✓ hero3dScrolly.js updated: Act 1 hidden at start for free exploration, reveals on scroll or toggle.');

// 2. Update index.html: Add top luxury navigation header and refine Scene 01
let html = fs.readFileSync(indexPath, 'utf8');

// Header markup to insert right after <body>
const siteHeaderHtml = `
  <!-- =====================================================================
       SITE HEADER: FIXED LUXURY ARCHITECTURAL NAVIGATION
       ===================================================================== -->
  <header class="site-header fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl border-b border-outline-variant/25 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
      
      <!-- Brand Logo / Monogram -->
      <a href="#scene-01" class="flex items-center gap-3 group">
        <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary via-primary-container to-surface-tint flex items-center justify-center text-on-primary font-serif font-bold text-base sm:text-lg shadow-md group-hover:scale-105 transition-all">
          LBK
        </div>
        <div class="flex flex-col text-left">
          <span class="font-serif font-bold text-xs sm:text-sm tracking-wider uppercase text-on-surface">Lalchand Banshidhar Kumawat</span>
          <span class="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] text-on-surface-variant/80">Civil Work Contractor • Sukher, Udaipur</span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
        <a href="#scene-01" class="hover:text-primary transition-colors py-1">3D Pavilion</a>
        <a href="#scene-03" class="hover:text-primary transition-colors py-1">Portfolio (3D)</a>
        <a href="#stone-viewer-section" class="hover:text-primary transition-colors py-1">Stone Lab</a>
        <a href="#scene-04" class="hover:text-primary transition-colors py-1">Standards</a>
        <a href="#services-section" class="hover:text-primary transition-colors py-1">Services</a>
        <a href="#quote-section" class="hover:text-primary transition-colors py-1">Contact</a>
      </nav>

      <!-- Right CTAs -->
      <div class="hidden sm:flex items-center gap-3.5">
        <a href="tel:+919414162659" class="text-xs font-mono text-on-surface-variant hover:text-primary flex items-center gap-1.5 transition-colors">
          <span class="text-primary font-bold">📞</span> +91 94141 62659
        </a>
        <a href="#quote-section" class="px-5 py-2 bg-inverse-surface hover:bg-primary text-inverse-on-surface hover:text-on-primary text-xs font-semibold uppercase tracking-[0.12em] rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
          Get a Quote
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button id="mobile-menu-btn" class="lg:hidden p-2 text-on-surface hover:text-primary focus:outline-none" aria-label="Toggle Navigation Menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

    </div>
  </header>

  <!-- Mobile Navigation Drawer -->
  <div id="mobile-nav-drawer" class="mobile-nav-drawer">
    <div>
      <div class="flex items-center justify-between pb-6 border-b border-outline-variant/30">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-serif font-bold text-sm">LBK</div>
          <span class="font-serif font-bold text-sm">Lalchand Kumawat</span>
        </div>
      </div>
      <nav class="flex flex-col space-y-4 mt-6 text-sm font-semibold uppercase tracking-wider text-on-surface">
        <a href="#scene-01" class="mobile-nav-link hover:text-primary">3D Pavilion</a>
        <a href="#scene-03" class="mobile-nav-link hover:text-primary">Portfolio Deck</a>
        <a href="#stone-viewer-section" class="mobile-nav-link hover:text-primary">Stone Laboratory</a>
        <a href="#scene-04" class="mobile-nav-link hover:text-primary">Lippage Standards</a>
        <a href="#services-section" class="mobile-nav-link hover:text-primary">Civil Services</a>
        <a href="#quote-section" class="mobile-nav-link hover:text-primary">Get Consultation</a>
      </nav>
    </div>
    <div class="pt-6 border-t border-outline-variant/30">
      <a href="tel:+919414162659" class="block text-center py-2.5 bg-inverse-surface text-inverse-on-surface rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
        Call +91 94141 62659
      </a>
      <a href="#quote-section" class="mobile-nav-link block text-center py-2 bg-surface-container-high text-on-surface rounded-full text-xs font-semibold uppercase tracking-wider">
        Request Estimate
      </a>
    </div>
  </div>
`;

// Insert site header if not present
if (!html.includes('class="site-header')) {
  html = html.replace('<body class="bg-surface font-body-md text-body-md text-on-surface antialiased">', `<body class="bg-surface font-body-md text-body-md text-on-surface antialiased">\n${siteHeaderHtml}`);
}

// Update Scene 01 to start with clean open view and a bottom floating exploration bar
const scene01Regex = /<!-- =+[\s\S]*?SCENE 01: ARRIVAL[\s\S]*?<\/section>/;

const newScene01Html = `<!-- =====================================================================
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

            <!-- Kinetic Scrollytelling Narrative Cards (Clean on Arrival, reveals on scroll or overview toggle) -->
            <div class="relative z-20 max-w-2xl w-full mx-auto px-4 flex items-center justify-center pointer-events-none">

              <!-- ACT 1: ARRIVAL (Reveals at 8% - 38% Scroll, or on demand via Overview button) -->
              <div id="hero-act-1" class="hero-act-panel flex flex-col items-center text-center opacity-0 translate-y-8 pointer-events-none transition-all duration-500 relative bg-surface-container-lowest/85 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-primary/25 shadow-[0_20px_60px_rgba(40,40,40,0.08)]">
                
                <!-- Close Button to dismiss overview and continue free exploration -->
                <button id="close-hero-act-1" class="absolute top-4 right-4 w-7 h-7 rounded-full bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary text-xs transition-colors pointer-events-auto" title="Explore 3D View">
                  ✕
                </button>

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
                  <a class="w-full sm:w-auto px-6 py-2.5 bg-inverse-surface text-inverse-on-surface text-xs font-semibold uppercase tracking-[0.14em] hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 text-center btn-shine-wrap relative border border-transparent hover:border-primary-container pointer-events-auto" href="#scene-03">
                    Explore Our Work
                  </a>
                  <a class="w-full sm:w-auto px-6 py-2.5 bg-surface-container-lowest text-on-surface text-xs font-semibold uppercase tracking-[0.14em] hover:bg-surface-container-high transition-all duration-300 shadow-xs hover:shadow text-center border border-outline-variant/30 pointer-events-auto" href="#quote-section">
                    Get a Quote
                  </a>
                </div>

                <div class="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-primary font-bold mb-space-xs">
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

              <!-- ACT 2: FLYTHROUGH DECK (38% - 68% Scroll) -->
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

            <!-- Bottom Floating Exploration Bar: Clean & Interactive -->
            <div class="absolute bottom-6 sm:bottom-8 z-30 flex items-center justify-center w-full px-4 pointer-events-none">
              <div class="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2 bg-surface-container-lowest/85 backdrop-blur-xl rounded-full border border-primary/25 shadow-[0_4px_25px_rgba(0,0,0,0.08)] text-[11px] sm:text-xs font-mono text-on-surface pointer-events-auto">
                <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span class="hidden sm:inline font-semibold uppercase text-on-surface">3D Architectural Pavilion</span>
                <span class="hidden sm:inline text-outline-variant/60">•</span>
                <span class="text-on-surface-variant">DRAG TO ORBIT</span>
                <span class="text-outline-variant/60">•</span>
                <span class="text-primary font-bold">SCROLL TO FLY THROUGH ↓</span>
                <button id="toggle-hero-info" class="ml-1 sm:ml-2 px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-full text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-wider transition-all">
                  Overview ℹ
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>`;

html = html.replace(scene01Regex, newScene01Html);
fs.writeFileSync(indexPath, html, 'utf8');
console.log('✓ index.html updated with luxury fixed navigation header and clean unobstructed 3D pavilion!');
