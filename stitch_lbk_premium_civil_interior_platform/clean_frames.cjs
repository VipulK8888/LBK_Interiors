const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

// 1. Clean up public/frames and dist/frames
const publicFrames = path.join(root, 'public/frames');
if (fs.existsSync(publicFrames)) {
  fs.rmSync(publicFrames, { recursive: true, force: true });
  console.log('Removed public/frames directory.');
}
const distFrames = path.join(root, 'dist/frames');
if (fs.existsSync(distFrames)) {
  fs.rmSync(distFrames, { recursive: true, force: true });
  console.log('Removed dist/frames directory.');
}

// Remove old frameSequence.js if exists
const oldFrameSeq = path.join(root, 'src/js/frameSequence.js');
if (fs.existsSync(oldFrameSeq)) {
  fs.unlinkSync(oldFrameSeq);
  console.log('Removed old frameSequence.js.');
}

console.log('Cleanup of frames completed successfully.');
