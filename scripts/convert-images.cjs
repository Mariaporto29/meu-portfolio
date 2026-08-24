const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const input = path.join(publicDir, 'foto.jpg');

const outputs = [
  { ext: 'avif', options: { quality: 50 } },
  { ext: 'webp', options: { quality: 75 } },
];

(async () => {
  try {
    if (!fs.existsSync(input)) {
      console.error('Input image not found:', input);
      process.exit(1);
    }

    for (const o of outputs) {
      const out = path.join(publicDir, `foto.${o.ext}`);
      await sharp(input)
        .toFormat(o.ext, o.options)
        .toFile(out);
      console.log('Wrote', out);
    }

    console.log('Image conversion completed.');
  } catch (err) {
    console.error('Conversion failed:', err);
    process.exit(1);
  }
})();
