const fs = require('fs');

const filePath = 'js/data.js';
const content = fs.readFileSync(filePath, 'utf8');

// Identify 3 Mah start to find where to stop replacement
const search3Mah = '"id": "3 Mah"';
const index3MahStart = content.indexOf(search3Mah);
if (index3MahStart === -1) {
    console.error('Could not find "3 Mah" start. Aborting.');
    process.exit(1);
}

// Find the opening brace before 3 Mah
const lastBraceBefore3Mah = content.lastIndexOf('{', index3MahStart);

// We want to replace everything from the start of the array until 3 Mah starts
// Actually, it's easier to find the start of 1 Mah
const search1Mah = '"id": "1 Mah"';
const index1MahStart = content.indexOf(search1Mah);
const startBrace1Mah = content.lastIndexOf('{', index1MahStart);

const head = content.substring(0, startBrace1Mah);
const tail = content.substring(lastBraceBefore3Mah);

// Define clean objects for 1 Mah and 2 Mah
const apartment1Photos = [
  "PHOTO-2025-09-05-12-00-11(1).jpg", "PHOTO-2025-09-05-12-00-11.jpg", "PHOTO-2025-09-05-12-00-12.jpg", "PHOTO-2025-09-05-12-00-13(1).jpg",
  "PHOTO-2025-09-05-12-00-13.jpg", "PHOTO-2025-09-05-12-00-14.jpg", "PHOTO-2025-09-05-12-00-15.jpg", "PHOTO-2025-09-05-12-00-16.jpg",
  "PHOTO-2025-09-05-12-00-17(1).jpg", "PHOTO-2025-09-05-12-00-17(2).jpg", "PHOTO-2025-09-05-12-00-17(3).jpg", "PHOTO-2025-09-05-12-00-17.jpg",
  "PHOTO-2025-09-05-12-00-18.jpg", "PHOTO-2025-09-05-12-00-19.jpg", "PHOTO-2025-09-05-12-00-20.jpg", "PHOTO-2025-09-05-12-00-21(1).jpg",
  "PHOTO-2025-09-05-12-00-21.jpg", "PHOTO-2025-09-05-12-00-22.jpg", "PHOTO-2025-09-05-12-00-23.jpg", "PHOTO-2025-09-05-12-00-24.jpg",
  "PHOTO-2025-09-05-12-00-25.jpg", "PHOTO-2025-09-05-12-00-26.jpg", "PHOTO-2025-09-05-12-00-27.jpg", "PHOTO-2025-09-05-12-00-28(1).jpg",
  "PHOTO-2025-09-05-12-00-28.jpg", "PHOTO-2025-09-05-12-00-29.jpg", "PHOTO-2025-09-05-12-00-31.jpg", "PHOTO-2025-09-05-12-00-32.jpg",
  "PHOTO-2025-09-05-12-00-33(1).jpg", "PHOTO-2025-09-05-12-00-33.jpg", "PHOTO-2025-09-05-12-00-34.jpg", "PHOTO-2025-09-05-12-00-35.jpg",
  "PHOTO-2025-09-05-12-00-37.jpg", "PHOTO-2025-09-05-12-00-38.jpg", "PHOTO-2025-09-05-12-00-39(1).jpg", "PHOTO-2025-09-05-12-00-39.jpg",
  "PHOTO-2025-09-05-12-00-40.jpg", "PHOTO-2025-09-05-12-00-41.jpg", "PHOTO-2025-09-05-12-00-42(1).jpg", "PHOTO-2025-09-05-12-00-42.jpg",
  "PHOTO-2025-09-05-12-00-43.jpg", "PHOTO-2025-09-05-12-00-44.jpg", "PHOTO-2025-09-05-12-00-45.jpg", "PHOTO-2025-09-05-12-00-46.jpg",
  "PHOTO-2025-09-05-12-00-47(1).jpg", "PHOTO-2025-09-05-12-00-47.jpg", "PHOTO-2025-09-05-12-00-48(1).jpg", "PHOTO-2025-09-05-12-00-48.jpg",
  "PHOTO-2025-09-05-12-00-49.jpg", "PHOTO-2025-09-05-12-00-50(1).jpg", "PHOTO-2025-09-05-12-00-50.jpg", "PHOTO-2025-09-05-12-00-51.jpg",
  "PHOTO-2025-09-05-12-00-52.jpg", "PHOTO-2025-09-05-12-00-53(1).jpg", "PHOTO-2025-09-05-12-00-53.jpg", "PHOTO-2025-09-05-12-00-54(1).jpg",
  "PHOTO-2025-09-05-12-00-54.jpg", "PHOTO-2025-09-05-12-00-55(1).jpg", "PHOTO-2025-09-05-12-00-55.jpg", "PHOTO-2025-09-05-12-00-56.jpg",
  "PHOTO-2025-09-05-12-00-57(1).jpg", "PHOTO-2025-09-05-12-00-57.jpg", "PHOTO-2025-09-05-12-00-58(1).jpg", "PHOTO-2025-09-05-12-00-58(2).jpg",
  "PHOTO-2025-09-05-12-00-58.jpg", "PHOTO-2025-09-05-12-00-59.jpg", "PHOTO-2025-09-05-12-01-01.jpg", "PHOTO-2025-09-05-12-01-03.jpg",
  "PHOTO-2025-09-05-12-01-04.jpg", "PHOTO-2025-09-05-12-01-05.jpg", "PHOTO-2025-09-05-12-02-03.jpg", "PHOTO-2025-09-05-12-02-08.jpg",
  "PHOTO-2025-09-05-12-02-09.jpg", "PHOTO-2025-09-05-12-02-10.jpg", "PHOTO-2025-09-05-12-02-12.jpg", "PHOTO-2025-09-05-12-02-32(1).jpg",
  "PHOTO-2025-09-05-12-02-32.jpg", "Copy of 1.jpeg", "Copy of 10.jpeg", "Copy of 11.jpeg", "Copy of 12.jpeg", "Copy of 13.jpeg",
  "Copy of 2.jpeg", "Copy of 3.jpeg", "Copy of 4.jpeg", "Copy of 5.jpeg", "Copy of 6.jpeg", "Copy of 7.jpeg", "Copy of 8.jpeg",
  "Copy of 9.jpeg"
];

