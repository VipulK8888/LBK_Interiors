const fs = require('fs');
const path = require('path');

const jsContent = `/**
 * LBK Surfaces - 3D Circular Horizontal Project Carousel & Inspection Modal
 * Features continuous 360-degree cylindrical rotation, drag momentum, click-to-center,
 * and high-resolution architectural inspection modal.
 */

export const CAROUSEL_PROJECTS = [
  {
    id: 'mewar-penthouse',
    title: 'The Mewar Penthouse',
    category: 'marble',
    categoryLabel: 'Marble Flooring',
    location: 'Udaipur City Center',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABiPR4s4WAVcCZ05W7TI1s6XZa-3njGILGF5j6-mGwjEr1sFHKA03sNrA3xV7CDSVXVqtiXPL8AL5qB0g1TQQ3V8e0TkZ8OSbUVJ3c6Je9jgluHilf6ltKx5cCH8vITAcjZPd70EosX-fUR0aC5z9rHqBRQPDUsnrOEEnD66VPnkHm0gbIFQaPzCPZxNZIiWQGIBbokn_-2_N0bery2jEoE-DdF-o_1EvpxYHhWFSY4Oj9ryZa_W_M',
    tag: 'Statuario Marble',
    specs: '5,800 sq ft zero-gap diamond honed Italian marble flooring with custom brass inlay borders.',
    details: 'Full bookmatched Statuario marble slabs imported from Carrara, dry-laid at our Sukher facility for grain alignment before on-site bedding. Diamond disc crystallization polish achieving 98+ gloss specular reflection with 0mm lippage tolerance.',
    dimensions: '5,800 sq ft',
    finish: 'Mirror Diamond Polish (Gloss 98)',
    tolerance: '0.0mm Lippage / Calibrated Sub-Base'
  },
  {
    id: 'apex-atrium',
    title: 'Apex Commercial Atrium',
    category: 'granite',
    categoryLabel: 'Granite Cladding',
    location: 'Industrial Area Sukher',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-XFTBDN9FrmwIeTvM_6IZsiA4A9jCGpn97E1F_dqrVFYUMLxt-X-XmNSpSwm860YxrZqLU_4uUYQ9rKJgcMczTtZKe_b06dciHl9siowl4x2HCtboQPJKDR6sw-bVtcs1lsA2pTExhT_wZE5R81bAtbZovzbisrswGACJjKKIaJBcmuhS4dZ0zFFsiHv3yMsOQaTraFs9nFPsMGz16r_Z6IMWRD1zJGamsZNXxPCsLCDvBsk32bKo',
    tag: 'Black Galaxy Granite',
    specs: 'Mechanical bracket dry cladding of 30mm thick flamed black granite extending 4 stories tall.',
    details: 'Engineered SS-316 mechanical bracket anchoring system with dampening expansion joints for high thermal resistance. Precision waterjet dressed edges with recessed linear LED reveal channels.',
    dimensions: '14,200 sq ft Cladding',
    finish: 'Flamed & Brushed Satin Finish',
    tolerance: 'Grade 1 Wind-Load Certification'
  },
  {
    id: 'fatehsagar-residence',
    title: 'Fatehsagar Lakefront Residence',
    category: 'tiles',
    categoryLabel: 'Slab Tiles',
    location: 'Lake Promenade, Udaipur',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNJTGS09Qdw4i4lH8cGsCSULYCQBateS1mAjM7fTOY2pej2vdd7LaHpFnMGBLoq7hVf-8KUZoM1Yif1oc7H-LfdNmepexiNiFpfVXD8OT_hRVyJsEakSLUhw958Xun86jKncgfcneiT2Ce3sG4CkzGwygzxkJTsMek44Y5NZ7ibpdnIDOvnB_YIQ_ewMV3YzdTUvRMKBZFP5XoMZWjWsXuX4-jUw0w9HNrUG8YgWO6nR0-1aTa8dqD',
    tag: 'Porcelain Slabs',
    specs: 'Large format continuous wall-to-floor porcelain tiles laid with 1mm epoxy joint waterproofing.',
    details: '1200x2400mm continuous porcelain slabs installed with multi-suction leveling frames and C2TES1 polymer bed mortar. Dual-component epoxy grouting in bathrooms ensuring 100% moisture impermeability.',
    dimensions: '7,400 sq ft Flooring & Wall Surfaces',
    finish: 'Honed Matte Silk',
    tolerance: '1.0mm Laser Calibrated Spacers'
  },
  {
    id: 'rajputana-villa',
    title: 'Rajputana Heritage Estate',
    category: 'marble',
    categoryLabel: 'Makrana Marble',
    location: 'Sukher Foothills, Udaipur',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy5mq_TNs6iljGDtTApfeDxPVhQxeiwRCM4AnwsKaLSPa8YsCij0LC83ijDgYdybWxom1vU0TDLFJtioOCTZdRR_UfLqP0Hgnx_DfoYCrSey78r3jh7llNHPn8CvcKC5tEGdrD7Dk7Ik9iUjcvker3Ozxc8c_rXR4gL4WpOjmL-0mYeQSAYTup57PDO74T_tXMnJaz5cTEZ3uTnAvsGOQzBk7Dc3bGZyppstiIZUHV_rmFwHeoJwgz',
    tag: 'Makrana Pure White',
    specs: 'Monumental courtyard flagstones, fluted stone pillars, and seamless marble perimeter colonnades.',
    details: 'Quarried directly from historic Makrana seams. Hand-chiseled by generational Kumawat stone artisans, featuring interlocking dry-joints and traditional brass drainage inserts.',
    dimensions: '18,000 sq ft Estate Perimeter',
    finish: 'Traditional Hand Hone & Wax Seal',
    tolerance: 'Heritage Authentic Craftsmanship'
  },
  {
    id: 'sukher-plaza',
    title: 'Sukher Commercial Corporate Tower',
    category: 'civil',
    categoryLabel: 'Turnkey Civil Work',
    location: 'Sukher Highway Corridor',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB8We_FivZdnHCfwcGdI3NPKmiG1Pd5xueZ4ZPCaZa9mB2BN2QiZ1AoTnsYpAKEXG9WX_vDgmpwXITVJOVFkmBSXaNV8BO6IL7sPnXQh6GCYHtk9rETBM6ch3o9dpPs84oCa_4uYQkonFeo45G4-h8fwqZQ26DnGxY5xQuBiRt5g5Xt0mrFzfa1I-w-wHmS5W0M0i4nl7LcPevpx2YhfzQ1kzwHE7Sx6tX4opQxqqrXcdEUKr1WFuz',
    tag: 'RCC & Heavy Masonry',
    specs: 'Structural concrete screeding, perimeter retaining walls, and heavy-duty granite driveway paving.',
    details: 'Heavy structural civil engineering from grade beam casting to 50mm thick granite vehicular pavers bedded over 150mm reinforced concrete sub-slabs with anti-shrinkage rebar mesh.',
    dimensions: '35,000 sq ft Civil Footprint',
    finish: 'Bush-Hammered & Thermal Flamed',
    tolerance: 'Heavy Axle Load Rated'
  },
  {
    id: 'city-palace-suite',
    title: 'City Palace Heritage Pavilion',
    category: 'marble',
    categoryLabel: 'Botticino Inlay',
    location: 'Heritage Enclave, Udaipur',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtKRUVnnSr9JTkBe3YcqOaVn37BBJwZVTKXW5w6cC09yB27wHl3tAG_BhR8MRKqyuz0nezYW9yMkVaorAvwmmOjhOBmP8H3vftIEwL7RibJLhbt908Y-_xLLrmDlNWWA5lFLwJ3V9-sFp1kGDx-VbKLNeEe2j6RXFMoPyWPs1V6wiRUVs_Xi8sI2I723b8giQUt6J5XRRSALgZwPlcmVcD82lfG71hTHOcmc9spvBJjMJ40z0Jfzs2',
    tag: 'Italian Botticino',
    specs: 'Custom waterjet floral brass and stone medallions embedded into warm honed Botticino marble.',
    details: 'Precision CNC waterjet cut stone inserts assembled with 0.5mm jewelers resin seams. Heritage restoration techniques honoring Rajasthan palatial stonework traditions.',
    dimensions: '4,200 sq ft Pavilion',
    finish: 'Honed Silky Luster',
    tolerance: '0.2mm Waterjet Seam Calibrated'
  },
  {
    id: 'pichola-promenade',
    title: 'Pichola Promenade Resort',
    category: 'granite',
    categoryLabel: 'Granite Pool Deck',
    location: 'Lake Pichola Shores',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTRr00KCMMBZuvfrPdVTH68VmayNd7wwKeQhNLnkbtNQGihz2psFqnh5PfmSgDAFUuffDjDdPaXBeRrJzIJft0ToMhWm8kD2hovl2BBsbS5qqIc-DAzr8eKrfGAqs-lgMtS1fxbsOSfFtWUmben8HGI8OXMSK_4j4Q6CZdqVAHrve1byl4O3dmGEua61kqE4zNcD4W4IZkTvwng6pY1RQkOZjRPTvy3IQh6h2BGrEz-7z7hEfVzyPD',
    tag: 'Thermal Flamed Granite',
    specs: 'Curved infinity pool coping, anti-slip thermal flamed granite decks, and cantilever stair treads.',
    details: 'Radial edge profiling with concealed overflow drainage slots. High mineral density granite that resists pool chemicals and intense monsoon thermal expansion.',
    dimensions: '9,600 sq ft Waterfront Deck',
    finish: 'Thermal Flamed Anti-Slip R12',
    tolerance: '100% Water Drainage Slope Verified'
  },
  {
    id: 'ambavgarh-villa',
    title: 'Ambavgarh Hilltop Villa',
    category: 'tiles',
    categoryLabel: 'Porcelain & Microtopping',
    location: 'Ambavgarh Heights',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe-9z-FS6QfMEy5LKTo9EieTeHGQpsTmEmofuf9vQ-m-Y3r_zwRlgs72Gd1L9wgqDIbl67s06jrl5aYW8kRYEm3l5ZXZRDrYbGV5hDgbcvTb5TS_cI3Paj-6m0_PtcEyMo7dK3CrPGbghwG6dfhe4gGgr4W4cSJjEvmN8gzyMXrM49KzcpFyxQnUbrOz7ZA-8rRDpzc7_RmXEJURxEVme2neof6VoQ4YfdDdc1q_0_yX35nF-hjI8a',
    tag: 'Curbless Bathrooms',
    specs: 'Zero-step walk-in Italian wet rooms with continuous large format wall slabs and microtopping.',
    details: 'Multi-layer polyurethane tanking with linear stainless steel perimeter slot drains. Laser benchmarked floor slope towards drain channels for instantaneous water clearance.',
    dimensions: '6,100 sq ft Interior',
    finish: 'Velvet Satin Touch',
    tolerance: 'Laser Benchmarked Zero-Void'
  }
];

export class CoverflowCarousel {
  constructor(containerElement) {
    this.container = containerElement;
    this.track = this.container.querySelector('#carousel-track');
    this.prevBtn = this.container.querySelector('#carousel-prev');
    this.nextBtn = this.container.querySelector('#carousel-next');
    this.filterContainer = document.querySelector('#portfolio-filters');
    this.stage = this.container.querySelector('#coverflow-stage');

    this.currentRotation = 0;       // Current continuous rotation angle in degrees
    this.targetRotation = 0;        // Target angle (for smooth easing/snapping)
    this.isDragging = false;
    this.startX = 0;
    this.lastX = 0;
    this.lastTime = 0;
    this.velocity = 0;
    this.animFrameId = null;

    this.currentCategory = 'all';
    this.visibleProjects = [...CAROUSEL_PROJECTS];
    this.radius = 560; // 3D cylinder radius in px

    this.init();
  }

  init() {
    this.setupModal();
    this.setupIndicator();
    this.calculateRadius();
    this.renderCards();
    this.bindEvents();
    this.startAnimationLoop();

    window.addEventListener('resize', () => {
      this.calculateRadius();
      this.updateTransforms();
    });
  }

  calculateRadius() {
    const width = window.innerWidth;
    if (width < 640) {
      this.radius = 360;
    } else if (width < 1024) {
      this.radius = 480;
    } else {
      this.radius = 580;
    }
  }

  setupIndicator() {
    let indicator = this.container.querySelector('#carousel-circular-indicator');
    if (!indicator) {
      indicator = document.createElement('div');
      indicator.id = 'carousel-circular-indicator';
      indicator.className = 'flex flex-col items-center justify-center gap-2 mt-4 text-center select-none';
      indicator.innerHTML = \`
        <div class="flex items-center gap-2 text-on-surface">
          <span id="carousel-cur-num" class="font-headline-sm text-headline-sm text-primary font-bold">01</span>
          <span class="text-on-surface-variant font-label-sm">/</span>
          <span id="carousel-total-num" class="font-label-sm text-label-sm uppercase tracking-[0.15em] text-on-surface-variant">08</span>
          <span class="w-1.5 h-1.5 rounded-full bg-outline-variant mx-1"></span>
          <span id="carousel-active-name" class="font-headline-sm text-headline-sm text-on-surface font-medium">The Mewar Penthouse</span>
        </div>
        <div id="carousel-dots-wrap" class="flex items-center gap-1.5 mt-1"></div>
      \`;
      this.stage.after(indicator);
    }
    this.updateIndicatorDots();
  }

  updateIndicatorDots() {
    const dotsWrap = this.container.querySelector('#carousel-dots-wrap');
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    const total = this.visibleProjects.length;

    this.visibleProjects.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = 'w-2 h-2 rounded-full transition-all duration-300 ' + (idx === this.getActiveIndex() ? 'bg-primary w-6' : 'bg-outline-variant/60 hover:bg-primary/50');
      dot.setAttribute('aria-label', 'Go to project ' + (idx + 1));
      dot.addEventListener('click', () => {
        this.rotateToIndex(idx);
      });
      dotsWrap.appendChild(dot);
    });
  }

  setupModal() {
    let modal = document.getElementById('project-inspection-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'project-inspection-modal';
      modal.className = 'project-modal-backdrop';
      modal.innerHTML = \`
        <div class="project-modal-dialog" role="dialog" aria-modal="true">
          <button class="project-modal-close" id="modal-close-btn" aria-label="Close modal">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
          <div class="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-[20px]">
            <div class="md:col-span-7 bg-surface-container relative min-h-[360px] md:min-h-[500px]">
              <img id="modal-img" src="" alt="Project Photo" class="w-full h-full object-cover">
              <div class="absolute bottom-4 left-4 bg-surface-container-lowest/95 backdrop-blur-md px-3.5 py-1.5 border border-outline-variant/30 shadow-md">
                <span id="modal-badge" class="font-label-sm text-label-sm uppercase tracking-[0.15em] text-primary font-bold"></span>
              </div>
            </div>
            <div class="md:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-surface-container-lowest">
              <div>
                <span id="modal-loc" class="font-label-sm text-label-sm uppercase tracking-[0.15em] text-on-surface-variant block mb-1"></span>
                <h3 id="modal-title" class="font-headline-lg text-headline-lg text-on-surface mb-3"></h3>
                <p id="modal-desc" class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6"></p>

                <div class="space-y-2.5 bg-surface p-4 border border-outline-variant/20 mb-6">
                  <div class="flex justify-between items-center text-body-sm">
                    <span class="text-on-surface-variant">Area / Scope</span>
                    <span id="modal-dim" class="font-semibold text-on-surface"></span>
                  </div>
                  <div class="flex justify-between items-center text-body-sm">
                    <span class="text-on-surface-variant">Luster / Polish</span>
                    <span id="modal-finish" class="font-semibold text-on-surface"></span>
                  </div>
                  <div class="flex justify-between items-center text-body-sm">
                    <span class="text-on-surface-variant">Installation Spec</span>
                    <span id="modal-tolerance" class="font-semibold text-primary"></span>
                  </div>
                </div>
              </div>

              <div class="pt-4 border-t border-outline-variant/20 flex flex-col gap-2">
                <a id="modal-inquire-btn" href="#quote-section" class="w-full py-3 bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-[0.12em] text-center font-semibold hover:bg-primary-fixed-dim transition-colors shadow-sm">
                  Inquire This Exact Finish →
                </a>
                <span class="font-label-sm text-label-sm text-center text-on-surface-variant uppercase tracking-wider">Sub-base Inspection Included</span>
              </div>
            </div>
          </div>
        </div>
      \`;
      document.body.appendChild(modal);

      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.closest('#modal-close-btn')) {
          this.closeModal();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
          this.closeModal();
        }
      });

      const inquireBtn = modal.querySelector('#modal-inquire-btn');
      if (inquireBtn) {
        inquireBtn.addEventListener('click', () => {
          this.closeModal();
        });
      }
    }
  }

  openModal(project) {
    const modal = document.getElementById('project-inspection-modal');
    if (!modal) return;
    modal.querySelector('#modal-img').src = project.image;
    modal.querySelector('#modal-badge').textContent = project.categoryLabel;
    modal.querySelector('#modal-loc').textContent = project.location;
    modal.querySelector('#modal-title').textContent = project.title;
    modal.querySelector('#modal-desc').textContent = project.details || project.specs;
    modal.querySelector('#modal-dim').textContent = project.dimensions;
    modal.querySelector('#modal-finish').textContent = project.finish;
    modal.querySelector('#modal-tolerance').textContent = project.tolerance;

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    const modal = document.getElementById('project-inspection-modal');
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  renderCards() {
    if (!this.track) return;
    this.track.innerHTML = '';

    this.visibleProjects.forEach((proj, idx) => {
      const card = document.createElement('div');
      card.className = 'coverflow-card circular-3d-card';
      card.dataset.index = idx;
      card.dataset.id = proj.id;
      card.dataset.category = proj.category;

      card.innerHTML = \`
        <div class="coverflow-card-header">
          <span class="coverflow-card-tag">\${proj.categoryLabel}</span>
          <h3 class="coverflow-card-title">\${proj.title}</h3>
        </div>
        <div class="coverflow-card-img-wrap">
          <img src="\${proj.image}" alt="\${proj.title}" class="coverflow-card-img" loading="lazy">
        </div>
        <div class="coverflow-card-footer">
          <span class="coverflow-action-pill">
            <span>Inspect Specs</span>
            <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
          </span>
        </div>
      \`;

      card.addEventListener('click', (e) => {
        const activeIdx = this.getActiveIndex();
        if (idx === activeIdx) {
          this.openModal(proj);
        } else {
          this.rotateToIndex(idx);
        }
      });

      this.track.appendChild(card);
    });

    this.updateIndicatorDots();
    this.updateTransforms();
  }

  getActiveIndex() {
    const total = this.visibleProjects.length;
    if (total === 0) return 0;
    const step = 360 / total;
    let norm = ((-this.targetRotation % 360) + 360) % 360;
    return Math.round(norm / step) % total;
  }

  rotateToIndex(index) {
    const total = this.visibleProjects.length;
    if (total === 0) return;
    const step = 360 / total;
    const targetAngle = -index * step;

    // Find shortest angular path
    let diff = (targetAngle - this.targetRotation) % 360;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;

    this.targetRotation += diff;
  }

  next() {
    const total = this.visibleProjects.length;
    if (total <= 1) return;
    const step = 360 / total;
    this.targetRotation -= step;
  }

  prev() {
    const total = this.visibleProjects.length;
    if (total <= 1) return;
    const step = 360 / total;
    this.targetRotation += step;
  }

  snapToNearest() {
    const total = this.visibleProjects.length;
    if (total === 0) return;
    const step = 360 / total;
    this.targetRotation = Math.round(this.targetRotation / step) * step;
  }

  startAnimationLoop() {
    const loop = () => {
      // Smooth continuous damping
      const delta = (this.targetRotation - this.currentRotation);
      this.currentRotation += delta * 0.12;

      this.updateTransforms();
      this.updateIndicatorInfo();

      this.animFrameId = requestAnimationFrame(loop);
    };
    this.animFrameId = requestAnimationFrame(loop);
  }

  updateTransforms() {
    const cards = this.track.querySelectorAll('.coverflow-card');
    const total = cards.length;
    if (total === 0) return;

    const step = 360 / total;
    const activeIdx = this.getActiveIndex();

    cards.forEach((card, i) => {
      // Calculate relative angle to front camera
      const baseAngle = i * step;
      let relAngle = (baseAngle + this.currentRotation) % 360;
      if (relAngle > 180) relAngle -= 360;
      if (relAngle < -180) relAngle += 360;

      const rad = (relAngle * Math.PI) / 180;
      const x = Math.sin(rad) * this.radius;
      const z = (Math.cos(rad) - 1) * this.radius;
      const rotateY = relAngle * 0.72; // slight inward tilt for natural curvature

      // Distance from front center (0 to 180)
      const distFromFront = Math.abs(relAngle);
      const isVisible = distFromFront < 105; // Hide back-facing half of cylinder

      if (isVisible) {
        const cosVal = Math.max(0, Math.cos(rad));
        const scale = 0.78 + (0.28 * cosVal);
        const opacity = Math.min(1, Math.max(0.15, Math.pow(cosVal, 1.4)));
        const zIndex = Math.round(cosVal * 100);

        card.style.display = 'flex';
        card.style.transform = \`translate3d(\${x}px, 0, \${z}px) rotateY(\${rotateY}deg) scale(\${scale})\`;
        card.style.opacity = opacity;
        card.style.zIndex = zIndex;

        if (i === activeIdx) {
          card.classList.add('is-active');
          card.style.boxShadow = '0 28px 50px -12px rgba(119, 90, 27, 0.28), 0 10px 24px rgba(0, 0, 0, 0.08)';
          card.style.borderColor = 'rgba(197, 161, 91, 0.8)';
        } else {
          card.classList.remove('is-active');
          card.style.boxShadow = '0 12px 28px -6px rgba(40, 40, 40, 0.12)';
          card.style.borderColor = 'rgba(197, 161, 91, 0.2)';
        }
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
        card.style.zIndex = '0';
      }
    });
  }

  updateIndicatorInfo() {
    const activeIdx = this.getActiveIndex();
    const project = this.visibleProjects[activeIdx];
    if (!project) return;

    const curNum = this.container.querySelector('#carousel-cur-num');
    const totalNum = this.container.querySelector('#carousel-total-num');
    const activeName = this.container.querySelector('#carousel-active-name');
    const dots = this.container.querySelectorAll('#carousel-dots-wrap button');

    if (curNum) curNum.textContent = String(activeIdx + 1).padStart(2, '0');
    if (totalNum) totalNum.textContent = String(this.visibleProjects.length).padStart(2, '0');
    if (activeName) activeName.textContent = project.title;

    if (dots.length) {
      dots.forEach((dot, idx) => {
        if (idx === activeIdx) {
          dot.className = 'w-6 h-2 rounded-full bg-primary transition-all duration-300';
        } else {
          dot.className = 'w-2 h-2 rounded-full bg-outline-variant/60 hover:bg-primary/50 transition-all duration-300';
        }
      });
    }
  }

  filterCategory(cat) {
    this.currentCategory = cat;
    if (cat === 'all') {
      this.visibleProjects = [...CAROUSEL_PROJECTS];
    } else {
      this.visibleProjects = CAROUSEL_PROJECTS.filter(p => {
        if (cat === 'civil') return p.category === 'civil' || p.category === 'granite';
        return p.category === cat;
      });
      if (this.visibleProjects.length < 4) {
        // Ensure at least 4 items for good circular layout by including related items
        this.visibleProjects = CAROUSEL_PROJECTS.filter(p => p.category === cat || p.category === 'marble' || p.category === 'granite').slice(0, 5);
      }
    }

    this.currentRotation = 0;
    this.targetRotation = 0;
    this.renderCards();
  }

  bindEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.prev();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.next();
      });
    }

    // Touch and Mouse Drag / Spin with continuous rotation and inertia
    const onStart = (clientX) => {
      this.isDragging = true;
      this.startX = clientX;
      this.lastX = clientX;
      this.lastTime = performance.now();
      this.velocity = 0;
    };

    const onMove = (clientX) => {
      if (!this.isDragging) return;
      const now = performance.now();
      const dt = Math.max(1, now - this.lastTime);
      const deltaX = clientX - this.lastX;

      this.velocity = deltaX / dt;
      this.lastX = clientX;
      this.lastTime = now;

      // Sensitivity: adjust degrees per pixel dragged
      const trackWidth = this.stage ? this.stage.clientWidth : 800;
      const degPerPx = 180 / trackWidth;
      const rotDelta = deltaX * degPerPx * 1.4;

      this.targetRotation += rotDelta;
      this.currentRotation += rotDelta; // immediate responsive feel
    };

    const onEnd = () => {
      if (!this.isDragging) return;
      this.isDragging = false;

      // Add momentum based on release velocity
      const momentum = this.velocity * 120;
      this.targetRotation += momentum;

      // Snap smoothly to the nearest project card
      this.snapToNearest();
    };

    if (this.stage) {
      this.stage.addEventListener('mousedown', (e) => {
        // Prevent default text selection during drag
        e.preventDefault();
        onStart(e.clientX);
      });

      this.stage.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) onStart(e.touches[0].clientX);
      }, { passive: true });
    }

    window.addEventListener('mousemove', (e) => {
      if (this.isDragging) onMove(e.clientX);
    });

    window.addEventListener('touchmove', (e) => {
      if (this.isDragging && e.touches && e.touches[0]) onMove(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchend', onEnd);

    // Mouse Wheel Spin when hovering the carousel
    if (this.stage) {
      this.stage.addEventListener('wheel', (e) => {
        // If user scrolls horizontally or shifts with vertical scroll
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        if (Math.abs(delta) > 10) {
          e.preventDefault();
          const step = 360 / this.visibleProjects.length;
          if (delta > 0) {
            this.targetRotation -= step;
          } else {
            this.targetRotation += step;
          }
        }
      }, { passive: false });
    }

    // Keyboard Arrow Keys
    window.addEventListener('keydown', (e) => {
      const rect = this.container.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft') this.prev();
    });

    // Category filter buttons
    if (this.filterContainer) {
      const buttons = this.filterContainer.querySelectorAll('button');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          buttons.forEach(b => {
            b.classList.remove('bg-primary-container', 'text-on-primary-container', 'shadow-sm');
            b.classList.add('bg-surface-container-high', 'text-on-surface-variant');
          });
          btn.classList.add('bg-primary-container', 'text-on-primary-container', 'shadow-sm');
          btn.classList.remove('bg-surface-container-high', 'text-on-surface-variant');

          const cat = btn.getAttribute('data-cat') || 'all';
          this.filterCategory(cat);
        });
      });
    }
  }

  destroy() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
  }
}
`;

fs.writeFileSync(path.join('..', 'src', 'js', 'coverflow3d.js'), jsContent, 'utf8');
console.log('coverflow3d.js updated with 360-degree circular horizontal rotation!');
