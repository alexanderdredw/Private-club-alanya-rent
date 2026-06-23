
const fs = require("fs");
let content = fs.readFileSync("js/data.js", "utf8");

const ruDesc = `Уютная новая квартира в престижном комплексе Ruby Tower в центре Махмутлара. Первая сдача, вид на банановые плантации, полная инфраструктура, 600м до моря.`;

const enDesc = `Cozy new apartment in the prestigious Ruby Tower complex in the center of Mahmutlar. First rental, view of banana plantations, full infrastructure, 600m to the sea.`;

const ruRichDesc = `<div class=\"premium-desc pd-v3\">

  <!-- LEAD TEXT -->
  <p class=\"pd-lead-text\">
    Представляем уютную новую квартиру в престижном жилом комплексе Ruby Tower, расположенном в самом центре района Махмутлар (Алания). Идеальный вариант для отдыха, зимовки и длительного проживания на Средиземном побережье Турции с приятным видом на зеленые банановые плантации.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class=\"pd-facts-row\">
    <div class=\"pd-fact\"><span class=\"pd-fact-value\">50 м²</span><span class=\"pd-fact-label\">Площадь</span></div>
    <div class=\"pd-fact\"><span class=\"pd-fact-value\">2</span><span class=\"pd-fact-label\">Этаж</span></div>
    <div class=\"pd-fact\"><span class=\"pd-fact-value\">1+1</span><span class=\"pd-fact-label\">Планировка</span></div>
    <div class=\"pd-fact\"><span class=\"pd-fact-value\">До 4</span><span class=\"pd-fact-label\">Гостей</span></div>
    <div class=\"pd-fact\"><span class=\"pd-fact-value\">600 м</span><span class=\"pd-fact-label\">До моря</span></div>
  </div>

  <div class=\"pd-rule\"></div>

  <!-- WHY CHOOSE -->
  <div class=\"pd-section\">
    <div class=\"pd-section-label\">Почему эта квартира</div>
    <ul class=\"pd-usp-list\">
      <li>Первая сдача — абсолютно новая качественная мебель и техника Bosch</li>
      <li>Приятный вид на зеленые банановые плантации (атмосфера спокойствия)</li>
      <li>Престижный жилой комплекс в самом центре района Махмутлар</li>
      <li>Комплименты для гостей: вода, тарелка свежих фруктов, одноразовые тапочки</li>
      <li>Всего в 600 метрах от Средиземного моря</li>
    </ul>
  </div>

  <div class=\"pd-rule\"></div>

  <!-- INFRASTRUCTURE -->
  <div class=\"pd-section\">
    <div class=\"pd-section-label\">Инфраструктура Ruby Tower</div>
    <div class=\"pd-cols-4\">
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">Бассейны и Вода</div>
        <ul class=\"pd-col-list\">
          <li>Открытый бассейн</li>
          <li>Крытый бассейн</li>
          <li>Водная горка</li>
        </ul>
      </div>
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">SPA и Релакс</div>
        <ul class=\"pd-col-list\">
          <li>Турецкий хамам</li>
          <li>Сауна</li>
          <li>Паровая комната</li>
        </ul>
      </div>
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">Спорт и Дети</div>
        <ul class=\"pd-col-list\">
          <li>Фитнес-зал</li>
          <li>Детская площадка</li>
        </ul>
      </div>
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">Сервис и Защита</div>
        <ul class=\"pd-col-list\">
          <li>Круглосуточная охрана</li>
          <li>Видеонаблюдение</li>
          <li>Парковка</li>
        </ul>
      </div>
    </div>
  </div>

  <div class=\"pd-rule\"></div>

  <!-- INSIDE THE APARTMENT -->
  <div class=\"pd-section\">
    <div class=\"pd-section-label\">Внутри квартиры</div>
    <div class=\"pd-cols-4\">
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">Кухня</div>
        <ul class=\"pd-col-list\">
          <li>Полностью оборудованная кухня</li>
          <li>Новая техника марки Bosch</li>
        </ul>
      </div>
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">Гостиная</div>
        <ul class=\"pd-col-list\">
          <li>Раскладной диван</li>
          <li>Smart TV 50”</li>
          <li>Кондиционер</li>
        </ul>
      </div>
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">Спальня</div>
        <ul class=\"pd-col-list\">
          <li>Двуспальная кровать</li>
          <li>Кондиционер (всего 2)</li>
        </ul>
      </div>
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">Техника и Интернет</div>
        <ul class=\"pd-col-list\">
          <li>Высокоскоростной Wi-Fi</li>
        </ul>
      </div>
    </div>
  </div>

  <div class=\"pd-rule\"></div>

  <!-- ADDITIONAL INCLUSIONS -->
  <div class=\"pd-section\">
    <div class=\"pd-section-label\">Дополнительно включено</div>
    <div class=\"pd-inline-list\">
      <span>Бутилированная вода</span>
      <span class=\"pd-sep\">·</span>
      <span>Тарелка свежих фруктов</span>
      <span class=\"pd-sep\">·</span>
      <span>Одноразовые тапочки</span>
    </div>
  </div>

  <div class=\"pd-rule\"></div>

  <!-- LOCATION -->
  <div class=\"pd-section\">
    <div class=\"pd-section-label\">В шаговой доступности</div>
    <div class=\"pd-location-row\">
      <div class=\"pd-loc-item\"><span class=\"pd-loc-time\">100 м</span><span class=\"pd-loc-name\">ТЦ Akdeniz Park AVM и субботний рынок</span></div>
      <div class=\"pd-loc-item\"><span class=\"pd-loc-time\">300 м</span><span class=\"pd-loc-name\">ТЦ Yekta Mall</span></div>
      <div class=\"pd-loc-item\"><span class=\"pd-loc-name\">Супермаркеты, кафе, рестораны</span></div>
      <div class=\"pd-loc-item\"><span class=\"pd-loc-time\">600 м</span><span class=\"pd-loc-name\">До моря</span></div>
    </div>
    
  </div>

</div>`;

