const fs = require('fs');
const path = require('path');

const base = 'c:\\\\Users\\\\Александр\\\\OneDrive\\\\Рабочий стол\\\\alanya rent website';

function getGenericApt(id, number, photosDir, videoDir, videoFile, photos) {
    return `{
    "id": "${id}",
    "number": "${number}",
    "title": {
      "ru": "Premium Apartment ${number} (Махмутлар)",
      "en": "Premium Apartment ${number} (Mahmutlar)",
      "tr": "Premium Apartment ${number} (Mahmutlar)",
      "de": "Premium Apartment ${number} (Mahmutlar)"
    },
    "description": {
      "ru": "Эксклюзивные апартаменты в элитном комплексе с роскошной инфраструктурой и всем необходимым для отдыха.",
      "en": "Exclusive apartment in an elite complex with luxurious infrastructure and everything you need for a holiday.",
      "tr": "Lüks altyapıya ve tatil için ihtiyacınız olan her şeye sahip elit bir komplekste seçkin daire.",
      "de": "Exklusive Wohnung in einem elitären Komplex mit luxuriöser Infrastruktur und allem, was Sie für einen Urlaub brauchen."
    },
    "richDescription": {
      "ru": \`<div class="premium-desc">
    <div class="desc-section params-grid">
       <div class="param-card">
           <svg class="param-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
           <div class="param-val">65 м²</div>
           <div class="param-label">Площадь</div>
       </div>
       <div class="param-card">
           <svg class="param-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
           <div class="param-val">Средний этаж</div>
           <div class="param-label">Солнечная сторона</div>
       </div>
       <div class="param-card">
           <svg class="param-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
           <div class="param-val">1+1</div>
           <div class="param-label">Планировка (1 санузел)</div>
       </div>
       <div class="param-card">
           <svg class="param-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
           <div class="param-val">До 4 гостей</div>
           <div class="param-label">Вместимость</div>
       </div>
    </div>

    <div class="desc-divider"></div>

    <div class="desc-section about luxury-text-block">
       <p>Современный, стильный и невероятно комфортный интерьер. Эти апартаменты созданы для тех, кто ценит эстетику, чистоту и 100% готовность к проживанию.</p>
    </div>

    <div class="desc-divider"></div>

    <div class="desc-section benefits-grid-wrap">
       <h3 class="section-badge">Преимущества квартиры</h3>
       <div class="benefits-premium-grid">
           <div class="benefit-premium-card">
               <div class="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg></div>
               <div class="text-content">
                   <span class="bp-title">Премиум дизайн</span>
                   <span class="bp-desc">современный и уютный интерьер</span>
               </div>
           </div>
           <div class="benefit-premium-card">
               <div class="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
               <div class="text-content">
                   <span class="bp-title">Отличная локация</span>
                   <span class="bp-desc">рядом море и городская инфраструктура</span>
               </div>
           </div>
           <div class="benefit-premium-card">
               <div class="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div>
               <div class="text-content">
                   <span class="bp-title">Абсолютный комфорт</span>
                   <span class="bp-desc">вся бытовая техника и мебель</span>
               </div>
           </div>
           <div class="benefit-premium-card">
               <div class="icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
               <div class="text-content">
                   <span class="bp-title">Связь и развлечения</span>
                   <span class="bp-desc">быстрый интернет и Smart TV</span>
               </div>
           </div>
       </div>
    </div>

    <div class="desc-divider"></div>

    <div class="desc-section amenities-blocks">
       <h3 class="section-badge">Оснащение и удобства</h3>
       <div class="am-block-group">
           <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18"/></svg> Бытовая техника и кухня</h4>
           <div class="chips-list">
               <span>Холодильник</span>
               <span>Посудомоечная машина</span>
               <span>Микроволновка и Духовка</span>
               <span>Стиральная машина и Водонагреватель</span>
               <span>Электрочайник и Вытяжка</span>
           </div>
       </div>
       <div class="am-block-group">
           <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> Мебель и комфорт</h4>
           <div class="chips-list">
               <span>Удобная двуспальная кровать</span>
               <span>Раскладной диван</span>
               <span>Кондиционеры</span>
               <span>Современный телевизор</span>
               <span>Высокоскоростной интернет</span>
           </div>
       </div>
       <div class="am-block-group">
           <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> Домашний уют</h4>
           <div class="chips-list">
               <span>Пылесос</span>
               <span>Утюг и гладильная доска</span>
               <span>Сушилка для белья</span>
               <span>Полный набор посуды и текстиля</span>
           </div>
       </div>
    </div>

    <div class="desc-divider"></div>

    <div class="desc-section complex-grid-wrap">
       <h3 class="section-badge">Инфраструктура комплекса</h3>
       <div class="infra-grid">
           <div class="infra-card"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg><span>Открытый летний бассейн</span></div>
           <div class="infra-card"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg><span>Крытый бассейн с подогревом (в зимний сезон)</span></div>
           <div class="infra-card"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg><span>SPA: Сауна и Хамам</span></div>
           <div class="infra-card"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg><span>Современный фитнес-центр</span></div>
           <div class="infra-card"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><span>Детская игровая зона и настольный теннис</span></div>
           <div class="infra-card"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg><span>Зона барбекю, парковка и круглосуточная охрана</span></div>
       </div>
    </div>

    <div class="desc-divider"></div>

    <div class="desc-section extra-blocks">
       <h3 class="section-badge">Дополнительно и Локация</h3>
       <div class="extra-grid">
           <div class="extra-col">
               <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> Включено</h4>
               <ul class="clean-list">
                   <li>Постельное белье</li>
                   <li>Полотенца (включая пляжные)</li>
                   <li>Посуда и кухонные принадлежности</li>
               </ul>
           </div>
           <div class="extra-col">
               <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Локация</h4>
               <ul class="clean-list">
                   <li>Магазины, кафе и рестораны в шаговой доступности</li>
                   <li>Аптеки рядом с комплексом</li>
                   <li>Удобная транспортная развязка</li>
               </ul>
           </div>
       </div>
    </div>

    <div class="desc-divider"></div>

    <div class="desc-section utp">
       <div class="glass-promo">
           <h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Уровень Luxury</h3>
           <ul>
               <li>Безупречно подготовленные апартаменты для комфортного отдыха</li>
               <li>Пятизвездочная инфраструктура прямо в вашем доме</li>
               <li>Одна из лучших локаций на всем побережье</li>
           </ul>
       </div>
    </div>
</div>\`
    },
    "size": "1+1, 65m²",
    "price": "От €100 / сутки",
    "amenities": [
      "wifi",
      "pool",
      "ac",
      "parking",
      "kitchen"
    ],
    "photosDir": "${photosDir}",
    "photos": ${JSON.stringify(photos, null, 6)},
    "videoDir": "${videoDir}",
    "video": "${videoFile}"
  }`;
}

const p8 = fs.readdirSync(path.join(base, '8 Mah')).filter(f => !fs.statSync(path.join(base, '8 Mah', f)).isDirectory());
const p13 = fs.readdirSync(path.join(base, '13 Mah', 'Medium Quality')).filter(f => !fs.statSync(path.join(base, '13 Mah', 'Medium Quality', f)).isDirectory());
const p14 = fs.readdirSync(path.join(base, '14 Mah', 'Medium Quality')).filter(f => !fs.statSync(path.join(base, '14 Mah', 'Medium Quality', f)).isDirectory());

const o8 = getGenericApt("8 Mah", "8", "8 Mah", "8 Mah V", "IMG_3218.MOV", p8);
const o13 = getGenericApt("13 Mah", "13", "13 Mah/Medium Quality", "13 Mah V", "IMG_4203.mov", p13);
const o14 = getGenericApt("14 Mah", "14", "14 Mah/Medium Quality", "14 mah v", "IMG_2884.mov", p14);

fs.writeFileSync('c:\\\\Users\\\\Александр\\\\OneDrive\\\\Рабочий стол\\\\alanya rent website\\\\new_appts.js', ',\n' + o8 + ',\n' + o13 + ',\n' + o14 + '\n');
console.log('done');
