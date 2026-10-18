/**
 * LBK Surfaces - Master 3D Spatial Flythrough Scrollytelling Engine
 * Seamlessly Integrated Claude 3D Scrollytelling Architecture
 * Procedural Luxury Marble Bookmatching, Morphing Stone Floors,
 * LBK Architectural Tape Ring Beacon, Tap-to-Inspect Drawer & Native 2x Retina Clarity.
 */

import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  { n: "Villa Alankrit", s: "Grand Double-Height Foyer & Marble Staircase", file: "/slabs/slab_01.jpg", k: "vein", base: "#ecebe7", vein: "#7d7d85", w: 1 },
  { n: "The Mewar Penthouse", s: "Panda & Statuario Bookmatched Marble Lounge", file: "/slabs/slab_02.jpg", k: "vein", base: "#f4f2ee", vein: "#8a7f6a", w: 1.6 },
  { n: "Sovereign Villa", s: "Palatial Great Room & Statuario Feature Wall", file: "/slabs/slab_03.jpg", k: "strata", base: "#c99a62", vein: "#8f5f33" },
  { n: "Lakefront Residence", s: "Master Bath Cladding & Floating Stone Vanity", file: "/slabs/slab_04.jpg", k: "vein", base: "#8fa3a6", vein: "#e8efe9", w: 1.3 },
  { n: "Hilltop Suite", s: "High-Gloss Italian Crema Marfil Living Room", file: "/slabs/slab_05.jpg", k: "chips", base: "#d9d2c4" },
  { n: "Royal Orchid Estate", s: "Turnkey Villa Architecture & Stone Pool Deck", file: "/slabs/slab_06.jpg", k: "vein", base: "#14120f", vein: "#C5A15B", w: 1.8 }
];

const ZS = [-280, -640, -1000, -1360, -1720, -2340];
const SIDE = [-1, 1, -1, 1, -1, 0];
const DESC = [
  "Seamless Calacatta & Statuario marble flooring flowing through the grand foyer, paired with cantilevered stone staircase civil masonry.",
  "Dramatic high-contrast bookmatched Panda marble with bold organic dark veins spanning seamlessly across monolithic floor tiles and architectural joinery.",
  "Floor-to-ceiling bookmatched marble accent wall, recessed architectural tray lighting, and integrated civil stonework for the grand villa hall.",
  "Floor-to-ceiling precision-cut bookmatched dark marble wall panels with integrated architectural cove lighting and solid stone vanity craftsmanship.",
  "Mirror-polished beige Italian marble flooring reflecting warm ambient light, complemented by bespoke marble inlay tables and classical civil moulding.",
  "Complete turnkey bungalow execution featuring precision-laid outdoor stone pool decking, glass curtain wall integration, and seamless interior stone masonry."
];

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

const THEMES = [
  { id: 1, n: 'Onyx River Calacatta', file: '/tiles/tile_01.jpg', p: 420, top: '#EAE5DB', mid: '#F4EFE6', low: '#DFD6C4', glow: '#D4AF37' },
  { id: 2, n: 'Statuario Classic Vein', file: '/tiles/tile_02.jpg', p: 420, top: '#F2EDE4', mid: '#F9F6F0', low: '#E8E1D3', glow: '#C5A15B' },
  { id: 3, n: 'Royal Obsidian Diamond', file: '/tiles/tile_03.jpg', p: 380, top: '#E0DCD5', mid: '#EDE8E0', low: '#D5CFC5', glow: '#C5A15B' },
  { id: 4, n: 'Ivory Polish Vitrified', file: '/tiles/tile_04.jpg', p: 400, top: '#F4F0E8', mid: '#FAF8F3', low: '#ECE5D8', glow: '#E6C98C' },
  { id: 5, n: 'Artisanal Rosette Medallion', file: '/tiles/tile_05.jpg', p: 380, top: '#EADBCE', mid: '#F4E7DA', low: '#DFCEBE', glow: '#D9A066' },
  { id: 6, n: 'Honed Grigio Granite', file: '/tiles/tile_06.jpg', p: 420, top: '#DEDBD7', mid: '#EAE7E3', low: '#D2CECA', glow: '#C5A15B' },
  { id: 7, n: 'Floral Geometry Inlay', file: '/tiles/tile_07.jpg', p: 380, top: '#E5E1D9', mid: '#F0ECE4', low: '#DCD7CE', glow: '#C5A15B' },
  { id: 8, n: 'Silver Travertine Grain', file: '/tiles/tile_08.jpg', p: 400, top: '#E2DFDA', mid: '#ECE9E4', low: '#DAD6D0', glow: '#C5A15B' },
  { id: 9, n: 'Golden Travertine Vein', file: '/tiles/tile_09.jpg', p: 420, top: '#EFE3CF', mid: '#F7ECD9', low: '#E3D2B4', glow: '#D8B878' },
  { id: 10, n: 'Concentric Wood & Stone', file: '/tiles/tile_10.jpg', p: 380, top: '#E7DAC8', mid: '#F2E6D4', low: '#DAC8B2', glow: '#D9A066' },
  { id: 11, n: 'Chevron Parquet Wood', file: '/tiles/tile_11.jpg', p: 380, top: '#EFDDC4', mid: '#F6E8D2', low: '#E4CEAD', glow: '#D9A066' },
  { id: 12, n: 'Moroccan Star Medallion', file: '/tiles/tile_12.jpg', p: 380, top: '#DCE4E8', mid: '#E9F0F4', low: '#CFDBE0', glow: '#C5A15B' },
  { id: 13, n: 'Tufted Diamond Ceramic', file: '/tiles/tile_13.jpg', p: 380, top: '#EBDDC9', mid: '#F5E8D6', low: '#DECBB3', glow: '#D4AF37' },
  { id: 14, n: 'Andalusian Patchwork', file: '/tiles/tile_14.jpg', p: 380, top: '#EBDCCE', mid: '#F5E7DA', low: '#DFCCBC', glow: '#D4AF37' },
  { id: 15, n: 'Diamond Frame Carrara', file: '/tiles/tile_15.jpg', p: 380, top: '#E4D6C4', mid: '#EFE2D2', low: '#D7C4AF', glow: '#C5A15B' },
  { id: 16, n: 'Staggered Wood Plank', file: '/tiles/tile_16.jpg', p: 380, top: '#E8DAC8', mid: '#F3E7D5', low: '#DCCBB5', glow: '#D9A066' },
  { id: 17, n: 'Granular Terrazzo Stone', file: '/tiles/tile_17.jpg', p: 420, top: '#E6E2DB', mid: '#F1EDE6', low: '#DCD7CE', glow: '#C5A15B' },
  { id: 18, n: 'Crema Marfil Soft Vein', file: '/tiles/tile_18.jpg', p: 420, top: '#F1E8D8', mid: '#FAF2E4', low: '#E6DAC4', glow: '#E6C98C' },
  { id: 19, n: 'Baroque Scroll Medallion', file: '/tiles/tile_19.jpg', p: 380, top: '#E8DAC6', mid: '#F3E6D2', low: '#DCCAB0', glow: '#D4AF37' },
  { id: 20, n: 'Statuario Venato Bookmatch', file: '/tiles/tile_20.jpg', p: 420, top: '#ECE7DF', mid: '#F7F3EB', low: '#DFD8CE', glow: '#C5A15B' },
  { id: 21, n: 'Optical 3D Gold Prism', file: '/tiles/tile_21.jpg', p: 380, top: '#EADEC8', mid: '#F5E9D5', low: '#DECBB2', glow: '#D4AF37' },
  { id: 22, n: 'Brass Inlay Statuario', file: '/tiles/tile_22.jpg', p: 400, top: '#EAE4D8', mid: '#F5EFE4', low: '#DFD6C7', glow: '#D4AF37' },
  { id: 23, n: 'Pure Statuario Marble', file: '/tiles/tile_23.jpg', p: 420, top: '#EEEAE2', mid: '#F8F5EE', low: '#DFD9CE', glow: '#C5A15B' },
];


