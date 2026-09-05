/**
 * LBK Surfaces - Contact & Project Inquiry View
 * Minimal editorial inquiry form with blueprint/photo drag-and-drop upload zone
 */

import { showToast } from '../animations.js';

export function renderContact() {
  return `
    <div class="page-view-container">
      
      <header class="work-page-header">
        <div class="site-container">
          <span class="label-eyebrow">Direct Contact & Estimates</span>
          <h1 class="heading-huge" style="margin-bottom: 1.5rem;">
            LET'S CREATE SOMETHING BEAUTIFUL.
          </h1>
          <p class="text-editorial-lead">
            Contact our project desk to schedule an architectural consultation, request an itemized rate estimate, or share drawings for tender evaluation.
          </p>
        </div>
      </header>

      <section class="site-container">
        <div class="contact-layout">
          
          <!-- LEFT: DIRECT DETAILS -->
          <div class="contact-direct-info reveal-init">
            <div class="contact-info-block">
              <span class="text-meta" style="color: var(--accent-stone);">PHONE</span>
              <a href="tel:+919820012345" style="font-size: 1.2rem; font-weight: 500;">+91 98200 12345</a>
              <span style="font-size: 0.85rem; color: var(--text-muted);">Mon — Sat, 9:00 AM — 7:30 PM IST</span>
            </div>

            <div class="contact-info-block">
              <span class="text-meta" style="color: var(--accent-stone);">WHATSAPP INQUIRIES</span>
              <a href="https://wa.me/919820012345?text=Hello%20LBK%20Surfaces,%20I%20would%20like%20to%20request%20a%20quote." target="_blank" rel="noopener noreferrer" style="font-size: 1.2rem; font-weight: 500;">
                +91 98200 12345 →
              </a>
              <span style="font-size: 0.85rem; color: var(--text-muted);">Instant drawing review & site video dispatch</span>
            </div>

            <div class="contact-info-block">
              <span class="text-meta" style="color: var(--accent-stone);">EMAIL</span>
              <a href="mailto:inquire@lbksurfaces.com" style="font-size: 1.2rem; font-weight: 500;">inquire@lbksurfaces.com</a>
              <span style="font-size: 0.85rem; color: var(--text-muted);">Tenders, technical RFPs & BOQ specifications</span>
            </div>

            <div class="contact-info-block">
              <span class="text-meta" style="color: var(--accent-stone);">ATELIER & WAREHOUSE LOCATIONS</span>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
                <strong>Mumbai Atelier:</strong> Laxmi Industrial Estate, New Link Rd, Andheri West, Mumbai, 400053<br><br>
                <strong>Dry-Lay Warehouse:</strong> Bhiwandi Stone Logistics Park, Mumbai-Nashik Expressway<br><br>
                <strong>Pune Studio:</strong> Kalyani Nagar, Pune, Maharashtra 411006
              </p>
            </div>
          </div>

          <!-- RIGHT: INQUIRY FORM -->
          <div class="reveal-init stagger-2">
            <form class="inquiry-form" id="inquiry-form">
              
              <div class="form-row-2col">
                <div class="form-group">
                  <label for="form-name" class="form-label">Full Name *</label>
                  <input type="text" id="form-name" class="form-input" required placeholder="Ar. Rajesh Verma / Sameer Mehta" />
                </div>
                <div class="form-group">
                  <label for="form-phone" class="form-label">Phone Number *</label>
                  <input type="tel" id="form-phone" class="form-input" required placeholder="+91 98765 43210" />
                </div>
              </div>

              <div class="form-row-2col">
                <div class="form-group">
                  <label for="form-email" class="form-label">Email Address *</label>
                  <input type="email" id="form-email" class="form-input" required placeholder="contact@studio.com" />
                </div>
                <div class="form-group">
                  <label for="form-project-type" class="form-label">Project Type *</label>
                  <select id="form-project-type" class="form-select" required>
                    <option value="" disabled selected>Select Specialization</option>
                    <option value="Italian Marble Installation">Italian Marble Installation & Polishing</option>
                    <option value="Large-Format Tile Slabs">Large-Format Porcelain Slabs (3200x1600)</option>
                    <option value="Granite Staircase / Paving">Granite Staircase & Countertops</option>
                    <option value="Wall Cladding">Stone Wall Cladding (Fluted / Mechanical)</option>
                    <option value="Luxury Bathroom Tiling">Luxury Bathroom / Wet Room Tiling</option>
                    <option value="Complete Civil & Finishing">Complete Civil Screed & Finishing Work</option>
                    <option value="Multiple Surface Scope">Full Residence / Commercial Scope</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="form-location" class="form-label">Project Location & City *</label>
                <input type="text" id="form-location" class="form-input" required placeholder="e.g. Bandra West, Mumbai or Boat Club Rd, Pune" />
              </div>

              <div class="form-group">
                <label for="form-message" class="form-label">Project Details / Estimated Area (Sq.Ft)</label>
                <textarea id="form-message" class="form-textarea" placeholder="Describe the architectural scope, approx floor area, preferred materials, and expected timeline..."></textarea>
              </div>

              <!-- DRAG-AND-DROP BLUEPRINTS / PHOTOS -->
              <div class="form-group">
                <label class="form-label">UPLOAD PROJECT PHOTOS / PLANS (OPTIONAL)</label>
                <div class="dropzone-container" id="file-dropzone">
                  <svg class="dropzone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <div class="dropzone-text">
                    <strong>Click to upload</strong> or drag and drop architectural drawings, floor plans, or site photos (PDF, DWG, PNG, JPG up to 25MB)
                  </div>
                  <input type="file" id="file-input" multiple style="display: none;" accept="image/*,.pdf,.dwg" />
                </div>
                <div class="dropzone-preview-list" id="dropzone-preview-list"></div>
              </div>

              <div style="margin-top: 1rem;">
                <button type="submit" class="nav-cta-btn" style="padding: 16px 36px; font-size: 0.8rem;">
                  REQUEST A QUOTE <span class="arrow" style="margin-left: 6px;">→</span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

    </div>
  `;
}

export function bindContactEvents(container) {
  const form = container.querySelector('#inquiry-form');
  const dropzone = container.querySelector('#file-dropzone');
  const fileInput = container.querySelector('#file-input');
  const previewList = container.querySelector('#dropzone-preview-list');

  let uploadedFiles = [];

  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('drag-over');
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('drag-over');
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('drag-over');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files);
      }
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files && fileInput.files.length > 0) {
        handleFiles(fileInput.files);
      }
    });
  }

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      uploadedFiles.push(files[i]);
    }
    renderPreviews();
  }

  function renderPreviews() {
    if (!previewList) return;
    previewList.innerHTML = uploadedFiles.map((f, i) => `
      <div class="file-preview-pill">
        <span>📎 ${f.name} (${(f.size / 1024).toFixed(0)} KB)</span>
        <button type="button" data-index="${i}" class="remove-file-btn" style="color: red; font-size: 10px; cursor: pointer;">✕</button>
      </div>
    `).join('');

    const removeBtns = previewList.querySelectorAll('.remove-file-btn');
    removeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = parseInt(btn.dataset.index);
        uploadedFiles.splice(index, 1);
        renderPreviews();
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#form-name').value;
      const type = form.querySelector('#form-project-type').value;

      showToast(`Thank you, ${name}. Your inquiry for "${type}" has been received. Our project desk will contact you within 4 hours.`);
      form.reset();
      uploadedFiles = [];
      renderPreviews();
    });
  }
}
