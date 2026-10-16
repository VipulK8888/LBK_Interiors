/**
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
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    tag: 'Statuario Marble',
    specs: '5,800 sq ft zero-gap diamond honed Italian marble flooring with custom brass inlay borders.',
    details: 'Full bookmatched Statuario marble slabs imported from Carrara, dry-laid at our facility for grain alignment before on-site bedding. Diamond disc crystallization polish achieving 98+ gloss specular reflection with 0mm lippage tolerance.',
    dimensions: '5,800 sq ft',
    finish: 'Mirror Diamond Polish (Gloss 98)',
    tolerance: '0.0mm Lippage / Calibrated Sub-Base'
  },
  {
    id: 'sovereign-villa',
    title: 'The Sovereign Villa Facade',
    category: 'granite',
    categoryLabel: 'Granite Cladding & Exterior',
    location: 'Shobhagpura Heights',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    tag: 'Architectural Granite',
    specs: 'External ventilated stone facade dry cladding with flamed grey and black granite brackets.',
    details: 'Precision dry-cladding system engineered for luxury modern residences. Laser-aligned mechanical stainless steel anchors with silicone perimeter weatherproofing, engineered for 50+ year structural longevity.',
    dimensions: '12,400 sq ft Facade Area',
    finish: 'Flamed & Honed Thermal Granite',
    tolerance: '±1mm Joint Uniformity'
  },
  {
    id: 'fatehsagar-residence',
    title: 'Fatehsagar Lakefront Residence',
    category: 'tiles',
    categoryLabel: 'Slab Tiles & Interior',
    location: 'Fatehsagar Promenade',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    tag: 'Porcelain Slabs',
    specs: 'Continuous 1200x2400mm Italian porcelain tile floor installation with 1mm epoxy joint waterproofing.',
    details: 'Seamless open-concept residential living hall with zero lippage calibration. Self-leveling polymer sub-screed bedding ensuring absolute acoustic dampening and planar accuracy across the entire residence.',
    dimensions: '4,200 sq ft Open Hall',
    finish: 'Matte Silk Anti-Reflective',
    tolerance: '1.0mm Laser-Grout Micro-Joints'
  },
  {
    id: 'royal-orchid-villa',
    title: 'The Royal Orchid Villa',
    category: 'marble',
    categoryLabel: 'Makrana Marble Foyer',
    location: 'New Fatehpura Luxury Enclave',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
    tag: 'Makrana Pure White',
    specs: 'Double-height entrance foyer featuring pristine Makrana white marble floors and carved risers.',
    details: 'Hand-selected A-grade Makrana marble blocks from Rajasthan quarries. Master cut and hand-bedded with crystalline traditional lime-mortar slurry, polished to a 98-gloss mirror sheen.',
    dimensions: '7,100 sq ft Courtyard & Foyer',
    finish: 'Traditional Makrana Mirror Finish',
    tolerance: 'Zero Lippage Hand-Beveled'
  },
  {
    id: 'aravalli-residence',
    title: 'Aravalli Contemporary Residence',
    category: 'civil',
    categoryLabel: 'Luxury House Exterior & Civil Work',
    location: 'Badi Hills Estate',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    tag: 'Turnkey Civil & Structural',
    specs: 'Full turnkey civil construction, reinforced concrete frame, retaining stone walls, and cantilevered terraces.',
    details: 'End-to-end civil execution including seismic-grade structural frame, precision masonry, exterior stone facade articulation, infinity pool shell engineering, and complete waterproofing.',
    dimensions: '16,500 sq ft Built-up Area',
    finish: 'Fair-Faced Concrete & Ashlar Masonry',
    tolerance: 'IS 456 Structural Compliance'
  },
  {
    id: 'solitaire-estate',
    title: 'The Solitaire Estate',
    category: 'interior',
    categoryLabel: 'Bespoke Interior & Kitchen',
    location: 'Saheli Nagar Luxury District',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
    tag: 'Waterfall Stone Island',
    specs: 'High-precision waterfall granite and quartzite kitchen counters with integrated mitered joints.',
    details: 'Continuous bookmatched waterfall apron edges cut with 5-axis CNC bridge saws. Seamless under-mount fixtures and heat-treated stain-proof sealing for lifelong culinary endurance.',
    dimensions: '3,600 sq ft Kitchen & Dining',
    finish: 'Diamond Satin Polish (Gloss 85)',
    tolerance: 'Mitred 45° Invisible Seams'
  },
  {
    id: 'pichola-promenade',
    title: 'Pichola Promenade Villa',
    category: 'granite',
    categoryLabel: 'Granite Pool Deck & Terrace',
    location: 'Haridas Ji Ki Magri',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    tag: 'Thermal Flamed Granite',
    specs: 'Curved infinity pool coping, anti-slip thermal flamed granite decks, and cantilever stair treads.',
    details: 'Thermal flamed texture providing R11 wet-slip resistance for outdoor residential spaces. Calibrated 40mm thick granite copings with waterjet bullnosed perimeter rims.',
    dimensions: '6,400 sq ft Pool & Terrace Deck',
    finish: 'Thermal Flamed Anti-Slip R11',
    tolerance: '1:100 Gradient Laser Runoff'
  },
  {
    id: 'ambavgarh-villa',
    title: 'Ambavgarh Hilltop Bungalow',
    category: 'tiles',
    categoryLabel: 'Curbless Master Bath Suite',
    location: 'Ambavgarh Enclave',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=85',
    tag: 'Curbless Italian Bath',
    specs: 'Zero-step walk-in Italian wet rooms with continuous large format wall slabs and stone vanity.',
    details: 'Concealed linear gradient drainage with zero threshold drop. Full 3-coat elastomeric waterproofing with epoxy joints and bookmatched feature wall.',
    dimensions: '1,800 sq ft Master Wet Suites',
    finish: 'Honed Micro-Velvet Porcelain',
    tolerance: 'Zero Threshold Flush Transitions'
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
      this.radius = Math.min(300, Math.max(240, width * 0.68));
    } else if (width < 1024) {
      this.radius = 460;
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
      indicator.innerHTML = `
        <div class="flex items-center gap-2 text-on-surface">
          <span id="carousel-cur-num" class="font-headline-sm text-headline-sm text-primary font-bold">01</span>
          <span class="text-on-surface-variant font-label-sm">/</span>
          <span id="carousel-total-num" class="font-label-sm text-label-sm uppercase tracking-[0.15em] text-on-surface-variant">08</span>
          <span class="w-1.5 h-1.5 rounded-full bg-outline-variant mx-1"></span>
          <span id="carousel-active-name" class="font-headline-sm text-headline-sm text-on-surface font-medium">The Mewar Penthouse</span>
        </div>
        <div id="carousel-dots-wrap" class="flex items-center gap-1.5 mt-1"></div>
      `;
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
      modal.innerHTML = `
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
      `;
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

      card.innerHTML = `
        <div class="coverflow-card-header">
          <span class="coverflow-card-tag">${proj.categoryLabel}</span>
          <h3 class="coverflow-card-title">${proj.title}</h3>
        </div>
        <div class="coverflow-card-img-wrap">
          <img src="${proj.image}" alt="${proj.title}" class="coverflow-card-img" loading="lazy">
        </div>
        <div class="coverflow-card-footer">
          <span class="coverflow-action-pill">
            <span>Inspect Specs</span>
            <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
          </span>
        </div>
      `;

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
        card.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${scale})`;
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