const enRichDesc = `<div class=\"premium-desc pd-v3\">

  <!-- LEAD TEXT -->
  <p class=\"pd-lead-text\">
    We present a cozy new apartment in the prestigious Ruby Tower residential complex, located in the very center of the Mahmutlar district (Alanya). An ideal option for a vacation, wintering, and long-term living on the Mediterranean coast of Turkey with a pleasant view of the green banana plantations.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class=\"pd-facts-row\">
    <div class=\"pd-fact\"><span class=\"pd-fact-value\">50 m²</span><span class=\"pd-fact-label\">Area</span></div>
    <div class=\"pd-fact\"><span class=\"pd-fact-value\">2</span><span class=\"pd-fact-label\">Floor</span></div>
    <div class=\"pd-fact\"><span class=\"pd-fact-value\">1+1</span><span class=\"pd-fact-label\">Layout</span></div>
    <div class=\"pd-fact\"><span class=\"pd-fact-value\">Up to 4</span><span class=\"pd-fact-label\">Guests</span></div>
    <div class=\"pd-fact\"><span class=\"pd-fact-value\">600 m</span><span class=\"pd-fact-label\">To Sea</span></div>
  </div>

  <div class=\"pd-rule\"></div>

  <!-- WHY CHOOSE -->
  <div class=\"pd-section\">
    <div class=\"pd-section-label\">Why this apartment</div>
    <ul class=\"pd-usp-list\">
      <li>First rental — absolutely new high-quality furniture and Bosch appliances</li>
      <li>Pleasant view of green banana plantations (atmosphere of tranquility)</li>
      <li>Prestigious residential complex in the very center of the Mahmutlar district</li>
      <li>Compliments for guests: water, a plate of fresh fruit, disposable slippers</li>
      <li>Only 600 meters from the Mediterranean Sea</li>
    </ul>
  </div>

  <div class=\"pd-rule\"></div>

  <!-- INFRASTRUCTURE -->
  <div class=\"pd-section\">
    <div class=\"pd-section-label\">Ruby Tower Infrastructure</div>
    <div class=\"pd-cols-4\">
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">Pools & Water</div>
        <ul class=\"pd-col-list\">
          <li>Outdoor pool</li>
          <li>Indoor pool</li>
          <li>Water slide</li>
        </ul>
      </div>
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">SPA & Relax</div>
        <ul class=\"pd-col-list\">
          <li>Turkish hamam</li>
          <li>Sauna</li>
          <li>Steam room</li>
        </ul>
      </div>
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">Sports & Kids</div>
        <ul class=\"pd-col-list\">
          <li>Fitness gym</li>
          <li>Childrens playground</li>
        </ul>
      </div>
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">Service & Security</div>
        <ul class=\"pd-col-list\">
          <li>24/7 security</li>
          <li>Video surveillance</li>
          <li>Parking</li>
        </ul>
      </div>
    </div>
  </div>

  <div class=\"pd-rule\"></div>

  <!-- INSIDE THE APARTMENT -->
  <div class=\"pd-section\">
    <div class=\"pd-section-label\">Inside the Apartment</div>
    <div class=\"pd-cols-4\">
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">Kitchen</div>
        <ul class=\"pd-col-list\">
          <li>Fully equipped kitchen</li>
          <li>New Bosch appliances</li>
        </ul>
      </div>
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">Living Room</div>
        <ul class=\"pd-col-list\">
          <li>Fold-out sofa</li>
          <li>50” Smart TV</li>
          <li>Air conditioning</li>
        </ul>
      </div>
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">Bedroom</div>
        <ul class=\"pd-col-list\">
          <li>Double bed</li>
          <li>Air conditioning (2 in total)</li>
        </ul>
      </div>
      <div class=\"pd-col\">
        <div class=\"pd-col-title\">Tech & Internet</div>
        <ul class=\"pd-col-list\">
          <li>High-speed Wi-Fi</li>
        </ul>
      </div>
    </div>
  </div>

  <div class=\"pd-rule\"></div>

  <!-- ADDITIONAL INCLUSIONS -->
  <div class=\"pd-section\">
    <div class=\"pd-section-label\">Additionally Included</div>
    <div class=\"pd-inline-list\">
      <span>Bottled water</span>
      <span class=\"pd-sep\">·</span>
      <span>Plate of fresh fruits</span>
      <span class=\"pd-sep\">·</span>
      <span>Disposable slippers</span>
    </div>
  </div>

  <div class=\"pd-rule\"></div>

  <!-- LOCATION -->
  <div class=\"pd-section\">
    <div class=\"pd-section-label\">Walking Distance</div>
    <div class=\"pd-location-row\">
      <div class=\"pd-loc-item\"><span class=\"pd-loc-time\">100 m</span><span class=\"pd-loc-name\">Akdeniz Park AVM & Saturday market</span></div>
      <div class=\"pd-loc-item\"><span class=\"pd-loc-time\">300 m</span><span class=\"pd-loc-name\">Yekta Mall</span></div>
      <div class=\"pd-loc-item\"><span class=\"pd-loc-name\">Supermarkets, cafes, restaurants</span></div>
      <div class=\"pd-loc-item\"><span class=\"pd-loc-time\">600 m</span><span class=\"pd-loc-name\">To the sea</span></div>
    </div>
    
  </div>

</div>`;

