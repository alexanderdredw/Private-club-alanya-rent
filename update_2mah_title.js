const fs = require('fs');
let dataStr = fs.readFileSync('js/data.js', 'utf8');
let jsonMatch = dataStr.match(/const apartmentsData = (\[[\s\S]*\]);/);
let data = JSON.parse(jsonMatch[1]);

for (let apt of data) {
    if (apt.id === '2 Mah') {
        apt.title = {
            ru: 'Green Ocean 2+1 — С персональным выходом к бассейну',
            en: 'Green Ocean 2+1 — Private Pool Access Duplex',
            tr: 'Green Ocean 2+1 — Özel Havuz Girişli Dubleks',
            de: 'Green Ocean 2+1 — Duplex mit privatem Poolzugang'
        };
        console.log('2 Mah title updated!');
    }
}

fs.writeFileSync('js/data.js', `const apartmentsData = ${JSON.stringify(data, null, 2)};\n`, 'utf8');
console.log('Done!');
