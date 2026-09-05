/**
 * LBK Surfaces - Video Lightbox & Modal Controller
 */

class VideoLightbox {
  constructor() {
    this.modalEl = null;
    this.videoEl = null;
    this.titleEl = null;
    this.init();
  }

  init() {
    this.createModalDOM();
    this.attachEventListeners();
  }

  createModalDOM() {
    const backdrop = document.createElement('div');
    backdrop.className = 'video-modal-backdrop';
    backdrop.id = 'video-lightbox-modal';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');

    backdrop.innerHTML = `
      <div class="video-modal-dialog">
        <button class="video-modal-close" id="video-modal-close" aria-label="Close Video">
          <span>Close</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <video class="video-element" id="lightbox-video-element" controls playsinline preload="metadata">
          <source src="" type="video/mp4">
          Your browser does not support video playback.
        </video>
      </div>
    `;

    document.body.appendChild(backdrop);
    this.modalEl = backdrop;
    this.videoEl = backdrop.querySelector('#lightbox-video-element');
  }

  attachEventListeners() {
    // Close button
    const closeBtn = this.modalEl.querySelector('#video-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Click outside dialog to close
    this.modalEl.addEventListener('click', (e) => {
      if (e.target === this.modalEl) {
        this.close();
      }
    });

    // ESC key to close
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalEl.classList.contains('active')) {
        this.close();
      }
    });
  }

  open(videoUrl, title = '') {
    if (!this.videoEl) return;
    this.videoEl.src = videoUrl;
    this.modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.videoEl.play().catch(() => {
      // Autoplay with audio might be blocked by browsers, which is fine
    });
  }

  close() {
    if (!this.modalEl) return;
    this.modalEl.classList.remove('active');
    document.body.style.overflow = '';
    if (this.videoEl) {
      this.videoEl.pause();
      this.videoEl.currentTime = 0;
      this.videoEl.src = '';
    }
  }
}

export const lightbox = new VideoLightbox();
