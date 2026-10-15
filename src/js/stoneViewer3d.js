/**
 * LBK Surfaces - Three.js Interactive 3D Stone Slab Inspection Engine
 * Uses MeshPhongMaterial for guaranteed bright luminous white marble and rich textured granite.
 */

import * as THREE from 'three';

export class StoneViewer3D {
  constructor(containerElement) {
    this.container = containerElement;
    if (!this.container) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.slabMesh = null;
    this.animationFrameId = null;

    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.targetRotation = { x: 0.1, y: -0.3 };
    this.currentRotation = { x: 0.1, y: -0.3 };
    this.currentType = 'marble';

    this.init();
  }

  init() {
    const width = this.container.clientWidth || 640;
    const height = this.container.clientHeight || 420;

    // 1. Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 4.2);

    // 2. Renderer with sRGB encoding & antialiasing
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

    // 3. Bright Studio Illumination (Ambient + Front + Top + Rim)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    this.scene.add(ambientLight);

    const frontKey = new THREE.DirectionalLight(0xffffff, 1.2);
    frontKey.position.set(0, 2, 5);
    this.scene.add(frontKey);

    const topSoft = new THREE.DirectionalLight(0xfff7e8, 0.8);
    topSoft.position.set(3, 5, 2);
    this.scene.add(topSoft);

    const fillLight = new THREE.DirectionalLight(0xf0ece1, 0.6);
    fillLight.position.set(-4, -1, 3);
    this.scene.add(fillLight);

    // 4. Generate High-Res Textures
    this.marbleTexture = this.generateMarbleTexture();
    this.graniteTexture = this.generateGraniteTexture();

    // Architectural Slab Geometry (2.4m x 1.5m x 120mm)
    const geometry = new THREE.BoxGeometry(2.4, 1.5, 0.12);

    // MeshPhongMaterial avoids standard PBR black environment reflection issue
    this.material = new THREE.MeshPhongMaterial({
      map: this.marbleTexture,
      color: 0xffffff,
      specular: 0x333333,
      shininess: 70,
      flatShading: false
    });

    this.slabMesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.slabMesh);

    // 5. Interaction Listeners
    this.bindEvents();