const apartment2Photos = [
  "3824b5b3-09cc-4365-9e89-e35a4f2cf558.jpg", "WhatsApp Image 2025-12-02 at 11.01.48 (3).jpeg", "WhatsApp Image 2025-12-02 at 11.01.48 (4).jpeg",
  "WhatsApp Image 2025-12-02 at 11.01.48.jpeg", "WhatsApp Image 2025-12-02 at 11.01.49 (1).jpeg", "WhatsApp Image 2025-12-02 at 11.01.48 (1).jpeg",
  "WhatsApp Image 2025-12-02 at 11.01.48 (2).jpeg", "WhatsApp Image 2025-12-02 at 11.01.49.jpeg", "WhatsApp Image 2025-12-02 at 11.01.51 (1).jpeg",
  "WhatsApp Image 2025-12-02 at 11.01.51.jpeg", "WhatsApp Image 2025-12-02 at 11.01.52 (1).jpeg", "WhatsApp Image 2025-12-02 at 11.01.52 (2).jpeg",
  "WhatsApp Image 2025-12-02 at 11.01.52 (3).jpeg", "WhatsApp Image 2025-12-02 at 11.01.52.jpeg", "WhatsApp Image 2025-12-02 at 11.01.54 (1).jpeg",
  "WhatsApp Image 2025-12-02 at 11.01.54 (2).jpeg", "WhatsApp Image 2025-12-02 at 11.01.54.jpeg", "WhatsApp Image 2025-12-02 at 11.01.55 (1).jpeg",
  "WhatsApp Image 2025-12-02 at 11.01.55 (2).jpeg", "WhatsApp Image 2025-12-02 at 11.01.56 (1).jpeg", "WhatsApp Image 2025-12-02 at 11.01.50 (2).jpeg",
  "WhatsApp Image 2025-12-02 at 11.01.50 (3).jpeg", "WhatsApp Image 2025-12-02 at 11.01.50 (4).jpeg", "WhatsApp Image 2025-12-02 at 11.01.53 (1).jpeg",
  "WhatsApp Image 2025-12-02 at 11.01.53 (2).jpeg", "WhatsApp Image 2025-12-02 at 11.01.53 (3).jpeg", "WhatsApp Image 2025-12-02 at 11.01.53 (4).jpeg",
  "WhatsApp Image 2025-12-02 at 11.01.53.jpeg", "WhatsApp Image 2025-12-02 at 11.01.55.jpeg", "WhatsApp Image 2025-12-02 at 11.01.56 (2).jpeg",
  "WhatsApp Image 2025-12-02 at 11.01.56.jpeg", "WhatsApp Image 2025-12-02 at 11.01.50 (1).jpeg", "WhatsApp Image 2025-12-02 at 11.01.50.jpeg",
  "WhatsApp Image 2025-12-02 at 11.01.51 (2).jpeg", "WhatsApp Image 2025-12-02 at 11.01.51 (3).jpeg", "WhatsApp Image 2025-12-02 at 11.01.51 (4).jpeg",
  "1.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg"
];

