const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ids = [
  'photo-1774940578514-28b165796456',
  'photo-1781047884697-53a3dc4d7eee',
  'photo-1754522711595-84428937b07a'
];

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error('Status ' + res.statusCode));
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function run() {
  const dir = path.join(__dirname, 'temp_villas_2');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const id of ids) {
    const url = `https://images.unsplash.com/${id}?fm=jpg&w=1600&q=85`;
    try {
      const buf = await download(url);
      const file = path.join(dir, `${id}.jpg`);
      await sharp(buf)
        .resize(1024, 1434, { fit: 'cover', position: 'center' })
        .jpeg({ quality: 95 })
        .toFile(file);
      console.log('Saved', file, buf.length);
    } catch (e) {
      console.error('Error for', id, e.message);
    }
  }
}

run();
