const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
const mainPath = path.resolve(__dirname, '../src/js/main.js');

let html = fs.readFileSync(indexPath, 'utf8');
let main = fs.readFileSync(mainPath, 'utf8');

// 1. Add class 'lbk-phone-display' to displayed numbers in index.html
html = html.replace(
  '<span class="hidden sm:inline">+91 94141 62659</span>',
  '<span class="hidden sm:inline lbk-phone-display">+91 94141 62659</span>'
);
html = html.replace(
  '<span>📞</span> Call +91 94141 62659',
  '<span>📞</span> Call <span class="lbk-phone-display">+91 94141 62659</span>'
);
html = html.replace(
  '<span class="font-body-md text-body-md text-on-surface font-semibold block">+91 94141 62659</span>',
  '<span class="font-body-md text-body-md text-on-surface font-semibold block lbk-phone-display">+91 94141 62659</span>'
);
html = html.replace(
  '<span class="font-body-md text-body-md text-on-surface font-medium block">+91 94141 62659</span>',
  '<span class="font-body-md text-body-md text-on-surface font-medium block lbk-phone-display">+91 94141 62659</span>'
);

// 2. Insert Central Config Script into <head> of index.html
const configScript = `
  <!-- =========================================================================
       LBK CENTRAL CONTACT CONFIGURATION
       👉 EDIT YOUR PHONE NUMBER & WHATSAPP NUMBER RIGHT HERE:
       ========================================================================= -->
  <script>
    window.LBK_CONFIG = {
      // 1. Calling Number (Formatted text shown to users)
      callNumber: "+91 94141 62659",

      // 2. Calling Link (Numbers with country code, no spaces)
      callTel: "+919414162659",

      // 3. WhatsApp Number (Country code + mobile number, no + sign, no spaces)
      whatsappNumber: "919414162659",

      // 4. Default City
      city: "Mumbai"
    };
  </script>
`;

if (!html.includes('window.LBK_CONFIG')) {
  html = html.replace('</head>', `${configScript}\n</head>`);
  console.log('Inserted window.LBK_CONFIG script into index.html');
}

// 3. In main.js, add the auto-syncer so it updates all links & displays seamlessly
const syncerCode = `
  // 7. Auto-sync phone & WhatsApp numbers from window.LBK_CONFIG
  if (window.LBK_CONFIG) {
    const { callTel, callNumber, whatsappNumber } = window.LBK_CONFIG;
    if (callTel) {
      document.querySelectorAll('a[href^="tel:"]').forEach(el => {
        el.setAttribute('href', \`tel:\${callTel}\`);
      });
    }
    if (callNumber) {
      document.querySelectorAll('.lbk-phone-display').forEach(el => {
        el.textContent = callNumber;
      });
    }
    if (whatsappNumber) {
      document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
        const prefilledText = "Hello%20Lalchand%20ji%2C%20I%20would%20like%20to%20inquire%20about%20civil%20contracting%20and%20stone%20work%20for%20my%20project.";
        el.setAttribute('href', \`https://wa.me/\${whatsappNumber}?text=\${prefilledText}\`);
      });
    }
  }
`;

if (!main.includes('window.LBK_CONFIG')) {
  main = main.replace(
    "console.log('LBK Cinematic Experience Loaded Successfully.');",
    `${syncerCode}\n  console.log('LBK Cinematic Experience Loaded Successfully.');`
  );
  fs.writeFileSync(mainPath, main, 'utf8');
  console.log('Injected auto-syncer into main.js');
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Central contact configuration successfully integrated!');
