const fs = require('fs');
const path = require('path');

const dataPath = 'c:\\Users\\Александр\\OneDrive\\Рабочий стол\\alanya rent website\\js\\data.js';
let content = fs.readFileSync(dataPath, 'utf8');

const startMarker = 'const apartmentsData = ';
const startIndex = content.indexOf(startMarker);
if (startIndex === -1) {
    console.error('Could not find apartmentsData array');
    process.exit(1);
}

let jsonPart = content.substring(startIndex + startMarker.length).trim().replace(/;$/, '');
jsonPart = jsonPart.replace(/,(\s*[}\]])/g, '$1');

try {
    let apartments = JSON.parse(jsonPart);
    let count = 0;
    
    apartments.forEach(apt => {
        const sizeStr = JSON.stringify(apt.size);
        // Check for 2+1 or 1+2
        const is2plus1 = sizeStr.includes('2+1') || sizeStr.includes('1+2');
                        
        if (is2plus1) {
            apt.price = {
                "ru": "От €70 / сутки",
                "en": "From €70 / night"
            };
            count++;
        }
    });

    const newContent = `const apartmentsData = ${JSON.stringify(apartments, null, 2)};\n`;
    fs.writeFileSync(dataPath, newContent, 'utf8');
    console.log(`Successfully updated prices for ${count} 2+1 (1+2) apartments.`);

} catch (e) {
    console.error('Error parsing data.js:', e.message);
    process.exit(1);
}
