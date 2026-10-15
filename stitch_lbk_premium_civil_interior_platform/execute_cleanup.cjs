const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

// 1. Update coverflow3d.js with the new luxury residential kitchen image
const covPath = path.join(root, 'src/js/coverflow3d.js');
let covCode = fs.readFileSync(covPath, 'utf8');

const oldChefImg = 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=85';
const newKitchenImg = 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85';

if (covCode.includes(oldChefImg)) {
  covCode = covCode.replace(oldChefImg, newKitchenImg);
  fs.writeFileSync(covPath, covCode, 'utf8');
  console.log('SUCCESS: Replaced chef image with luxury residential waterfall kitchen!');
} else {
  console.log('NOTE: Chef image not found in coverflow3d.js (may already be replaced)');
}

// 2. Remove unused video files
const unusedFiles = [
  path.join(root, 'public/assets/tiles-animation.mp4'),
  path.join(root, 'public/assets/Use_the_uploaded_reference_ima.mp4'),
  path.join(root, 'src/assets/tiles-animation.mp4'),
  path.join(root, 'dist/assets/tiles-animation.mp4'),
  path.join(root, 'dist/assets/Use_the_uploaded_reference_ima.mp4'),
];

let freedBytes = 0;
unusedFiles.forEach(f => {
  if (fs.existsSync(f)) {
    const size = fs.statSync(f).size;
    freedBytes += size;
    fs.unlinkSync(f);
    console.log(`DELETED unused video: ${path.relative(root, f)} (${(size / (1024 * 1024)).toFixed(2)} MB)`);
  }
});
console.log(`TOTAL DISK SPACE FREED: ${(freedBytes / (1024 * 1024)).toFixed(2)} MB`);

// Clean up empty assets directories if empty
['public/assets', 'src/assets'].forEach(d => {
  const full = path.join(root, d);
  if (fs.existsSync(full) && fs.readdirSync(full).length === 0) {
    fs.rmdirSync(full);
    console.log(`Removed empty directory: ${d}`);
  }
});

// 3. Clean up scratch scripts in stitch_lbk_premium_civil_interior_platform
const scratchFiles = [
  'check_mp4.cjs',
  'download_kitchen.cjs',
  'inspect_context.cjs',
  'inspect_images.cjs',
  'inspect_index_imgs.cjs',
  'list_all_media.cjs',
  'print_carousel.cjs',
  'print_projects.cjs',
  'read_cov.cjs',
  'scan_files.cjs',
  'search_old_images.cjs',
  'test_kitchens.cjs',
  'test_unsplash.cjs',
  'test.txt',
  'find_all_images.cjs'
];

scratchFiles.forEach(f => {
  const full = path.join(__dirname, f);
  if (fs.existsSync(full)) {
    fs.unlinkSync(full);
    console.log(`Cleaned scratch file: ${f}`);
  }
});