const richDescription1_RU = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    Современные апартаменты с дизайнерским интерьером и продуманной до мелочей планировкой.
    Пространство создано для комфортного отдыха — от мебели до инфраструктуры уровня отеля.
    Жизнь у моря — без компромиссов.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">50 м²</span><span class="pd-fact-label">Площадь</span></div>
    <div class="pd-fact"><span class="pd-fact-value">8</span><span class="pd-fact-label">Этаж</span></div>
    <div class="pd-fact"><span class="pd-fact-value">1+1</span><span class="pd-fact-label">Планировка</span></div>
    <div class="pd-fact"><span class="pd-fact-value">4</span><span class="pd-fact-label">Гостей</span></div>
    <div class="pd-fact"><span class="pd-fact-value">700 м</span><span class="pd-fact-label">До моря</span></div>
  </div>

  <!-- DIVIDER -->
  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Почему эта квартира</div>
    <ul class="pd-usp-list">
      <li>700 метров до моря — 5–7 минут пешком по прямой</li>
      <li>Вид на бассейн и закаты — западная сторона, 8 этаж</li>
      <li>Art de Vivre — эксклюзивный авторский интерьер</li>
      <li>Инфраструктура пятизвёздочного уровня</li>
      <li>Полная комплектация — заезжай и живи</li>
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
          <li>Микроволновка</li>
          <li>Электрочайник</li>
          <li>Вытяжка</li>
          <li>Полный набор посуды</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Спальня</div>
        <ul class="pd-col-list">
          <li>Двуспальная кровать</li>
          <li>Телевизор 40\\"</li>
          <li>Кондиционер</li>
          <li>Письменный стол</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Гостиная</div>
        <ul class="pd-col-list">
          <li>Раскладной диван</li>
          <li>Телевизор 55\\"</li>
          <li>Кондиционер</li>
          <li>Балконная мебель</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Техника</div>
        <ul class="pd-col-list">
          <li>Стиральная машина</li>
          <li>Водонагреватель</li>
          <li>Беспроводной пылесос</li>
          <li>Интернет (высокая скорость)</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- ADDITIONAL INCLUSIONS -->
  <div class="pd-section">
    <div class="pd-section-label">Дополнительно включено</div>
    <div class="pd-inline-list">
      <span>Wi-Fi</span>
      <span class="pd-sep">·</span>
      <span>Постельное бельё (3 комплекта)</span>
      <span class="pd-sep">·</span>
      <span>Полотенца</span>
      <span class="pd-sep">·</span>
      <span>Пляжные полотенца</span>
      <span class="pd-sep">·</span>
      <span>Утюг и гладилка</span>
      <span class="pd-sep">·</span>
      <span>Вертикальная сушилка</span>
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

