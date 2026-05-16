const fs = require('fs');

let dataStr = fs.readFileSync('js/data.js', 'utf8');
let jsonMatch = dataStr.match(/const apartmentsData = (\[[\s\S]*\]);/);
let data = JSON.parse(jsonMatch[1]);

const richDescHtml = `<div class="premium-desc">

  <!-- SHORT PREMIUM DESCRIPTION -->
  <p class="pd-lead-text">
    Современные апартаменты с дизайнерским интерьером и продуманной планировкой. Всё создано для комфортного отдыха — от мебели до инфраструктуры. Жизнь у моря без компромиссов.
  </p>

  <!-- QUICK FACTS BADGES -->
  <div class="pd-badges-row">
    <div class="pd-badge"><span class="pd-badge-value">50 м²</span><span class="pd-badge-label">Площадь</span></div>
    <div class="pd-badge"><span class="pd-badge-value">8</span><span class="pd-badge-label">Этаж</span></div>
    <div class="pd-badge"><span class="pd-badge-value">1+1</span><span class="pd-badge-label">Планировка</span></div>
    <div class="pd-badge"><span class="pd-badge-value">4</span><span class="pd-badge-label">Гостей</span></div>
    <div class="pd-badge"><span class="pd-badge-value">700 м</span><span class="pd-badge-label">До моря</span></div>
  </div>

  <!-- KEY ADVANTAGES -->
  <div class="pd-section">
    <h3 class="pd-section-title">Почему выбрать эту квартиру</h3>
    <div class="pd-usp-list">
      <div class="pd-usp-item"><span class="pd-usp-dot"></span><span>700 метров до моря — 5 минут пешком</span></div>
      <div class="pd-usp-item"><span class="pd-usp-dot"></span><span>Вид на бассейн — западная сторона,закаты</span></div>
      <div class="pd-usp-item"><span class="pd-usp-dot"></span><span>Концепция Art de Vivre — эксклюзивный интерьер, всё до мелочей</span></div>
      <div class="pd-usp-item"><span class="pd-usp-dot"></span><span>Инфраструктура уровня 5-звёздочного отеля</span></div>
      <div class="pd-usp-item"><span class="pd-usp-dot"></span><span>Полная комплектация — заезжай и живи</span></div>
    </div>
  </div>

  <!-- INFRASTRUCTURE -->
  <div class="pd-section">
    <h3 class="pd-section-title">Инфраструктура комплекса</h3>
    <div class="pd-infra-grid">
      <div class="pd-infra-card">
        <span class="pd-infra-icon">💧</span>
        <span class="pd-infra-group-title">Вода / SPA</span>
        <ul class="pd-infra-list">
          <li>Самый длинный открытый бассейн в Алании</li>
          <li>Крытый подогреваемый бассейн</li>
          <li>Сауна</li>
          <li>Хамам</li>
          <li>Парная комната</li>
        </ul>
      </div>
      <div class="pd-infra-card">
        <span class="pd-infra-icon">🏋️</span>
        <span class="pd-infra-group-title">Активности</span>
        <ul class="pd-infra-list">
          <li>Фитнесс зал</li>
          <li>Мультикорт</li>
          <li>Барбекю зона</li>
          <li>Лаундж зона</li>
          <li>Прогулочная территория</li>
        </ul>
      </div>
      <div class="pd-infra-card">
        <span class="pd-infra-icon">🎬</span>
        <span class="pd-infra-group-title">Развлечения</span>
        <ul class="pd-infra-list">
          <li>Кинотеатр</li>
          <li>Бильярд</li>
        </ul>
      </div>
      <div class="pd-infra-card">
        <span class="pd-infra-icon">🧒</span>
        <span class="pd-infra-group-title">Дети</span>
        <ul class="pd-infra-list">
          <li>Детская игровая комната</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- INSIDE THE APARTMENT -->
  <div class="pd-section">
    <h3 class="pd-section-title">Внутри квартиры</h3>
    <div class="pd-apartment-grid">
      <div class="pd-apartment-card">
        <span class="pd-apartment-icon">🍳</span>
        <span class="pd-infra-group-title">Кухня</span>
        <ul class="pd-infra-list">
          <li>Холодильник</li>
          <li>Посудомоечная машина</li>
          <li>Духовка</li>
          <li>Микроволновка</li>
          <li>Электрочайник</li>
          <li>Вытяжка</li>
          <li>Полный набор посуды</li>
        </ul>
      </div>
      <div class="pd-apartment-card">
        <span class="pd-apartment-icon">🛏️</span>
        <span class="pd-infra-group-title">Спальня</span>
        <ul class="pd-infra-list">
          <li>Двуспальная кровать</li>
          <li>TV 40" диагональ</li>
          <li>Кондиционер</li>
          <li>Письменный стол</li>
        </ul>
      </div>
      <div class="pd-apartment-card">
        <span class="pd-apartment-icon">🛋️</span>
        <span class="pd-infra-group-title">Гостиная</span>
        <ul class="pd-infra-list">
          <li>Раскладной диван (2 спальных места)</li>
          <li>TV 55" диагональ</li>
          <li>Кондиционер</li>
          <li>Балконная мебель</li>
        </ul>
      </div>
      <div class="pd-apartment-card">
        <span class="pd-apartment-icon">⚙️</span>
        <span class="pd-infra-group-title">Техника</span>
        <ul class="pd-infra-list">
          <li>Стиральная машина</li>
          <li>Водонагреватель</li>
          <li>Беспроводной пылесос</li>
          <li>Высокоскоростной интернет</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- ADDITIONAL INCLUSIONS -->
  <div class="pd-section">
    <h3 class="pd-section-title">Дополнительно включено</h3>
    <div class="pd-chips-grid">
      <span class="pd-chip">Wi-Fi</span>
      <span class="pd-chip">Постельное бельё (3 комплекта)</span>
      <span class="pd-chip">Полотенца</span>
      <span class="pd-chip">Пляжные полотенца</span>
      <span class="pd-chip">Утюг и гладилка</span>
      <span class="pd-chip">Вертикальная сушилка</span>
    </div>
  </div>

  <!-- LOCATION -->
  <div class="pd-section">
    <h3 class="pd-section-title">Локация</h3>
    <div class="pd-location-grid">
      <div class="pd-location-item"><span class="pd-location-time">5–7 мин</span><span class="pd-location-place">Пляж пешком</span></div>
      <div class="pd-location-item"><span class="pd-location-time">3 мин</span><span class="pd-location-place">BIM и Migros</span></div>
      <div class="pd-location-item"><span class="pd-location-time">5 мин</span><span class="pd-location-place">Кофейня CAP STORE</span></div>
      <div class="pd-location-item"><span class="pd-location-time">500 м</span><span class="pd-location-place">Магазины, кафе, аптеки</span></div>
    </div>
    <a href="https://maps.app.goo.gl/avJ2LnhYCdcm8ZSu8" target="_blank" rel="noopener" class="pd-maps-link">Открыть на Google Maps ↗</a>
  </div>

</div>`;

