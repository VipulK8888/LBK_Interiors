const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const testIds = [
  'photo-1600585154340-be6161a56a0c', // modern villa staircase & glass
  'photo-1600566753376-12c8ab7fb75b', // marble bath
  'photo-1600607687920-4e2a09cf159d', // living room marble
  'photo-1600573472591-ee6b68d14c68', // luxury living room
  'photo-1600565193348-f74bd3c7ccdf', // luxury master bath
  'photo-1616486338812-3dadae4b4ace', // marble & travertine living
  'photo-1600121848594-d8644e57abab', // marble wall & chandelier
  'photo-1600585152220-90363fe7e115', // villa interior
  'photo-1600210492486-724fe5c67fb0', // modern living room
  'photo-1600607687939-ce8a6c25118c', // grand villa interior
  'photo-1618221195710-dd6b41faaea6', // warm living room
  'photo-1552321554-5fefe8c9ef14'  // luxury bathroom
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

const outDir = path.join(__dirname, 'temp_villas');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function run() {
  for (const id of testIds) {
    const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;
    try {
      const buf = await download(url);
      const meta = await sharp(buf).metadata();
      const filename = path.join(outDir, `${id}.jpg`);
      await sharp(buf)
        .resize(1024, 1434, { fit: 'cover', position: 'center' })
        .modulate({ brightness: 1.02, saturation: 1.05 })
        .sharpen()
        .jpeg({ quality: 95 })
        .toFile(filename);
      console.log(`Saved ${id}.jpg: ${meta.width}x${meta.height}`);
    } catch (e) {
      console.error(`Failed ${id}:`, e.message);
    }
  }
}

run();
