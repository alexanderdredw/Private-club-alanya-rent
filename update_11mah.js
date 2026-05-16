const fs = require('fs');
const dataStr = fs.readFileSync('js/data.js', 'utf8');

const scratchpad = `
86239f4b-4249-4bb5-8f32-390bab7ae422.JPG (hero)
12a2c3c8-cc36-46b3-b435-356c964eca14.JPG (bathroom)
2104839b-d660-46ba-a1f8-d082232d55d6.JPG (interior details)
2427bd01-a46d-44b7-a2ee-38010e23c89d.JPG (bathroom)
3aaeef42-2d71-4f45-abc7-42a7cdc032ef.JPG (bedroom)
50e87782-5faa-42fe-ac53-f7bbf52366b6.JPG (kitchen)
55be24e4-d969-48ac-8416-f5a0022a7596.JPG (balcony)
5a83298c-84c7-4c69-abaa-eff9e401d96d.JPG (bedroom)
716c069e-d79f-4e2f-bfd7-b4a5580d01bd.JPG (bathroom)
77d2fe9c-a038-4e88-99ac-06a53af5071d.JPG (living room)
7acf360d-40ab-4fe0-9345-b4b6e1e53fc7.JPG (bathroom)
81e97144-6e00-44f0-8e82-99609585c279.JPG (bedroom)
86239f4b-4249-4bb5-8f32-390bab7ae422.JPG (living room)
90b55ad7-8346-4c27-8d7c-8d47d6f7fb91.JPG (living room)
920fbe61-295c-4e48-8154-369f5dc0027d.JPG (balcony)
a69a01d2-6565-4f41-80c2-50b45ace9ac0.JPG (bedroom)
a7b9ebe5-0f3b-47a1-9819-8c46e1a92541.JPG (balcony)
aa6293f0-f938-4e6e-a34f-036122d645e7.JPG (living room)
b2fec241-118f-4edc-93df-8178cd322e7a.JPG (balcony)
bc9b2ff9-3760-4dc6-a790-252c80336214.JPG (kitchen)
b5139301-5d0f-4bd4-aa3e-d220ab87c5a5.JPG (living room)
dc7ba7bc-83da-4fde-916e-8925a978efa7.JPG (balcony)
df8d0e50-c2f5-47b5-bfd0-4d22897ba84a.JPG (kitchen)
Infrustructure/03f27b78-e23f-40a7-9992-fc01ed73e47c.JPG (surroundings)
Infrustructure/0da167d4-4a58-4446-9b51-e38a05b7e8c6.JPG (common areas)
Infrustructure/143b13c1-7535-44d0-bb93-6fe9fcb0098e.JPG (pool)
Infrustructure/1737d788-9a26-4c91-8d9c-839cc2bc4761.JPG (common areas)
Infrustructure/186965a0-26e0-473f-a9ac-003c49e3684f.JPG (gym)
Infrustructure/232493bf-643b-4113-b83f-eca523a58204.JPG (exterior)
Infrustructure/32a82ad6-6f3e-489d-b85d-ff7eea4730de.JPG (exterior)
Infrustructure/3d27e930-e915-4606-87d6-9012b41a568e.JPG (surroundings)
Infrustructure/454c99e6-e809-4aca-864f-9ac5bf5ee8d4.JPG (common areas)
Infrustructure/49a665fd-339d-4075-8bd7-d1c5858e8351.JPG (playground)
Infrustructure/5167cd6c-f6b0-496d-a4aa-6c934f7b3fd6(1).JPG (surroundings)
Infrustructure/5167cd6c-f6b0-496d-a4aa-6c934f7b3fd6.JPG (surroundings)
Infrustructure/57ca6174-113c-4dec-9534-394d4c1b14c1.JPG (spa)
Infrustructure/62554796-1990-46a8-9ea7-fc03ebb90b35.JPG (pool)
Infrustructure/636fe4ea-9e82-484c-a40f-964fd9407728.JPG (exterior)
Infrustructure/64a424f1-9f12-45dc-9fb2-ad236f59dbee.JPG (common areas)
Infrustructure/6e290a12-c461-4d5e-8753-587ef1dd485e.JPG (common areas)
Infrustructure/86aa617d-c74f-43a0-b4dd-d9e55a2890a6.JPG (spa)
Infrustructure/97d84b61-0326-4002-9918-daa9aae425dc.JPG (spa)
Infrustructure/9cf99ea4-4fe4-46a9-968b-b7e8b8d3f8c4.JPG (exterior)
Infrustructure/9e719044-1217-4c4b-b359-0dc036b607dd.JPG (surroundings)
Infrustructure/9eec73ac-2b20-49ff-841f-10f1e578d782.JPG (surroundings)
Infrustructure/a3360669-3cb1-4cf3-962a-9e1dcdf32e80.JPG (pool)
Infrustructure/a3ee78b4-075d-4dda-a1a6-885a0679c033.JPG (exterior)
Infrustructure/a7ad33fc-8df8-461f-9fbf-d6306316bb09.JPG (spa)
Infrustructure/ad4b3697-83e6-4f6c-aa9c-711e3b4174c7.JPG (common areas)
Infrustructure/b03b17fa-4c2e-4216-8e04-6ff6fb4e773a.JPG (pool)
Infrustructure/b52d93f5-7b5e-4400-b3a7-36cc45c0e8e9.JPG (common areas)
Infrustructure/b6a1e1d3-fc5d-4210-b0ba-323b2f2abed6.JPG (common areas)
Infrustructure/c0c50d8d-c97f-40d0-a3cd-7dec9a1566e9.JPG (pool)
Infrustructure/d783d677-30a1-4bf0-a6e2-09a1438c9afa.JPG (pool)
Infrustructure/df930836-009a-4c8b-970b-de607fb7b460.JPG (exterior)
Infrustructure/dfdde0a2-37e4-4113-9a87-3da0ed1a0e8a.JPG (spa)
Infrustructure/e556d96d-22e0-49b8-a48b-0ae585231602.JPG (pool)
Infrustructure/e8067260-657c-435a-a63f-20c6b1e9e748(1).JPG (surroundings)
Infrustructure/e8067260-657c-435a-a63f-20c6b1e9e748.JPG (surroundings)
Infrustructure/e933c4b4-4c27-4a45-b6c2-58d61de01127.JPG (surroundings)
Infrustructure/ed72a00c-9afe-48c6-a606-8b94c4d6ef3c.JPG (common areas)
Infrustructure/ff20bfda-7a5d-44f9-8851-b2aaddfa44d8.JPG (exterior)
Infrustructure/IMG_3021.jpg (playground)
`;

