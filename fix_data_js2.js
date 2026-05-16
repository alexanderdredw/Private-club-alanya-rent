const fs = require('fs');

let data = fs.readFileSync('js/data.js', 'utf8');

const m4Photos = [
  "4 Mah/PHOTO-2025-09-05-11-31-08(2).jpg", // Hero: Living room wide shot
  "4 Mah/PHOTO-2025-09-05-11-31-09(3).jpg", // Living room
  "4 Mah/PHOTO-2025-09-05-11-31-09.jpg", // Living room dining
  "4 Mah/PHOTO-2025-09-05-11-31-06(1).jpg", // Kitchen wide
  "4 Mah/PHOTO-2025-09-05-11-31-06.jpg", // Kitchen dining table
  "4 Mah/PHOTO-2025-09-05-11-31-08.jpg", // Kitchen dining
  "4 Mah/PHOTO-2025-09-05-11-31-13(2).jpg", // Bedroom 1
  "4 Mah/PHOTO-2025-09-05-11-31-13(1).jpg", // Bedroom 1
  "4 Mah/PHOTO-2025-09-05-11-31-15(3).jpg", // Bedroom 1
  "4 Mah/PHOTO-2025-09-05-11-31-11(1).jpg", // Bathroom 1
  "4 Mah/PHOTO-2025-09-05-11-31-12(1).jpg", // Bathroom 1
  "4 Mah/PHOTO-2025-09-05-11-31-24(1).jpg", // Bedroom 2
  "4 Mah/PHOTO-2025-09-05-11-31-22(2).jpg", // Bedroom 2
  "4 Mah/PHOTO-2025-09-05-11-31-20(2).jpg", // Bedroom 2
  "4 Mah/PHOTO-2025-09-05-11-31-17(1).jpg", // Bathroom 2 (en-suite)
  "4 Mah/PHOTO-2025-09-05-11-31-18(1).jpg", // Bathroom 2 (en-suite)
  "4 Mah/PHOTO-2025-09-05-11-31-10(4).jpg", // Balcony
  "4 Mah/PHOTO-2025-09-05-11-31-26.jpg", // Interior Details: Hallway
  "4 Mah/PHOTO-2025-09-05-11-36-24(1).jpg", // Complex: pool
  "4 Mah/PHOTO-2025-09-05-11-36-28(1).jpg", // Complex: pool curves
  "4 Mah/PHOTO-2025-09-05-11-36-25(1).jpg", // Complex: loungers
  "4 Mah/PHOTO-2025-09-05-11-36-34.jpg" // Complex: wide pool
];

const startIdx = data.indexOf('"id": "4 Mah"');
const photosStart = data.indexOf('"photos": [', startIdx);
const photosEnd = data.indexOf(']', photosStart) + 1;

const newPhotosString = '"photos": [\n      ' + m4Photos.map(p => '"' + p + '"').join(',\n      ') + '\n    ]';

data = data.substring(0, photosStart) + newPhotosString + data.substring(photosEnd);

fs.writeFileSync('js/data.js', data);

const start5 = data.indexOf('"id": "5 Mah"');
if (start5 !== -1) {
  const pStart5 = data.indexOf('"photos": [', start5);
  const pEnd5 = data.indexOf(']', pStart5) + 1;
  const pStr = data.substring(pStart5, pEnd5);
  console.log("5 Mah found! Photos length:", pStr.split(',').length);
} else {
  console.log("5 Mah NOT found!");
}