const richDescription1_EN = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    Modern apartments with designer interiors and a layout planned down to the smallest detail.
    The space is created for comfortable leisure — from furniture to five-star hotel-level infrastructure.
    Living by the sea — without compromises.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">50 m²</span><span class="pd-fact-label">Area</span></div>
    <div class="pd-fact"><span class="pd-fact-value">8</span><span class="pd-fact-label">Floor</span></div>
    <div class="pd-fact"><span class="pd-fact-value">1+1</span><span class="pd-fact-label">Layout</span></div>
    <div class="pd-fact"><span class="pd-fact-value">4</span><span class="pd-fact-label">Guests</span></div>
    <div class="pd-fact"><span class="pd-fact-value">700 m</span><span class="pd-fact-label">To the Sea</span></div>
  </div>

  <!-- DIVIDER -->
  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Why this apartment</div>
    <ul class="pd-usp-list">
      <li>700 meters to the sea — 5–7 minutes walk in a straight line</li>
      <li>View of the pool and sunsets — western side, 8th floor</li>
      <li>Art de Vivre — exclusive author's interior</li>
      <li>Five-star infrastructure level</li>
      <li>Full package — just move in and live</li>
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
          <li>Microwave</li>
          <li>Electric kettle</li>
          <li>Extractor hood</li>
          <li>Full set of dishes</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Bedroom</div>
        <ul class="pd-col-list">
          <li>Double bed</li>
          <li>40\\" TV</li>
          <li>Air conditioning</li>
          <li>Writing desk</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Living Room</div>
        <ul class="pd-col-list">
          <li>Fold-out sofa</li>
          <li>55\\" TV</li>
          <li>Air conditioning</li>
          <li>Balcony furniture</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Appliances</div>
        <ul class="pd-col-list">
          <li>Washing machine</li>
          <li>Water heater</li>
          <li>Cordless vacuum</li>
          <li>High-speed Internet</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- ADDITIONAL INCLUSIONS -->
  <div class="pd-section">
    <div class="pd-section-label">Additionally Included</div>
    <div class="pd-inline-list">
      <span>Wi-Fi</span>
      <span class="pd-sep">·</span>
      <span>Bed linen (3 sets)</span>
      <span class="pd-sep">·</span>
      <span>Towels</span>
      <span class="pd-sep">·</span>
      <span>Beach towels</span>
      <span class="pd-sep">·</span>  
      <span>Iron and board</span>
      <span class="pd-sep">·</span>
      <span>Vertical dryer</span>
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

</div>`;

const richDescription2_RU = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    Просторный дуплекс с персональным выходом к бассейну и дизайнерским интерьером.
    Два жилых уровня, три санузла и приватная зона у воды — всё для комфортного отдыха в самом зеленом комплексе Алании.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">90 м²</span><span class="pd-fact-label">Площадь</span></div>
    <div class="pd-fact"><span class="pd-fact-value">2+1</span><span class="pd-fact-label">Планировка</span></div>
    <div class="pd-fact"><span class="pd-fact-value">Дуплекс</span><span class="pd-fact-label">2 этажа</span></div>
    <div class="pd-fact"><span class="pd-fact-value">4</span><span class="pd-fact-label">Гостей</span></div>
    <div class="pd-fact"><span class="pd-fact-value">700 м</span><span class="pd-fact-label">До моря</span></div>
  </div>

  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Почему эта квартира</div>
    <ul class="pd-usp-list">
      <li>Персональный выход к бассейну с первого этажа</li>
      <li>Приватная зона у воды с балконной мебелью</li>
      <li>700 метров до моря — 5–7 минут пешком</li>
      <li>Дуплекс 90 м² — пространство для полного комфорта</li>
      <li>Инфраструктура пятизвёздочного уровня</li>
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
          <li>Микроволновка</li>
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
          <li>Письменный стол</li>
          <li>Телевизор</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Гостиная</div>
        <ul class="pd-col-list">
          <li>Кондиционер</li>
          <li>Балконная мебель</li>
          <li>Приватный выход к бассейну</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Техника</div>
        <ul class="pd-col-list">
          <li>Стиральная машина</li>
          <li>Водонагреватель</li>
          <li>3 кондиционера</li>
          <li>Интернет (высокая скорость)</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- ADDITIONAL INCLUSIONS -->
  <div class="pd-section">
    <div class="pd-section-label">Дополнительно включено</div>
    <div class="pd-inline-list">
      <span>Wi-Fi</span>
      <span class="pd-sep">·</span>
      <span>Постельное бельё</span>
      <span class="pd-sep">·</span>
      <span>Полотенца</span>
      <span class="pd-sep">·</span>
      <span>Пылесос</span>
      <span class="pd-sep">·</span>
      <span>Утюг и гладилка</span>
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

const richDescription2_EN = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    Spacious luxury duplex with direct pool access and designer interiors.
    Two high-end living levels, three bathrooms, and a private waterfront terrace — curated for a refined coastal experience in Alanya's greenest complex.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">90 m²</span><span class="pd-fact-label">Area</span></div>
    <div class="pd-fact"><span class="pd-fact-value">2+1</span><span class="pd-fact-label">Layout</span></div>
    <div class="pd-fact"><span class="pd-fact-value">Duplex</span><span class="pd-fact-label">2 Floors</span></div>
    <div class="pd-fact"><span class="pd-fact-value">4</span><span class="pd-fact-label">Guests</span></div>
    <div class="pd-fact"><span class="pd-fact-value">700 m</span><span class="pd-fact-label">To the Sea</span></div>
  </div>

  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Why this apartment</div>
    <ul class="pd-usp-list">
      <li>Private pool access directly from your ground floor terrace</li>
      <li>Private waterfront lounge area with designer balcony furniture</li>
      <li>Just 700 meters to the sea — a scenic 5–7 minute walk</li>
      <li>90 m² Duplex — generous space for ultimate comfort and privacy</li>
      <li>Exclusive five-star resort infrastructure</li>
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
          <li>Premium Sauna</li>
          <li>Authentic Hamam</li>
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
          <li>Landscaped walking territory</li>
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
          <li>Microwave</li>
          <li>Electric kettle</li>
          <li>Extractor hood</li>
          <li>Full set of premium dishes</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Bedroom</div>
        <ul class="pd-col-list">
          <li>King-size bed</li>
          <li>Air conditioning</li>
          <li>Writing desk</li>
          <li>Television</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Living Room</div>
        <ul class="pd-col-list">
          <li>Air conditioning</li>
          <li>Refined balcony furniture</li>
          <li>Private pool access</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Appliances</div>
        <ul class="pd-col-list">
          <li>Washing machine</li>
          <li>Water heater</li>
          <li>3 air conditioners</li>
          <li>High-speed Internet</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- ADDITIONAL INCLUSIONS -->
  <div class="pd-section">
    <div class="pd-section-label">Additionally Included</div>
    <div class="pd-inline-list">
      <span>Wi-Fi</span>
      <span class="pd-sep">·</span>
      <span>Premium Bed linen</span>
      <span class="pd-sep">·</span>
      <span>Soft Towels</span>
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

</div>`;