const hex = h => [1, 3, 5].map(i => parseInt(h.substr(i, 2), 16) / 255);
THEMES.forEach(t => ['top', 'mid', 'low', 'glow'].forEach(k => t[k + 'C'] = hex(t[k])));
const rng = s => () => (s = (s * 16807) % 2147483647) / 2147483647;

export class Hero3DScrollytelling {
  constructor(options = {}) {
    this.trackId = options.trackId || 'track';
    this.canvasId = options.canvasId || 'gl';
    this.stageId = options.stageId || 'stage';

    this.cv = document.getElementById(this.canvasId);
    this.track = document.getElementById(this.trackId);
    this.stage = document.getElementById(this.stageId);

    if (!this.cv || !this.track) {
      console.warn('Hero3DScrollytelling: Required elements not found:', { cv: this.cv, track: this.track });
      return;
    }

    this.p = 0;
    this.sp = 0;
    this.tx = 0;
    this.ty = 0;
    this.mx = 0;
    this.my = 0;
    this.mons = [];

    // Renderer with true 2x native Retina sharpness
    this.r = new THREE.WebGLRenderer({
      canvas: this.cv,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.r.toneMapping = THREE.ACESFilmicToneMapping;
    if (THREE.SRGBColorSpace) {
      this.r.outputColorSpace = THREE.SRGBColorSpace;
    }

    this.s = new THREE.Scene();
    this.s.background = new THREE.Color(0xFAF9F6);
    this.s.fog = new THREE.Fog(0xFAF9F6, 1300, 3800);
    this.cam = new THREE.PerspectiveCamera(48, 1, 1, 6000);

    // Dynamic S-curve flythrough spline
    this.curve = new THREE.CatmullRomCurve3(
      [
        [0, 0, 200],
        [26, -8, -150],
        [-26, 2, -500],
        [26, 8, -850],
        [-26, 0, -1200],
        [22, -4, -1580],
        [0, 0, -1960]
      ].map(a => new THREE.Vector3(...a))
    );

    this.mobile = window.innerWidth < 768;

    this.lights();
    this.sky();
    this.floor();
    this.dust();
    // this.beacon(); // disabled for now

    PROJECTS.forEach((p, i) => this.monolith(p, i));

    // Ground illumination pools under monoliths
    const pc = document.createElement('canvas');
    pc.width = pc.height = 128;
    const px = pc.getContext('2d');
    const gr = px.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(212,175,55,.5)');
    gr.addColorStop(1, 'rgba(212,175,55,0)');
    px.fillStyle = gr;
    px.fillRect(0, 0, 128, 128);
    const pt = new THREE.CanvasTexture(pc);

    this.mons.forEach(m => {
      const o = new THREE.Mesh(
        new THREE.PlaneGeometry(300, 300),
        new THREE.MeshBasicMaterial({
          map: pt,
          transparent: true,
          depthWrite: false,
          polygonOffset: true,
          polygonOffsetFactor: -2
        })
      );
      o.rotation.x = -Math.PI / 2;
      this.s.add(o);
      m.pool = o;
    });

    this.hud = {
      t: document.getElementById('hudTxt'),
      b: document.getElementById('barI'),
      i: document.getElementById('intro'),
      o: document.getElementById('outro')
    };

    // Right-rail jump buttons
    this.rail = document.getElementById('rail');
    if (this.rail) {
      this.rail.innerHTML = '';
      PROJECTS.forEach((p, i) => {
        const b = document.createElement('button');
        b.title = p.n;
        b.setAttribute('aria-label', p.n);
        b.onclick = () => this.jump(i);
        this.rail.appendChild(b);
      });
    }

    const bindBtn = (id, fn) => {
      const el = document.getElementById(id);
      if (el) {
        const handler = e => {
          e.preventDefault();
          e.stopPropagation();
          fn();
        };
        el.addEventListener('click', handler);
        el.addEventListener('pointerdown', e => e.stopPropagation());
      }
    };

    bindBtn('pv', () => this.step(-1));
    bindBtn('nx', () => this.step(1));
    bindBtn('zIn', () => { this.zt = Math.min(1, this.zt + 0.34); });
    bindBtn('zOut', () => { this.zt = Math.max(0, this.zt - 0.34); });
    bindBtn('shX', () => this.close());

    this.resize();
    this.resizeHandler = () => this.resize();
    window.addEventListener('resize', this.resizeHandler);

    this.pointerMoveHandler = e => {
      this.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      this.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', this.pointerMoveHandler);

    this.ray = new THREE.Raycaster();
    this.sel = null;
    this.ins = null;
    this.k = 0;
    this.zoom = 0;
    this.zt = 0;

    const cv2 = this.r.domElement;
    let d0 = null;
    cv2.addEventListener('pointerdown', e => {
      d0 = { x: e.clientX, y: e.clientY, t: performance.now() };
    });
    cv2.addEventListener('pointerup', e => {
      if (!d0) return;
      const mv = Math.hypot(e.clientX - d0.x, e.clientY - d0.y);
      const dt = performance.now() - d0.t;
      d0 = null;
      if (mv < 14 && dt < 600) {
        if (this.sel !== null) {
          const hit = this.pick(e.clientX, e.clientY);
          if (hit >= 0 && hit !== this.sel) {
            this.open(hit);
          } else if (hit < 0) {
            this.close();
          }
        } else {
          this.tap(e.clientX, e.clientY);
        }
      }
    });
    cv2.addEventListener('pointermove', e => {
      if (e.pointerType === 'mouse' && this.sel === null) {
        cv2.style.cursor = this.pick(e.clientX, e.clientY) >= 0 ? 'pointer' : '';
      }
    });

    this.keyHandler = e => {
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.step(-1);
      if (e.key === 'ArrowRight') this.step(1);
    };
    window.addEventListener('keydown', this.keyHandler);

    this.wheelHandler = e => {
      if (this.sel !== null) this.zt = clamp(this.zt - e.deltaY * 0.001, 0, 1);
    };
    window.addEventListener('wheel', this.wheelHandler, { passive: true });

    // GSAP ScrollTrigger Integration
    this.st = ScrollTrigger.create({
      trigger: '#' + this.trackId,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.0,
      onUpdate: s => {
        this.p = s.progress;
      }
    });

    window.__lbk = this;
    this.t0 = performance.now();
    this.loop = this.loop.bind(this);
    this.loop();
    console.log('Hero3DScrollytelling: Master Engine Initialized.');
  }

  lights() {
    this.s.add(new THREE.HemisphereLight(0xfff6e6, 0xd9cfb8, 1.15));
    const d = new THREE.DirectionalLight(0xffffff, 2.1);
    d.position.set(220, 320, 260);
    this.s.add(d);
    this.glow = new THREE.PointLight(0xD4AF37, 2.2, 900);
    this.s.add(this.glow);
  }

  floor() {
    this.makeFloor();
  }

  dust() {
    const n = this.mobile ? 450 : 800;
    const pos = new Float32Array(n * 3);
    this.base = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 800;
      pos[i * 3 + 1] = this.base[i] = -120 + Math.random() * 340;
      pos[i * 3 + 2] = 300 - Math.random() * 2800;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.dustPts = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        color: 0xC5A15B,
        size: 3.2,
        transparent: true,
        opacity: 0.75,
        depthWrite: false
      })
    );
    this.s.add(this.dustPts);
  }

