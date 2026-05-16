const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, 'js', 'data.js');

let dataContent = fs.readFileSync(dataPath, 'utf8');

const newEnRichDesc = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    A cozy and rich interior design with luxury furniture. This exclusive 2+1 apartment (120 m²) with two large balconies is located in the large premium-class complex Yekta Alara Park. Lovers of luxury and unsurpassed comfort will appreciate the stunning infrastructure, eco-design, and private beach.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">120 m²</span><span class="pd-fact-label">Area</span></div>
    <div class="pd-fact"><span class="pd-fact-value">8</span><span class="pd-fact-label">Floor</span></div>
    <div class="pd-fact"><span class="pd-fact-value">2+1</span><span class="pd-fact-label">Layout</span></div>
    <div class="pd-fact"><span class="pd-fact-value">Up to 5</span><span class="pd-fact-label">Guests</span></div>
    <div class="pd-fact"><span class="pd-fact-value">400 m</span><span class="pd-fact-label">To the Sea</span></div>
  </div>

  <!-- DIVIDER -->
  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Why this apartment</div>
    <ul class="pd-usp-list">
      <li>Spacious area of 120 m², 2 bedrooms and 2 bathrooms</li>
      <li>Two large panoramic balconies (pool view, southeastern side)</li>
      <li>The largest premium-class complex by Yekta Homes with a private beach</li>
      <li>Exclusive design, heated floors, high-quality premium furniture</li>
      <li>Special workspace (desk for work)</li>
    </ul>
  </div>

  <div class="pd-rule"></div>

  <!-- INFRASTRUCTURE -->
  <div class="pd-section">
    <div class="pd-section-label">Yekta Alara Park Infrastructure</div>
    <div class="pd-cols-4">
      <div class="pd-col">
        <div class="pd-col-title">Pools & Sea</div>
        <ul class="pd-col-list">
          <li>Private beach</li>
          <li>Outdoor pool with recreation areas</li>
          <li>Indoor heated pool</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">SPA & Relax</div>
        <ul class="pd-col-list">
          <li>Roman sauna</li>
          <li>Finnish sauna</li>
          <li>Turkish hamam</li>
          <li>SPA area and relaxation room</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Territory</div>
        <ul class="pd-col-list">
          <li>Eco-design and park areas</li>
          <li>Landscaping with small architectural forms</li>
          <li>Game room</li>
          <li>Evening facade lighting</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Premium Service</div>
        <ul class="pd-col-list">
          <li>Premium hotel-level lobby (marble)</li>
          <li>DELUX configuration elevators</li>
          <li>Code locks and fencing</li>
          <li>Parking for residents</li>
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
          <li>Oven and Microwave</li>
          <li>Electric kettle and Extractor hood</li>
          <li>Full set of dishes</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Living Room</div>
        <ul class="pd-col-list">
          <li>Sofa with reclining backrests (90 cm)</li>
          <li>50" TV</li>
          <li>Desk for work</li>
          <li>Air conditioning</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Bedrooms (2)</div>
        <ul class="pd-col-list">
          <li>Two double beds</li>
          <li>Two air conditioners (3 in total)</li>
          <li>Two large balconies</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Appliances & Bathrooms</div>
        <ul class="pd-col-list">
          <li>Two bathrooms and Heated floors</li>
          <li>Washing machine and Boiler</li>
          <li>Vacuum cleaner</li>
          <li>High-speed internet</li>
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
    <div class="pd-section-label">Location</div>
    <div class="pd-location-row">
      <div class="pd-loc-item"><span class="pd-loc-name">Center of Mahmutlar district</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">500 m</span><span class="pd-loc-name">Cafes, restaurants, shops, pharmacies</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">500 m</span><span class="pd-loc-name">Akdeniz Mall and Saturday farmers market</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">400 m</span><span class="pd-loc-name">To the sea and private beach</span></div>
    </div>
    <a href="https://maps.app.goo.gl/asXhtWeRN86xCyjs8" target="_blank" rel="noopener" class="pd-maps-link">View on map</a>
  </div>

</div>`.replace(/\n/g, '\\n').replace(/"/g, '\\"');

let lines = dataContent.split('\n');
let in16mah = false;

for (let i = 0; i < lines.length; i++) {
   if (lines[i].includes('"id": "16 Mah"')) {
       in16mah = true;
   }
   if (in16mah && lines[i].includes('"amenities": [')) {
       in16mah = false; // logic exit
   }
   if (in16mah && lines[i].includes(`"en": "<div class=\\"premium-desc pd-v3\\">`)) {
       let start = i;
       let end = i;
       while (!lines[end].includes(`</div>",    },`) && end < lines.length) {
           end++;
       }
       
       let newBlock = `      "en": "${newEnRichDesc}",    },`;
       lines.splice(start, end - start + 1, newBlock);
       i = start; // reset i because array length changed
   }
   
   // Replace size string to bilingual object
   if (in16mah && (lines[i].includes(`"size": "2+1, 120m²"`) || lines[i].includes(`"size": "2+1, 120м²"`))) {
       lines[i] = `    "size": {\n      "ru": "2+1, 120м²",\n      "en": "2+1, 120m²"\n    },`;
   }
   
   // Replace price string to bilingual object
   if (in16mah && lines[i].includes(`"price": "От €100 / сутки"`)) {
       lines[i] = `    "price": {\n      "ru": "От €100 / сутки",\n      "en": "From €100 / night"\n    },`;
   }
}

fs.writeFileSync(dataPath, lines.join('\n'));
console.log('Successfully updated 16 Mah en richDescription along with size and price');
