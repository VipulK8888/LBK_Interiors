const fs = require('fs');

let scrolly = fs.readFileSync('../src/js/hero3dScrolly.js', 'utf8');

// 1. Update PROJECTS array subtitles
const oldProjects = `const PROJECTS = [
  { n: "Villa Alankrit", s: "Carrara marble", k: "vein", base: "#ecebe7", vein: "#7d7d85", w: 1 },
  { n: "The Mewar Penthouse", s: "Statuario", k: "vein", base: "#f4f2ee", vein: "#8a7f6a", w: 1.6 },
  { n: "Sovereign Villa Facade", s: "Jodhpur sandstone", k: "strata", base: "#c99a62", vein: "#8f5f33" },
  { n: "Lakefront Residence", s: "Quartzite", k: "vein", base: "#8fa3a6", vein: "#e8efe9", w: 1.3 },
  { n: "Hilltop Suite", s: "Terrazzo", k: "chips", base: "#d9d2c4" },
  { n: "Royal Orchid Grand Centerpiece", s: "Monumental turnkey", k: "vein", base: "#14120f", vein: "#C5A15B", w: 1.8 }
];`;

const newProjects = `const PROJECTS = [
  { n: "Villa Alankrit", s: "Carrara Marble & Brass Inlay", file: "/slabs/slab_01.jpg", k: "vein", base: "#ecebe7", vein: "#7d7d85", w: 1 },
  { n: "The Mewar Penthouse", s: "Statuario Bookmatch Feature Wall", file: "/slabs/slab_02.jpg", k: "vein", base: "#f4f2ee", vein: "#8a7f6a", w: 1.6 },
  { n: "Sovereign Villa Facade", s: "Artisanal Rosette Medallion", file: "/slabs/slab_03.jpg", k: "strata", base: "#c99a62", vein: "#8f5f33" },
  { n: "Lakefront Residence", s: "Moroccan Star Medallion", file: "/slabs/slab_04.jpg", k: "vein", base: "#8fa3a6", vein: "#e8efe9", w: 1.3 },
  { n: "Hilltop Suite", s: "Optical 3D Isometric Parquet", file: "/slabs/slab_05.jpg", k: "chips", base: "#d9d2c4" },
  { n: "Royal Orchid Grand Centerpiece", s: "Royal Obsidian Diamond & Gold", file: "/slabs/slab_06.jpg", k: "vein", base: "#14120f", vein: "#C5A15B", w: 1.8 }
];`;

if (scrolly.includes(oldProjects)) {
  scrolly = scrolly.replace(oldProjects, newProjects);
  console.log('Replaced PROJECTS array');
} else {
  console.log('Could not find old PROJECTS string directly, trying regex');
  scrolly = scrolly.replace(/const PROJECTS = \[[\s\S]*?\];/, newProjects);
}

// 2. Update monolith(P, i) method to load real luxury slab artwork
const oldMonolith = `  monolith(P, i) {
    const W = 150, H = 210, D = 14, g = new THREE.Group();
    const slab = new THREE.Mesh(
      new THREE.BoxGeometry(W, H, D),
      new THREE.MeshStandardMaterial({
        map: this.texture(P, 11 + i * 7),
        roughness: 0.16,
        metalness: 0.05
      })
    );`;

const newMonolith = `  monolith(P, i) {
    const W = 150, H = 210, D = 14, g = new THREE.Group();
    
    // Load luxury tile & marble artwork texture
    const texLoader = new THREE.TextureLoader();
    const slabTex = texLoader.load(\`/slabs/slab_0\${i + 1}.jpg\`);
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
    );`;

if (scrolly.includes(oldMonolith)) {
  scrolly = scrolly.replace(oldMonolith, newMonolith);
  console.log('Replaced monolith method with luxury artwork loader');
} else {
  console.log('Could not find oldMonolith directly, searching with split');
  const lines = scrolly.split(/\r?\n/);
  const mStart = lines.findIndex(l => l.includes('monolith(P, i) {'));
  if (mStart !== -1) {
    const mEnd = lines.findIndex((l, idx) => idx > mStart && l.includes('const brass = new THREE.Mesh('));
    if (mEnd !== -1) {
      lines.splice(mStart, mEnd - mStart, newMonolith);
      scrolly = lines.join('\n');
      console.log('Replaced monolith method via line index');
    }
  }
}

fs.writeFileSync('../src/js/hero3dScrolly.js', scrolly, 'utf8');
console.log('Saved hero3dScrolly.js with luxury slab artwork');
