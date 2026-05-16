const fs = require('fs');
const path = require('path');

const targetDir = './'; // Root of the project where this is run
const dataOutputFile = './js/data.js';

// Get directories
const items = fs.readdirSync(targetDir, { withFileTypes: true });

const apartments = [];

// Find all "X Mah" directories where X is a number
const mahDirs = items.filter(item => item.isDirectory() && /^\d+\sMah$/i.test(item.name));

mahDirs.forEach(dir => {
    const aptNumber = dir.name.split(' ')[0];
    
    const apt = {
        id: dir.name,
        number: aptNumber,
        title: {
            ru: `Апартаменты в районе Махмутлар ${aptNumber}`,
            en: `Apartment in Mahmutlar ${aptNumber}`,
            tr: `Mahmutlar'da Daire ${aptNumber}`,
            de: `Wohnung in Mahmutlar ${aptNumber}`
        },
        description: {
            ru: `Современная квартира в новом комплексе. В нескольких шагах от моря.`,
            en: `Modern apartment in a new complex. Just steps away from the sea.`,
            tr: `Yeni komplekste modern daire. Denize sadece birkaç adım uzaklıkta.`,
            de: `Moderne Wohnung in einem neuen Komplex. Nur wenige Schritte vom Meer entfernt.`
        },
        size: '1+1, 65m²',
        price: 'От €100 / сутки',
        amenities: ['wifi', 'pool', 'ac', 'parking', 'kitchen'],
        photosDir: dir.name,
        photos: [],
        videoDir: `${aptNumber} Mah V`,
        video: null
    };

    // Read photos
    const photoPath = path.join(targetDir, dir.name);
    if (fs.existsSync(photoPath)) {
        const photos = fs.readdirSync(photoPath).filter(f => /\.(jpe?g|png|webp|avif)$/i.test(f));
        // Sort photos to make it somewhat deterministic or put '1.jpeg' first
        apt.photos = photos.sort();
    }

    // Read video
    const videoPath = path.join(targetDir, `${aptNumber} Mah V`, dir.name.replace(/mah$/i, 'Mah V').replace(/1 mah/, '1 Mah V')); // just try to construct the likely video folder
    
    // Actually the video dir is precisely "{Number} Mah V" or sometimes lowercased based on listing.
    // Let's search for the folder dynamically
    const vidDirCandidate = items.find(item => item.isDirectory() && item.name.toLowerCase() === `${aptNumber} mah v`.toLowerCase());
    
    if (vidDirCandidate) {
        apt.videoDir = vidDirCandidate.name;
        const vidPathFull = path.join(targetDir, vidDirCandidate.name);
        const videos = fs.readdirSync(vidPathFull).filter(f => /\.(mp4|mov|webm)$/i.test(f));
        if (videos.length > 0) {
            apt.video = videos[0]; // Take the first video
        }
    } else {
        // Fallback or exact match attempt
        const vidFallback = `${aptNumber} Mah V`;
        if (fs.existsSync(path.join(targetDir, vidFallback))) {
            const videos = fs.readdirSync(path.join(targetDir, vidFallback)).filter(f => /\.(mp4|mov|webm)$/i.test(f));
            if (videos.length > 0) {
                apt.video = videos[0];
                apt.videoDir = vidFallback;
            }
        }
    }

    // Only add if it has photos
    if (apt.photos.length > 0) {
        apartments.push(apt);
    }
});

// Sort by number
apartments.sort((a, b) => parseInt(a.number) - parseInt(b.number));

const jsContent = `// AUTO-GENERATED FILE
const apartmentsData = ${JSON.stringify(apartments, null, 2)};
`;

if (!fs.existsSync(path.dirname(dataOutputFile))) {
    fs.mkdirSync(path.dirname(dataOutputFile), { recursive: true });
}

fs.writeFileSync(dataOutputFile, jsContent, 'utf8');
console.log('Successfully generated data for ' + apartments.length + ' apartments.');
