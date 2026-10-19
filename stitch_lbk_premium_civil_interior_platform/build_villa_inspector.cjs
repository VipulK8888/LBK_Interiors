const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// =========================================================================
// 1. UPDATE src/js/hero3dScrolly.js
// =========================================================================
const heroJsPath = path.join(rootDir, 'src/js/hero3dScrolly.js');
let heroJs = fs.readFileSync(heroJsPath, 'utf8');

// Rich Projects Data with full architectural stone & civil specifications
const richProjectsCode = `const PROJECTS = [
  {
    n: "Villa Alankrit",
    s: "Grand Double-Height Foyer & Marble Staircase",
    file: "/slabs/slab_01.jpg",
    loc: "Sukher Luxury Foothills, Udaipur",
    scope: "12,800 sq ft Double-Height Foyer & Floating Staircase",
    stone: "Imported First-Choice Statuario & Calacatta Gold Marble",
    civil: "Seismic RCC Cantilever Core, 1:3 Calibrated Polymer Screed, Concealed Steel Stringers",
    finish: "9-Stage Diamond Crystallization (Specular Gloss 98+)",
    joint: "0.0mm Lippage / Zero-Void Calibrated Bedding",
    desc: "A monumental double-height entrance hall with continuous bookmatched Italian marble flooring flowing seamlessly across monolithic slabs. The floating staircase features cantilevered marble treads supported by a concealed high-tensile steel core with flush-mounted glass balustrades.",
    k: "vein", base: "#ecebe7", vein: "#7d7d85", w: 1
  },
  {
    n: "The Mewar Penthouse",
    s: "Panda & Statuario Bookmatched Marble Lounge",
    file: "/slabs/slab_02.jpg",
    loc: "Udaipur Skyline Enclave",
    scope: "5,400 sq ft Living & Dining Grand Suite",
    stone: "Bookmatched Panda Marble & Bianco Statuario",
    civil: "Calibrated Sub-Base Screed, Expansion Joints at Columns, Heavy Slab Suction Installation",
    finish: "Ultra-High Gloss Mirror Diamond Polish",
    joint: "0.0mm Precision Bookmatched Vein Alignment",
    desc: "Monumental bookmatched Panda marble feature wall with striking organic charcoal and black veining mirrored across vertical planes. Precision dry-laid at the yard prior to site installation to ensure 100% vein continuity from floor to ceiling.",
    k: "vein", base: "#f4f2ee", vein: "#8a7f6a", w: 1.6
  },
  {
    n: "Sovereign Villa",
    s: "Palatial Great Room & Statuario Feature Wall",
    file: "/slabs/slab_03.jpg",
    loc: "Shobhagpura Heights",
    scope: "8,600 sq ft Grand Living Hall & Architectural Accent",
    stone: "Italian Statuario Marble & Hand-Finished Brass Trims",
    civil: "Recessed Architectural Cove Framing, Rigid Sub-Floor Mortar Bedding, Anti-Crack Membrane",
    finish: "High-Reflectance Vitrified Polish (Gloss 95+)",
    joint: "Ultra-Slim 0.5mm Epoxy Joints with Color-Matched Resin",
    desc: "Expansive formal drawing hall featuring seamless floor-to-ceiling bookmatched marble claddings with integrated architectural tray lighting. Floor surfaces laid with laser-calibrated water lines ensuring complete structural uniformity.",
    k: "strata", base: "#c99a62", vein: "#8f5f33"
  },
  {
    n: "Lakefront Residence",
    s: "Master Bath Cladding & Floating Stone Vanity",
    file: "/slabs/slab_04.jpg",
    loc: "Fatehsagar Lakefront Enclave",
    scope: "2,200 sq ft Master Bathroom Suite & Wet Rooms",
    stone: "Dark Emperador & Statuario Exotic Quartzite",
    civil: "Multi-Layer Elastomeric Tanking, Concealed Linear Drains, Heavy Vanity Wall Anchors",
    finish: "Honed Silk Velvet & High-Gloss Countertop Polish",
    joint: "100% Waterproof Epoxy Joint System / Flush Sub-Drainage",
    desc: "Bespoke master bathing sanctuary featuring full-height monolithic marble panels with backlit floating stone vanities. Zero-step curbless shower enclosures engineered with precision fall slopes for instant water clearance.",
    k: "vein", base: "#8fa3a6", vein: "#e8efe9", w: 1.3
  },
  {
    n: "Hilltop Suite",
    s: "High-Gloss Italian Crema Marfil Living Room",
    file: "/slabs/slab_05.jpg",
    loc: "Ambavgarh Hilltop Bungalow",
    scope: "4,800 sq ft Formal Reception & Living Areas",
    stone: "Crema Marfil Select Grade & Botticino Classico",
    civil: "Reinforced Cement Concrete Leveling, Wall Skirting Reglets, Acoustic Decoupling Underlay",
    finish: "Mirror Specular Crystallization (Gloss 96)",
    joint: "0.0mm Lippage / Hairline Micro-Bevel Edges",
    desc: "Luminous living area executed with premium beige Italian marble that reflects ambient natural light throughout the residence. Custom classical mouldings and integrated stone thresholds with flush transitions to hardwood suites.",
    k: "chips", base: "#d9d2c4"
  },
  {
    n: "Royal Orchid Estate",
    s: "Turnkey Villa Architecture & Stone Pool Deck",
    file: "/slabs/slab_06.jpg",
    loc: "Badi Hills Luxury Estate",
    scope: "18,500 sq ft Complete Turnkey Villa & Outdoor Pool Deck",
    stone: "Flamed Granite Pool Coping, Ashlar Stone Facade & Porcelain Paving",
    civil: "Complete RCC Framed Superstructure, Ashlar Masonry, Infinity Pool Concrete Shell, Structural Waterproofing",
    finish: "Thermal Flamed Anti-Slip R11 (Exterior) & Diamond Honed (Interior)",
    joint: "1:100 Laser Gradient Drainage / Seismic Structural Compliance",
    desc: "End-to-end turnkey civil construction of a luxury contemporary bungalow. Includes seismic-resistant concrete frame, thermal-flamed anti-slip granite pool decking with waterjet bullnosed rims, exterior ventilated facade stone cladding, and luxury interior floorings.",
    k: "vein", base: "#14120f", vein: "#C5A15B", w: 1.8
  }
];`;

