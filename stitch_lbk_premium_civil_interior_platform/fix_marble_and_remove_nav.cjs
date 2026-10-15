const fs = require('fs');
const path = require('path');

// 1. Rebuild stoneViewer3d.js with luminous, authentic stone textures and bright studio lighting
const stoneViewerJs = `/**
 * LBK Surfaces - Three.js Interactive 3D Stone Slab Inspection Engine
 * Renders real-time 3D architectural slab with authentic mineral textures, 
 * bright studio illumination, and interactive 360-degree rotation.
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
    this.targetRotation = { x: 0.12, y: -0.32 };
    this.currentRotation = { x: 0.12, y: -0.32 };
    this.currentType = 'marble';

    this.init();
  }

  init() {
    const width = this.container.clientWidth || 640;
    const height = this.container.clientHeight || 420;

    // 1. Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 4.3);

    // 2. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

    // 3. Bright Studio Illumination (Ensures stone is NEVER in dark shadow)
    const ambientLight = new THREE.AmbientLight(0xfffbf2, 1.4);
    this.scene.add(ambientLight);

    // Frontal Key Light
    const frontKeyLight = new THREE.DirectionalLight(0xffffff, 1.5);
    frontKeyLight.position.set(0, 1, 5);
    this.scene.add(frontKeyLight);

    // Top-Right Specular Light (Catches diamond gloss reflection)
    const topLight = new THREE.DirectionalLight(0xffecd0, 1.2);
    topLight.position.set(4, 6, 4);
    this.scene.add(topLight);

    // Left Rim Light
    const leftRimLight = new THREE.DirectionalLight(0xdcd5c5, 0.9);
    leftRimLight.position.set(-5, -2, 3);
    this.scene.add(leftRimLight);

    // 4. Create Procedural Authentic Textures
    this.marbleTexture = this.generateMarbleTexture();
    this.graniteTexture = this.generateGraniteTexture();

    // Architectural Slab: 2.4m x 1.5m x 20mm thickness
    const geometry = new THREE.BoxGeometry(2.4, 1.5, 0.12);

    this.material = new THREE.MeshStandardMaterial({
      map: this.marbleTexture,
      roughness: 0.1,
      metalness: 0.05,
      bumpMap: this.marbleTexture,
      bumpScale: 0.003
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

    // Pure Luminous Makrana White / Italian Carrara Base
    const gradient = ctx.createLinearGradient(0, 0, 1024, 1024);
    gradient.addColorStop(0, '#FFFFFF');
    gradient.addColorStop(0.5, '#FBF9F5');
    gradient.addColorStop(1, '#F7F5F0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1024, 1024);

    // Calcite Crystalline Texture & Grain
    for (let i = 0; i < 6000; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      ctx.fillStyle = Math.random() > 0.6 ? 'rgba(235, 230, 220, 0.45)' : 'rgba(255, 255, 255, 0.7)';
      ctx.fillRect(x, y, 2, 2);
    }

    // Delicate Natural Meandering Veins (Smoky Grey & Warm Gold)
    const drawVein = (startX, startY, color, width, branches) => {
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      let currX = startX;
      let currY = startY;

      for (let j = 0; j < 35; j++) {
        currX += (Math.random() - 0.35) * 55;
        currY += (Math.random() - 0.25) * 45;
        ctx.lineTo(currX, currY);

        if (branches && Math.random() > 0.65) {
          ctx.save();
          ctx.strokeStyle = color;
          ctx.lineWidth = width * 0.45;
          ctx.beginPath();
          ctx.moveTo(currX, currY);
          ctx.lineTo(currX + (Math.random() - 0.5) * 70, currY + Math.random() * 50);
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

    // Primary Statuario Veins
    drawVein(80, 40, 'rgba(175, 170, 160, 0.5)', 4, true);
    drawVein(220, 150, 'rgba(197, 161, 91, 0.6)', 3.5, true);  // Luxury Gold Vein
    drawVein(480, 80, 'rgba(160, 155, 145, 0.45)', 5, true);
    drawVein(680, 360, 'rgba(205, 175, 115, 0.5)', 3.2, true); // Gold Accent
    drawVein(260, 680, 'rgba(180, 175, 165, 0.4)', 4, false);

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    return texture;
  }

  generateGraniteTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Rich Rajasthan Granite Base (Warm Charcoal Slate, clearly illuminated, never pure black)
    const bgGradient = ctx.createLinearGradient(0, 0, 1024, 1024);
    bgGradient.addColorStop(0, '#3A3D3C');
    bgGradient.addColorStop(0.5, '#454847');
    bgGradient.addColorStop(1, '#343635');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 1024, 1024);

    // Crystalline Mineral Grains (Quartz, Feldspar, Mica Flakes)
    for (let i = 0; i < 22000; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      const size = Math.random() * 3.5 + 1;
      const rand = Math.random();

      if (rand > 0.88) {
        // Shimmering Golden & Bronze Mica Spangles
        ctx.fillStyle = 'rgba(235, 195, 115, 0.9)';
      } else if (rand > 0.72) {
        // Translucent White Quartz Crystals
        ctx.fillStyle = 'rgba(245, 245, 250, 0.85)';
      } else if (rand > 0.45) {
        // Light Slate Grey Feldspar
        ctx.fillStyle = 'rgba(130, 135, 132, 0.75)';
      } else if (rand > 0.25) {
        // Medium Granite Grain
        ctx.fillStyle = 'rgba(85, 88, 86, 0.8)';
      } else {
        // Deep obsidian fleck
        ctx.fillStyle = 'rgba(25, 27, 26, 0.85)';
      }
      ctx.fillRect(x, y, size, size);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    return texture;
  }

  setMaterialType(type) {
    if (!this.material) return;
    this.currentType = type;

    if (type === 'marble') {
      this.material.map = this.marbleTexture;
      this.material.bumpMap = this.marbleTexture;
      this.material.roughness = 0.1;
      this.material.metalness = 0.05;
      this.targetRotation.y = -0.32;
    } else {
      this.material.map = this.graniteTexture;
      this.material.bumpMap = this.graniteTexture;
      this.material.roughness = 0.18;
      this.material.metalness = 0.15;
      this.targetRotation.y = 0.32;
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

    // Scroll-linked subtle rotation
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
`;

fs.writeFileSync(path.join('..', 'src', 'js', 'stoneViewer3d.js'), stoneViewerJs, 'utf8');
console.log('stoneViewer3d.js rewritten with warm luminous marble and rich granite textures!');

// 2. Remove <aside id="scene-nav"> from index.html
let html = fs.readFileSync(path.join('..', 'index.html'), 'utf8');

// Regex to remove the entire <aside id="scene-nav">...</aside> block
html = html.replace(/<!-- FLOATING CINEMATIC NAVIGATION STRIP -->[\s\S]*?<\/aside>/, '');
html = html.replace(/<aside[^>]*id="scene-nav"[\s\S]*?<\/aside>/, '');

fs.writeFileSync(path.join('..', 'index.html'), html, 'utf8');
console.log('index.html updated: #scene-nav completely removed!');

// 3. Make scrollytelling.js safe without #scene-nav
let scrollyJs = fs.readFileSync(path.join('..', 'src', 'js', 'scrollytelling.js'), 'utf8');
scrollyJs = scrollyJs.replace('this.initSceneNav();', '// this.initSceneNav(); (removed floating scene HUD as requested)');
fs.writeFileSync(path.join('..', 'src', 'js', 'scrollytelling.js'), scrollyJs, 'utf8');
console.log('scrollytelling.js updated!');
