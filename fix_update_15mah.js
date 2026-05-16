const fs = require('fs');
const path = require('path');

const dataStr = fs.readFileSync('js/data.js', 'utf8');

const scratchpad = `
1. PHOTO-2025-08-01-16-53-55.jpg (common areas)
2. PHOTO-2025-08-01-16-53-56(1).jpg (spa)
3. PHOTO-2025-08-01-16-53-56(2).jpg (gym)
4. PHOTO-2025-08-01-16-53-56(3).jpg (spa)
5. PHOTO-2025-08-01-16-53-56(4).jpg (spa)
6. PHOTO-2025-08-01-16-53-56.jpg (pool)
7. PHOTO-2025-08-01-16-53-57(1).jpg (pool)
8. PHOTO-2025-08-01-16-53-57(2).jpg (pool)
9. PHOTO-2025-08-01-16-53-57(3).jpg (exterior)
10. PHOTO-2025-08-01-16-53-57(4).jpg (surroundings)
11. PHOTO-2025-08-01-16-53-57(5).jpg (playground)
12. PHOTO-2025-08-01-16-53-57.jpg (interior details)
13. PHOTO-2025-08-01-16-53-58(1).jpg (balcony)
14. PHOTO-2025-08-01-16-53-58(2).jpg (living room)
15. PHOTO-2025-08-01-16-53-58(3).jpg (kitchen)
16. PHOTO-2025-08-01-16-53-58(4).jpg (balcony)
17. PHOTO-2025-08-01-16-53-58.jpg (balcony)
18. PHOTO-2025-08-01-16-53-59(1).jpg (kitchen)
19. PHOTO-2025-08-01-16-53-59(2).jpg (kitchen)
20. PHOTO-2025-08-01-16-53-59(3).jpg (balcony)
21. PHOTO-2025-08-01-16-53-59(4).jpg (kitchen)
22. PHOTO-2025-08-01-16-53-59(5).jpg (hero)
23. PHOTO-2025-08-01-16-53-59.jpg (kitchen)
24. PHOTO-2025-08-01-16-54-00(1).jpg (bedroom)
25. PHOTO-2025-08-01-16-54-00(2).jpg (bathroom)
26. PHOTO-2025-08-01-16-54-00(3).jpg (bathroom)
27. PHOTO-2025-08-01-16-54-00(4).jpg (interior details)
28. PHOTO-2025-08-01-16-54-00(5).jpg (living room)
29. PHOTO-2025-08-01-16-54-00.jpg (bedroom)
30. PHOTO-2025-08-01-16-54-01(1).jpg (bedroom)
31. PHOTO-2025-08-01-16-54-01(2).jpg (bedroom)
32. PHOTO-2025-08-01-16-54-01(3).jpg (bedroom)
33. PHOTO-2025-08-01-16-54-01(4).jpg (bedroom)
34. PHOTO-2025-08-01-16-54-01.jpg (bedroom)
`;

const lines = scratchpad.split('\n').filter(Boolean);
const photoMap = new Map();

for (let line of lines) {
  let parts = line.trim().split(' ');
  if (parts.length < 3) continue;
  // Handle "1. PHOTO-NAME..." format
  let name = parts[1];
  let cat = parts.slice(2).join(' ').replace(/[()]/g, '');
  
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
const basePath = 'c:\\\\Users\\\\Александр\\\\OneDrive\\\\Рабочий стол\\\\alanya rent website\\\\15 Mah';
finalPhotos = finalPhotos.filter(p => {
    if (fs.existsSync(path.join(basePath, p))) return true;
    console.log('Skipping hallucinated file:', p);
    return false;
});

console.log('Total valid photos parsed:', finalPhotos.length);

const mStart = dataStr.indexOf('"id": "15 Mah"');
const photosStart = dataStr.indexOf('"photos": [', mStart);
const photosEnd = dataStr.indexOf(']', photosStart);

const newPhotosString = '"photos": [\n      ' + finalPhotos.map(name => '"' + name + '"').join(',\n      ');
const newDataStr = dataStr.substring(0, photosStart) + newPhotosString + dataStr.substring(photosEnd);

fs.writeFileSync('js/data.js', newDataStr);
console.log('Successfully repopulated 15 Mah photos in data.js');
