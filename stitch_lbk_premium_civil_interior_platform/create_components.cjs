const fs = require('fs');
const path = require('path');

// 1. beforeAfter.js
const beforeAfterContent = `/**
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
`;

fs.writeFileSync(path.join('..', 'src', 'js', 'beforeAfter.js'), beforeAfterContent, 'utf8');
console.log('beforeAfter.js created successfully!');

// 2. formHandler.js
const formHandlerContent = `/**
 * LBK Surfaces - Consultation & Direct Quote Form Handler
 */

export function initConsultationForm() {
  const form = document.getElementById('consultation-form');
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');
  const submitSpinner = document.getElementById('submit-spinner');

  if (!form || !submitBtn) return;

  // Active label highlight on input focus
  const formInputs = form.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      const parent = input.closest('.form-group');
      if (parent) {
        const lbl = parent.querySelector('label');
        if (lbl) lbl.classList.add('text-primary');
      }
    });

    input.addEventListener('blur', () => {
      const parent = input.closest('.form-group');
      if (parent) {
        const lbl = parent.querySelector('label');
        if (lbl) lbl.classList.remove('text-primary');
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (submitText && submitSpinner) {
      submitText.textContent = 'Transmitting Specifications...';
      submitSpinner.classList.remove('hidden');
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-80', 'cursor-not-allowed');

      setTimeout(() => {
        submitText.textContent = 'Request Received ✓';
        submitSpinner.classList.add('hidden');
        submitBtn.classList.remove('opacity-80', 'cursor-not-allowed');
        submitBtn.classList.add('bg-green-700', 'text-white');

        setTimeout(() => {
          alert('Blueprint Submission Confirmed. Master Contractor Lalchand Kumawat will review your inquiry and connect within 24 hours.');
          form.reset();
          submitText.textContent = 'Submit Consultation Request';
          submitBtn.classList.remove('bg-green-700', 'text-white');
          submitBtn.disabled = false;
        }, 400);
      }, 1200);
    }
  });
}
`;

fs.writeFileSync(path.join('..', 'src', 'js', 'formHandler.js'), formHandlerContent, 'utf8');
console.log('formHandler.js created successfully!');
