/**
 * LBK Surfaces - Home Page View
 * Renders all 12 editorial sections matching the reference rhythm
 */

import { PROJECTS } from '../../data/projects.js';
import { lightbox } from '../lightbox.js';

export function renderHome() {
  const featuredProjects = PROJECTS.slice(0, 4);
  const latestProjects = PROJECTS.filter(p => p.latest).slice(0, 3);
  const motionProjects = PROJECTS.slice(0, 3);

  return `
    <div class="page-view-container">
      
      <!-- =================================================================
           SECTION 1 — FULL-WIDTH HERO WITH KINETIC TILE ANIMATION
           ================================================================= -->
      <section class="hero-section" id="hero">
        <div class="hero-background-media">
          <video 
            class="hero-video-element" 
            id="hero-bg-video" 
            autoplay 
            loop 
            muted 
            playsinline 
            poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=88"
          >
            <source src="/assets/tiles-animation.mp4" type="video/mp4">
          </video>
          <div class="hero-overlay-gradient"></div>
        </div>

        <!-- Live 3D Animation Status Indicator & Control -->
        <div class="hero-animation-pill reveal-init">
          <span class="pulse-dot-green"></span>
          <span>3D Surface Assembly In Motion</span>
          <button class="hero-anim-ctrl-btn" id="hero-anim-toggle" aria-label="Toggle Animation Playback">
            <span id="hero-toggle-icon">⏸ Pause</span>
          </button>
        </div>

        <div class="site-container hero-content">
          <div class="label-eyebrow" style="color: rgba(248, 246, 242, 0.75);">
            Atelier for Architectural Stone & Surfaces
          </div>
          <h1 class="hero-headline reveal-init">
            <span>CRAFTING</span>
            <span>SPACES</span>
            <span>WITH PRECISION</span>
          </h1>

          <div class="hero-supporting-group reveal-init stagger-2">
            <p class="hero-description">
              Luxury tile, marble and granite installation for refined residential and commercial spaces.
            </p>
            <div>
              <a href="#work" class="editorial-link editorial-link-light">
                EXPLORE OUR WORK <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 2 — INTRODUCTION (ASYMMETRIC EXPLORE OUR CRAFT)
           ================================================================= -->
      <section class="editorial-section" id="intro">
        <div class="site-container">
          <div class="intro-grid">
            <div class="intro-typography reveal-init">
              <span class="label-eyebrow">The Atelier</span>
              <h2 class="heading-section intro-heading">
                EXPLORE<br>OUR CRAFT
              </h2>
              <p class="intro-paragraph">
                We believe exceptional surfaces are born at the intersection of geology and exacting craftsmanship. Our team collaborates with India’s leading architects, interior designers, and discerning homeowners to install imported Italian marble, colossal porcelain slabs, and monolithic granite with microscopic precision.
              </p>
              <a href="#about" class="editorial-link">
                ABOUT US <span class="arrow">→</span>
              </a>
            </div>

            <div class="intro-image-wrapper reveal-init stagger-2">
              <div class="intro-image-frame">
                <img 
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85" 
                  alt="Precision Large-Format Surface Work" 
                  class="intro-image"
                />
              </div>
              <div class="image-caption-subtle">
                01 / Architectural Surface Alignment · Altamount Penthouse
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 2B — KINETIC ATELIER: 3D SURFACE ASSEMBLY (INTERACTIVE ANIMATION)
           ================================================================= -->
      <section class="editorial-section kinetic-atelier-section" id="kinetic-atelier">
        <div class="site-container">
          <div class="kinetic-header-row reveal-init">
            <div>
              <span class="label-eyebrow" style="color: var(--accent-stone-light);">Atelier Kinetics · Live 3D Simulation</span>
              <h2 class="heading-section" style="color: var(--text-inverse);">
                KINETIC DRY-LAY —<br>3D SURFACE ASSEMBLY
              </h2>
            </div>
            <p class="text-editorial-lead" style="color: rgba(248, 246, 242, 0.75); max-width: 48ch;">
              Experience the choreography of architectural surface installation. Watch how large-format porcelain slabs, Italian Statuario, and monolithic granite levitate, rotate in 360°, and bed into seamless floorplates with sub-millimeter tolerances.
            </p>
          </div>

          <!-- Interactive Viewport Frame -->
          <div class="kinetic-viewport-container reveal-init stagger-2">
            <span class="corner-cross corner-tl"></span>
            <span class="corner-cross corner-tr"></span>
            <span class="corner-cross corner-bl"></span>
            <span class="corner-cross corner-br"></span>

            <div class="kinetic-hud-top">
              <div class="hud-badge">
                <span class="pulse-dot-green"></span>
                <span>● 3D KINETIC DRY-LAY SIMULATION</span>
              </div>
              <div class="hud-coords">
                ELEVATION: +480.0M · PENTHOUSE PAVILION
              </div>
            </div>

            <video 
              class="kinetic-video" 
              id="kinetic-feature-video" 
              autoplay 
              loop 
              muted 
              playsinline
              poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
            >
              <source src="/assets/tiles-animation.mp4" type="video/mp4">
            </video>

            <!-- Bottom Interactive Controls & Phase Synchronizer -->
            <div class="kinetic-controls-bar">
              <div class="kinetic-phases-tabs" id="kinetic-phases-tabs">
                <button class="phase-btn active" data-time="0">01 / LEVITATION</button>
                <button class="phase-btn" data-time="4">02 / 360° RADIAL</button>
                <button class="phase-btn" data-time="10">03 / INTERSECTION</button>
                <button class="phase-btn" data-time="15">04 / SUB-MILLIMETER FINISH</button>
              </div>

              <div class="kinetic-action-buttons">
                <button class="kinetic-btn" id="kinetic-play-pause-btn" aria-label="Play or pause animation">
                  <span id="kinetic-play-icon">⏸</span> Pause
                </button>
                <button class="kinetic-btn" id="kinetic-replay-btn" aria-label="Replay animation">
                  ↺ Replay
                </button>
                <select class="speed-select" id="kinetic-speed-select" aria-label="Playback Speed">
                  <option value="0.5">0.5x Slow-Mo</option>
                  <option value="1.0" selected>1.0x Real-Time</option>
                  <option value="1.5">1.5x Speed</option>
                </select>
                <button class="kinetic-btn" id="kinetic-fullscreen-btn" aria-label="Expand view">
                  ⛶ Expand
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 3 — SECONDARY IMAGE + STATEMENT
           ================================================================= -->
      <section class="editorial-section" style="background-color: var(--bg-secondary); border-top: var(--border-hairline); border-bottom: var(--border-hairline);">
        <div class="site-container">
          <div class="statement-grid">
            <div class="statement-image-frame reveal-init">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85" 
                alt="Detailed Stone Craftsmanship" 
                class="statement-image"
              />
            </div>

            <div class="statement-typography reveal-init stagger-2">
              <span class="label-eyebrow">Philosophy of Execution</span>
              <h2 class="statement-heading">
                WHERE DETAIL<br>BECOMES<br>DESIGN
              </h2>
              <p class="statement-body">
                Precision installation, carefully prepared surfaces and refined finishing transform premium materials into architectural spaces. Every joint, chamfered corner, and bookmatched vein reflects an uncompromising devotion to the art of the surface.
              </p>
            </div>
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 4 — FEATURED WORK (SELECTED WORK ASYMMETRIC)
           ================================================================= -->
      <section class="editorial-section" id="featured-work">
        <div class="site-container">
          <div class="section-header-row reveal-init">
            <div>
              <span class="label-eyebrow">Portfolio</span>
              <h2 class="heading-section">SELECTED WORK</h2>
            </div>
            <a href="#work" class="editorial-link">
              ALL PROJECTS <span class="arrow">→</span>
            </a>
          </div>

          <div class="work-asymmetric-grid">
            ${featuredProjects.map((p, idx) => `
              <article class="work-card reveal-init stagger-${idx + 1}" data-slug="${p.slug}">
                <div class="work-card-image-wrap">
                  <img src="${p.coverImage}" alt="${p.title}" class="work-card-img" loading="lazy" />
                  <div class="work-card-hover-overlay">
                    <span class="work-card-hover-text">VIEW PROJECT →</span>
                  </div>
                </div>
                <div class="work-card-meta">
                  <span class="work-card-tag">${p.categoryLabel}</span>
                  <h3 class="work-card-title">${p.title}</h3>
                  <span class="work-card-location">${p.location}</span>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 5 — MATERIALS (MARBLE, TILES, GRANITE, STONE)
           ================================================================= -->
      <section class="editorial-section materials-section" id="materials">
        <div class="site-container">
          <div class="reveal-init">
            <span class="label-eyebrow">Elements</span>
            <h2 class="heading-section">
              MATERIALS<br>THAT DEFINE<br>THE SPACE
            </h2>
          </div>

          <div class="materials-grid">
            
            <a href="#work?cat=MARBLE" class="material-panel reveal-init stagger-1">
              <div>
                <span class="material-number">01</span>
                <div class="material-image-crop">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85" alt="Italian Statuario Marble" class="material-image" />
                </div>
              </div>
              <div class="material-footer-info">
                <h3 class="material-title">MARBLE</h3>
                <p class="material-desc">Italian Statuario, Michael Angelo, Calacatta Gold & Travertine. Master dry-lay bookmatching and diamond crystallization polishing.</p>
                <span class="editorial-link" style="margin-top: 1rem;">EXPLORE MARBLE <span class="arrow">→</span></span>
              </div>
            </a>

            <a href="#work?cat=TILES" class="material-panel reveal-init stagger-2">
              <div>
                <span class="material-number">02</span>
                <div class="material-image-crop">
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85" alt="Large Format Porcelain Slabs" class="material-image" />
                </div>
              </div>
              <div class="material-footer-info">
                <h3 class="material-title">TILES</h3>
                <p class="material-desc">Continuous 3200×1600mm porcelain slim slabs, artisan terracotta, handmade zellige, and acoustic floor tiles.</p>
                <span class="editorial-link" style="margin-top: 1rem;">EXPLORE TILES <span class="arrow">→</span></span>
              </div>
            </a>

            <a href="#work?cat=GRANITE" class="material-panel reveal-init stagger-3">
              <div>
                <span class="material-number">03</span>
                <div class="material-image-crop">
                  <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85" alt="Granite & Basalt" class="material-image" />
                </div>
              </div>
              <div class="material-footer-info">
                <h3 class="material-title">GRANITE</h3>
                <p class="material-desc">Dense South Indian Jet Black, flamed outdoor paving, leathered cantilever stair treads, and monolithic kitchen countertops.</p>
                <span class="editorial-link" style="margin-top: 1rem;">EXPLORE GRANITE <span class="arrow">→</span></span>
              </div>
            </a>

            <a href="#work?cat=CIVIL & FINISHING" class="material-panel reveal-init stagger-4">
              <div>
                <span class="material-number">04</span>
                <div class="material-image-crop">
                  <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=85" alt="Architectural Stone & Travertine" class="material-image" />
                </div>
              </div>
              <div class="material-footer-info">
                <h3 class="material-title">STONE</h3>
                <p class="material-desc">Ventilated fluted stone wall claddings, Roman Navona Travertine, Brazilian Quartzite, and zero-defect civil leveling screeds.</p>
                <span class="editorial-link" style="margin-top: 1rem;">EXPLORE FINISHING <span class="arrow">→</span></span>
              </div>
            </a>

          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 6 — CRAFTSMANSHIP IN DETAIL (WORKMANSHIP)
           ================================================================= -->
      <section class="editorial-section" id="craftsmanship">
        <div class="site-container">
          <div class="craft-detail-layout">
            <div class="reveal-init">
              <span class="label-eyebrow">Workmanship</span>
              <h2 class="heading-section">
                PRECISION<br>IN EVERY DETAIL
              </h2>
              <p class="text-editorial-lead" style="margin-top: 1.5rem;">
                True luxury is defined by the unseen: sub-millimeter joint lines, laser-calibrated elevations, and hand-finished 45° miters that allow continuous stone grain to fold seamlessly around architectural edges.
              </p>

              <div class="craft-specs-list">
                <div class="craft-spec-item">
                  <span class="craft-spec-title">0.8mm Joint Tolerances</span>
                  <span class="craft-spec-text">Zero lippage across continuous floorplates using mechanical tensioners.</span>
                </div>
                <div class="craft-spec-item">
                  <span class="craft-spec-title">45° Mitred Edge Waterfalls</span>
                  <span class="craft-spec-text">Micro-chamfered resin-bonded seams with invisible glue joints.</span>
                </div>
                <div class="craft-spec-item">
                  <span class="craft-spec-title">Cantilever Engineering</span>
                  <span class="craft-spec-text">Concealed high-tensile steel anchors for floating stone steps.</span>
                </div>
                <div class="craft-spec-item">
                  <span class="craft-spec-title">Diamond Crystallization</span>
                  <span class="craft-spec-text">Mirror wet-buffing up to 10,000 grit without synthetic wax buildup.</span>
                </div>
              </div>
            </div>

            <div class="craft-composition reveal-init stagger-2">
              <div class="craft-img-primary">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85" alt="Sub-millimeter stone joint detail" />
              </div>
              <div class="craft-img-secondary">
                <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85" alt="Polished marble edge transition" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 7 — LARGE IMAGE STATEMENT (BUILT AROUND YOUR VISION)
           ================================================================= -->
      <section class="statement-fullwidth">
        <div class="statement-bg-media">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88" 
            alt="Monolithic Architectural Stone Living" 
            class="statement-bg-img"
          />
        </div>

        <div class="statement-content reveal-init">
          <span class="label-eyebrow" style="color: rgba(248, 246, 242, 0.7);">Architecture & Craft</span>
          <h2 class="statement-fullwidth-title">
            BUILT AROUND<br>YOUR VISION
          </h2>
          <p class="statement-fullwidth-p">
            From material selection and warehouse dry-laying to final diamond crystallization, every surface is executed to complement the architecture around it.
          </p>
          <a href="#services" class="editorial-link editorial-link-light" style="margin-top: 1rem;">
            OUR APPROACH <span class="arrow">→</span>
          </a>
        </div>
      </section>


      <!-- =================================================================
           SECTION 8 — OUR APPROACH (4 NUMBERED STAGES)
           ================================================================= -->
      <section class="editorial-section" id="approach">
        <div class="site-container">
          <div class="reveal-init">
            <span class="label-eyebrow">Execution Philosophy</span>
            <h2 class="heading-section">OUR APPROACH</h2>
          </div>

          <div class="approach-grid">
            <div class="approach-step reveal-init stagger-1">
              <span class="approach-num">01</span>
              <h3 class="approach-title">PREPARATION</h3>
              <p class="approach-desc">
                Proper surface preparation and site readiness. Laser humidity testing, acoustic decoupling membranes, and polymer leveling screeds.
              </p>
            </div>

            <div class="approach-step reveal-init stagger-2">
              <span class="approach-num">02</span>
              <h3 class="approach-title">PRECISION</h3>
              <p class="approach-desc">
                Accurate alignment, levels, joints and placement. Continuous warehouse dry-matching and CAD alignment coordinates prior to installation.
              </p>
            </div>

            <div class="approach-step reveal-init stagger-3">
              <span class="approach-num">03</span>
              <h3 class="approach-title">CRAFTSMANSHIP</h3>
              <p class="approach-desc">
                Detailed installation and finishing. Dual-buttering adhesives, precision waterjet mitering, and sub-millimeter calibrated joints.
              </p>
            </div>

            <div class="approach-step reveal-init stagger-4">
              <span class="approach-num">04</span>
              <h3 class="approach-title">FINAL DETAIL</h3>
              <p class="approach-desc">
                Inspection and refinement before completion. Diamond crystallization polishing, silane sealing, and micro-tolerance verification.
              </p>
            </div>
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 9 — PROJECTS IN MOTION (CINEMATIC VIDEO LIGHTBOX)
           ================================================================= -->
      <section class="editorial-section" style="background-color: var(--bg-dark); color: var(--text-inverse);">
        <div class="site-container">
          <div class="section-header-row reveal-init" style="border-bottom-color: rgba(248, 246, 242, 0.15);">
            <div>
              <span class="label-eyebrow" style="color: rgba(248, 246, 242, 0.6);">Cinematic Documentation</span>
              <h2 class="heading-section" style="color: var(--text-inverse);">PROJECTS<br>IN MOTION</h2>
            </div>
            <span class="text-meta" style="color: rgba(248, 246, 242, 0.5);">CLICK TO PLAY FILM</span>
          </div>

          <div class="motion-grid">
            <!-- Featured 3D Kinetic Simulation as First Item -->
            <div class="motion-card reveal-init stagger-1" data-video="/assets/tiles-animation.mp4" data-title="3D Kinetic Surface Assembly & Virtual Dry-Lay">
              <video class="motion-poster" autoplay loop muted playsinline style="object-fit: cover;">
                <source src="/assets/tiles-animation.mp4" type="video/mp4">
              </video>
              <div class="motion-overlay">
                <div class="motion-title">3D KINETIC SURFACE ASSEMBLY</div>
                <div class="motion-play-btn" aria-label="Play Video">
                  <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <div class="motion-info">
                  <span class="text-meta" style="color: rgba(255,255,255,0.7);">3D Kinetic Simulation</span>
                  <span class="motion-duration">00:19</span>
                </div>
              </div>
            </div>

            ${motionProjects.slice(1, 3).map((p, idx) => `
              <div class="motion-card reveal-init stagger-${idx + 2}" data-video="${p.video.videoUrl}" data-title="${p.video.title}">
                <img src="${p.video.poster}" alt="${p.video.title}" class="motion-poster" loading="lazy" />
                <div class="motion-overlay">
                  <div class="motion-title">${p.title}</div>
                  <div class="motion-play-btn" aria-label="Play Video">
                    <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                  <div class="motion-info">
                    <span class="text-meta" style="color: rgba(255,255,255,0.7);">${p.categoryLabel}</span>
                    <span class="motion-duration">${p.video.duration}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 10 — LATEST WORK (3 CAREFULLY SELECTED PROJECTS)
           ================================================================= -->
      <section class="editorial-section" id="latest-work">
        <div class="site-container">
          <div class="section-header-row reveal-init">
            <div>
              <span class="label-eyebrow">Recent Handover</span>
              <h2 class="heading-section">LATEST WORK</h2>
            </div>
            <a href="#work" class="editorial-link">
              VIEW ALL PROJECTS <span class="arrow">→</span>
            </a>
          </div>

          <div class="latest-grid">
            ${latestProjects.map((p, idx) => `
              <article class="latest-card reveal-init stagger-${idx + 1}" data-slug="${p.slug}">
                <div class="latest-image-frame">
                  <img src="${p.introImage || p.coverImage}" alt="${p.title}" class="latest-img" loading="lazy" />
                </div>
                <div class="latest-meta">
                  <h3 class="latest-title">${p.title}</h3>
                  <div class="latest-specs">${p.material} · ${p.city}</div>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 11 — PROFESSIONAL CLIENTS (ARCHITECTS, BUILDERS, DESIGNERS)
           ================================================================= -->
      <section class="editorial-section" style="background-color: var(--bg-secondary); border-top: var(--border-hairline);">
        <div class="site-container">
          <div class="pro-clients-grid">
            <div class="reveal-init">
              <div class="pro-target-tags">
                <span class="pro-pill">BUILDERS</span>
                <span class="pro-pill">ARCHITECTS</span>
                <span class="pro-pill">INTERIOR DESIGNERS</span>
                <span class="pro-pill">PROPERTY OWNERS</span>
              </div>
              <h2 class="heading-section" style="margin-bottom: 1.5rem;">
                BUILT FOR<br>PROJECTS THAT<br>DEMAND MORE
              </h2>
              <p class="text-editorial-lead" style="margin-bottom: 2.5rem;">
                We provide professional tile, marble, granite and finishing execution for projects where precision, coordination and quality matter. From turnkey villa flooring to bespoke penthouses, our project managers speak the language of technical blueprints and exacting tolerances.
              </p>
              <a href="#contact" class="editorial-link">
                DISCUSS YOUR PROJECT <span class="arrow">→</span>
              </a>
            </div>

            <div class="pro-image-frame reveal-init stagger-2">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85" 
                alt="Architectural collaboration and stone finishing" 
                class="pro-image"
              />
            </div>
          </div>
        </div>
      </section>


      <!-- =================================================================
           SECTION 12 — FINAL CTA
           ================================================================= -->
      <section class="cta-final-section" id="final-cta">
        <div class="site-container">
          <div class="cta-final-inner reveal-init">
            <span class="label-eyebrow">Inquiries</span>
            <h2 class="cta-headline">
              HAVE A<br>PROJECT IN MIND?
            </h2>
            <p class="text-editorial-lead">
              Let's create a finished surface worthy of the space. Contact our team to review drawings, schedule a site assessment, or arrange a private warehouse dry-lay consultation.
            </p>

            <div class="cta-links-row">
              <a href="#contact" class="editorial-link">
                START A PROJECT <span class="arrow">→</span>
              </a>
              <a href="https://wa.me/919820012345?text=Hello%20LBK%20Surfaces,%20I%20would%20like%20to%20discuss%20a%20luxury%20surface%20installation%20project." target="_blank" rel="noopener noreferrer" class="editorial-link">
                WHATSAPP <span class="arrow">→</span>
              </a>
              <a href="tel:+919820012345" class="editorial-link">
                CALL <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}

export function bindHomeEvents(container) {
  // Bind project card clicks to router
  const projectCards = container.querySelectorAll('.work-card, .latest-card');
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const slug = card.dataset.slug;
      if (slug) {
        window.location.hash = `#project/${slug}`;
      }
    });
  });

  // Bind video lightbox triggers
  const motionCards = container.querySelectorAll('.motion-card');
  motionCards.forEach(card => {
    card.addEventListener('click', () => {
      const videoUrl = card.dataset.video;
      const title = card.dataset.title;
      if (videoUrl) {
        lightbox.open(videoUrl, title);
      }
    });
  });

  // 1. HERO VIDEO ANIMATION CONTROLS
  const heroVideo = container.querySelector('#hero-bg-video');
  const heroToggleBtn = container.querySelector('#hero-anim-toggle');
  const heroToggleIcon = container.querySelector('#hero-toggle-icon');

  if (heroVideo && heroToggleBtn) {
    heroToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (heroVideo.paused) {
        heroVideo.play();
        if (heroToggleIcon) heroToggleIcon.textContent = '⏸ Pause';
      } else {
        heroVideo.pause();
        if (heroToggleIcon) heroToggleIcon.textContent = '▶ Play';
      }
    });
  }

  // 2. KINETIC ATELIER 3D SHOWCASE INTERACTIVE CONTROLS
  const kineticVideo = container.querySelector('#kinetic-feature-video');
  const phaseBtns = container.querySelectorAll('#kinetic-phases-tabs .phase-btn');
  const playPauseBtn = container.querySelector('#kinetic-play-pause-btn');
  const playIcon = container.querySelector('#kinetic-play-icon');
  const replayBtn = container.querySelector('#kinetic-replay-btn');
  const speedSelect = container.querySelector('#kinetic-speed-select');
  const fullscreenBtn = container.querySelector('#kinetic-fullscreen-btn');

  if (kineticVideo) {
    // Synchronize phase highlights as video animates
    kineticVideo.addEventListener('timeupdate', () => {
      const t = kineticVideo.currentTime;
      let activeIndex = 0;
      if (t >= 15) activeIndex = 3;
      else if (t >= 10) activeIndex = 2;
      else if (t >= 4) activeIndex = 1;
      else activeIndex = 0;

      phaseBtns.forEach((btn, idx) => {
        if (idx === activeIndex) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    });

    // Phase jump buttons
    phaseBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTime = parseFloat(btn.dataset.time);
        kineticVideo.currentTime = targetTime;
        if (kineticVideo.paused) {
          kineticVideo.play();
          if (playPauseBtn) playPauseBtn.innerHTML = '<span id="kinetic-play-icon">⏸</span> Pause';
        }
      });
    });

    // Play / Pause toggle
    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', () => {
        if (kineticVideo.paused) {
          kineticVideo.play();
          playPauseBtn.innerHTML = '<span id="kinetic-play-icon">⏸</span> Pause';
        } else {
          kineticVideo.pause();
          playPauseBtn.innerHTML = '<span id="kinetic-play-icon">▶</span> Play';
        }
      });
    }

    // Replay button
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        kineticVideo.currentTime = 0;
        kineticVideo.play();
        if (playPauseBtn) playPauseBtn.innerHTML = '<span id="kinetic-play-icon">⏸</span> Pause';
      });
    }

    // Speed selector
    if (speedSelect) {
      speedSelect.addEventListener('change', (e) => {
        kineticVideo.playbackRate = parseFloat(e.target.value);
      });
    }

    // Fullscreen lightbox button
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', () => {
        lightbox.open('/assets/tiles-animation.mp4', '3D Kinetic Surface Assembly & Virtual Dry-Lay Simulation');
      });
    }
  }

  // Viewport IntersectionObserver to pause off-screen videos for peak performance
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const vid = entry.target;
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      });
    }, { threshold: 0.15 });

    if (heroVideo) videoObserver.observe(heroVideo);
    if (kineticVideo) videoObserver.observe(kineticVideo);
  }
}
