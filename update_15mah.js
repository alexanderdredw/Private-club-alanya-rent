const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, 'js', 'data.js');

let dataContent = fs.readFileSync(dataPath, 'utf8');

const newEnRichDesc = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    A cozy and special interior design with luxurious premium furniture and heated floors. This stylish 1+1 apartment is created for those seeking comfort and exclusive design. The complex combines convenience, safety, and a wide range of recreational opportunities for every taste.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">50 m²</span><span class="pd-fact-label">Area</span></div>
    <div class="pd-fact"><span class="pd-fact-value">2</span><span class="pd-fact-label">Floor</span></div>
    <div class="pd-fact"><span class="pd-fact-value">1+1</span><span class="pd-fact-label">Layout</span></div>
    <div class="pd-fact"><span class="pd-fact-value">Up to 3</span><span class="pd-fact-label">Guests</span></div>
    <div class="pd-fact"><span class="pd-fact-value">400 m</span><span class="pd-fact-label">To the Sea</span></div>
  </div>

  <!-- DIVIDER -->
  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Why this apartment</div>
    <ul class="pd-usp-list">
      <li>Exclusive interior design and heated floors</li>
      <li>Luxurious premium furniture and appliances</li>
      <li>Eastern side (road view) on the 2nd floor</li>
      <li>Rich infrastructure (water slides, spa, fitness, sports grounds)</li>
      <li>Excellent location in Kestel (near Carrefour, cafes, bus stops)</li>
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
          <li>Large outdoor pool</li>
          <li>Water slides</li>
          <li>Indoor heated pool</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">SPA & Relax</div>
        <ul class="pd-col-list">
          <li>Turkish bath (Hamam)</li>
          <li>Sauna</li>
          <li>Cozy massage rooms</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Sports & Kids</div>
        <ul class="pd-col-list">
          <li>Modern fitness center</li>
          <li>Tennis and basketball courts</li>
          <li>Billiards, table tennis</li>
          <li>Spacious kids area</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Territory & Service</div>
        <ul class="pd-col-list">
          <li>BBQ area with gazebos</li>
          <li>Parking</li>
          <li>Satellite TV system</li>
          <li>24/7 security</li>
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
          <li>Microwave and Oven</li>
          <li>Electric kettle and Extractor hood</li>
          <li>Full set of dishes</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Living Room</div>
        <ul class="pd-col-list">
          <li>Sofa with reclining backrests (90 cm)</li>
          <li>45" TV</li>
          <li>Heated floors and balcony</li>
          <li>Air conditioning</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Bedroom</div>
        <ul class="pd-col-list">
          <li>Double bed</li>
          <li>Air conditioning</li>
          <li>High-quality premium furniture</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Appliances & Bathroom</div>
        <ul class="pd-col-list">
          <li>Washing machine</li>
          <li>Water heater</li>
          <li>Vacuum cleaner</li>
          <li>High-speed internet (Wi-Fi)</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- ADDITIONAL INCLUSIONS -->
  <div class="pd-section">
    <div class="pd-section-label">Additionally Included</div>
    <div class="pd-inline-list">
      <span>Bed linen and throws</span>
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
      <div class="pd-loc-item"><span class="pd-loc-time">500 m</span><span class="pd-loc-name">Carrefour, pharmacies, cafes, restaurants</span></div>
      <div class="pd-loc-item"><span class="pd-loc-name">Beginning of the Kestel district</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">3 min</span><span class="pd-loc-name">Bus stop to the city center</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">400 m</span><span class="pd-loc-name">To the sea and beaches</span></div>
    </div>
    <a href="https://maps.app.goo.gl/wuaarDVhkMCAedG36" target="_blank" rel="noopener" class="pd-maps-link">View on map</a>
  </div>

</div>`.replace(/\n/g, '\\n').replace(/"/g, '\\"');

let lines = dataContent.split('\n');
let in15mah = false;

for (let i = 0; i < lines.length; i++) {
   if (lines[i].includes('"id": "15 Mah"')) {
       in15mah = true;
   }
   if (in15mah && lines[i].includes('"size": ')) {
       in15mah = false; // logic exit
   }
   if (in15mah && lines[i].includes(`"en": "<div class=\\"premium-desc pd-v3\\">`)) {
       let start = i;
       let end = i;
       while (!lines[end].includes(`</div>",    },`) && end < lines.length) {
           end++;
       }
       
       let newBlock = `      "en": "${newEnRichDesc}",    },`;
       lines.splice(start, end - start + 1, newBlock);
       break;
   }
}

fs.writeFileSync(dataPath, lines.join('\n'));
console.log('Successfully updated 15 Mah en richDescription');
