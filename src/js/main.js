/**
 * LBK Surfaces - Main Application Entrypoint
 */

import '../styles/variables.css';
import '../styles/base.css';
import '../styles/components.css';
import '../styles/animations.css';

import { initNavigation } from './navigation.js';
import { initRouter } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.querySelector('#app-view');
  
  // Initialize navigation & mobile drawer
  initNavigation();

  // Initialize view router
  initRouter(rootElement);

  // Subtle hero parallax on scroll (only if hero exists)
  window.addEventListener('scroll', () => {
    const heroImg = document.querySelector('.hero-image');
    if (heroImg && window.scrollY < window.innerHeight) {
      const offset = window.scrollY * 0.25;
      heroImg.style.transform = `translateY(${offset}px) scale(1.05)`;
    }
  }, { passive: true });
});
