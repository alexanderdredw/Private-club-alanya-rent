const fs = require('fs');

let tempDataStr = fs.readFileSync('js/data.js', 'utf8');
let jsonMatch = tempDataStr.match(/const apartmentsData = (\[[\s\S]*\]);/);
let data = JSON.parse(jsonMatch[1]);

// Read the update_5mah.js scratchpad  
const script5mah = fs.readFileSync('update_5mah.js', 'utf8');
const scratchMatch = script5mah.match(/const scratchpad = `([\s\S]*?)`/);
const scratchpadStr = scratchMatch[1];

const allFiles5 = fs.readdirSync('5 Mah').filter(f => /\.(jpe?g|png|webp|heic)$/i.test(f));

const NEW_ORDER = [
    'hero', 'living', 'kitchen', 'bedroom', 'bathroom', 'balcony',
    'interior details', 'pool', 'exterior', 'complex', 'gym', 'spa',
    'playground', 'common areas', 'surroundings', 'uncategorized'
];

let photoMap = new Map();
let lines = scratchpadStr.split('\n');
for (let line of lines) {
    let bareLine = line.trim();
    let extMatch = bareLine.match(/(.*?\.(?:jpe?g|png|webp|heic))/i);
    if (!extMatch) continue;
    
    let name = extMatch[1].trim();
    let rest = bareLine.substring(name.length).replace(/[()]/g, '').trim().toLowerCase();
    
    if (!allFiles5.includes(name)) continue;
    
    let cat = 'uncategorized';
    if (rest.includes('living')) cat = 'living';
    else if (rest.includes('kitchen') || rest.includes('dining')) cat = 'kitchen';
    else if (rest.includes('bed')) cat = 'bedroom';
    else if (rest.includes('bath')) cat = 'bathroom';
    else if (rest.includes('balcony') || rest.includes('view')) cat = 'balcony';
    else if (rest.includes('hero')) cat = 'hero';
    else if (rest.includes('interior')) cat = 'interior details';
    else if (rest.includes('pool')) cat = 'pool';
    else if (rest.includes('exterior')) cat = 'exterior';
    else if (rest.includes('gym')) cat = 'gym';
    else if (rest.includes('spa')) cat = 'spa';
    else if (rest.includes('playground')) cat = 'playground';
    else if (rest.includes('common')) cat = 'common areas';
    else if (rest.includes('surroundings')) cat = 'surroundings';
    
    photoMap.set(name, cat);
}

// Add any uncategorized files from the actual folder
for (let f of allFiles5) {
    if (!photoMap.has(f)) photoMap.set(f, 'uncategorized');
}

let categorized = Array.from(photoMap.entries()).map(([name, cat]) => ({ name, cat }));
categorized.sort((a, b) => {
    let aIdx = NEW_ORDER.indexOf(a.cat); if (aIdx === -1) aIdx = 99;
    let bIdx = NEW_ORDER.indexOf(b.cat); if (bIdx === -1) bIdx = 99;
    return aIdx !== bIdx ? aIdx - bIdx : a.name.localeCompare(b.name);
});

// Ensure hero exists, use first living room if not
let hasHero = categorized.some(p => p.cat === 'hero');
if (!hasHero) {
    let firstLivingIdx = categorized.findIndex(p => p.cat === 'living');
    if (firstLivingIdx !== -1) {
        let h = categorized.splice(firstLivingIdx, 1)[0];
        h.cat = 'hero';
        categorized.unshift(h);
    }
}

let finalPhotos = [...new Map(categorized.map(p => [p.name, p.name])).values()];
console.log('5 Mah sorted photos count:', finalPhotos.length, '| First 5:', finalPhotos.slice(0, 5));

// Fix both photosDir and photos
for (let apt of data) {
    if (apt.id === '5 Mah') {
        apt.photosDir = '5 Mah';
        apt.photos = finalPhotos;
    }
}

const finalFileContent = `const apartmentsData = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync('js/data.js', finalFileContent, 'utf8');
console.log('Successfully fixed 5 Mah!');
