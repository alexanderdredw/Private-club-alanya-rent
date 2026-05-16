const fs = require('fs');
const path = require('path');

const dataStr = fs.readFileSync('js/data.js', 'utf8');

// Find the 11 Mah object
const mStart = dataStr.indexOf('"id": "11 Mah"');
const photosStart = dataStr.indexOf('"photos": [', mStart);
const photosEnd = dataStr.indexOf(']', photosStart);
const photosSection = dataStr.substring(photosStart, photosEnd + 1);

// Extract the current array
const match = photosSection.match(/"photos":\s*(\[[\s\S]*?\])/);
if (!match) throw new Error('Could not parse photos array');

const currentPhotos = JSON.parse(match[1]);
const basePath = 'c:\\\\Users\\\\Александр\\\\OneDrive\\\\Рабочий стол\\\\alanya rent website\\\\11 Mah';

const validPhotos = [];
for (const p of currentPhotos) {
    if (fs.existsSync(path.join(basePath, p))) {
        validPhotos.push(p);
    } else {
        console.log('REMOVING HALLUCINATED FILE:', p);
    }
}

const newPhotosString = '"photos": [\n      ' + validPhotos.map(p => '"' + p + '"').join(',\n      ') + '\n    ]';
const newDataStr = dataStr.substring(0, photosStart) + newPhotosString + dataStr.substring(photosEnd + 1);

fs.writeFileSync('js/data.js', newDataStr);
console.log('Successfully cleaned up 11 Mah photos array');
