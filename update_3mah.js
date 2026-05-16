const fs = require('fs');

let dataStr = fs.readFileSync('js/data.js', 'utf8');
let jsonMatch = dataStr.match(/const apartmentsData = (\[[\s\S]*\]);/);
let data = JSON.parse(jsonMatch[1]);

const richDescHTML = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    Минималистичный дизайн и продуманный комфорт. 
    Все необходимое для комфортного проживания в квартире уже имеется — от современной бытовой техники до прекрасного вида на бассейн.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">50 м²</span><span class="pd-fact-label">Площадь</span></div>
    <div class="pd-fact"><span class="pd-fact-value">3</span><span class="pd-fact-label">Этаж</span></div>
    <div class="pd-fact"><span class="pd-fact-value">1+1</span><span class="pd-fact-label">Планировка</span></div>
    <div class="pd-fact"><span class="pd-fact-value">3-4</span><span class="pd-fact-label">Гостей</span></div>
    <div class="pd-fact"><span class="pd-fact-value">700 м</span><span class="pd-fact-label">До моря</span></div>
  </div>

  <!-- DIVIDER -->
  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Почему эта квартира</div>
    <ul class="pd-usp-list">
      <li>Минималистичный дизайн интерьера</li>
      <li>Вид на бассейн — западная сторона, 3 этаж</li>
      <li>700 метров до моря — 5–7 минут пешком</li>
      <li>Абсолютно всё необходимое для комфортного проживания имеется</li>
      <li>Масштабная инфраструктура комплекса</li>
    </ul>
  </div>

  <div class="pd-rule"></div>

  <!-- INFRASTRUCTURE -->
  <div class="pd-section">
    <div class="pd-section-label">Инфраструктура комплекса</div>
    <div class="pd-cols-4">
      <div class="pd-col">
        <div class="pd-col-title">Вода / SPA</div>
        <ul class="pd-col-list">
          <li>Самый длинный открытый бассейн в Алании</li>
          <li>Крытый подогреваемый бассейн</li>
          <li>Сауна</li>
          <li>Хамам</li>
          <li>Парная комната</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Активности</div>
        <ul class="pd-col-list">
          <li>Фитнесс зал</li>
          <li>Мультикорт</li>
          <li>Барбекю зона</li>
          <li>Лаундж зона</li>
          <li>Прогулочная территория</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Развлечения</div>
        <ul class="pd-col-list">
          <li>Кинотеатр</li>
          <li>Бильярд</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Дети</div>
        <ul class="pd-col-list">
          <li>Детская игровая комната</li>
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
          <li>Холодильник</li>
          <li>Посудомоечная машина</li>
          <li>Духовка</li>
          <li>Электрочайник</li>
          <li>Вытяжка</li>
          <li>Полный набор посуды</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Спальня</div>
        <ul class="pd-col-list">
          <li>Двуспальная кровать</li>
          <li>Кондиционер</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Гостиная</div>
        <ul class="pd-col-list">
          <li>Раскладной диван (двухместный)</li>
          <li>Телевизор 50"</li>
          <li>Кондиционер</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Техника</div>
        <ul class="pd-col-list">
          <li>Стиральная машина</li>
          <li>Водонагреватель</li>
          <li>Пылесос</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- ADDITIONAL INCLUSIONS -->
  <div class="pd-section">
    <div class="pd-section-label">Дополнительно включено</div>
    <div class="pd-inline-list">
      <span>Посуда</span>
      <span class="pd-sep">·</span>
      <span>Постельное бельё</span>
      <span class="pd-sep">·</span>
      <span>Полотенца</span>
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
      <div class="pd-loc-item"><span class="pd-loc-time">5–7 мин</span><span class="pd-loc-name">Пляж пешком</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">3 мин</span><span class="pd-loc-name">BIM и Migros</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">5 мин</span><span class="pd-loc-name">CAP STORE</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">500 м</span><span class="pd-loc-name">Магазины, кафе, аптеки</span></div>
    </div>
    <a href="https://maps.app.goo.gl/avJ2LnhYCdcm8ZSu8" target="_blank" rel="noopener" class="pd-maps-link">Посмотреть на карте</a>
  </div>

</div>`;

let found = false;
for (let apt of data) {
    if (apt.id === '3 Mah') {
        apt.title = {
            ru: "GREEN OCEAN 1+1",
            en: "GREEN OCEAN 1+1",
            tr: "GREEN OCEAN 1+1",
            de: "GREEN OCEAN 1+1"
        };
        apt.description = {
            ru: "Минималистичный дизайн. Все необходимое для комфортного проживания в квартире имеется.",
            en: "Minimalistic design. Everything necessary for a comfortable stay is available.",
            tr: "Minimalist tasarım. Rahat bir konaklama için gerekli her şey mevcuttur.",
            de: "Minimalistisches Design. Alles Notwendige für einen komfortablen Aufenthalt ist vorhanden."
        };
        apt.size = "1+1, 50m²";
        apt.price = "От €100 / сутки"; 
        apt.amenities = ["wifi", "pool", "ac", "kitchen", "washer", "dishwasher", "sauna", "gym", "parking"];
        
        apt.richDescription = {
            ru: richDescHTML,
            en: richDescHTML,
            tr: richDescHTML,
            de: richDescHTML
        };
        
        console.log('Updated 3 Mah data successfully!');
        found = true;
    }
}

if (!found) {
    console.log('Could not find 3 Mah in data.js');
}

fs.writeFileSync('js/data.js', `const apartmentsData = ${JSON.stringify(data, null, 2)};\n`, 'utf8');
console.log('Done writing js/data.js.');