heroJs = heroJs.replace(/const PROJECTS = \[[\s\S]*?\];/, richProjectsCode);

// In monolith(): Remove obstructive plaque covering bottom 25% of photo on slab face
// Instead, position a discrete polished nameplate bracket below the slab
const oldMonolithAdd = `    const pl = new THREE.Mesh(
      new THREE.PlaneGeometry(W * 0.9, W * 0.9 * 200 / 1024),
      new THREE.MeshBasicMaterial({ map: this.plaque(P), transparent: true })
    );
    pl.position.set(0, -H / 2 + 26, D / 2 + 0.5);

    g.add(brass, slab, wire, scan, pl);`;

const newMonolithAdd = `    // Discrete polished nameplate placed neatly below the frame so 100% of the artwork photo is visible
    const pl = new THREE.Mesh(
      new THREE.PlaneGeometry(W * 0.85, 20),
      new THREE.MeshBasicMaterial({ map: this.plaque(P), transparent: true })
    );
    pl.position.set(0, -H / 2 - 14, D / 2 + 0.5);

    g.add(brass, slab, wire, scan, pl);`;

if (heroJs.includes(oldMonolithAdd)) {
  heroJs = heroJs.replace(oldMonolithAdd, newMonolithAdd);
}

// In loop(): Make slabs automatically rotate forward (face the user directly) when camera approaches
const oldLoopRotation = `    this.mons.forEach(m => {
      m.scan.position.y = Math.sin(t * 1.3 + m.i) * 105;
      const tr = -SIDE[m.i] * 0.32 * (m.i === this.ins ? 1 - e : 1);
      m.ry = m.ry === undefined ? tr : m.ry + (tr - m.ry) * 0.14;
      m.g.rotation.y = m.ry;
      m.pool.position.set(m.g.position.x, -124.4, m.g.position.z);
      m.pool.scale.setScalar(m.g.scale.x);
    });`;