  beacon() {
    // LBK 3D Rotating Hoarding Beacon (from LBKOrbitAnimation)
    // Procedural canvas ribbon, dual-sided branding, polished brass rims, hub & 4 radial suspension spokes,
    // suspension rod, and ground illumination pool.
    const R = 86; // Architectural ring radius
    const H = 48; // Architectural banner height
    const SW = 2048; // Ultra-crisp 2K texture width
    const SH = 600;  // Ultra-crisp texture height

    const seg = flip => {
      const c = document.createElement('canvas');
      c.width = SW;
      c.height = SH;
      const x = c.getContext('2d');
      if (flip) {
        x.translate(SW, 0);
        x.scale(-1, 1);
      }

      // Rich dark obsidian banner background
      const bg = x.createLinearGradient(0, 0, SW, SH);
      bg.addColorStop(0, '#1d1a17');
      bg.addColorStop(0.5, '#2b2622');
      bg.addColorStop(1, '#171513');
      x.fillStyle = bg;
      x.fillRect(0, 0, SW, SH);

      // Gold architectural trim borders
      x.fillStyle = '#C5A15B';
      x.fillRect(0, 0, SW, 18);
      x.fillRect(0, SH - 18, SW, 18);
      x.fillRect(0, 42, SW, 4);
      x.fillRect(0, SH - 46, SW, 4);
      x.fillRect(0, 0, 12, SH);
      x.fillRect(SW - 12, 0, 12, SH);

      // LBK Brandmark with polished gold gradient
      const gg = x.createLinearGradient(0, 100, 0, 500);
      gg.addColorStop(0, '#f8e4aa');
      gg.addColorStop(0.5, '#D4AF37');
      gg.addColorStop(1, '#9e7b24');
      x.textAlign = 'left';
      x.fillStyle = gg;
      x.font = '700 340px "Cinzel", "Playfair Display", Georgia, serif';
      x.fillText('LBK', 80, 440);

      // Central gold diamond ornament
      x.fillStyle = '#C5A15B';
      x.beginPath();
      x.moveTo(1024, 300);
      x.lineTo(1048, 324);
      x.lineTo(1024, 348);
      x.lineTo(1000, 324);
      x.fill();

      // Architectural text fit helper
      const fit = (t, fs, w, y, col, wt) => {
        x.fillStyle = col;
        do {
          x.font = `${wt} ${fs}px "Cinzel", "Playfair Display", Georgia, serif`;
          fs -= 2;
        } while (x.measureText(t).width > w && fs > 20);
        x.fillText(t, 1100, y);
      };

      fit('ARCHITECTURAL STONE', 64, 860, 240, '#FAF9F6', 600);
      fit('CIVIL CONTRACTOR', 64, 860, 340, '#e0c88f', 600);
      fit('MUMBAI', 56, 860, 440, '#D4AF37', 700);

      return c;
    };

    const mk = f => {
      const t = new THREE.CanvasTexture(seg(f));
      t.wrapS = THREE.RepeatWrapping;
      t.repeat.set(3, 1);
      t.anisotropy = Math.min(this.r.capabilities.getMaxAnisotropy(), 8);
      if (THREE.SRGBColorSpace) t.colorSpace = THREE.SRGBColorSpace;
      t.generateMipmaps = true;
      t.minFilter = THREE.LinearMipmapLinearFilter;
      t.magFilter = THREE.LinearFilter;
      return t;
    };

    const tO = mk(false);
    const tI = mk(true);

    const mat = (t, side) => new THREE.MeshStandardMaterial({
      map: t,
      emissive: 0xffffff,
      emissiveMap: t,
      emissiveIntensity: 0.38,
      roughness: 0.42,
      metalness: 0.12,
      side
    });

    const brass = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.92,
      roughness: 0.22
    });

    this.bc = new THREE.Group();
    this.ring = new THREE.Group();

    // Dual-sided hoarding ribbon cylinder
    this.ring.add(new THREE.Mesh(new THREE.CylinderGeometry(R, R, H, 96, 1, true), mat(tO, THREE.FrontSide)));
    this.ring.add(new THREE.Mesh(new THREE.CylinderGeometry(R - 0.6, R - 0.6, H, 96, 1, true), mat(tI, THREE.BackSide)));

    // Polished brass ring rims top and bottom
    [H / 2, -H / 2].forEach(y => {
      const t = new THREE.Mesh(new THREE.TorusGeometry(R, 2.2, 12, 96), brass);
      t.rotation.x = Math.PI / 2;
      t.position.y = y;
      t.castShadow = true;
      this.ring.add(t);
    });

    // Hub and rigging spokes
    const hubY = H / 2 + 28;
    const up = new THREE.Vector3(0, 1, 0);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 5, 24), brass);
    hub.position.y = hubY;
    this.ring.add(hub);

    for (let k = 0; k < 4; k++) {
      const a = (k * Math.PI) / 2;
      const end = new THREE.Vector3(Math.cos(a) * R, H / 2, Math.sin(a) * R);
      const st = new THREE.Vector3(0, hubY, 0);
      const d = end.clone().sub(st);
      const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, d.length(), 10), brass);
      sp.position.copy(st.clone().add(end).multiplyScalar(0.5));
      sp.quaternion.setFromUnitVectors(up, d.clone().normalize());
      this.ring.add(sp);
    }

    // Suspension Rod extending upward
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 160, 12), brass);
    rod.position.y = hubY + 80;
    this.bc.add(rod);
    this.bc.add(this.ring);

    // Soft ground illumination pool under beacon
    const poolCanvas = document.createElement('canvas');
    poolCanvas.width = poolCanvas.height = 128;
    const pctx = poolCanvas.getContext('2d');
    const pgr = pctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    pgr.addColorStop(0, 'rgba(212, 175, 55, 0.42)');
    pgr.addColorStop(0.5, 'rgba(212, 175, 55, 0.14)');
    pgr.addColorStop(1, 'rgba(212, 175, 55, 0)');
    pctx.fillStyle = pgr;
    pctx.fillRect(0, 0, 128, 128);

    const poolTexture = new THREE.CanvasTexture(poolCanvas);
    this.beaconPool = new THREE.Mesh(
      new THREE.PlaneGeometry(240, 240),
      new THREE.MeshBasicMaterial({
        map: poolTexture,
        transparent: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -2
      })
    );
    this.beaconPool.rotation.x = -Math.PI / 2;
    this.beaconPool.position.y = -124.2;
    this.s.add(this.beaconPool);

    this.s.add(this.bc);
  }

    texture(P, seed) {
    const W = this.mobile ? 512 : 1024, H = Math.round(W * 1.4), h = W / 2, R = rng(seed);
    const t = document.createElement('canvas');
    t.width = h;
    t.height = H;
    const g = t.getContext('2d');
    g.fillStyle = P.base;
    g.fillRect(0, 0, h, H);

    for (let i = 0; i < 30; i++) {
      const x = R() * h, y = R() * H, r = 60 + R() * 160;
      const gr = g.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, 'rgba(255,255,255,.10)');
      gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr;
      g.fillRect(0, 0, h, H);
    }

    if (P.k === 'vein') {
      for (let i = 0; i < 18; i++) {
        let x = R() * h, y = -20, a = Math.PI / 2 + (R() - 0.5) * 0.9;
        g.beginPath();
        g.moveTo(x, y);
        for (let k = 0; k < 64; k++) {
          a += (R() - 0.5) * 0.55;
          x += Math.cos(a) * H / 55;
          y += Math.sin(a) * H / 55;
          g.lineTo(x, y);
        }
        g.strokeStyle = P.vein;
        g.globalAlpha = 0.25 + R() * 0.55;
        g.lineWidth = (P.w || 1) * (0.6 + R() * 2.4);
        g.stroke();
      }
    } else if (P.k === 'strata') {
      for (let i = 0; i < 30; i++) {
        const y0 = i * H / 30, ph = R() * 6;
        g.beginPath();
        for (let x = 0; x <= h; x += 8) {
          const y = y0 + Math.sin(x / 70 + ph) * 6;
          x ? g.lineTo(x, y) : g.moveTo(x, y);
        }
        g.strokeStyle = P.vein;
        g.globalAlpha = 0.15 + R() * 0.3;
        g.lineWidth = 2 + R() * 6;
        g.stroke();
      }
    } else {
      const cols = ['#2b2926', '#b8923f', '#8b8579', '#f1ece0'];
      for (let i = 0; i < 190; i++) {
        const x = R() * h, y = R() * H, r = 4 + R() * 15;
        g.beginPath();
        for (let k = 0; k < 6; k++) {
          const a = k / 6 * 6.283, rr = r * (0.6 + R() * 0.5);
          g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
        }
        g.closePath();
        g.fillStyle = cols[i % 4];
        g.globalAlpha = 0.9;
        g.fill();
      }
    }

    g.globalAlpha = 1;
    const c = document.createElement('canvas');
    c.width = W;
    c.height = H;
    const x = c.getContext('2d');
    x.drawImage(t, 0, 0);
    x.save();
    x.translate(W, 0);
    x.scale(-1, 1);
    x.drawImage(t, 0, 0);
    x.restore();
    x.fillStyle = 'rgba(197,161,91,.55)';
    x.fillRect(h - 1, 0, 2, H);

    const tx = new THREE.CanvasTexture(c);
    tx.anisotropy = Math.min(this.r.capabilities.getMaxAnisotropy(), 8);
    if (THREE.SRGBColorSpace) tx.colorSpace = THREE.SRGBColorSpace;
    tx.generateMipmaps = true;
    tx.minFilter = THREE.LinearMipmapLinearFilter;
    tx.magFilter = THREE.LinearFilter;
    return tx;
  }

  plaque(P) {
    const c = document.createElement('canvas');
    c.width = 1024;
    c.height = 200;
    const x = c.getContext('2d');
    x.fillStyle = 'rgba(26,24,22,.82)';
    x.fillRect(0, 0, 1024, 200);
    x.strokeStyle = '#C5A15B';
    x.lineWidth = 4;
    x.strokeRect(8, 8, 1008, 184);
    x.textAlign = 'center';
    x.fillStyle = '#FAF9F6';

    let fs = 58;
    x.font = `500 ${fs}px Cinzel, Georgia, serif`;
    while (x.measureText(P.n).width > 940 && fs > 30) {
      fs -= 3;
      x.font = `500 ${fs}px Cinzel, Georgia, serif`;
    }
    x.fillText(P.n, 512, 92);
    x.fillStyle = '#C5A15B';
    x.font = '400 38px Inter, sans-serif';
    x.fillText(P.s, 512, 150);

    const t = new THREE.CanvasTexture(c);
    if (THREE.SRGBColorSpace) t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  }

  monolith(P, i) {
    const W = 150, H = 210, D = 14, g = new THREE.Group();
    
    // Load luxury tile & marble artwork texture
    const texLoader = new THREE.TextureLoader();
    const slabTex = texLoader.load(`/slabs/slab_0${i + 1}.jpg`);
    slabTex.anisotropy = Math.min(this.r.capabilities.getMaxAnisotropy(), 8);
    if (THREE.SRGBColorSpace) slabTex.colorSpace = THREE.SRGBColorSpace;
    slabTex.minFilter = THREE.LinearMipmapLinearFilter;
    slabTex.magFilter = THREE.LinearFilter;

    // Polished brass edge material for slab sides
    const edgeBrass = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.95,
      roughness: 0.25
    });

    // Front & Back face artwork material with clearcoat marble sheen
    const faceArt = new THREE.MeshStandardMaterial({
      map: slabTex,
      roughness: 0.18,
      metalness: 0.08
    });

    // BoxGeometry face materials: [right, left, top, bottom, front, back]
    const slabMaterials = [edgeBrass, edgeBrass, edgeBrass, edgeBrass, faceArt, faceArt];

    const slab = new THREE.Mesh(
      new THREE.BoxGeometry(W, H, D),
      slabMaterials
    );
    const brass = new THREE.Mesh(
      new THREE.BoxGeometry(W + 10, H + 10, 10),
      new THREE.MeshStandardMaterial({ color: 0xD4AF37, metalness: 0.95, roughness: 0.28 })
    );
    const wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(W + 14, H + 14, 18)),
      new THREE.LineBasicMaterial({ color: 0xC5A15B })
    );
    const scan = new THREE.Mesh(
      new THREE.PlaneGeometry(W, 1.8),
      new THREE.MeshBasicMaterial({ color: 0xD4AF37, transparent: true, opacity: 0.85, fog: false })
    );
    scan.position.z = D / 2 + 0.6;
    const pl = new THREE.Mesh(
      new THREE.PlaneGeometry(W * 0.9, W * 0.9 * 200 / 1024),
      new THREE.MeshBasicMaterial({ map: this.plaque(P), transparent: true })
    );
    pl.position.set(0, -H / 2 + 26, D / 2 + 0.5);

    g.add(brass, slab, wire, scan, pl);
    g.position.set(0, 0, ZS[i]);
    this.s.add(g);
    this.mons.push({ g, scan, i, final: i === 5 });
  }

  sky() {
    this.su = {
      t: { value: 0 },
      cTop: { value: new THREE.Vector3() },
      cMid: { value: new THREE.Vector3() },
      cLow: { value: new THREE.Vector3() },
      cGlow: { value: new THREE.Vector3() }
    };
    const m = new THREE.ShaderMaterial({
      uniforms: this.su,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      vertexShader: `varying vec3 vD;void main(){vD=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragmentShader: `uniform float t;uniform vec3 cTop,cMid,cLow,cGlow;varying vec3 vD;
      void main(){float y=vD.y,a=atan(vD.x,vD.z);
        vec3 c=y>0.?mix(cMid,cTop,smoothstep(0.,.8,y)):mix(cMid,cLow,smoothstep(0.,-.5,y));
        float band=exp(-pow((y-.16-.07*sin(a*2.+t*.25))*6.,2.));
        c=mix(c,cGlow,band*(.35+.25*sin(a*3.-t*.3)));
        float rays=pow(.5+.5*sin(a*7.+t*.35+sin(t*.2)*2.),4.)*smoothstep(.9,.05,y)*smoothstep(-.05,.1,y);
        c+=cGlow*rays*.10;
        c+=smoothstep(-.1,.5,y)*.03*sin(t*.5+a*5.);
        gl_FragColor=vec4(c,1.);}`
    });
    this.skyM = new THREE.Mesh(new THREE.SphereGeometry(5000, 32, 16), m);
    this.skyM.renderOrder = -10;
    this.skyM.frustumCulled = false;
    this.s.add(this.skyM);
  }

  tileTex(i) {
    const S = this.mobile ? 512 : 1024, c = document.createElement('canvas');
    c.width = c.height = S;
    const g = c.getContext('2d'), R = rng(97 + i * 13);

    const veins = (x, y, w, h, col, n, lw, al) => {
      g.save();
      g.beginPath();
      g.rect(x, y, w, h);
      g.clip();
      for (let k = 0; k < n; k++) {
        let px = x + R() * w, py = y - 10, a = Math.PI / 2 + (R() - 0.5) * 1.2;
        g.beginPath();
        g.moveTo(px, py);
        for (let s = 0; s < 60; s++) {
          a += (R() - 0.5) * 0.7;
          px += Math.cos(a) * h / 45;
          py += Math.sin(a) * h / 45;
          g.lineTo(px, py);
        }
        g.strokeStyle = col;
        g.globalAlpha = al * (0.4 + R() * 0.6);
        g.lineWidth = lw * (0.4 + R() * 2.2);
        g.stroke();
      }
      g.restore();
      g.globalAlpha = 1;
    };

    const cloud = (x, y, w, h, rgb, al, n) => {
      g.save();
      g.beginPath();
      g.rect(x, y, w, h);
      g.clip();
      for (let k = 0; k < n; k++) {
        const px = x + R() * w, py = y + R() * h, r = w * (0.15 + R() * 0.3);
        const gr = g.createRadialGradient(px, py, 0, px, py, r);
        gr.addColorStop(0, `rgba(${rgb},${al})`);
        gr.addColorStop(1, `rgba(${rgb},0)`);
        g.fillStyle = gr;
        g.fillRect(x, y, w, h);
      }
      g.restore();
    };

    const grid = (n, col, lw) => {
      const q = S / n;
      g.strokeStyle = col;
      g.lineWidth = lw;
      g.beginPath();
      for (let k = 0; k <= n; k++) {
        g.moveTo(k * q, 0);
        g.lineTo(k * q, S);
        g.moveTo(0, k * q);
        g.lineTo(S, k * q);
      }
      g.stroke();
    };

    const marble = (base, crgb, vs, gc, glw) => {
      const q = S / 2;
      g.fillStyle = base;
      g.fillRect(0, 0, q, q);
      cloud(0, 0, q, q, crgb, 0.07, 16);
      vs.forEach(v => veins(0, 0, q, q, v[0], v[1], v[2] * S, v[3]));
      g.save();
      g.translate(S, 0);
      g.scale(-1, 1);
      g.drawImage(c, 0, 0, q, q, 0, 0, q, q);
      g.restore();
      g.save();
      g.translate(0, S);
      g.scale(1, -1);
      g.drawImage(c, 0, 0, S, q, 0, 0, S, q);
      g.restore();
      grid(2, gc, glw);
    };

    if (i === 0) {
      marble('#f8f5ef', '120,116,122', [['#8e8b90', 5, 0.004, 0.55], ['#c9a45c', 5, 0.003, 0.8], ['#d9bd7e', 3, 0.0015, 0.7]], '#c9a45c', S / 220);
    } else if (i === 1) {
      marble('#15130f', '70,62,52', [['#e9e4d8', 4, 0.0026, 0.6], ['#c5a15b', 6, 0.0034, 0.85], ['#f1d995', 3, 0.0014, 0.8]], '#b8924a', S / 190);
    } else if (i === 2) {
      const N = 16, u = S / N, tones = ['#5a3a22', '#6b4528', '#7a4f2c', '#4f321d', '#86582f', '#62401f'];
      for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
          const d = (((x - y) % 8) + 8) % 8;
          if (d !== 0 && d !== 7) continue;
          const hz = d === 0, w = hz ? 4 * u : u, h = hz ? u : 4 * u;
          const tn = tones[Math.floor(R() * tones.length)], gs = [R(), R(), R(), R()];
          for (const ox of [0, -S]) {
            for (const oy of [0, -S]) {
              const px = x * u + ox, py = y * u + oy;
              if (px > S || px + w < 0 || py > S || py + h < 0) continue;
              g.fillStyle = tn;
              g.fillRect(px, py, w, h);
              gs.forEach((q, k) => {
                g.strokeStyle = k % 2 ? 'rgba(255,220,170,.12)' : 'rgba(20,8,2,.25)';
                g.lineWidth = 1;
                g.beginPath();
                if (hz) {
                  g.moveTo(px, py + q * h);
                  g.lineTo(px + w, py + q * h);
                } else {
                  g.moveTo(px + q * w, py);
                  g.lineTo(px + q * w, py + h);
                }
                g.stroke();
              });
              g.strokeStyle = 'rgba(18,8,2,.55)';
              g.lineWidth = S / 360;
              g.strokeRect(px, py, w, h);
            }
          }
        }
      }
    } else if (i === 3) {
      const n = 4, cs = S / n, gp = cs * 0.035, k = cs * 0.27, hw = cs / 2 - gp;
      g.fillStyle = '#b9985a';
      g.fillRect(0, 0, S, S);
      for (let a = 0; a < n; a++) {
        for (let b = 0; b < n; b++) {
          const cx = (a + 0.5) * cs, cy = (b + 0.5) * cs;
          g.save();
          g.beginPath();
          g.moveTo(cx - hw + k, cy - hw);
          g.lineTo(cx + hw - k, cy - hw);
          g.lineTo(cx + hw, cy - hw + k);
          g.lineTo(cx + hw, cy + hw - k);
          g.lineTo(cx + hw - k, cy + hw);
          g.lineTo(cx - hw + k, cy + hw);
          g.lineTo(cx - hw, cy + hw - k);
          g.lineTo(cx - hw, cy - hw + k);
          g.closePath();
          g.fillStyle = (a + b) % 2 ? '#f6f2e8' : '#eee8da';
          g.fill();
          g.clip();
          veins(cx - hw, cy - hw, 2 * hw, 2 * hw, '#9a9690', 3, S / 520, 0.5);
          g.restore();
        }
      }
      const dh = k + gp * 1.6;
      g.lineWidth = S / 380;
      g.strokeStyle = '#d4af37';
      for (let a = 0; a <= n; a++) {
        for (let b = 0; b <= n; b++) {
          const cx = a * cs, cy = b * cs;
          g.fillStyle = '#1d4d45';
          g.beginPath();
          g.moveTo(cx, cy - dh);
          g.lineTo(cx + dh, cy);
          g.lineTo(cx, cy + dh);
          g.lineTo(cx - dh, cy);
          g.closePath();
          g.fill();
          g.stroke();
          g.fillStyle = '#d4af37';
          g.beginPath();
          g.arc(cx, cy, dh * 0.16, 0, 6.283);
          g.fill();
        }
      }
    } else {
      const n = 3, q = S / n, sh = ['#e6d9bf', '#e2d3b5', '#eadec6'];
      for (let a = 0; a < n; a++) {
        for (let b = 0; b < n; b++) {
          const x = a * q, y = b * q;
          g.save();
          g.beginPath();
          g.rect(x, y, q, q);
          g.clip();
          g.fillStyle = sh[(a * 3 + b) % 3];
          g.fillRect(x, y, q, q);
          cloud(x, y, q, q, '190,160,110', 0.16, 10);
          for (let k = 0; k < 90; k++) {
            const px = x + R() * q, py = y + R() * q;
            g.strokeStyle = `rgba(150,118,76,${0.12 + R() * 0.2})`;
            g.lineWidth = S / 1100 + R() * S / 700;
            g.beginPath();
            g.moveTo(px, py);
            g.lineTo(px + q * (0.1 + R() * 0.4), py + (R() - 0.5) * 3);
            g.stroke();
          }
          for (let k = 0; k < 45; k++) {
            g.fillStyle = `rgba(120,92,58,${0.15 + R() * 0.2})`;
            g.beginPath();
            g.ellipse(x + R() * q, y + R() * q, S / 260 + R() * S / 220, S / 600 + R() * S / 420, 0, 0, 6.283);
            g.fill();
          }
          g.restore();
        }
      }
      grid(n, '#cbb98f', S / 230);
    }

    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = Math.min(this.r.capabilities.getMaxAnisotropy(), 8);
    if (THREE.SRGBColorSpace) t.colorSpace = THREE.SRGBColorSpace;
    t.generateMipmaps = true;
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.magFilter = THREE.LinearFilter;
    return t;
  }

  makeFloor() {
    const texLoader = new THREE.TextureLoader();
    this.ft = THEMES.map(theme => {
      const tex = texLoader.load(theme.file);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.anisotropy = Math.min(this.r.capabilities.getMaxAnisotropy(), 8);
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      if (THREE.SRGBColorSpace) {
        tex.colorSpace = THREE.SRGBColorSpace;
      }
      return tex;
    });
    this.fu = {
      tA: { value: this.ft[0] },
      tB: { value: this.ft[0] },
      pA: { value: THEMES[0].p },
      pB: { value: THEMES[0].p },
      uR: { value: 1e5 },
      uCam: { value: new THREE.Vector3() },
      fogC: { value: new THREE.Vector3() },
      fogNF: { value: new THREE.Vector2(1300, 3800) }
    };
    const m = new THREE.ShaderMaterial({
      uniforms: this.fu,
      vertexShader: `varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,
      fragmentShader: `uniform sampler2D tA,tB;uniform float pA,pB,uR;uniform vec3 uCam,fogC;uniform vec2 fogNF;varying vec3 vW;
      void main(){vec3 a=texture2D(tA,vW.xz/pA).rgb,b=texture2D(tB,vW.xz/pB).rgb;
        float d=distance(vW.xz,uCam.xz);
        float m=1.-smoothstep(uR-420.,uR,d);
        vec3 c=mix(a,b,m);
        float rim=smoothstep(uR-420.,uR-200.,d)*(1.-smoothstep(uR-200.,uR,d));
        c+=vec3(.78,.63,.36)*rim*.35;
        c*=mix(1.06,.9,smoothstep(0.,2400.,d));
        float sp=exp(-pow((vW.x-uCam.x)/380.,2.))*smoothstep(2800.,200.,d);c+=vec3(1.,.96,.88)*sp*.09;
        float fd=distance(vW,uCam);
        c=mix(c,fogC,smoothstep(fogNF.x,fogNF.y,fd));
        gl_FragColor=vec4(c,1.);}`
    });
    const f = new THREE.Mesh(new THREE.PlaneGeometry(6000, 6000), m);
    f.rotation.x = -Math.PI / 2;
    f.position.set(0, -125, -1200);
    this.s.add(f);

    this.theme = { from: 0, to: 0, t: 1, last: performance.now() };
    this.lt = 0;
    this.tag = document.getElementById('floorTag');
    if (this.tag) this.tag.textContent = 'FLOOR • ' + THEMES[0].n.toUpperCase();
  }

  env(t) {
    const T = this.theme, now = performance.now(), dt = Math.min(0.1, (now - (this.lt || now)) / 1000);
    this.lt = now;
    if (T.t >= 1 && now - T.last > 5000) {
      T.from = T.to;
      T.to = (T.to + 1) % THEMES.length;
      T.t = 0;
      T.last = now;
      this.fu.tA.value = this.ft[T.from];
      this.fu.pA.value = THEMES[T.from].p;
      this.fu.tB.value = this.ft[T.to];
      this.fu.pB.value = THEMES[T.to].p;
      if (this.tag) this.tag.textContent = `FLOOR ${String(T.to + 1).padStart(2, '0')}/${THEMES.length} • ` + THEMES[T.to].n.toUpperCase();
    }
    let k = 1;
    if (T.t < 1) {
      T.t = Math.min(1, T.t + dt / 2.2);
      k = T.t * T.t * (3 - 2 * T.t);
      this.fu.uR.value = k * 4600;
      if (T.t >= 1) {
        this.fu.tA.value = this.fu.tB.value;
        this.fu.pA.value = this.fu.pB.value;
        this.fu.uR.value = 1e5;
      }
    }
    const L = n => {
      const a = THEMES[T.from][n + 'C'], b = THEMES[T.to][n + 'C'];
      return [0, 1, 2].map(i => a[i] + (b[i] - a[i]) * k);
    };
    const mid = L('mid');
    this.su.cTop.value.set(...L('top'));
    this.su.cMid.value.set(...mid);
    this.su.cLow.value.set(...L('low'));
    this.su.cGlow.value.set(...L('glow'));
    this.su.t.value = t;
    this.skyM.position.copy(this.cam.position);
    this.s.fog.color.setRGB(mid[0], mid[1], mid[2]);
    this.fu.fogC.value.set(...mid);
    this.fu.uCam.value.copy(this.cam.position);
  }

  pick(x, y) {
    const r = this.r.domElement.getBoundingClientRect();
    this.ray.setFromCamera(
      new THREE.Vector2(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1),
      this.cam
    );
    const hits = this.ray.intersectObjects(this.mons.map(m => m.g), true);
    if (!hits.length || hits[0].distance > 4500) return -1;
    let o = hits[0].object;
    while (o) {
      const m = this.mons.find(m => m.g === o);
      if (m) return m.i;
      o = o.parent;
    }
    return -1;
  }

  tap(x, y) {
    if (this.sel !== null) return;
    const i = this.pick(x, y);
    if (i >= 0) this.open(i);
  }

  jump(i) {
    const tr = document.getElementById(this.trackId);
    const stageEl = document.getElementById(this.stageId);
    if (!tr || !stageEl) return;
    const max = tr.offsetHeight - stageEl.clientHeight;
    window.scrollTo({
      top: tr.offsetTop + clamp((200 - ZS[i] - 380) / 2160, 0, 1) * max,
      behavior: 'smooth'
    });
  }

  step(d) {
    if (this.sel === null) return;
    const n = clamp(this.sel + d, 0, PROJECTS.length - 1);
    if (n !== this.sel) this.open(n);
  }

  open(i) {
    this.sel = this.ins = i;
    this.zt = 0;
    this.zoom = 0;
    const shN = document.getElementById('shN');
    const shD = document.getElementById('shD');
    const pv = document.getElementById('pv');
    const nx = document.getElementById('nx');
    const sheet = document.getElementById('sheet');
    const hudBot = document.getElementById('hudBot');
    const stage = document.getElementById(this.stageId);

    if (shN) shN.textContent = PROJECTS[i].n;
    if (shD) shD.textContent = `${i + 1} of ${PROJECTS.length}. ${PROJECTS[i].s}. ${DESC[i]}`;
    if (pv) pv.disabled = i === 0;
    if (nx) nx.disabled = i === PROJECTS.length - 1;
    if (sheet) sheet.classList.add('on');
    if (hudBot) hudBot.style.visibility = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    if (stage) {
      stage.style.touchAction = 'none';
      stage.classList.add('insp');
    }
    const shX = document.getElementById('shX');
    if (shX) shX.focus({ preventScroll: true });
  }

  close() {
    if (this.sel === null) return;
    this.sel = null;
    this.zt = 0;
    const sheet = document.getElementById('sheet');
    const hudBot = document.getElementById('hudBot');
    const stage = document.getElementById(this.stageId);

    if (sheet) sheet.classList.remove('on');
    if (hudBot) hudBot.style.visibility = '';
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    if (stage) {
      stage.style.touchAction = '';
      stage.classList.remove('insp');
    }
  }

  resize() {
    const st = document.getElementById(this.stageId);
    const w = st ? st.clientWidth : window.innerWidth;
    const h = st ? st.clientHeight : window.innerHeight;
    this.mobile = w < 768;

    this.r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.r.setSize(w, h, false);
    this.cam.aspect = w / h;
    this.cam.fov = this.mobile ? 57 : 48;
    this.cam.updateProjectionMatrix();

    const lat = this.mobile ? 0.44 : 1;
    const sc = this.mobile ? 0.62 : 1;

    this.mons.forEach(m => {
      const k = m.final ? 1.25 : 1;
      m.g.scale.setScalar(sc * k);
      m.g.position.x = SIDE[m.i] * 150 * lat;
      m.g.rotation.y = -SIDE[m.i] * 0.32;
    });
  }

  loop() {
    requestAnimationFrame(this.loop);
    const t = (performance.now() - this.t0) / 1000;
    this.sp += (this.p - this.sp) * 0.12;
    this.mx += (this.tx - this.mx) * 0.06;
    this.my += (this.ty - this.my) * 0.06;

    const pos = this.curve.getPoint(this.sp);
    const tan = this.curve.getTangent(this.sp);

    this.k += ((this.sel !== null ? 1 : 0) - this.k) * 0.09;
    if (this.sel === null && this.k < 0.004) {
      this.k = 0;
      this.ins = null;
    }
    this.zoom += (this.zt - this.zoom) * 0.12;
    const e = this.k * this.k * (3 - 2 * this.k);

    const P = new THREE.Vector3(pos.x + this.mx * 14, pos.y + 8 - this.my * 6, pos.z);
    const L = new THREE.Vector3(pos.x + tan.x * 300 + this.mx * 30, pos.y - this.my * 14, pos.z + tan.z * 300);

    if (this.ins !== null && e > 0) {
      const m = this.mons[this.ins];
      const s = m.g.scale.x;
      const hh = 210 * s;
      const ww = 150 * s;
      const tf = Math.tan(this.cam.fov * Math.PI / 360);
      const Hs = this.r.domElement.clientHeight || window.innerHeight;
      const sheetEl = document.getElementById('sheet');
      const f = clamp((Hs - (sheetEl ? sheetEl.offsetHeight : 0)) / Hs, 0.3, 1);
      const dist = Math.max(hh * 0.56 / (tf * f), ww * 0.56 / (tf * this.cam.aspect)) * (1 - 0.62 * this.zoom);
      const cx = m.g.position.x + this.mx * ww * 0.35 * this.zoom;
      const cy = m.g.position.y - (0.5 - f / 2) * 2 * tf * dist - this.my * hh * 0.3 * this.zoom;
      P.lerp(new THREE.Vector3(cx, cy, m.g.position.z + dist), e);
      L.lerp(new THREE.Vector3(cx, cy, m.g.position.z), e);
    }

    if (!this.pp) {
      this.pp = P.clone();
      this.pl = L.clone();
    }
    const dmp = (this.sel !== null || this.k > 0) ? 0.12 : 1;
    this.pp.lerp(P, dmp);
    this.pl.lerp(L, dmp);
    this.cam.position.copy(this.pp);
    this.cam.lookAt(this.pl);

    this.mons.forEach(m => {
      m.scan.position.y = Math.sin(t * 1.3 + m.i) * 105;
      const tr = -SIDE[m.i] * 0.32 * (m.i === this.ins ? 1 - e : 1);
      m.ry = m.ry === undefined ? tr : m.ry + (tr - m.ry) * 0.14;
      m.g.rotation.y = m.ry;
      m.pool.position.set(m.g.position.x, -124.4, m.g.position.z);
      m.pool.scale.setScalar(m.g.scale.x);
    });

    this.env(t);
    // Warm atmospheric fill light along flight path
    this.glow.position.set(0, 100, pos.z - 360);

    const a = this.dustPts.geometry.attributes.position;
    for (let i = 0; i < a.count; i++) {
      a.setY(i, this.base[i] + Math.sin(t * 0.6 + i) * 5);
    }
    a.needsUpdate = true;

    this.r.render(this.s, this.cam);
    this.updateHud(pos);
  }

  updateHud(pos) {
    let z = 0, d = 1e9;
    ZS.forEach((v, i) => {
      const e = Math.abs(v - pos.z);
      if (e < d) {
        d = e;
        z = i;
      }
    });
    const depth = (-pos.z).toFixed(1).replace('-', '');
    if (this.hud.t) {
      this.hud.t.innerHTML = `ZONE 0${z + 1} • ${PROJECTS[z].n.toUpperCase()}<span class="pos"> • DEPTH: -${depth} m • POS: [${pos.x.toFixed(0)}, ${pos.y.toFixed(0)}, ${pos.z.toFixed(0)}]</span>`;
    }
    if (this.rail && z !== this._z) {
      this._z = z;
      [...this.rail.children].forEach((b, i) => b.classList.toggle('on', i === z));
    }
    if (this.hud.b) {
      this.hud.b.style.width = (this.sp * 100).toFixed(1) + '%';
    }
    if (this.hud.i) {
      this.hud.i.style.opacity = clamp(1 - this.sp / 0.09, 0, 1);
    }
    if (this.hud.o) {
      this.hud.o.style.opacity = clamp((this.sp - 0.9) / 0.08, 0, 1);
    }
  }

  destroy() {
    if (this.st) this.st.kill();
    window.removeEventListener('resize', this.resizeHandler);
    window.removeEventListener('pointermove', this.pointerMoveHandler);
    window.removeEventListener('keydown', this.keyHandler);
    window.removeEventListener('wheel', this.wheelHandler);
  }
}
