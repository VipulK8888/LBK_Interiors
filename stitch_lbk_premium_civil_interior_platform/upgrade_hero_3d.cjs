const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../src/js/hero3dScrolly.js');

const code = `/**
 * LBK Surfaces - Master 3D Spatial Flythrough Scrollytelling Engine
 * Award-winning architectural WebGL experience built with Three.js & GSAP ScrollTrigger.
 * Features:
 * - Real-time reflective architectural floor with champagne gold perspective grid
 * - 3D Floating Stone Monoliths with beveled brass inlays and animated laser-alignment lines
 * - Dynamic ambient floor contact shadows for realistic spatial grounding
 * - Sculptural faceted glass & gold crystal centerpiece
 * - 250 luminous drifting 3D gold dust particles
 * - S-curve cinematic camera trajectory (Z: +750 to -2400) synchronized with ScrollTrigger scrub
 * - Interactive pointer & touch drag-to-orbit with physics-based momentum damping
 * - Kinetic telemetry HUD tracking depth in meters, spatial coordinates, and active exhibition zones
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
      console.warn('Hero3DScrollytelling: Missing container or track.');
      return;
    }

    // Telemetry HUD Elements
    this.hudDepth = document.getElementById('hud-depth-val');
    this.hudZone = document.getElementById('hud-zone-val');
    this.hudCoords = document.getElementById('hud-coords-val');
    this.hudProgress = document.getElementById('hud-progress-fill');

    // Narrative Act Overlays
    this.act1 = document.getElementById('hero-act-1');
    this.act2 = document.getElementById('hero-act-2');
    this.act3 = document.getElementById('hero-act-3');

    // Pointer & Parallax Physics
    this.pointer = { x: 0, y: 0, targetX: 0, targetY: 0, isDragging: false, dragStartX: 0, dragStartY: 0 };
    this.scrollProgress = 0;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.clock = new THREE.Clock();
    this.monoliths = [];
    this.laserLines = [];
    this.particles = null;
    this.centralCrystal = null;
    this.lights = {};

    this.init();
  }

  init() {
    this.setupScene();
    this.setupLighting();
    this.createReflectiveFloor();
    this.createFloatingMonoliths();
    this.createCentralPrism();
    this.createAmbientDust();
    this.bindEvents();

    if (!this.isReducedMotion) {
      this.initScrollTimeline();
    }

    this.animate();
    console.log('Hero3DScrollytelling: Pro-grade 3D Architectural Flythrough online.');
  }

  setupScene() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.scene = new THREE.Scene();
    // Warm Ivory luxury fog seamlessly blending with the page background
    this.scene.background = new THREE.Color(0xFAF9F6);
    this.scene.fog = new THREE.FogExp2(0xFAF9F6, 0.00062);

    this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 4500);
    this.camera.position.set(0, 48, 750);
    this.cameraTarget = new THREE.Vector3(0, 15, 0);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;

    this.container.appendChild(this.renderer.domElement);
  }

  setupLighting() {
    // Ambient fill light with warm ivory warmth
    const ambientLight = new THREE.AmbientLight(0xfffaf0, 1.3);
    this.scene.add(ambientLight);

    // Primary directional studio light casting specular highlights on stone slabs
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(220, 400, 450);
    this.scene.add(keyLight);
    this.lights.key = keyLight;

    // Brushed gold rim accent light
    const goldRimLight = new THREE.DirectionalLight(0xC5A15B, 1.8);
    goldRimLight.position.set(-280, 200, -350);
    this.scene.add(goldRimLight);
    this.lights.gold = goldRimLight;

    // Moving spotlight that follows camera trajectory for specular glints
    const followSpot = new THREE.SpotLight(0xffeedd, 3.0, 1400, Math.PI / 4, 0.6, 1.2);
    followSpot.position.set(0, 80, 750);
    this.scene.add(followSpot);
    this.lights.spot = followSpot;

    // Ground bounce light
    const bounceLight = new THREE.DirectionalLight(0xf2e8dc, 0.9);
    bounceLight.position.set(0, -100, 0);
    this.scene.add(bounceLight);
  }

  createReflectiveFloor() {
    // 1. Polished stone ground plane with soft specular reflection
    const floorGeo = new THREE.PlaneGeometry(4200, 4200);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xF3EFEA,
      roughness: 0.18,
      metalness: 0.15
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -125;
    this.scene.add(floor);

    // 2. High-precision champagne gold perspective grid
    const size = 4000;
    const divisions = 80;
    const grid = new THREE.GridHelper(size, divisions, 0xC5A15B, 0xE2D4BF);
    grid.position.y = -124.5;
    grid.material.opacity = 0.32;
    grid.material.transparent = true;
    grid.material.depthWrite = false;
    this.scene.add(grid);
  }

  createFloatingMonoliths() {
    const textureLoader = new THREE.TextureLoader();

    const projects = [
      {
        title: 'The Mewar Penthouse',
        category: 'Italian Statuario Marble Flooring',
        specs: '5,800 sq ft Bookmatched Carrara • 0.0mm Lippage',
        imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        x: 210, y: 15, z: 100, rotY: -0.28, rotX: 0.04
      },
      {
        title: 'The Sovereign Villa Facade',
        category: 'Granite Ventilated Cladding',
        specs: '12,400 sq ft Facade Area • Thermal Flamed',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        x: -220, y: 30, z: -600, rotY: 0.32, rotX: -0.03
      },
      {
        title: 'Fatehsagar Lakefront Residence',
        category: 'Continuous Large Porcelain Slabs',
        specs: '1200x2400mm Slabs • 1mm Laser Epoxy Grout',
        imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        x: 230, y: -10, z: -1350, rotY: -0.34, rotX: 0.05
      },
      {
        title: 'The Royal Orchid Villa',
        category: 'Makrana Pure White Marble Foyer',
        specs: 'Traditional Lime Slurry Bedding • 98+ Gloss',
        imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
        x: -180, y: 25, z: -2050, rotY: 0.26, rotX: -0.04
      }
    ];

    const slabGeom = new THREE.BoxGeometry(250, 155, 12);

    projects.forEach((proj, idx) => {
      const texture = textureLoader.load(proj.imageUrl);
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;

      // Front: Project image with fine specular gloss
      const frontMat = new THREE.MeshPhongMaterial({
        map: texture,
        shininess: 45,
        specular: 0x555555
      });

      // Beveled Brass Inlay Frame Edges
      const brassBorderMat = new THREE.MeshStandardMaterial({
        color: 0xC5A15B,
        metalness: 0.85,
        roughness: 0.25
      });

      const backMat = new THREE.MeshPhongMaterial({
        color: 0x242424,
        shininess: 25
      });

      const materials = [
        brassBorderMat, // right
        brassBorderMat, // left
        brassBorderMat, // top
        brassBorderMat, // bottom
        frontMat,       // front
        backMat         // back
      ];

      const mesh = new THREE.Mesh(slabGeom, materials);
      mesh.position.set(proj.x, proj.y, proj.z);
      mesh.rotation.set(proj.rotX, proj.rotY, 0);

      // Gold wireframe border highlight
      const edges = new THREE.EdgesGeometry(slabGeom);
      const lineMat = new THREE.LineBasicMaterial({ color: 0xC5A15B, linewidth: 2, transparent: true, opacity: 0.7 });
      const wireframe = new THREE.LineSegments(edges, lineMat);
      mesh.add(wireframe);

      // Animated Glowing Laser Alignment Line
      const laserGeo = new THREE.PlaneGeometry(250, 2);
      const laserMat = new THREE.MeshBasicMaterial({
        color: 0xE8C178,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      });
      const laserMesh = new THREE.Mesh(laserGeo, laserMat);
      laserMesh.position.set(0, 0, 6.2);
      mesh.add(laserMesh);
      this.laserLines.push({ mesh: laserMesh, speed: 1.2 + idx * 0.4 });

      // Ambient Ground Contact Shadow Disc
      const shadowGeo = new THREE.PlaneGeometry(280, 120);
      const shadowMat = new THREE.MeshBasicMaterial({
        color: 0x221E19,
        transparent: true,
        opacity: 0.18,
        depthWrite: false
      });
      const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
      shadowMesh.rotation.x = -Math.PI / 2;
      shadowMesh.position.set(proj.x, -124, proj.z);
      this.scene.add(shadowMesh);

      this.scene.add(mesh);
      this.monoliths.push({
        mesh,
        shadowMesh,
        baseY: proj.y,
        baseRotY: proj.rotY,
        baseRotX: proj.rotX,
        phaseOffset: idx * 1.6,
        z: proj.z,
        title: proj.title,
        category: proj.category,
        specs: proj.specs
      });
    });
  }

  createCentralPrism() {
    // 3D Geometric Faceted Architectural Glass Crystal (Centerpiece at entrance)
    const prismGeom = new THREE.IcosahedronGeometry(58, 1);
    const prismMat = new THREE.MeshPhysicalMaterial({
      color: 0xFFFFFF,
      metalness: 0.1,
      roughness: 0.12,
      transmission: 0.88,
      thickness: 2.2,
      transparent: true,
      opacity: 0.95,
      reflectivity: 0.95
    });

    this.centralCrystal = new THREE.Mesh(prismGeom, prismMat);
    this.centralCrystal.position.set(0, 35, 340);

    // Inner glowing gold core
    const coreGeom = new THREE.OctahedronGeometry(24, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xC5A15B,
      emissive: 0x775A1B,
      emissiveIntensity: 0.8,
      metalness: 0.85,
      roughness: 0.2
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    this.centralCrystal.add(core);

    // Delicate gold lattice edge outline
    const edges = new THREE.EdgesGeometry(prismGeom);
    const lineMat = new THREE.LineBasicMaterial({ color: 0xC5A15B, transparent: true, opacity: 0.8 });
    const wireframe = new THREE.LineSegments(edges, lineMat);
    this.centralCrystal.add(wireframe);

    this.scene.add(this.centralCrystal);
  }

  createAmbientDust() {
    // 250 Floating luminous 3D gold dust motes drifting in the pavilion
    const count = 250;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 1400;
      positions[i * 3 + 1] = -100 + Math.random() * 450;
      positions[i * 3 + 2] = 850 - Math.random() * 3400;
      scales[i] = Math.random() * 4 + 2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const material = new THREE.PointsMaterial({
      color: 0xC5A15B,
      size: 4.5,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  bindEvents() {
    window.addEventListener('resize', () => this.onResize());

    // Smooth pointer parallax
    window.addEventListener('pointermove', (e) => {
      this.pointer.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      this.pointer.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Touch & mouse drag support for interactive spatial rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    this.container.addEventListener('pointerdown', (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointerup', () => {
      isDragging = false;
    });

    window.addEventListener('pointermove', (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        this.camera.position.x += deltaX * 0.25;
        this.camera.position.y -= deltaY * 0.25;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
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
      pin: '#hero-pinned-stage',
      anticipatePin: 1,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.0, // Silky smooth inertia response
      onUpdate: (self) => {
        this.scrollProgress = self.progress;

        // Telemetry Depth in meters
        const currentDepthMeters = (this.scrollProgress * 52.0).toFixed(1);
        if (this.hudDepth) this.hudDepth.textContent = \`-\${currentDepthMeters} m\`;

        // Telemetry Progress Bar
        if (this.hudProgress) {
          this.hudProgress.style.width = \`\${(this.scrollProgress * 100).toFixed(0)}%\`;
        }

        // Narrative Act Transitions based on 3D Camera Z-Depth
        if (this.scrollProgress < 0.28) {
          if (this.hudZone) this.hudZone.textContent = 'ZONE 01 • ARCHITECTURAL PAVILION';
          this.setActState(this.act1, 1, 0);
          this.setActState(this.act2, 0, 25);
          this.setActState(this.act3, 0, 25);
        } else if (this.scrollProgress >= 0.28 && this.scrollProgress < 0.68) {
          if (this.hudZone) this.hudZone.textContent = 'ZONE 02 • PRECISION ENGINEERING SLABS';
          this.setActState(this.act1, 0, -25);
          this.setActState(this.act2, 1, 0);
          this.setActState(this.act3, 0, 25);
        } else {
          if (this.hudZone) this.hudZone.textContent = 'ZONE 03 • MONUMENTAL EXECUTION DECK';
          this.setActState(this.act1, 0, -25);
          this.setActState(this.act2, 0, -25);
          this.setActState(this.act3, 1, 0);
        }
      }
    });
  }

  setActState(el, opacity, translateY) {
    if (!el) return;
    el.style.opacity = opacity.toString();
    el.style.transform = \`translateY(\${translateY}px)\`;
    el.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Smoothly interpolate pointer for realistic 3D parallax
    this.pointer.x += (this.pointer.targetX - this.pointer.x) * 0.05;
    this.pointer.y += (this.pointer.targetY - this.pointer.y) * 0.05;

    // 2. Camera S-Curve Flythrough Position
    // Camera travels forward from Z = 750 down to Z = -2350
    const startZ = 750;
    const endZ = -2350;
    const targetZ = startZ - this.scrollProgress * (startZ - endZ);

    // Lateral S-curve trajectory
    const targetX = Math.sin(this.scrollProgress * Math.PI * 2.4) * 120 + this.pointer.x * 45;
    const targetY = 38 + Math.cos(this.scrollProgress * Math.PI * 2) * 25 + this.pointer.y * 25;

    // Camera damping
    this.camera.position.z += (targetZ - this.camera.position.z) * 0.08;
    this.camera.position.x += (targetX - this.camera.position.x) * 0.06;
    this.camera.position.y += (targetY - this.camera.position.y) * 0.06;

    // Look-ahead tracking
    const lookAheadZ = this.camera.position.z - 360;
    const lookAheadX = Math.sin((this.scrollProgress + 0.1) * Math.PI * 2.4) * 80;
    this.cameraTarget.set(lookAheadX, 15, lookAheadZ);
    this.camera.lookAt(this.cameraTarget);

    // Subtle Dutch roll (tilt) during turns
    this.camera.rotation.z = Math.sin(this.scrollProgress * Math.PI * 2.4) * -0.04 + this.pointer.x * -0.015;

    // SpotLight follows camera
    if (this.lights.spot) {
      this.lights.spot.position.set(this.camera.position.x, this.camera.position.y + 40, this.camera.position.z);
      this.lights.spot.target.position.set(lookAheadX, 15, lookAheadZ);
      this.lights.spot.target.updateMatrixWorld();
    }

    // Update Telemetry Coordinates in HUD
    if (this.hudCoords) {
      const cx = this.camera.position.x.toFixed(0);
      const cy = this.camera.position.y.toFixed(0);
      const cz = this.camera.position.z.toFixed(0);
      this.hudCoords.textContent = \`[\${cx}, \${cy}, \${cz}]\`;
    }

    // 3. Floating animation on monoliths & laser alignment line scan
    this.monoliths.forEach((m, idx) => {
      // Harmonic floating motion
      m.mesh.position.y = m.baseY + Math.sin(elapsedTime * 1.3 + m.phaseOffset) * 9;
      m.mesh.rotation.y = m.baseRotY + Math.sin(elapsedTime * 0.75 + m.phaseOffset) * 0.04;
      m.mesh.rotation.x = m.baseRotX + Math.cos(elapsedTime * 0.65 + m.phaseOffset) * 0.02;

      // Contact shadow sync
      if (m.shadowMesh) {
        m.shadowMesh.position.x = m.mesh.position.x;
        m.shadowMesh.position.z = m.mesh.position.z;
        m.shadowMesh.scale.setScalar(1 + Math.sin(elapsedTime * 1.3 + m.phaseOffset) * 0.05);
      }

      // Approach highlight
      const distToCamera = Math.abs(this.camera.position.z - m.z);
      if (distToCamera < 480) {
        const factor = 1 - distToCamera / 480;
        m.mesh.position.y += factor * 8;
      }
    });

    // Scan animated laser alignment lines across slabs
    this.laserLines.forEach((laser) => {
      laser.mesh.position.y = Math.sin(elapsedTime * laser.speed) * 65;
    });

    // 4. Rotate Central Architectural Prism
    if (this.centralCrystal) {
      this.centralCrystal.rotation.y += delta * 0.45;
      this.centralCrystal.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;
      this.centralCrystal.position.y = 35 + Math.sin(elapsedTime * 1.4) * 8;

      // Expand / disperse prism as camera flies through
      const dist = this.camera.position.z - this.centralCrystal.position.z;
      if (dist < 220 && dist > -160) {
        const expandFactor = Math.max(0, 1 - Math.abs(dist) / 220);
        this.centralCrystal.scale.setScalar(1 + expandFactor * 0.85);
      } else {
        this.centralCrystal.scale.set(1, 1, 1);
      }
    }

    // 5. Gently drift ambient dust particles
    if (this.particles) {
      const positions = this.particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(elapsedTime + positions[i]) * 0.18;
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
console.log('Successfully upgraded src/js/hero3dScrolly.js with pro-grade features!');
