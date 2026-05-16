const fs = require('fs');

let dataStr = fs.readFileSync('js/data.js', 'utf8').trim();
if (dataStr.endsWith('\\n')) dataStr = dataStr.slice(0, -2);
if (dataStr.endsWith(';')) dataStr = dataStr.slice(0, -1);
let jsonStr = dataStr.replace('const apartmentsData = ', '');
let data = JSON.parse(jsonStr);

function processApt(aptId) {
    if (!fs.existsSync(`${aptId}/tmp_scratchpad.txt`)) return;
    const scratchpadStr = fs.readFileSync(`${aptId}/tmp_scratchpad.txt`, 'utf8');
    const allFiles = fs.readdirSync(aptId).filter(f => /\.(jpe?g|png|webp|heic)$/i.test(f));

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
    let bed3 = extractCategory("BEDROOM 3"); // 4 Mah has 3 bedrooms
    let bath1 = extractCategory("BATHROOM 1");
    let bath2 = extractCategory("BATHROOM 2");
    let bath3 = extractCategory("BATHROOM 3");
    let balcony = extractCategory("BALCONY");
    let exterior = extractCategory("COMPLEX");

    const categorized = new Set([...living, ...kitchen, ...bed1, ...bed2, ...bed3, ...bath1, ...bath2, ...bath3, ...balcony, ...exterior]);
    const uncategorized = allFiles.filter(f => !categorized.has(f));

    let finalPhotos = [];
    const addUniques = (arr) => {
        for (const f of arr) {
            if (!finalPhotos.includes(f) && allFiles.includes(f)) finalPhotos.push(f);
        }
    };

    addUniques(living);
    addUniques(kitchen);
    addUniques(bed1);
    addUniques(bed2);
    addUniques(bed3);
    addUniques(balcony);
    addUniques(exterior);
    addUniques(uncategorized);
    addUniques(bath1);
    addUniques(bath2);
    addUniques(bath3);

    for (let apt of data) {
        if (apt.id === aptId) {
            apt.photos = finalPhotos;
            console.log(`Updated ${aptId} sorting. Photos: ${finalPhotos.length}`);
        }
    }
}

processApt('2 Mah');
processApt('3 Mah');
processApt('4 Mah');

const finalFileContent = `const apartmentsData = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync('js/data.js', finalFileContent, 'utf8');
