const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// -------------------------------------------------------------
// 1. UPDATE index.html: Add intro-card markup, mobile action dock, and clean classes
// -------------------------------------------------------------
const indexPath = path.join(rootDir, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// Update #intro markup
const oldIntro = `<div class="cap" id="intro">
              <h1>LBK</h1>
              <p>LALCHAND BANSHIDHAR KUMAWAT<br>Civil work contractor &amp; architectural stone, Mumbai</p>
              <span class="cue"></span>
              <small>Scroll to begin</small>
            </div>`;

const newIntro = `<div class="cap" id="intro">
              <div class="intro-card">
                <span class="intro-badge">Architectural Stone &amp; Luxury Civil</span>
                <h1>LBK</h1>
                <p>LALCHAND BANSHIDHAR KUMAWAT<br><span class="intro-sub">Civil Contractor &amp; Architectural Stone • Mumbai</span></p>
                <span class="cue"></span>
                <small>Scroll or Swipe to explore</small>
              </div>
            </div>`;

if (indexHtml.includes(oldIntro)) {
  indexHtml = indexHtml.replace(oldIntro, newIntro);
  console.log('Updated #intro in index.html');
} else {
  console.log('oldIntro not matched exactly, checking substring...');
  indexHtml = indexHtml.replace(
    /<div class="cap" id="intro">[\s\S]*?<\/div>/,
    newIntro
  );
  console.log('Regex replaced #intro in index.html');
}

// Update floating CTA to include Mobile Bottom Floating Action Bar
const oldFloatingWhatsapp = `<aside class="fixed bottom-5 right-4 z-40 sm:bottom-6 sm:right-6 group" aria-label="Quick WhatsApp Contact">`;
const mobileBottomDock = `<!-- =====================================================================
       MOBILE BOTTOM DOCK (THUMB-FIRST 1-TAP CALL & WHATSAPP)
       ===================================================================== -->
  <aside class="fixed bottom-3 inset-x-3 z-40 sm:hidden pointer-events-none" aria-label="Quick Mobile Actions">
    <div class="max-w-md mx-auto bg-surface-container-lowest/92 backdrop-blur-xl border border-outline-variant/40 rounded-full p-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.18)] flex items-center justify-between gap-2 pointer-events-auto">
      <a href="tel:+918888199091" class="flex-1 py-2.5 px-3 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-full flex items-center justify-center gap-1.5 transition-all active:scale-95 text-xs font-mono font-bold border border-outline-variant/20 shadow-sm" aria-label="Direct Call">
        <span class="text-primary text-sm">📞</span>
        <span>Call</span>
      </a>
      <a href="https://wa.me/918888199091?text=Hello%20Lalchand%20ji%2C%20I%20would%20like%20to%20inquire%20about%20civil%20contracting%20and%20stone%20work%20for%20my%20project." target="_blank" rel="noopener noreferrer" class="flex-[1.4] py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center gap-1.5 transition-all active:scale-95 text-xs font-bold shadow-[0_4px_16px_rgba(37,211,102,0.35)]" aria-label="WhatsApp Chat">
        <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.9-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
        <span>WhatsApp</span>
      </a>
      <a href="#quote-section" class="py-2.5 px-3 bg-primary text-on-primary rounded-full flex items-center justify-center transition-all active:scale-95 text-xs font-semibold shadow-sm" aria-label="Book Quote">
        <span>Quote</span>
      </a>
    </div>
  </aside>

  <!-- Desktop Floating WhatsApp Pill (hidden on mobile to avoid UI overlap) -->
  <aside class="hidden sm:block fixed bottom-6 right-6 z-40 group" aria-label="Quick WhatsApp Contact">`;

if (indexHtml.includes(oldFloatingWhatsapp)) {
  indexHtml = indexHtml.replace(oldFloatingWhatsapp, mobileBottomDock);
  console.log('Replaced floating WhatsApp with Mobile Dock + Desktop Pill');
}

// Generic phone placeholder in form to preserve confidentiality
indexHtml = indexHtml.replace('placeholder="+91 88881 99091"', 'placeholder="+91 98765 43210"');

fs.writeFileSync(indexPath, indexHtml, 'utf8');

// -------------------------------------------------------------
// 2. UPDATE src/styles/scrollytelling.css:
//    - #intro glass card styling
//    - #sheet mobile bottom drawer styling
//    - #floorTag safe area positioning
//    - .project-modal-backdrop & dialog mobile styling
// -------------------------------------------------------------
const scrollyCssPath = path.join(rootDir, 'src/styles/scrollytelling.css');
let scrollyCss = fs.readFileSync(scrollyCssPath, 'utf8');

// Replace #floorTag styles
const oldFloorTag = `#floorTag {
  bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
  background: rgba(26, 24, 22, 0.85);
  color: #C5A15B;
  font-weight: 500;
  border: 1px solid rgba(197, 161, 91, 0.35);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

@media (min-width: 768px) {
  #floorTag {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
  }
}`;

const newFloorTag = `#floorTag {
  bottom: calc(env(safe-area-inset-bottom, 0px) + 76px);
  background: rgba(26, 24, 22, 0.88);
  color: #C5A15B;
  font-weight: 500;
  border: 1px solid rgba(197, 161, 91, 0.35);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  font-size: 10px;
  padding: 8px 16px;
  letter-spacing: 0.08em;
  max-width: calc(100% - 32px);
}

@media (min-width: 640px) {
  #floorTag {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
    font-size: 11px;
    padding: 10px 18px;
  }
}`;

if (scrollyCss.includes(oldFloorTag)) {
  scrollyCss = scrollyCss.replace(oldFloorTag, newFloorTag);
}

// Add intro card and mobile-first enhancements to scrollytelling.css
const mobileScrollyAdditions = `
/* ==========================================================================
   MOBILE-FIRST HERO & INTRO GLASS CARD SPECIFICATIONS
   ========================================================================== */
#intro {
  justify-content: center;
  padding: 0 16px;
  pointer-events: none;
}

.intro-card {
  pointer-events: auto;
  max-width: min(348px, 92vw);
  background: rgba(250, 249, 246, 0.90);
  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(197, 161, 91, 0.38);
  border-radius: 20px;
  padding: 22px 18px 18px;
  box-shadow: 0 16px 42px -8px rgba(40, 30, 20, 0.14), 0 4px 16px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.intro-badge {
  font: 600 10px/1 Inter, sans-serif;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #775A1B;
  background: rgba(197, 161, 91, 0.16);
  border: 1px solid rgba(197, 161, 91, 0.32);
  padding: 5px 12px;
  border-radius: 999px;
  margin-bottom: 12px;
}

.intro-card h1 {
  font-family: Cinzel, Georgia, serif;
  font-size: clamp(34px, 8.5vw, 68px);
  font-weight: 700;
  letter-spacing: 0.12em;
  margin: 0;
  color: #1A1816;
  line-height: 1.1;
}

.intro-card p {
  margin: 10px 0 0;
  font-size: clamp(12px, 3.2vw, 15px);
  letter-spacing: 0.12em;
  color: #4a453c;
  line-height: 1.5;
  font-family: Inter, system-ui, sans-serif;
}

.intro-sub {
  font-size: 11px;
  color: #7d7568;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;
  display: block;
  margin-top: 4px;
}

@media (min-width: 768px) {
  .intro-card {
    background: transparent;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    border: none;
    box-shadow: none;
    max-width: 44em;
    padding: 0;
  }
  .intro-badge {
    font-size: 11px;
    margin-bottom: 16px;
  }
}

/* --------------------------------------------------------------------------
   Mobile-First 3D Sheet & Inspection Drawer
   -------------------------------------------------------------------------- */
@media (max-width: 640px) {
  #sheet {
    border-radius: 20px 20px 0 0;
    padding: 16px 18px calc(env(safe-area-inset-bottom, 0px) + 24px);
    box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.28);
  }
  #sheet::before {
    content: "";
    width: 40px;
    height: 4px;
    border-radius: 2px;
    background: rgba(197, 161, 91, 0.45);
    margin: -4px auto 12px;
    display: block;
    flex-basis: 100%;
  }
  #sheet #zIn, #sheet #zOut {
    display: none !important;
  }
  #sheet .ctl {
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
  }
  #sheet button {
    flex: 1;
    height: 44px;
    font-size: 13px;
  }
  #sheet #shX {
    flex: 1.2;
    background: #C5A15B;
    color: #1A1816;
    font-weight: 600;
  }

  /* Inspection Modal Dialog for Projects (Scene 03) */
  .project-modal-backdrop {
    padding: 0 !important;
    align-items: flex-end !important;
  }
  .project-modal-dialog {
    max-height: 86vh !important;
    width: 100% !important;
    border-radius: 22px 22px 0 0 !important;
    border-bottom: none !important;
    margin: 0 !important;
    transform: translateY(100%) !important;
    transition: transform 0.38s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
  }
  .project-modal-backdrop.is-open .project-modal-dialog {
    transform: translateY(0) !important;
  }
  .project-modal-dialog .bg-surface-container {
    min-height: 190px !important;
    max-height: 220px !important;
  }
  .project-modal-close {
    top: 12px !important;
    right: 12px !important;
    width: 36px !important;
    height: 36px !important;
    background: rgba(255, 255, 255, 0.94) !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16) !important;
  }
}
`;

scrollyCss += '\n' + mobileScrollyAdditions;
fs.writeFileSync(scrollyCssPath, scrollyCss, 'utf8');
console.log('Updated scrollytelling.css with mobile-first hero card and modal styles!');

// -------------------------------------------------------------
// 3. UPDATE src/js/coverflow3d.js:
//    - Adjust modal min-height on mobile
//    - Add drag indicator handle to modal
// -------------------------------------------------------------
const coverflowPath = path.join(rootDir, 'src/js/coverflow3d.js');
let coverflowCode = fs.readFileSync(coverflowPath, 'utf8');

coverflowCode = coverflowCode.replace(
  'min-h-[360px] md:min-h-[500px]',
  'min-h-[200px] md:min-h-[480px]'
);

coverflowCode = coverflowCode.replace(
  '<div class="project-modal-dialog" role="dialog" aria-modal="true">',
  `<div class="project-modal-dialog" role="dialog" aria-modal="true">
          <!-- Mobile drag handle pill -->
          <div class="w-10 h-1 bg-outline-variant/60 rounded-full mx-auto my-2.5 sm:hidden"></div>`
);

fs.writeFileSync(coverflowPath, coverflowCode, 'utf8');
console.log('Updated coverflow3d.js with mobile modal optimizations!');

// -------------------------------------------------------------
// 4. UPDATE src/styles/components.css:
//    - Safari iOS auto-zoom prevention (font-size >= 16px)
//    - Global overflow-x protection
//    - Scroll margin for fixed header
// -------------------------------------------------------------
const componentsCssPath = path.join(rootDir, 'src/styles/components.css');
let compCss = fs.readFileSync(componentsCssPath, 'utf8');

const mobileGlobalCss = `
/* ==========================================================================
   MOBILE-FIRST GLOBAL SYSTEM RULES (IOS & ANDROID TOUCH ENHANCEMENTS)
   ========================================================================== */
html, body {
  overflow-x: clip !important;
  max-width: 100vw;
  -webkit-tap-highlight-color: transparent;
}

section[id] {
  scroll-margin-top: 4.8rem;
}

/* Prevent Safari iOS automatic zoom-in when focusing input fields */
@media (max-width: 640px) {
  input[type="text"],
  input[type="tel"],
  input[type="email"],
  input[type="number"],
  select,
  textarea {
    font-size: 16px !important;
  }

  /* Thumb-friendly minimum touch targets */
  .mobile-nav-link {
    min-height: 44px;
  }
}
`;

compCss += '\n' + mobileGlobalCss;
fs.writeFileSync(componentsCssPath, compCss, 'utf8');
console.log('Updated components.css with mobile-first global rules!');
