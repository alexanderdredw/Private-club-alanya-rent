const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'js', 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

const newEnRichDesc = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    Minimalist design and mindful comfort. 
    Everything necessary for a comfortable stay is already in the apartment — from modern appliances to a beautiful pool view.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">50 m²</span><span class="pd-fact-label">Area</span></div>
    <div class="pd-fact"><span class="pd-fact-value">3</span><span class="pd-fact-label">Floor</span></div>
    <div class="pd-fact"><span class="pd-fact-value">1+1</span><span class="pd-fact-label">Layout</span></div>
    <div class="pd-fact"><span class="pd-fact-value">3-4</span><span class="pd-fact-label">Guests</span></div>
    <div class="pd-fact"><span class="pd-fact-value">700 m</span><span class="pd-fact-label">To the Sea</span></div>
  </div>

  <!-- DIVIDER -->
  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Why this apartment</div>
    <ul class="pd-usp-list">
      <li>Minimalist interior design</li>
      <li>Pool view — western side, 3rd floor</li>
      <li>700 meters to the sea — 5–7 minutes walk</li>
      <li>Absolutely everything you need for a comfortable stay is available</li>
      <li>Extensive complex infrastructure</li>
    </ul>
  </div>

  <div class="pd-rule"></div>

  <!-- INFRASTRUCTURE -->
  <div class="pd-section">
    <div class="pd-section-label">Complex Infrastructure</div>
    <div class="pd-cols-4">
      <div class="pd-col">
        <div class="pd-col-title">Water / SPA</div>
        <ul class="pd-col-list">
          <li>Alanya's longest outdoor swimming pool</li>
          <li>Indoor heated pool</li>
          <li>Sauna</li>
          <li>Hamam</li>
          <li>Steam room</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Activities</div>
        <ul class="pd-col-list">
          <li>Fitness gym</li>
          <li>Multi-court</li>
          <li>Barbecue area</li>
          <li>Lounge area</li>
          <li>Walking territory</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Entertainment</div>
        <ul class="pd-col-list">
          <li>Cinema</li>
          <li>Billiards</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Kids</div>
        <ul class="pd-col-list">
          <li>Children's playroom</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- INSIDE THE APARTMENT -->
  <div class="pd-section">
    <div class="pd-section-label">Inside the Apartment</div>
    <div class="pd-cols-4">
      <div class="pd-col">
        <div class="pd-col-title">Kitchen</div>
        <ul class="pd-col-list">
          <li>Refrigerator</li>
          <li>Dishwasher</li>
          <li>Oven</li>
          <li>Electric kettle</li>
          <li>Extractor hood</li>
          <li>Full set of dishes</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Bedroom</div>
        <ul class="pd-col-list">
          <li>Double bed</li>
          <li>Air conditioning</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Living Room</div>
        <ul class="pd-col-list">
          <li>Fold-out sofa (two-seater)</li>
          <li>50" TV</li>
          <li>Air conditioning</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Appliances</div>
        <ul class="pd-col-list">
          <li>Washing machine</li>
          <li>Water heater</li>
          <li>Vacuum cleaner</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- ADDITIONAL INCLUSIONS -->
  <div class="pd-section">
    <div class="pd-section-label">Additionally Included</div>
    <div class="pd-inline-list">
      <span>Dishes</span>
      <span class="pd-sep">·</span>
      <span>Bed linen</span>
      <span class="pd-sep">·</span>
      <span>Towels</span>
      <span class="pd-sep">·</span>
      <span>Iron and board</span>
      <span class="pd-sep">·</span>
      <span>Drying rack</span>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- LOCATION -->
  <div class="pd-section">
    <div class="pd-section-label">Location</div>
    <div class="pd-location-row">
      <div class="pd-loc-item"><span class="pd-loc-time">5–7 min</span><span class="pd-loc-name">Beach walk</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">3 min</span><span class="pd-loc-name">BIM & Migros</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">5 min</span><span class="pd-loc-name">CAP STORE</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">500 m</span><span class="pd-loc-name">Shops, cafes, pharmacies</span></div>
    </div>
    <a href="https://maps.app.goo.gl/avJ2LnhYCdcm8ZSu8" target="_blank" rel="noopener" class="pd-maps-link">View on map</a>
  </div>

</div>`.replace(/\n/g, '\\n').replace(/"/g, '\\"');

const lines = dataContent.split('\n');
let inside3Mah = false;
let startLineIndex = -1;
let endLineIndex = -1;
let openDivs = 0;

// The current `data.js` structure has the exact en string starting at line 228
// We can just rely on the existing scripts pattern that I wrote earlier where I parsed apartments
let jsonStart = dataContent.indexOf('const apartmentsData = [') + 'const apartmentsData = '.length;
let jsonEnd = dataContent.lastIndexOf('];') + 1;
// since it has trailing commas and stuff, let's just do a regex replace for the 3 Mah description
// find 3 Mah
const aptRegex = /("id":\s*"3 Mah"[\s\S]*?"en":\s*")(<div class=\\"premium-desc pd-v3\\">[\s\S]*?<\/div>)("[\s\S]*?\},\s*"size")/m;

dataContent = dataContent.replace(aptRegex, (match, prefix, oldHtml, suffix) => {
    return prefix + newEnRichDesc + suffix;
});

// Since the file had an error in line 228 due to being raw string, maybe it's exactly:
const backupStr = dataContent;
// Or let's just use the strict line replacements.

let linesCopy = [...lines];
let in3mah = false;
let foundEn = false;
for (let i = 0; i < linesCopy.length; i++) {
   if (linesCopy[i].includes('"id": "3 Mah"')) {
       in3mah = true;
   }
   if (in3mah && linesCopy[i].includes('"size": "1+1, 50m²"')) {
       in3mah = false;
   }
   if (in3mah && linesCopy[i].includes(`"en": "<div class=\\"premium-desc pd-v3\\">`)) {
       foundEn = true;
       // replace from here until `</div>",    },`
       let start = i;
       let end = i;
       while (!linesCopy[end].includes(`</div>",    },`) && end < linesCopy.length) {
           end++;
       }
       
       let newBlock = `      "en": "${newEnRichDesc}",    },`;
       linesCopy.splice(start, end - start + 1, newBlock);
       break;
   }
}

fs.writeFileSync(dataPath, linesCopy.join('\n'));
console.log('Successfully updated 3 Mah en richDescription');
