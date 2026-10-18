const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/Vipul_kumawat/.gemini/antigravity-ide/brain/8ac78208-4dad-483f-87dc-4b6f2cef554e';
const publicTilesDir = '../public/tiles';

const nanoMapping = {
  'tile_01.jpg': 'tile_01_topdown_1792349394079.jpg',
  'tile_02.jpg': 'tile_02_topdown_1792349415016.jpg',
  'tile_03.jpg': 'tile_03_topdown_1792349334844.jpg',
  'tile_04.jpg': 'tile_04_topdown_1792349679415.jpg',
  'tile_05.jpg': 'tile_05_topdown_1792349440804.jpg',
  'tile_07.jpg': 'tile_07_topdown_1792349462258.jpg',
  'tile_10.jpg': 'tile_10_topdown_1792349502177.jpg',
  'tile_12.jpg': 'tile_12_topdown_1792349524038.jpg',
  'tile_13.jpg': 'tile_13_topdown_1792349551136.jpg',
  'tile_14.jpg': 'tile_14_topdown_1792349574264.jpg',
  'tile_15.jpg': 'tile_15_topdown_1792349599064.jpg',
  'tile_19.jpg': 'tile_19_topdown_1792349623786.jpg',
  'tile_21.jpg': 'tile_21_topdown_1792349649716.jpg'
};

for (const [targetName, generatedName] of Object.entries(nanoMapping)) {
  const src = path.join(brainDir, generatedName);
  const dest = path.join(publicTilesDir, targetName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Updated ${targetName} from ${generatedName} (${fs.statSync(dest).size} bytes)`);
  } else {
    console.error(`Not found: ${src}`);
  }
}