const apt1 = {
  id: "1 Mah",
  title: {
    ru: "Green Ocean Art de Vivre 1+1",
    en: "Green Ocean Art de Vivre 1+1"
  },
  description: {
    ru: "Современные апартаменты, где эстетика минимализма встречается с продуманным функционалом. Светлое пространство и грамотное зонирование создают комфортную среду для расслабленного отдыха или удаленной работы на побережье.",
    en: "Premium apartment where minimalist aesthetics meet absolute comfort. Bright spaces and smart zoning for a relaxed coastal living or remote work."
  },
  size: {
    ru: "1+1, 50м²",
    en: "1+1, 50m²"
  },
  price: {
    ru: "От €100 / сутки",
    en: "From €100 / night"
  },
  amenities: ["wifi", "pool", "ac", "kitchen", "washer", "dishwasher", "sauna", "gym", "parking"],
  photosDir: "1 Mah",
  photos: apartment1Photos,
  videoDir: "1 Mah V",
  video: "copy_7AABEA9D-FFF4-4776-B865-AE8F47254A24.MOV",
  number: "1",
  richDescription: {
    ru: richDescription1_RU,
    en: richDescription1_EN
  }
};

const apt2 = {
  id: "2 Mah",
  title: {
    ru: "Green Ocean 2+1 — С персональным выходом к бассейну",
    en: "Green Ocean Garden Duplex with Pool Access 2+1"
  },
  description: {
    ru: "Просторный дуплекс с персональным выходом к бассейну и дизайнерским интерьером. Два жилых уровня, три санузла и приватная зона у воды — всё для комфортного отдыха в самом зеленом комплексе Алании.",
    en: "Spacious luxury duplex with direct pool access and designer interiors. Two levels, three bathrooms, and a private waterfront zone in Alanya's greenest complex."
  },
  size: {
    ru: "2+1 Дуплекс, 90м²",
    en: "2+1 Garden Duplex, 90m²"
  },
  price: {
    ru: "От €100 / сутки",
    en: "From €100 / night"
  },
  amenities: ["wifi", "pool", "ac", "parking", "kitchen"],
  photosDir: "2 Mah",
  photos: apartment2Photos,
  videoDir: "2 Mah V",
  video: "copy_D45CE1E8-DD56-4A72-8A4F-AACD80BB1C81.MOV",
  number: "2",
  richDescription: {
    ru: richDescription2_RU,
    en: richDescription2_EN
  }
};

const result = head + 
    '  ' + JSON.stringify(apt1, null, 2) + ',\n' +
    '  ' + JSON.stringify(apt2, null, 2) + ',\n' +
    tail;

fs.writeFileSync(filePath, result);
console.log('Successfully repaired data.js');