// Now add CSS for the new components
const extraCss = `
.pd-lead-text{font-size:1.05rem;line-height:1.75;color:rgba(255,255,255,0.78);margin-bottom:2rem;max-width:640px}
.pd-badges-row{display:flex;flex-wrap:wrap;gap:.75rem;margin-bottom:2.5rem}
.pd-badge{display:flex;flex-direction:column;align-items:center;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:.75rem 1.2rem;min-width:80px;gap:2px}
.pd-badge-value{font-size:1.2rem;font-weight:700;color:#fff;letter-spacing:-.5px}
.pd-badge-label{font-size:.7rem;color:rgba(255,255,255,0.45);text-transform:uppercase;letter-spacing:.5px}
.pd-usp-list{display:flex;flex-direction:column;gap:.65rem}
.pd-usp-item{display:flex;align-items:flex-start;gap:.75rem;font-size:.95rem;color:rgba(255,255,255,0.8)}
.pd-usp-dot{width:6px;height:6px;border-radius:50%;background:var(--accent,#c9a84c);flex-shrink:0;margin-top:.45rem}
.pd-infra-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:1rem}
.pd-infra-card,.pd-apartment-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:1.2rem 1rem}
.pd-infra-icon,.pd-apartment-icon{font-size:1.4rem;display:block;margin-bottom:.5rem}
.pd-infra-group-title{font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:rgba(255,255,255,0.5);display:block;margin-bottom:.6rem}
.pd-infra-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.3rem}
.pd-infra-list li{font-size:.875rem;color:rgba(255,255,255,0.75)}
.pd-apartment-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:1rem}
.pd-location-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:.85rem;margin-bottom:1.25rem}
.pd-location-item{background:rgba(255,255,255,0.05);border-radius:12px;padding:.9rem 1rem;display:flex;flex-direction:column;gap:.2rem}
.pd-location-time{font-size:1.1rem;font-weight:700;color:var(--accent,#c9a84c)}
.pd-location-place{font-size:.8rem;color:rgba(255,255,255,0.55)}
.pd-maps-link{display:inline-flex;align-items:center;gap:6px;color:var(--accent,#c9a84c);font-size:.875rem;text-decoration:none;opacity:.85;transition:opacity .2s}
.pd-maps-link:hover{opacity:1}
`;

// Inject CSS into style.css if the class doesn't exist yet
let styleCss = fs.readFileSync('css/style.css', 'utf8');
if (!styleCss.includes('.pd-badges-row')) {
    fs.appendFileSync('css/style.css', '\n/* ===== Premium Description New V2 Styles ===== */\n' + extraCss);
    console.log('CSS injected into style.css');
} else {
    console.log('CSS already present');
}

for (let apt of data) {
    if (apt.id === '1 Mah') {
        apt.richDescription = { ru: richDescHtml, en: richDescHtml, tr: richDescHtml, de: richDescHtml };
        console.log('1 Mah updated with premium redesigned richDescription!');
    }
}

fs.writeFileSync('js/data.js', `const apartmentsData = ${JSON.stringify(data, null, 2)};\n`, 'utf8');
console.log('Done!');
