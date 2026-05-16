const fs = require('fs');
const path = require('path');

const dataPath = 'c:\\Users\\Александр\\OneDrive\\Рабочий стол\\alanya rent website\\js\\data.js';
let content = fs.readFileSync(dataPath, 'utf8');

// The corrupted part looks like this:
// 331:       "56137026-1147-4ffd-bd1a-d2013eba9c73.jpg",
// 332:       "ru": "Green Ocean 2+1",
// 333:       "en": "Green Ocean 2+1",    },

const brokenPart = `      "56137026-1147-4ffd-bd1a-d2013eba9c73.jpg",
      "ru": "Green Ocean 2+1",
      "en": "Green Ocean 2+1",    },`;

const fixedPart = `      "56137026-1147-4ffd-bd1a-d2013eba9c73.jpg",
      "586665fe-5391-4da1-9fa3-a2cafca59892.jpg",
      "922d2fb3-7958-4350-818b-604de71fde33.jpg",
      "94069afa-25e3-4b51-8c89-c65d2b09cd5a.jpg"
    ],
    "videoDir": "3_Mah_V",
    "video": "https://youtube.com/shorts/5dD6_TAjZlY"
  },
  {
    "id": "4 Mah",
    "number": "4",
    "title": {
      "ru": "Green Ocean 2+1",
      "en": "Green Ocean 2+1",    },`;

// We use a more flexible replacement to handle potential CRLF/LF issues
const lines = content.split(/\r?\n/);
let foundIndex = -1;
for (let i = 0; i < lines.length - 2; i++) {
    if (lines[i].includes('56137026-1147-4ffd-bd1a-d2013eba9c73.jpg') && 
        lines[i+1].includes('"ru": "Green Ocean 2+1"') &&
        lines[i+2].includes('"en": "Green Ocean 2+1"')) {
        foundIndex = i;
        break;
    }
}

if (foundIndex !== -1) {
    lines.splice(foundIndex, 3, fixedPart);
    fs.writeFileSync(dataPath, lines.join('\n'), 'utf8');
    console.log('Successfully fixed data.js and updated video URL.');
} else {
    console.error('Could not find the broken part in data.js');
}
