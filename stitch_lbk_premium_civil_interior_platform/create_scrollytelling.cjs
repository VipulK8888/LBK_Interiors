const fs = require('fs');
const path = require('path');

const jsContent = `/**
 * LBK Surfaces - Cinematic Scrollytelling Engine
 * Built with GSAP & ScrollTrigger for scrub-driven, reversible architectural transitions
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class ScrollytellingEngine {
  constructor(coverflowInstance, stoneViewerInstance) {
    this.coverflow = coverflowInstance;
    this.stoneViewer = stoneViewerInstance;
    this.triggers = [];

    this.init();
  }

  init() {
    // Respect user motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      console.log('Reduced motion preferred - simple reveals active');
      this.initReducedMotion();
      return;
    }

    this.initSceneNav();
    this.initScene01Arrival();
    this.initScene02Immersion();
    this.initScene03Projects();
    this.initScene04Tiles();
    this.initScene05Stone();
    this.initScene06BeforeAfter();
    this.initScene07Pillars();
    this.initScene08Process();
    this.initScene09Collaboration();
    this.initGeneralReveals();
  }

  initSceneNav() {
    const sceneNavButtons = document.querySelectorAll('.scene-dot');
    const scenes = document.querySelectorAll('section[id^="scene-"]');

    sceneNavButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = button.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          gsap.to(window, {
            scrollTo: { y: targetEl, offsetY: 70 },
            duration: 1.1,
            ease: 'power3.inOut'
          });
          // Fallback if ScrollToPlugin not active
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    const skipBtn = document.getElementById('skip-nav-btn');
    if (skipBtn) {
      skipBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const quoteEl = document.getElementById('quote-section');
        if (quoteEl) quoteEl.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // ScrollTrigger to highlight active scene HUD dot
    scenes.forEach(scene => {
      ScrollTrigger.create({
        trigger: scene,
        start: 'top 45%',
        end: 'bottom 45%',
        onEnter: () => this.setActiveDot(scene.id),
        onEnterBack: () => this.setActiveDot(scene.id)
      });
    });
  }

  setActiveDot(sceneId) {
    const dots = document.querySelectorAll('.scene-dot');
    dots.forEach(btn => {
      const indicator = btn.querySelector('.dot-indicator');
      const label = btn.querySelector('span');
      if (btn.getAttribute('data-target') === sceneId) {
        if (indicator) {
          indicator.classList.remove('bg-outline-variant', 'w-2', 'h-2');
          indicator.classList.add('bg-primary', 'w-3.5', 'h-3.5', 'ring-4', 'ring-primary/20');
        }
        if (label) {
          label.classList.add('opacity-100', 'text-primary', 'font-semibold');
          label.classList.remove('translate-x-1');
        }
      } else {
        if (indicator) {
          indicator.classList.add('bg-outline-variant', 'w-2', 'h-2');
          indicator.classList.remove('bg-primary', 'w-3.5', 'h-3.5', 'ring-4', 'ring-primary/20');
        }
        if (label) {
          label.classList.remove('opacity-100', 'text-primary', 'font-semibold');
          label.classList.add('translate-x-1');
        }
      }
    });
  }

  // SCENE 01: ARRIVAL CAMERA PUSH-IN
  initScene01Arrival() {
    const heroSection = document.getElementById('scene-01');
    if (!heroSection) return;

    const heroBg = heroSection.querySelector('.hero-bg-anim');
    const heroContent = heroSection.querySelector('.relative.z-10');
    const statsBanner = heroSection.querySelector('.grid.grid-cols-2');

    if (heroBg) {
      gsap.to(heroBg, {
        scale: 1.15,
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8
        }
      });
    }

    if (heroContent) {
      gsap.to(heroContent, {
        y: -40,
        opacity: 0.85,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8
        }
      });
    }

    if (statsBanner) {
      const stats = statsBanner.querySelectorAll('div');
      gsap.from(stats, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: statsBanner,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      });
    }
  }

  // SCENE 02: SPATIAL IMMERSION (EXTERIOR TO INTERIOR TRANSITION)
  initScene02Immersion() {
    const scene02 = document.getElementById('scene-02');
    if (!scene02) return;

    const mediaWrap = scene02.querySelector('.lg\\:col-span-7');
    const textGroup = scene02.querySelector('.lg\\:col-span-5');

    if (mediaWrap) {
      gsap.fromTo(mediaWrap, 
        { scale: 0.94, opacity: 0.7, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: scene02,
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1
          }
        }
      );
    }

    if (textGroup) {
      gsap.from(textGroup.children, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: scene02,
          start: 'top 65%',
          toggleActions: 'play reverse play reverse'
        }
      });
    }
  }

  // SCENE 03: SIGNATURE 3D PROJECT CAROUSEL
  initScene03Projects() {
    const scene03 = document.getElementById('scene-03');
    if (!scene03 || !this.coverflow) return;

    // Subtle parallax scale into view
    gsap.fromTo('#carousel-track',
      { scale: 0.92, opacity: 0.8 },
      {
        scale: 1,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: scene03,
          start: 'top 80%',
          end: 'top 35%',
          scrub: 0.6
        }
      }
    );
  }

  // SCENE 04: TILE ENGINEERING & LASER JOINT SCANNER
  initScene04Tiles() {
    const scene04 = document.getElementById('scene-04');
    if (!scene04) return;

    const tileImgWrap = scene04.querySelector('.aspect-\\[4\\/3\\]');
    if (tileImgWrap && !tileImgWrap.querySelector('.laser-guide-line')) {
      const laser = document.createElement('div');
      laser.className = 'laser-guide-line';
      tileImgWrap.appendChild(laser);
    }

    // Camera glide on the tile inspection photo
    const tileImg = scene04.querySelector('img');
    if (tileImg) {
      gsap.to(tileImg, {
        scale: 1.08,
        y: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: scene04,
          start: 'top 75%',
          end: 'bottom 25%',
          scrub: 1
        }
      });
    }

    // Stagger metric badges (1.0mm, 100%, 0-Lippage)
    const metrics = scene04.querySelectorAll('.grid-cols-3 > div');
    if (metrics.length) {
      gsap.from(metrics, {
        scale: 0.9,
        y: 20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: scene04,
          start: 'top 60%',
          toggleActions: 'play reverse play reverse'
        }
      });
    }
  }

  // SCENE 05: GRANITE & MARBLE VEINING SHOWCASE
  initScene05Stone() {
    const scene05 = document.getElementById('scene-05');
    if (!scene05) return;

    const displayCard = document.getElementById('material-display');
    if (displayCard) {
      gsap.from(displayCard, {
        y: 50,
        opacity: 0.85,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: scene05,
          start: 'top 70%',
          toggleActions: 'play reverse play reverse'
        }
      });
    }
  }

  // SCENE 06: BEFORE & AFTER TRANSFORMATION
  initScene06BeforeAfter() {
    const scene06 = document.getElementById('scene-06');
    if (!scene06) return;

    const sliderContainer = document.getElementById('ba-slider-container');
    if (sliderContainer) {
      gsap.from(sliderContainer, {
        scale: 0.96,
        opacity: 0.8,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: scene06,
          start: 'top 70%',
          toggleActions: 'play reverse play reverse'
        }
      });
    }
  }

  // SCENE 07: FOUNDATIONAL PHILOSOPHY (3D MOUSE TILT PILLARS)
  initScene07Pillars() {
    const scene07 = document.getElementById('scene-07');
    if (!scene07) return;

    const pillars = scene07.querySelectorAll('.pillar-card');
    
    // Scroll stagger entrance
    gsap.from(pillars, {
      y: 45,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: scene07,
        start: 'top 70%',
        toggleActions: 'play reverse play reverse'
      }
    });

    // 3D perspective mouse tracking tilt on each card
    pillars.forEach(card => {
      card.classList.add('pillar-card-tilt');

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotX = -(y / rect.height) * 16;
        const rotY = (x / rect.width) * 16;

        card.style.transform = \`perspective(800px) rotateX(\${rotX}deg) rotateY(\${rotY}deg) translateY(-8px)\`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  // SCENE 08: 5-STEP PROCESS WITH ANIMATED SVG LINE
  initScene08Process() {
    const scene08 = document.getElementById('scene-08');
    if (!scene08) return;

    const cardsContainer = scene08.querySelector('.grid.md\\:grid-cols-5');
    if (!cardsContainer) return;

    // Inject SVG line behind cards on desktop
    let lineWrap = scene08.querySelector('.process-svg-line-wrap');
    if (!lineWrap) {
      lineWrap = document.createElement('div');
      lineWrap.className = 'process-svg-line-wrap hidden md:block';
      lineWrap.innerHTML = \`
        <svg width="100%" height="10" viewBox="0 0 1000 10" preserveAspectRatio="none">
          <line x1="0" y1="5" x2="1000" y2="5" class="process-line-bg"></line>
          <line x1="0" y1="5" x2="1000" y2="5" class="process-line-progress" id="process-svg-line"></line>
        </svg>
      \`;
      cardsContainer.parentElement.insertBefore(lineWrap, cardsContainer);
    }

    const processCards = scene08.querySelectorAll('.process-card');
    
    // ScrollTrigger to draw the line across the 5 steps
    const svgLine = document.getElementById('process-svg-line');
    if (svgLine) {
      ScrollTrigger.create({
        trigger: scene08,
        start: 'top 65%',
        end: 'bottom 80%',
        scrub: 0.8,
        onUpdate: (self) => {
          const offset = 1000 - (self.progress * 1000);
          svgLine.style.strokeDashoffset = offset;

          // Light up cards sequentially
          const currentStep = Math.floor(self.progress * 5);
          processCards.forEach((card, idx) => {
            const badge = card.querySelector('.w-8.h-8');
            if (idx <= currentStep) {
              card.style.borderColor = 'rgba(197, 161, 91, 0.7)';
              if (badge) badge.classList.add('process-node-active');
            } else {
              card.style.borderColor = 'rgba(209, 197, 180, 0.2)';
              if (badge && idx !== 0) badge.classList.remove('process-node-active');
            }
          });
        }
      });
    }

    gsap.from(processCards, {
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: scene08,
        start: 'top 70%',
        toggleActions: 'play reverse play reverse'
      }
    });
  }

  // SCENE 09: FINAL COLLABORATION CAMERA PULL-BACK
  initScene09Collaboration() {
    const scene09 = document.getElementById('scene-09');
    if (!scene09) return;

    const mainBanner = scene09.querySelector('.max-w-\\[1440px\\]');
    if (mainBanner) {
      gsap.fromTo(mainBanner,
        { scale: 0.95, opacity: 0.85 },
        {
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: scene09,
            start: 'top 80%',
            end: 'top 35%',
            scrub: 0.8
          }
        }
      );
    }
  }

  initGeneralReveals() {
    const revealSections = document.querySelectorAll('.reveal-section');
    revealSections.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 85%',
        onEnter: () => section.classList.add('revealed'),
        onLeaveBack: () => section.classList.remove('revealed')
      });
    });
  }

  initReducedMotion() {
    document.querySelectorAll('.reveal-section').forEach(s => s.classList.add('revealed'));
  }
}
`;

fs.writeFileSync(path.join('..', 'src', 'js', 'scrollytelling.js'), jsContent, 'utf8');
console.log('scrollytelling.js created successfully!');
