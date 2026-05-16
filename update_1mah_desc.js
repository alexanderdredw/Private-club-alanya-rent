const fs = require('fs');

let dataStr = fs.readFileSync('js/data.js', 'utf8');
let jsonMatch = dataStr.match(/const apartmentsData = (\[[\s\S]*\]);/);
let data = JSON.parse(jsonMatch[1]);

const richDescription = `<div class="premium-desc">
  <div class="pd-params-grid">
    <div class="pd-param-item"><span class="pd-param-icon">🏢</span><div><span class="pd-param-label">Комплекс</span><span class="pd-param-value">GREEN OCEAN Art de Vivre</span></div></div>
    <div class="pd-param-item"><span class="pd-param-icon">📍</span><div><span class="pd-param-label">Район</span><span class="pd-param-value">Алания, Махмутлар</span></div></div>
    <div class="pd-param-item"><span class="pd-param-icon">🏖️</span><div><span class="pd-param-label">До моря</span><span class="pd-param-value">700 метров</span></div></div>
    <div class="pd-param-item"><span class="pd-param-icon">🏠</span><div><span class="pd-param-label">Планировка</span><span class="pd-param-value">1+1, 50 м²</span></div></div>
    <div class="pd-param-item"><span class="pd-param-icon">🏨</span><div><span class="pd-param-label">Этаж</span><span class="pd-param-value">8 этаж</span></div></div>
    <div class="pd-param-item"><span class="pd-param-icon">🌅</span><div><span class="pd-param-label">Вид</span><span class="pd-param-value">На бассейн, западная сторона</span></div></div>
    <div class="pd-param-item"><span class="pd-param-icon">👥</span><div><span class="pd-param-label">Вместимость</span><span class="pd-param-value">3–4 человека</span></div></div>
    <div class="pd-param-item"><span class="pd-param-icon">📍</span><div><span class="pd-param-label">На карте</span><span class="pd-param-value"><a href="https://maps.app.goo.gl/avJ2LnhYCdcm8ZSu8" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: none;">Открыть Google Maps ↗</a></span></div></div>
  </div>

  <div class="pd-section">
    <h3 class="pd-section-title">🛋️ Мебель и техника</h3>
    <div class="pd-chips-grid">
      <span class="pd-chip">Холодильник</span>
      <span class="pd-chip">Стиральная машина</span>
      <span class="pd-chip">Посудомоечная машина</span>
      <span class="pd-chip">Микроволновка</span>
      <span class="pd-chip">Духовка</span>
      <span class="pd-chip">Электрочайник</span>
      <span class="pd-chip">Вытяжка</span>
      <span class="pd-chip">Водонагреватель</span>
      <span class="pd-chip">Двуспальная кровать</span>
      <span class="pd-chip">Раскладной диван (2 места)</span>
      <span class="pd-chip">2 кондиционера</span>
      <span class="pd-chip">Беспроводной пылесос</span>
      <span class="pd-chip">TV 55" в гостиной</span>
      <span class="pd-chip">TV 40" в спальне</span>
    </div>
  </div>

  <div class="pd-section">
    <h3 class="pd-section-title">🏊 Инфраструктура комплекса</h3>
    <div class="pd-chips-grid">
      <span class="pd-chip pd-chip-gold">Самый длинный открытый бассейн в Алании</span>
      <span class="pd-chip">Крытый подогреваемый бассейн</span>
      <span class="pd-chip">Барбекю зона</span>
      <span class="pd-chip">Лаундж зона</span>
      <span class="pd-chip">Сауна</span>
      <span class="pd-chip">Хамам</span>
      <span class="pd-chip">Парная комната</span>
      <span class="pd-chip">Бильярд</span>
      <span class="pd-chip">Фитнесс зал</span>
      <span class="pd-chip">Мультикорт</span>
      <span class="pd-chip">Кинотеатр</span>
      <span class="pd-chip">Детская игровая комната</span>
      <span class="pd-chip">Прогулочная территория</span>
    </div>
  </div>

  <div class="pd-section">
    <h3 class="pd-section-title">✅ Включено в стоимость</h3>
    <div class="pd-chips-grid">
      <span class="pd-chip">Посуда</span>
      <span class="pd-chip">Постельное бельё (3 комплекта)</span>
      <span class="pd-chip">Полотенца</span>
      <span class="pd-chip">Пляжные полотенца</span>
      <span class="pd-chip">Беспроводной пылесос</span>
      <span class="pd-chip">Утюг и гладилка</span>
      <span class="pd-chip">Вертикальная сушилка</span>
    </div>
  </div>

  <div class="pd-section">
    <h3 class="pd-section-title">📍 Что рядом</h3>
    <div class="pd-benefits-list">
      <div class="pd-benefit-item"><span class="pd-benefit-icon">🛒</span><span>Супермаркеты BIM и Migros — 3 мин пешком</span></div>
      <div class="pd-benefit-item"><span class="pd-benefit-icon">🏖️</span><span>Пляж — 5–7 минут пешком по прямой</span></div>
      <div class="pd-benefit-item"><span class="pd-benefit-icon">🏪</span><span>Магазины, кафе, аптеки — в радиусе 500 м</span></div>
      <div class="pd-benefit-item"><span class="pd-benefit-icon">☕</span><span>Кофейня CAP STORE — 5 мин пешком</span></div>
    </div>
  </div>

  <div class="pd-section">
    <h3 class="pd-section-title">⭐ Особенности квартиры</h3>
    <div class="pd-benefits-list">
      <div class="pd-benefit-item"><span class="pd-benefit-icon">✨</span><span>Эксклюзивный дизайн интерьера — продумано всё до мелочей</span></div>
      <div class="pd-benefit-item"><span class="pd-benefit-icon">🏊</span><span>Персональный выход к бассейну с первого этажа</span></div>
      <div class="pd-benefit-item"><span class="pd-benefit-icon">🌿</span><span>Приватная зона с выходом к бассейну</span></div>
      <div class="pd-benefit-item"><span class="pd-benefit-icon">🪑</span><span>Балконная мебель</span></div>
      <div class="pd-benefit-item"><span class="pd-benefit-icon">🚿</span><span>3 санузла: гостевой туалет + 2 ванные с душевыми</span></div>
      <div class="pd-benefit-item"><span class="pd-benefit-icon">💻</span><span>Письменный стол, телевизор, высокоскоростной интернет</span></div>
    </div>
  </div>
</div>`;

for (let apt of data) {
    if (apt.id === '1 Mah') {
        apt.richDescription = richDescription;
        apt.size = '1+1, 50m²';
        apt.number = '1';
        apt.amenities = ['wifi', 'pool', 'ac', 'kitchen', 'washer', 'dishwasher', 'sauna', 'gym', 'parking'];
        console.log('Updated 1 Mah with full richDescription!');
    }
}

fs.writeFileSync('js/data.js', `const apartmentsData = ${JSON.stringify(data, null, 2)};\n`, 'utf8');
console.log('Done!');
