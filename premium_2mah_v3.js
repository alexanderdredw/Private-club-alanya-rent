const fs = require('fs');

let dataStr = fs.readFileSync('js/data.js', 'utf8');
let jsonMatch = dataStr.match(/const apartmentsData = (\[[\s\S]*\]);/);
let data = JSON.parse(jsonMatch[1]);

const richDescHtml = `<div class="premium-desc pd-v3">

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

for (let apt of data) {
    if (apt.id === '2 Mah') {
        apt.richDescription = { ru: richDescHtml, en: richDescHtml, tr: richDescHtml, de: richDescHtml };
        apt.size = '2+1 Дуплекс, 90m²';
        apt.number = '2';
        console.log('2 Mah updated with premium V3 description!');
    }
}

fs.writeFileSync('js/data.js', `const apartmentsData = ${JSON.stringify(data, null, 2)};\n`, 'utf8');
console.log('Done!');
