import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

// Brand colors
const GOLD = '#D4AF37';
const GOLD_LIGHT = '#E5C158';
const GOLD_DARK = '#B8962F';
const DARK_BG = '#0C0C0C';

// Create favicon SVG - Just the "J" in graffiti style
const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${GOLD_LIGHT}"/>
      <stop offset="50%" stop-color="${GOLD}"/>
      <stop offset="100%" stop-color="${GOLD_DARK}"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="8" dy="12" stdDeviation="8" flood-color="#000" flood-opacity="0.6"/>
    </filter>
  </defs>
  
  <!-- Dark background -->
  <rect width="512" height="512" fill="${DARK_BG}"/>
  
  <!-- Shadow layer -->
  <g transform="translate(16, 20)" fill="#5C4A17" opacity="0.7">
    <path d="M128,64 L288,64 L288,320 Q288,420 192,420 Q96,420 64,340 L160,300 Q176,350 200,350 Q240,350 240,300 L240,112 L128,112 Z" transform="skewX(-3)"/>
  </g>
  
  <!-- Main J letter -->
  <g filter="url(#shadow)" fill="url(#goldGrad)">
    <path d="M120,56 L280,56 L280,312 Q280,412 184,412 Q88,412 56,332 L152,292 Q168,342 192,342 Q232,342 232,292 L232,104 L120,104 Z" transform="skewX(-3)"/>
  </g>
  
  <!-- Highlight stroke -->
  <g stroke="${GOLD_LIGHT}" stroke-width="4" fill="none" opacity="0.5">
    <path d="M125,60 L275,60" transform="skewX(-3)"/>
  </g>
  
  <!-- Drip effect from J -->
  <g fill="${GOLD}" stroke="${GOLD}" stroke-linecap="round">
    <path d="M160,412 Q168,460 158,480" stroke-width="20" fill="none"/>
    <ellipse cx="156" cy="490" rx="16" ry="12"/>
  </g>
  
  <!-- Spray texture dots -->
  <g fill="${GOLD}" opacity="0.3">
    <circle cx="70" cy="120" r="4"/>
    <circle cx="90" cy="180" r="3"/>
    <circle cx="300" cy="80" r="5"/>
    <circle cx="320" cy="200" r="3"/>
    <circle cx="60" cy="280" r="4"/>
    <circle cx="340" cy="300" r="3"/>
  </g>
