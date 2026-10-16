const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

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

if (!html.includes('class="site-header')) {
  html = html.replace(/(<body[^>]*>)/i, `$1\n${siteHeaderHtml}`);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('Successfully inserted luxury site header into index.html!');
} else {
  console.log('Site header already exists.');
}
