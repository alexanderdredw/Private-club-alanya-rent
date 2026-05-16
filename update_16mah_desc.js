const fs = require('fs');

let dataStr = fs.readFileSync('js/data.js', 'utf8');
let jsonMatch = dataStr.match(/const apartmentsData = (\[[\s\S]*\]);/);
let data = JSON.parse(jsonMatch[1]);

const richDescHTML = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    Уютный и богатый дизайн интерьера с роскошной мебелью. Эта эксклюзивная 2+1 квартира (120 м²) с двумя большими балконами расположена в крупном комплексе премиум-класса Yekta Alara Park. Потрясающую инфраструктуру, эко-дизайн и собственный пляж по достоинству оценят любители роскоши и непревзойденного комфорта.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">120 м²</span><span class="pd-fact-label">Площадь</span></div>
    <div class="pd-fact"><span class="pd-fact-value">8</span><span class="pd-fact-label">Этаж</span></div>
    <div class="pd-fact"><span class="pd-fact-value">2+1</span><span class="pd-fact-label">Планировка</span></div>
    <div class="pd-fact"><span class="pd-fact-value">До 5</span><span class="pd-fact-label">Гостей</span></div>
    <div class="pd-fact"><span class="pd-fact-value">400 м</span><span class="pd-fact-label">До моря</span></div>
  </div>

  <!-- DIVIDER -->
  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Почему эта квартира</div>
    <ul class="pd-usp-list">
      <li>Просторная площадь 120 м², 2 спальни и 2 санузла</li>
      <li>Два больших балкона с панорамой (вид на бассейн, юго-восточная сторона)</li>
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
          <li>Диван с откидными спинками (90 см)</li>
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
    <a href="https://maps.app.goo.gl/asXhtWeRN86xCyjs8" target="_blank" rel="noopener" class="pd-maps-link">Посмотреть на карте</a>
  </div>

</div>`;

let found = false;
for (let apt of data) {
    if (apt.id === '16 Mah') {
        apt.title = {
            ru: "ALARA PARK 2+1",
            en: "ALARA PARK 2+1",
            tr: "ALARA PARK 2+1",
            de: "ALARA PARK 2+1"
        };
        apt.description = {
            ru: "Огромная квартира 120м² с 2 спальнями, роскошным дизайном и рабочим местом в крупнейшем комплексе премиум-класса ALARA PARK.",
            en: "Huge 120m² apartment with 2 bedrooms, luxury design, and a workspace in the largest premium complex ALARA PARK.",
            tr: "ALARA PARK'ın en büyük premium kompleksinde lüks tasarımı ve çalışma alanıyla devasa 120m² 2 yatak odalı daire.",
            de: "Riesige 120 m² Wohnung mit 2 Schlafzimmern, luxuriösem Design und einem Arbeitsbereich im größten Premium-Komplex ALARA PARK."
        };
        apt.size = "2+1, 120m²";
        apt.price = "От €100 / сутки"; 
        
        apt.richDescription = {
            ru: richDescHTML,
            en: richDescHTML,
            tr: richDescHTML,
            de: richDescHTML
        };
        
        // Remove video functionality
        apt.videoDir = null;
        apt.video = null;
        
        console.log('Updated 16 Mah (ALARA PARK 2+1) data successfully without video!');
        found = true;
    }
}

if (!found) {
    console.log('Could not find 16 Mah in data.js');
}

fs.writeFileSync('js/data.js', 'const apartmentsData = ' + JSON.stringify(data, null, 2) + ';\n', 'utf8');
console.log('Done writing js/data.js.');