</svg>
`;

// Create OG Image SVG (1200x630)
const ogImageSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="ogGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${GOLD_LIGHT}"/>
      <stop offset="50%" stop-color="${GOLD}"/>
      <stop offset="100%" stop-color="${GOLD_DARK}"/>
    </linearGradient>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0C0C0C"/>
      <stop offset="50%" stop-color="#141414"/>
      <stop offset="100%" stop-color="#0A0A0A"/>
    </linearGradient>
    <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="4" dy="6" stdDeviation="4" flood-color="#000" flood-opacity="0.7"/>
    </filter>
    <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  
  <!-- Dark background with gradient -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  
  <!-- Subtle grid pattern -->
  <g stroke="${GOLD}" stroke-width="0.3" opacity="0.08">
    ${Array.from({length: 25}, (_, i) => `<line x1="${i * 50}" y1="0" x2="${i * 50}" y2="630"/>`).join('')}
    ${Array.from({length: 13}, (_, i) => `<line x1="0" y1="${i * 50}" x2="1200" y2="${i * 50}"/>`).join('')}
  </g>
  
  <!-- Gold accent lines -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#ogGoldGrad)"/>
  <rect x="0" y="626" width="1200" height="4" fill="url(#ogGoldGrad)"/>
  
  <!-- Album art placeholder area (left side) -->
  <rect x="60" y="115" width="400" height="400" fill="#1A1A1A" rx="8" stroke="${GOLD}" stroke-width="2" opacity="0.3"/>
  
  <!-- J-KLINE Logo (scaled from original SVG) -->
  <g transform="translate(520, 180) scale(2.8)" filter="url(#textGlow)">
    <!-- Shadow layer -->
    <g transform="translate(2, 2.5)" fill="#5C4A17" opacity="0.7">
      <path d="M6,6 L16,6 L16,28 Q16,36 10,36 Q4,36 2,30 L8,28 Q9,31 11,31 Q13,31 13,28 L13,9 L6,9 Z" transform="skewX(-2)"/>
      <rect x="22" y="16" width="12" height="5" rx="1" transform="rotate(-3, 28, 18.5)"/>
      <path d="M40,6 L50,6 L50,16 L58,6 L70,6 L58,20 L71,36 L59,36 L50,24 L50,36 L40,36 Z" transform="skewX(-2)"/>
      <path d="M76,6 L86,6 L86,30 L98,30 L98,36 L76,36 Z" transform="skewX(-2)"/>
      <path d="M103,6 L113,6 L113,36 L103,36 Z" transform="skewX(-2)"/>
      <path d="M120,6 L130,6 L130,22 L142,6 L152,6 L152,36 L142,36 L142,20 L130,36 L120,36 Z" transform="skewX(-2)"/>
      <path d="M159,6 L183,6 L183,12 L169,12 L169,17 L181,17 L181,23 L169,23 L169,30 L184,30 L184,36 L159,36 Z" transform="skewX(-2)"/>
    </g>
    
    <!-- Main gold letters -->
    <g fill="url(#ogGoldGrad)">
      <path d="M6,6 L16,6 L16,28 Q16,36 10,36 Q4,36 2,30 L8,28 Q9,31 11,31 Q13,31 13,28 L13,9 L6,9 Z" transform="skewX(-2)"/>
      <rect x="22" y="16" width="12" height="5" rx="1" transform="rotate(-3, 28, 18.5)"/>
      <path d="M40,6 L50,6 L50,16 L58,6 L70,6 L58,20 L71,36 L59,36 L50,24 L50,36 L40,36 Z" transform="skewX(-2)"/>
      <path d="M76,6 L86,6 L86,30 L98,30 L98,36 L76,36 Z" transform="skewX(-2)"/>
      <path d="M103,6 L113,6 L113,36 L103,36 Z" transform="skewX(-2)"/>
      <path d="M120,6 L130,6 L130,22 L142,6 L152,6 L152,36 L142,36 L142,20 L130,36 L120,36 Z" transform="skewX(-2)"/>
      <path d="M159,6 L183,6 L183,12 L169,12 L169,17 L181,17 L181,23 L169,23 L169,30 L184,30 L184,36 L159,36 Z" transform="skewX(-2)"/>
    </g>
    
    <!-- Drip effects -->
    <g fill="${GOLD}" stroke="${GOLD}">
      <path d="M9,36 Q10,40 9,44" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <ellipse cx="9" cy="46" rx="2" ry="1.5"/>
      <path d="M66,36 Q67,39 66,42" stroke-width="2" fill="none" stroke-linecap="round"/>
      <ellipse cx="66" cy="43.5" rx="1.5" ry="1"/>
      <path d="M92,36 Q93,42 92,48" stroke-width="3" fill="none" stroke-linecap="round"/>
      <ellipse cx="92" cy="50" rx="2.5" ry="2"/>
    </g>
  </g>
  
  <!-- Tagline -->
  <text x="600" y="360" font-family="Arial, sans-serif" font-size="24" fill="#999999" text-anchor="left" letter-spacing="3">HIP-HOP ARTIST • RECOVERY ADVOCATE</text>
  
  <!-- Subtitle -->
  <text x="600" y="420" font-family="Arial, sans-serif" font-size="22" fill="#666666" text-anchor="left" letter-spacing="2">AUSTIN, TX</text>
  
  <!-- E.G.O. Album text -->
  <text x="260" y="560" font-family="Arial Black, sans-serif" font-size="24" fill="${GOLD}" text-anchor="middle" letter-spacing="3" filter="url(#goldGlow)">E.G.O.</text>
  <text x="260" y="590" font-family="Arial, sans-serif" font-size="14" fill="#888" text-anchor="middle" letter-spacing="2">EDGING GOD OUT</text>
  
  <!-- Corner accents -->
  <path d="M0,0 L60,0 L60,4 L4,4 L4,60 L0,60 Z" fill="${GOLD}"/>
  <path d="M1200,0 L1140,0 L1140,4 L1196,4 L1196,60 L1200,60 Z" fill="${GOLD}"/>
  <path d="M0,630 L60,630 L60,626 L4,626 L4,570 L0,570 Z" fill="${GOLD}"/>
  <path d="M1200,630 L1140,630 L1140,626 L1196,626 L1196,570 L1200,570 Z" fill="${GOLD}"/>
</svg>
`;

