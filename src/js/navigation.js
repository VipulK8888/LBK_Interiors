/**
 * LBK Surfaces - Navigation Controller
 */

export function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('#mobile-menu-btn');
  const mobileDrawer = document.querySelector('#mobile-nav-drawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky header transition on scroll
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close mobile menu on clicking any link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  function openMobileMenu() {
    mobileToggle.classList.add('active');
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileToggle) mobileToggle.classList.remove('active');
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Update active state based on route
  window.addEventListener('hashchange', updateActiveLinks);
  updateActiveLinks();

  function updateActiveLinks() {
    const hash = window.location.hash || '#home';
    const baseRoute = hash.split('/')[0];

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href === hash || href === baseRoute)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}
