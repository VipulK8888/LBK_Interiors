const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '../src/js/scrollytelling.js');
let code = fs.readFileSync(file, 'utf8');

const startIdx = code.indexOf('  // SCENE 01: ARRIVAL CAMERA PUSH-IN');
const endIdx = code.indexOf('  // SCENE 02: SPATIAL IMMERSION');

if (startIdx !== -1 && endIdx !== -1) {
  const oldPart = code.substring(startIdx, endIdx);
  const newPart = '  // SCENE 01: ARRIVAL CAMERA PUSH-IN (Handled by FrameSequenceScrollytelling)\n  initScene01Arrival() {\n    // Coordinated via FrameSequenceScrollytelling with high-performance canvas scrubbing\n  }\n\n';
  code = code.replace(oldPart, newPart);
  fs.writeFileSync(file, code, 'utf8');
  console.log('Successfully updated scrollytelling.js');
} else {
  console.log('Could not find slice markers in scrollytelling.js');
}