async function generateImages() {
  console.log('🎨 Generating favicon and OG images...\n');
  
  // Ensure directories exist
  const appDir = path.join(projectRoot, 'app');
  const publicDir = path.join(projectRoot, 'public');
  
  // Generate favicon PNG at 512x512 (will be converted to ICO)
  const faviconBuffer = Buffer.from(faviconSvg);
  
  // Generate 512x512 favicon
  console.log('📍 Creating favicon.png (512x512)...');
  await sharp(faviconBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(appDir, 'favicon-512.png'));
  
  // Generate icon.png (192x192)
  console.log('📍 Creating icon.png (192x192)...');
  await sharp(faviconBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(appDir, 'icon.png'));
  
  // Generate apple-icon.png (180x180)
  console.log('📍 Creating apple-icon.png (180x180)...');
  await sharp(faviconBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(appDir, 'apple-icon.png'));
  
  // Generate 32x32 and 16x16 for favicon.ico alternatives
  console.log('📍 Creating favicon sizes (32x32, 16x16)...');
  await sharp(faviconBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(appDir, 'favicon-32.png'));
  
  await sharp(faviconBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(appDir, 'favicon-16.png'));
  
  // Create a PNG favicon as well
  await sharp(faviconBuffer)
    .resize(48, 48)
    .png()
    .toFile(path.join(appDir, 'favicon.png'));
  
  // Generate OG image base (without album art overlay - will do separately)
  console.log('📍 Creating OG image base (1200x630)...');
  const ogBuffer = Buffer.from(ogImageSvg);
  
  // First create the base OG image
  const ogBase = await sharp(ogBuffer)
    .resize(1200, 630)
    .png()
    .toBuffer();
  
  // Load album art and resize
  const albumPath = path.join(publicDir, 'images/albums/ego.jpg');
  const albumArt = await sharp(albumPath)
    .resize(380, 380, { fit: 'cover' })
    .toBuffer();
  
  // Composite album art onto OG image
  console.log('📍 Compositing album art onto OG image...');
  await sharp(ogBase)
    .composite([{
      input: albumArt,
      left: 70,
      top: 125,
    }])
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'og-image.jpg'));
  
  // Generate proper favicon.ico with multiple sizes
  console.log('📍 Creating favicon.ico (multi-size)...');
  const icoBuf = await pngToIco([
    path.join(appDir, 'favicon-16.png'),
    path.join(appDir, 'favicon-32.png'),
    path.join(appDir, 'favicon.png'), // 48x48
  ]);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuf);
  
  // Cleanup intermediate files
  fs.unlinkSync(path.join(appDir, 'favicon-16.png'));
  fs.unlinkSync(path.join(appDir, 'favicon-32.png'));
  fs.unlinkSync(path.join(appDir, 'favicon-512.png'));
  fs.unlinkSync(path.join(appDir, 'favicon.png'));
  
  console.log('\n✅ All images generated successfully!\n');
  console.log('Files created:');
  console.log('  - app/favicon.ico (16x16, 32x32, 48x48)');
  console.log('  - app/icon.png (192x192)');
  console.log('  - app/apple-icon.png (180x180)');
  console.log('  - public/og-image.jpg (1200x630)');
}

generateImages().catch(console.error);
