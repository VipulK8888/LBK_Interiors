const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../src/js/hero3dScrolly.js');

const code = `/**
 * LBK Surfaces - 3D Spatial Flythrough & Cinematic Scrollytelling Engine
 * Recreates the award-winning 3D spatial camera flythrough technique:
 * - Real-time Three.js WebGL 3D world with infinite perspective architectural grid
 * - Smooth camera Z-axis flythrough synchronized with GSAP ScrollTrigger scrub
 * - Floating 3D architectural monoliths with marble, granite, and luxury project textures
 * - Ambient 3D floating gold dust / micro-particles
 * - Interactive pointer parallax & smooth lerp damping
 * - Kinetic telemetry HUD tracking depth, coordinates, and spatial zones
 */

import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class Hero3DScrollytelling {
  constructor(options = {}) {
    this.container = document.getElementById(options.containerId || 'hero-3d-viewport');
    this.track = document.getElementById(options.trackId || 'hero-scrolly-track');
    
    if (!this.container || !this.track) {
      console.warn('Hero3DScrollytelling: Required container or track not found.');
      return;
    }

    this.hudDepth = document.getElementById('hud-depth-val');
    this.hudZone = document.getElementById('hud-zone-val');
    this.hudCoords = document.getElementById('hud-coords-val');
    this.hudProgress = document.getElementById('hud-progress-fill');

    this.act1 = document.getElementById('hero-act-1');
    this.act2 = document.getElementById('hero-act-2');
    this.act3 = document.getElementById('hero-act-3');

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.scrollProgress = 0;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.clock = new THREE.Clock();
    this.monoliths = [];
    this.particles = null;
    this.centralCrystal = null;

    this.init();
  }

  init() {
    this.setupScene();
    this.createPerspectiveGrid();
    this.createFloatingMonoliths();
    this.createCentralPrism();
    this.createAmbientDust();
    this.setupLighting();
    this.bindEvents();

    if (!this.isReducedMotion) {
      this.initScrollTimeline();
    } else {
      console.log('Hero3DScrollytelling: Reduced motion active. Static 3D scene maintained.');
    }

    this.animate();
    console.log('Hero3DScrollytelling: 3D Spatial Flythrough Initialized.');
  }

  setupScene() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.scene = new THREE.Scene();
    // Warm Ivory luxury fog seamlessly blending with #FAF9F6 background
    this.scene.background = new THREE.Color(0xFAF9F6);
    this.scene.fog = new THREE.FogExp2(0xFAF9F6, 0.00065);

    this.camera = new THREE.PerspectiveCamera(52, width / height, 1, 4000);
    this.camera.position.set(0, 45, 680);
    this.cameraTarget = new THREE.Vector3(0, 15, 0);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;

    this.container.appendChild(this.renderer.domElement);
  }

  setupLighting() {
    // Ambient fill light with warm ivory tone
    const ambientLight = new THREE.AmbientLight(0xfff8f0, 1.2);
    this.scene.add(ambientLight);

    // Primary studio directional light casting crisp highlights
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(200, 350, 400);
    this.scene.add(keyLight);

    // Brushed gold rim accent light
    const goldRimLight = new THREE.DirectionalLight(0xC5A15B, 1.5);
    goldRimLight.position.set(-250, 150, -300);
    this.scene.add(goldRimLight);

    // Under-light to illuminate bottom chamfers of floating slabs
    const bounceLight = new THREE.DirectionalLight(0xedd9c0, 0.8);
    bounceLight.position.set(0, -100, 0);
    this.scene.add(bounceLight);
  }

  createPerspectiveGrid() {
    // Infinite architectural perspective ground grid
    const size = 3800;
    const divisions = 76;
    const grid = new THREE.GridHelper(size, divisions, 0xC5A15B, 0xE4D3B8);
    grid.position.y = -120;
    grid.material.opacity = 0.35;
    grid.material.transparent = true;
    grid.material.depthWrite = false;
    this.scene.add(grid);
    this.grid = grid;
  }

  createFloatingMonoliths() {
    // Curated high-resolution architectural project & material textures
    const textureLoader = new THREE.TextureLoader();
    
    const projects = [
      {
        title: 'The Mewar Penthouse',
        category: 'Italian Statuario Marble',
        imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        x: 180, y: 15, z: 120, rotY: -0.28, rotX: 0.04
      },
      {
        title: 'The Sovereign Villa Facade',
        category: 'Granite & Stone Cladding',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        x: -200, y: 35, z: -550, rotY: 0.32, rotX: -0.03
      },
      {
        title: 'Fatehsagar Lakefront Residence',
        category: 'Continuous Large Porcelain Slabs',
        imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        x: 210, y: -10, z: -1250, rotY: -0.35, rotX: 0.05
      },
      {
        title: 'The Royal Orchid Villa',
        category: 'Makrana Pure White Foyer',
        imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
        x: -160, y: 25, z: -1950, rotY: 0.25, rotX: -0.04
      }
    ];

    const slabGeom = new THREE.BoxGeometry(220, 140, 8);

    projects.forEach((proj, idx) => {
      const texture = textureLoader.load(proj.imageUrl);
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;

      // Front face has project photography, sides and back have luxury gold/stone finish
      const frontMat = new THREE.MeshPhongMaterial({
        map: texture,
        shininess: 40,
        specular: 0x444444
      });

      const goldMat = new THREE.MeshStandardMaterial({
        color: 0xC5A15B,
        metalness: 0.75,
        roughness: 0.3,
        envMapIntensity: 1.0
      });

      const backMat = new THREE.MeshPhongMaterial({
        color: 0x222222,
        shininess: 30
      });

      const materials = [
        goldMat,  // right
        goldMat,  // left
        goldMat,  // top
        goldMat,  // bottom
        frontMat, // front
        backMat   // back
      ];

      const mesh = new THREE.Mesh(slabGeom, materials);
      mesh.position.set(proj.x, proj.y, proj.z);
      mesh.rotation.set(proj.rotX, proj.rotY, 0);

      // Gold wireframe border bevel outline
      const edges = new THREE.EdgesGeometry(slabGeom);
      const lineMat = new THREE.LineBasicMaterial({ color: 0xC5A15B, linewidth: 2, transparent: true, opacity: 0.6 });
      const wireframe = new THREE.LineSegments(edges, lineMat);
      mesh.add(wireframe);

      this.scene.add(mesh);
      this.monoliths.push({
        mesh,
        baseY: proj.y,
        baseRotY: proj.rotY,
        baseRotX: proj.rotX,
        phaseOffset: idx * 1.5,
        z: proj.z,
        title: proj.title,
        category: proj.category
      });
    });
  }

  createCentralPrism() {
    // 3D Geometric Faceted Architectural Glass Crystal (Centerpiece at entrance)
    const prismGeom = new THREE.IcosahedronGeometry(55, 0);
    const prismMat = new THREE.MeshPhysicalMaterial({
      color: 0xFFFFFF,
      metalness: 0.1,
      roughness: 0.15,
      transmission: 0.85,
      thickness: 1.8,
      transparent: true,
      opacity: 0.95,
      reflectivity: 0.9
    });

    this.centralCrystal = new THREE.Mesh(prismGeom, prismMat);
    this.centralCrystal.position.set(0, 35, 340);

    // Inner glowing gold core
    const coreGeom = new THREE.OctahedronGeometry(22, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xC5A15B,
      emissive: 0x775A1B,
      emissiveIntensity: 0.6,
      metalness: 0.8,
      roughness: 0.2
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    this.centralCrystal.add(core);

    // Subtle gold edge lattice
    const edges = new THREE.EdgesGeometry(prismGeom);
    const lineMat = new THREE.LineBasicMaterial({ color: 0xC5A15B, transparent: true, opacity: 0.75 });
    const wireframe = new THREE.LineSegments(edges, lineMat);
    this.centralCrystal.add(wireframe);

    this.scene.add(this.centralCrystal);
  }

  createAmbientDust() {
    // 220 Floating luminous 3D gold dust particles drifting in the pavilion
    const count = 220;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 1200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 600;
      positions[i * 3 + 2] = 800 - Math.random() * 3200;
      scales[i] = Math.random() * 4 + 2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const material = new THREE.PointsMaterial({
      color: 0xC5A15B,
      size: 4.5,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  bindEvents() {
    window.addEventListener('resize', () => this.onResize());

    window.addEventListener('pointermove', (e) => {
      // Normalize pointer [-1, 1]
      this.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    });
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  }

  initScrollTimeline() {
    ScrollTrigger.create({
      trigger: this.track,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.8, // Buttery smooth momentum scrub
      onUpdate: (self) => {
        this.scrollProgress = self.progress;

        // Update Camera Depth in HUD
        const currentDepthMeters = (this.scrollProgress * 48.0).toFixed(1);
        if (this.hudDepth) this.hudDepth.textContent = \`-\${currentDepthMeters} m\`;

        // Update Progress Bar in HUD
        if (this.hudProgress) {
          this.hudProgress.style.width = \`\${(this.scrollProgress * 100).toFixed(0)}%\`;
        }

        // Narrative Act Transitions based on 3D Camera Z-Depth
        if (this.scrollProgress < 0.30) {
          if (this.hudZone) this.hudZone.textContent = 'ZONE 01 • ARCHITECTURAL PAVILION';
          this.setActOpacity(this.act1, 1, 0);
          this.setActOpacity(this.act2, 0, 20);
          this.setActOpacity(this.act3, 0, 20);
        } else if (this.scrollProgress >= 0.30 && this.scrollProgress < 0.70) {
          if (this.hudZone) this.hudZone.textContent = 'ZONE 02 • PRECISION ENGINEERING SLABS';
          this.setActOpacity(this.act1, 0, -20);
          this.setActOpacity(this.act2, 1, 0);
          this.setActOpacity(this.act3, 0, 20);
        } else {
          if (this.hudZone) this.hudZone.textContent = 'ZONE 03 • MONUMENTAL EXECUTION DECK';
          this.setActOpacity(this.act1, 0, -20);
          this.setActOpacity(this.act2, 0, -20);
          this.setActOpacity(this.act3, 1, 0);
        }
      }
    });
  }

  setActOpacity(el, opacity, translateY) {
    if (!el) return;
    el.style.opacity = opacity.toString();
    el.style.transform = \`translateY(\${translateY}px)\`;
    el.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Smoothly interpolate mouse position for realistic 3D parallax
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // 2. Camera Flythrough Position controlled by Scroll Progress
    // Camera travels forward from Z = 680 down to Z = -2200
    const startZ = 680;
    const endZ = -2250;
    const targetZ = startZ - this.scrollProgress * (startZ - endZ);

    // Lateral sway following an organic architectural S-curve
    const targetX = Math.sin(this.scrollProgress * Math.PI * 2.5) * 110 + this.mouse.x * 45;
    const targetY = 35 + Math.cos(this.scrollProgress * Math.PI * 2) * 25 + this.mouse.y * 25;

    // Smooth camera damping
    this.camera.position.z += (targetZ - this.camera.position.z) * 0.08;
    this.camera.position.x += (targetX - this.camera.position.x) * 0.06;
    this.camera.position.y += (targetY - this.camera.position.y) * 0.06;

    // Look-ahead target tracks ahead of camera on Z axis
    const lookAheadZ = this.camera.position.z - 380;
    const lookAheadX = Math.sin((this.scrollProgress + 0.1) * Math.PI * 2.5) * 80;
    this.cameraTarget.set(lookAheadX, 15, lookAheadZ);
    this.camera.lookAt(this.cameraTarget);

    // Subtle Dutch roll (tilt) during S-curve camera turns
    this.camera.rotation.z = Math.sin(this.scrollProgress * Math.PI * 2.5) * -0.04 + this.mouse.x * -0.015;

    // Update Telemetry Coordinates in HUD
    if (this.hudCoords) {
      const cx = this.camera.position.x.toFixed(0);
      const cy = this.camera.position.y.toFixed(0);
      const cz = this.camera.position.z.toFixed(0);
      this.hudCoords.textContent = \`[\${cx}, \${cy}, \${cz}]\`;
    }

    // 3. Floating animation on monoliths
    this.monoliths.forEach((m) => {
      // Gentle harmonic floating motion
      m.mesh.position.y = m.baseY + Math.sin(elapsedTime * 1.2 + m.phaseOffset) * 10;
      m.mesh.rotation.y = m.baseRotY + Math.sin(elapsedTime * 0.8 + m.phaseOffset) * 0.04;
      m.mesh.rotation.x = m.baseRotX + Math.cos(elapsedTime * 0.7 + m.phaseOffset) * 0.02;

      // When camera approaches monolith, gently illuminate edge
      const distToCamera = Math.abs(this.camera.position.z - m.z);
      if (distToCamera < 450) {
        const factor = 1 - distToCamera / 450;
        m.mesh.position.y += factor * 8;
      }
    });

    // 4. Rotate Central Architectural Prism
    if (this.centralCrystal) {
      this.centralCrystal.rotation.y += delta * 0.45;
      this.centralCrystal.rotation.x = Math.sin(elapsedTime * 0.6) * 0.2;
      this.centralCrystal.position.y = 35 + Math.sin(elapsedTime * 1.5) * 8;

      // Expand / disperse prism as camera passes through
      const dist = this.camera.position.z - this.centralCrystal.position.z;
      if (dist < 220 && dist > -150) {
        const expandFactor = Math.max(0, 1 - Math.abs(dist) / 220);
        this.centralCrystal.scale.setScalar(1 + expandFactor * 0.8);
      } else {
        this.centralCrystal.scale.set(1, 1, 1);
      }
    }

    // 5. Gently drift ambient dust particles
    if (this.particles) {
      const positions = this.particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(elapsedTime + positions[i]) * 0.15;
      }
      this.particles.geometry.attributes.position.needsUpdate = true;
    }

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    ScrollTrigger.getAll().forEach(st => {
      if (st.trigger === this.track) st.kill();
    });
    if (this.renderer && this.renderer.domElement) {
      this.renderer.domElement.remove();
    }
  }
}
`;

fs.writeFileSync(targetPath, code, 'utf8');
console.log('Created src/js/hero3dScrolly.js successfully!');
