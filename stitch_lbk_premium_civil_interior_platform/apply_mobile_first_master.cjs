const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
const cssPath = path.resolve(__dirname, '../src/styles/scrollytelling.css');
const coverflowPath = path.resolve(__dirname, '../src/js/coverflow3d.js');

let html = fs.readFileSync(indexPath, 'utf8');
let css = fs.readFileSync(cssPath, 'utf8');
let coverflow = fs.readFileSync(coverflowPath, 'utf8');

// =========================================================================
// 1. UPDATE COVERFLOW RADIUS & MOBILE CARD CALCULATION
// =========================================================================
coverflow = coverflow.replace(
  /calculateRadius\(\)\s*\{[\s\S]*?this\.radius\s*=\s*580;\s*\}/,
  `calculateRadius() {
    const width = window.innerWidth;
    if (width < 640) {
      this.radius = Math.min(300, Math.max(240, width * 0.68));
    } else if (width < 1024) {
      this.radius = 460;
    } else {
      this.radius = 580;
    }
  }`
);
fs.writeFileSync(coverflowPath, coverflow, 'utf8');
console.log('Updated coverflow3d.js with mobile-calibrated cylinder radius.');

// =========================================================================
// 2. ENHANCE SCROLLYTELLING CSS FOR MOBILE-FIRST TOUCH & NAVIGATION
// =========================================================================
// Ensure mobile-nav-drawer supports both .is-open and .open
if (!css.includes('.mobile-nav-drawer')) {
  css += `
/* ==========================================================================
   MOBILE-FIRST LUXURY HEADER & NAVIGATION DRAWER
   ========================================================================== */
.site-header {
  height: 4rem;
  background: rgba(250, 249, 246, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(197, 161, 91, 0.2);
  z-index: 50;
}
.site-header.scrolled {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  background: rgba(250, 249, 246, 0.98);
}
.mobile-nav-drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: 82%;
  max-width: 340px;
  height: 100vh;
  background: #FFFFFF;
  box-shadow: -10px 0 35px rgba(0, 0, 0, 0.16);
  z-index: 60;
  transition: right 0.38s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
}
.mobile-nav-drawer.is-open,
.mobile-nav-drawer.open {
  right: 0;
}
.mobile-nav-overlay {
  position: fixed;
  inset: 0;
  background: rgba(40, 40, 40, 0.4);
  backdrop-filter: blur(4px);
  z-index: 55;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
}
.mobile-nav-drawer.is-open ~ .mobile-nav-overlay,
.mobile-nav-drawer.open ~ .mobile-nav-overlay {
  opacity: 1;
  pointer-events: auto;
}

/* Horizontal Filter Scroll Bar Hiding */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
`;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Appended mobile nav and touch utilities to scrollytelling.css.');
}

// =========================================================================
// 3. UPDATE INDEX.HTML WITH FIXED HEADER, MOBILE DRAWER & WHATSAPP PILL
// =========================================================================

