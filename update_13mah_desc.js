const fs = require('fs');

let dataStr = fs.readFileSync('js/data.js', 'utf8');
let jsonMatch = dataStr.match(/const apartmentsData = (\[[\s\S]*\]);/);
let data = JSON.parse(jsonMatch[1]);

const richDescHTML = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    Качественная мебель и техника, со вкусом подобранный текстиль и предметы интерьера, качественная сантехника подарят ощущение комфорта, роскоши и гармонии. А премиальная инфраструктура комплекса ALBIMO LOFT, окруженного апельсиновыми садами, удовлетворит потребности самых требовательных гостей.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">70 м²</span><span class="pd-fact-label">Площадь</span></div>
    <div class="pd-fact"><span class="pd-fact-value">1</span><span class="pd-fact-label">Этаж</span></div>
    <div class="pd-fact"><span class="pd-fact-value">1+1</span><span class="pd-fact-label">Планировка</span></div>
    <div class="pd-fact"><span class="pd-fact-value">До 4</span><span class="pd-fact-label">Гостей</span></div>
    <div class="pd-fact"><span class="pd-fact-value">700 м</span><span class="pd-fact-label">До моря</span></div>
  </div>

  <!-- DIVIDER -->
  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Почему эта квартира</div>
    <ul class="pd-usp-list">
      <li>Окна во двор, тонированные матовой пленкой для комфорта и приватности</li>
      <li>Масштабный комплекс ALBIMO LOFT класса люкс (7698 кв. м)</li>
      <li>Окружение из цветущих апельсиновых садов</li>
      <li>В шаговой доступности вся инфраструктура, 10 минут до центра Алании</li>
      <li>Кинотеатр, аквапарк, теннисный корт и соляная комната прямо на территории</li>
    </ul>
  </div>

  <div class="pd-rule"></div>

  <!-- INFRASTRUCTURE -->
  <div class="pd-section">
    <div class="pd-section-label">Инфраструктура комплекса</div>
    <div class="pd-cols-4">
      <div class="pd-col">
        <div class="pd-col-title">Бассейны и SPA</div>
        <ul class="pd-col-list">
          <li>Открытый бассейн и Аквапарк</li>
          <li>Закрытый подогреваемый бассейн</li>
          <li>Хамам, Сауна, Парная</li>
          <li>Соляная комната, Массаж</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Спорт и Игры</div>
        <ul class="pd-col-list">
          <li>Фитнес-центр</li>
          <li>Теннисный корт, Мультикорт</li>
          <li>Баскетбольная площадка</li>
          <li>Бильярд, Настольный теннис</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Территория</div>
        <ul class="pd-col-list">
          <li>Мини- и снек-бары</li>
          <li>Кинотеатр</li>
          <li>Детская игровая комната</li>
          <li>Беседка и зона барбекю</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Сервис и Защита</div>
        <ul class="pd-col-list">
          <li>Консьерж-сервис</li>
          <li>Подземная и открытая парковка</li>
          <li>Смотритель-садовник</li>
          <li>Охрана и видеонаблюдение</li>
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
        <div class="pd-col-title">Интерьер</div>
        <ul class="pd-col-list">
          <li>Полная меблировка</li>
          <li>Со вкусом подобранный текстиль</li>
          <li>Стильные предметы интерьера</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Кухня</div>
        <ul class="pd-col-list">
          <li>Современная бытовая техника</li>
          <li>Микроволновка</li>
          <li>Полный набор посуды</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Удобства</div>
        <ul class="pd-col-list">
          <li>Тонированные окна для приватности</li>
          <li>Качественная сантехника</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Дополнительно</div>
        <ul class="pd-col-list">
          <li>Пылесос</li>
          <li>Утюг и гладилка</li>
          <li>Сушилка</li>
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
      <span>Полотенца</span>
      <span class="pd-sep">·</span>
      <span>Спутниковое телевидение</span>
      <span class="pd-sep">·</span>
      <span>Wi-Fi-интернет</span>
    </div>
  </div>

  <div class="pd-rule"></div>

  <!-- LOCATION -->
  <div class="pd-section">
    <div class="pd-section-label">Локация</div>
    <div class="pd-location-row">
      <div class="pd-loc-item"><span class="pd-loc-name">Супермаркеты, магазины, аптеки в шаговой доступности</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">10 мин</span><span class="pd-loc-name">Езды до центра Алании</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">700 м</span><span class="pd-loc-name">До моря и набережной</span></div>
    </div>
    <a href="https://maps.app.goo.gl/tXxmi5b6ViBe5jjDA" target="_blank" rel="noopener" class="pd-maps-link">Посмотреть на карте</a>
  </div>

</div>`;

let found = false;
for (let apt of data) {
    if (apt.id === '13 Mah') {
        apt.title = {
            ru: "ALBIMO LOFT 1+1",
            en: "ALBIMO LOFT 1+1",
            tr: "ALBIMO LOFT 1+1",
            de: "ALBIMO LOFT 1+1"
        };
        apt.description = {
            ru: "Качественная мебель и техника, со вкусом подобранный текстиль подарят ощущение комфорта и роскоши, а инфраструктура премиум-класса ALBIMO LOFT удовлетворит любые потребности.",
            en: "High-quality furniture and appliances with tasteful textiles give a feeling of comfort and luxury, and the premium infrastructure of ALBIMO LOFT will satisfy any needs.",
            tr: "Kaliteli mobilya, beyaz eşya ve zevkli tekstil ürünleri konfor ve lüks hissi verirken, ALBIMO LOFT'un premium altyapısı her türlü ihtiyacı karşılayacaktır.",
            de: "Hochwertige Möbel und Geräte sowie geschmackvolle Textilien vermitteln ein Gefühl von Komfort und Luxus, und die erstklassige Infrastruktur von ALBIMO LOFT wird allen Bedürfnissen gerecht."
        };
        apt.size = "1+1, 70m²";
        apt.price = "От €100 / сутки"; 
        
        apt.richDescription = {
            ru: richDescHTML,
            en: richDescHTML,
            tr: richDescHTML,
            de: richDescHTML
        };
        
        apt.videoDir = '13 Mah V';
        apt.video = 'IMG_4203.mov';
        
        console.log('Updated 13 Mah data successfully!');
        found = true;
    }
}

if (!found) {
    console.log('Could not find 13 Mah in data.js');
}

fs.writeFileSync('js/data.js', 'const apartmentsData = ' + JSON.stringify(data, null, 2) + ';\n', 'utf8');
console.log('Done writing js/data.js.');
