// Adds ?v=<content hash> to the CSS/JS links in index.html so browsers re-download a file as soon as it changes.
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const root = path.resolve(__dirname, '..');
const file = path.join(root, 'index.html');
let html = fs.readFileSync(file, 'utf8');
html = html.replace(/((?:src|href)=")((?:css|js)\/[^"?]+\.(?:css|js))(?:\?v=[0-9a-f]+)?(")/g, (m, a, p, c) => {
  const hash = crypto.createHash('md5').update(fs.readFileSync(path.join(root, p))).digest('hex').slice(0, 8);
  return `${a}${p}?v=${hash}${c}`;
});
fs.writeFileSync(file, html);
