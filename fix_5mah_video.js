const fs = require('fs');

let dataStr = fs.readFileSync('js/data.js', 'utf8');
let jsonMatch = dataStr.match(/const apartmentsData = (\[[\s\S]*\]);/);
let data = JSON.parse(jsonMatch[1]);

for (let apt of data) {
    if (apt.id === '5 Mah') {
        apt.videoDir = '5 Mah V';
        apt.video = 'IMG_0757.mov';
        console.log('Fixed 5 Mah video to IMG_0757.mov');
    }
}

fs.writeFileSync('js/data.js', 'const apartmentsData = ' + JSON.stringify(data, null, 2) + ';\n', 'utf8');
console.log('Done.');
