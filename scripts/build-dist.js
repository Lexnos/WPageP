// Assembles dist/ with ONLY the files the live site needs. Upload the contents of dist/ to Hostinger.
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

// Whitelist: anything not listed here (tooling, editor settings, sources) never reaches the server.
const include = ['index.html', '.htaccess', 'css/styles.css', 'js', 'images'];

fs.rmSync(dist, { recursive: true, force: true });
for (const item of include) {
  const src = path.join(root, item);
  if (!fs.existsSync(src)) throw new Error('Missing required file: ' + item);
  fs.cpSync(src, path.join(dist, item), { recursive: true });
}

let count = 0, bytes = 0;
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p); else { count++; bytes += fs.statSync(p).size; }
  }
})(dist);
console.log(`dist/ ready: ${count} files, ${(bytes / 1024).toFixed(0)} KB`);