const lines = scratchpad.split('\n').filter(Boolean);
const photoMap = new Map();
// Note: We'll fix any minor typos in the subagent OCR by checking the actual keys.
for (let line of lines) {
  let parts = line.split(' ');
  let name = parts[0];
  let cat = parts.slice(1).join(' ').replace(/[()]/g, '');
  if (name) {
    if (cat === 'balcony / view') cat = 'balcony';
    if (cat === 'building exterior') cat = 'exterior';
    photoMap.set(name, cat);
  }
}

const categorized = Array.from(photoMap.entries()).map(([name, cat]) => ({ name, cat }));

const order = [
  'hero',
  'living room',
  'kitchen',
  'bedroom',
  'bathroom',
  'balcony',
  'interior details',
  'pool',
  'exterior',
  'gym',
  'spa',
  'playground',
  'common areas',
  'surroundings'
];

categorized.sort((a, b) => {
  let aIdx = order.indexOf(a.cat);
  let bIdx = order.indexOf(b.cat);
  if (aIdx === -1) aIdx = 99;
  if (bIdx === -1) bIdx = 99;
  return aIdx - bIdx;
});

// Remove exact duplicates
const uniquePhotos = [];
const seen = new Set();
for (const p of categorized) {
    let baseName = p.name.replace('(1)', '');
    if (!seen.has(baseName) || p.name === baseName) {
        uniquePhotos.push(p);
        if (p.name !== baseName) seen.add(baseName);
        seen.add(p.name);
    }
}

// Ensure no bathroom in first 5 photos
for (let i = 0; i < Math.min(5, uniquePhotos.length); i++) {
  if (uniquePhotos[i].cat === 'bathroom') {
    const bRoom = uniquePhotos.splice(i, 1)[0];
    uniquePhotos.splice(5, 0, bRoom);
    i--;
  }
}

// In case the subagent hallucinated a filename or there are trailing spaces
const finalPhotos = uniquePhotos.map(p => p.name.trim());

const mStart = dataStr.indexOf('"id": "11 Mah"');
const photosStart = dataStr.indexOf('"photos": [', mStart);
const photosEnd = dataStr.indexOf(']', photosStart);

const newPhotosString = '"photos": [\n      ' + finalPhotos.map(name => '"' + name + '"').join(',\n      ');
const newDataStr = dataStr.substring(0, photosStart) + newPhotosString + dataStr.substring(photosEnd);

fs.writeFileSync('js/data.js', newDataStr);
console.log('Successfully updated 11 Mah photos in data.js');
