const fs = require('fs');
const path = require('path');

// 1. Update index.html
const indexPath = path.resolve(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Replace Hero Background fort image
const oldHeroBg = `https://lh3.googleusercontent.com/aida-public/AB6AXuCB8We_FivZdnHCfwcGdI3NPKmiG1Pd5xueZ4ZPCaZa9mB2BN2QiZ1AoTnsYpAKEXG9WX_vDgmpwXITVJOVFkmBSXaNV8BO6IL7sPnXQh6GCYHtk9rETBM6ch3o9dpPs84oCa_4uYQkonFeo45G4-h8fwqZQ26DnGxY5xQuBiRt5g5Xt0mrFzfa1I-w-wHmS5W0M0i4nl7LcPevpx2YhfzQ1kzwHE7Sx6tX4opQxqqrXcdEUKr1WFuz`;
const newHeroBg = `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85`;

if (html.includes(oldHeroBg)) {
  html = html.replace(oldHeroBg, newHeroBg);
  console.log('Replaced Hero background image with luxury house exterior!');
} else {
  console.log('Hero background image already updated or not found');
}

// Replace Villa Alankrit image with luxury living room marble interior
const oldVillaImg = `https://lh3.googleusercontent.com/aida-public/AB6AXuDy5mq_TNs6iljGDtTApfeDxPVhQxeiwRCM4AnwsKaLSPa8YsCij0LC83ijDgYdybWxom1vU0TDLFJtioOCTZdRR_UfLqP0Hgnx_DfoYCrSey78r3jh7llNHPn8CvcKC5tEGdrD7Dk7Ik9iUjcvker3Ozxc8c_rXR4gL4WpOjmL-0mYeQSAYTup57PDO74T_tXMnJaz5cTEZ3uTnAvsGOQzBk7Dc3bGZyppstiIZUHV_rmFwHeoJwgz`;
const newVillaImg = `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85`;
if (html.includes(oldVillaImg)) {
  html = html.replace(oldVillaImg, newVillaImg);
  console.log('Replaced Villa Alankrit interior with luxury marble living room!');
}

// Replace Laser Alignment Tile image with luxury master bathroom tile suite
const oldTileImg = `https://lh3.googleusercontent.com/aida-public/AB6AXuAe-9z-FS6QfMEy5LKTo9EieTeHGQpsTmEmofuf9vQ-m-Y3r_zwRlgs72Gd1L9wgqDIbl67s06jrl5aYW8kRYEm3l5ZXZRDrYbGV5hDgbcvTb5TS_cI3Paj-6m0_PtcEyMo7dK3CrPGbghwG6dfhe4gGgr4W4cSJjEvmN8gzyMXrM49KzcpFyxQnUbrOz7ZA-8rRDpzc7_RmXEJURxEVme2neof6VoQ4YfdDdc1q_0_yX35nF-hjI8a`;
const newTileImg = `https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=85`;
if (html.includes(oldTileImg)) {
  html = html.replace(oldTileImg, newTileImg);
  console.log('Replaced Tile installation image with luxury bathroom suite!');
}

// Replace Completed Palace Room in Before/After Slider with Luxury Residence Living Room
const oldPalaceImg = `https://lh3.googleusercontent.com/aida-public/AB6AXuCtKRUVnnSr9JTkBe3YcqOaVn37BBJwZVTKXW5w6cC09yB27wHl3tAG_BhR8MRKqyuz0nezYW9yMkVaorAvwmmOjhOBmP8H3vftIEwL7RibJLhbt908Y-_xLLrmDlNWWA5lFLwJ3V9-sFp1kGDx-VbKLNeEe2j6RXFMoPyWPs1V6wiRUVs_Xi8sI2I723b8giQUt6J5XRRSALgZwPlcmVcD82lfG71hTHOcmc9spvBJjMJ40z0Jfzs2`;
const newPalaceImg = `https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85`;
if (html.includes(oldPalaceImg)) {
  html = html.replace(oldPalaceImg, newPalaceImg);
  html = html.replace('alt="Completed Palace Room"', 'alt="Completed Luxury Living Room"');
  console.log('Replaced Before/After palace image with luxury living room!');
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Updated index.html successfully!');

// 2. Update coverflow3d.js
const coverflowPath = path.resolve(__dirname, '../src/js/coverflow3d.js');
let covCode = fs.readFileSync(coverflowPath, 'utf8');

const newProjectsCode = `export const CAROUSEL_PROJECTS = [
  {
    id: 'mewar-penthouse',
    title: 'The Mewar Penthouse',
    category: 'marble',
    categoryLabel: 'Marble Flooring',
    location: 'Udaipur City Center',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    tag: 'Statuario Marble',
    specs: '5,800 sq ft zero-gap diamond honed Italian marble flooring with custom brass inlay borders.',
    details: 'Full bookmatched Statuario marble slabs imported from Carrara, dry-laid at our facility for grain alignment before on-site bedding. Diamond disc crystallization polish achieving 98+ gloss specular reflection with 0mm lippage tolerance.',
    dimensions: '5,800 sq ft',
    finish: 'Mirror Diamond Polish (Gloss 98)',
    tolerance: '0.0mm Lippage / Calibrated Sub-Base'
  },
  {
    id: 'sovereign-villa',
    title: 'The Sovereign Villa Facade',
    category: 'granite',
    categoryLabel: 'Granite Cladding & Exterior',
    location: 'Shobhagpura Heights',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    tag: 'Architectural Granite',
    specs: 'External ventilated stone facade dry cladding with flamed grey and black granite brackets.',
    details: 'Precision dry-cladding system engineered for luxury modern residences. Laser-aligned mechanical stainless steel anchors with silicone perimeter weatherproofing, engineered for 50+ year structural longevity.',
    dimensions: '12,400 sq ft Facade Area',
    finish: 'Flamed & Honed Thermal Granite',
    tolerance: '±1mm Joint Uniformity'
  },
  {
    id: 'fatehsagar-residence',
    title: 'Fatehsagar Lakefront Residence',
    category: 'tiles',
    categoryLabel: 'Slab Tiles & Interior',
    location: 'Fatehsagar Promenade',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    tag: 'Porcelain Slabs',
    specs: 'Continuous 1200x2400mm Italian porcelain tile floor installation with 1mm epoxy joint waterproofing.',
    details: 'Seamless open-concept residential living hall with zero lippage calibration. Self-leveling polymer sub-screed bedding ensuring absolute acoustic dampening and planar accuracy across the entire residence.',
    dimensions: '4,200 sq ft Open Hall',
    finish: 'Matte Silk Anti-Reflective',
    tolerance: '1.0mm Laser-Grout Micro-Joints'
  },
  {
    id: 'royal-orchid-villa',
    title: 'The Royal Orchid Villa',
    category: 'marble',
    categoryLabel: 'Makrana Marble Foyer',
    location: 'New Fatehpura Luxury Enclave',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
    tag: 'Makrana Pure White',
    specs: 'Double-height entrance foyer featuring pristine Makrana white marble floors and carved risers.',
    details: 'Hand-selected A-grade Makrana marble blocks from Rajasthan quarries. Master cut and hand-bedded with crystalline traditional lime-mortar slurry, polished to a 98-gloss mirror sheen.',
    dimensions: '7,100 sq ft Courtyard & Foyer',
    finish: 'Traditional Makrana Mirror Finish',
    tolerance: 'Zero Lippage Hand-Beveled'
  },
  {
    id: 'aravalli-residence',
    title: 'Aravalli Contemporary Residence',
    category: 'civil',
    categoryLabel: 'Luxury House Exterior & Civil Work',
    location: 'Badi Hills Estate',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    tag: 'Turnkey Civil & Structural',
    specs: 'Full turnkey civil construction, reinforced concrete frame, retaining stone walls, and cantilevered terraces.',
    details: 'End-to-end civil execution including seismic-grade structural frame, precision masonry, exterior stone facade articulation, infinity pool shell engineering, and complete waterproofing.',
    dimensions: '16,500 sq ft Built-up Area',
    finish: 'Fair-Faced Concrete & Ashlar Masonry',
    tolerance: 'IS 456 Structural Compliance'
  },
  {
    id: 'solitaire-estate',
    title: 'The Solitaire Estate',
    category: 'interior',
    categoryLabel: 'Bespoke Interior & Kitchen',
    location: 'Saheli Nagar Luxury District',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=85',
    tag: 'Waterfall Stone Island',
    specs: 'High-precision waterfall granite and quartzite kitchen counters with integrated mitered joints.',
    details: 'Continuous bookmatched waterfall apron edges cut with 5-axis CNC bridge saws. Seamless under-mount fixtures and heat-treated stain-proof sealing for lifelong culinary endurance.',
    dimensions: '3,600 sq ft Kitchen & Dining',
    finish: 'Diamond Satin Polish (Gloss 85)',
    tolerance: 'Mitred 45° Invisible Seams'
  },
  {
    id: 'pichola-promenade',
    title: 'Pichola Promenade Villa',
    category: 'granite',
    categoryLabel: 'Granite Pool Deck & Terrace',
    location: 'Haridas Ji Ki Magri',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    tag: 'Thermal Flamed Granite',
    specs: 'Curved infinity pool coping, anti-slip thermal flamed granite decks, and cantilever stair treads.',
    details: 'Thermal flamed texture providing R11 wet-slip resistance for outdoor residential spaces. Calibrated 40mm thick granite copings with waterjet bullnosed perimeter rims.',
    dimensions: '6,400 sq ft Pool & Terrace Deck',
    finish: 'Thermal Flamed Anti-Slip R11',
    tolerance: '1:100 Gradient Laser Runoff'
  },
  {
    id: 'ambavgarh-villa',
    title: 'Ambavgarh Hilltop Bungalow',
    category: 'tiles',
    categoryLabel: 'Curbless Master Bath Suite',
    location: 'Ambavgarh Enclave',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=85',
    tag: 'Curbless Italian Bath',
    specs: 'Zero-step walk-in Italian wet rooms with continuous large format wall slabs and stone vanity.',
    details: 'Concealed linear gradient drainage with zero threshold drop. Full 3-coat elastomeric waterproofing with epoxy joints and bookmatched feature wall.',
    dimensions: '1,800 sq ft Master Wet Suites',
    finish: 'Honed Micro-Velvet Porcelain',
    tolerance: 'Zero Threshold Flush Transitions'
  }
];`;

covCode = covCode.replace(/export const CAROUSEL_PROJECTS = \[[\s\S]*?\n\];/, newProjectsCode);
fs.writeFileSync(coverflowPath, covCode, 'utf8');
console.log('Updated coverflow3d.js successfully!');
