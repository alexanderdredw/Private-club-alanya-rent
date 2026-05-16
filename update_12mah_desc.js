const fs = require('fs');

let dataStr = fs.readFileSync('js/data.js', 'utf8');
let jsonMatch = dataStr.match(/const apartmentsData = (\[[\s\S]*\]);/);
let data = JSON.parse(jsonMatch[1]);

const richDescHTML = `<div class="premium-desc pd-v3">

  <!-- LEAD TEXT -->
  <p class="pd-lead-text">
    Эту квартиру выбирают те, кто ценит роскошь, комфорт и безупречное качество жизни. Здесь всё продумано до мелочей: от эргономичной планировки до стильных деталей интерьера. Высококачественная мебель и современная техника, премиальный текстиль и посуда создают атмосферу уюта и дарят ощущения отдыха, превосходящие уровень лучшего отеля.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-facts-row">
    <div class="pd-fact"><span class="pd-fact-value">50 м²</span><span class="pd-fact-label">Площадь</span></div>
    <div class="pd-fact"><span class="pd-fact-value">6</span><span class="pd-fact-label">Этаж</span></div>
    <div class="pd-fact"><span class="pd-fact-value">1+1</span><span class="pd-fact-label">Планировка</span></div>
    <div class="pd-fact"><span class="pd-fact-value">До 3</span><span class="pd-fact-label">Гостей</span></div>
    <div class="pd-fact"><span class="pd-fact-value">700 м</span><span class="pd-fact-label">До моря</span></div>
  </div>

  <!-- DIVIDER -->
  <div class="pd-rule"></div>

  <!-- WHY CHOOSE -->
  <div class="pd-section">
    <div class="pd-section-label">Почему эта квартира</div>
    <ul class="pd-usp-list">
      <li>Великолепный вид на горы с 6 этажа</li>
      <li>Полная комплектация для отдыха: от мебели до премиального текстиля</li>
      <li>Эксклюзивный дизайн</li>
      <li>Пятизвездочная luxury-инфраструктура комплекса</li>
      <li>В самом сердце Махмутлара — всё в шаговой доступности</li>
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
          <li>3 открытых бассейна (взрослый, детский, с горкой)</li>
          <li>Крытый подогреваемый бассейн (зимой)</li>
          <li>Сауна и Хамам</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Спорт и Дети</div>
        <ul class="pd-col-list">
          <li>Фитнес-зал</li>
          <li>Мультикорт</li>
          <li>Настольный теннис, футбол</li>
          <li>Детская игровая комната</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Территория</div>
        <ul class="pd-col-list">
          <li>Общая площадь 7 000 м²</li>
          <li>Благоустроенная прогулочная зона</li>
          <li>Крытые зоны отдыха</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Паркинг и Защита</div>
        <ul class="pd-col-list">
          <li>Бесплатная парковка (56 мест)</li>
          <li>Круглосуточная охрана</li>
          <li>Видеонаблюдение</li>
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
          <li>Духовой шкаф</li>
          <li>Электрочайник и Вытяжка</li>
          <li>Дополнительно встроенный шкаф</li>
          <li>Полный набор посуды</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Гостиная</div>
        <ul class="pd-col-list">
          <li>Диван с откидными спинками (90 см)</li>
          <li>Телевизор в гостиной</li>
          <li>Кондиционер</li>
          <li>Качественная мебель и техника</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Спальня</div>
        <ul class="pd-col-list">
          <li>Двуспальная кровать</li>
          <li>Кондиционер</li>
          <li>Качественная мебель</li>
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
      <span>Постельное бельё (3 комплекта)</span>
      <span class="pd-sep">·</span>
      <span>Полотенца (вкл. пляжные)</span>
      <span class="pd-sep">·</span>
      <span>Беспроводной пылесос</span>
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
      <div class="pd-loc-item"><span class="pd-loc-time">3 мин</span><span class="pd-loc-name">ТРЦ Yekta Mall</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">5 мин</span><span class="pd-loc-name">BIM, ŞOK, Migros, ул. Барбарос</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">4 мин</span><span class="pd-loc-name">Центр здоровья и аптеки</span></div>
      <div class="pd-loc-item"><span class="pd-loc-time">300 м</span><span class="pd-loc-name">Рестораны и магазины</span></div>
    </div>
    <a href="https://maps.app.goo.gl/5zct49osDNBDzfaVA" target="_blank" rel="noopener" class="pd-maps-link">Посмотреть на карте</a>
  </div>

</div>`;

let found = false;
for (let apt of data) {
    if (apt.id === '12 Mah') {
        apt.title = {
            ru: "Tekinoglu 1+1 (Вид на горы)",
            en: "Tekinoglu 1+1 (Mountains View)",
            tr: "Tekinoglu 1+1 (Dağ Manzaralı)",
            de: "Tekinoglu 1+1 (Bergblick)"
        };
        apt.description = {
            ru: "Эту квартиру выбирают те, кто ценит роскошь, комфорт и безупречное качество жизни с потрясающим видом на северные горы.",
            en: "Chosen by those who appreciate luxury, comfort, and impeccable quality of life with a stunning view of the northern mountains.",
            tr: "Kuzey dağlarının muhteşem manzarasıyla lüks, konfor ve kusursuz yaşam kalitesini takdir edenlerin tercihi.",
            de: "Ausgewählt von jenen, die Luxus, Komfort und tadellose Lebensqualität mit einem atemberaubenden Blick auf die nördlichen Berge schätzen."
        };
        apt.size = "1+1, 50m²";
        apt.price = "От €100 / сутки"; 
        
        apt.richDescription = {
            ru: richDescHTML,
            en: richDescHTML,
            tr: richDescHTML,
            de: richDescHTML
        };
        
        apt.videoDir = '12 Mah';
        apt.video = 'VIDEO-2025-09-30-10-10-11.mov';
        
        console.log('Updated 12 Mah data successfully!');
        found = true;
    }
}

if (!found) {
    console.log('Could not find 12 Mah in data.js');
}

fs.writeFileSync('js/data.js', 'const apartmentsData = ' + JSON.stringify(data, null, 2) + ';\n', 'utf8');
console.log('Done writing js/data.js.');
