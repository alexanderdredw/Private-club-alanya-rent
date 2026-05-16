const fs = require('fs');

// 1. Fix app.js IntersectionObserver
let appSrc = fs.readFileSync('js/app.js', 'utf8');
appSrc = appSrc.replace(/\{ threshold: 0\.1 \}/g, "{ threshold: 0, rootMargin: '50px' }");
fs.writeFileSync('js/app.js', appSrc, 'utf8');

// 2. Fix data.js 1 Mah
let dataSrc = fs.readFileSync('js/data.js', 'utf8');
// remove "const apartmentsData = "
let jsonArrStr = dataSrc.replace('const apartmentsData = ', '').replace(/;\s*$/, '');
let data = JSON.parse(jsonArrStr);

for (let apt of data) {
    if (apt.id === '1 Mah') {
        // Drop the massive corrupted richDescription
        delete apt.richDescription;
        apt.number = "1";
        apt.size = "1+1, 50m²";
        apt.amenities = ["wifi", "pool", "ac", "parking", "kitchen"]; // Basic matching
    }
}

const finalFileContent = `const apartmentsData = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync('js/data.js', finalFileContent, 'utf8');

console.log("Fixed app.js observer and 1 Mah data!");
