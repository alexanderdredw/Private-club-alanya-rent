const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, 'js', 'data.js');

let dataContent = fs.readFileSync(dataPath, 'utf8');

const newEnRichDesc = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    Cozy and rich interior design with luxury furniture. A spacious 100m² area, a large balcony, two bedrooms, and two bathrooms. This apartment is chosen by those who value comfort, quality of life, and exclusive design in the very center of the developed Mahmutlar district.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">100 m²</span><span class="pd-fact-label">Area</span></div>
    <div class="pd-fact"><span class="pd-fact-value">6</span><span class="pd-fact-label">Floor</span></div>
    <div class="pd-fact"><span class="pd-fact-value">2+1</span><span class="pd-fact-label">Layout</span></div>
    <div class="pd-fact"><span class="pd-fact-value">Up to 5</span><span class="pd-fact-label">Guests</span></div>
    <div class="pd-fact"><span class="pd-fact-value">600 m</span><span class="pd-fact-label">To the Sea</span></div>
  </div>

  <!-- DIVIDER -->
  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Why this apartment</div>
    <ul class="pd-usp-list">
      <li>Spacious 2+1 layout (100 m²)</li>
      <li>Two bedrooms and two bathrooms (one master bedroom with en-suite bathroom)</li>
      <li>Magnificent view of the mountains from the 6th floor (northern side)</li>
      <li>Luxurious premium furniture and exclusive design</li>
      <li>Carefully thought-out infrastructure in the very center of Mahmutlar</li>
    </ul>
  </div>

  <div class="pd-rule"></div>

  <!-- INFRASTRUCTURE -->
  <div class="pd-section">
    <div class="pd-section-label">Complex Infrastructure</div>
    <div class="pd-cols-4">
      <div class="pd-col">
        <div class="pd-col-title">Pools & Water</div>
        <ul class="pd-col-list">
          <li>Outdoor pool with water slides</li>
          <li>Indoor pool</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">SPA & Relax</div>
        <ul class="pd-col-list">
          <li>Hamam and Sauna</li>
          <li>Steam room</li>
          <li>Salt room</li>
          <li>Massage room</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Sports & Recreation</div>
        <ul class="pd-col-list">
          <li>Fitness center</li>
          <li>Recreation areas</li>
          <li>Satellite TV</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Service & Security</div>
        <ul class="pd-col-list">
          <li>24/7 security system</li>
          <li>Generator</li>
          <li>Parking</li>
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
          <li>Refrigerator and Dishwasher</li>
          <li>Oven</li>
          <li>Electric kettle and Extractor hood</li>
          <li>Full set of dishes</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Living Room</div>
        <ul class="pd-col-list">
          <li>Sofa with reclining backrests (90 cm)</li>
          <li>50" TV</li>
          <li>Air conditioning</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Bedrooms (2)</div>
        <ul class="pd-col-list">
          <li>Two double beds</li>
          <li>Air conditioners (3 in total)</li>
          <li>Master bedroom with en-suite bathroom</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Appliances & Bathrooms</div>
        <ul class="pd-col-list">
          <li>Two bathrooms</li>
          <li>Washing machine</li>
          <li>Electric water heater</li>
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
      <span>Bed linen</span>
      <span class="pd-sep">·</span>
      <span>Towels (incl. beach)</span>
      <span class="pd-sep">·</span>
      <span>Vacuum cleaner</span>
      <span class="pd-sep">·</span>
      <span>Iron and board</span>
      <span class="pd-sep">·</span>
      <span>Drying rack</span>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- LOCATION -->
  <div class="pd-section">
    <div class="pd-section-label">Location and Gastronomy</div>
    <div class="pd-location-row">
      <div class="pd-loc-item"><span class="pd-loc-name">Popular restaurants in 5 minutes (Jack's Place, Ti Bone, Pura Vida)</span></div>
      <div class="pd-loc-item"><span class="pd-loc-name">Yekta Mall, BIM/ŞOK/Migros supermarkets nearby</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">5 min</span><span class="pd-loc-name">Barbaros st. (pharmacies, cafes, bus stops)</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">600 m</span><span class="pd-loc-name">To the sea and beaches</span></div>
    </div>
    <a href="https://maps.app.goo.gl/c161rYXu5RfMhfFJ6" target="_blank" rel="noopener" class="pd-maps-link">View on map</a>
  </div>

</div>`.replace(/\n/g, '\\n').replace(/"/g, '\\"');

let lines = dataContent.split('\n');
let in14mah = false;

for (let i = 0; i < lines.length; i++) {
   if (lines[i].includes('"id": "14 Mah"')) {
       in14mah = true;
   }
   if (in14mah && lines[i].includes('"amenities": [')) {
       in14mah = false; // logic exit past price
   }
   
   // Replace richDescription English
   if (in14mah && lines[i].includes(`"en": "<div class=\\"premium-desc pd-v3\\">`)) {
       let start = i;
       let end = i;
       while (!lines[end].includes(`</div>",    },`) && end < lines.length) {
           end++;
       }
       
       let newBlock = `      "en": "${newEnRichDesc}",    },`;
       lines.splice(start, end - start + 1, newBlock);
       i = start;
   }
   
   // Replace size string to bilingual object
   if (in14mah && (lines[i].includes(`"size": "2+1, 100m²"`) || lines[i].includes(`"size": "2+1, 100м²"`))) {
       lines[i] = `    "size": {\n      "ru": "2+1, 100м²",\n      "en": "2+1, 100m²"\n    },`;
   }
   
   // Replace price string to bilingual object
   if (in14mah && lines[i].includes(`"price": "От €100 / сутки"`)) {
       lines[i] = `    "price": {\n      "ru": "От €100 / сутки",\n      "en": "From €100 / night"\n    },`;
   }
}

fs.writeFileSync(dataPath, lines.join('\n'));
console.log('Successfully updated 14 Mah en richDescription along with size and price');
