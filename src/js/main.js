/**
 * LBK Surfaces - Master Application Bootstrap
 * Connects 3D Coverflow, Three.js 3D Stone Simulation, and GSAP Scrollytelling
 */

import '../styles/variables.css';
import '../styles/scrollytelling.css';
import '../styles/animations.css';

import { CoverflowCarousel } from './coverflow3d.js';
import { StoneViewer3D } from './stoneViewer3d.js';
import { ScrollytellingEngine } from './scrollytelling.js';
import { Hero3DScrollytelling } from './hero3dScrolly.js';

import { initBeforeAfterSlider } from './beforeAfter.js';
import { initConsultationForm } from './formHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing LBK Cinematic Scrollytelling Experience...');

  // 0. Initialize 3D Spatial Flythrough Scrollytelling Hero (Scene 01)
  const heroTrack = document.getElementById('hero-scrolly-track');
  let hero3DInstance = null;
  if (heroTrack) {
    hero3DInstance = new Hero3DScrollytelling({
      containerId: 'hero-3d-viewport',
      trackId: 'hero-scrolly-track'
    });
  }

  // 1. Initialize 3D Perspective Coverflow Carousel (Scene 03)
  const carouselContainer = document.getElementById('scene-03');
  let coverflowInstance = null;
  if (carouselContainer) {
    coverflowInstance = new CoverflowCarousel(carouselContainer);
  }

  // 2. Initialize Three.js Real-Time 3D Stone Slab Inspection (Scene 05)
  const stoneViewport = document.getElementById('stone-3d-viewport');
  let stoneViewerInstance = null;
  if (stoneViewport) {
    stoneViewerInstance = new StoneViewer3D(stoneViewport);
  }

  // Material Toggle Buttons (Marble vs Granite)
  const btnMarble = document.getElementById('btn-show-marble');
  const btnGranite = document.getElementById('btn-show-granite');
  const matTitle = document.getElementById('mat-title');
  const matOrigin = document.getElementById('mat-origin');
  const matDesc = document.getElementById('mat-desc');
  const matThick = document.getElementById('mat-thick');
  const matPolish = document.getElementById('mat-polish');
  const matSlip = document.getElementById('mat-slip');
  const matBadge = document.getElementById('mat-badge');
  const matTextContainer = document.getElementById('mat-text-container');

  function updateMaterial(type) {
    if (matTextContainer) matTextContainer.style.opacity = '0.35';

    if (stoneViewerInstance) {
      stoneViewerInstance.setMaterialType(type);
    }

    setTimeout(() => {
      if (type === 'marble') {
        if (btnMarble) {
          btnMarble.classList.remove('bg-surface-container-high', 'text-on-surface-variant');
          btnMarble.classList.add('bg-primary-container', 'text-on-primary-container');
        }
        if (btnGranite) {
          btnGranite.classList.remove('bg-primary-container', 'text-on-primary-container');
          btnGranite.classList.add('bg-surface-container-high', 'text-on-surface-variant');
        }

        if (matTitle) matTitle.textContent = 'Bespoke Italian & Makrana Marble';
        if (matOrigin) matOrigin.textContent = 'Mineral Category • Metamorphic Limestone';
        if (matDesc) matDesc.textContent = 'Celebrated for its organic flowing veining and translucent depth of clarity. Ideal for grand staircases, private palatial living halls, wall claddings, and artisanal carved accents.';
        if (matThick) matThick.textContent = '18mm • 20mm Custom';
        if (matPolish) matPolish.textContent = 'High Gloss Mirror / Silky Honed';
        if (matSlip) matSlip.textContent = 'R9 (Polished) / R11 (Honed)';
        if (matBadge) matBadge.querySelector('span').textContent = 'Statuario White Marble';
      } else {
        if (btnGranite) {
          btnGranite.classList.remove('bg-surface-container-high', 'text-on-surface-variant');
          btnGranite.classList.add('bg-primary-container', 'text-on-primary-container');
        }
        if (btnMarble) {
          btnMarble.classList.remove('bg-primary-container', 'text-on-primary-container');
          btnMarble.classList.add('bg-surface-container-high', 'text-on-surface-variant');
        }

        if (matTitle) matTitle.textContent = 'High-Density Rajasthan & Black Galaxy Granite';
        if (matOrigin) matOrigin.textContent = 'Mineral Category • Plutonic Igneous Rock';
        if (matDesc) matDesc.textContent = 'Unrivaled compressive density, thermal shock durability, and resistance to chemical etching. Perfect for exterior ventilated facades, high-traffic commercial foyers, and culinary countertops.';
        if (matThick) matThick.textContent = '20mm • 30mm Structural';
        if (matPolish) matPolish.textContent = 'Flamed, Bush-Hammered, Leather, Mirror';
        if (matSlip) matSlip.textContent = 'R11 (Honed) / R13 (Flamed)';
        if (matBadge) matBadge.querySelector('span').textContent = 'Black Pearl Granite';
      }

      if (matTextContainer) matTextContainer.style.opacity = '1';
    }, 200);
  }

  if (btnMarble && btnGranite) {
    btnMarble.addEventListener('click', () => updateMaterial('marble'));
    btnGranite.addEventListener('click', () => updateMaterial('granite'));
  }

  // 3. Initialize Interactive Before & After Comparison Slider (Scene 06)
  initBeforeAfterSlider();

  // 4. Initialize Consultation & Direct Quote Form
  initConsultationForm();

  // 5. Initialize GSAP Scrollytelling Engine
  const scrollytelling = new ScrollytellingEngine(coverflowInstance, stoneViewerInstance);

  // 6. Mobile Menu Drawer Navigation
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileDrawerCloseBtn = document.getElementById('mobile-drawer-close-btn');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const closeDrawer = () => {
    if (mobileNavDrawer) mobileNavDrawer.classList.remove('is-open');
    if (mobileNavDrawer) mobileNavDrawer.classList.remove('open');
    document.body.style.overflow = '';
  };

  const openDrawer = () => {
    if (mobileNavDrawer) mobileNavDrawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileNavDrawer.classList.contains('is-open') || mobileNavDrawer.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (mobileDrawerCloseBtn) {
      mobileDrawerCloseBtn.addEventListener('click', closeDrawer);
    }

    if (mobileNavOverlay) {
      mobileNavOverlay.addEventListener('click', closeDrawer);
    }

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  // Smooth Navigation Anchor Jumps
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      if (!targetId) return;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  
  // 7. Auto-sync phone & WhatsApp numbers from window.LBK_CONFIG
  if (window.LBK_CONFIG) {
    const { callTel, callNumber, whatsappNumber } = window.LBK_CONFIG;
    if (callTel) {
      document.querySelectorAll('a[href^="tel:"]').forEach(el => {
        el.setAttribute('href', `tel:${callTel}`);
      });
    }
    if (callNumber) {
      document.querySelectorAll('.lbk-phone-display').forEach(el => {
        el.textContent = callNumber;
      });
    }
    if (whatsappNumber) {
      document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
        const prefilledText = "Hello%20Lalchand%20ji%2C%20I%20would%20like%20to%20inquire%20about%20civil%20contracting%20and%20stone%20work%20for%20my%20project.";
        el.setAttribute('href', `https://wa.me/${whatsappNumber}?text=${prefilledText}`);
      });
    }
  }

  console.log('LBK Cinematic Experience Loaded Successfully.');
});
