const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, 'js', 'data.js');

let dataContent = fs.readFileSync(dataPath, 'utf8');

const newEnRichDesc = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    High-quality furniture and appliances, tastefully selected textiles and interior items, along with high-quality plumbing, will grant a feeling of comfort, luxury, and harmony. And the premium infrastructure of the ALBIMO LOFT complex, surrounded by orange gardens, will satisfy the needs of the most demanding guests.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">70 m²</span><span class="pd-fact-label">Area</span></div>
    <div class="pd-fact"><span class="pd-fact-value">1</span><span class="pd-fact-label">Floor</span></div>
    <div class="pd-fact"><span class="pd-fact-value">1+1</span><span class="pd-fact-label">Layout</span></div>
    <div class="pd-fact"><span class="pd-fact-value">Up to 4</span><span class="pd-fact-label">Guests</span></div>
    <div class="pd-fact"><span class="pd-fact-value">700 m</span><span class="pd-fact-label">To the Sea</span></div>
  </div>

  <!-- DIVIDER -->
  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Why this apartment</div>
    <ul class="pd-usp-list">
      <li>Windows facing the courtyard, tinted with a matte film for comfort and privacy</li>
      <li>Large-scale luxury complex ALBIMO LOFT (7,698 sq. m)</li>
      <li>Surrounded by blooming orange gardens</li>
      <li>All infrastructure within walking distance, 10 minutes to the center of Alanya</li>
      <li>Cinema, water park, tennis court, and salt room right on the territory</li>
    </ul>
  </div>

  <div class="pd-rule"></div>

  <!-- INFRASTRUCTURE -->
  <div class="pd-section">
    <div class="pd-section-label">Complex Infrastructure</div>
    <div class="pd-cols-4">
      <div class="pd-col">
        <div class="pd-col-title">Pools & SPA</div>
        <ul class="pd-col-list">
          <li>Outdoor pool and Water park</li>
          <li>Indoor heated pool</li>
          <li>Hamam, Sauna, Steam room</li>
          <li>Salt room, Massage rooms</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Sports & Games</div>
        <ul class="pd-col-list">
          <li>Fitness center</li>
          <li>Tennis court, Multi-court</li>
          <li>Basketball court</li>
          <li>Billiards, Table tennis</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Territory</div>
        <ul class="pd-col-list">
          <li>Mini and snack bars</li>
          <li>Cinema</li>
          <li>Children's playroom</li>
          <li>Gazebo and BBQ area</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Service & Security</div>
        <ul class="pd-col-list">
          <li>Concierge service</li>
          <li>Underground and open parking</li>
          <li>Caretaker-gardener</li>
          <li>Security and video surveillance</li>
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
        <div class="pd-col-title">Interior</div>
        <ul class="pd-col-list">
          <li>Fully furnished</li>
          <li>Tastefully selected textiles</li>
          <li>Stylish interior items</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Kitchen</div>
        <ul class="pd-col-list">
          <li>Modern household appliances</li>
          <li>Microwave</li>
          <li>Full set of dishes</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Amenities</div>
        <ul class="pd-col-list">
          <li>Tinted windows for privacy</li>
          <li>High-quality plumbing</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Additionally</div>
        <ul class="pd-col-list">
          <li>Vacuum cleaner</li>
          <li>Iron and board</li>
          <li>Drying rack</li>
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
      <span>Towels</span>
      <span class="pd-sep">·</span>
      <span>Satellite TV</span>
      <span class="pd-sep">·</span>
      <span>Wi-Fi internet</span>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- LOCATION -->
  <div class="pd-section">
    <div class="pd-section-label">Location</div>
    <div class="pd-location-row">
      <div class="pd-loc-item"><span class="pd-loc-name">Supermarkets, shops, pharmacies within walking distance</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">10 min</span><span class="pd-loc-name">Drive to Alanya center</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">700 m</span><span class="pd-loc-name">To the sea and promenade</span></div>
    </div>
    <a href="https://maps.app.goo.gl/tXxmi5b6ViBe5jjDA" target="_blank" rel="noopener" class="pd-maps-link">View on map</a>
  </div>

</div>`.replace(/\n/g, '\\n').replace(/"/g, '\\"');

let lines = dataContent.split('\n');
let in13mah = false;

for (let i = 0; i < lines.length; i++) {
   if (lines[i].includes('"id": "13 Mah"')) {
       in13mah = true;
   }
   if (in13mah && lines[i].includes('"amenities": [')) {
       in13mah = false; // logic exit past price
   }
   
   // Replace richDescription English
   if (in13mah && lines[i].includes(`"en": "<div class=\\"premium-desc pd-v3\\">`)) {
       let start = i;
       let end = i;
       while (!lines[end].includes(`</div>",    },`) && end < lines.length) {
           end++;
       }
       
       let newBlock = `      "en": "${newEnRichDesc}",    },`;
       lines.splice(start, end - start + 1, newBlock);
       // Reset index since lines array length changed
       i = start;
   }
   
   // Replace size string to bilingual object
   if (in13mah && (lines[i].includes(`"size": "1+1, 70m²"`) || lines[i].includes(`"size": "1+1, 70м²"`))) {
       lines[i] = `    "size": {\n      "ru": "1+1, 70м²",\n      "en": "1+1, 70m²"\n    },`;
   }
   
   // Replace price string to bilingual object
   if (in13mah && lines[i].includes(`"price": "От €100 / сутки"`)) {
       lines[i] = `    "price": {\n      "ru": "От €100 / сутки",\n      "en": "From €100 / night"\n    },`;
   }
}

fs.writeFileSync(dataPath, lines.join('\n'));
console.log('Successfully updated 13 Mah en richDescription along with size and price');
