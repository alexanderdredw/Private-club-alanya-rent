const fs = require('fs');
const path = require('path');

const scratchpadStr = fs.readFileSync('2 Mah/tmp_scratchpad.txt', 'utf8');
const allFiles = fs.readdirSync('2 Mah').filter(f => /\.(jpe?g|png|webp|heic)$/i.test(f));

// Parse scratchpad
const extractCategory = (title) => {
    let regex = new RegExp(title + ".*?:\\s*([\\s\\S]*?)(?=\\n[A-Z0-9 ]+?:|\\Z)", "i");
    let match = scratchpadStr.match(regex);
    if (!match) return [];
    let lines = match[1].split('\\n');
    let files = [];
    for (let line of lines) {
        let m = line.match(/^-\\s+([^\\(]+)/);
        if (m) {
            let f = m[1].trim();
            if (f !== 'TBD' && f !== '') files.push(f);
        }
    }
    return files;
};

let living = extractCategory("LIVING ROOM");
let kitchen = extractCategory("KITCHEN");
let bed1 = extractCategory("BEDROOM 1");
let bed2 = extractCategory("BEDROOM 2");
let bath1 = extractCategory("BATHROOM 1");
let bath2 = extractCategory("BATHROOM 2");
let balcony = extractCategory("BALCONY");

// Unique set of categorized files
const categorized = new Set([...living, ...kitchen, ...bed1, ...bed2, ...bath1, ...bath2, ...balcony]);

// Find all uncategorized files
const uncategorized = allFiles.filter(f => !categorized.has(f));

// Assemble final ordered list
// First 5 must not be bathrooms.
let finalPhotos = [];

const addUniques = (arr) => {
    for (const f of arr) {
        if (!finalPhotos.includes(f) && allFiles.includes(f)) {
            finalPhotos.push(f);
        }
    }
};

addUniques(living);
addUniques(kitchen);
addUniques(bed1);
addUniques(bed2);
addUniques(balcony);

// Put uncategorized (might be exterior, or other rooms, or bathrooms we don't know)
// We'll trust they aren't the very worst thing to put after the main rooms.
addUniques(uncategorized);

// Bathrooms at the very end
addUniques(bath1);
addUniques(bath2);

// Update data.js
let dataStr = fs.readFileSync('js/data.js', 'utf8').trim();
if (dataStr.endsWith(';')) dataStr = dataStr.slice(0, -1);
let jsonStr = dataStr.replace('const apartmentsData = ', '');
let data = JSON.parse(jsonStr);

let updated = false;
for (let apt of data) {
    if (apt.id === '2 Mah') {
        apt.photos = finalPhotos;
        updated = true;
    }
}

if (updated) {
    fs.writeFileSync('js/data.js', `const apartmentsData = ${JSON.stringify(data, null, 2)};\\n`, 'utf8');
    console.log('Successfully updated 2 Mah photos. Total grouped:', finalPhotos.length);
} else {
    console.log('Could not find 2 Mah in data.js');
}
