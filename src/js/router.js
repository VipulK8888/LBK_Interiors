/**
 * LBK Surfaces - Client-Side View Router
 */

import { renderHome, bindHomeEvents } from './views/home.js';
import { renderWork, bindWorkEvents } from './views/work.js';
import { renderProjectDetail, bindProjectDetailEvents } from './views/projectDetail.js';
import { renderServices } from './views/services.js';
import { renderAbout } from './views/about.js';
import { renderArticles } from './views/articles.js';
import { renderContact, bindContactEvents } from './views/contact.js';
import { initScrollAnimations } from './animations.js';

let appRoot = null;
let currentCategory = 'ALL';

export function initRouter(rootElement) {
  appRoot = rootElement;
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

export function navigateTo(hash) {
  window.location.hash = hash;
}

function handleRoute() {
  if (!appRoot) return;

  const rawHash = window.location.hash || '#home';
  const cleanHash = rawHash.replace(/^#/, '');
  const [routePart, queryPart] = cleanHash.split('?');
  const segments = routePart.split('/');
  const base = segments[0] || 'home';
  const param = segments[1] || null;

  // Check category parameter in query string
  if (queryPart) {
    const params = new URLSearchParams(queryPart);
    if (params.has('cat')) {
      currentCategory = params.get('cat');
    }
  }

  window.scrollTo({ top: 0, behavior: 'instant' });

  switch (base) {
    case 'home':
      document.title = 'LBK SURFACES — Atelier for Architectural Stone & Luxury Surfaces';
      appRoot.innerHTML = renderHome();
      bindHomeEvents(appRoot);
      break;

    case 'work':
      document.title = 'Our Work — LBK Surfaces Architectural Portfolio';
      appRoot.innerHTML = renderWork(currentCategory);
      bindWorkEvents(appRoot, currentCategory, (newCat) => {
        currentCategory = newCat;
        appRoot.innerHTML = renderWork(currentCategory);
        bindWorkEvents(appRoot, currentCategory, (cat) => {
          currentCategory = cat;
          handleRoute();
        });
        initScrollAnimations();
      });
      break;

    case 'project':
      if (param) {
        document.title = `${param.replace(/-/g, ' ').toUpperCase()} — LBK Surfaces Project Case Study`;
        appRoot.innerHTML = renderProjectDetail(param);
        bindProjectDetailEvents(appRoot);
      } else {
        window.location.hash = '#work';
        return;
      }
      break;

    case 'services':
      document.title = 'Surface Disciplines & Capabilities — LBK Surfaces';
      appRoot.innerHTML = renderServices();
      break;

    case 'about':
      document.title = 'About the Atelier & Philosophy — LBK Surfaces';
      appRoot.innerHTML = renderAbout();
      break;

    case 'articles':
    case 'article':
      document.title = 'Monograph Insights & Essays — LBK Surfaces';
      appRoot.innerHTML = renderArticles(param);
      break;

    case 'contact':
      document.title = 'Inquire & Request Quote — LBK Surfaces';
      appRoot.innerHTML = renderContact();
      bindContactEvents(appRoot);
      break;

    default:
      window.location.hash = '#home';
      return;
  }

  // Trigger page fade-in
  const pageContainer = appRoot.querySelector('.page-view-container');
  if (pageContainer) {
    requestAnimationFrame(() => {
      pageContainer.classList.add('page-loaded');
    });
  }

  // Re-observe newly rendered elements
  setTimeout(() => {
    initScrollAnimations();
  }, 50);
}