    // 6. Start Render Loop
    this.animate();
  }

  generateMarbleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Luminous Makrana / Statuario Pure White Base
    ctx.fillStyle = '#FAFAF7';
    ctx.fillRect(0, 0, 1024, 1024);

    // Subtle Crystalline Calcite Noise
    for (let i = 0; i < 8000; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      ctx.fillStyle = Math.random() > 0.6 ? 'rgba(235, 230, 222, 0.5)' : 'rgba(255, 255, 255, 0.8)';
      ctx.fillRect(x, y, 2, 2);
    }

    // Natural Organic Veins (Delicate Grey & Muted Gold)
    const drawVein = (startX, startY, color, width, branches) => {
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      let currX = startX;
      let currY = startY;

      for (let j = 0; j < 38; j++) {
        currX += (Math.random() - 0.35) * 50;
        currY += (Math.random() - 0.25) * 45;
        ctx.lineTo(currX, currY);

        if (branches && Math.random() > 0.6) {
          ctx.save();
          ctx.strokeStyle = color;
          ctx.lineWidth = width * 0.45;
          ctx.beginPath();
          ctx.moveTo(currX, currY);
          ctx.lineTo(currX + (Math.random() - 0.5) * 70, currY + Math.random() * 55);
          ctx.stroke();
          ctx.restore();
        }
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    };

    // Primary Smoky Grey & Gold Veins
    drawVein(60, 40, 'rgba(145, 140, 130, 0.55)', 4.5, true);
    drawVein(220, 160, 'rgba(197, 161, 91, 0.65)', 3.8, true);   // Gold Marble Vein
    drawVein(460, 90, 'rgba(135, 130, 120, 0.5)', 5, true);
    drawVein(660, 320, 'rgba(205, 170, 100, 0.55)', 3.5, true);  // Amber Accent
    drawVein(280, 680, 'rgba(150, 145, 135, 0.45)', 4, false);
    drawVein(800, 600, 'rgba(165, 160, 150, 0.4)', 3.2, true);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  generateGraniteTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Warm Granite Stone Base (Visible mineral slate, NOT pure black)
    ctx.fillStyle = '#4A4D4C';
    ctx.fillRect(0, 0, 1024, 1024);

    // Granite Mineral Grains (Quartz, Feldspar, Mica Flakes)
    for (let i = 0; i < 24000; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      const size = Math.random() * 3.5 + 1;
      const rand = Math.random();

      if (rand > 0.88) {
        // Gold / Bronze Mica Spangles
        ctx.fillStyle = 'rgba(235, 195, 115, 0.95)';
      } else if (rand > 0.7) {
        // Translucent White Quartz
        ctx.fillStyle = 'rgba(245, 245, 250, 0.85)';
      } else if (rand > 0.4) {
        // Slate Grey Feldspar
        ctx.fillStyle = 'rgba(140, 145, 142, 0.8)';
      } else if (rand > 0.2) {
        // Charcoal Granite Grain
        ctx.fillStyle = 'rgba(85, 90, 88, 0.85)';
      } else {
        // Deep obsidian fleck
        ctx.fillStyle = 'rgba(30, 32, 31, 0.85)';
      }
      ctx.fillRect(x, y, size, size);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  setMaterialType(type) {
    if (!this.material) return;
    this.currentType = type;

    if (type === 'marble') {
      this.material.map = this.marbleTexture;
      this.material.color.setHex(0xffffff);
      this.material.shininess = 75;
      this.targetRotation.y = -0.3;
    } else {
      this.material.map = this.graniteTexture;
      this.material.color.setHex(0xf5f5f5);
      this.material.shininess = 50;
      this.targetRotation.y = 0.3;
    }
    this.material.needsUpdate = true;
  }

  bindEvents() {
    const dom = this.renderer.domElement;

    const onStart = (clientX, clientY) => {
      this.isDragging = true;
      this.previousMousePosition = { x: clientX, y: clientY };
    };

    const onMove = (clientX, clientY) => {
      if (!this.isDragging) return;
      const deltaX = clientX - this.previousMousePosition.x;
      const deltaY = clientY - this.previousMousePosition.y;

      this.targetRotation.y += deltaX * 0.008;
      this.targetRotation.x += deltaY * 0.008;
      this.targetRotation.x = Math.max(-0.55, Math.min(0.55, this.targetRotation.x));

      this.previousMousePosition = { x: clientX, y: clientY };
    };

    const onEnd = () => {
      this.isDragging = false;
    };

    dom.addEventListener('mousedown', (e) => onStart(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', onEnd);

    dom.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) onStart(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchend', onEnd);

    // Scroll-linked rotation
    window.addEventListener('scroll', () => {
      const rect = this.container.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        if (!this.isDragging) {
          this.targetRotation.y = (progress - 0.5) * 0.7;
        }
      }
    }, { passive: true });

    window.addEventListener('resize', () => {
      if (!this.container || !this.renderer || !this.camera) return;
      const w = this.container.clientWidth;
      const h = this.container.clientHeight;
      if (w > 0 && h > 0) {
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
      }
    });
  }

  animate() {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    if (this.slabMesh) {
      this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * 0.08;
      this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * 0.08;

      const time = Date.now() * 0.001;
      const idleFloatY = Math.sin(time * 0.8) * 0.025;

      this.slabMesh.rotation.x = this.currentRotation.x;
      this.slabMesh.rotation.y = this.currentRotation.y;
      this.slabMesh.position.y = idleFloatY;
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.renderer && this.renderer.domElement) {
      this.renderer.domElement.remove();
    }
  }
}
