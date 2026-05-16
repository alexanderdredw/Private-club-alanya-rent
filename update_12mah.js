const fs = require('fs');

const dataStr = fs.readFileSync('js/data.js', 'utf8');

// 1. EXTRACT 11 Mah Infrastructure Photos
const m11Start = dataStr.indexOf('"id": "11 Mah"');
const p11Start = dataStr.indexOf('"photos": [', m11Start);
const p11End = dataStr.indexOf(']', p11Start);
const p11Section = dataStr.substring(p11Start, p11End + 1);

const match11 = p11Section.match(/"photos":\s*(\[[\s\S]*?\])/);
const photos11 = JSON.parse(match11[1]);

// Get only infrastructure photos from 11 Mah
const infraPhotos = photos11.filter(p => p.startsWith('Infrustructure/'));

// We want to map them to ../11 Mah/Infrustructure/xxx for 12 Mah
const infraPhotosFor12 = infraPhotos.map(p => '../11 Mah/' + p);

// 2. PROCESS 12 Mah Photos
const scratchpad = `
PHOTO-2025-09-30-10-10-11.jpg (balcony / view)
PHOTO-2025-09-30-10-10-11(1).jpg (balcony / view)
PHOTO-2025-09-30-10-10-11(2).jpg (interior details)
PHOTO-2025-09-30-10-10-11(3).jpg (balcony / view)
PHOTO-2025-09-30-10-10-11(4).jpg (interior details)
PHOTO-2025-09-30-10-10-11(5).jpg (interior details)
PHOTO-2025-09-30-10-10-11(6).jpg (interior details)
PHOTO-2025-09-30-10-10-11(7).jpg (interior details)
PHOTO-2025-09-30-10-10-11(8).jpg (interior details)
PHOTO-2025-09-30-10-10-11(9).jpg (hero)
PHOTO-2025-09-30-10-10-11(10).jpg (balcony / view)
PHOTO-2025-09-30-10-10-11(11).jpg (bathroom)
PHOTO-2025-09-30-10-10-11(12).jpg (bedroom)
PHOTO-2025-09-30-10-10-11(13).jpg (balcony / view)
PHOTO-2025-09-30-10-10-11(14).jpg (living room)
PHOTO-2025-09-30-10-10-11(15).jpg (bedroom)
PHOTO-2025-09-30-10-10-11(16).jpg (kitchen)
PHOTO-2025-09-30-10-10-11(17).jpg (bathroom)
PHOTO-2025-09-30-10-10-11(18).jpg (living room)
`;

const lines = scratchpad.split('\n').filter(Boolean);
const photoMap = new Map();
for (let line of lines) {
  let parts = line.split(' ');
  let name = parts[0];
  let cat = parts.slice(1).join(' ').replace(/[()]/g, '');
  if (name) {
    if (cat === 'balcony / view') cat = 'balcony';
    if (cat === 'building exterior') cat = 'exterior';
    photoMap.set(name, cat);
  }
}

const categorized = Array.from(photoMap.entries()).map(([name, cat]) => ({ name, cat }));

const order = [
  'hero',
  'living room',
  'kitchen',
  'bedroom',
  'bathroom',
  'balcony',
  'interior details'
];

categorized.sort((a, b) => {
  let aIdx = order.indexOf(a.cat);
  let bIdx = order.indexOf(b.cat);
  if (aIdx === -1) aIdx = 99;
  if (bIdx === -1) bIdx = 99;
  return aIdx - bIdx;
});

// Remove exact duplicates
const uniquePhotos = [];
const seen = new Set();
for (const p of categorized) {
    let baseName = p.name;
    if (!seen.has(baseName)) {
        uniquePhotos.push(p);
        seen.add(baseName);
    }
}

// Ensure no bathroom in first 5 photos
for (let i = 0; i < Math.min(5, uniquePhotos.length); i++) {
  if (uniquePhotos[i].cat === 'bathroom') {
    const bRoom = uniquePhotos.splice(i, 1)[0];
    uniquePhotos.splice(5, 0, bRoom);
    i--;
  }
}

const interiorFinalPhotos = uniquePhotos.map(p => p.name.trim());

// Combine!
const finalPhotos = [...interiorFinalPhotos, ...infraPhotosFor12];

// 3. WRITE TO 12 Mah in data.js
const m12Start = dataStr.indexOf('"id": "12 Mah"');
const photosStart = dataStr.indexOf('"photos": [', m12Start);
const photosEnd = dataStr.indexOf(']', photosStart);

const newPhotosString = '"photos": [\n      ' + finalPhotos.map(name => '"' + name + '"').join(',\n      ');
const newDataStr = dataStr.substring(0, photosStart) + newPhotosString + dataStr.substring(photosEnd);

fs.writeFileSync('js/data.js', newDataStr);
console.log('Successfully updated 12 Mah photos in data.js with appended 11 Mah infrastructure');