const luxuryHeaderAndDrawerHtml = `
  <!-- =====================================================================
       SITE HEADER: FIXED LUXURY ARCHITECTURAL NAVIGATION (MOBILE-FIRST)
       ===================================================================== -->
  <header class="site-header fixed top-0 inset-x-0 z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Brand Logo / Monogram -->
      <a href="#scene-01" class="flex items-center gap-2.5 sm:gap-3 group">
        <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary via-primary-container to-surface-tint flex items-center justify-center text-on-primary font-serif font-bold text-base sm:text-lg shadow-md group-hover:scale-105 transition-all">
          LBK
        </div>
        <div class="flex flex-col text-left">
          <span class="font-serif font-bold text-xs sm:text-sm tracking-wider uppercase text-on-surface">Lalchand Kumawat</span>
          <span class="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.14em] text-on-surface-variant/80">Civil Contractor • Udaipur</span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
        <a href="#scene-01" class="hover:text-primary transition-colors py-1">3D Pavilion</a>
        <a href="#scene-03" class="hover:text-primary transition-colors py-1">Portfolio (3D)</a>
        <a href="#scene-05" class="hover:text-primary transition-colors py-1">Stone Lab</a>
        <a href="#scene-04" class="hover:text-primary transition-colors py-1">Standards</a>
        <a href="#scene-07" class="hover:text-primary transition-colors py-1">Services</a>
        <a href="#quote-section" class="hover:text-primary transition-colors py-1">Contact</a>
      </nav>

      <!-- Right CTAs & Mobile Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3.5">
        <!-- Direct Phone Tap Button -->
        <a href="tel:+919414162659" class="px-3 py-1.5 sm:px-4 sm:py-2 bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-on-primary-container rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all border border-outline-variant/30 shadow-sm" aria-label="Call Lalchand Kumawat">
          <span class="text-primary font-bold">📞</span>
          <span class="hidden sm:inline">+91 94141 62659</span>
          <span class="sm:hidden text-[11px]">Call</span>
        </a>

        <!-- Desktop Get Quote Button -->
        <a href="#quote-section" class="hidden md:inline-flex px-4 py-2 bg-inverse-surface hover:bg-primary text-inverse-on-surface hover:text-on-primary text-xs font-semibold uppercase tracking-[0.12em] rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
          Get a Quote
        </a>

        <!-- Mobile Hamburger Menu Button -->
        <button id="mobile-menu-btn" class="lg:hidden p-2 text-on-surface hover:text-primary rounded-lg focus:outline-none transition-colors" aria-label="Open Navigation Drawer">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Slide-Out Navigation Drawer -->
  <aside id="mobile-nav-drawer" class="mobile-nav-drawer" aria-label="Mobile Navigation Menu">
    <div>
      <div class="flex items-center justify-between pb-4 border-b border-outline-variant/30">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary via-primary-container to-surface-tint flex items-center justify-center text-on-primary font-serif font-bold text-base shadow-sm">
            LBK
          </div>
          <div class="flex flex-col">
            <span class="font-serif font-bold text-sm text-on-surface">Lalchand Kumawat</span>
            <span class="text-[9px] font-mono uppercase tracking-wider text-on-surface-variant">Civil Work Contractor</span>
          </div>
        </div>
        <button id="mobile-drawer-close-btn" class="p-1.5 text-on-surface-variant hover:text-primary rounded-full" aria-label="Close menu">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <nav class="flex flex-col space-y-1.5 mt-5 text-sm font-semibold uppercase tracking-wider text-on-surface">
        <a href="#scene-01" class="mobile-nav-link flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors">
          <span>3D Architectural Pavilion</span>
          <span class="text-xs text-primary">01</span>
        </a>
        <a href="#scene-02" class="mobile-nav-link flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors">
          <span>Spatial Immersion</span>
          <span class="text-xs text-primary">02</span>
        </a>
        <a href="#scene-03" class="mobile-nav-link flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors">
          <span>Portfolio Deck (3D)</span>
          <span class="text-xs text-primary">03</span>
        </a>
        <a href="#scene-04" class="mobile-nav-link flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors">
          <span>Precision Standards</span>
          <span class="text-xs text-primary">04</span>
        </a>
        <a href="#scene-05" class="mobile-nav-link flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors">
          <span>Stone Laboratory (3D)</span>
          <span class="text-xs text-primary">05</span>
        </a>
        <a href="#scene-06" class="mobile-nav-link flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors">
          <span>Before & After Slider</span>
          <span class="text-xs text-primary">06</span>
        </a>
        <a href="#scene-07" class="mobile-nav-link flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors">
          <span>Turnkey Civil Services</span>
          <span class="text-xs text-primary">07</span>
        </a>
        <a href="#scene-08" class="mobile-nav-link flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors">
          <span>Execution Process</span>
          <span class="text-xs text-primary">08</span>
        </a>
        <a href="#quote-section" class="mobile-nav-link flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors text-primary font-bold">
          <span>Get Consultation & Quote</span>
          <span class="text-xs font-mono">→</span>
        </a>
      </nav>
    </div>

    <!-- Mobile Drawer Bottom Quick Contact -->
    <div class="pt-5 border-t border-outline-variant/30 space-y-2.5">
      <div class="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider text-center">
        Sukher, NH-8, Udaipur, Rajasthan
      </div>
      <a href="tel:+919414162659" class="w-full py-2.5 bg-inverse-surface text-inverse-on-surface rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm">
        <span>📞</span> Call +91 94141 62659
      </a>
      <a href="https://wa.me/919414162659?text=Hello%20Lalchand%20ji%2C%20I%20would%20like%20to%20inquire%20about%20civil%20contracting%20and%20stone%20work%20for%20my%20project." target="_blank" rel="noopener noreferrer" class="w-full py-2 bg-[#25D366] text-white rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm">
        <span>💬</span> Chat on WhatsApp
      </a>
    </div>
  </aside>
  <div id="mobile-nav-overlay" class="mobile-nav-overlay"></div>

  <!-- =====================================================================
       FLOATING MOBILE WHATSAPP QUICK-ACTION CTA
       ===================================================================== -->
  <aside class="fixed bottom-5 right-4 z-40 sm:bottom-6 sm:right-6 group" aria-label="Quick WhatsApp Contact">
    <a href="https://wa.me/919414162659?text=Hello%20Lalchand%20ji%2C%20I%20would%20like%20to%20inquire%20about%20civil%20contracting%20and%20stone%20work%20for%20my%20project." 
       target="_blank" 
       rel="noopener noreferrer"
       class="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 group-hover:shadow-[0_12px_28px_rgba(37,211,102,0.55)]">
      <span class="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
      <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
      <span class="text-xs font-bold tracking-wide font-sans hidden sm:inline">WhatsApp LBK</span>
      <span class="text-xs font-bold tracking-wide font-sans sm:hidden">WhatsApp</span>
    </a>
  </aside>
`;

