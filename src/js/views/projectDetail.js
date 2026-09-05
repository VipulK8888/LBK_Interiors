/**
 * LBK Surfaces - Project Detail Case Study View
 * Immersive architectural monographs with photography, macro details, and video
 */

import { PROJECTS } from '../../data/projects.js';
import { lightbox } from '../lightbox.js';

export function renderProjectDetail(slug) {
  const project = PROJECTS.find(p => p.slug === slug) || PROJECTS[0];
  const currentIndex = PROJECTS.findIndex(p => p.slug === project.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  return `
    <div class="page-view-container project-detail-view">
      
      <!-- HERO HEADER -->
      <section class="project-detail-hero">
        <img src="${project.coverImage}" alt="${project.title}" class="project-detail-hero-img" />
        <div class="project-detail-hero-overlay"></div>
        
        <div class="site-container" style="position: relative; z-index: 2; width: 100%;">
          <div style="margin-bottom: 1.5rem;">
            <a href="#work" class="editorial-link editorial-link-light">
              ← ALL PROJECTS
            </a>
          </div>
          <span class="label-eyebrow" style="color: rgba(248, 246, 242, 0.7);">
            ${project.categoryLabel} · ${project.city}
          </span>
          <h1 class="heading-huge" style="color: var(--text-inverse); max-width: 15ch;">
            ${project.title}
          </h1>
        </div>
      </section>


      <!-- PROJECT SPECS BAR -->
      <div class="project-specs-bar">
        <div class="site-container" style="display: contents;">
          <div class="spec-block">
            <span class="spec-label">Location</span>
            <span class="spec-value">${project.location}</span>
          </div>
          <div class="spec-block">
            <span class="spec-label">Material</span>
            <span class="spec-value">${project.material}</span>
          </div>
          <div class="spec-block">
            <span class="spec-label">Scope of Work</span>
            <span class="spec-value">${project.scope}</span>
          </div>
          <div class="spec-block">
            <span class="spec-label">Floorplate</span>
            <span class="spec-value">${project.area} · ${project.year}</span>
          </div>
        </div>
      </div>


      <!-- NARRATIVE OVERVIEW -->
      <section class="editorial-section">
        <div class="site-container">
          <div class="project-narrative-section">
            <div class="reveal-init">
              <span class="label-eyebrow">Project Overview</span>
              <h2 class="heading-section">
                TRANSFORMING<br>RAW GEOLOGY<br>INTO ARCHITECTURE
              </h2>
            </div>
            <div class="reveal-init stagger-2">
              <p class="text-editorial-lead" style="max-width: 100%; font-size: 1.15rem; line-height: 1.85;">
                ${project.description}
              </p>
            </div>
          </div>
        </div>
      </section>


      <!-- EDITORIAL PHOTOGRAPHY SEQUENCE -->
      <section class="site-container project-gallery-sequence">
        
        <!-- Full-Width Landscape Frame -->
        ${project.gallery[0] ? `
          <div class="gallery-fullwidth reveal-init">
            <img src="${project.gallery[0].url}" alt="${project.gallery[0].caption}" loading="lazy" />
          </div>
          <div class="image-caption-subtle" style="margin-top: -3.5rem; margin-bottom: 2rem;">
            ${project.gallery[0].caption}
          </div>
        ` : ''}

        <!-- Asymmetric Duo Frame -->
        ${project.gallery[1] && project.gallery[2] ? `
          <div class="gallery-duo-asymmetric reveal-init">
            <div>
              <div class="gallery-duo-frame">
                <img src="${project.gallery[1].url}" alt="${project.gallery[1].caption}" loading="lazy" />
              </div>
              <div class="image-caption-subtle">${project.gallery[1].caption}</div>
            </div>
            <div style="margin-top: 3rem;">
              <div class="gallery-duo-frame" style="aspect-ratio: 1 / 1;">
                <img src="${project.gallery[2].url}" alt="${project.gallery[2].caption}" loading="lazy" />
              </div>
              <div class="image-caption-subtle">${project.gallery[2].caption}</div>
            </div>
          </div>
        ` : ''}

        <!-- Third Landscape or Portrait if available -->
        ${project.gallery[3] ? `
          <div class="gallery-fullwidth reveal-init" style="aspect-ratio: 21 / 10;">
            <img src="${project.gallery[3].url}" alt="${project.gallery[3].caption}" loading="lazy" />
          </div>
          <div class="image-caption-subtle" style="margin-top: -3.5rem; margin-bottom: 2rem;">
            ${project.gallery[3].caption}
          </div>
        ` : ''}

      </section>


      <!-- CRAFTSMANSHIP DETAILS -->
      <section class="editorial-section" style="background-color: var(--bg-secondary); border-top: var(--border-hairline); border-bottom: var(--border-hairline);">
        <div class="site-container">
          <div class="reveal-init" style="margin-bottom: 3.5rem;">
            <span class="label-eyebrow">Technical Execution</span>
            <h2 class="heading-section">CRAFTSMANSHIP DETAILS</h2>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2.5rem;">
            ${project.craftsmanshipNotes.map((note, idx) => `
              <div class="reveal-init stagger-${idx + 1}" style="border-top: 1px solid rgba(22, 21, 20, 0.15); padding-top: 1.5rem;">
                <span class="text-meta" style="color: var(--accent-stone); margin-bottom: 0.5rem; display: block;">0${idx + 1} / CALIBRATION</span>
                <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);">${note}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>


      <!-- PROJECT VIDEO IN MOTION -->
      ${project.video ? `
        <section class="editorial-section" style="background-color: var(--bg-dark); color: var(--text-inverse);">
          <div class="site-container">
            <div class="section-header-row reveal-init" style="border-bottom-color: rgba(248, 246, 242, 0.15);">
              <div>
                <span class="label-eyebrow" style="color: rgba(248, 246, 242, 0.6);">Process Documentation</span>
                <h2 class="heading-section" style="color: var(--text-inverse);">PROJECT FILM</h2>
              </div>
              <span class="text-meta" style="color: rgba(248, 246, 242, 0.5);">${project.video.duration}</span>
            </div>

            <div class="motion-card reveal-init" style="aspect-ratio: 21 / 9; max-width: 100%; margin-top: 2rem;" data-video="${project.video.videoUrl}" data-title="${project.video.title}">
              <img src="${project.video.poster}" alt="${project.video.title}" class="motion-poster" />
              <div class="motion-overlay">
                <div class="motion-title">${project.video.title}</div>
                <div class="motion-play-btn" aria-label="Play Project Film">
                  <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <div class="motion-info">
                  <span class="text-meta" style="color: rgba(255,255,255,0.7);">${project.title}</span>
                  <span class="motion-duration">${project.video.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ` : ''}


      <!-- NEXT & PREVIOUS PROJECT BAR -->
      <section class="site-container" style="padding: 4rem 0; border-bottom: var(--border-hairline);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
          <a href="#project/${prevProject.slug}" class="editorial-link">
            ← PREVIOUS: ${prevProject.title}
          </a>
          <a href="#project/${nextProject.slug}" class="editorial-link">
            NEXT: ${nextProject.title} →
          </a>
        </div>
      </section>


      <!-- FINAL PROJECT CTA -->
      <section class="cta-final-section">
        <div class="site-container">
          <div class="cta-final-inner reveal-init">
            <span class="label-eyebrow">Collaboration</span>
            <h2 class="cta-headline">
              READY TO START<br>YOUR PROJECT?
            </h2>
            <p class="text-editorial-lead">
              Our master stonemasons and technical directors are ready to review your architectural drawings and specifications.
            </p>
            <div class="cta-links-row">
              <a href="#contact" class="editorial-link">
                DISCUSS YOUR PROJECT <span class="arrow">→</span>
              </a>
              <a href="#work" class="editorial-link">
                BACK TO PORTFOLIO <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}

export function bindProjectDetailEvents(container) {
  // Bind video trigger
  const videoCard = container.querySelector('.motion-card');
  if (videoCard) {
    videoCard.addEventListener('click', () => {
      const videoUrl = videoCard.dataset.video;
      const title = videoCard.dataset.title;
      if (videoUrl) {
        lightbox.open(videoUrl, title);
      }
    });
  }
}
