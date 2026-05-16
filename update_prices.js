const fs = require('fs');
const path = require('path');

const dataPath = 'c:\\Users\\Александр\\OneDrive\\Рабочий стол\\alanya rent website\\js\\data.js';
let content = fs.readFileSync(dataPath, 'utf8');

// The file is a JS file, not strict JSON. 
// We'll use a safer way to get the data by evaluating the array part in a controlled way or fixing trailing commas.
const startMarker = 'const apartmentsData = ';
const startIndex = content.indexOf(startMarker);
if (startIndex === -1) {
    console.error('Could not find apartmentsData array');
    process.exit(1);
}

let jsonPart = content.substring(startIndex + startMarker.length).trim().replace(/;$/, '');

// Fix common JS-to-JSON issues: trailing commas in objects and arrays
jsonPart = jsonPart.replace(/,(\s*[}\]])/g, '$1');

try {
    let apartments = JSON.parse(jsonPart);
    let count = 0;
    
    apartments.forEach(apt => {
        const is1plus1 = (apt.size && apt.size.ru && apt.size.ru.includes('1+1')) || 
                        (apt.size && apt.size.en && apt.size.en.includes('1+1')) ||
                        (typeof apt.size === 'string' && apt.size.includes('1+1'));
                        
        if (is1plus1) {
            apt.price = {
                "ru": "От €50 / сутки",
                "en": "From €50 / night"
            };
            count++;
        }
    });

    const newContent = `const apartmentsData = ${JSON.stringify(apartments, null, 2)};\n`;
    fs.writeFileSync(dataPath, newContent, 'utf8');
    console.log(`Successfully updated prices for ${count} 1+1 apartments.`);

} catch (e) {
    console.error('Error parsing data.js:', e.message);
    // Fallback: search for position of error if possible
    process.exit(1);
}
