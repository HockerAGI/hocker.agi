import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require('sharp');

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, 'public');

const products = [
  { slug: 'hocker-one', name: 'Hocker ONE', line1: 'HOCKER', line2: 'ONE', accent: '#2ea8ff', accent2: '#1d4ed8', tagline: 'Control operativo, métricas y aprobaciones.' },
  { slug: 'hocker-ads', name: 'Hocker Ads', line1: 'HOCKER', line2: 'ADS', accent: '#22d3ee', accent2: '#2563eb', tagline: 'Marketing, creatividad y adquisición medible.' },
  { slug: 'hocker-hub', name: 'Hocker Hub', line1: 'HOCKER', line2: 'HUB', accent: '#28b8ff', accent2: '#0f6ea8', tagline: 'CRM, conversaciones y seguimiento comercial.' },
  { slug: 'hocker-drive-cloud', name: 'Hocker Drive Cloud', line1: 'HOCKER', line2: 'DRIVE CLOUD', accent: '#8b7cf6', accent2: '#38bdf8', tagline: 'Información, respaldo y continuidad operativa.' },
  { slug: 'hocker-wallet', name: 'Hocker Wallet', line1: 'HOCKER', line2: 'WALLET', accent: '#f4c542', accent2: '#f59e0b', tagline: 'Pagos, saldos y subwallets conectadas.' },
  { slug: 'chido-casino', name: 'Chido Casino', line1: 'CHIDO', line2: 'CASINO', accent: '#24e2e2', accent2: '#ff4d21', tagline: 'Entretenimiento digital con juego responsable.' },
  { slug: 'trackhok', name: 'Trackhok', line1: 'TRACKHOK', line2: '', accent: '#e5e7eb', accent2: '#38bdf8', tagline: 'Ubicación autorizada, rutas y telemetría.' },
  { slug: 'nexpa', name: 'NEXPA', line1: 'NEXPA', line2: '', accent: '#32d5e8', accent2: '#8b5cf6', tagline: 'Seguridad y bienestar digital responsable.' },
  { slug: 'hocker-up', name: 'Hocker Up', line1: 'HOCKER', line2: 'UP', accent: '#7c6cff', accent2: '#18b9ff', tagline: 'Aprendizaje, mentoría y comunidad conectada.' },
  { slug: 'hocker-supply', name: 'Hocker Supply', line1: 'HOCKER', line2: 'SUPPLY', accent: '#ff8a1f', accent2: '#475569', tagline: 'Manufactura, merch, inventario y entrega.' },
];

const preserveExisting = new Set(['hocker-ads', 'hocker-wallet']);

const esc = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function defs(accent, accent2) {
  return `
  <defs>
    <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f8fafc"/><stop offset="0.18" stop-color="#64748b"/>
      <stop offset="0.52" stop-color="#0f172a"/><stop offset="0.82" stop-color="#475569"/><stop offset="1" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${accent}"/><stop offset="1" stop-color="${accent2}"/>
    </linearGradient>
    <linearGradient id="blue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#38bdf8"/><stop offset="0.55" stop-color="#0878d8"/><stop offset="1" stop-color="#1d4ed8"/>
    </linearGradient>
    <radialGradient id="glow"><stop offset="0" stop-color="${accent}" stop-opacity=".42"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient>
    <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#000" flood-opacity=".62"/></filter>
    <filter id="soft" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="24"/></filter>
  </defs>`;
}

