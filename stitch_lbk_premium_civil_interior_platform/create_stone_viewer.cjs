const fs = require('fs');
const path = require('path');

const jsContent = `/**
 * LBK Surfaces - Three.js Interactive 3D Stone Slab Inspection Engine
 * Renders real-time 3D architectural slab with procedural veining, specular luster, and drag orbit
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
    this.targetRotation = { x: 0.15, y: -0.35 };
    this.currentRotation = { x: 0.15, y: -0.35 };
    this.currentType = 'marble';

    this.init();
  }

  init() {
    const width = this.container.clientWidth || 640;
    const height = this.container.clientHeight || 400;

    // 1. Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 4.2);

    // 2. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

    // 3. Lighting Setup for Luxury Stone Specularity
    const ambientLight = new THREE.AmbientLight(0xfff8ee, 0.9);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight1.position.set(5, 7, 6);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xc5a15b, 0.8);
    dirLight2.position.set(-5, -3, 4);
    this.scene.add(dirLight2);

    const rimLight = new THREE.PointLight(0xfff5dd, 1.2, 10);
    rimLight.position.set(0, 4, 3);
    this.scene.add(rimLight);

    // 4. Create Stone Slab Mesh
    this.marbleTexture = this.generateMarbleTexture();
    this.graniteTexture = this.generateGraniteTexture();

    const geometry = new THREE.BoxGeometry(2.4, 1.5, 0.12);
    
    this.material = new THREE.MeshStandardMaterial({
      map: this.marbleTexture,
      roughness: 0.12,
      metalness: 0.08,
      bumpMap: this.marbleTexture,
      bumpScale: 0.005
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

    // Base Warm White Makrana / Carrara
    ctx.fillStyle = '#F8F6F2';
    ctx.fillRect(0, 0, 1024, 1024);

    // Soft crystalline noise
    for (let i = 0; i < 4000; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(230,225,215,0.3)' : 'rgba(255,255,255,0.4)';
      ctx.fillRect(x, y, 2, 2);
    }

    // Delicate Smoky Grey & Gold Meandering Veins
    const drawVein = (startX, startY, strokeColor, lineWidth, branches) => {
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      let currX = startX;
      let currY = startY;

      for (let j = 0; j < 30; j++) {
        currX += (Math.random() - 0.3) * 60;
        currY += (Math.random() - 0.2) * 50;
        ctx.lineTo(currX, currY);

        if (branches && Math.random() > 0.6) {
          ctx.save();
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = lineWidth * 0.5;
          ctx.beginPath();
          ctx.moveTo(currX, currY);
          ctx.lineTo(currX + (Math.random() - 0.5) * 80, currY + Math.random() * 60);
          ctx.stroke();
          ctx.restore();
        }
      }
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    };

    drawVein(100, 50, 'rgba(140, 135, 125, 0.45)', 4, true);
    drawVein(250, 200, 'rgba(197, 161, 91, 0.55)', 3.5, true);
    drawVein(500, 100, 'rgba(110, 105, 95, 0.4)', 5, true);
    drawVein(700, 400, 'rgba(180, 150, 100, 0.4)', 3, true);
    drawVein(300, 700, 'rgba(120, 115, 110, 0.35)', 4, false);

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    return texture;
  }

  generateGraniteTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Plutonic Deep Obsidian / Charcoal Black Base
    ctx.fillStyle = '#1A1C1A';
    ctx.fillRect(0, 0, 1024, 1024);

    // Granite Crystalline Clusters (Quartz, Feldspar, Mica flakes)
    for (let i = 0; i < 18000; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      const size = Math.random() * 3 + 1;
      const rand = Math.random();

      if (rand > 0.94) {
        // Gold / bronze mica shimmer
        ctx.fillStyle = 'rgba(215, 175, 95, 0.85)';
      } else if (rand > 0.82) {
        // Quartz translucent white
        ctx.fillStyle = 'rgba(240, 240, 245, 0.7)';
      } else if (rand > 0.5) {
        // Dark slate grey crystal
        ctx.fillStyle = 'rgba(75, 78, 76, 0.6)';
      } else {
        // Jet black cluster
        ctx.fillStyle = 'rgba(10, 10, 10, 0.8)';
      }
      ctx.fillRect(x, y, size, size);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    return texture;
  }

  setMaterialType(type) {
    if (this.currentType === type || !this.material) return;
    this.currentType = type;

    if (type === 'marble') {
      this.material.map = this.marbleTexture;
      this.material.bumpMap = this.marbleTexture;
      this.material.roughness = 0.12;
      this.material.metalness = 0.08;
      this.targetRotation.y = -0.35;
    } else {
      this.material.map = this.graniteTexture;
      this.material.bumpMap = this.graniteTexture;
      this.material.roughness = 0.22;
      this.material.metalness = 0.16;
      this.targetRotation.y = 0.35;
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

      // Clamp vertical tilt
      this.targetRotation.x = Math.max(-0.6, Math.min(0.6, this.targetRotation.x));

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

    // Scroll-linked subtle rotation
    window.addEventListener('scroll', () => {
      const rect = this.container.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        if (!this.isDragging) {
          this.targetRotation.y = (progress - 0.5) * 0.8;
        }
      }
    }, { passive: true });

    // Handle Window Resize
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
      // Smooth interpolation (damping)
      this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * 0.08;
      this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * 0.08;

      // Idle gentle float
      const time = Date.now() * 0.001;
      const idleFloatY = Math.sin(time * 0.8) * 0.03;

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
`;

fs.writeFileSync(path.join('..', 'src', 'js', 'stoneViewer3d.js'), jsContent, 'utf8');
console.log('stoneViewer3d.js created successfully!');
