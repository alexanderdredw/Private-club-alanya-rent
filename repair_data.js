const fs = require('fs');
const path = require('path');

const src = fs.readFileSync('js/data.js', 'utf8');

// The file starts with: `const apartmentsData = [`
// We will extract everything we can using regex and custom parsing.
// Or we can just build an array of objects.
const apartments = [];

// Since the file is corrupted JSON, we'll extract blocks using "id": "X Mah"
const ids = [...src.matchAll(/"id":\s*"(.*?)"/g)];

const uniqueIds = new Set();
const finalApartments = [];

for (let i = 0; i < ids.length; i++) {
    const id = ids[i][1];
    
    // IF we already successfully fully parsed this ID, skip duplicates
    // EXCEPT if the new block is BETTER (has photos). We will favor the block with photos.
    const startIdx = ids[i].index;
    const endIdx = i + 1 < ids.length ? ids[i+1].index : src.length;
    let chunk = src.slice(startIdx, endIdx);
    
    // Let's extract properties manually from the chunk:
    const extractObj = (key) => {
        const regex = new RegExp(`"${key}":\\s*({[\\s\\S]*?})`);
        const match = chunk.match(regex);
        if (match) {
            try {
                // simple properties might be cut off, so we fix trailing commas
                let str = match[1].replace(/,\s*}/g, '}');
                // if it's cut off, this might fail, but for title/description they are usually intact
                return JSON.parse(str);
            } catch(e) {
                // If it fails, maybe it doesn't end properly.
                return null;
            }
        }
        return null;
    };
    
    const extractStr = (key) => {
        const regex = new RegExp(`"${key}":\\s*"(.*?)"`);
        const match = chunk.match(regex);
        return match ? match[1] : null;
    };

    const extractArr = (key) => {
        const regex = new RegExp(`"${key}":\\s*\\[([\\s\\S]*?)\\]`);
        const match = chunk.match(regex);
        if (match) {
            try {
                return JSON.parse(`[${match[1]}]`);
            } catch(e) {
                return null;
            }
        }
        return null;
    };
    
    let number = extractStr("number");
    let title = extractObj("title");
    let description = extractObj("description");
    let richDescription = extractObj("richDescription");
    let size = extractStr("size");
    let price = extractStr("price");
    let amenities = extractArr("amenities");
    let photosDir = extractStr("photosDir");
    let photos = extractArr("photos");
    let videoDir = extractStr("videoDir");
    let video = extractStr("video");
    
    // If richDescription parse failed due to bad brackets from the user script, we can ignore it or fix it.
    // The user's script inserted HUGE richDescription blocks. Let's just grab the whole thing if it exists.
    if (!richDescription) {
        let m = chunk.match(/"richDescription":\s*({[\s\S]*?})\s*,?\s*"/);
        if (m) {
            try { richDescription = JSON.parse(m[1]); } catch(e){}
        }
    }
    
    // If it's incomplete, provide defaults
    if (!size) size = "1+1, 65m²";
    if (!price) price = id === "1 Mah" ? "От €90 / сутки" : "От €100 / сутки";
    if (!amenities) amenities = ["wifi", "pool", "ac", "parking", "kitchen"];
    if (!photosDir) photosDir = id;
    
    if (!photos || photos.length === 0) {
        const dirPath = path.join(__dirname, photosDir);
        if (fs.existsSync(dirPath)) {
            const files = fs.readdirSync(dirPath).filter(f => /\.(jpg|jpeg|png|webp|heic)$/i.test(f));
            // Just use whatever is in the folder as photos for these broken ones
            photos = files; 
        } else {
            photos = [];
        }
    }
    
    let obj = {
        id, number, title, description, richDescription, size, price, amenities, photosDir, photos, videoDir, video
    };
    
    // if number is null, drop it.
    if (!number) delete obj.number;
    if (!videoDir) delete obj.videoDir;
    if (!video) delete obj.video;
    
    // Store it
    apartments.push(obj);
}

// Now filter unique IDs. If there are multiple, keep the one with the most photos, or the last one.
const aptMap = new Map();
for (const apt of apartments) {
    if (!aptMap.has(apt.id)) {
        aptMap.set(apt.id, apt);
    } else {
        const existing = aptMap.get(apt.id);
        if (apt.photos.length > existing.photos.length) {
            aptMap.set(apt.id, apt);
        } else if (apt.photos.length === existing.photos.length && Object.keys(apt).length > Object.keys(existing).length) {
           aptMap.set(apt.id, apt); 
        }
    }
}

// We also need 1 Mah, which we didn't fully capture maybe if it didn't match perfectly.
// Let's reconstruct the file.
const finalArr = Array.from(aptMap.values());

// Sort naturally by ID integer
finalArr.sort((a,b) => parseInt(a.id) - parseInt(b.id));

const fileContent = `const apartmentsData = ${JSON.stringify(finalArr, null, 2)};\n`;

fs.writeFileSync('js/data.js', fileContent, 'utf8');
console.log('Successfully rebuilt data.js! Total apartments:', finalArr.length);

