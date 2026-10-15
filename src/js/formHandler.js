/**
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
