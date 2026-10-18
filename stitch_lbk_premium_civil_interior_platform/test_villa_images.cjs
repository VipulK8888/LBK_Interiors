const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Candidate photo URLs from curated architectural luxury villa and marble collections:
const candidates = [
  // 1. Villa Grand Foyer & Marble Staircase / Hallway
  {
    name: 'slab_01_villa_foyer.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    title: 'Villa Alankrit',
    sub: 'Grand Foyer & Marble Staircase'
  },
  // 2. Panda / Bookmatched Marble Master Bath
  {
    name: 'slab_02_panda_marble.jpg',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
    title: 'The Mewar Penthouse',
    sub: 'Bookmatched Marble Bath Suite'
  },
  // 3. Grand Villa Onyx / Travertine Great Room with Chandelier
  {
    name: 'slab_03_onyx_living.jpg',
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    title: 'Sovereign Villa',
    sub: 'Palatial Great Room & Onyx Wall'
  },
  // 4. Luxury Bathroom with Backlit Marble Panels
  {
    name: 'slab_04_backlit_bath.jpg',
    url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=85',
    title: 'Lakefront Residence',
    sub: 'Illuminated Marble Vanity Suite'
  },
  // 5. Classic Luxury Living Room with Mirror Crema Marfil Marble
  {
    name: 'slab_05_crema_living.jpg',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    title: 'Hilltop Suite',
    sub: 'High-Gloss Crema Marfil Flooring'
  },
  // 6. Palatial Villa Double-Height Architecture
  {
    name: 'slab_06_palatial_villa.jpg',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    title: 'Royal Orchid Estate',
    sub: 'Monumental Villa Architecture'
  }
];

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function testAll() {
  for (const c of candidates) {
    try {
      const buf = await download(c.url);
      console.log(`Success ${c.name}: ${buf.length} bytes`);
    } catch (e) {
      console.error(`Failed ${c.name}:`, e.message);
    }
  }
}

testAll();
