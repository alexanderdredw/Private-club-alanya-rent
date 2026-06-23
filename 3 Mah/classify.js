const fs = require('fs');
let scratchpad = fs.readFileSync('tmp_scratchpad.txt', 'utf8');

scratchpad += `\nLIVING ROOM:\n`;
scratchpad += `5a993fe5-b47e-4629-9639-e97aae518595.jpg (grey sofa, black curtain, window to balcony)\n`;

scratchpad += `\nCOMPLEX:\n`;
scratchpad += `6180bbb6-19a9-4ad1-abfa-470b72e5dc64.jpg (pool, cabanas, bridge, building)\n`;
scratchpad += `647f0771-e4d5-49b3-b3ca-c1692f0379c4.jpg (elevator interior)\n`;
scratchpad += `6f5ef374-3a04-4d3e-a11a-2449cf9193db.jpg (playground)\n`;
scratchpad += `72456465-79de-4b74-bc71-81bb06b47cd6.jpg (building exterior close up)\n`;
scratchpad += `7e49ca8d-af62-4005-a896-40cb32d65e20.jpg (building exterior, front entrance gate GREEN OCEAN)\n`;
scratchpad += `f0bbab19-5471-4b4e-bc17-224f7ff86086.jpg (pool, building, large palm tree)\n`;
scratchpad += `f8dba83f-46f0-4efe-b9ad-04cb72c129b4.jpg (pool, building exterior)\n`;
scratchpad += `fcf754a9-d97e-409e-86d5-c616cabc213c.jpg (tennis / basketball court)\n`;

scratchpad += `\nBEDROOM 2:\n`;
scratchpad += `6455b97a-1957-4b9f-a322-d409a7d93844.jpg (bed with beige wardrobe, round mirror)\n`;

scratchpad += `\nKITCHEN / DINING:\n`;
scratchpad += `72e97cd0-2f2b-4f73-9df0-afb57466ef68.jpg (dining table with plates, glasses, candle)\n`;
scratchpad += `f595b41f-d241-43a3-ad21-944af408bd77.jpg (entrance / hallway with white fridge)\n`;

scratchpad += `\nBALCONY:\n`;
scratchpad += `fbcd0788-81b1-42be-bbca-f6bc0f91326a.jpg (two chairs, table, book, view of buildings)\n`;

fs.writeFileSync('tmp_scratchpad.txt', scratchpad);

const dataRaw = fs.readFileSync('../js/data.js', 'utf8');
const m3Start = dataRaw.indexOf('id: "3-mah"');
const photosStart = dataRaw.indexOf('photos: [', m3Start);
const photosEnd = dataRaw.indexOf('],', photosStart);
const photosStr = dataRaw.slice(photosStart, photosEnd);
const allPhotos = [...photosStr.matchAll(/"([^"]+)"/g)].map(m => m[1]);

const unclassified = allPhotos.filter(p => !scratchpad.includes(p.split('/')[1]));
console.log('Unclassified: ' + unclassified.length);
console.log(unclassified.map(p => p.split('/')[1]).join('\n'));
