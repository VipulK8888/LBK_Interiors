/**
 * LBK Surfaces - Before & After Interactive Comparison Slider
 * Precision split drag slider for raw masonry vs finished luxury stone
 */

export function initBeforeAfterSlider() {
  const container = document.getElementById('ba-slider-container');
  const beforeWrap = document.getElementById('ba-before-wrap');
  const handle = document.getElementById('ba-handle');

  if (!container || !beforeWrap || !handle) return;

  let isDragging = false;

  const updateSlider = (clientX) => {
    const rect = container.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    const percentage = (offsetX / rect.width) * 100;
    beforeWrap.style.width = percentage + '%';
    handle.style.left = percentage + '%';
  };

  handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  container.addEventListener('click', (e) => {
    updateSlider(e.clientX);
  });

  // Touch support for mobile devices
  handle.addEventListener('touchstart', (e) => {
    isDragging = true;
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      updateSlider(e.touches[0].clientX);
    }
  }, { passive: true });
}
