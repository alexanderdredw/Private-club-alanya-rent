const fs = require('fs');

let dataStr = fs.readFileSync('js/data.js', 'utf8');
let jsonMatch = dataStr.match(/const apartmentsData = (\[[\s\S]*\]);/);
let data = JSON.parse(jsonMatch[1]);

const richDescHtml = `<div class="premium-desc pd-v3">

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
          <li>Телевизор 40"</li>
          <li>Кондиционер</li>
          <li>Письменный стол</li>
        </ul>
      </div>
      <div class="pd-col">
        <div class="pd-col-title">Гостиная</div>
        <ul class="pd-col-list">
          <li>Раскладной диван</li>
          <li>Телевизор 55"</li>
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

// Premium CSS — all pd-v3 classes, no emojis
const premiumCss = `
/* ===== Premium Description V3 ===== */
.pd-v3 { font-family: inherit; }
.pd-lead-text { font-size: 1.0rem; line-height: 1.8; color: rgba(255,255,255,0.65); margin: 0 0 2rem; max-width: 600px; }

/* FACTS ROW */
.pd-facts-row { display: flex; flex-wrap: wrap; gap: 0; margin-bottom: 2rem; border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; overflow: hidden; }
.pd-fact { flex: 1 1 80px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.1rem .75rem; gap: 4px; border-right: 1px solid rgba(255,255,255,0.07); }
.pd-fact:last-child { border-right: none; }
.pd-fact-value { font-size: 1.25rem; font-weight: 700; color: #fff; letter-spacing: -.5px; line-height: 1; }
.pd-fact-label { font-size: .65rem; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: .9px; }

/* RULE DIVIDER */
.pd-rule { height: 1px; background: rgba(255,255,255,0.07); margin: 2rem 0; }

/* SECTIONS */
.pd-section { margin-bottom: 0; }
.pd-section-label { font-size: .68rem; font-weight: 600; letter-spacing: 1.2px; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 1.25rem; }

/* USP LIST */
.pd-usp-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .6rem; }
.pd-usp-list li { font-size: .92rem; color: rgba(255,255,255,0.75); padding-left: 1rem; position: relative; line-height: 1.55; }
.pd-usp-list li::before { content: ''; position: absolute; left: 0; top: .55em; width: 5px; height: 1px; background: var(--accent, #c9a84c); }

/* COLS */
.pd-cols-4 { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 0; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; }
.pd-col { padding: 1.25rem 1.1rem; border-right: 1px solid rgba(255,255,255,0.07); }
.pd-col:last-child { border-right: none; }
.pd-col-title { font-size: .65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,0.3); margin-bottom: .85rem; }
.pd-col-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .4rem; }
.pd-col-list li { font-size: .83rem; color: rgba(255,255,255,0.65); line-height: 1.4; }

/* INLINE LIST (extras) */
.pd-inline-list { display: flex; flex-wrap: wrap; align-items: center; gap: .35rem; font-size: .88rem; color: rgba(255,255,255,0.6); }
.pd-sep { color: rgba(255,255,255,0.2); }

/* LOCATION */
.pd-location-row { display: flex; flex-wrap: wrap; gap: 1px; margin-bottom: 1.25rem; background: rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; }
.pd-loc-item { flex: 1 1 100px; display: flex; flex-direction: column; gap: 3px; padding: 1rem 1.1rem; background: rgba(255,255,255,0.02); }
.pd-loc-time { font-size: 1.05rem; font-weight: 700; color: #fff; letter-spacing: -.3px; }
.pd-loc-name { font-size: .75rem; color: rgba(255,255,255,0.4); }
.pd-maps-link { display: inline-block; font-size: .8rem; color: rgba(255,255,255,0.4); text-decoration: none; letter-spacing: .3px; transition: color .2s; border-bottom: 1px solid rgba(255,255,255,0.12); padding-bottom: 1px; }
.pd-maps-link:hover { color: rgba(255,255,255,.75); }

@media (max-width: 600px) {
  .pd-cols-4 { grid-template-columns: 1fr 1fr; }
  .pd-col { border-bottom: 1px solid rgba(255,255,255,0.07); }
  .pd-col:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.07); }
  .pd-col:nth-last-child(-n+2) { border-bottom: none; }
}
`;

// Update style.css — remove old v2 block and insert v3
let styleCss = fs.readFileSync('css/style.css', 'utf8');

// Remove old inserted premium blocks if they exist to avoid duplication
styleCss = styleCss.replace(/\/\* =====.*?Premium Description.*?=====[\s\S]*?(?=\/\* ===|$)/g, '');

fs.writeFileSync('css/style.css', styleCss.trimEnd() + '\n\n/* ===== Premium Description V3 ===== */\n' + premiumCss + '\n', 'utf8');
console.log('CSS updated (v3)');

for (let apt of data) {
    if (apt.id === '1 Mah') {
        apt.richDescription = { ru: richDescHtml, en: richDescHtml, tr: richDescHtml, de: richDescHtml };
        console.log('1 Mah updated with emoji-free premium V3!');
    }
}

fs.writeFileSync('js/data.js', `const apartmentsData = ${JSON.stringify(data, null, 2)};\n`, 'utf8');
console.log('Done!');
