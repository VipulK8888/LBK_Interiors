const fs = require('fs');
const path = require('path');

const tempScripts = [
  'apply_user_phone.cjs',
  'find_old_numbers.cjs',
  'search_contacts.cjs',
  'search_all_old_numbers.cjs',
  'update_mumbai_and_contacts.cjs',
  'inspect_quote_contacts.cjs',
  'inspect_quote_lines.cjs',
  'find_aspect_inline.cjs',
  'find_all_aspect.cjs',
  'search_aspect.cjs'
];

tempScripts.forEach(s => {
  const p = path.resolve(__dirname, s);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
  }
});

console.log('Cleaned up temporary search scripts.');