function iconSvg(slug, size = 512) {
  const p = products.find((item) => item.slug === slug) ?? products[0];
  const head = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">${defs(p.accent, p.accent2)}`;
  const tail = '</svg>';
  const commonGlow = `<circle cx="256" cy="256" r="210" fill="url(#glow)" opacity=".4"/>`;

  const bodies = {
    'hocker-one': `${commonGlow}<g filter="url(#shadow)"><rect x="64" y="64" width="384" height="384" rx="92" fill="url(#blue)" stroke="#4cc8ff" stroke-opacity=".5" stroke-width="8"/><path d="M145 145h92v93h62c47 0 78 31 78 78v101h-92v-91c0-15-8-24-24-24h-24v115h-92z" fill="#020617"/><path d="M145 145h92v93" fill="none" stroke="#0b1220" stroke-width="14" stroke-linecap="round" opacity=".55"/></g>`,
    'hocker-hub': `${commonGlow}<g filter="url(#shadow)" fill="none" stroke-linecap="round"><path d="M120 210a155 155 0 0 1 82-92" stroke="url(#metal)" stroke-width="28"/><path d="M310 118a155 155 0 0 1 82 92" stroke="url(#metal)" stroke-width="28"/><path d="M392 302a155 155 0 0 1-82 92" stroke="url(#accent)" stroke-width="28"/><path d="M202 394a155 155 0 0 1-82-92" stroke="url(#metal)" stroke-width="28"/><circle cx="256" cy="94" r="22" fill="url(#accent)" stroke="#dbeafe" stroke-width="5"/><circle cx="418" cy="256" r="22" fill="url(#metal)" stroke="#cbd5e1" stroke-width="5"/><circle cx="256" cy="418" r="22" fill="url(#accent)" stroke="#dbeafe" stroke-width="5"/><circle cx="94" cy="256" r="22" fill="url(#metal)" stroke="#cbd5e1" stroke-width="5"/><path d="M185 156v200h54v-78h34v78h54V156h-54v75h-34v-75z" fill="url(#metal)" stroke="#94a3b8" stroke-width="5"/><rect x="226" y="238" width="60" height="36" rx="7" fill="url(#accent)" stroke="#7dd3fc" stroke-width="4"/></g>`,
    'hocker-drive-cloud': `${commonGlow}<g filter="url(#shadow)"><path d="M146 356h226c61 0 102-39 102-96 0-52-38-91-88-96-17-59-69-98-132-98-69 0-126 48-139 115-48 9-82 47-82 93 0 48 39 82 113 82z" fill="#0f243b" stroke="url(#accent)" stroke-width="17"/><g fill="none" stroke="#bde8ff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"><path d="M204 304v-90"/><path d="M256 304V158"/><path d="M308 304v-96"/><path d="M204 236l-27-27v-39"/><path d="M308 238l29-29v-38"/><circle cx="177" cy="152" r="18" fill="#10243b"/><circle cx="256" cy="132" r="18" fill="#10243b"/><circle cx="337" cy="151" r="18" fill="#10243b"/></g></g>`,
    'hocker-up': `${commonGlow}<g filter="url(#shadow)" fill="none" stroke="url(#accent)" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"><path d="M124 348c0-39 48-39 48 0 0 35-48 35-48 0zm24-17 96-104v119"/><path d="M252 346V166l-49 49"/><path d="M252 166l49 49"/><path d="M310 346V150l-49 49"/><path d="M310 150l55 55"/><circle cx="310" cy="370" r="20" fill="#130b2d" stroke="#9b7cff"/></g>`,
    'trackhok': `${commonGlow}<g filter="url(#shadow)"><path d="M256 62c-96 0-174 76-174 170 0 116 174 226 174 226s174-110 174-226c0-94-78-170-174-170z" fill="#111827" stroke="url(#metal)" stroke-width="26"/><path d="M196 152h64v65h44c41 0 67 27 67 68v77h-64v-67c0-15-8-23-23-23h-24v90h-64z" fill="#f8fafc" stroke="#94a3b8" stroke-width="6"/></g>`,
    'nexpa': `${commonGlow}<g filter="url(#shadow)"><path d="M256 73c105 0 184 78 184 183 0 103-73 181-178 183-76 2-142-42-174-105l62-31c20 39 58 67 106 67 67 0 116-49 116-114 0-66-49-115-116-115-41 0-77 19-98 52l-57-37C133 104 190 73 256 73z" fill="#071827" stroke="url(#accent)" stroke-width="18"/><path d="M139 256h94l55-55" fill="none" stroke="#38d7e8" stroke-width="14" stroke-linecap="round"/><circle cx="258" cy="256" r="40" fill="#0a1c2e" stroke="url(#accent)" stroke-width="17"/><path d="M304 147h84l-27-28m27 28-27 28" fill="none" stroke="#40e0e8" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/><path d="M308 304a74 74 0 0 1-74 26" fill="none" stroke="#8b5cf6" stroke-width="12" stroke-linecap="round"/></g>`,
    'chido-casino': `${commonGlow}<g filter="url(#shadow)"><path d="M78 286c30-106 94-161 190-161 82 0 140 39 177 116l-49 22c-24-49-63-72-116-72-61 0-108 29-141 88z" fill="#ffb000" stroke="#ffd84d" stroke-width="12"/><g fill="#23a916" stroke="#7be234" stroke-width="6"><circle cx="154" cy="150" r="42"/><circle cx="210" cy="129" r="45"/><circle cx="266" cy="143" r="42"/></g><g fill="#ef3b24" stroke="#ff775f" stroke-width="6"><circle cx="141" cy="209" r="34"/><circle cx="196" cy="191" r="32"/></g><path d="M233 197h190c18 0 31 14 31 31v131c0 20-14 34-34 34H229c-15 0-27-12-27-27V225c0-16 13-28 31-28z" fill="#129b28" stroke="#7df250" stroke-width="12"/><rect x="248" y="238" width="155" height="102" rx="15" fill="#07111a" stroke="#4cdf39" stroke-width="8"/><g fill="#ef3434"><circle cx="285" cy="289" r="22"/><circle cx="326" cy="289" r="22"/><circle cx="367" cy="289" r="22"/></g><path d="M420 180v140" stroke="#22c92d" stroke-width="16" stroke-linecap="round"/><circle cx="420" cy="164" r="25" fill="#52da25" stroke="#a4ff72" stroke-width="6"/></g>`,
    'hocker-supply': `${commonGlow}<g filter="url(#shadow)"><path d="M122 124l126-54 98 45v114l-98 47-126-55z" fill="url(#metal)" stroke="#64748b" stroke-width="8"/><path d="M122 221l126 55v166l-126-61z" fill="#172033" stroke="#64748b" stroke-width="8"/><path d="M248 276l98-47v151l-98 62z" fill="#0f172a" stroke="#64748b" stroke-width="8"/><path d="M171 149h67v80h38v-80h70v231h-70v-84h-38v84h-67z" fill="url(#metal)" opacity=".94"/><path d="M251 67l91-39-39 63z" fill="#ff8a1f" stroke="#ffbd73" stroke-width="6"/><path d="M326 337v75" stroke="#ff8a1f" stroke-width="5" stroke-dasharray="10 9"/></g>`,
    'hocker-agi': `${commonGlow}<g filter="url(#shadow)"><path d="M124 76l94 70v210l-94 78z" fill="url(#metal)"/><path d="M388 76l-94 70v102l94-31z" fill="url(#metal)"/><path d="M388 266l-94 70v98l94-62z" fill="url(#metal)"/><path d="M116 357c91-137 198-221 306-235-104 51-191 135-253 264z" fill="url(#blue)"/><path d="M183 424c42-91 89-155 142-194-37 55-66 119-87 194z" fill="#303b4d" stroke="#94a3b8" stroke-width="4"/></g>`,
    'hocker-ads': `${commonGlow}<g filter="url(#shadow)"><rect x="76" y="76" width="360" height="360" rx="88" fill="#071827" stroke="url(#accent)" stroke-width="12"/><path d="M132 330V206l120-63v250z" fill="url(#accent)"/><path d="M252 186l134 45v74l-134 44z" fill="#1e40af"/><path d="M152 343l46 80h66l-41-92z" fill="#22d3ee"/><circle cx="352" cy="178" r="24" fill="#67e8f9"/></g>`,
    'hocker-wallet': `${commonGlow}<g filter="url(#shadow)"><rect x="75" y="112" width="362" height="288" rx="54" fill="#101827" stroke="url(#accent)" stroke-width="14"/><path d="M75 190h362" stroke="#fbbf24" stroke-width="16"/><rect x="292" y="240" width="145" height="92" rx="28" fill="#192235" stroke="#f59e0b" stroke-width="10"/><circle cx="336" cy="286" r="13" fill="#fbbf24"/><path d="M126 145h218" stroke="#fff4c2" stroke-width="10" stroke-linecap="round"/></g>`,
  };
  return `${head}${bodies[slug] ?? bodies['hocker-one']}${tail}`;
}

