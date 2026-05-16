const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, 'js', 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

const newEnRichDesc = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    Cozy minimalist interior design and mindful comfort. 
    Everything necessary for living in the apartment is already available — from modern appliances to high-speed internet.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">90 m²</span><span class="pd-fact-label">Area</span></div>
    <div class="pd-fact"><span class="pd-fact-value">2</span><span class="pd-fact-label">Floor</span></div>
    <div class="pd-fact"><span class="pd-fact-value">2+1</span><span class="pd-fact-label">Layout</span></div>
    <div class="pd-fact"><span class="pd-fact-value">4-6</span><span class="pd-fact-label">Guests</span></div>
    <div class="pd-fact"><span class="pd-fact-value">700 m</span><span class="pd-fact-label">To the Sea</span></div>
  </div>

  <!-- DIVIDER -->
  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Why this apartment</div>
    <ul class="pd-usp-list">
      <li>Cozy minimalist interior design</li>
      <li>View of the pool and the street — southern side, 2nd floor</li>
      <li>700 meters to the sea — 5–7 minutes walk</li>
      <li>Two bathrooms and modern balcony furniture</li>
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
          <li>WiFi in SPA area and by the pool</li>
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
        <div class="pd-col-title">Kids & Extra</div>
        <ul class="pd-col-list">
          <li>Children's playroom</li>
          <li>Generator</li>
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
          <li>Microwave</li>
          <li>Electric kettle</li>
          <li>Extractor hood</li>
          <li>Full set of dishes</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Bedrooms</div>
        <ul class="pd-col-list">
          <li>Two double beds</li>
          <li>2 air conditioners</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Living Room</div>
        <ul class="pd-col-list">
          <li>Fold-out sofa</li>
          <li>Television</li>
          <li>Air conditioning</li>
          <li>Balcony furniture</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Appliances</div>
        <ul class="pd-col-list">
          <li>Washing machine</li>
          <li>Water heater</li>
          <li>Vacuum cleaner</li>
          <li>High-speed internet</li>
          <li>2 bathrooms</li>
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
      <span>Vacuum cleaner</span>
      <span class="pd-sep">·</span>
      <span>Iron and board</span>
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

let lines = dataContent.split('\n');
let in4mah = false;

for (let i = 0; i < lines.length; i++) {
   if (lines[i].includes('"id": "4 Mah"')) {
       in4mah = true;
   }
   if (in4mah && lines[i].includes('"size": ')) {
       in4mah = false; // exit point if needed
   }
   if (in4mah && lines[i].includes(`"en": "<div class=\\"premium-desc pd-v3\\">`)) {
       let start = i;
       let end = i;
       while (!lines[end].includes(`</div>",    },`) && end < lines.length) {
           end++;
       }
       
       let newBlock = `      "en": "${newEnRichDesc}",    },`;
       // If the end line doesn't exist perfectly, let's just use regex replacement below to be safe.
       lines.splice(start, end - start + 1, newBlock);
       break;
   }
}

// Write the lines back
fs.writeFileSync(dataPath, lines.join('\n'));

// Now fix the size and price fields for 3 Mah and 4 Mah
let freshContent = fs.readFileSync(dataPath, 'utf8');

// 3 Mah fix:
freshContent = freshContent.replace(
  /"size":\s*"1\+1, 50m²",\r?\n\s*"price":\s*"От €100 \/ сутки",/g,
  `"size": {\n      "ru": "1+1, 50м²",\n      "en": "1+1, 50m²"\n    },\n    "price": {\n      "ru": "От €100 / сутки",\n      "en": "From €100 / night"\n    },`
);

// 4 Mah fix:
freshContent = freshContent.replace(
  /"size":\s*"2\+1 линейная, 90m²",\r?\n\s*"price":\s*"От €100 \/ сутки",/g,
  `"size": {\n      "ru": "2+1 Линейная, 90м²",\n      "en": "2+1 Linear, 90m²"\n    },\n    "price": {\n      "ru": "От €100 / сутки",\n      "en": "From €100 / night"\n    },`
);

fs.writeFileSync(dataPath, freshContent);
console.log('Successfully updated 4 Mah en richDescription and fixed 3/4 sizes and prices');
