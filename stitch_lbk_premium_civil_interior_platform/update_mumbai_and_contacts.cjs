const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Change Navbar City to Mumbai with whitespace-nowrap to keep it clean on mobile
html = html.replace(
  'Civil Contractor • Udaipur',
  'Civil Contractor • Mumbai'
);

// In case it's in lowercase or variation
html = html.replace(
  'Civil Contractor • Udaipur</span>',
  'Civil Contractor • Mumbai</span>'
);

// Ensure whitespace-nowrap is on the subtitle so mobile header doesn't wrap onto 2 lines
html = html.replace(
  'class="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.14em] text-on-surface-variant/80">Civil Contractor • Mumbai</span>',
  'class="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.14em] text-on-surface-variant/80 whitespace-nowrap">Civil Contractor • Mumbai</span>'
);

// 2. Change Drawer subtitle to Mumbai
html = html.replace(
  '<span class="text-[9px] font-mono uppercase tracking-wider text-on-surface-variant">Civil Work Contractor</span>',
  '<span class="text-[9px] font-mono uppercase tracking-wider text-on-surface-variant">Civil Contractor • Mumbai</span>'
);
html = html.replace(
  'Sukher, NH-8, Udaipur, Rajasthan',
  'Mumbai, Maharashtra'
);

// 3. Sync all placeholders in quote section with +91 94141 62659
html = html.replace(
  '+91 98765 43210 / +91 98765 43211',
  '+91 94141 62659'
);
html = html.replace(
  '+91 98765 43210',
  '+91 94141 62659'
);
html = html.replace(
  '+91 98765 43211',
  '+91 94141 62659'
);

// 4. Add clear comment markers so user knows exactly where to change them
html = html.replace(
  '<!-- Direct Phone Tap Button -->',
  '<!-- Direct Phone Tap Button (EDIT CALLING NUMBER HERE) -->'
);
html = html.replace(
  '<!-- Mobile Drawer Bottom Quick Contact -->',
  '<!-- Mobile Drawer Bottom Quick Contact (EDIT CALL & WHATSAPP HERE) -->'
);
html = html.replace(
  '<!-- Floating Mobile WhatsApp Quick-Action CTA -->',
  '<!-- Floating Mobile WhatsApp Quick-Action CTA (EDIT WHATSAPP NUMBER HERE) -->'
);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully updated City to Mumbai and unified contact markers in index.html!');
