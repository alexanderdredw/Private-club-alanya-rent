const fs = require('fs');

let scratchpad = fs.readFileSync('tmp_scratchpad.txt', 'utf8');

// To append next batch:
// scratchpad += `\nCATEGORY:\n`;
// scratchpad += `PHOTO-... (desc)\n`;
// fs.writeFileSync('tmp_scratchpad.txt', scratchpad);

const dataRaw = fs.readFileSync('../js/data.js', 'utf8');
const mStart = dataRaw.indexOf('"id": "5 Mah"');
const photosStart = dataRaw.indexOf('"photos": [', mStart);
const photosEnd = dataRaw.indexOf(']', photosStart);

const photosBlock = dataRaw.substring(photosStart, photosEnd);
const photos = photosBlock.match(/"([^"]+)"/g).map(s => s.replace(/"/g, '')).filter(p => p !== 'photos');

const classified = scratchpad.split('\n')
  .filter(line => line.includes('.jpg') || line.includes('.jpeg') || line.includes('.png'))
  .map(line => line.split(' ')[0].split('/').pop());

const unclassified = photos.filter(p => !classified.includes(p.split('/').pop()));

console.log('Remaining:', unclassified.length);
unclassified.slice(0, 5).forEach(p => console.log(p.split('/').pop()));