const newLoopRotation = `    this.mons.forEach(m => {
      m.scan.position.y = Math.sin(t * 1.3 + m.i) * 105;
      
      // Auto-facing alignment: when camera approaches slab, rotate it straight forward to face user squarely
      const distZ = Math.abs(pos.z - ZS[m.i]);
      const focus = Math.max(0, 1 - distZ / 380);
      const easeFocus = focus * focus * (3 - 2 * focus);
      const baseRot = -SIDE[m.i] * (this.mobile ? 0.22 : 0.32);
      const tr = (m.i === this.ins) ? 0 : (baseRot * (1 - easeFocus * 0.94));

      m.ry = m.ry === undefined ? tr : m.ry + (tr - m.ry) * 0.16;
      m.g.rotation.y = m.ry;
      m.pool.position.set(m.g.position.x, -124.4, m.g.position.z);
      m.pool.scale.setScalar(m.g.scale.x);
    });`;

if (heroJs.includes(oldLoopRotation)) {
  heroJs = heroJs.replace(oldLoopRotation, newLoopRotation);
} else {
  console.log('Old loop rotation pattern not matched exactly, replacing by regex...');
  heroJs = heroJs.replace(/this\.mons\.forEach\(m => \{[\s\S]*?m\.pool\.scale\.setScalar\(m\.g\.scale\.x\);\s*\}\);/, newLoopRotation);
}

// In updateHud(pos): Update active villa prompt pill
const oldUpdateHudTail = `    if (this.hud.o) {
      this.hud.o.style.opacity = clamp((this.sp - 0.9) / 0.08, 0, 1);
    }
  }`;

const newUpdateHudTail = `    if (this.hud.o) {
      this.hud.o.style.opacity = clamp((this.sp - 0.9) / 0.08, 0, 1);
    }

    // In-Pavilion Floating Active Villa Pill
    const villaPill = document.getElementById('activeVillaPill');
    const villaTitle = document.getElementById('activeVillaTitle');
    const isInsideGallery = this.sp > 0.04 && this.sp < 0.94;

    if (villaPill && villaTitle) {
      if (isInsideGallery) {
        villaPill.classList.add('visible');
        villaTitle.textContent = \`0\${z + 1}/06 • \${PROJECTS[z].n}\`;
        villaPill.dataset.activeIdx = z;
      } else {
        villaPill.classList.remove('visible');
      }
    }
  }`;

heroJs = heroJs.replace(oldUpdateHudTail, newUpdateHudTail);

// Add openVillaModal method to class
const oldOpenMethod = `  open(i) {
    this.sel = this.ins = i;
    this.zt = 0;
    this.zoom = 0;
    const shN = document.getElementById('shN');
    const shD = document.getElementById('shD');
    const pv = document.getElementById('pv');
    const nx = document.getElementById('nx');
    const sheet = document.getElementById('sheet');
    const hudBot = document.getElementById('hudBot');
    const stage = document.getElementById(this.stageId);

    if (shN) shN.textContent = PROJECTS[i].n;
    if (shD) shD.textContent = \`\${i + 1} of \${PROJECTS.length}. \${PROJECTS[i].s}. \${DESC[i]}\`;
    if (pv) pv.disabled = i === 0;
    if (nx) nx.disabled = i === PROJECTS.length - 1;
    if (sheet) sheet.classList.add('on');
    if (hudBot) hudBot.style.visibility = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    if (stage) {
      stage.style.touchAction = 'none';
      stage.classList.add('insp');
    }
    const shX = document.getElementById('shX');
    if (shX) shX.focus({ preventScroll: true });
  }`;

