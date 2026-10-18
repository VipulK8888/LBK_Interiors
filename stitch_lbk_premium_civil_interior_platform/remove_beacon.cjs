const fs = require('fs');

let scrolly = fs.readFileSync('../src/js/hero3dScrolly.js', 'utf8');

// 1. Comment out this.beacon() in init
scrolly = scrolly.replace('this.beacon();', '// this.beacon(); // disabled for now');

// 2. Guard tick() updates so if this.bc isn't created, it doesn't run
const oldTickBeacon = `    // LBK 3D Hoarding Beacon motion & positioning (from LBKOrbitAnimation)
    const elapsed = t;
    this.ring.rotation.y = elapsed * 0.55;

    // Smooth positioning: at hero arrival (sp=0), framed in view at Y=48, Z=pos.z-360
    // As user scrolls through the gallery, it lifts overhead gracefully
    const lift = Math.min(1, this.sp * 5);
    const beaconY = (48 + lift * 85) + Math.sin(elapsed * 1.2) * 3.2;
    const beaconZ = pos.z - 360 - lift * 120;
    this.bc.position.set(0, beaconY, beaconZ);

    // Interactive mouse parallax tilt
    const mx = this.tx || 0;
    const my = this.ty || 0;
    this.bc.rotation.x = 0.16 + my * 0.04;
    this.bc.rotation.z = Math.sin(elapsed * 0.8) * 0.015 - mx * 0.035;
    this.bc.scale.setScalar(this.mobile ? 0.68 : 0.95);

    this.glow.position.set(0, beaconY + 35, beaconZ + 20);
    if (this.beaconPool) {
      this.beaconPool.position.set(0, -124.2, beaconZ);
      this.beaconPool.scale.setScalar(this.mobile ? 0.68 : 0.95);
    }`;

const newTickCode = `    // Warm atmospheric fill light along flight path
    this.glow.position.set(0, 100, pos.z - 360);`;

if (scrolly.includes(oldTickBeacon)) {
  scrolly = scrolly.replace(oldTickBeacon, newTickCode);
  console.log('Replaced tick beacon code');
} else {
  // Try line by line replacement
  const lines = scrolly.split(/\r?\n/);
  const startIdx = lines.findIndex(l => l.includes('// LBK 3D Hoarding Beacon motion'));
  if (startIdx !== -1) {
    const endIdx = lines.findIndex((l, i) => i >= startIdx && l.includes('this.beaconPool.scale.setScalar'));
    if (endIdx !== -1) {
      lines.splice(startIdx, endIdx - startIdx + 3, newTickCode);
      scrolly = lines.join('\n');
      console.log('Replaced tick beacon block via line index');
    }
  }
}

fs.writeFileSync('../src/js/hero3dScrolly.js', scrolly, 'utf8');
console.log('Saved hero3dScrolly.js without beacon');

// 3. Reset #intro to centered in scrollytelling.css
let css = fs.readFileSync('../src/styles/scrollytelling.css', 'utf8');
css = css.replace(
`#intro {
  justify-content: flex-end;
  padding-bottom: clamp(80px, 13vh, 125px);
}
#intro h1 {
  font-size: clamp(26px, 5.5vw, 48px);
  letter-spacing: 0.16em;
  margin-bottom: 4px;
}`,
`#intro {
  justify-content: center;
}`
);
fs.writeFileSync('../src/styles/scrollytelling.css', css, 'utf8');
console.log('Reset #intro to center in scrollytelling.css');
