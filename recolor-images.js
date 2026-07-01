/**
 * recolor-images.js — v2
 * Downloads Robologic product images and replaces yellow with Mantronix dark navy blue.
 */
const sharp = require('sharp');
const https = require('https');
const http  = require('http');
const fs    = require('fs');
const path  = require('path');

const OUT_DIR = path.join(__dirname, 'public', 'images', 'products');
fs.mkdirSync(OUT_DIR, { recursive: true });

const images = [
  // Category hero images
  { url: 'https://robologic.co.in/wp-content/uploads/2024/09/Untitled-4.jpg',            name: 'robotic-welding.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2024/09/Untitled-3.jpg',            name: 'welding-spm.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2024/09/Untitled-2.jpg',            name: 'welding-equipment.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2024/09/Untitled-1.jpg',            name: 'welding-accessories.jpg' },
  // Robotic welding
  { url: 'https://robologic.co.in/wp-content/uploads/2025/05/16_9-FWEBP.jpg',            name: 'fanuc-robot.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2025/05/robot-linear-track.webp',   name: 'robot-linear-track.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2025/05/Turn-Table-.jpg',           name: 'turn-table.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2021/03/3-Head-Stock-and-Tail-Stock-Positioner-1.jpg', name: 'hsts-positioner.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2025/08/robotic-two-axis-positioner.webp', name: 'two-axis-positioner.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2025/05/7-fixture-1.png',           name: 'welding-fixture.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2025/05/power-source-supports-robot-assisted-welding-0.jpg', name: 'welding-machine.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2021/03/Machine-Guarding-Safety-Ohio-2.jpg', name: 'safety-fence.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2025/05/Untitled-Project-scaled.png', name: 'robot-pedestal.jpg' },
  // Two axis positioner
  { url: 'https://robologic.co.in/wp-content/uploads/2021/03/2-axies-1.jpg',             name: 'two-axis-1.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2021/03/2-axis-1.jpg',              name: 'two-axis-2.jpg' },
  // SPM images (correct 2024/2025 URLs)
  { url: 'https://robologic.co.in/wp-content/uploads/2024/12/scaffolding-automation-solution.webp', name: 'scaffolding-spm.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2024/12/hydraulic-cylinder-welding-spm.webp', name: 'hydraulic-spm.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2021/03/COMPRESSOR-TANK-03-2.png',  name: 'compressor-spm.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2025/05/CONVEYOUR-ROLLER-WELDING-SPM-scaled.png', name: 'conveyor-spm.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2025/05/PIPE-TO-FLANGE-PIPE-TO-ELBOW-scaled.png', name: 'flange-spm.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2025/05/WIRE-MESH-WELDING-scaled.png', name: 'wiremesh-spm.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2021/03/9-Ball-welding-spm.png',    name: 'ball-spm.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2021/03/5-Tiles-Mold-EDGE-hardfacing-machine.png', name: 'tiles-spm.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2025/05/IMG_9287-scaled.jpg',       name: 'pump-spm.jpg' },
  // Equipment
  { url: 'https://robologic.co.in/wp-content/uploads/2025/01/self-centering-rotator-screw-type.webp', name: 'self-centering-rotator.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2025/01/self-aligned-rotator.webp', name: 'self-aligned-rotator.jpg' },
  { url: 'https://robologic.co.in/wp-content/uploads/2021/03/4.4-X-Y-SLIDE-001-1-1.png', name: 'xy-slide.jpg' },
];

// Mantronix dark navy blue target
const DARK_R = 13, DARK_G = 45, DARK_B = 94;
const MID_R  = 26, MID_G  = 78, MID_B  = 152;
const LITE_R = 42, LITE_G = 110, LITE_B = 200;

function isYellow(r, g, b) {
  // Yellow/orange/gold detection: high R, decent G, low B
  // Covers #FFB300, #FFC107, #F5A623, #FFD700, Robologic yellow
  return (
    r > 140 &&           // Must be bright red
    g > 90  &&           // Must have green component
    b < 120 &&           // Must have low blue
    r - b > 70 &&        // Red dominates blue
    r > b * 1.5          // Ratio check
  );
}

function blendBlue(brightness) {
  // Map brightness (0–1) to blue range: dark → light navy
  const t = Math.pow(brightness, 0.8); // slight gamma for better look
  return {
    r: Math.round(DARK_R + (LITE_R - DARK_R) * t),
    g: Math.round(DARK_G + (LITE_G - DARK_G) * t),
    b: Math.round(DARK_B + (LITE_B - DARK_B) * t),
  };
}

function replaceYellow(buffer) {
  const out = Buffer.allocUnsafe(buffer.length);
  for (let i = 0; i < buffer.length; i += 4) {
    const r = buffer[i], g = buffer[i+1], b = buffer[i+2], a = buffer[i+3];
    if (isYellow(r, g, b)) {
      const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
      const blue = blendBlue(brightness);
      out[i] = blue.r; out[i+1] = blue.g; out[i+2] = blue.b; out[i+3] = a;
    } else {
      out[i] = r; out[i+1] = g; out[i+2] = b; out[i+3] = a;
    }
  }
  return out;
}

function download(url) {
  return new Promise((res, rej) => {
    const client = url.startsWith('https') ? https : http;
    const chunks = [];
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 Chrome/120' } }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location)
        return res(download(r.headers.location));
      if (r.statusCode !== 200) return rej(new Error(`HTTP ${r.statusCode}`));
      r.on('data', c => chunks.push(c));
      r.on('end', () => res(Buffer.concat(chunks)));
    });
    req.on('error', rej);
    req.setTimeout(25000, () => { req.destroy(); rej(new Error('Timeout')); });
  });
}

async function processImg(url, name) {
  const out = path.join(OUT_DIR, name);
  if (fs.existsSync(out)) { console.log(`[SKIP] ${name}`); return; }
  process.stdout.write(`[DL]   ${name} ...`);
  let buf;
  try { buf = await download(url); } catch(e) { console.log(` FAIL: ${e.message}`); return; }
  process.stdout.write(` done. [PROC]...`);
  try {
    const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const recolored = replaceYellow(data);
    await sharp(recolored, { raw: { width: info.width, height: info.height, channels: 4 } })
      .jpeg({ quality: 93 }).toFile(out);
    console.log(` [OK] ${info.width}x${info.height}`);
  } catch(e) { console.log(` ERR: ${e.message}`); }
}

(async () => {
  console.log('=== Recoloring: yellow → #0d2d5e navy blue ===');
  console.log(`Output: ${OUT_DIR}\n`);
  for (const img of images) await processImg(img.url, img.name);
  console.log('\n=== Done! ===');
})();
