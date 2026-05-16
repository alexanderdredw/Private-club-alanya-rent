const fs = require('fs');

const dataPath = 'c:\\\\Users\\\\Александр\\\\OneDrive\\\\Рабочий стол\\\\alanya rent website\\\\dist\\\\js\\\\data.js';
let dataStr = fs.readFileSync(dataPath, 'utf8');

const videoMappings = {
    "1 Mah": { dir: "1 Mah V", file: "" }, 
    "2 Mah": { dir: "2 Mah v", file: "2 Mah v.mp4" },
    "3 Mah": { dir: "3 Mah V", file: "Img 2226.mp4" },
    "4 Mah": { dir: "4 Mah V", file: "Copy 76F976be-E38b-447B-A9dc-62751Cda3994(2).mp4" },
    "5 Mah": { dir: "5 Mah V", file: "Img 0757.mp4" },
    "6 Mah": { dir: "6 Mah V", file: "Copy 54Edd95c-5481-4Ae5-848B-22B0f9371ac4.mp4" },
    "7 Mah": { dir: "7 Mah V", file: "Img 9212.mp4" },
    "8 Mah": { dir: "8 Mah V", file: "Img 3218.mp4" },
    "9 Mah": { dir: "9 Mah V", file: "Img 2765.mp4" },
    "10 Mah": { dir: "10 Mah", file: "VIDEO-2025-07-11-14-55-33(1).mov" },
    "11 Mah": { dir: "11 Mah v", file: "Img 2766.mp4" },
    "12 Mah": { dir: "12 Mah", file: "VIDEO-2025-09-30-10-10-11.mov" },
    "13 Mah": { dir: "13 Mah V", file: "Img 4203.mp4" },
    "14 Mah": { dir: "14 mah v", file: "Img 2884.mp4" },
    "15 Mah": { dir: "15 Mah v", file: "Img 6648.mp4" }
};

for (const [id, mapping] of Object.entries(videoMappings)) {
    // Find the block for this ID
    const idRegex = new RegExp(`"id":\\s*"${id}"[\\s\\S]+?"videoDir":\\s*"[^"]*",\\s*"video":\\s*"[^"]*"`, 'm');
    const match = dataStr.match(idRegex);
    
    if (match) {
        console.log(`Updating ${id}...`);
        const updatedBlock = match[0]
            .replace(/"videoDir":\s*"[^"]*"/, `"videoDir": "${mapping.dir}"`)
            .replace(/"video":\s*"[^"]*"/, `"video": "${mapping.file}"`);
        dataStr = dataStr.replace(match[0], updatedBlock);
    }
}

fs.writeFileSync(dataPath, dataStr, 'utf8');
console.log("Updated data.js with actual video paths (regex).");
