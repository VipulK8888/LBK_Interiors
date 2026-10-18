const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ids = [
  'photo-1791869210838-f0ba36681520',
  'photo-1682662045247-3740fa9f51c6',
  'photo-1600585154526-990dced4db0d',
  'photo-1600566753190-17f0baa2a6c3',
  'photo-1512917774080-9991f1c4c750'
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
  const dir = path.join(__dirname, 'temp_villas_4');
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