const newOpenMethod = `  open(i) {
    this.sel = this.ins = i;
    this.openVillaInspector(i);
  }

  openVillaInspector(i) {
    this.sel = this.ins = i;
    const p = PROJECTS[i];
    if (!p) return;

    const modal = document.getElementById('villa-inspection-modal');
    if (modal) {
      const img = modal.querySelector('#villa-modal-img');
      const badge = modal.querySelector('#villa-modal-badge');
      const loc = modal.querySelector('#villa-modal-loc');
      const title = modal.querySelector('#villa-modal-title');
      const tagline = modal.querySelector('#villa-modal-tagline');
      const desc = modal.querySelector('#villa-modal-desc');
      const scope = modal.querySelector('#villa-modal-scope');
      const stone = modal.querySelector('#villa-modal-stone');
      const civil = modal.querySelector('#villa-modal-civil');
      const finish = modal.querySelector('#villa-modal-finish');
      const joint = modal.querySelector('#villa-modal-joint');
      const prevBtn = modal.querySelector('#villa-modal-prev');
      const nextBtn = modal.querySelector('#villa-modal-next');
      const numIndicator = modal.querySelector('#villa-modal-num');

      if (img) {
        img.src = p.file;
        img.alt = p.n;
        img.classList.remove('is-zoomed');
      }
      if (badge) badge.textContent = \`VILLA 0\${i + 1} OF 06\`;
      if (loc) loc.textContent = p.loc;
      if (title) title.textContent = p.n;
      if (tagline) tagline.textContent = p.s;
      if (desc) desc.textContent = p.desc;
      if (scope) scope.textContent = p.scope;
      if (stone) stone.textContent = p.stone;
      if (civil) civil.textContent = p.civil;
      if (finish) finish.textContent = p.finish;
      if (joint) joint.textContent = p.joint;
      if (numIndicator) numIndicator.textContent = \`0\${i + 1} / 06\`;

      if (prevBtn) prevBtn.disabled = i === 0;
      if (nextBtn) nextBtn.disabled = i === PROJECTS.length - 1;

      // Update selector tabs
      const tabs = modal.querySelectorAll('.villa-tab-btn');
      tabs.forEach((tab, idx) => {
        if (idx === i) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });

      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
  }

  closeVillaInspector() {
    this.close();
    const modal = document.getElementById('villa-inspection-modal');
    if (modal) {
      modal.classList.remove('is-open');
      const img = modal.querySelector('#villa-modal-img');
      if (img) img.classList.remove('is-zoomed');
    }
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }`;

heroJs = heroJs.replace(oldOpenMethod, newOpenMethod);

fs.writeFileSync(heroJsPath, heroJs, 'utf8');
console.log('Successfully updated hero3dScrolly.js with rich villa specifications and auto-facing rotation!');

