const fs = require('fs');

let dataStr = fs.readFileSync('js/data.js', 'utf8');
let jsonMatch = dataStr.match(/const apartmentsData = (\[[\s\S]*\]);/);
if (!jsonMatch) { throw new Error("Could not find array in data.js"); }
let data = JSON.parse(jsonMatch[1]);

function processApt(aptId) {
    if (!fs.existsSync(`${aptId}/tmp_scratchpad.txt`)) return;
    const scratchpadStr = fs.readFileSync(`${aptId}/tmp_scratchpad.txt`, 'utf8');
    const allFiles = fs.readdirSync(aptId).filter(f => /\.(jpe?g|png|webp|heic)$/i.test(f));

    let categories = {
        LIVING: [], KITCHEN: [], BED1: [], BED2: [], BED3: [], 
        BATH1: [], BATH2: [], BATH3: [], BALCONY: [], COMPLEX: []
    };
    
    let currentCategory = null;

    let lines = scratchpadStr.split('\n');
    for (let line of lines) {
        line = line.trim();
        if (!line) continue;
        
        if (line.endsWith(':')) {
            let upper = line.toUpperCase();
            if (upper.includes("LIVING") || upper.includes("STAIRS")) currentCategory = "LIVING";
            else if (upper.includes("KITCHEN") || upper.includes("DINING")) currentCategory = "KITCHEN";
            else if (upper.includes("BEDROOM 1")) currentCategory = "BED1";
            else if (upper.includes("BEDROOM 2")) currentCategory = "BED2";
            else if (upper.includes("BEDROOM 3")) currentCategory = "BED3";
            else if (upper.includes("BATHROOM 1")) currentCategory = "BATH1";
            else if (upper.includes("BATHROOM 2")) currentCategory = "BATH2";
            else if (upper.includes("BATHROOM 3")) currentCategory = "BATH3";
            else if (upper.includes("BALCONY") || upper.includes("POOL")) currentCategory = "BALCONY";
            else if (upper.includes("COMPLEX") || upper.includes("EXTERIOR")) currentCategory = "COMPLEX";
            else currentCategory = null;
        } else if (currentCategory) {
            let bareLine = line.replace(/^(?:-\s+)?/, '');
            let extMatch = bareLine.match(/(.*?\.(?:jpe?g|png|webp|heic))/i);
            if (extMatch) {
                let f = extMatch[1].trim();
                if (f !== 'TBD' && f !== '') {
                    // check if the file actually exists to avoid matching random text
                    if (allFiles.includes(f)) {
                        categories[currentCategory].push(f);
                    }
                }
            }
        }
    }

    const categorizedList = [
        ...categories.LIVING, ...categories.KITCHEN,
        ...categories.BED1, ...categories.BED2, ...categories.BED3,
        ...categories.BALCONY, ...categories.COMPLEX,
        ...categories.BATH1, ...categories.BATH2, ...categories.BATH3
    ];
    
    const categorizedSet = new Set(categorizedList);
    const uncategorized = allFiles.filter(f => !categorizedSet.has(f));

    let finalPhotos = [];
    const addUniques = (arr) => {
        for (const f of arr) {
            if (!finalPhotos.includes(f) && allFiles.includes(f)) finalPhotos.push(f);
        }
    };

    addUniques(categories.LIVING);
    addUniques(categories.KITCHEN);
    addUniques(categories.BED1);
    addUniques(categories.BED2);
    addUniques(categories.BED3);
    addUniques(categories.BALCONY);
    addUniques(categories.COMPLEX);
    addUniques(uncategorized);
    addUniques(categories.BATH1);
    addUniques(categories.BATH2);
    addUniques(categories.BATH3);

    let extractedCount = categories.LIVING.length + categories.KITCHEN.length + 
                         categories.BED1.length + categories.BED2.length + categories.BED3.length +
                         categories.BATH1.length + categories.BATH2.length + categories.BATH3.length +
                         categories.BALCONY.length + categories.COMPLEX.length;

    console.log(`[${aptId}] Extracted securely: ${extractedCount} photos. Total files in dir: ${allFiles.length}.`);
    
    for (let apt of data) {
        if (apt.id === aptId) {
            apt.photos = finalPhotos;
        }
    }
}

processApt('2 Mah');
processApt('3 Mah');
processApt('4 Mah');

const finalFileContent = `const apartmentsData = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync('js/data.js', finalFileContent, 'utf8');
