const fs = require('fs');
const path = require('path');

const mainPath = path.resolve(__dirname, '../src/js/main.js');
let code = fs.readFileSync(mainPath, 'utf8');

const oldNav = `  // 6. Mobile Menu Drawer Navigation
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('is-open');
      const isOpen = mobileNavDrawer.classList.contains('is-open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }`;

const newNav = `  // 6. Mobile Menu Drawer Navigation
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
  }`;

if (code.includes(oldNav)) {
  code = code.replace(oldNav, newNav);
  fs.writeFileSync(mainPath, code, 'utf8');
  console.log('Successfully updated main.js with enhanced mobile drawer controls!');
} else {
  console.log('Warning: oldNav pattern not found in main.js, checking alternate...');
}
