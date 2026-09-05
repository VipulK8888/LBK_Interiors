/**
 * LBK Surfaces - Editorial Animations & Observers
 */

let observer = null;

export function initScrollAnimations() {
  if (observer) {
    observer.disconnect();
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve once revealed for performance
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  const animatables = document.querySelectorAll('.reveal-init, .reveal-curtain-wrap, .slow-zoom-in');
  animatables.forEach(el => observer.observe(el));
}

export function showToast(message) {
  let toast = document.querySelector('#toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
