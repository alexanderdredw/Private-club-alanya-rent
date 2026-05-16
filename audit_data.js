const fs = require('fs');
const txt = fs.readFileSync('js/data.js', 'utf8');
const ids = [...txt.matchAll(/"id":\s*"(.*?)"/g)];

console.log('Found IDs:', ids.length);
ids.forEach((m, idx) => {
    const id = m[1];
    const matchIdx = m.index;
    const nextMatchIdx = idx + 1 < ids.length ? ids[idx + 1].index : txt.length;
    const chunk = txt.slice(matchIdx, nextMatchIdx);
    
    console.log(`${id} - size: ${chunk.includes('"size"')}, price: ${chunk.includes('"price"')}, photosDir: ${chunk.includes('"photosDir"')}, photos: ${chunk.includes('"photos": [')}`);
});
