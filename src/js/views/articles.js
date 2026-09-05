/**
 * LBK Surfaces - Articles / Editorial Insights View
 */

import { ARTICLES } from '../../data/articles.js';

export function renderArticles(activeSlug = null) {
  if (activeSlug) {
    const article = ARTICLES.find(a => a.slug === activeSlug) || ARTICLES[0];
    return renderArticleSingle(article);
  }

  return `
    <div class="page-view-container">
      
      <header class="work-page-header">
        <div class="site-container">
          <span class="label-eyebrow">Monograph & Editorial</span>
          <h1 class="heading-huge" style="margin-bottom: 1rem;">INSIGHTS</h1>
          <p class="text-editorial-lead">
            Essays on architectural stonework, sub-millimeter tolerances, material science, and the physics of the surface.
          </p>
        </div>
      </header>

      <section class="site-container" style="padding-bottom: 8rem; padding-top: 4rem;">
        <div style="display: flex; flex-direction: column; gap: 6rem;">
          ${ARTICLES.map((art, idx) => `
            <article class="intro-grid reveal-init stagger-${idx + 1}" style="border-top: var(--border-hairline); padding-top: 3.5rem;">
              <div class="intro-typography">
                <span class="text-meta" style="color: var(--accent-stone); display: block; margin-bottom: 0.75rem;">
                  ${art.date} · ${art.readTime}
                </span>
                <h2 class="heading-section" style="font-size: clamp(1.6rem, 2.2vw, 2.4rem); margin-bottom: 1rem;">
                  ${art.title}
                </h2>
                <p class="intro-paragraph" style="margin-bottom: 1.5rem;">
                  ${art.excerpt}
                </p>
                <a href="#article/${art.slug}" class="editorial-link">
                  READ ESSAY <span class="arrow">→</span>
                </a>
              </div>

              <div class="intro-image-wrapper">
                <div class="intro-image-frame" style="aspect-ratio: 16 / 10;">
                  <img src="${art.coverImage}" alt="${art.title}" class="intro-image" loading="lazy" />
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

    </div>
  `;
}

function renderArticleSingle(art) {
  return `
    <div class="page-view-container">
      
      <header class="project-detail-hero" style="min-height: 60vh;">
        <img src="${art.coverImage}" alt="${art.title}" class="project-detail-hero-img" />
        <div class="project-detail-hero-overlay"></div>
        <div class="site-container" style="position: relative; z-index: 2; width: 100%;">
          <div style="margin-bottom: 1.5rem;">
            <a href="#articles" class="editorial-link editorial-link-light">
              ← BACK TO INSIGHTS
            </a>
          </div>
          <span class="label-eyebrow" style="color: rgba(248, 246, 242, 0.7);">
            ${art.date} · ${art.readTime} · By ${art.author}
          </span>
          <h1 class="heading-section" style="color: var(--text-inverse); max-width: 16ch; font-size: clamp(2rem, 3.5vw, 3.8rem);">
            ${art.title}
          </h1>
        </div>
      </header>

      <article class="site-container-narrow editorial-section">
        <div style="font-size: 1.08rem; line-height: 1.85; color: var(--text-secondary);" class="article-body-content">
          ${art.content}
        </div>

        <div style="margin-top: 4rem; padding-top: 2rem; border-top: var(--border-hairline);">
          <a href="#articles" class="editorial-link">
            ← ALL ARTICLES
          </a>
        </div>
      </article>

    </div>
  `;
}
