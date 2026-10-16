const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../src/js/frameSequence.js');

const code = `/**
 * LBK Surfaces - Frame-by-Frame Cinematic Scrollytelling Engine
 * Renders an optimized 32-frame sequence on HTML5 Canvas synchronized with GSAP ScrollTrigger.
 * Features:
 * - Progressive image preloading (prioritizes frame 0 for instant visual display)
 * - High-DPI Retina display handling (devicePixelRatio)
 * - Non-distorting aspect-ratio preservation (contain/cover logic)
 * - Smooth scrubbed bidirectional scroll animation
 * - Prefers-reduced-motion fallback
 * - Memory-conscious caching & debounced viewport resize
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class FrameSequenceScrollytelling {
  constructor(options = {}) {
    this.trackEl = document.getElementById(options.trackId || 'hero-scrolly-track');
    this.canvas = document.getElementById(options.canvasId || 'hero-frame-canvas');
    this.progressBadge = document.getElementById('hero-frame-progress-badge');
    this.phaseIndicator = document.getElementById('hero-frame-phase');
    
    if (!this.trackEl || !this.canvas) {
      console.warn('FrameSequenceScrollytelling: Missing track or canvas element.');
      return;
    }

    this.ctx = this.canvas.getContext('2d');
    this.totalFrames = 32;
    this.images = new Array(this.totalFrames);
    this.loadedImages = new Set();
    this.currentFrameIndex = 0;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.basePath = '/frames/';

    this.phases = [
      { max: 0.25, badge: '01 / 04 • Virtual Architectural Experience' },
      { max: 0.55, badge: '02 / 04 • Navigating Spatial Dimensions' },
      { max: 0.80, badge: '03 / 04 • Chromatic Warp & Precision Inlay' },
      { max: 1.00, badge: '04 / 04 • Structural Masonry & Grid Realization' }
    ];

    this.init();
  }

  getFrameUrl(index, preferWebp = true) {
    const pad = index.toString().padStart(3, '0');
    return \`\${this.basePath}frame_\${pad}.\${preferWebp ? 'webp' : 'png'}\`;
  }

  async init() {
    this.resizeCanvas();
    window.addEventListener('resize', this.debounce(() => this.resizeCanvas(), 150));

    // Priority 1: Load Frame 0 immediately so user sees initial frame without waiting
    await this.loadSingleFrame(0);
    this.renderFrame(0);

    // Priority 2: Preload remaining frames progressively in background
    this.preloadRemainingFrames();

    // Priority 3: Bind ScrollTrigger
    if (!this.isReducedMotion) {
      this.initScrollTrigger();
    } else {
      console.log('FrameSequenceScrollytelling: prefers-reduced-motion detected. Displaying static frame.');
      if (this.phaseIndicator) {
        this.phaseIndicator.textContent = 'Cinematic Architectural Experience';
      }
    }
  }

  loadSingleFrame(index) {
    return new Promise((resolve) => {
      if (this.images[index]) {
        resolve(this.images[index]);
        return;
      }

      const img = new Image();
      const webpUrl = this.getFrameUrl(index, true);
      const pngUrl = this.getFrameUrl(index, false);

      img.onload = () => {
        this.images[index] = img;
        this.loadedImages.add(index);
        resolve(img);
      };

      img.onerror = () => {
        // Fallback to PNG if WebP fails
        console.warn(\`Failed loading WebP for frame \${index}, trying PNG fallback.\`);
        const fallbackImg = new Image();
        fallbackImg.onload = () => {
          this.images[index] = fallbackImg;
          this.loadedImages.add(index);
          resolve(fallbackImg);
        };
        fallbackImg.onerror = () => {
          console.error(\`Could not load frame \${index} in WebP or PNG.\`);
          resolve(null);
        };
        fallbackImg.src = pngUrl;
      };

      img.src = webpUrl;
    });
  }

  async preloadRemainingFrames() {
    for (let i = 1; i < this.totalFrames; i += 4) {
      const batch = [];
      for (let j = i; j < Math.min(i + 4, this.totalFrames); j++) {
        batch.push(this.loadSingleFrame(j));
      }
      await Promise.all(batch);
    }
    console.log('FrameSequenceScrollytelling: All 32 frames preloaded successfully.');
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.canvasWidth = rect.width;
    this.canvasHeight = rect.height;

    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;

    this.canvas.style.width = \`\${rect.width}px\`;
    this.canvas.style.height = \`\${rect.height}px\`;

    this.renderFrame(this.currentFrameIndex);
  }

  renderFrame(index) {
    if (!this.ctx || !this.canvas) return;

    let targetImg = this.images[index];
    if (!targetImg) {
      for (let delta = 1; delta < this.totalFrames; delta++) {
        if (index - delta >= 0 && this.images[index - delta]) {
          targetImg = this.images[index - delta];
          break;
        }
        if (index + delta < this.totalFrames && this.images[index + delta]) {
          targetImg = this.images[index + delta];
          break;
        }
      }
    }

    if (!targetImg) return;

    this.currentFrameIndex = index;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = this.canvasWidth;
    const ch = this.canvasHeight;
    const iw = targetImg.naturalWidth || targetImg.width;
    const ih = targetImg.naturalHeight || targetImg.height;

    if (!iw || !ih || !cw || !ch) return;

    // Scale to fit available bounds while preserving aspect ratio
    const scale = Math.min(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    this.ctx.scale(dpr, dpr);

    // Draw frame
    this.ctx.drawImage(targetImg, dx, dy, dw, dh);
    this.ctx.restore();
  }

  initScrollTrigger() {
    const maxFrame = this.totalFrames - 1;
    const heroContent = document.getElementById('hero-text-content');
    const heroProofBanner = document.getElementById('hero-proof-banner');

    ScrollTrigger.create({
      trigger: this.trackEl,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.15,
      onUpdate: (self) => {
        const progress = self.progress;
        const targetFrame = Math.min(Math.round(progress * maxFrame), maxFrame);

        if (targetFrame !== this.currentFrameIndex) {
          this.renderFrame(targetFrame);
        }

        if (this.progressBadge) {
          const currentDisplay = (targetFrame + 1).toString().padStart(2, '0');
          this.progressBadge.textContent = \`\${currentDisplay} / 32\`;
        }

        if (this.phaseIndicator) {
          for (const p of this.phases) {
            if (progress <= p.max) {
              this.phaseIndicator.textContent = p.badge;
              break;
            }
          }
        }

        // Subtly adjust hero text visibility as visitor scrolls deeper
        if (heroContent) {
          if (progress < 0.20) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = \`translateY(\${progress * -15}px)\`;
          } else if (progress < 0.75) {
            heroContent.style.opacity = '0.4';
            heroContent.style.transform = \`translateY(\${progress * -25}px)\`;
          } else {
            const fade = Math.max(0, 1 - (progress - 0.75) * 4);
            heroContent.style.opacity = fade.toString();
          }
        }

        if (heroProofBanner) {
          if (progress < 0.15) {
            heroProofBanner.style.opacity = '1';
          } else {
            heroProofBanner.style.opacity = '0.25';
          }
        }
      }
    });

    console.log('FrameSequenceScrollytelling: GSAP ScrollTrigger timeline bound.');
  }

  debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
}
`;

fs.writeFileSync(targetPath, code, 'utf8');
console.log('Created src/js/frameSequence.js successfully!');
