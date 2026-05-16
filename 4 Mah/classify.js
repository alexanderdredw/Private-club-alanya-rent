const fs = require('fs');

let scratchpad = fs.readFileSync('tmp_scratchpad.txt', 'utf8');

scratchpad += `\nCOMPLEX / INFRASTRUCTURE:\n`;
scratchpad += `PHOTO-2025-09-05-11-36-34.jpg (complex pool wide view)\n`;

fs.writeFileSync('tmp_scratchpad.txt', scratchpad);

const dataRaw = fs.readFileSync('../js/data.js', 'utf8');
const m4Start = dataRaw.indexOf('"id": "4 Mah"');
const photosStart = dataRaw.indexOf('"photos": [', m4Start);
const photosEnd = dataRaw.indexOf(']', photosStart);
const photosStr = dataRaw.slice(photosStart, photosEnd);
const allPhotos = [...photosStr.matchAll(/"PHOTO([^"]+)"/g)].map(m => "PHOTO" + m[1]);

const unclassified = allPhotos.filter(p => !scratchpad.includes(p));
console.log('Remaining: ' + unclassified.length);
console.log(unclassified.slice(0, 5).join('\n'));
