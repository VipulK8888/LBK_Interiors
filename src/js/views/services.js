/**
 * LBK Surfaces - Services / Capabilities View
 * Detailed editorial catalog of all 9 core specializations
 */

import { SERVICES } from '../../data/services.js';

export function renderServices() {
  return `
    <div class="page-view-container">
      
      <header class="work-page-header">
        <div class="site-container">
          <span class="label-eyebrow">Disciplines & Specializations</span>
          <h1 class="heading-huge" style="margin-bottom: 1rem;">SURFACE DISCIPLINES</h1>
          <p class="text-editorial-lead">
            From millimeter-precise bookmatched Italian marble to continuous 3.2-meter porcelain slabs, our multidisciplinary stonemasons and civil finishing specialists execute complex architectural surfaces with zero compromise.
          </p>
        </div>
      </header>

      <section class="site-container" style="padding-bottom: 8rem;">
        <div class="services-catalog-list">
          ${SERVICES.map((s, idx) => `
            <article class="service-item-row reveal-init stagger-${(idx % 3) + 1}" id="${s.id}">
              <div class="service-number">${s.number}</div>

              <div class="service-title-col">
                <span class="label-eyebrow">${s.subtitle}</span>
                <h3 class="heading-sub">${s.title}</h3>
                <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-top: 1rem;">
                  ${s.summary}
                </p>
                <div style="margin-top: 1.5rem;">
                  <a href="#contact" class="editorial-link">
                    INQUIRE ABOUT THIS DISCIPLINE <span class="arrow">→</span>
                  </a>
                </div>
              </div>

              <div class="service-specs-col">
                <span class="text-meta" style="color: var(--accent-stone); display: block; margin-bottom: 0.75rem;">
                  TECHNICAL SPECIFICATIONS
                </span>
                <ul style="display: flex; flex-direction: column; gap: 0.5rem;">
                  ${s.specs.map(spec => `
                    <li style="font-size: 0.85rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
                      <span style="width: 4px; height: 4px; background: var(--accent-stone); border-radius: 50%;"></span>
                      ${spec}
                    </li>
                  `).join('')}
                </ul>
              </div>

              <div class="service-img-preview">
                <img src="${s.image}" alt="${s.title}" loading="lazy" />
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- BOTTOM CTA -->
      <section class="cta-final-section">
        <div class="site-container">
          <div class="cta-final-inner reveal-init">
            <span class="label-eyebrow">Consultation</span>
            <h2 class="cta-headline">
              HAVE A COMPLEX<br>SURFACE TO EXECUTE?
            </h2>
            <p class="text-editorial-lead">
              Our engineering team is available for architectural specification reviews, mockups, and warehouse dry-lays.
            </p>
            <div class="cta-links-row">
              <a href="#contact" class="editorial-link">
                DISCUSS SPECIFICATIONS <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}
