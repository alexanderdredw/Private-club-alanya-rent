const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'js', 'data.js');
let content = fs.readFileSync(dataFile, 'utf8');

const ruDesc = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    Уютный и богатый дизайн интерьера с роскошной мебелью. Просторная площадь квартиры 120 м², два больших балкона, два санузла, письменный стол для работы, телевизор и высокоскоростной интернет. Это место является идеальным вариантом для отдыха класса люкс.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">120 м²</span><span class="pd-fact-label">Площадь</span></div>
    <div class="pd-fact"><span class="pd-fact-value">6</span><span class="pd-fact-label">Этаж</span></div>
    <div class="pd-fact"><span class="pd-fact-value">2+1</span><span class="pd-fact-label">Планировка</span></div>
    <div class="pd-fact"><span class="pd-fact-value">5</span><span class="pd-fact-label">Гостей</span></div>
    <div class="pd-fact"><span class="pd-fact-value">400 м</span><span class="pd-fact-label">До моря</span></div>
  </div>

  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Почему эта квартира</div>
    <ul class="pd-usp-list">
      <li>Просторная площадь 120 м², 2 спальни и 2 санузла</li>
      <li>Два больших балкона (вид на бассейн, юго-восточная сторона)</li>
      <li>Крупнейший комплекс премиум-класса от Yekta Homes с собственным пляжем</li>
      <li>Эксклюзивный дизайн, теплые полы, качественная премиум-мебель</li>
      <li>Специальное рабочее место (письменный стол для работы)</li>
    </ul>
  </div>

  <div class="pd-rule"></div>

  <!-- INFRASTRUCTURE -->
  <div class="pd-section">
    <div class="pd-section-label">Инфраструктура Yekta Alara Park</div>
    <div class="pd-cols-4">
      <div class="pd-col">
        <div class="pd-col-title">Бассейны и Море</div>
        <ul class="pd-col-list">
          <li>Собственный частный пляж</li>
          <li>Открытый бассейн с зонами отдыха</li>
          <li>Закрытый бассейн с подогревом</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">SPA и Релакс</div>
        <ul class="pd-col-list">
          <li>Римская сауна</li>
          <li>Финская сауна</li>
          <li>Турецкий хамам</li>
          <li>СПА-зона и комната отдыха</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Территория</div>
        <ul class="pd-col-list">
          <li>Эко-дизайн и парковые зоны</li>
          <li>Озеленение с малыми арх. формами</li>
          <li>Игровая комната</li>
          <li>Вечернее освещение фасадов</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Премиум-Сервис</div>
        <ul class="pd-col-list">
          <li>Лобби уровня премиум-отелей (мрамор)</li>
          <li>Лифты в комплектации DELUX</li>
          <li>Кодовые замки и ограждение</li>
          <li>Парковка для резидентов</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- INSIDE THE APARTMENT -->
  <div class="pd-section">
    <div class="pd-section-label">Внутри квартиры</div>
    <div class="pd-cols-4">
      <div class="pd-col">
        <div class="pd-col-title">Кухня</div>
        <ul class="pd-col-list">
          <li>Холодильник и Посудомоечная машина</li>
          <li>Духовой шкаф и Микроволновка</li>
          <li>Электрочайник и Вытяжка</li>
          <li>Полный набор посуды</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Гостиная</div>
        <ul class="pd-col-list">
          <li>Диван</li>
          <li>Телевизор 50"</li>
          <li>Письменный стол для работы</li>
          <li>Кондиционер</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Спальни (2)</div>
        <ul class="pd-col-list">
          <li>Две двуспальные кровати</li>
          <li>Два кондиционера (всего 3)</li>
          <li>Два больших балкона</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Техника и Санузлы</div>
        <ul class="pd-col-list">
          <li>Два санузла и Теплые полы</li>
          <li>Стиральная машина и Бойлер</li>
          <li>Пылесос</li>
          <li>Высокоскоростной интернет</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- ADDITIONAL INCLUSIONS -->
  <div class="pd-section">
    <div class="pd-section-label">Дополнительно включено</div>
    <div class="pd-inline-list">
      <span>Постельное бельё</span>
      <span class="pd-sep">·</span>
      <span>Полотенца (вкл. пляжные)</span>
      <span class="pd-sep">·</span>
      <span>Пылесос</span>
      <span class="pd-sep">·</span>
      <span>Утюг и гладилка</span>
      <span class="pd-sep">·</span>
      <span>Сушилка</span>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- LOCATION -->
  <div class="pd-section">
    <div class="pd-section-label">Локация</div>
    <div class="pd-location-row">
      <div class="pd-loc-item"><span class="pd-loc-name">Центр района Махмутлар</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">500 м</span><span class="pd-loc-name">Кафе, рестораны, магазины, аптеки</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">500 м</span><span class="pd-loc-name">ТЦ Акдениз и субботний фермерский рынок</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">400 м</span><span class="pd-loc-name">До моря и собственного пляжа</span></div>
    </div>
    
  </div>

</div>`;

const enDesc = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    Cozy and rich interior design with luxury furniture. A spacious area of 120 m², two large balconies, two bathrooms, a work desk, a TV, and high-speed internet. This place is an ideal option for a luxury holiday.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">120 m²</span><span class="pd-fact-label">Area</span></div>
    <div class="pd-fact"><span class="pd-fact-value">6</span><span class="pd-fact-label">Floor</span></div>
    <div class="pd-fact"><span class="pd-fact-value">2+1</span><span class="pd-fact-label">Layout</span></div>
    <div class="pd-fact"><span class="pd-fact-value">5</span><span class="pd-fact-label">Guests</span></div>
    <div class="pd-fact"><span class="pd-fact-value">400 m</span><span class="pd-fact-label">To Sea</span></div>
  </div>

  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Why this apartment</div>
    <ul class="pd-usp-list">
      <li>Spacious 120 m² area, 2 bedrooms and 2 bathrooms</li>
      <li>Two large balconies (pool view, southeastern side)</li>
      <li>The largest premium complex by Yekta Homes with a private beach</li>
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
          <li>Refrigerator & Dishwasher</li>
          <li>Oven & Microwave</li>
          <li>Electric kettle & Extractor hood</li>
          <li>Full set of dishes</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Living Room</div>
        <ul class="pd-col-list">
          <li>Sofa</li>
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
        <div class="pd-col-title">Appliances & Baths</div>
        <ul class="pd-col-list">
          <li>Two bathrooms & Heated floors</li>
          <li>Washing machine & Boiler</li>
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
      <div class="pd-loc-item"><span class="pd-loc-time">500 m</span><span class="pd-loc-name">Akdeniz Mall & Saturday farmers market</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">400 m</span><span class="pd-loc-name">To the sea and private beach</span></div>
    </div>
    
  </div>

</div>`;

// First, parse the content
let startIndex = content.indexOf('"id": "021 Mah"');
if (startIndex === -1) {
    console.error("Could not find ALARA PARK apartment.");
    process.exit(1);
}

// Very simple replacement using JS to avoid regex hell:
// We look for "richDescription": { and replace the next lines
let richDescStart = content.indexOf('"richDescription":', startIndex);
let richDescEnd = content.indexOf('},', richDescStart) + 1; // including }

let newRichDesc = '"richDescription": {\n    "ru": ' + JSON.stringify(ruDesc) + ',\n    "en": ' + JSON.stringify(enDesc) + '\n  }';

let newContent = content.substring(0, richDescStart) + newRichDesc + content.substring(richDescEnd);

fs.writeFileSync(dataFile, newContent);
console.log("Updated data.js with new rich description format.");
