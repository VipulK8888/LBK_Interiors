const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

async function processAll() {
  const brainDir = 'C:/Users/Vipul_kumawat/.gemini/antigravity-ide/brain/8ac78208-4dad-483f-87dc-4b6f2cef554e';
  const t1Src = path.join(brainDir, 'tile_01_topdown_1792349394079.jpg');
  const t1Dest = '../public/tiles/tile_01.jpg';

  const t1Buffer = fs.readFileSync(t1Src);
  const meta1 = await sharp(t1Buffer).metadata();
  const cropW = Math.round(meta1.width * 0.80);
  const cropH = Math.round(meta1.height * 0.80);
  const left = Math.round((meta1.width - cropW) / 2);
  const top = Math.round((meta1.height - cropH) / 2);

  const cropped1 = await sharp(t1Buffer)
    .extract({ left, top, width: cropW, height: cropH })
    .resize(1024, 1024, { fit: 'fill' })
    .jpeg({ quality: 95 })
    .toBuffer();

  fs.writeFileSync(t1Dest, cropped1);
  console.log('Clean-cropped tile_01.jpg successfully');

  // 2. Process remaining tiles
  const remainingTiles = [
    { num: 6, orig: 'IMG-20260507-WA0013.jpg' },
    { num: 8, orig: 'IMG-20260507-WA0015.jpg' },
    { num: 9, orig: 'IMG-20260507-WA0016.jpg' },
    { num: 11, orig: 'IMG-20260507-WA0018.jpg' },
    { num: 16, orig: 'IMG-20260507-WA0023.jpg' },
    { num: 17, orig: 'IMG-20260507-WA0024.jpg' },
    { num: 18, orig: 'IMG-20260507-WA0025.jpg' },
    { num: 20, orig: 'IMG-20260507-WA0027.jpg' },
    { num: 22, orig: 'IMG-20260507-WA0029.jpg' },
    { num: 23, orig: 'IMG-20260507-WA0030.jpg' }
  ];

  for (const item of remainingTiles) {
    const origPath = path.join('../Tiles', item.orig);
    const destName = `tile_${String(item.num).padStart(2, '0')}.jpg`;
    const destPath = path.join('../public/tiles', destName);

    if (fs.existsSync(origPath)) {
      const origBuffer = fs.readFileSync(origPath);
      const meta = await sharp(origBuffer).metadata();
      // Tight center square crop (62% of min dimension) to guarantee NO showroom edges/stands/walls
      const minDim = Math.min(meta.width, meta.height);
      const targetSize = Math.round(minDim * 0.62);
      const l = Math.round((meta.width - targetSize) / 2);
      const t = Math.round((meta.height - targetSize) / 2);

      const outBuf = await sharp(origBuffer)
        .extract({ left: l, top: t, width: targetSize, height: targetSize })
        .resize(1024, 1024)
        .jpeg({ quality: 95 })
        .toBuffer();

      fs.writeFileSync(destPath, outBuf);
      console.log(`Optimized ${destName} from ${item.orig} (${targetSize}px -> 1024x1024)`);
    }
  }
}

processAll().catch(console.error);
