const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/js/hero3dScrolly.js');
let code = fs.readFileSync(filePath, 'utf8');

// 1. Update resize() for mobile-first responsiveness
const resizeTarget = code.slice(code.indexOf('resize() {'), code.indexOf('loop() {'));

const newResize = `resize() {
    const st = document.getElementById(this.stageId);
    const w = st ? st.clientWidth : window.innerWidth;
    const h = st ? st.clientHeight : window.innerHeight;
    this.mobile = w < 768;
    const aspect = w / h;
    const isPortrait = aspect < 1;

    this.r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.r.setSize(w, h, false);
    this.cam.aspect = aspect;

    // Mobile-first dynamic FOV: Wider vertical FOV on portrait to frame slabs with comfortable breathing room
    if (this.mobile) {
      this.cam.fov = isPortrait ? 65 : 54;
    } else {
      this.cam.fov = 48;
    }
    this.cam.updateProjectionMatrix();

    // Mobile-first slab positioning and scaling to eliminate side-clipping
    const lat = this.mobile ? (isPortrait ? 0.28 : 0.44) : 1;
    const sc = this.mobile ? (isPortrait ? 0.52 : 0.62) : 1;

    this.mons.forEach(m => {
      const k = m.final ? 1.25 : 1;
      m.g.scale.setScalar(sc * k);
      m.g.position.x = SIDE[m.i] * 150 * lat;
      m.g.rotation.y = -SIDE[m.i] * (this.mobile ? 0.22 : 0.32);
    });
  }

  `;

code = code.replace(resizeTarget, newResize);

// 2. Dampen horizontal camera lookAt swing on mobile
code = code.replace(
  'const L = new THREE.Vector3(pos.x + tan.x * 300 + this.mx * 30, pos.y - this.my * 14, pos.z + tan.z * 300);',
  'const tanXMult = this.mobile ? 110 : 300;\n    const L = new THREE.Vector3(pos.x + tan.x * tanXMult + this.mx * (this.mobile ? 16 : 30), pos.y - this.my * (this.mobile ? 8 : 14), pos.z + tan.z * 300);'
);

// 3. Improve inspection framing for mobile bottom sheet
const oldInsp = `      const dist = Math.max(hh * 0.56 / (tf * f), ww * 0.56 / (tf * this.cam.aspect)) * (1 - 0.62 * this.zoom);
      const cx = m.g.position.x + this.mx * ww * 0.35 * this.zoom;
      const cy = m.g.position.y - (0.5 - f / 2) * 2 * tf * dist - this.my * hh * 0.3 * this.zoom;
      P.lerp(new THREE.Vector3(cx, cy, m.g.position.z + dist), e);
      L.lerp(new THREE.Vector3(cx, cy, m.g.position.z), e);`;

const newInsp = `      const mobileDistFactor = this.mobile ? 0.68 : 0.56;
      const dist = Math.max(hh * mobileDistFactor / (tf * f), ww * mobileDistFactor / (tf * this.cam.aspect)) * (1 - 0.62 * this.zoom);
      const cx = m.g.position.x + this.mx * ww * 0.35 * this.zoom;
      const yShiftMobile = this.mobile ? (hh * 0.28) : 0;
      const cy = m.g.position.y - (0.5 - f / 2) * 2 * tf * dist + yShiftMobile - this.my * hh * 0.3 * this.zoom;
      P.lerp(new THREE.Vector3(cx, cy, m.g.position.z + dist), e);
      L.lerp(new THREE.Vector3(cx, cy, m.g.position.z), e);`;

code = code.replace(oldInsp, newInsp);

fs.writeFileSync(filePath, code, 'utf8');
console.log('Updated hero3dScrolly.js successfully for mobile-first!');
