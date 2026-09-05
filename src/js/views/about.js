/**
 * LBK Surfaces - About View
 * Editorial architectural monograph on craftsmanship philosophy, tolerances, and stonemason legacy
 */

export function renderAbout() {
  return `
    <div class="page-view-container">
      
      <header class="work-page-header">
        <div class="site-container">
          <span class="label-eyebrow">Studio & Atelier</span>
          <h1 class="heading-huge" style="margin-bottom: 1.5rem; max-width: 14ch;">
            CRAFTED WITH EXPERIENCE. FINISHED WITH PRECISION.
          </h1>
          <p class="text-editorial-lead" style="max-width: 55ch; font-size: 1.2rem;">
            LBK Surfaces was founded on a singular architectural conviction: that natural stone and porcelain surfaces achieve true beauty only through uncompromising installation discipline.
          </p>
        </div>
      </header>

      <!-- EDITORIAL PHILOSOPHY SPREAD -->
      <section class="editorial-section">
        <div class="site-container">
          <div class="intro-grid">
            <div class="intro-typography reveal-init">
              <span class="label-eyebrow">The Philosophy</span>
              <h2 class="heading-section intro-heading">
                THE DISCIPLINE<br>OF THE SURFACE
              </h2>
              <p class="intro-paragraph">
                In contemporary luxury architecture, surfaces are no longer mere decorative coverings—they are structural spatial volumes. An uneven joint line or broken vein pattern disrupts the entire harmony of a space.
              </p>
              <p class="intro-paragraph">
                We bridge the critical gap between raw quarry extraction and finished architectural handovers. By maintaining strict control over substrate civil engineering, warehouse dry-matching, laser leveling, and diamond crystallization, we eliminate the guesswork that typically plagues stone projects.
              </p>
            </div>

            <div class="intro-image-wrapper reveal-init stagger-2">
              <div class="intro-image-frame" style="aspect-ratio: 4 / 5;">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85" 
                  alt="Warehouse dry lay and laser inspection" 
                  class="intro-image"
                />
              </div>
              <div class="image-caption-subtle">
                Warehouse Dry-Lay Pavilion · Altamount Marble Selection
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- THREE PILLARS OF EXCELLENCE -->
      <section class="editorial-section" style="background-color: var(--bg-secondary); border-top: var(--border-hairline); border-bottom: var(--border-hairline);">
        <div class="site-container">
          <div class="reveal-init" style="margin-bottom: 3.5rem;">
            <span class="label-eyebrow">Guiding Standards</span>
            <h2 class="heading-section">OUR CODE OF EXECUTION</h2>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3.5rem;">
            <div class="reveal-init stagger-1">
              <span class="approach-num">01</span>
              <h3 class="heading-sub" style="margin-bottom: 1rem;">SUB-MILLIMETER TOLERANCE</h3>
              <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);">
                We operate with specialized European mechanical leveling spacers and laser levels, holding joint tolerances to 0.8mm with zero surface lippage across 25-meter spans.
              </p>
            </div>

            <div class="reveal-init stagger-2">
              <span class="approach-num">02</span>
              <h3 class="heading-sub" style="margin-bottom: 1rem;">WAREHOUSE DRY-MATCHING</h3>
              <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);">
                Every natural stone slab is physically pre-arranged in our temperature-controlled warehouse under natural daylight. Architects and clients review vein transitions before a single cut is made.
              </p>
            </div>

            <div class="reveal-init stagger-3">
              <span class="approach-num">03</span>
              <h3 class="heading-sub" style="margin-bottom: 1rem;">DIAMOND CRYSTALLIZATION</h3>
              <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);">
                We reject quick-fix surface waxes. Our finishing technicians perform multi-grade diamond abrasive wet-grinding up to 10,000 grit, delivering deep natural refractive clarity that lasts generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- WORKSHOP & TEAM -->
      <section class="editorial-section">
        <div class="site-container">
          <div class="statement-grid">
            <div class="statement-image-frame reveal-init" style="aspect-ratio: 1 / 1;">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" 
                alt="Master stonemason team" 
                class="statement-image"
              />
            </div>

            <div class="statement-typography reveal-init stagger-2">
              <span class="label-eyebrow">Legacy of Artisans</span>
              <h2 class="heading-section">
                MASTER STONEMASONS &<br>SITE DIRECTORS
              </h2>
              <p class="statement-body" style="margin-top: 1rem;">
                Our master installation technicians represent generations of traditional stone carving knowledge fused with cutting-edge German vacuum rigging and Italian waterjet technology. Every project is overseen on-site by a dedicated Project Director who coordinates seamlessly with structural engineers and design teams.
              </p>
              <div style="margin-top: 2rem;">
                <a href="#contact" class="editorial-link">
                  SCHEDULE A STUDIO VISIT <span class="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-final-section">
        <div class="site-container">
          <div class="cta-final-inner reveal-init">
            <span class="label-eyebrow">Collaboration</span>
            <h2 class="cta-headline">
              LET'S BUILD<br>TOGETHER
            </h2>
            <p class="text-editorial-lead">
              Whether you are an architect designing a private residence or a developer executing a flagship project, we bring unmatched precision to your surfaces.
            </p>
            <div class="cta-links-row">
              <a href="#contact" class="editorial-link">
                START A PROJECT <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}
