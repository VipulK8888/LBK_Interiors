const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = 'c:/Users/Vipul_kumawat/Documents/LBK_Interiors';

const mapping = [
  {
    src: path.join(root, 'stitch_lbk_premium_civil_interior_platform/temp_villas_2/photo-1774940578514-28b165796456.jpg'),
    dest: 'slab_01.jpg',
    label: 'Villa Alankrit - Grand Foyer & Marble Staircase'
  },
  {
    src: path.join(root, 'stitch_lbk_premium_civil_interior_platform/temp_villas_3/photo-1765766601592-ac2936aa87e0.jpg'),
    dest: 'slab_02.jpg',
    label: 'The Mewar Penthouse - Panda Marble Lounge'
  },
  {
    src: path.join(root, 'stitch_lbk_premium_civil_interior_platform/temp_villas_3/photo-1758448500596-ce0e0239f1be.jpg'),
    dest: 'slab_03.jpg',
    label: 'Sovereign Villa - Palatial Great Room & Feature Wall'
  },
  {
    src: path.join(root, 'stitch_lbk_premium_civil_interior_platform/temp_villas_2/photo-1754522711595-84428937b07a.jpg'),
    dest: 'slab_04.jpg',
    label: 'Lakefront Residence - Luxury Marble Bath Suite'
  },
  {
    src: path.join(root, 'stitch_lbk_premium_civil_interior_platform/temp_villas_4/photo-1682662045247-3740fa9f51c6.jpg'),
    dest: 'slab_05.jpg',
    label: 'Hilltop Suite - High-Gloss Crema Marfil Living'
  },
  {
    src: path.join(root, 'stitch_lbk_premium_civil_interior_platform/temp_villas_4/photo-1512917774080-9991f1c4c750.jpg'),
    dest: 'slab_06.jpg',
    label: 'Royal Orchid Estate - Turnkey Villa Architecture & Deck'
  }
];

async function processSlabs() {
  const publicDir = path.join(root, 'public/slabs');
  const distDir = path.join(root, 'dist/slabs');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

  for (const m of mapping) {
    if (!fs.existsSync(m.src)) {
      console.error(`Source not found: ${m.src}`);
      continue;
    }
    const publicTarget = path.join(publicDir, m.dest);
    const distTarget = path.join(distDir, m.dest);

    await sharp(m.src)
      .resize(1024, 1434, { fit: 'cover', position: 'center' })
      .modulate({ brightness: 1.03, saturation: 1.08 })
      .sharpen({ sigma: 1.1 })
      .jpeg({ quality: 95, mozjpeg: true })
      .toFile(publicTarget);

    fs.copyFileSync(publicTarget, distTarget);
    const stat = fs.statSync(publicTarget);
    console.log(`Processed ${m.dest} (${m.label}): ${stat.size} bytes`);
  }

  // Update hero3dScrolly.js
  const scrollyFile = path.join(root, 'src/js/hero3dScrolly.js');
  let js = fs.readFileSync(scrollyFile, 'utf8');

  const oldProjectsRegex = /const PROJECTS = \[[\s\S]*?\];/;
  const newProjectsCode = `const PROJECTS = [
  { n: "Villa Alankrit", s: "Grand Double-Height Foyer & Marble Staircase", file: "/slabs/slab_01.jpg", k: "vein", base: "#ecebe7", vein: "#7d7d85", w: 1 },
  { n: "The Mewar Penthouse", s: "Panda & Statuario Bookmatched Marble Lounge", file: "/slabs/slab_02.jpg", k: "vein", base: "#f4f2ee", vein: "#8a7f6a", w: 1.6 },
  { n: "Sovereign Villa", s: "Palatial Great Room & Statuario Feature Wall", file: "/slabs/slab_03.jpg", k: "strata", base: "#c99a62", vein: "#8f5f33" },
  { n: "Lakefront Residence", s: "Master Bath Cladding & Floating Stone Vanity", file: "/slabs/slab_04.jpg", k: "vein", base: "#8fa3a6", vein: "#e8efe9", w: 1.3 },
  { n: "Hilltop Suite", s: "High-Gloss Italian Crema Marfil Living Room", file: "/slabs/slab_05.jpg", k: "chips", base: "#d9d2c4" },
  { n: "Royal Orchid Estate", s: "Turnkey Villa Architecture & Stone Pool Deck", file: "/slabs/slab_06.jpg", k: "vein", base: "#14120f", vein: "#C5A15B", w: 1.8 }
];`;

  js = js.replace(oldProjectsRegex, newProjectsCode);

  const oldDescRegex = /const DESC = \[[\s\S]*?\];/;
  const newDescCode = `const DESC = [
  "Seamless Calacatta & Statuario marble flooring flowing through the grand foyer, paired with cantilevered stone staircase civil masonry.",
  "Dramatic high-contrast bookmatched Panda marble with bold organic dark veins spanning seamlessly across monolithic floor tiles and architectural joinery.",
  "Floor-to-ceiling bookmatched marble accent wall, recessed architectural tray lighting, and integrated civil stonework for the grand villa hall.",
  "Floor-to-ceiling precision-cut bookmatched dark marble wall panels with integrated architectural cove lighting and solid stone vanity craftsmanship.",
  "Mirror-polished beige Italian marble flooring reflecting warm ambient light, complemented by bespoke marble inlay tables and classical civil moulding.",
  "Complete turnkey bungalow execution featuring precision-laid outdoor stone pool decking, glass curtain wall integration, and seamless interior stone masonry."
];`;

  js = js.replace(oldDescRegex, newDescCode);
  fs.writeFileSync(scrollyFile, js, 'utf8');
  console.log('Updated hero3dScrolly.js successfully with Villa/Bungalow details!');
}

processSlabs().catch(console.error);