function backgroundSvg(width, height, accent, accent2, title = '') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#020617"/><stop offset=".56" stop-color="#071225"/><stop offset="1" stop-color="#02040b"/></linearGradient><radialGradient id="g"><stop stop-color="${accent}" stop-opacity=".27"/><stop offset="1" stop-color="${accent2}" stop-opacity="0"/></radialGradient><filter id="b"><feGaussianBlur stdDeviation="55"/></filter></defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/><ellipse cx="${Math.round(width * .29)}" cy="${Math.round(height * .47)}" rx="${Math.round(width * .33)}" ry="${Math.round(height * .55)}" fill="url(#g)" filter="url(#b)"/><path d="M0 ${Math.round(height*.78)} C${Math.round(width*.28)} ${Math.round(height*.68)} ${Math.round(width*.55)} ${Math.round(height*.92)} ${width} ${Math.round(height*.75)}" fill="none" stroke="${accent}" stroke-opacity=".1" stroke-width="2"/><text x="${width-48}" y="${height-38}" text-anchor="end" fill="#94a3b8" opacity=".12" font-family="Arial,Helvetica,sans-serif" font-size="20" letter-spacing="5">${esc(title.toUpperCase())}</text></svg>`;
}

function titleSvg(width, height, p, layout = 'horizontal') {
  const second = p.line2 ? `<text x="0" y="${layout === 'horizontal' ? 238 : 188}" fill="url(#taccent)" font-family="Arial,Helvetica,sans-serif" font-size="${p.line2.length > 9 ? 78 : 100}" font-weight="800" letter-spacing="5">${esc(p.line2)}</text>` : '';
  const firstY = layout === 'horizontal' ? (p.line2 ? 132 : 190) : (p.line2 ? 90 : 145);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><defs><linearGradient id="taccent"><stop stop-color="${p.accent}"/><stop offset="1" stop-color="${p.accent2}"/></linearGradient></defs><text x="0" y="${firstY}" fill="#f8fafc" font-family="Arial,Helvetica,sans-serif" font-size="${p.line1.length > 9 ? 92 : 112}" font-weight="800" letter-spacing="4">${esc(p.line1)}</text>${second}</svg>`;
}

async function ensureDir(dir) { await fs.mkdir(dir, { recursive: true }); }
async function write(pathname, buffer) { await ensureDir(path.dirname(pathname)); await fs.writeFile(pathname, buffer); }

async function renderProduct(p) {
  const dir = path.join(PUBLIC, 'apps', p.slug);
  await ensureDir(dir);
  const vectorSource = Buffer.from(iconSvg(p.slug));
  let iconSource = vectorSource;
  const existingIconPath = path.join(dir, 'icon.png');
  if (preserveExisting.has(p.slug)) {
    try {
      const existing = await fs.readFile(existingIconPath);
      iconSource = await sharp(existing).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
    } catch {
      iconSource = vectorSource;
    }
  }
  const icon = await sharp(iconSource).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png({ compressionLevel: 9 }).toBuffer();
  await write(path.join(dir, 'icon.png'), icon);
  await write(path.join(dir, 'icon.svg'), vectorSource);

  const maskBg = Buffer.from(backgroundSvg(512, 512, p.accent, p.accent2, p.name));
  const maskIcon = await sharp(iconSource).resize(370, 370, { fit: 'contain' }).png().toBuffer();
  const maskable = await sharp(maskBg).composite([{ input: maskIcon, left: 71, top: 71 }]).png({ compressionLevel: 9 }).toBuffer();
  await write(path.join(dir, 'icon-maskable.png'), maskable);

  const horizontal = await sharp({ create: { width: 1600, height: 600, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([
      { input: await sharp(iconSource).resize(430, 430, { fit: 'contain' }).png().toBuffer(), left: 65, top: 85 },
      { input: Buffer.from(titleSvg(950, 320, p)), left: 535, top: 135 },
    ]).png({ compressionLevel: 9 }).toBuffer();
  await write(path.join(dir, 'logo-horizontal.png'), horizontal);

  const stackedTitle = Buffer.from(titleSvg(980, 280, p, 'stacked'));
  const stacked = await sharp({ create: { width: 1200, height: 1200, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([
      { input: await sharp(iconSource).resize(650, 650, { fit: 'contain' }).png().toBuffer(), left: 275, top: 80 },
      { input: stackedTitle, left: 110, top: 790 },
    ]).png({ compressionLevel: 9 }).toBuffer();
  await write(path.join(dir, 'logo-stacked.png'), stacked);

  for (const spec of [{ name: 'cover.webp', w: 1600, h: 900 }, { name: 'og-image.webp', w: 1200, h: 630 }]) {
    const iconSize = Math.round(spec.h * .58);
    const iconLeft = Math.round(spec.w * .075);
    const iconTop = Math.round((spec.h - iconSize) / 2);
    const textLeft = Math.round(spec.w * .48);
    const textWidth = spec.w - textLeft - 70;
    const title = await sharp(Buffer.from(titleSvg(950, 320, p))).resize({ width: textWidth, height: Math.round(spec.h * .33), fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
    const taglineSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${textWidth}" height="140"><text x="0" y="48" fill="#cbd5e1" font-family="Arial,Helvetica,sans-serif" font-size="30" font-weight="500">${esc(p.tagline)}</text><rect x="0" y="84" width="180" height="5" rx="3" fill="${p.accent}"/></svg>`);
    const canvas = sharp(Buffer.from(backgroundSvg(spec.w, spec.h, p.accent, p.accent2, p.name)));
    const output = await canvas.composite([
      { input: await sharp(iconSource).resize(iconSize, iconSize, { fit: 'contain' }).png().toBuffer(), left: iconLeft, top: iconTop },
      { input: title, left: textLeft, top: Math.round(spec.h * .28) },
      { input: taglineSvg, left: textLeft, top: Math.round(spec.h * .62) },
    ]).webp({ quality: 88, effort: 6 }).toBuffer();
    await write(path.join(dir, spec.name), output);
  }
}

