const fs = require('fs');

let dataStr = fs.readFileSync('js/data.js', 'utf8');
let jsonMatch = dataStr.match(/const apartmentsData = (\[[\s\S]*\]);/);
let data = JSON.parse(jsonMatch[1]);

const scratchpad = `
PHOTO-2025-08-01-16-53-59(5).jpg (hero)
PHOTO-2025-08-01-16-53-58(2).jpg (living room)
PHOTO-2025-08-01-16-54-00(5).jpg (living room)
PHOTO-2025-08-01-16-53-58(3).jpg (kitchen)
PHOTO-2025-08-01-16-53-59(1).jpg (kitchen)
PHOTO-2025-08-01-16-53-59(2).jpg (kitchen)
PHOTO-2025-08-01-16-53-59(4).jpg (kitchen)
PHOTO-2025-08-01-16-53-59.jpg (kitchen)
PHOTO-2025-08-01-16-54-00.jpg (bedroom)
PHOTO-2025-08-01-16-54-01.jpg (bedroom)
PHOTO-2025-08-01-16-54-01(1).jpg (bedroom)
PHOTO-2025-08-01-16-54-01(2).jpg (bedroom)
PHOTO-2025-08-01-16-54-01(3).jpg (bedroom)
PHOTO-2025-08-01-16-54-01(4).jpg (bedroom)
PHOTO-2025-08-01-16-54-00(1).jpg (bedroom)
PHOTO-2025-08-01-16-54-00(2).jpg (bathroom)
PHOTO-2025-08-01-16-54-00(3).jpg (bathroom)
PHOTO-2025-08-01-16-53-58(1).jpg (balcony)
PHOTO-2025-08-01-16-53-58(4).jpg (balcony)
PHOTO-2025-08-01-16-53-58.jpg (balcony)
PHOTO-2025-08-01-16-53-59(3).jpg (balcony)
PHOTO-2025-08-01-16-53-57.jpg (interior details)
PHOTO-2025-08-01-16-54-00(4).jpg (interior details)
PHOTO-2025-08-01-16-53-56.jpg (pool)
PHOTO-2025-08-01-16-53-57(1).jpg (pool)
PHOTO-2025-08-01-16-53-57(2).jpg (pool)
PHOTO-2025-08-01-16-53-57(3).jpg (exterior)
PHOTO-2025-08-01-16-53-57(4).jpg (surroundings)
PHOTO-2025-08-01-16-53-57(5).jpg (playground)
PHOTO-2025-08-01-16-53-56(1).jpg (spa)
PHOTO-2025-08-01-16-53-56(2).jpg (gym)
PHOTO-2025-08-01-16-53-56(3).jpg (spa)
PHOTO-2025-08-01-16-53-56(4).jpg (spa)
PHOTO-2025-08-01-16-53-55.jpg (common areas)
`;

const allFiles = fs.readdirSync('15 Mah').filter(f => /\.(jpe?g|png|webp|heic)$/i.test(f));

const NEW_ORDER = ['hero','living room','kitchen','bedroom','bathroom','balcony','interior details','pool','exterior','gym','spa','playground','common areas','surroundings','uncategorized'];

let photoMap = new Map();
for (let line of scratchpad.split('\n')) {
    let bareLine = line.trim();
    let extMatch = bareLine.match(/(.*?\.(?:jpe?g|png|webp|heic))/i);
    if (!extMatch) continue;
    let name = extMatch[1].trim();
    let rest = bareLine.substring(name.length).replace(/[()]/g, '').trim().toLowerCase();
    if (allFiles.includes(name)) photoMap.set(name, rest || 'uncategorized');
}

// Add any the scratchpad missed
for (let f of allFiles) if (!photoMap.has(f)) photoMap.set(f, 'uncategorized');

let categorized = Array.from(photoMap.entries()).map(([name, cat]) => ({ name, cat }));
categorized.sort((a, b) => {
    let aIdx = NEW_ORDER.indexOf(a.cat); if (aIdx === -1) aIdx = 99;
    let bIdx = NEW_ORDER.indexOf(b.cat); if (bIdx === -1) bIdx = 99;
    return aIdx !== bIdx ? aIdx - bIdx : a.name.localeCompare(b.name);
});

let seen = new Set();
let finalPhotos = [];
for (let p of categorized) {
    if (!seen.has(p.name)) { seen.add(p.name); finalPhotos.push(p.name); }
}

for (let apt of data) {
    if (apt.id === '15 Mah') {
        apt.photos = finalPhotos;
        console.log('15 Mah sorted. First 5 photos:', finalPhotos.slice(0, 5));
    }
}

fs.writeFileSync('js/data.js', `const apartmentsData = ${JSON.stringify(data, null, 2)};\n`, 'utf8');
console.log('Done!');
