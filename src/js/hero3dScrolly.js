/**
 * LBK Surfaces - Master 3D Spatial Flythrough Scrollytelling Engine (Optimized HD Edition)
 * Ultra-crisp architectural WebGL experience built with Three.js & GSAP ScrollTrigger.
 * - Native 2x Retina resolution on mobile (zero bilinear blur)
 * - Anisotropic texture filtering (8x) for razor-sharp marble & stone textures at angles
 * - Linear fog with clear foreground (zero milky haze)
 * - Jewel-faceted architectural beacon elevated to frame the corridor
 * - 6 monumental architectural monoliths with climax centerpiece portal
 * - 100% clean flight HUD telemetry with ZERO modal popups
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
    this.isMobile = false;

    this.init();
  }

  init() {
    this.checkMobile();
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
    console.log('Hero3DScrollytelling: High-Definition 3D Corridor Online (Native Retina, Anisotropic HD).');
  }

  checkMobile() {
    const w = this.container.clientWidth || window.innerWidth;
    this.isMobile = w < 768;
  }

  setupScene() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.scene = new THREE.Scene();
    
    // Warm Ivory luxury backdrop
    this.scene.background = new THREE.Color(0xFAF9F6);

    // Linear Fog: Near plane is 1400 units away so everything in the foreground & midground is 100% crisp & haze-free!
    this.scene.fog = new THREE.Fog(0xFAF9F6, this.isMobile ? 1300 : 1600, this.isMobile ? 3800 : 4400);

    // Dynamic FOV & Camera Start: Framed so the first architectural masterpiece is immediately prominent
    const fov = this.isMobile ? 56 : 48;
    this.camera = new THREE.PerspectiveCamera(fov, width / height, 1, 5000);
    const startZ = this.isMobile ? 680 : 750;
    this.camera.position.set(0, this.isMobile ? 44 : 48, startZ);
    this.cameraTarget = new THREE.Vector3(0, 18, 0);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });
    this.renderer.setSize(width, height);

    // Native High-DPI: Always use true device pixel ratio (capped at 2 for peak performance and zero blur)
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.renderer.setPixelRatio(dpr);

    // Film-grade color management & tone mapping
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    if (THREE.SRGBColorSpace) {
      this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    }

    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);
  }

  setupLighting() {
    // 1. Warm Ivory Ambient Light for natural daylight illumination
    const ambientLight = new THREE.AmbientLight(0xFFFDF8, 1.35);
    this.scene.add(ambientLight);

    // 2. High-clarity Key Studio Sun Light (gives crisp definition to edges)
    const sunLight = new THREE.DirectionalLight(0xFFF9EE, 1.5);
    sunLight.position.set(400, 700, 500);
    this.scene.add(sunLight);

    // 3. Champagne Gold Rim / Fill Light
    const rimLight = new THREE.DirectionalLight(0xC5A15B, 0.9);
    rimLight.position.set(-450, 320, -500);
    this.scene.add(rimLight);

    // 4. Moving Follow Spotlight for dynamic surface glints
    const spotLight = new THREE.SpotLight(0xFFFFFF, 2.0, 1800, Math.PI / 4, 0.45, 1.2);
    spotLight.position.set(0, 360, 800);
    this.scene.add(spotLight);
    this.lights.spot = spotLight;
  }

  createReflectiveFloor() {
    // Ground plane extending across the pavilion
    const floorGeo = new THREE.PlaneGeometry(3600, 6000);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xF4EFE8,
      roughness: 0.22,
      metalness: 0.08
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -125;
    this.scene.add(floor);

    // Architectural Perspective Grid: Calibrated density avoids moiré blur
    const divisions = this.isMobile ? 48 : 64;
    const grid = new THREE.GridHelper(3600, divisions, 0xC5A15B, 0xE4DDD0);
    grid.position.y = -124.5;
    grid.material.opacity = 0.48;
    grid.material.transparent = true;
    this.scene.add(grid);
  }

  createFloatingMonoliths() {
    // 6 Master Architectural Monoliths with climax centerpiece portal at corridor terminus
    const projects = [
      {
        title: 'Villa Alankrit',
        category: 'Bookmatched Carrara & Black Pearl',
        specs: '12,000 sq ft • 0.0mm Lippage',
        textureUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90',
        x: -240,
        y: 44,
        z: 180,
        rotY: 0.26,
        rotX: -0.03,
        isCenterpiece: false
      },
      {
        title: 'The Mewar Penthouse',
        category: 'Italian Statuario & Flamed Granite',
        specs: '8,500 sq ft • Diamond Crystal Buff',
        textureUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90',
        x: 245,
        y: 36,
        z: -380,
        rotY: -0.30,
        rotX: 0.04,
        isCenterpiece: false
      },
      {
        title: 'Sovereign Villa Facade',
        category: 'Dry-Clad Rain Screen & Jodhpur Sandstone',
        specs: '16,000 sq ft • SS-316 Anchor Clamps',
        textureUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90',
        x: -245,
        y: 48,
        z: -920,
        rotY: 0.32,
        rotX: -0.04,
        isCenterpiece: false
      },
      {
        title: 'Fatehsagar Lakefront Residence',
        category: 'Modernist Cantilever & Flamed Quartzite',
        specs: '14,200 sq ft • Precision Waterjet Slabs',
        textureUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=90',
        x: 250,
        y: 38,
        z: -1420,
        rotY: -0.26,
        rotX: 0.03,
        isCenterpiece: false
      },
      {
        title: 'Ambavgarh Hilltop Suite',
        category: 'Monolithic Terrazzo & Bookmatched Bath',
        specs: 'Curbless Walk-in Wet Room • Anti-Slip Honed',
        textureUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=90',
        x: -240,
        y: 44,
        z: -1900,
        rotY: 0.28,
        rotX: -0.03,
        isCenterpiece: false
      },
      {
        title: 'Royal Orchid Grand Centerpiece',
        category: 'Palatial Turnkey Execution & Pool Deck',
        specs: 'Monumental 24,000 sq ft Estate Climax',
        textureUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=90',
        x: 0,
        y: 48,
        z: -2340,
        rotY: 0.0,
        rotX: 0.0,
        isCenterpiece: true
      }
    ];

    const textureLoader = new THREE.TextureLoader();
    const maxAnisotropy = this.renderer.capabilities.getMaxAnisotropy();
    const targetAnisotropy = Math.min(maxAnisotropy, 8);

    // Lateral scale on mobile: keeps monoliths comfortably framed within portrait viewports
    const lateralScale = this.isMobile ? 0.44 : 1.0;

    projects.forEach((proj, idx) => {
      // Dimensions
      let slabW = proj.isCenterpiece ? (this.isMobile ? 210 : 280) : (this.isMobile ? 165 : 240);
      let slabH = proj.isCenterpiece ? (this.isMobile ? 140 : 175) : (this.isMobile ? 115 : 150);
      let slabD = proj.isCenterpiece ? 14 : 12;

      const slabGeom = new THREE.BoxGeometry(slabW, slabH, slabD);
      
      const texture = textureLoader.load(proj.textureUrl);
      if (THREE.SRGBColorSpace) {
        texture.colorSpace = THREE.SRGBColorSpace;
      }
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.anisotropy = targetAnisotropy;

      // Physically-based stone slab material with subtle micro-reflection (not shiny plastic)
      const frontMat = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.28,
        metalness: 0.08
      });

      // Beveled Brass Inlay Frame Edges
      const brassBorderMat = new THREE.MeshStandardMaterial({
        color: 0xC5A15B,
        metalness: 0.88,
        roughness: 0.22
      });

      // Double-sided luxury texture: NEVER black
      const materials = [
        brassBorderMat, // right
        brassBorderMat, // left
        brassBorderMat, // top
        brassBorderMat, // bottom
        frontMat,       // front
        frontMat        // back
      ];

      const mesh = new THREE.Mesh(slabGeom, materials);
      const actualX = proj.x * lateralScale;
      mesh.position.set(actualX, proj.y, proj.z);
      mesh.rotation.set(proj.rotX, proj.rotY, 0);

      // Gold wireframe border highlight for architectural framing
      const edges = new THREE.EdgesGeometry(slabGeom);
      const lineMat = new THREE.LineBasicMaterial({
        color: proj.isCenterpiece ? 0xE8C178 : 0xC5A15B,
        linewidth: 2,
        transparent: true,
        opacity: proj.isCenterpiece ? 0.95 : 0.8
      });
      const wireframe = new THREE.LineSegments(edges, lineMat);
      mesh.add(wireframe);

      // Animated Glowing Laser Alignment Line
      const laserGeo = new THREE.PlaneGeometry(slabW + 10, 2);
      const laserMat = new THREE.MeshBasicMaterial({
        color: 0xE8C178,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      });
      const laserMesh = new THREE.Mesh(laserGeo, laserMat);
      laserMesh.position.set(0, 0, (slabD / 2) + 0.2);
      mesh.add(laserMesh);
      this.laserLines.push({ mesh: laserMesh, speed: 1.2 + idx * 0.35, maxTravel: slabH / 2 - 10 });

      // Ambient Ground Contact Shadow Disc
      const shadowGeo = new THREE.PlaneGeometry(slabW + 40, slabH * 0.8);
      const shadowMat = new THREE.MeshBasicMaterial({
        color: 0x221E19,
        transparent: true,
        opacity: 0.16,
        depthWrite: false
      });
      const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
      shadowMesh.rotation.x = -Math.PI / 2;
      shadowMesh.position.set(actualX, -124, proj.z);
      this.scene.add(shadowMesh);

      this.scene.add(mesh);
      this.monoliths.push({
        mesh,
        shadowMesh,
        baseX: proj.x,
        baseY: proj.y,
        baseRotY: proj.rotY,
        baseRotX: proj.rotX,
        phaseOffset: idx * 1.5,
        z: proj.z,
        title: proj.title,
        category: proj.category,
        specs: proj.specs,
        isCenterpiece: proj.isCenterpiece
      });
    });
  }

  createCentralPrism() {
    // Ultra-Crisp Polished Gold & Crystal Architectural Beacon (Suspended Pavilion Landmark)
    // Elevated above camera line so it never obscures the first architectural monolith
    const radius = this.isMobile ? 28 : 48;
    const prismGeom = new THREE.IcosahedronGeometry(radius, 1);
    
    // Clear polished crystal glass (subtle, clean, NOT a milky blur)
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0xFFFDF8,
      metalness: 0.3,
      roughness: 0.08,
      transparent: true,
      opacity: 0.28
    });

    this.centralCrystal = new THREE.Mesh(prismGeom, glassMat);
    // Suspended high in pavilion ceiling at Y = 145 so corridor view is 100% unobstructed
    this.centralCrystal.position.set(0, this.isMobile ? 162 : 155, 340);

    // Inner glowing geometric core
    const coreGeom = new THREE.OctahedronGeometry(this.isMobile ? 16 : 20, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xC5A15B,
      emissive: 0x93722A,
      emissiveIntensity: 0.85,
      metalness: 0.88,
      roughness: 0.18
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    this.centralCrystal.add(core);

    // Razor-sharp gold lattice edges
    const edges = new THREE.EdgesGeometry(prismGeom);
    const lineMat = new THREE.LineBasicMaterial({ 
      color: 0xD4B26F, 
      transparent: true, 
      opacity: 0.92 
    });
    const wireframe = new THREE.LineSegments(edges, lineMat);
    this.centralCrystal.add(wireframe);

    this.scene.add(this.centralCrystal);
  }

  createAmbientDust() {
    // Crisp 3D gold dust motes drifting gently in pavilion atmosphere
    const count = this.isMobile ? 140 : 240;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 1400;
      positions[i * 3 + 1] = -100 + Math.random() * 450;
      positions[i * 3 + 2] = 850 - Math.random() * 3500;
      scales[i] = Math.random() * 3 + 1.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const material = new THREE.PointsMaterial({
      color: 0xC5A15B,
      size: this.isMobile ? 2.5 : 3.5,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  bindEvents() {
    window.addEventListener('resize', () => this.onResize(), { passive: true });

    // Pointer Drag & Hover Physics
    const onPointerMove = (clientX, clientY) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      this.pointer.targetX = (clientX - halfW) / halfW;
      this.pointer.targetY = -(clientY - halfH) / halfH;

      if (this.pointer.isDragging) {
        const deltaX = clientX - this.pointer.dragStartX;
        const deltaY = clientY - this.pointer.dragStartY;
        this.pointer.targetX += deltaX * 0.002;
        this.pointer.targetY -= deltaY * 0.002;
      }
    };

    window.addEventListener('mousemove', (e) => onPointerMove(e.clientX, e.clientY), { passive: true });

    this.container.addEventListener('pointerdown', (e) => {
      this.pointer.isDragging = true;
      this.pointer.dragStartX = e.clientX;
      this.pointer.dragStartY = e.clientY;
      this.container.style.cursor = 'grabbing';
    });

    window.addEventListener('pointerup', () => {
      this.pointer.isDragging = false;
      if (this.container) this.container.style.cursor = 'grab';
    });

    // Touch support for mobile devices
    this.container.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        this.pointer.isDragging = true;
        this.pointer.dragStartX = e.touches[0].clientX;
        this.pointer.dragStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    this.container.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    this.container.addEventListener('touchend', () => {
      this.pointer.isDragging = false;
    }, { passive: true });
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.checkMobile();

    this.camera.aspect = width / height;
    this.camera.fov = this.isMobile ? 56 : 48;
    this.camera.updateProjectionMatrix();

    // Dynamically adjust monolith horizontal offsets on mobile vs desktop
    const lateralScale = this.isMobile ? 0.44 : 1.0;
    this.monoliths.forEach(m => {
      m.mesh.position.x = m.baseX * lateralScale;
      if (m.shadowMesh) {
        m.shadowMesh.position.x = m.mesh.position.x;
      }
    });

    this.renderer.setSize(width, height);
    // True native 2x resolution on mobile & Retina screens
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.renderer.setPixelRatio(dpr);
  }

  initScrollTimeline() {
    ScrollTrigger.create({
      trigger: this.track,
      pin: '#hero-pinned-stage',
      anticipatePin: 1,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.0,
      onUpdate: (self) => {
        this.scrollProgress = self.progress;

        // Telemetry Depth in meters
        const currentDepthMeters = (this.scrollProgress * 54.0).toFixed(1);
        if (this.hudDepth) this.hudDepth.textContent = `-${currentDepthMeters} m`;

        // Telemetry Progress Bar
        if (this.hudProgress) {
          this.hudProgress.style.width = `${(this.scrollProgress * 100).toFixed(0)}%`;
        }

        // Zone updates across the spatial flythrough corridor
        if (this.scrollProgress < 0.33) {
          if (this.hudZone) this.hudZone.textContent = this.isMobile ? 'ZONE 01 • PAVILION' : 'ZONE 01 • ARCHITECTURAL PAVILION';
        } else if (this.scrollProgress >= 0.33 && this.scrollProgress < 0.72) {
          if (this.hudZone) this.hudZone.textContent = this.isMobile ? 'ZONE 02 • SLAB GALLERY' : 'ZONE 02 • PRECISION ENGINEERING SLABS';
        } else {
          if (this.hudZone) this.hudZone.textContent = this.isMobile ? 'ZONE 03 • MONUMENTAL PORTAL' : 'ZONE 03 • MONUMENTAL EXECUTION PORTAL';
        }
      }
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Smoothly interpolate pointer for realistic 3D parallax
    this.pointer.x += (this.pointer.targetX - this.pointer.x) * 0.05;
    this.pointer.y += (this.pointer.targetY - this.pointer.y) * 0.05;

    // 2. Camera S-Curve Flythrough Position
    const startZ = this.isMobile ? 680 : 750;
    const endZ = -2320;
    const targetZ = startZ - this.scrollProgress * (startZ - endZ);

    // Lateral S-curve trajectory
    const swayAmount = this.isMobile ? 36 : 120;
    const pointerInfluence = this.isMobile ? 20 : 45;
    const targetX = Math.sin(this.scrollProgress * Math.PI * 2.4) * swayAmount + this.pointer.x * pointerInfluence;
    const targetY = (this.isMobile ? 40 : 38) + Math.cos(this.scrollProgress * Math.PI * 2) * 20 + this.pointer.y * 20;

    // Camera damping
    this.camera.position.z += (targetZ - this.camera.position.z) * 0.08;
    this.camera.position.x += (targetX - this.camera.position.x) * 0.06;
    this.camera.position.y += (targetY - this.camera.position.y) * 0.06;

    // Look-ahead tracking
    const lookAheadZ = this.camera.position.z - 360;
    const lookAheadX = Math.sin((this.scrollProgress + 0.1) * Math.PI * 2.4) * (swayAmount * 0.65);
    this.cameraTarget.set(lookAheadX, 16, lookAheadZ);
    this.camera.lookAt(this.cameraTarget);

    // Subtle Dutch roll (tilt) during turns
    this.camera.rotation.z = Math.sin(this.scrollProgress * Math.PI * 2.4) * -0.03 + this.pointer.x * -0.01;

    // SpotLight follows camera
    if (this.lights.spot) {
      this.lights.spot.position.set(this.camera.position.x, this.camera.position.y + 40, this.camera.position.z);
      this.lights.spot.target.position.set(lookAheadX, 16, lookAheadZ);
      this.lights.spot.target.updateMatrixWorld();
    }

    // Update Telemetry Coordinates in HUD
    if (this.hudCoords) {
      const cx = this.camera.position.x.toFixed(0);
      const cy = this.camera.position.y.toFixed(0);
      const cz = this.camera.position.z.toFixed(0);
      this.hudCoords.textContent = `[${cx}, ${cy}, ${cz}]`;
    }

    // 3. Floating animation on monoliths & laser alignment line scan
    this.monoliths.forEach((m, idx) => {
      m.mesh.position.y = m.baseY + Math.sin(elapsedTime * 1.3 + m.phaseOffset) * 7;
      
      if (!m.isCenterpiece) {
        m.mesh.rotation.y = m.baseRotY + Math.sin(elapsedTime * 0.75 + m.phaseOffset) * 0.035;
        m.mesh.rotation.x = m.baseRotX + Math.cos(elapsedTime * 0.65 + m.phaseOffset) * 0.02;
      } else {
        m.mesh.rotation.y = Math.sin(elapsedTime * 0.5) * 0.015;
      }

      // Contact shadow sync
      if (m.shadowMesh) {
        m.shadowMesh.position.x = m.mesh.position.x;
        m.shadowMesh.position.z = m.mesh.position.z;
        m.shadowMesh.scale.setScalar(1 + Math.sin(elapsedTime * 1.3 + m.phaseOffset) * 0.04);
      }

      // Approach highlight: subtle lift as camera glides near
      const distToCamera = Math.abs(this.camera.position.z - m.z);
      if (distToCamera < 460) {
        const factor = 1 - distToCamera / 460;
        m.mesh.position.y += factor * 6;
      }
    });

    // Scan animated laser alignment lines across slabs
    this.laserLines.forEach((laser) => {
      laser.mesh.position.y = Math.sin(elapsedTime * laser.speed) * (laser.maxTravel || 55);
    });

    // 4. Rotate Central Architectural Beacon
    if (this.centralCrystal) {
      this.centralCrystal.rotation.y += delta * 0.45;
      this.centralCrystal.rotation.x = Math.sin(elapsedTime * 0.5) * 0.15;
      this.centralCrystal.position.y = (this.isMobile ? 162 : 155) + Math.sin(elapsedTime * 1.4) * 6;
    }

    // 5. Gently drift ambient dust particles
    if (this.particles) {
      const positions = this.particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(elapsedTime + positions[i]) * 0.16;
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
