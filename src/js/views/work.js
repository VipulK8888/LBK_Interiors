/**
 * LBK Surfaces - Our Work / Designs Page View
 * Filterable editorial portfolio with asymmetric compositions
 */

import { PROJECTS, CATEGORIES } from '../../data/projects.js';

export function renderWork(activeCategory = 'ALL') {
  const filtered = activeCategory === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return `
    <div class="page-view-container">
      <header class="work-page-header">
        <div class="site-container">
          <span class="label-eyebrow">Portfolio</span>
          <h1 class="heading-huge" style="margin-bottom: 1rem;">OUR WORK</h1>
          <p class="text-editorial-lead">
            A collection of surfaces crafted with precision. Monolithic marble floors, continuous porcelain slabs, cantilevered stone stairs, and meticulous civil finishing.
          </p>

          <div class="filter-bar" id="category-filter-bar">
            ${CATEGORIES.map(cat => `
              <button 
                class="filter-btn ${cat.key === activeCategory ? 'active' : ''}" 
                data-category="${cat.key}"
              >
                ${cat.label}
              </button>
            `).join('')}
          </div>
        </div>
      </header>

      <section class="site-container" style="padding-bottom: 8rem;">
        <div class="portfolio-editorial-grid" id="portfolio-grid">
          ${renderProjectGridItems(filtered)}
        </div>
      </section>
    </div>
  `;
}

function renderProjectGridItems(projects) {
  if (projects.length === 0) {
    return `
      <div style="grid-column: 1 / -1; padding: 4rem 0; text-align: center;">
        <p class="text-editorial-lead" style="margin: 0 auto;">No projects currently listed in this category.</p>
      </div>
    `;
  }

  return projects.map((p, idx) => {
    // Alternate asymmetric layout spans
    let colSpan = '1 / span 12';
    let aspectRatio = '16 / 10';
    let marginTop = '0';

    const patternIndex = idx % 5;
    if (patternIndex === 0) {
      colSpan = '1 / span 12'; // Hero full-width project
      aspectRatio = '21 / 9';
    } else if (patternIndex === 1) {
      colSpan = '1 / span 7';
      aspectRatio = '4 / 3';
    } else if (patternIndex === 2) {
      colSpan = '8 / span 5';
      aspectRatio = '3 / 4';
      marginTop = '4rem';
    } else if (patternIndex === 3) {
      colSpan = '1 / span 5';
      aspectRatio = '1 / 1';
      marginTop = '2rem';
    } else if (patternIndex === 4) {
      colSpan = '6 / span 7';
      aspectRatio = '16 / 10';
    }

    return `
      <article 
        class="work-card reveal-init portfolio-item-transition" 
        data-slug="${p.slug}"
        style="grid-column: ${colSpan}; margin-top: ${marginTop};"
      >
        <div class="work-card-image-wrap" style="aspect-ratio: ${aspectRatio};">
          <img src="${p.coverImage}" alt="${p.title}" class="work-card-img" loading="lazy" />
          <div class="work-card-hover-overlay">
            <span class="work-card-hover-text">VIEW PROJECT →</span>
          </div>
        </div>
        <div class="work-card-meta">
          <span class="work-card-tag">${p.categoryLabel}</span>
          <h2 class="work-card-title">${p.title}</h2>
          <div class="work-card-location">${p.material} · ${p.city}</div>
        </div>
      </article>
    `;
  }).join('');
}

export function bindWorkEvents(container, currentCategory, onCategoryChange) {
  // Bind category filter buttons
  const buttons = container.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      if (cat !== currentCategory) {
        onCategoryChange(cat);
      }
    });
  });

  // Bind project cards
  const projectCards = container.querySelectorAll('.work-card');
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const slug = card.dataset.slug;
      if (slug) {
        window.location.hash = `#project/${slug}`;
      }
    });
  });
}