// Insert Header and Drawer right after <body...> if not present
if (!html.includes('class="site-header')) {
  html = html.replace(/(<body[^>]*>)/i, `$1\n${luxuryHeaderAndDrawerHtml}`);
  console.log('Inserted luxury header, mobile drawer, and floating WhatsApp CTA.');
}

// Ensure close button for drawer works in main.js
// Update HUD mobile pill responsiveness in Scene 01
html = html.replace(
  /<div class="inline-flex items-center gap-2\.5 px-4 py-1\.5 bg-surface-container-lowest\/85[\s\S]*?<\/div>\s*<\/div>/,
  `<div class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-1.5 bg-surface-container-lowest/85 backdrop-blur-xl rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-primary/25 text-[10px] sm:text-[11px] font-mono text-on-surface-variant transition-all">
                <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span id="hud-zone-val" class="font-semibold uppercase tracking-wider text-on-surface">ZONE 01 • PAVILION</span>
                <span class="text-outline-variant/60">•</span>
                <span class="text-primary font-bold">DEPTH: <span id="hud-depth-val">-0.0 m</span></span>
                <span class="hidden sm:inline text-outline-variant/60">•</span>
                <span class="hidden sm:inline text-on-surface-variant/80">POS: <span id="hud-coords-val">[0, 48, 750]</span></span>
              </div>
              <div class="w-36 sm:w-44 h-0.5 bg-outline-variant/20 rounded-full mt-1.5 overflow-hidden">
                <div id="hud-progress-fill" class="h-full bg-gradient-to-r from-primary via-primary-container to-primary w-0 transition-all duration-75"></div>
              </div>`
);

// Update Bottom exploration guidance bar for mobile responsiveness
html = html.replace(
  /<div class="inline-flex items-center gap-2\.5 sm:gap-3 px-5 py-2\.5 bg-surface-container-lowest\/85[\s\S]*?<\/div>/,
  `<div class="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 bg-surface-container-lowest/90 backdrop-blur-xl rounded-full border border-primary/25 shadow-[0_4px_25px_rgba(0,0,0,0.08)] text-[10px] sm:text-xs font-mono text-on-surface">
                <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span class="hidden sm:inline font-semibold uppercase tracking-wider text-on-surface">3D Architectural Pavilion •</span>
                <span class="hidden sm:inline text-on-surface-variant">DRAG TO ORBIT •</span>
                <span class="text-primary font-bold">SWIPE / SCROLL TO FLY THROUGH ↓</span>
              </div>`
);

// Update Scene 03 portfolio filters to scroll horizontally smoothly on mobile
html = html.replace(
  '<div class="flex flex-wrap items-center gap-2" id="portfolio-filters">',
  '<div class="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2 pt-1 no-scrollbar touch-pan-x" id="portfolio-filters">'
);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully applied all master mobile-first enhancements to index.html!');