// Find the index of the apartment
const startStr = "\"id\": \"17 Mah\",";
const startIndex = content.indexOf(startStr);
if (startIndex === -1) {
    console.error("Apartment not found");
    process.exit(1);
}

// Find next apartment to scope
const nextApartment = "\"id\": \"021 Mah\",";
let endIndex = content.indexOf(nextApartment, startIndex);
if (endIndex === -1) {
    endIndex = content.length;
}

let apartmentContent = content.substring(startIndex, endIndex);

// We want to replace the "description" and "richDescription" objects.
// Since it is JSON format inside a JS file, we can parse it by wrapping it in `{` and `}`, but it"s not strictly JSON (it"s an object). Wait, let"s just replace using regex or string replacement.

// We need to replace the description and richDescription keys.
// The easiest is just to replace the block directly.
const blockToReplace = apartmentContent.substring(
    apartmentContent.indexOf("\"description\": {"),
    apartmentContent.indexOf("\"size\": {")
);

const newBlock = \`"description": {
      "ru": \${JSON.stringify(ruDesc)},
      "en": \${JSON.stringify(enDesc)}
    },
    "richDescription": {
      "ru": \${JSON.stringify(ruRichDesc)},
      "en": \${JSON.stringify(enRichDesc)}
    },
    \`;

apartmentContent = apartmentContent.replace(blockToReplace, newBlock);

content = content.substring(0, startIndex) + apartmentContent + content.substring(endIndex);

fs.writeFileSync("js/data.js", content, "utf8");
console.log("Replaced successfully!");