async function renderBrand() {
  const dir = path.join(PUBLIC, 'brand');
  await ensureDir(dir);
  const p = { name: 'Hocker AGI Technologies', line1: 'HOCKER AGI', line2: 'TECHNOLOGIES', accent: '#3b82f6', accent2: '#7c6cff', tagline: 'Inteligencia artificial, automatización, marketing y software.' };
  const iconSource = Buffer.from(iconSvg('hocker-agi'));
  await write(path.join(dir, 'hocker-agi-symbol.png'), await sharp(iconSource).resize(720,720).png({compressionLevel:9}).toBuffer());
  const horizontal = await sharp({ create: { width: 1800, height: 650, channels: 4, background: { r:0,g:0,b:0,alpha:0 } } })
    .composite([
      { input: await sharp(iconSource).resize(500,500).png().toBuffer(), left: 35, top: 75 },
      { input: Buffer.from(titleSvg(1150,320,p)), left: 570, top: 155 },
    ]).png({compressionLevel:9}).toBuffer();
  await write(path.join(dir, 'hocker-agi-horizontal.png'), horizontal);
  const hero = await sharp(Buffer.from(backgroundSvg(1600,900,p.accent,p.accent2,p.name))).composite([
    { input: await sharp(iconSource).resize(600,600).png().toBuffer(), left: 120, top: 145 },
    { input: Buffer.from(titleSvg(800,320,p)), left: 760, top: 255 },
    { input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="760" height="160"><text x="0" y="48" fill="#cbd5e1" font-family="Arial,Helvetica,sans-serif" font-size="29">${esc(p.tagline)}</text><rect x="0" y="92" width="230" height="5" rx="3" fill="#3b82f6"/></svg>`), left:760, top:570 },
  ]).webp({quality:90,effort:6}).toBuffer();
  await write(path.join(dir, 'hocker-agi-hero.webp'), hero);
}

await Promise.all(products.map(renderProduct));
await renderBrand();
console.log(`Generated ${products.length} product kits and Hocker AGI brand assets.`);
