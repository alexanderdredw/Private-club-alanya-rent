const fs = require('fs');

const NEW_ORDER = [
  'hero',
  'living',
  'kitchen',
  'bedroom',
  'bathroom',
  'balcony',
  'interior details',
  'pool',
  'exterior',
  'complex',
  'gym',
  'spa',
  'playground',
  'common areas',
  'surroundings',
  'uncategorized'
];

let dataStr = fs.readFileSync('js/data.js', 'utf8');
let jsonMatch = dataStr.match(/const apartmentsData = (\[[\s\S]*\]);/);
if (!jsonMatch) { throw new Error("Could not find array in data.js"); }
let data = JSON.parse(jsonMatch[1]);

function processTxtScratchpad(aptId) {
    if (!fs.existsSync(`${aptId}/tmp_scratchpad.txt`)) return null;
    const scratchpadStr = fs.readFileSync(`${aptId}/tmp_scratchpad.txt`, 'utf8');
    const allFiles = fs.readdirSync(aptId).filter(f => /\.(jpe?g|png|webp|heic)$/i.test(f));

    let photoMap = new Map();
    let currentCategory = 'uncategorized';

    let lines = scratchpadStr.split('\n');
    for (let line of lines) {
        line = line.trim();
        if (!line) continue;
        
        if (line.endsWith(':')) {
            let upper = line.toUpperCase();
            if (upper.includes("LIVING") || upper.includes("STAIRS")) currentCategory = "living";
            else if (upper.includes("KITCHEN") || upper.includes("DINING")) currentCategory = "kitchen";
            else if (upper.includes("BEDROOM") || upper.includes("BED1") || upper.includes("BED2")) currentCategory = "bedroom";
            else if (upper.includes("BATHROOM") || upper.includes("BATH1") || upper.includes("BATH2")) currentCategory = "bathroom";
            else if (upper.includes("BALCONY") || upper.includes("VIEW")) currentCategory = "balcony";
            else if (upper.includes("COMPLEX") || upper.includes("EXTERIOR") || upper.includes("POOL")) currentCategory = "complex";
            else currentCategory = 'uncategorized';
        } else {
            let bareLine = line.replace(/^(?:-\s+)?/, '');
            let extMatch = bareLine.match(/(.*?\.(?:jpe?g|png|webp|heic))/i);
            if (extMatch) {
                let f = extMatch[1].trim();
                if (allFiles.includes(f)) {
                    photoMap.set(f, currentCategory);
                }
            }
        }
    }
    
    for (let f of allFiles) {
        if (!photoMap.has(f)) photoMap.set(f, 'uncategorized');
    }
    return photoMap;
}

function processJsScratchpad(aptId) {
    let scriptNameMatch = aptId.replace(' Mah', 'mah').toLowerCase();
    let scriptFile = `update_${scriptNameMatch}.js`;
    if (!fs.existsSync(scriptFile)) return null;
    
    let scriptContent = fs.readFileSync(scriptFile, 'utf8');
    let match = scriptContent.match(/const scratchpad = `([\s\S]*?)`/);
    if (!match) return null;
    
    let scratchpadStr = match[1];
    
    let photoMap = new Map();
    const allFiles = fs.readdirSync(aptId).filter(f => /\.(jpe?g|png|webp|heic)$/i.test(f));
    
    let lines = scratchpadStr.split('\n');
    for (let line of lines) {
        let bareLine = line.trim();
        let parts = bareLine.split(' ');
        if (parts.length < 2) continue;
        
        let possibleExt = bareLine.match(/(.*?\.(?:jpe?g|png|webp|heic))/i);
        if (!possibleExt) continue;
        
        let name = possibleExt[1].trim();
        let catStr = bareLine.substring(name.length).replace(/[()]/g, '').trim().toLowerCase();
        
        if (name && allFiles.includes(name)) {
            let cat = 'uncategorized';
            if (catStr.includes('living')) cat = 'living';
            else if (catStr.includes('kitchen') || catStr.includes('dining')) cat = 'kitchen';
            else if (catStr.includes('bed')) cat = 'bedroom';
            else if (catStr.includes('bath')) cat = 'bathroom';
            else if (catStr.includes('balcony') || catStr.includes('view')) cat = 'balcony';
            else if (catStr.includes('hero')) cat = 'hero';
            else if (catStr.includes('interior')) cat = 'interior details';
            else if (catStr.includes('pool')) cat = 'pool';
            else if (catStr.includes('exterior')) cat = 'exterior';
            else if (catStr.includes('gym')) cat = 'gym';
            else if (catStr.includes('spa')) cat = 'spa';
            else if (catStr.includes('playground')) cat = 'playground';
            else if (catStr.includes('common')) cat = 'common areas';
            else if (catStr.includes('surroundings')) cat = 'surroundings';
            
            photoMap.set(name, cat);
        }
    }
    
    for (let f of allFiles) {
        if (!photoMap.has(f)) photoMap.set(f, 'uncategorized');
    }
    return photoMap;
}

for (let apt of data) {
    let photoMap = null;
    if (['2 Mah', '3 Mah', '4 Mah'].includes(apt.id)) {
        photoMap = processTxtScratchpad(apt.id);
    } else {
        photoMap = processJsScratchpad(apt.id);
    }
    
    if (photoMap) {
        let categorized = Array.from(photoMap.entries()).map(([name, cat]) => ({ name, cat }));
        
        // Sort strictly by new order
        categorized.sort((a, b) => {
            let aIdx = NEW_ORDER.indexOf(a.cat);
            let bIdx = NEW_ORDER.indexOf(b.cat);
            if (aIdx === -1) aIdx = 99;
            if (bIdx === -1) bIdx = 99;
            if (aIdx === bIdx) return a.name.localeCompare(b.name);
            return aIdx - bIdx;
        });
        
        // Ensure a HERO exists. If not, make first living room front-most.
        let hasHero = categorized.some(p => p.cat === 'hero');
        if (!hasHero) {
            let firstLivingIdx = categorized.findIndex(p => p.cat === 'living');
            if (firstLivingIdx !== -1) {
                let heroRoom = categorized.splice(firstLivingIdx, 1)[0];
                heroRoom.cat = 'hero';
                categorized.unshift(heroRoom);
            }
        }
        
        // Assemble final valid output mapping directly to original source bounds
        let uniqueNames = [];
        let finalPhotos = [];
        for (let p of categorized) {
            if (!uniqueNames.includes(p.name)) {
                uniqueNames.push(p.name);
                finalPhotos.push(p.name); // only push names
            }
        }
        
        apt.photos = finalPhotos;
        console.log(`[${apt.id}] Sorted ${finalPhotos.length} strictly to new 7-Rule`);
    } else {
        console.log(`[${apt.id}] Skipped (no classification references found)`);
    }
}

const finalFileContent = `const apartmentsData = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync('js/data.js', finalFileContent, 'utf8');
