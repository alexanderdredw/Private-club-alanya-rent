const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, 'js', 'data.js');

let dataContent = fs.readFileSync(dataPath, 'utf8');

const newEnRichDesc = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    Chosen by those who appreciate luxury, comfort, and an impeccable quality of life.
    Everything here is thought out to the smallest detail: from the ergonomic layout to the stylish interior elements. High-quality furniture and modern appliances create a cozy atmosphere that surpasses the standards of a premium hotel.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">50 m²</span><span class="pd-fact-label">Area</span></div>
    <div class="pd-fact"><span class="pd-fact-value">3</span><span class="pd-fact-label">Floor</span></div>
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
      <li>Fully equipped for a vacation at the level of a top hotel</li>
      <li>Exclusive designer interior</li>
      <li>Pool view — south-western side, 3rd floor</li>
      <li>Five-star luxury complex infrastructure</li>
      <li>In the very heart of Mahmutlar — everything is within walking distance</li>
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
          <li>3 outdoor pools (adult, kids, with slide)</li>
          <li>Indoor heated pool (in winter)</li>
          <li>Sauna and Hamam</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Sports & Kids</div>
        <ul class="pd-col-list">
          <li>Fitness gym</li>
          <li>Multi-court</li>
          <li>Table tennis, table football</li>
          <li>Children's playroom</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Territory</div>
        <ul class="pd-col-list">
          <li>Total area of 7,000 m²</li>
          <li>Landscaped walking area</li>
          <li>Covered recreation areas</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Parking & Security</div>
        <ul class="pd-col-list">
          <li>Free parking (56 spaces)</li>
          <li>24/7 security</li>
          <li>Video surveillance</li>
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
          <li>Oven</li>
          <li>Electric kettle</li>
          <li>Extractor hood</li>
          <li>Full set of dishes</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Living Room</div>
        <ul class="pd-col-list">
          <li>Fold-out sofa</li>
          <li>50" TV</li>
          <li>Air conditioning</li>
          <li>Premium upholstered furniture</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Bedroom</div>
        <ul class="pd-col-list">
          <li>Double bed</li>
          <li>Air conditioning</li>
          <li>High-quality cabinet furniture</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Appliances</div>
        <ul class="pd-col-list">
          <li>Washing machine</li>
          <li>Water heater</li>
          <li>Karcher vacuum cleaner</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- ADDITIONAL INCLUSIONS -->
  <div class="pd-section">
    <div class="pd-section-label">Additionally Included</div>
    <div class="pd-inline-list">
      <span>Bed linen (3 sets)</span>
      <span class="pd-sep">·</span>
      <span>Towels (incl. beach)</span>
      <span class="pd-sep">·</span>
      <span>Cordless vacuum cleaner</span>
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
      <div class="pd-loc-item"><span class="pd-loc-time">3 min</span><span class="pd-loc-name">Yekta Mall</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">5 min</span><span class="pd-loc-name">BIM, ŞOK, Migros, Barbaros st.</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">4 min</span><span class="pd-loc-name">Health center & pharmacies</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">300 m</span><span class="pd-loc-name">Restaurants & shops</span></div>
    </div>
    <a href="https://maps.app.goo.gl/5zct49osDNBDzfaVA" target="_blank" rel="noopener" class="pd-maps-link">View on map</a>
  </div>

</div>`.replace(/\n/g, '\\n').replace(/"/g, '\\"');


let lines = dataContent.split('\n');
let in5mah = false;

for (let i = 0; i < lines.length; i++) {
   if (lines[i].includes('"id": "5 Mah"')) {
       in5mah = true;
   }
   if (in5mah && lines[i].includes('"size": ')) {
       in5mah = false; // exit point if needed
   }
   if (in5mah && lines[i].includes(`"en": "<div class=\\"premium-desc pd-v3\\">`)) {
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
console.log('Successfully updated 5 Mah en richDescription!');
