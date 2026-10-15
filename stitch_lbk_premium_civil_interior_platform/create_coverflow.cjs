const fs = require('fs');
const path = require('path');

const jsContent = `/**
 * LBK Surfaces - 3D Perspective Coverflow Carousel & Project Inspection Modal
 * Inspired by reference design: clean luxury 3D card deck with depth & perspective
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
  }
];

export class CoverflowCarousel {
  constructor(containerElement) {
    this.container = containerElement;
    this.track = this.container.querySelector('#carousel-track');
    this.prevBtn = this.container.querySelector('#carousel-prev');
    this.nextBtn = this.container.querySelector('#carousel-next');
    this.filterContainer = document.querySelector('#portfolio-filters');
    this.activeIndex = 0;
    this.currentCategory = 'all';
    this.visibleProjects = [...CAROUSEL_PROJECTS];
    this.startX = 0;
    this.currentX = 0;
    this.isDragging = false;

    this.init();
  }

  init() {
    this.setupModal();
    this.renderCards();
    this.bindEvents();
    this.update3DTransforms();
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
      card.className = 'coverflow-card';
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
        if (idx === this.activeIndex) {
          this.openModal(proj);
        } else {
          this.goToIndex(idx);
        }
      });

      this.track.appendChild(card);
    });
  }

  update3DTransforms() {
    const cards = this.track.querySelectorAll('.coverflow-card');
    const total = cards.length;
    if (total === 0) return;

    cards.forEach((card, i) => {
      // Remove all position classes
      card.classList.remove('is-active', 'is-prev-1', 'is-next-1', 'is-prev-2', 'is-next-2', 'is-hidden');

      let diff = i - this.activeIndex;
      
      // Calculate wrapped shortest distance
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;

      if (diff === 0) {
        card.classList.add('is-active');
      } else if (diff === -1) {
        card.classList.add('is-prev-1');
      } else if (diff === 1) {
        card.classList.add('is-next-1');
      } else if (diff === -2) {
        card.classList.add('is-prev-2');
      } else if (diff === 2) {
        card.classList.add('is-next-2');
      } else {
        card.classList.add('is-hidden');
      }
    });
  }

  next() {
    if (this.visibleProjects.length <= 1) return;
    this.activeIndex = (this.activeIndex + 1) % this.visibleProjects.length;
    this.update3DTransforms();
  }

  prev() {
    if (this.visibleProjects.length <= 1) return;
    this.activeIndex = (this.activeIndex - 1 + this.visibleProjects.length) % this.visibleProjects.length;
    this.update3DTransforms();
  }

  goToIndex(idx) {
    if (idx >= 0 && idx < this.visibleProjects.length) {
      this.activeIndex = idx;
      this.update3DTransforms();
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
      if (this.visibleProjects.length === 0) {
        this.visibleProjects = [...CAROUSEL_PROJECTS];
      }
    }
    this.activeIndex = 0;
    this.renderCards();
    this.update3DTransforms();
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

    // Touch and mouse drag swipe
    const onStart = (clientX) => {
      this.startX = clientX;
      this.currentX = clientX;
      this.isDragging = true;
    };

    const onMove = (clientX) => {
      if (!this.isDragging) return;
      this.currentX = clientX;
    };

    const onEnd = () => {
      if (!this.isDragging) return;
      this.isDragging = false;
      const deltaX = this.currentX - this.startX;
      if (deltaX > 45) {
        this.prev();
      } else if (deltaX < -45) {
        this.next();
      }
    };

    this.track.addEventListener('mousedown', (e) => onStart(e.clientX));
    window.addEventListener('mousemove', (e) => onMove(e.clientX));
    window.addEventListener('mouseup', onEnd);

    this.track.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) onStart(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) onMove(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', onEnd);

    // Keyboard arrow keys when viewport is visible
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
}
`;

fs.writeFileSync(path.join('..', 'src', 'js', 'coverflow3d.js'), jsContent, 'utf8');
console.log('coverflow3d.js created successfully!');