// =========================================================================
// 2. UPDATE index.html: Add #activeVillaPill and #villa-inspection-modal
// =========================================================================
const indexPath = path.join(rootDir, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Add #activeVillaPill inside #stage right after #floorTag
const activeVillaPillHtml = `            <!-- In-Pavilion Floating Active Villa Pill (Tap to Inspect High-Res Details) -->
            <div id="activeVillaPill" class="active-villa-pill" role="region" aria-label="Current Villa in view">
              <span class="active-villa-dot"></span>
              <span id="activeVillaTitle" class="active-villa-title">01/06 • Villa Alankrit</span>
              <button id="inspectActiveVillaBtn" class="active-villa-btn" aria-label="Inspect high-resolution details">
                <span>Inspect High-Res Details</span>
                <span class="material-symbols-outlined text-[15px]">zoom_in</span>
              </button>
            </div>`;

if (!html.includes('id="activeVillaPill"')) {
  html = html.replace('<div class="pill" id="floorTag"></div>', `<div class="pill" id="floorTag"></div>\n${activeVillaPillHtml}`);
  console.log('Added #activeVillaPill to index.html');
}

// Add #villa-inspection-modal before </body>
const villaModalHtml = `  <!-- =====================================================================
       HIGH-RESOLUTION ARCHITECTURAL VILLA WORK INSPECTION MODAL
       Allows comprehensive examination of all 6 villa/bungalow projects
       ===================================================================== -->
  <div id="villa-inspection-modal" class="villa-modal-backdrop" role="dialog" aria-modal="true" aria-label="Architectural Villa Inspection">
    <div class="villa-modal-dialog">
      
      <!-- Top Bar: Mobile drag handle & Header -->
      <div class="villa-modal-header">
        <div class="villa-modal-drag-handle sm:hidden"></div>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center gap-2.5">
            <span id="villa-modal-badge" class="px-3 py-1 bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-bold uppercase tracking-wider rounded-full">
              VILLA 01 OF 06
            </span>
            <span id="villa-modal-loc" class="text-xs font-mono text-on-surface-variant hidden sm:inline">
              Sukher Luxury Foothills, Udaipur
            </span>
          </div>
          
          <div class="flex items-center gap-2">
            <button id="villa-zoom-btn" class="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-on-surface text-xs font-medium rounded-full flex items-center gap-1.5 transition-all shadow-sm" aria-label="Toggle 2X Zoom">
              <span class="material-symbols-outlined text-[16px] text-primary">search</span>
              <span id="villa-zoom-txt">2X Zoom</span>
            </button>
            <button id="villa-modal-close-btn" class="w-8 h-8 rounded-full bg-surface-container hover:bg-primary hover:text-white flex items-center justify-center text-on-surface transition-all" aria-label="Close modal">
              <span class="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        <!-- 6-Villa Quick Switcher Tabs -->
        <div class="villa-tabs-track mt-3">
          <button class="villa-tab-btn active" data-index="0">01 Alankrit</button>
          <button class="villa-tab-btn" data-index="1">02 Mewar Penthouse</button>
          <button class="villa-tab-btn" data-index="2">03 Sovereign</button>
          <button class="villa-tab-btn" data-index="3">04 Lakefront</button>
          <button class="villa-tab-btn" data-index="4">05 Hilltop</button>
          <button class="villa-tab-btn" data-index="5">06 Royal Orchid</button>
        </div>
      </div>

      <!-- Main Inspection Body -->
      <div class="villa-modal-body">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          <!-- Left: Ultra High-Resolution Photo Viewer with Zoom -->
          <div class="lg:col-span-7 bg-[#14120f] relative overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[420px] lg:min-h-[580px] p-2 sm:p-4">
            <div id="villa-img-container" class="villa-img-container w-full h-full flex items-center justify-center">
              <img id="villa-modal-img" src="/slabs/slab_01.jpg" alt="Villa Architectural Work" class="villa-modal-image object-contain max-h-[540px] w-auto transition-transform duration-300">
            </div>
            <div class="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white text-[11px] font-mono flex items-center gap-1.5 pointer-events-none">
              <span class="w-2 h-2 rounded-full bg-green-400"></span>
              <span>Ultra-Crisp 4K Architectural Photography</span>
            </div>
          </div>

          <!-- Right: Comprehensive Civil & Stone Specifications Panel -->
          <div class="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between bg-surface-container-lowest overflow-y-auto max-h-[580px]">
            <div>
              <h2 id="villa-modal-title" class="font-serif font-bold text-2xl sm:text-3xl text-on-surface mb-1">Villa Alankrit</h2>
              <p id="villa-modal-tagline" class="text-sm font-sans text-primary font-semibold tracking-wide mb-4">Grand Double-Height Foyer & Marble Staircase</p>
              
              <p id="villa-modal-desc" class="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6 font-sans">
                A monumental double-height entrance hall with continuous bookmatched Italian marble flooring flowing seamlessly across monolithic slabs.
              </p>

              <!-- Detailed Specifications Matrix -->
              <div class="space-y-3 bg-surface p-4 border border-outline-variant/30 rounded-xl mb-6">
                <div>
                  <span class="text-[10px] uppercase tracking-wider font-mono text-on-surface-variant block">Scope & Area</span>
                  <span id="villa-modal-scope" class="text-xs sm:text-sm font-semibold text-on-surface block">12,800 sq ft Double-Height Foyer & Floating Staircase</span>
                </div>
                <div class="border-t border-outline-variant/20 pt-2.5">
                  <span class="text-[10px] uppercase tracking-wider font-mono text-on-surface-variant block">Stone Selection & Origin</span>
                  <span id="villa-modal-stone" class="text-xs sm:text-sm font-semibold text-primary block">Imported First-Choice Statuario & Calacatta Gold Marble</span>
                </div>
                <div class="border-t border-outline-variant/20 pt-2.5">
                  <span class="text-[10px] uppercase tracking-wider font-mono text-on-surface-variant block">Civil & Structural Masonry</span>
                  <span id="villa-modal-civil" class="text-xs sm:text-sm font-semibold text-on-surface block">Seismic RCC Cantilever Core, 1:3 Calibrated Polymer Screed</span>
                </div>
                <div class="border-t border-outline-variant/20 pt-2.5 flex justify-between gap-2">
                  <div>
                    <span class="text-[10px] uppercase tracking-wider font-mono text-on-surface-variant block">Surface Polish</span>
                    <span id="villa-modal-finish" class="text-xs font-semibold text-on-surface block">Diamond Crystallization (Gloss 98+)</span>
                  </div>
                  <div>
                    <span class="text-[10px] uppercase tracking-wider font-mono text-on-surface-variant block">Joint Spec</span>
                    <span id="villa-modal-joint" class="text-xs font-semibold text-primary block">0.0mm Lippage / Zero-Void</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer: Navigation & Consultation CTA -->
            <div class="pt-4 border-t border-outline-variant/30 space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <button id="villa-modal-prev" class="px-3 py-2 bg-surface-container hover:bg-primary hover:text-white rounded-lg text-xs font-bold transition-all disabled:opacity-30 disabled:pointer-events-none" aria-label="Previous Villa">
                    ‹ Previous
                  </button>
                  <button id="villa-modal-next" class="px-3 py-2 bg-surface-container hover:bg-primary hover:text-white rounded-lg text-xs font-bold transition-all disabled:opacity-30 disabled:pointer-events-none" aria-label="Next Villa">
                    Next ›
                  </button>
                </div>
                <span id="villa-modal-num" class="font-mono text-xs font-bold text-on-surface-variant">01 / 06</span>
              </div>

              <a href="#quote-section" id="villa-inquire-btn" class="w-full py-3 bg-primary text-on-primary font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-md">
                <span>Inquire About This Villa Craftsmanship</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>`;

if (!html.includes('id="villa-inspection-modal"')) {
  html = html.replace('</body>', `${villaModalHtml}\n</body>`);
  console.log('Added #villa-inspection-modal to index.html');
}

fs.writeFileSync(indexPath, html, 'utf8');

// =========================================================================
// 3. UPDATE src/styles/scrollytelling.css: Add styling for Active Pill & Modal
// =========================================================================
const cssPath = path.join(rootDir, 'src/styles/scrollytelling.css');
let css = fs.readFileSync(cssPath, 'utf8');

const inspectorStyles = `
/* ==========================================================================
   ACTIVE VILLA PROMPT PILL IN 3D PAVILION (SCENE 01)
   ========================================================================== */
.active-villa-pill {
  position: absolute;
  top: calc(env(safe-area-inset-top, 0px) + 76px);
  left: 50%;
  transform: translateX(-50%) translateY(-20px);
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(26, 24, 22, 0.90);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(197, 161, 91, 0.45);
  border-radius: 999px;
  padding: 6px 8px 6px 14px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.28);
  z-index: 35;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease, transform 0.35s ease;
  max-width: calc(100% - 24px);
}

.active-villa-pill.visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.active-villa-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #C5A15B;
  box-shadow: 0 0 8px #C5A15B;
  flex-shrink: 0;
}

.active-villa-title {
  font-family: Cinzel, Georgia, serif;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #FAF9F6;
  white-space: nowrap;
  text-transform: uppercase;
}

.active-villa-btn {
  background: #C5A15B;
  color: #1A1816;
  font-family: Inter, system-ui, sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 6px 14px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.active-villa-btn:hover {
  background: #e8c178;
  transform: scale(1.03);
}

/* ==========================================================================
   ARCHITECTURAL VILLA WORK INSPECTION MODAL (FULL DETAILS & ZOOM)
   ========================================================================== */
.villa-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(14, 12, 10, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.villa-modal-backdrop.is-open {
  opacity: 1;
  pointer-events: auto;
}

.villa-modal-dialog {
  background: #FFFFFF;
  width: 100%;
  max-width: 1060px;
  max-height: 92vh;
  border-radius: 24px;
  box-shadow: 0 32px 80px -16px rgba(0, 0, 0, 0.5);
  border: 1.5px solid rgba(197, 161, 91, 0.4);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform: translateY(24px) scale(0.97);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.villa-modal-backdrop.is-open .villa-modal-dialog {
  transform: translateY(0) scale(1);
}

.villa-modal-header {
  padding: 16px 20px 12px;
  background: #FAF9F6;
  border-bottom: 1px solid rgba(197, 161, 91, 0.2);
}

.villa-modal-drag-handle {
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: rgba(197, 161, 91, 0.45);
  margin: 0 auto 10px;
}

.villa-tabs-track {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
  padding-bottom: 4px;
  -webkit-overflow-scrolling: touch;
}

.villa-tabs-track::-webkit-scrollbar {
  display: none;
}

.villa-tab-btn {
  padding: 6px 14px;
  background: #EFEEEB;
  border: 1px solid transparent;
  color: #6B6B65;
  font: 600 11px/1 Inter, sans-serif;
  letter-spacing: 0.06em;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.villa-tab-btn:hover {
  background: #E5E3DE;
  color: #1A1816;
}

.villa-tab-btn.active {
  background: #C5A15B;
  color: #1A1816;
  border-color: #775A1B;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(197, 161, 91, 0.3);
}

.villa-modal-body {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.villa-img-container {
  overflow: hidden;
  cursor: zoom-in;
}

.villa-modal-image.is-zoomed {
  transform: scale(2);
  cursor: zoom-out;
}

@media (max-width: 640px) {
  .villa-modal-backdrop {
    padding: 0;
    align-items: flex-end;
  }
  .villa-modal-dialog {
    max-height: 90vh;
    border-radius: 24px 24px 0 0;
    border-bottom: none;
    transform: translateY(100%);
  }
  .active-villa-pill {
    top: calc(env(safe-area-inset-top, 0px) + 68px);
    padding: 5px 6px 5px 12px;
  }
  .active-villa-title {
    font-size: 10px;
  }
  .active-villa-btn {
    font-size: 10px;
    padding: 5px 10px;
  }
}
`;

if (!css.includes('.active-villa-pill')) {
  css += '\n' + inspectorStyles;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Added active villa pill and inspection modal CSS to scrollytelling.css');
}

// =========================================================================
// 4. WIRE EVENT LISTENERS IN main.js OR router.js
// =========================================================================
const mainJsPath = path.join(rootDir, 'src/js/main.js');
let mainJs = fs.readFileSync(mainJsPath, 'utf8');

const wireModalScript = `
// Wire Architectural Villa High-Resolution Work Inspector
function setupVillaInspector() {
  const modal = document.getElementById('villa-inspection-modal');
  const inspectBtn = document.getElementById('inspectActiveVillaBtn');
  const activePill = document.getElementById('activeVillaPill');
  const closeBtn = document.getElementById('villa-modal-close-btn');
  const zoomBtn = document.getElementById('villa-zoom-btn');
  const zoomTxt = document.getElementById('villa-zoom-txt');
  const img = document.getElementById('villa-modal-img');
  const prevBtn = document.getElementById('villa-modal-prev');
  const nextBtn = document.getElementById('villa-modal-next');
  const tabs = document.querySelectorAll('.villa-tab-btn');
  const inquireBtn = document.getElementById('villa-inquire-btn');

  let currentVillaIdx = 0;

  const openForIndex = (idx) => {
    currentVillaIdx = Math.max(0, Math.min(5, idx));
    if (window.__lbk && typeof window.__lbk.openVillaInspector === 'function') {
      window.__lbk.openVillaInspector(currentVillaIdx);
    }
  };

  const closeModal = () => {
    if (window.__lbk && typeof window.__lbk.closeVillaInspector === 'function') {
      window.__lbk.closeVillaInspector();
    } else if (modal) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  };

  if (inspectBtn) {
    inspectBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const activeIdx = activePill ? parseInt(activePill.dataset.activeIdx || '0', 10) : 0;
      openForIndex(activeIdx);
    });
  }

  if (activePill) {
    activePill.addEventListener('click', () => {
      const activeIdx = parseInt(activePill.dataset.activeIdx || '0', 10);
      openForIndex(activeIdx);
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Zoom toggle
  if (zoomBtn && img) {
    zoomBtn.addEventListener('click', () => {
      const isZoomed = img.classList.toggle('is-zoomed');
      if (zoomTxt) zoomTxt.textContent = isZoomed ? '1X Reset' : '2X Zoom';
    });
    img.addEventListener('click', () => {
      const isZoomed = img.classList.toggle('is-zoomed');
      if (zoomTxt) zoomTxt.textContent = isZoomed ? '1X Reset' : '2X Zoom';
    });
  }

  // Previous & Next Navigation
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      openForIndex(currentVillaIdx - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      openForIndex(currentVillaIdx + 1);
    });
  }

  // Quick Switcher Tabs
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.dataset.index, 10);
      openForIndex(idx);
    });
  });

  if (inquireBtn) {
    inquireBtn.addEventListener('click', closeModal);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupVillaInspector);
} else {
  setupVillaInspector();
}
`;

if (!mainJs.includes('setupVillaInspector')) {
  mainJs += '\n' + wireModalScript;
  fs.writeFileSync(mainJsPath, mainJs, 'utf8');
  console.log('Wired setupVillaInspector in main.js');
}

console.log('All components for High-Resolution Villa Work Inspector successfully built!');
