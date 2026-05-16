const fs = require('fs');
const path = require('path');

const dataStr = fs.readFileSync('js/data.js', 'utf8');

const scratchpad = `
29781847-25f3-4a2e-8aaa-0e095d30dbaf.JPG (common areas)
29b12232-7565-40fa-bf92-bdcd1b7e0276.JPG (gym)
307818354.webp (living room)
307820508.webp (pool)
307820515.webp (playground)
307820510.webp (surroundings)
307820511.webp (exterior)
307820513.webp (surroundings)
307820516.webp (pool)
317836989.webp (playground)
317837049.webp (common areas)
32471851-af38-4fe8-a508-c21294ecf16f.JPG (spa)
326713235.webp (interior details)
326713269.webp (gym)
326713278.webp (gym)
326713295.webp (pool)
326740175.webp (common areas)
3dd8e89e-604a-45b6-b62e-bdeb9f9583b1.JPG (balcony / view)
47d7192a-6eaf-442e-9fd7-2326f071de1f.JPG (bedroom)
4a80e610-15c9-4a59-9bc7-40686a5add41.JPG (interior details)
4d0f0b0e-d39b-4f09-9185-27a557212c6f.JPG (playground)
506422c0-e2cf-4d25-9831-c0243603ae52.JPG (gym)
612b4f53-0cfb-45e4-9a99-b9ba16c2d5dc.JPG (interior details)
6a671a5b-86b4-4e31-bbe2-509c253432e6.JPG (bathroom)
7410cc55-c7e0-453e-974d-7c5fc4210652.JPG (common areas)
7ae0dc15-940a-4c82-8169-104f2b6e5bc5.JPG (pool)
7d2501da-e957-4027-bd9e-50431af660d0.JPG (spa)
82578dd4-11e6-4104-ba51-f62fe912e6d3.JPG (common areas)
a5667d0c-9fd9-4087-873c-3ce0aa795536.JPG (living room)
aed1eb82-7696-4cb3-9211-ee1a7b3bdac1.JPG (spa)
b68fa9c1-803e-40c6-9ccc-06b70841fcc3.JPG (living room)
b6fce20b-ca72-410a-a20f-e9be9096ed67.JPG (bathroom)
bc676edd-e7f8-4c7d-bc51-dca704f34770.JPG (bedroom)
d28a1c12-6634-45f9-9e52-518b09632157.JPG (pool)
d327d9cf-cd3c-4302-ad20-2139e988b859.JPG (living room)
d7afeff3-aa74-4a3a-a14f-c60968bcbce8.JPG (hero)
f1ed4278-9c68-4030-b568-d43841787939.JPG (spa)
fff05e09-3ee7-4451-90de-d93578fe8de0.JPG (exterior)
`;

const lines = scratchpad.split('\n').filter(Boolean);
const photoMap = new Map();

for (let line of lines) {
  let parts = line.trim().split(' ');
  if (parts.length < 2) continue;
  // Parse simple "FILE.EXT (category)"
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
  'interior details',
  'pool',
  'exterior',
  'gym',
  'spa',
  'playground',
  'common areas',
  'surroundings'
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
    if (!seen.has(p.name)) {
        uniquePhotos.push(p);
        seen.add(p.name);
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

let finalPhotos = uniquePhotos.map(p => p.name.trim());

// Verify existence
const basePath = 'c:\\\\Users\\\\Александр\\\\OneDrive\\\\Рабочий стол\\\\alanya rent website\\\\16 Mah';
finalPhotos = finalPhotos.filter(p => {
    if (fs.existsSync(path.join(basePath, p))) return true;
    console.log('Skipping hallucinated file:', p);
    return false;
});

console.log('Total valid photos parsed for 16 Mah:', finalPhotos.length);

const mStart = dataStr.indexOf('"id": "16 Mah"');
const photosStart = dataStr.indexOf('"photos": [', mStart);
const photosEnd = dataStr.indexOf(']', photosStart);

const newPhotosString = '"photos": [\n      ' + finalPhotos.map(name => '"' + name + '"').join(',\n      ');
const newDataStr = dataStr.substring(0, photosStart) + newPhotosString + dataStr.substring(photosEnd);

fs.writeFileSync('js/data.js', newDataStr);
console.log('Successfully repopulated 16 Mah photos in data.js');
