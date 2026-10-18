const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:/Users/Vipul_kumawat/.gemini/antigravity-ide/brain/8ac78208-4dad-483f-87dc-4b6f2cef554e';
const outDir = '../public/slabs';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const SLAB_W = 1024;
const SLAB_H = 1434;

async function buildSlabs() {
  // Slab 1: Villa Alankrit (Diamond Frame Carrara & Brass Lattice)
  const tile15 = path.join(brainDir, 'tile_15_topdown_1792349599064.jpg');
  await sharp(tile15)
    .resize(SLAB_W, SLAB_H, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 1.02, saturation: 1.05 })
    .jpeg({ quality: 96 })
    .toFile(path.join(outDir, 'slab_01.jpg'));
  console.log('Created slab_01.jpg (Diamond Frame Carrara)');

  // Slab 2: The Mewar Penthouse (Statuario Bookmatch)
  // Mirror tile_02 horizontally to create a real bookmatch feature wall
  const tile02 = path.join(brainDir, 'tile_02_topdown_1792349415016.jpg');
  const halfW = SLAB_W / 2;
  const leftHalf = await sharp(tile02)
    .resize(halfW, SLAB_H, { fit: 'cover' })
    .toBuffer();
  const rightHalf = await sharp(leftHalf)
    .flop() // mirror horizontally
    .toBuffer();

  await sharp({
    create: {
      width: SLAB_W,
      height: SLAB_H,
      channels: 3,
      background: '#ffffff'
    }
  })
    .composite([
      { input: leftHalf, left: 0, top: 0 },
      { input: rightHalf, left: halfW, top: 0 }
    ])
    .jpeg({ quality: 96 })
    .toFile(path.join(outDir, 'slab_02.jpg'));
  console.log('Created slab_02.jpg (Statuario Bookmatch)');

  // Slab 3: Sovereign Villa Facade (Artisanal Rosette Medallion)
  const tile05 = path.join(brainDir, 'tile_05_topdown_1792349440804.jpg');
  await sharp(tile05)
    .resize(SLAB_W, SLAB_H, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 1.04, saturation: 1.08 })
    .jpeg({ quality: 96 })
    .toFile(path.join(outDir, 'slab_03.jpg'));
  console.log('Created slab_03.jpg (Artisanal Rosette Medallion)');

  // Slab 4: Lakefront Residence (Moroccan Star Medallion in Powder Blue & Ivory)
  const tile12 = path.join(brainDir, 'tile_12_topdown_1792349524038.jpg');
  await sharp(tile12)
    .resize(SLAB_W, SLAB_H, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 1.03, saturation: 1.06 })
    .jpeg({ quality: 96 })
    .toFile(path.join(outDir, 'slab_04.jpg'));
  console.log('Created slab_04.jpg (Moroccan Star Medallion)');

  // Slab 5: Hilltop Suite (Optical 3D Gold Prism Isometric Parquet & Marble)
  const tile21 = path.join(brainDir, 'tile_21_topdown_1792349649716.jpg');
  await sharp(tile21)
    .resize(SLAB_W, SLAB_H, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 1.02, saturation: 1.05 })
    .jpeg({ quality: 96 })
    .toFile(path.join(outDir, 'slab_05.jpg'));
  console.log('Created slab_05.jpg (Optical 3D Gold Prism)');

  // Slab 6: Royal Orchid Grand Centerpiece (Royal Obsidian Diamond with Gold Brass Inlay)
  const tile03 = path.join(brainDir, 'tile_03_topdown_1792349334844.jpg');
  await sharp(tile03)
    .resize(SLAB_W, SLAB_H, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 1.02, saturation: 1.05 })
    .jpeg({ quality: 96 })
    .toFile(path.join(outDir, 'slab_06.jpg'));
  console.log('Created slab_06.jpg (Royal Obsidian Diamond)');
}

buildSlabs().catch(console.error);
