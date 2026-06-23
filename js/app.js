// Application State
const state = {
    lang: 'ru',
    apartments: []
};

// Translations Dictionary
const translations = {
    ru: {
        floating_wa: "Напишите нам — мы подберем идеальный вариант",
        nav_home: "Главная",
        nav_apartments: "Квартиры",
        nav_about: "Об Алании",
        nav_management: "Управление",
        nav_club: "О Клубе",
        nav_contact: "Контакты",
        btn_catalog: "Смотреть апартаменты",
        btn_wa: "Связаться",
        btn_back: "Назад",
        btn_details: "Подробнее",
        gallery_hint: "Кликните на фото для увеличения",
        location_city: "Алания",
        status_available: "Доступно",
        booking_subtitle: "Свяжитесь с нами напрямую для бронирования или уточнения деталей.",
        perk_direct: "Прямая аренда без комиссий",
        perk_best_price: "Гарантия лучшей цены",
        perk_fast_confirm: "Быстрое подтверждение",
        booking_hint: "Обычно отвечаем в течение 5 минут",
        footer_disclaimer: "Fortuna Private Club является частным информационным ресурсом и экспертной lifestyle-платформой. Портал не является туроператором, туристическим агентством, арендодателем или исполнителем сервисных услуг. Все вопросы проживания, аренды, трансфера и дополнительных сервисов согласуются напрямую между гостями, владельцами объектов и независимыми лицензированными партнерами.",
        wa_contact_prefix: "Здравствуйте! Меня интересует: ",
        cta_more_title: "Откройте больше вариантов жилья",
        cta_more_btn: "Смотреть все апартаменты",
        review_quote: "Очень чистая квартира и отличный вид на море. Рекомендуем!",
        review_author: "— Александр, Москва",
        // Management Page
        mgmt_hero_title: "Искусство управления вашей недвижимостью в Алании",
        mgmt_hero_sub: "От пустых стен до премиального арендного бизнеса. Мы создаём интерьеры, которые приносят доход.",
        mgmt_btn_discuss: "Связаться",
        mgmt_badge_1: "Оживите ваши инвестиции",
        mgmt_title_1: "От потенциала к прибыли",
        mgmt_text_1: "Часто покупка недвижимости в Турции сопровождается большими ожиданиями от аренды и доходности. Однако на практике многие владельцы сталкиваются с тем, что квартира остаётся закрытой, а инвестиционный потенциал — нереализованным. Если ваш объект сейчас пустует или не приносит желаемого результата, ему просто не хватает финального профессионального шага. Мы помогаем превратить «просто покупку» в работающий актив. Пока другие дают обещания, мы берём на себя реализацию: от полной комплектации пустой квартиры мебелью и техникой до авторского хоумстейджинга. Мы создаём продукт, который выделяется на рынке и начинает приносить доход с первых дней.",
        mgmt_service_title_1: "Готовый арендный бизнес",
        mgmt_service_desc_1: "Превращаем пустые пространства в полностью укомплектованный объект, готовый к сдаче с первого дня.",
        mgmt_service_title_2: "Комплектация под бюджет",
        mgmt_service_desc_2: "Подбираем мебель и технику под ваши задачи и бюджет — от базового до премиального уровня.",
        mgmt_service_title_3: "Хоумстейджинг",
        mgmt_service_desc_3: "Авторская постановка интерьера, создающая добавленную стоимость объекта и увеличивающая конверсию.",
        mgmt_badge_2: "Доверительное управление",
        mgmt_title_2: "Полный цикл и безупречный сервис",
        mgmt_text_2: "Доверьте нам все заботы по поиску арендаторов и содержанию объекта. Мы обеспечиваем максимальную доходность и сохраняем вашу квартиру в идеальном состоянии.",
        mgmt_service_title_4: "Международный маркетинг",
        mgmt_service_desc_4: "Размещение на топовых международных площадках. Профессиональная фотосъёмка и премиальное описание.",
        mgmt_service_title_5: "Сервис 5★ и клининг",
        mgmt_service_desc_5: "Техническое обслуживание, уборка по стандартам пятизвёздочного отеля после каждого гостя.",
        mgmt_service_title_6: "Прозрачная отчётность",
        mgmt_service_desc_6: "Контроль оплат, ежемесячные отчёты и полная прозрачность всех финансовых операций.",
        mgmt_cta_title: "Готовы превратить недвижимость в актив?",
        mgmt_cta_sub: "Свяжитесь с нами — мы разработаем индивидуальную стратегию управления вашим объектом.",
        mgmt_btn_telegram: "Связаться",
        nav_club: "О Клубе"
    },
    en: {
        floating_wa: "Contact us today — we'll find your perfect apartment",
        nav_home: "Home",
        nav_apartments: "Apartments",
        nav_about: "About Alanya",
        nav_management: "Management",
        nav_contact: "Contact",
        btn_catalog: "View Apartments",
        btn_wa: "Contact",
        btn_back: "Back",
        btn_details: "Details",
        gallery_hint: "Click on photo to enlarge",
        location_city: "Alanya",
        status_available: "Available",
        booking_subtitle: "Contact us directly to discuss booking or property details.",
        perk_direct: "Direct rental, no commissions",
        perk_best_price: "Best price guarantee",
        perk_fast_confirm: "Fast confirmation",
        booking_hint: "We usually respond within 5 minutes",
        footer_disclaimer: "Fortuna Private Club is a private information resource and an expert lifestyle platform. The portal is not a tour operator, travel agency, landlord, or service provider. All issues regarding stay, rental, transfer, and additional services are agreed upon directly between guests, property owners, and independent licensed partners.",
        wa_contact_prefix: "Hello! I am interested in: ",
        cta_more_title: "Discover more housing options",
        cta_more_btn: "View all apartments",
        review_quote: "Very clean apartment and excellent sea view. Highly recommended!",
        review_author: "— Alex, London",
        // Management Page
        mgmt_hero_title: "The Art of Property Management in Alanya",
        mgmt_hero_sub: "From bare walls to a premium rental business. We create interiors that generate income.",
        mgmt_btn_discuss: "Contact",
        mgmt_badge_1: "Revive Your Investments",
        mgmt_title_1: "From Potential to Profit",
        mgmt_text_1: "Often, buying property in Turkey comes with high expectations for rent and yield. However, in practice, many owners find their apartments remain closed, and investment potential unrealized. If your property is currently vacant or not bringing the desired results, it simply lacks a final professional step. We help turn 'just a purchase' into a working asset. While others make promises, we take on the execution: from full furnishing of an empty apartment to professional homestaging. We create a product that stands out in the market and starts generating income from day one.",
        mgmt_service_title_1: "Ready-to-Rent Business",
        mgmt_service_desc_1: "Turning empty spaces into a fully equipped property ready for rent from day one.",
        mgmt_service_title_2: "Furnishing to Budget",
        mgmt_service_desc_2: "Selecting furniture and appliances based on your needs and budget — from basic to premium.",
        mgmt_service_title_3: "Homestaging",
        mgmt_service_desc_3: "Professional interior staging that creates added value and increases conversion.",
        mgmt_badge_2: "Trust Management",
        mgmt_title_2: "Full Cycle and Flawless Service",
        mgmt_text_2: "Trust us with all the worries of finding tenants and maintaining your property. We ensure maximum yield and keep your apartment in perfect condition.",
        mgmt_service_title_4: "International Marketing",
        mgmt_service_desc_4: "Listing on top international platforms. Professional photography and premium descriptions.",
        mgmt_service_title_5: "5★ Service and Cleaning",
        mgmt_service_desc_5: "Technical maintenance and cleaning to five-star hotel standards after each guest.",
        mgmt_service_title_6: "Transparent Reporting",
        mgmt_service_desc_6: "Payment control, monthly reports, and full transparency of all financial transactions.",
        mgmt_cta_title: "Ready to turn your property into an asset?",
        mgmt_cta_sub: "Get in touch — we will develop a personalized management strategy for your property.",
        mgmt_btn_telegram: "Contact",
        nav_club: "About Club"
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    // Load data from global variable set by data.js
    if (typeof apartmentsData !== 'undefined') {
        state.apartments = apartmentsData;
        console.log("Loaded apartments:", state.apartments.length);
    } else {
        console.error("Apartments data not found!");
    }

    initLanguageSwitcher();
    initScrollEffects();
    initParticles();

    // ── SEO ROUTER: Resolve the current URL on initial page load ──
    // This handles direct URL access and page refreshes at any route.
    if (window.router) {
        const resolved = window.router.resolveRoute(window.location.pathname);
        const view = resolved.view || 'home';
        const id   = resolved.id   || null;

        // Replace current history state with structured data (no new entry)
        try {
            history.replaceState({ view, id }, '', window.location.pathname);
        } catch(e) {
            console.warn("History API is restricted (likely running from file://). Routing works internally.");
        }

        // Update SEO meta for the initial page
        window.router.updateSEO(view, id);

        // Render the resolved page
        navigateInternal(view, id);
    } else {
        // Fallback if router.js failed to load
        renderHome();
    }
});

// Translation Helper
function t(key) {
    if (!translations[state.lang]) state.lang = 'ru';
    return translations[state.lang][key] || key;
}

// YouTube Helper
function getYouTubeId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Title formatting helper
function formatTitleHTML(titleStr, apt = null, isCatalog = false) {
    if (!titleStr) return '';
    
    if (typeof apt === 'boolean') {
        isCatalog = apt;
        apt = null;
    }
    
    if (isCatalog) {
        // Strip out "Art de Vivre" for a shorter preview title
        titleStr = titleStr.replace(' Art de Vivre', '');
    }
    
    // Extract the badge part (e.g., " 2+1", " 1+1 Duplex") but only keep the "2+1" for the badge text
    let badgeMatch = titleStr.match(/\s*(\d\+\d)(?: Дуплекс| Dbl)?/i);
    let badgeHTML = '';
    
    if (badgeMatch) {
        // Remove the full matched text (including "Дуплекс") from the title string and trim
        titleStr = titleStr.replace(badgeMatch[0], '').trim();
        badgeHTML = `<span class="apt-badge">${badgeMatch[1]}</span>`;
    } else if (apt && apt.size) {
        let sizeStr = typeof apt.size === 'object' ? (apt.size[state.lang] || apt.size['ru']) : apt.size;
        if (sizeStr) {
            let sizeMatch = sizeStr.match(/^(\d\+\d)(?: Дуплекс| Dbl)?/i);
            if (sizeMatch) {
                badgeHTML = `<span class="apt-badge">${sizeMatch[1]}</span>`;
            }
        }
    }
    
    // Professional typography: bind short prepositions to the next word with a non-breaking space
    titleStr = titleStr.replace(/(^|\s)([вскоуиаВсКОУИА]|за|на|по|из|от|до|За|На|По|Из|От|До)\s+/g, '$1$2&nbsp;');
    
    if (badgeHTML) {
        // Professional typography: keep the last word and badge together to prevent orphaned badges
        const words = titleStr.split(' ');
        if (words.length > 0) {
            const lastWord = words.pop();
            const rest = words.join(' ');
            return (rest ? rest + ' ' : '') + `<span style="white-space: nowrap;">${lastWord}&nbsp;${badgeHTML}</span>`;
        }
        return titleStr + '&nbsp;' + badgeHTML;
    }
    
    return titleStr;
}

function formatPriceHTML(priceStr) {
    if (!priceStr) return '';
    // Bind "От" to the value, and keep currency with number, but allow break at slash
    return priceStr
        .replace(/От\s+/g, 'От&nbsp;')
        .replace(/(\d)\s+(€|\$|£|₺)/g, '$1&nbsp;$2')
        .replace(/\s+\/\s+/g, ' / '); // Allow wrap at slash for catalog cards if space is tight
}

function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translatedText = t(key);
        
        // Handle elements with nested HTML structure carefully
        if (el.classList.contains('floating-tg')) {
            const textSpan = el.querySelector('.tg-text');
            if (textSpan && translatedText) textSpan.textContent = translatedText;
        } else if (el.classList.contains('footer-disclaimer')) {
            if (translatedText) el.textContent = translatedText;
        } else {
            if (translatedText) el.textContent = translatedText;
        }
    });
}

function initLanguageSwitcher() {
    const switcher = document.getElementById('lang-switcher');
    
    // Top nav switcher
    if (switcher) {
        switcher.addEventListener('click', (e) => {
            if (e.target.tagName === 'SPAN') {
                const nextLang = e.target.getAttribute('data-lang');
                switchLanguage(nextLang, switcher);
            }
        });
    }

    // Floating toggle button
    const floatingSwitcher = document.getElementById('floating-lang-toggle');
    if (floatingSwitcher) {
        floatingSwitcher.addEventListener('click', () => {
            const nextLang = state.lang === 'ru' ? 'en' : 'ru';
            switchLanguage(nextLang, switcher);
        });
    }
}

function switchLanguage(nextLang, topSwitcher) {
    state.lang = nextLang;
    
    // Update top nav visuals
    if (topSwitcher) {
        topSwitcher.querySelectorAll('span').forEach(s => {
            s.classList.toggle('active', s.getAttribute('data-lang') === nextLang);
        });
    }
    
    // Update floating button visuals (shows the current active language)
    const floatingText = document.getElementById('floating-lang-text');
    if (floatingText) {
        floatingText.textContent = nextLang.toUpperCase();
    }
    
    // Re-render UI views
    updateTranslations();
    if (state.currentView === 'home') renderHome();
    else if (state.currentView === 'catalog') renderCatalog();
    else if (state.currentView === 'about') renderAbout();
    else if (state.currentView === 'management') renderManagement();
    else if (state.currentView === 'club') renderClub();
    else if (state.currentView === 'apartment') renderApartment(state.activeAptId);
    else if (state.currentView === 'landmark') renderLandmark(state.activeAptId);
}

function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    // Efficient Navbar Scroll Handler
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
        if (lastScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px 50px 0px' });

    window.scrollObserver = observer;
}

function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    container.innerHTML = ''; // Clear old particles

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.classList.add('light-particle');
        
        const size = Math.random() * 100 + 50;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        // GPU acceleration for particles
        particle.style.willChange = 'transform';
        
        fragment.appendChild(particle);
    }
    container.appendChild(fragment);
}

// Data & Dictionary Setup
Object.assign(translations.ru, {
    hero_title: "Жизнь у Средиземного моря",
    hero_sub: "Премиальная аренда квартир в Алании",
    btn_catalog: "Смотреть апартаменты",
    btn_wa: "Связаться",
    benefit_1_title: "200 метров до моря",
    benefit_2_title: "Дизайнерские квартиры",
    benefit_3_title: "Лучшие районы Алании",
    benefit_4_title: "Премиальный сервис",
    lifestyle_title: "Жизнь у моря в Алании",
    lifestyle_desc: "300+ солнечных дней в году, красивые пляжи, рестораны, яхты, мягкий климат и расслабленная атмосфера.",
    featured_title: "Избранные апартаменты",
    btn_details: "Подробнее",
    btn_photos: "Посмотреть фото",
    btn_video: "Видео",
    desc_title: "Описание",
    amenities_title: "Что включено",
    btn_book: "Связаться",
    reviews_title: "Отзывы",
    contact_title: "Связаться с нами",
    btn_call: "Позвонить",
    btn_email: "Email"
});

Object.assign(translations.en, {
    hero_title: "Life by the Mediterranean Sea",
    hero_sub: "Premium apartment rentals in Alanya",
    btn_catalog: "View Apartments",
    btn_wa: "Contact",
    benefit_1_title: "200 meters to the sea",
    benefit_2_title: "Designer apartments",
    benefit_3_title: "Best districts of Alanya",
    benefit_4_title: "Premium service",
    lifestyle_title: "Life by the sea in Alanya",
    lifestyle_desc: "300+ sunny days a year, beautiful beaches, restaurants, yachts, mild climate and relaxed atmosphere.",
    featured_title: "Featured Apartments",
    btn_details: "Details",
    btn_photos: "View Photos",
    btn_video: "View Video",
    desc_title: "Description",
    amenities_title: "What's included",
    btn_book: "Contact",
    reviews_title: "Reviews",
    contact_title: "Contact Us",
    btn_call: "Call Us",
    btn_email: "Email"
});

// Update logic to maintain current route (Home vs Detail)
state.currentView = null;
state.activeAptId = null;

/**
 * navigate() — Public navigation function.
 * Pushes a new history entry and updates SEO on every call.
 */
function navigate(view, id = null) {
    if(window.galleryState) {
        if(window.galleryState.interval) clearInterval(window.galleryState.interval);
        if(window.galleryState.timeout) clearTimeout(window.galleryState.timeout);
        window.galleryState.interval = null;
        window.galleryState.timeout = null;
    }

    // ── SEO ROUTER: Push the new URL to the browser address bar ──
    if (window.router) {
        if (view === 'back_from_apartment') {
            // Going back to catalog — push /apartments
            window.router.pushRoute('catalog', null);
            window.router.updateSEO('catalog', null);
        } else {
            window.router.pushRoute(view, id);
            window.router.updateSEO(view, id);
        }
    }

    // Delegate actual rendering to the internal function
    navigateInternal(view, id);
}

/**
 * navigateInternal() — Renders a page WITHOUT pushing a history entry.
 * Called by: navigate() and the popstate handler in router.js.
 */
function navigateInternal(view, id = null) {
    if(window.galleryState) {
        if(window.galleryState.interval) clearInterval(window.galleryState.interval);
        if(window.galleryState.timeout) clearTimeout(window.galleryState.timeout);
        window.galleryState.interval = null;
        window.galleryState.timeout = null;
    }

    if (view === 'apartment' && state.currentView !== 'apartment') {
        state.previousView = state.currentView;
        state.previousScrollY = window.scrollY || document.documentElement.scrollTop;
    }

    if (view === 'back_from_apartment') {
        const lastAptId = state.activeAptId;
        const targetView = 'catalog';
        state.currentView = targetView;
        state.activeAptId = null;

        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.nav-item[onclick*="' + targetView + '"]').forEach(el => el.classList.add('active'));

        renderCatalog();

        setTimeout(() => {
            if (lastAptId) {
                const cardEl = document.querySelector(`.apt-card[onclick*="'${lastAptId}'"]`);
                if (cardEl) {
                    const y = cardEl.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: y, behavior: 'auto' });
                    return;
                }
            }
            window.scrollTo({ top: state.previousScrollY || 0, behavior: 'auto' });
        }, 50);
        return;
    }

    // Prevent redundant navigation if already on the requested view
    if (state.currentView === view && (!id || state.activeAptId === id)) {
        if (view !== 'back_from_apartment') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
    }

    state.currentView = view;
    state.activeAptId = id;

    // Update active nav highlight
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const activeNav = document.querySelector('.nav-item[onclick*="' + view + '"]');
    if (activeNav) activeNav.classList.add('active');

    // Scroll to top
    if (view !== 'back_from_apartment') {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }

    if (view === 'home') renderHome();
    else if (view === 'catalog') renderCatalog();
    else if (view === 'about') renderAbout();
    else if (view === 'management') renderManagement();
    else if (view === 'club') renderClub();
    else if (view === 'apartment') renderApartment(id);
    else if (view === 'landmark') renderLandmark(id);
    else if (view === 'article') renderArticle(id);
}

function renderHome() {
    try {
        console.log("Starting renderHome...");
        const appEl = document.getElementById('app-content');
        if (!appEl) {
            console.error("ERROR: app-content element not found");
            return;
        }
        
        // Pick first 6 apartments for featured
        const featured = state.apartments.slice(0, 6);
        console.log("Featured apartments count:", featured.length);
        
        const luxuryIcons = {
            sea: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 17c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><circle cx="12" cy="7" r="3"/></svg>`,
            design: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M13 7l6 3v11"/><path d="M9 9v1"/><path d="M9 13v1"/><path d="M9 17v1"/></svg>`,
            location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
            service: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3L8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>`
        };

        const benefitsHtml = [
            {icon: luxuryIcons.sea, i18n: 'benefit_1_title'},
            {icon: luxuryIcons.design, i18n: 'benefit_2_title'},
            {icon: luxuryIcons.location, i18n: 'benefit_3_title'},
            {icon: luxuryIcons.service, i18n: 'benefit_4_title'}
        ].map(b => `
            <div class="benefit-card reveal">
                <div class="benefit-icon">${b.icon}</div>
                <h3 data-i18n="${b.i18n}">${t(b.i18n)}</h3>
            </div>
        `).join('');

        const featuredHtml = featured.map((apt, index) => {
            const localTitle = apt.title[state.lang] || apt.title['ru'];
            const localDesc = apt.description[state.lang] || apt.description['ru'];
            const mainImage = apt.photos.length > 0 ? (apt.photos[0].startsWith('http') ? apt.photos[0] : `/${apt.photosDir}/${apt.photos[0]}`) : '';
            return `
            <div class="apt-card reveal-up" style="transition-delay: ${index * 0.1}s" onclick="navigate('apartment', '${apt.id}')">
                <div class="apt-image">
                    <img src="${mainImage}" alt="${localTitle}" loading="lazy">
                </div>
                <div class="apt-details">
                    <h3 class="apt-title">${formatTitleHTML(localTitle, apt, true)}</h3>
                    <p class="apt-desc">${localDesc}</p>
                    <div class="apt-footer">
                        <span class="apt-price">${typeof apt.price === 'object' ? formatPriceHTML(apt.price[state.lang] || apt.price['ru']) : formatPriceHTML(apt.price)}</span>
                        &nbsp;
                        <button class="apt-btn">
                            <span data-i18n="btn_details">${t('btn_details')}</span>
                            <span class="arrow">→</span>
                        </button>
                    </div>
                </div>
            </div>
            `;
        }).join('');

        const htmlStr = `
            <section class="hero transition-fade">
                <div class="hero-bg" id="parallax-bg"></div>
                <div class="hero-overlay"></div>
                <div class="moving-lines"></div>
                <div class="hero-content reveal-up">
                    <h1 data-i18n="hero_title">${t('hero_title')}</h1>
                    <p data-i18n="hero_sub">${t('hero_sub')}</p>
                    <div class="hero-buttons">
                        <button class="btn-primary" onclick="document.getElementById('featured').scrollIntoView({behavior: 'smooth'})">
                            <span data-i18n="btn_catalog">${t('btn_catalog')}</span>
                            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                        <a href="https://t.me/fortuna_private_club" target="_blank" class="btn-secondary">
                            <svg class="btn-icon-left" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48.99-.73 3.88-1.69 6.46-2.8 7.74-3.35 3.68-1.56 4.44-1.83 4.94-1.84.11 0 .35.03.51.16.14.12.18.28.19.39.01.07.01.21 0 .33z"></path>
                            </svg>
                            <span data-i18n="btn_wa">${t('btn_wa')}</span>
                        </a>
                    </div>
                </div>
            </section>

            <section class="benefits">
                <div class="benefits-grid">
                    ${benefitsHtml}
                </div>
            </section>

            <section class="lifestyle">
                <div class="lifestyle-glow"></div>
                <div class="lifestyle-content">
                    <h2 class="reveal-up" style="transition-delay: 0.1s" data-i18n="lifestyle_title">${t('lifestyle_title')}</h2>
                    <p class="reveal-up" style="transition-delay: 0.3s" data-i18n="lifestyle_desc">${t('lifestyle_desc')}</p>
                    <div class="lifestyle-actions reveal-up" style="transition-delay: 0.5s">
                        <button class="btn-primary glow-on-hover" onclick="document.getElementById('featured').scrollIntoView({behavior: 'smooth'})" data-i18n="btn_catalog">${t('btn_catalog')}</button>
                    </div>
                </div>
                <div class="lifestyle-image-panel reveal-scale">
                    <img src="/assets/images/hero_alanya.png" alt="Premium lifestyle">
                </div>
            </section>

            <section id="featured" class="apartments">
                <div class="section-header reveal-up">
                    <h2 data-i18n="featured_title">${t('featured_title')}</h2>
                </div>
                <div class="apartments-grid">
                    ${featuredHtml}
                </div>
                <div class="apartments-cta reveal-up" style="transition-delay: 0.2s">
                    <p data-i18n="cta_more_title">${t('cta_more_title')}</p>
                    <button class="btn-primary" onclick="navigate('catalog')">
                        <span class="btn-text" data-i18n="cta_more_btn">${t('cta_more_btn')}</span>
                        <span class="arrow">→</span>
                    </button>
                </div>
            </section>
        `;
        
        appEl.innerHTML = htmlStr;
        
        // Optimizing image decoding for immediate smoothness
        const criticalImages = appEl.querySelectorAll('img');
        criticalImages.forEach(img => {
            if (img.complete) return;
            if (typeof img.decode === 'function') {
                img.decode().then(() => {
                    img.style.opacity = '1';
                }).catch(() => {
                    img.style.opacity = '1';
                });
            } else {
                img.style.opacity = '1';
            }
        });

        // Parallax effect on hero
        const bg = document.getElementById('parallax-bg');
        if (bg) {
            let lastMX = 0, lastMY = 0;
            let mTicking = false;

            const updateMouseParallax = () => {
                const x = (lastMX / window.innerWidth - 0.5) * 20;
                const y = (lastMY / window.innerHeight - 0.5) * 20;
                bg.style.transform = `translate3d(${-x}px, ${-y}px, 0) scale(1.05)`;
                mTicking = false;
            };

            appEl.addEventListener('mousemove', (e) => {
                if(window.scrollY > 800) return;
                lastMX = e.clientX;
                lastMY = e.clientY;
                if (!mTicking) {
                    window.requestAnimationFrame(updateMouseParallax);
                    mTicking = true;
                }
            }, { passive: true });
        }

        observeNewElements();
        console.log("renderHome completed successfully.");
    } catch (err) {
        console.error("ERROR IN RENDERHOME:", err);
    }
}

function observeNewElements() {
    document.querySelectorAll('.reveal, .reveal-up, .transition-fade, .reveal-scale, .reveal-vs, .reveal-left, .reveal-right').forEach(el => {
        if(window.scrollObserver) window.scrollObserver.observe(el);
    });

    // Mobile: Toggle active class on tap for cards with hidden content
    document.querySelectorAll('.nature-img-card, .bento-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                const isActive = this.classList.contains('active');
                if (!isActive) {
                    document.querySelectorAll('.nature-img-card.active, .bento-card.active').forEach(c => c.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });

    initSmoothAccordions();
}

/**
 * Smooth animated accordion for <details> panels.
 * Intercepts the native toggle and animates height instead.
 */
function initSmoothAccordions() {
    document.querySelectorAll('.pd-details-panel').forEach(details => {
        // Prevent double-initialisation
        if (details.dataset.accordionInit) return;
        details.dataset.accordionInit = '1';

        const summary = details.querySelector('.pd-panel-header');
        const content = details.querySelector('.pd-panel-content');
        if (!summary || !content) return;

        // Keep content in DOM but hidden when closed
        content.style.overflow = 'hidden';

        summary.addEventListener('click', e => {
            e.preventDefault();

            if (details.open) {
                // --- CLOSING ---
                const startH = content.scrollHeight;
                content.style.height = startH + 'px';

                requestAnimationFrame(() => {
                    content.style.transition = 'height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease';
                    content.style.height = '0px';
                    content.style.opacity = '0';
                });

                content.addEventListener('transitionend', function handler(ev) {
                    if (ev.propertyName !== 'height') return;
                    details.removeAttribute('open');
                    content.style.transition = '';
                    content.style.height = '';
                    content.style.opacity = '';
                    content.removeEventListener('transitionend', handler);
                });

            } else {
                // --- OPENING ---
                details.setAttribute('open', '');
                const targetH = content.scrollHeight;

                content.style.height = '0px';
                content.style.opacity = '0';

                requestAnimationFrame(() => {
                    content.style.transition = 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease';
                    content.style.height = targetH + 'px';
                    content.style.opacity = '1';
                });

                content.addEventListener('transitionend', function handler(ev) {
                    if (ev.propertyName !== 'height') return;
                    content.style.transition = '';
                    content.style.height = '';
                    content.style.opacity = '';
                    content.removeEventListener('transitionend', handler);
                });
            }
        });
    });
}


// Render Apartment Detail View
function renderApartment(aptId) {
    const appEl = document.getElementById('app-content');
    const apt = state.apartments.find(a => a.id === aptId);
    if (!apt) {
        navigate('home');
        return;
    }

    const localTitle = apt.title[state.lang] || apt.title['ru'];
    const localDesc = apt.description[state.lang] || apt.description['ru'];
    
    Object.assign(translations.ru, { btn_photos: "Посмотреть фотографии", btn_video: "Посмотреть видео" });
    Object.assign(translations.en, { btn_photos: "Photos", btn_video: "Video" });

    // Setup gallery state
    window.galleryState = {
        index: 0,
        images: apt.photos.map(p => p.startsWith('http') ? p : `/${apt.photosDir}/${p}`),
        interval: null,
        timeout: null,
        isFullscreen: false,
        isVideoActive: false
    };
    
    // Media logic
    const photosHtml = window.galleryState.images.map((src, i) => `
        <img src="${src}" class="gallery-img ${i === 0 ? 'active' : ''}" loading="${i === 0 ? 'eager' : 'lazy'}">
    `).join('');

    const thumbnailsHtml = window.galleryState.images.map((src, i) => `
        <div class="thumb-item ${i === 0 ? 'active' : ''}" onclick="event.stopPropagation(); window.jumpToSlide(${i})">
            <img src="${src}" alt="Thumbnail ${i + 1}" loading="lazy">
        </div>
    `).join('');
    
    // Video logic
    let videoBtnStr = '';
    let videoContainerStr = '';

    if (apt.video) {
        window.currentAptVideoUrl = apt.video; // Global for player init
        videoBtnStr = `<button class="switcher-btn" onclick="switchMedia('video')" data-i18n="btn_video">${t('btn_video')}</button>`;
        
        const ytId = getYouTubeId(apt.video);
        if (ytId) {
            // YouTube Player Container
            videoContainerStr = `
                <div id="media-video" class="media-container cinematic-video-container custom-player yt-mode">
                    <div class="yt-background-glow"></div>
                    <div id="yt-player-container" class="cinematic-main-video" style="pointer-events: auto; width: 100%; height: 100%;">
                        <iframe id="yt-player" 
                                src="https://www.youtube.com/embed/${ytId}?autoplay=0&controls=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen 
                                style="width: 100%; height: 100%; opacity: 1; visibility: visible;"></iframe>
                    </div>
                </div>
            `;
        } else {
            // Local Video Player
            const videoSrc = `/${apt.videoDir}/${apt.video}`;
            
            videoContainerStr = `
                <div id="media-video" class="media-container cinematic-video-container custom-player">
                    <video class="cinematic-bg-video" muted playsinline preload="none">
                        <source src="${videoSrc}">
                    </video>
                    <div class="cinematic-overlay"></div>
                    
                    <video preload="metadata" class="cinematic-main-video custom-vid-el" playsinline>
                        <source src="${videoSrc}">
                        Your browser does not support the video tag.
                    </video>
                    
                    <div class="player-ui">
                        <div class="center-play-btn" onclick="window.togglePlayPause(event)">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                        

                        <div class="tap-zone zone-left">
                            <div class="jump-anim jump-back">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
                                <span>-5s</span>
                            </div>
                        </div>
                        <div class="tap-zone zone-right">
                            <div class="jump-anim jump-forward">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
                                <span>+5s</span>
                            </div>
                        </div>
                        
                        <div class="player-controls reveal-up">
                            <div class="play-progress progress-container" onclick="window.seekVideo(event)">
                                <div class="progress-bg"></div>
                                <div class="progress-filled"></div>
                            </div>
                            <div class="controls-row">
                                <div class="left-controls">
                                    <button class="mute-btn" onclick="window.toggleMuteVideo(event)">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                                    </button>
                                </div>
                                <div class="right-controls">
                                    <button class="fullscreen-btn" onclick="window.toggleFullscreen()">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // Amenities
    const amenitiesMap = {
        'wifi': {icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r="1"/></svg>`, ru: 'Wi-Fi', en: 'Wi-Fi'},
        'pool': {icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`, ru: 'Бассейн', en: 'Pool'},
        'ac': {icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/></svg>`, ru: 'Кондиционер', en: 'Air Conditioning'},
        'parking': {icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>`, ru: 'Парковка', en: 'Parking'},
        'kitchen': {icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 13.8V4"/><path d="M10 13.8V4"/><path d="M14 13.8V4"/><path d="M18 13.8V4"/><path d="M2 14h20l-4 6H6l-4-6z"/></svg>`, ru: 'Кухня', en: 'Kitchen'},
        'washer': {icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/></svg>`, ru: 'Стиральная машина', en: 'Washer'},
        'dishwasher': {icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M4 10h16"/><path d="M8 6h.01"/><path d="M12 6h.01"/></svg>`, ru: 'Посудомойка', en: 'Dishwasher'},
        'sauna': {icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a5 5 0 0 1 10 0"/><path d="M12 20a5 5 0 0 1 10 0"/><path d="M7 15v-5"/><path d="M17 15v-5"/><path d="M12 15V5"/></svg>`, ru: 'Сауна', en: 'Sauna'},
        'gym': {icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7.5V12m0 0v4.5m0-4.5H18m0-4.5V12m0 0v4.5"/><path d="M3 7v10"/><path d="M21 7v10"/></svg>`, ru: 'Зал', en: 'Gym'}
    };

    const amenitiesHtml = apt.amenities.map(am => {
        const item = amenitiesMap[am];
        if(!item) return '';
        return `
            <div class="am-item">
                <span class="am-icon">${item.icon}</span>
                <span class="am-text">${item[state.lang] || item['ru']}</span>
            </div>
        `;
    }).join('');

    appEl.innerHTML = `
        <!-- Back/Close button outside stacking context to ensure clickability over navbar -->
        <div class="back-nav apt-close-btn reveal-scale" onclick="navigate('back_from_apartment')" title="Back to Catalog">
            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <line x1="20" y1="12" x2="4" y2="12"></line>
                <polyline points="10 18 4 12 10 6"></polyline>
            </svg>
        </div>
        <div class="apt-detail-page transition-fade">

            ${apt.video ? `
            <div class="premium-segmented-control">
                <div class="segment-slider"></div>
                <button class="segment-btn active" onclick="if(window.switchMedia) window.switchMedia('gallery', this)" data-i18n="btn_photos">${t('btn_photos')}</button>
                <button class="segment-btn" onclick="if(window.switchMedia) window.switchMedia('video', this)" data-i18n="btn_video">${t('btn_video')}</button>
            </div>
            ` : ''}

            <div class="media-section">
                
                <div id="media-gallery" class="media-container active">
                    <div class="gallery-main" onclick="openFullscreen(window.galleryState.images[window.galleryState.index])" style="cursor: pointer;">
                        ${photosHtml}
                        <button class="gallery-arrow left-arrow" onclick="event.stopPropagation(); window.moveGallery(-1)">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button class="gallery-arrow right-arrow" onclick="event.stopPropagation(); window.moveGallery(1)">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                    <div class="gallery-thumbs">
                        ${thumbnailsHtml}
                    </div>
                    <div class="gallery-hint" data-i18n="gallery_hint">${t('gallery_hint')}</div>
                </div>

                ${videoContainerStr}
            </div>

            <div class="apt-info-container reveal-up">
                <div class="apt-main-info">
                    <h1 class="apt-detail-title">${formatTitleHTML(localTitle, apt)}</h1>
                    <div class="apt-detail-price">${typeof apt.price === 'object' ? formatPriceHTML(apt.price[state.lang] || apt.price['ru']) : formatPriceHTML(apt.price)}</div>
                    
                    <div class="apt-meta">
                        <span>${typeof apt.size === 'object' ? (apt.size[state.lang] || apt.size['ru']) : apt.size}</span>
                        <span data-i18n="location_city">${t('location_city')}</span>
                    </div>

                    ${apt.premiumHighlights ? `
                    <div class="premium-highlights">
                        ${apt.premiumHighlights.map(h => `
                            <div class="highlight-item">
                                <span class="h-icon">
                                    ${h.icon === 'fruit' ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>' : ''}
                                    ${h.icon === 'climate' ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/><circle cx="12" cy="12" r="4"/></svg>' : ''}
                                    ${h.icon === 'clean' ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>' : ''}
                                    ${h.icon === 'concierge' ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' : ''}
                                </span>
                                <span class="h-text">${h.text}</span>
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}

                    <div class="apt-description-block" style="${apt.richDescription ? 'width: 100%; max-width: 100%;' : ''}">
                        ${apt.richDescription ? 
                            (apt.richDescription[state.lang] || apt.richDescription['ru']) : 
                            `
                            <h3 data-i18n="desc_title" class="sub-heading">${t('desc_title')}</h3>
                            <p>${localDesc}</p>
                            `
                        }
                    </div>

                    ${!apt.richDescription ? `
                    <div class="apt-amenities-block">
                        <h3 data-i18n="amenities_title" class="sub-heading">${t('amenities_title')}</h3>
                        <div class="am-grid">
                            ${amenitiesHtml}
                        </div>
                    </div>
                    ` : ''}
                </div>

                <div class="apt-sidebar">
                    <div class="booking-card premium-booking-card">
                        <div class="booking-price-header">
                            <span class="bp-price">${typeof apt.price === 'object' ? (apt.price[state.lang] || apt.price['ru']) : apt.price}</span>
                            <span class="bp-badge"><span class="pulse-dot"></span> <span data-i18n="status_available">${t('status_available')}</span></span>
                        </div>
                        <p class="booking-subtitle" data-i18n="booking_subtitle">${t('booking_subtitle')}</p>
                        
                        <div class="booking-perks">
                            <div class="b-perk"><svg viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"></polyline></svg> <span data-i18n="perk_direct">${t('perk_direct')}</span></div>
                            <div class="b-perk"><svg viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"></polyline></svg> <span data-i18n="perk_best_price">${t('perk_best_price')}</span></div>
                            <div class="b-perk"><svg viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"></polyline></svg> <span data-i18n="perk_fast_confirm">${t('perk_fast_confirm')}</span></div>
                        </div>

                        <a href="https://t.me/fortuna_private_club" target="_blank" class="btn-super-premium">
                            <span class="btn-glow"></span>
                            <span class="btn-text-content">
                                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="2" fill="none" class="tg-icon-svg" style="margin-right: 15px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span data-i18n="btn_book">${t('btn_book')}</span>
                            </span>
                        </a>
                        <div class="booking-hint" data-i18n="booking_hint">${t('booking_hint')}</div>
                    </div>
                </div>
            </div>

            <!-- Reviews and Contact -->
            <section class="bottom-sections">
                <div class="reviews-section reveal">
                    <h3 data-i18n="reviews_title" class="sub-heading" style="text-align:center; margin-bottom: 40px;">${t('reviews_title')}</h3>
                    <div class="reviews-grid">
                        ${(apt.reviews || []).map(r => `
                            <div class="premium-review-card reveal-up">
                                <div class="review-header">
                                    <div class="review-author-info">
                                        <div class="review-name">${r.name}</div>
                                        <div class="review-country">${r.country}</div>
                                    </div>
                                    <div class="review-stars">★★★★★</div>
                                </div>
                                <div class="review-body">
                                    "${r.text}"
                                </div>
                            </div>
                        `).join('') || `
                            <div class="review-card">
                                <div class="stars">⭐⭐⭐⭐⭐</div>
                                <p data-i18n="review_quote">"${t('review_quote')}"</p>
                                <div class="reviewer" data-i18n="review_author">${t('review_author')}</div>
                            </div>
                        `}
                    </div>
                </div>
                
                <div class="contact-section reveal-up">
                    <h2 data-i18n="contact_title">${t('contact_title')}</h2>
                    <div class="contact-buttons-row">
                        <a href="https://t.me/fortuna_private_club" target="_blank" class="contact-btn tg-btn">
                            Telegram
                        </a>
                        <a href="tel:+901234567890" class="contact-btn">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            <span data-i18n="btn_call">${t('btn_call')}</span>
                        </a>
                        <a href="mailto:info@fortunarentalanya.com" class="contact-btn">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            <span data-i18n="btn_email">${t('btn_email')}</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>

        <!-- Fullscreen Image Modal -->
        <div id="fs-modal" class="fs-modal" onclick="if(window.closeFullscreen) window.closeFullscreen()">
            <span class="fs-close">&times;</span>
            <img class="fs-modal-content" id="fs-img">
        </div>
    `;

    // Advanced gallery slider logic
    window.moveGallery = function(step, userTriggered = true) {
        const imgs = document.querySelectorAll('.gallery-img');
        if(!imgs.length) return;
        
        imgs[window.galleryState.index].classList.remove('active');
        const thumbs = document.querySelectorAll('.thumb-item');
        if(thumbs.length) thumbs[window.galleryState.index].classList.remove('active');

        window.galleryState.index = (window.galleryState.index + step + imgs.length) % imgs.length;
        
        imgs[window.galleryState.index].classList.add('active');
        if(thumbs.length) {
            const activeThumb = thumbs[window.galleryState.index];
            activeThumb.classList.add('active');
            
            // Professional Fix: Centering thumbnail inside its container without jumping the entire window
            const container = document.querySelector('.gallery-thumbs');
            if (container) {
                const scrollPos = activeThumb.offsetLeft - container.offsetWidth / 2 + activeThumb.offsetWidth / 2;
                container.scrollTo({ left: scrollPos, behavior: 'smooth' });
            }
        }

        if(userTriggered) {
            if(window.galleryState.interval) clearInterval(window.galleryState.interval);
            if(window.galleryState.timeout) clearTimeout(window.galleryState.timeout);
            
            window.galleryState.timeout = setTimeout(() => {
                window.startGalleryAutoSlide();
            }, 12000);
        }
    };

    window.jumpToSlide = function(index) {
        if (window.galleryState.index === index) return;
        const imgs = document.querySelectorAll('.gallery-img');
        if(!imgs.length) return;

        imgs[window.galleryState.index].classList.remove('active');
        const thumbs = document.querySelectorAll('.thumb-item');
        if(thumbs.length) thumbs[window.galleryState.index].classList.remove('active');

        window.galleryState.index = index;

        imgs[window.galleryState.index].classList.add('active');
        if(thumbs.length) {
            const activeThumb = thumbs[window.galleryState.index];
            activeThumb.classList.add('active');
            
            // Professional Fix: Centering thumbnail inside its container without jumping the entire window
            const container = document.querySelector('.gallery-thumbs');
            if (container) {
                const scrollPos = activeThumb.offsetLeft - container.offsetWidth / 2 + activeThumb.offsetWidth / 2;
                container.scrollTo({ left: scrollPos, behavior: 'smooth' });
            }
        }

        if(window.galleryState.interval) clearInterval(window.galleryState.interval);
        if(window.galleryState.timeout) clearTimeout(window.galleryState.timeout);
        window.galleryState.timeout = setTimeout(() => {
            window.startGalleryAutoSlide();
        }, 12000);
    };

    window.startGalleryAutoSlide = function() {
        if(window.galleryState.interval) clearInterval(window.galleryState.interval);
        if(window.galleryState.timeout) clearTimeout(window.galleryState.timeout);
        
        window.galleryState.interval = setInterval(() => {
            if (!window.galleryState.isFullscreen && 
                !window.galleryState.isVideoActive &&
                document.getElementById('media-gallery')?.classList.contains('active')) {
                window.moveGallery(1, false);
            }
        }, 12000);
    };

    window.startGalleryAutoSlide();
    
    // Initialize player immediately so it's ready when switched
    if (apt.video) {
        setTimeout(() => {
            if (window.initCustomVideoPlayer) window.initCustomVideoPlayer();
        }, 100);
    }

    // Smart Visibility Logic: Pause auto-slide when gallery is not in view
    const mediaSection = document.querySelector('.media-section');
    if (mediaSection && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    window.startGalleryAutoSlide();
                } else {
                    if(window.galleryState.interval) clearInterval(window.galleryState.interval);
                    if(window.galleryState.timeout) clearTimeout(window.galleryState.timeout);
                }
            });
        }, { threshold: 0.1 });
        observer.observe(mediaSection);
    }

    observeNewElements();

    // Professional: Initialize Media Switcher Slider position on load
    if (apt.video) {
        setTimeout(() => {
            const btns = document.querySelectorAll('.segment-btn');
            if (btns.length > 0) window.switchMedia('gallery', btns[0]);
        }, 300); // Wait for transition to settle
    }
}

window.switchMedia = function(type, btnObj) {
    const slider = document.querySelector('.segment-slider');
    const btns = document.querySelectorAll('.segment-btn');
    
    let targetBtn = btnObj;
    if (!targetBtn && btns.length > 0) {
        targetBtn = type === 'gallery' ? btns[0] : btns[1];
    }
    
    if (slider && targetBtn) {
        // Use getBoundingClientRect for more precise positioning if offsetLeft is tricky
        const parentRect = targetBtn.parentElement.getBoundingClientRect();
        const btnRect = targetBtn.getBoundingClientRect();
        
        slider.style.width = btnRect.width + 'px';
        slider.style.transform = `translateX(${btnRect.left - parentRect.left - 6}px)`;
    }
    
    btns.forEach(b => b.classList.remove('active'));
    if (targetBtn) targetBtn.classList.add('active');
    
    const containers = document.querySelectorAll('.media-container');
    containers.forEach(c => c.classList.remove('active'));
    
    if(type === 'gallery') {
        const galleryEl = document.getElementById('media-gallery');
        if (galleryEl) galleryEl.classList.add('active');
        if(window.galleryState) {
            window.galleryState.isVideoActive = false;
            if(window.startGalleryAutoSlide) window.startGalleryAutoSlide();
        }
        
        // Pause all videos when leaving video tab
        const vids = document.querySelectorAll('.cinematic-main-video, .cinematic-bg-video, .custom-vid-el');
        vids.forEach(v => { 
            if(v.pause && !v.paused) v.pause(); 
        });
        
        if (window.ytPlayer && typeof window.ytPlayer.pauseVideo === 'function') {
            try { window.ytPlayer.pauseVideo(); } catch(e) {}
        }

        const playBtn = document.querySelector('.center-play-btn');
        if(playBtn) playBtn.classList.remove('playing');
        
    } else {
        const videoEl = document.getElementById('media-video');
        if (videoEl) videoEl.classList.add('active');
        if(window.galleryState) {
            window.galleryState.isVideoActive = true;
            if(window.galleryState.interval) clearInterval(window.galleryState.interval);
        }

        const mainVid = document.querySelector('.cinematic-main-video');
        if (mainVid) {
            const playBtn = document.querySelector('.center-play-btn');
            if(playBtn) playBtn.classList.remove('playing');
        }
    }
};

window.openFullscreen = function(src) {
    const modal = document.getElementById('fs-modal');
    const fsImg = document.getElementById('fs-img');
    fsImg.src = src;
    modal.classList.add('active');
    if(window.galleryState) window.galleryState.isFullscreen = true;
}

window.closeFullscreen = function() {
    const modal = document.getElementById('fs-modal');
    if(modal) modal.classList.remove('active');
    if(window.galleryState) {
        window.galleryState.isFullscreen = false;
        if(window.startGalleryAutoSlide) window.startGalleryAutoSlide();
    }
}

// Catalog View
function renderCatalog() {
    const appEl = document.getElementById('app-content');
    
    Object.assign(translations.ru, { catalog_heading: "Все апартаменты" });
    Object.assign(translations.en, { catalog_heading: "All Apartments" });
    
    const catalogHtml = state.apartments.map((apt, index) => {
        const localTitle = apt.title[state.lang] || apt.title['ru'];
        const localDesc = apt.description[state.lang] || apt.description['ru'];
        const mainImage = apt.photos.length > 0 ? (apt.photos[0].startsWith('http') ? apt.photos[0] : `/${apt.photosDir}/${apt.photos[0]}`) : '';
        
        return `
        <div class="apt-card reveal-up" style="transition-delay: ${(index % 3) * 0.1}s" onclick="navigate('apartment', '${apt.id}')">
            <div class="apt-image">
                <img src="${mainImage}" alt="${localTitle}" loading="lazy">
            </div>
            <div class="apt-details">
                <h3 class="apt-title">${formatTitleHTML(localTitle, apt, true)}</h3>
                <p class="apt-desc">${localDesc}</p>
                <div class="apt-footer">
                    <span class="apt-price">${typeof apt.price === 'object' ? formatPriceHTML(apt.price[state.lang] || apt.price['ru']) : formatPriceHTML(apt.price)}</span>
                    &nbsp;
                    <button class="apt-btn">
                        <span data-i18n="btn_details">${t('btn_details')}</span>
                        <span class="arrow">→</span>
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');

    appEl.innerHTML = `
        <div class="catalog-page transition-fade">
            <div class="page-header">
            <h1 data-i18n="catalog_heading">${t('catalog_heading')}</h1>
            <p>Премиум выбор для вашего отдыха</p>
        </div>
            <section class="apartments" style="padding-top: 50px;">
                <div class="apartments-grid">
                    ${catalogHtml}
                </div>
            </section>
        </div>
    `;

    observeNewElements();
}

// About View
function renderAbout() {
    state.currentView = 'about';
    const appEl = document.getElementById('app-content');
    
    // Safety: Ensure state.lang is valid
    if (!translations[state.lang]) state.lang = 'ru';

    // Helper function to easily access translated strings
    const tr = (block, key) => {
        if(!aboutData || !aboutData[block] || !aboutData[block][key]) {
            console.warn(`AboutData missing block or key: ${block}.${key}`);
            return "";
        }
        const item = aboutData[block][key];
        return item[state.lang] || item['en'] || item['ru'] || '';
    };

    // 1. Immersive Hero
    const introHtml = `
        <section class="about-hero-premium">
            <div class="hero-bg parallax" style="background-image: url('assets/images/hero_alanya_new.jpg');"></div>
            <div class="hero-overlay"></div>
            <div class="hero-content reveal-up">
                <h1>${tr('intro', 'headline')}</h1>
                <p class="about-subheadline">${tr('intro', 'subheadline')}</p>
                <div class="hero-cta-group">
                    <button class="btn-primary" onclick="navigate('catalog'); window.scrollTo(0,0);">${tr('intro', 'btn_explore')}</button>
                    <button class="btn-alanya-video" onclick="openAlanyaModal()" style="position:relative; padding-left: 55px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="position:absolute; left:24px; top:50%; transform:translateY(-50%); opacity:0.9;"><path d="M8 5v14l11-7z"/></svg>
                        ${tr('intro', 'btn_discover')}
                    </button>
                </div>
            </div>
        </section>
    `;

    // 2. Why Alanya Feels Different
    const specialFeaturesHtml = aboutData.special.features.map((f, i) => `
        <div class="special-feature-item reveal-up" style="transition-delay: ${i * 0.15}s">
            <div class="special-feature-header">
                ${f.icon ? `<div class="special-feature-icon">${f.icon}</div>` : ''}
                <h3>${f.title[state.lang] || f.title['en'] || f.title['ru']}</h3>
            </div>
            <p>${f.desc[state.lang] || f.desc['en'] || f.desc['ru']}</p>
        </div>
    `).join('');
    const specialHtml = `
        <section id="about-special" class="about-section about-special">
            <div class="container">
                <div class="special-header reveal-up">
                    <span class="special-subtitle">${tr('special', 'subtitle')}</span>
                    <h2 class="section-title" style="margin-bottom: 20px;">${tr('special', 'title')}</h2>
                    <p class="special-highlight">${tr('special', 'highlight')}</p>
                </div>
                <div class="special-grid">
                    ${specialFeaturesHtml}
                </div>
                <div class="special-footer reveal-up" style="transition-delay: 0.3s">
                    <p class="special-closing">${tr('special', 'closing')}</p>
                </div>
            </div>
        </section>
    `;

    // 3. Lifestyle Story
    const lifestyleHtml = aboutData.lifestyle.blocks.map((block, i) => `
        <div class="story-block">
            <div class="story-bg" style="background-image: url('${block.img}'); background-position: ${block.position || 'center'};"></div>
            <div class="story-overlay"></div>
            <div class="story-content reveal-up" style="transition-delay: 0.2s;">
                <span class="story-phase">${block.phase[state.lang] || block.phase['en'] || block.phase['ru']}</span>
                <p class="story-text">${block.text[state.lang] || block.text['en'] || block.text['ru']}</p>
            </div>
        </div>
    `).join('');
    const lifestyleSectionHtml = `
        <section class="lifestyle-scroll-container">
            ${lifestyleHtml}
        </section>
    `;

    // 4. Iconic Places (Bento Grid)
    const landmarksHtml = aboutData.landmarks.items.map((lm, i) => `
        <div class="bento-card ${lm.size} reveal-scale" style="transition-delay: ${Math.min(i * 0.1, 0.4)}s" onclick="navigate('landmark', '${lm.id}')">
            <div class="bento-bg" style="background-image: url('${lm.img}');"></div>
            <div class="bento-overlay-gradient"></div>
            <div class="bento-content">
                <h3>${lm.name[state.lang] || lm.name['en'] || lm.name['ru']}</h3>
                <p>${lm.desc[state.lang] || lm.desc['en'] || lm.desc['ru']}</p>
                <div class="bento-link">
                    <span>${state.lang === 'ru' ? 'Читать статью' : 'Read article'}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
            </div>
        </div>
    `).join('');
    const bentoHtml = `
        <section class="about-section about-landmarks">
            <div class="container">
                <h2 class="section-title reveal-up">${tr('landmarks', 'title')}</h2>
                <div class="bento-grid">
                    ${landmarksHtml}
                </div>
            </div>
        </section>
    `;

    // 5. Beach & Nature
    const natureImages = aboutData.nature.images;
    const clonedImages = [...natureImages, ...natureImages, ...natureImages];
    const natureImagesHtml = clonedImages.map(item => `
        <div class="nature-img-card">
            <img src="${item.img}" alt="${item.title[state.lang] || item.title['en'] || item.title['ru']}" loading="lazy">
            <div class="nature-card-overlay"></div>
            <div class="nature-card-content">
                <h3 class="nature-card-title">${item.title[state.lang] || item.title['en'] || item.title['ru']}</h3>
                <p class="nature-card-desc">${item.desc[state.lang] || item.desc['en'] || item.desc['ru']}</p>
            </div>
        </div>
    `).join('');
    const natureHtml = `
        <section class="about-section about-nature about-section-pb">
            <div class="nature-header reveal-up">
                <h2 class="section-title">${tr('nature', 'title')}</h2>
                <p>${tr('nature', 'text')}</p>
            </div>
            <div class="horizontal-scroll-container reveal-up" id="nature-carousel-viewport">
                <div class="nature-carousel-track" id="nature-carousel-track">
                    ${natureImagesHtml}
                </div>
            </div>
        </section>
    `;

    // 6. Food & Atmosphere
    const culinaryCardsHtml = aboutData.culinary.cards.map((c, i) => `
        <div class="culinary-card reveal-up" style="transition-delay: ${i * 0.1}s">
            <h3>${c.title[state.lang] || c.title['en'] || c.title['ru']}</h3>
            <p>${c.desc[state.lang] || c.desc['en'] || c.desc['ru']}</p>
        </div>
    `).join('');
    const culinaryHtml = `
        <section class="about-section about-culinary">
            <div class="container">
                <h2 class="section-title reveal-up">${tr('culinary', 'title')}</h2>
                <div class="culinary-grid">
                    ${culinaryCardsHtml}
                </div>
            </div>
        </section>
    `;

    // 7. Who is this for
    const guestsHtml = aboutData.guests.items.map((g, i) => `
        <div class="guest-card reveal-up" style="transition-delay: ${i * 0.1}s">
            <div class="guest-icon">${g.icon}</div>
            <h3>${g.tag[state.lang] || g.tag['en'] || g.tag['ru']}</h3>
            <p>${g.text[state.lang] || g.text['en'] || g.text['ru']}</p>
        </div>
    `).join('');
    const guestsSectionHtml = `
        <section class="about-section about-guests">
            <div class="container">
                <h2 class="section-title reveal-up">${tr('guests', 'title')}</h2>
                <div class="guests-grid">
                    ${guestsHtml}
                </div>
            </div>
        </section>
    `;

    // 8. Why Rent Here
    const rentingHtml = `
        <section class="about-section about-renting">
            <div class="container">
                <h2 class="section-title reveal-up">${tr('renting', 'title')}</h2>
                <div class="rent-compare-grid">
                    <div class="compare-card hotel-card reveal-left">
                        <div class="compare-content">
                            <h3>${aboutData.renting.comparison.hotel.title[state.lang] || aboutData.renting.comparison.hotel.title['en'] || aboutData.renting.comparison.hotel.title['ru']}</h3>
                            <p>${aboutData.renting.comparison.hotel.points[state.lang] || aboutData.renting.comparison.hotel.points['en'] || aboutData.renting.comparison.hotel.points['ru']}</p>
                        </div>
                    </div>
                    <div class="compare-vs-wrapper reveal-vs">
                        <div class="compare-vs-badge">VS</div>
                    </div>
                    <div class="compare-card apartment-card reveal-right">
                        <div class="compare-content">
                            <h3>${aboutData.renting.comparison.apartment.title[state.lang] || aboutData.renting.comparison.apartment.title['en'] || aboutData.renting.comparison.apartment.title['ru']}</h3>
                            <p>${aboutData.renting.comparison.apartment.points[state.lang] || aboutData.renting.comparison.apartment.points['en'] || aboutData.renting.comparison.apartment.points['ru']}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    // 9 & 10. Transition & Conversion
    const conversionHtml = `
        <section class="about-conversion-block transition-fade">
            <div class="about-bg-motion"></div>
            <div class="container conversion-container reveal-up">
                <h2>${tr('conversion', 'title')}</h2>
                <p>${tr('conversion', 'text')}</p>
                <button class="btn-primary cta-btn" onclick="navigate('catalog'); window.scrollTo(0,0);">
                    ${tr('conversion', 'cta')}
                </button>
            </div>
        </section>
    `;

    appEl.innerHTML = `
        <div class="about-page premium-version transition-fade">
            ${introHtml}
            ${specialHtml}
            ${lifestyleSectionHtml}
            ${bentoHtml}
            ${natureHtml}
            ${culinaryHtml}
            ${guestsSectionHtml}
            ${rentingHtml}
            ${conversionHtml}
        </div>
    `;

    observeNewElements();

    setTimeout(() => {
        if (typeof initNatureCarousel === 'function') {
            initNatureCarousel();
        }
    }, 100);

    // Visibility Trigger
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            const pageEl = appEl.querySelector('.about-page');
            if (pageEl) pageEl.classList.add('visible');
        });
    });

    // Attach specific scroll observation for parallax elements inside about page
    requestAnimationFrame(() => {
        
        const parallaxBgs = document.querySelectorAll('.about-page .parallax');
        if (parallaxBgs.length === 0) return;

        let lastPScrollY = window.scrollY;
        let pTicking = false;

        const updateParallax = () => {
            if(state.currentView !== 'about') {
                pTicking = false;
                return;
            }
            
            const scrollY = window.scrollY;
            parallaxBgs.forEach(bg => {
                const speed = 0.4;
                // Use translate3d for GPU acceleration
                bg.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
            });
            pTicking = false;
        };

        const parallaxHandler = () => {
            lastPScrollY = window.scrollY;
            if (!pTicking) {
                window.requestAnimationFrame(updateParallax);
                pTicking = true;
            }
        };

        // Remove old listener if it exists to prevent accumulation
        if (window._aboutScrollHandler) {
            window.removeEventListener('scroll', window._aboutScrollHandler);
        }
        
        window._aboutScrollHandler = parallaxHandler;
        window.addEventListener('scroll', parallaxHandler, { passive: true });

        // Initial Parallax Call
        updateParallax();
    });
}

// Landmark Detail View
function renderLandmark(landmarkId) {
    state.currentView = 'landmark';
    const appEl = document.getElementById('app-content');
    
    // Pick the landmark from aboutData
    const landmark = aboutData.landmarks.items.find(l => l.id === landmarkId);
    
    if (!landmark) {
        navigate('about');
        return;
    }

    const name = landmark.name[state.lang] || landmark.name['en'] || landmark.name['ru'];
    const subtitle = landmark.subtitle ? (landmark.subtitle[state.lang] || landmark.subtitle['en'] || landmark.subtitle['ru']) : "";
    const paragraphs = landmark.paragraphs ? (landmark.paragraphs[state.lang] || landmark.paragraphs['en'] || landmark.paragraphs['ru']) : [];
    const unique = landmark.unique ? (landmark.unique[state.lang] || landmark.unique['en'] || landmark.unique['ru']) : "";
    const uniqueTitle = landmark.uniqueTitle ? (landmark.uniqueTitle[state.lang] || landmark.uniqueTitle['ru'] || landmark.uniqueTitle['en']) : "Why it's unique";

    // Helper for navigation in intro
    const tr = (block, key) => {
        if(!aboutData || !aboutData[block] || !aboutData[block][key]) return "";
        const item = aboutData[block][key];
        return item[state.lang] || item['en'] || '';
    };

    appEl.innerHTML = `
        <div class="landmark-detail-page transition-fade">
            <section class="landmark-hero">
                <div class="landmark-hero-bg" style="background-image: url('${landmark.img}')"></div>
                <div class="landmark-hero-overlay"></div>
                <div class="landmark-hero-content reveal-up">
                    <div class="back-link" onclick="navigate('about')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <span data-i18n="btn_back">${t('btn_back')}</span>
                    </div>
                    <h1>${name}</h1>
                    <p class="landmark-subtitle">${subtitle}</p>
                </div>
            </section>

            <section class="landmark-info about-section">
                <div class="container landmark-container">
                    <div class="landmark-grid">
                        <div class="landmark-main reveal-up">
                            <div class="luxury-line"></div>
                            ${paragraphs.map(p => `<p class="landmark-text">${p}</p>`).join('')}
                            
                            <div class="landmark-unique-box">
                                <span class="unique-label">${uniqueTitle}</span>
                                <p>${unique}</p>
                            </div>

                            <!-- ARTICLE ACTION -->
                            <div class="landmark-article-cta">
                                <button class="article-btn" onclick="navigate('article', '${landmarkId}')">
                                    <span>${state.lang === 'ru' ? 'Читать статью целиком' : 'Read Full Article'}</span>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;

    observeNewElements();
    
    const pageEl = appEl.querySelector('.landmark-detail-page');
    
    // Smooth Visibility Trigger
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (pageEl) pageEl.classList.add('visible');
        });
    });
}

function renderArticle(landmarkId) {
    state.currentView = 'article';
    const appEl = document.getElementById('app-content');
    
    // Find article data
    const article = aboutData.articles[landmarkId];
    const landmark = aboutData.landmarks.items.find(l => l.id === landmarkId);
    
    if (!article || !landmark) {
        navigate('about');
        return;
    }

    const title = article.title[state.lang] || article.title['ru'];
    const readTime = article.readTime[state.lang] || article.readTime['ru'];
    const content = article.content[state.lang] || article.content['ru'];

    appEl.innerHTML = `
        <div class="landmark-article-page transition-fade">
            <!-- LUXE BACK NAVIGATION -->
            <button class="article-back-btn" onclick="navigate('landmark', '${landmarkId}')">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span>${t('btn_back')}</span>
            </button>

            <article class="landmark-article-view">
                <header class="article-header reveal-up">
                    <div class="article-meta">
                        <span>${landmark.name[state.lang]}</span>
                        <span class="meta-dot"></span>
                        <span>${readTime}</span>
                    </div>
                    <h1 class="article-title">${title}</h1>
                </header>

                <div class="article-hero-container reveal-up">
                    <img src="${landmark.img}" alt="${title}" class="article-hero-img">
                </div>

                <div class="article-body reveal-up">
                    ${content}
                </div>
            </article>
            
            <section class="article-footer-cta reveal-up">
                <div class="luxury-line" style="margin: 0 auto 50px; width: 60px; height: 1px; background: #D4AF37;"></div>
                <p class="cta-subtitle">${state.lang === 'ru' ? 'Прикоснитесь к истории лично' : 'Experience history in person'}</p>
                <h3 class="cta-title">${state.lang === 'ru' ? 'Забронируйте премиальный отдых' : 'Book Your Premium Stay'}</h3>
                <button class="luxe-btn-v2" onclick="navigate('catalog')" style="margin-top: 40px;">
                    <span>${t('btn_catalog')}</span>
                </button>
            </section>
        </div>
    `;

    observeNewElements();
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    requestAnimationFrame(() => requestAnimationFrame(() => {
        const pageEl = appEl.querySelector('.landmark-article-page');
        if (pageEl) pageEl.classList.add('visible');
    }));
}


function renderManagement() {
    const appEl = document.getElementById('app-content');
    appEl.innerHTML = `
    <div class="management-page transition-fade">

      <!-- HERO -->
      <section class="mgmt-hero">
        <div class="mgmt-hero-bg"></div>
        <div class="mgmt-hero-overlay"></div>
        <div class="mgmt-hero-content reveal-up">
          <div class="luxury-line" style="margin:0 auto 28px;"></div>
          <h1 class="mgmt-hero-title" data-i18n="mgmt_hero_title">${t('mgmt_hero_title')}</h1>
          <p class="mgmt-hero-sub" data-i18n="mgmt_hero_sub">${t('mgmt_hero_sub')}</p>
          <a href="https://t.me/fortuna_private_club" target="_blank" class="mgmt-cta-btn hero-cta">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48.99-.73 3.88-1.69 6.46-2.8 7.74-3.35 3.68-1.56 4.44-1.83 4.94-1.84.11 0 .35.03.51.16.14.12.18.28.19.39.01.07.01.21 0 .33z"/></svg>
            <span data-i18n="mgmt_btn_discuss">${t('mgmt_btn_discuss')}</span>
          </a>
        </div>
      </section>

      <!-- SECTION 1: Оживите инвестиции -->
      <section class="mgmt-section">
        <div class="mgmt-container">
          <div class="mgmt-badge reveal-up" data-i18n="mgmt_badge_1">${t('mgmt_badge_1')}</div>
          <h2 class="mgmt-section-title reveal-up" data-i18n="mgmt_title_1">${t('mgmt_title_1')}</h2>
          <p class="mgmt-section-text reveal-up" data-i18n="mgmt_text_1">${t('mgmt_text_1')}</p>
          <div class="mgmt-services-grid">
            <div class="mgmt-service-card reveal-up" style="transition-delay: 0.1s">
              <div class="mgmt-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3 data-i18n="mgmt_service_title_1">${t('mgmt_service_title_1')}</h3>
              <p data-i18n="mgmt_service_desc_1">${t('mgmt_service_desc_1')}</p>
            </div>
            <div class="mgmt-service-card reveal-up" style="transition-delay: 0.2s">
              <div class="mgmt-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
              </div>
              <h3 data-i18n="mgmt_service_title_2">${t('mgmt_service_title_2')}</h3>
              <p data-i18n="mgmt_service_desc_2">${t('mgmt_service_desc_2')}</p>
            </div>
            <div class="mgmt-service-card reveal-up" style="transition-delay: 0.3s">
              <div class="mgmt-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h3 data-i18n="mgmt_service_title_3">${t('mgmt_service_title_3')}</h3>
              <p data-i18n="mgmt_service_desc_3">${t('mgmt_service_desc_3')}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: Доверительное управление -->
      <section class="mgmt-section mgmt-section-alt">
        <div class="mgmt-container">
          <div class="mgmt-badge reveal-up" data-i18n="mgmt_badge_2">${t('mgmt_badge_2')}</div>
          <h2 class="mgmt-section-title reveal-up" data-i18n="mgmt_title_2">${t('mgmt_title_2')}</h2>
          <p class="mgmt-section-text reveal-up" data-i18n="mgmt_text_2">${t('mgmt_text_2')}</p>
          <div class="mgmt-services-grid">
            <div class="mgmt-service-card reveal-up" style="transition-delay: 0.1s">
              <div class="mgmt-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3 data-i18n="mgmt_service_title_4">${t('mgmt_service_title_4')}</h3>
              <p data-i18n="mgmt_service_desc_4">${t('mgmt_service_desc_4')}</p>
            </div>
            <div class="mgmt-service-card reveal-up" style="transition-delay: 0.2s">
              <div class="mgmt-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 data-i18n="mgmt_service_title_5">${t('mgmt_service_title_5')}</h3>
              <p data-i18n="mgmt_service_desc_5">${t('mgmt_service_desc_5')}</p>
            </div>
            <div class="mgmt-service-card reveal-up" style="transition-delay: 0.3s">
              <div class="mgmt-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 data-i18n="mgmt_service_title_6">${t('mgmt_service_title_6')}</h3>
              <p data-i18n="mgmt_service_desc_6">${t('mgmt_service_desc_6')}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="mgmt-cta-section reveal-up">
        <div class="mgmt-container">
          <div class="mgmt-cta-glass">
            <h2 class="mgmt-cta-title" data-i18n="mgmt_cta_title">${t('mgmt_cta_title')}</h2>
            <p class="mgmt-cta-sub" data-i18n="mgmt_cta_sub">${t('mgmt_cta_sub')}</p>
            <a href="https://t.me/fortuna_private_club" target="_blank" class="mgmt-cta-btn">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48.99-.73 3.88-1.69 6.46-2.8 7.74-3.35 3.68-1.56 4.44-1.83 4.94-1.84.11 0 .35.03.51.16.14.12.18.28.19.39.01.07.01.21 0 .33z"/></svg>
              <span data-i18n="mgmt_btn_telegram">${t('mgmt_btn_telegram')}</span>
            </a>
          </div>
        </div>
      </section>

    </div>`;

    observeNewElements();
    requestAnimationFrame(() => requestAnimationFrame(() => {
        const el = appEl.querySelector('.management-page');
        if (el) el.classList.add('visible');
    }));
}

// Premium Navigation logic
window.handlePremiumNav = function(view, e) {
    if (e && e.currentTarget) {
        const btn = e.currentTarget;
        btn.classList.add('clicked-anim');
        setTimeout(() => {
            navigate(view);
            // Safety timeout to reset animation classes after DOM clears/caches
            setTimeout(() => btn.classList.remove('clicked-anim'), 300);
        }, 180);
    } else {
        navigate(view);
    }
};

// Custom Video Player Logic
window.initCustomVideoPlayer = function() {
    const video = document.querySelector('.custom-vid-el');
    const bgVideo = document.querySelector('.cinematic-bg-video');
    const playerContainer = document.querySelector('.custom-player');
    
    // Clear any existing YT player reference
    window.ytPlayer = null;

    if (!playerContainer) return;

    // Check if we are in YouTube mode
    const ytId = getYouTubeId(window.currentAptVideoUrl); // We need this variable

    if (ytId) {
        window.ytPlayer = new YT.Player('yt-player', {
            videoId: ytId,
            playerVars: {
                'autoplay': 0,
                'controls': 1,
                'rel': 0,
                'modestbranding': 1,
                'playsinline': 1,
                'enablejsapi': 1,
                'origin': window.location.origin
            },
            events: {
                'onReady': (event) => {
                    console.log("YouTube Player Ready");
                },
                'onStateChange': (event) => {
                    const playBtn = playerContainer.querySelector('.center-play-btn');
                    if (event.data === YT.PlayerState.PLAYING || event.data === YT.PlayerState.BUFFERING) {
                        if(playBtn) playBtn.classList.add('playing');
                        playerContainer.classList.add('has-started');
                        if (event.data === YT.PlayerState.PLAYING) {
                            startYTProgressLoop();
                        }
                    } else {
                        if(playBtn) playBtn.classList.remove('playing');
                        playerContainer.classList.remove('has-started');
                    }
                }
            }
        });

        function startYTProgressLoop() {
            if (!window.ytPlayer || typeof window.ytPlayer.getCurrentTime !== 'function') return;
            const currentTime = window.ytPlayer.getCurrentTime();
            const duration = window.ytPlayer.getDuration();
            if (duration > 0) {
                const percent = (currentTime / duration) * 100;
                const progressFilled = playerContainer.querySelector('.progress-filled');
                if (progressFilled) progressFilled.style.width = `${percent}%`;
            }
            if (window.ytPlayer.getPlayerState() === YT.PlayerState.PLAYING) {
                requestAnimationFrame(startYTProgressLoop);
            }
        }
    }

    if (!video && !ytId) return;

    const playBtn = playerContainer.querySelector('.center-play-btn');
    const muteBtn = playerContainer.querySelector('.mute-btn');
    const muteIcon = muteBtn.querySelector('svg');
    const progressFilled = playerContainer.querySelector('.progress-filled');
    const progressContainer = playerContainer.querySelector('.progress-container');
    const zoneLeft = playerContainer.querySelector('.zone-left');
    const zoneRight = playerContainer.querySelector('.zone-right');
    const playerUI = playerContainer.querySelector('.player-ui');
    
    let hideUITimeout;

    const showUI = () => {
        if (!playerUI) return;
        playerUI.classList.remove('hidden-ui');
        clearTimeout(hideUITimeout);
        
        let isPlaying = false;
        if (video && !video.paused) isPlaying = true;
        if (window.ytPlayer && typeof window.ytPlayer.getPlayerState === 'function') {
            if (window.ytPlayer.getPlayerState() === 1 || window.ytPlayer.getPlayerState() === 3) isPlaying = true;
        }
        
        if (isPlaying) {
            hideUITimeout = setTimeout(() => {
                playerUI.classList.add('hidden-ui');
            }, 2500);
        }
    };

    playerContainer.addEventListener('mousemove', showUI);
    playerContainer.addEventListener('touchstart', showUI);
    playerContainer.addEventListener('click', showUI);

    window.toggleMainVideo = function(e) {
        if (e) e.stopPropagation();
        
        if (window.ytPlayer && typeof window.ytPlayer.getPlayerState === 'function') {
            const state = window.ytPlayer.getPlayerState();
            if (state === 1 || state === 3) { // playing or buffering
                window.ytPlayer.pauseVideo();
                if(playBtn) playBtn.classList.remove('playing');
            } else {
                window.ytPlayer.playVideo();
                if(playBtn) playBtn.classList.add('playing');
            }
            showUI();
            return;
        }

        if (video) {
            if (video.paused) {
                if(bgVideo) bgVideo.currentTime = video.currentTime;
                video.play();
                if(bgVideo) bgVideo.play();
                if(playBtn) playBtn.classList.add('playing');
            } else {
                video.pause();
                if(bgVideo) {
                    bgVideo.pause();
                    bgVideo.currentTime = video.currentTime;
                }
                if(playBtn) playBtn.classList.remove('playing');
            }
            showUI();
        }
    };

    window.toggleMuteVideo = function(e) {
        if(e) e.stopPropagation();
        
        if (window.ytPlayer && typeof window.ytPlayer.isMuted === 'function') {
            if (window.ytPlayer.isMuted()) {
                window.ytPlayer.unMute();
                muteIcon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>`;
            } else {
                window.ytPlayer.mute();
                muteIcon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>`;
            }
            return;
        }

        video.muted = !video.muted;
        if (video.muted) {
            muteIcon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>`;
        } else {
            muteIcon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>`;
        }
    };

    window.seekVideo = function(e) {
        if(e) e.stopPropagation();
        const rect = progressContainer.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        
        if (window.ytPlayer && typeof window.ytPlayer.seekTo === 'function') {
            const duration = window.ytPlayer.getDuration();
            window.ytPlayer.seekTo(pos * duration, true);
            return;
        }

        video.currentTime = Math.max(0, Math.min(video.duration, pos * video.duration));
        if(bgVideo) bgVideo.currentTime = video.currentTime;
    };

    let syncThreshold = 0.05; // 50ms drift tolerance for tighter sync
    video.addEventListener('timeupdate', () => {
        if(!video.duration) return;
        const percent = (video.currentTime / video.duration) * 100;
        progressFilled.style.width = `${percent}%`;
        
        // Smooth Background Sync
        if (bgVideo && !video.paused && !video.seeking) {
            let diff = bgVideo.currentTime - video.currentTime;
            
            // If strictly out of sync (> 0.5s), snap to correct frame (e.g. after seek or heavy lag)
            if (Math.abs(diff) > 0.5) {
                bgVideo.currentTime = video.currentTime;
                bgVideo.playbackRate = 1.0;
            } else if (diff < -syncThreshold) {
                // bg behind: speed up slightly
                bgVideo.playbackRate = 1.05;
            } else if (diff > syncThreshold) {
                // bg ahead: slow down slightly
                bgVideo.playbackRate = 0.95;
            } else {
                // In perfect sync
                bgVideo.playbackRate = 1.0;
            }
        }
    });

    video.addEventListener('seeking', () => {
        if(bgVideo) bgVideo.currentTime = video.currentTime;
    });

    video.addEventListener('waiting', () => {
        if(bgVideo) bgVideo.pause();
    });

    video.addEventListener('playing', () => {
        if(bgVideo) {
            if (Math.abs(bgVideo.currentTime - video.currentTime) > 0.1) {
                bgVideo.currentTime = video.currentTime;
            }
            bgVideo.playbackRate = 1.0;
            bgVideo.play().catch(e => console.log(e));
        }
    });

    video.addEventListener('ended', () => {
        playBtn.classList.remove('playing');
        playerUI.classList.remove('hidden-ui');
        if(bgVideo) {
            bgVideo.pause();
            bgVideo.currentTime = video.currentTime;
        }
    });

    let lastTap = 0;
    const handleDoubleTap = (side) => {
        const now = new Date().getTime();
        const timesince = now - lastTap;
        if ((timesince < 400) && (timesince > 0)) {
            let animEl;
            if (side === 'left') {
                video.currentTime = Math.max(0, video.currentTime - 5);
                animEl = playerContainer.querySelector('.jump-back');
            } else {
                video.currentTime = Math.min(video.duration, video.currentTime + 5);
                animEl = playerContainer.querySelector('.jump-forward');
            }
            if(bgVideo) bgVideo.currentTime = video.currentTime;
            
            animEl.classList.add('animate');
            setTimeout(() => animEl.classList.remove('animate'), 500);
            showUI();
        }
        lastTap = new Date().getTime();
    };

    zoneLeft.addEventListener('click', (e) => { e.stopPropagation(); handleDoubleTap('left'); });
    zoneRight.addEventListener('click', (e) => { e.stopPropagation(); handleDoubleTap('right'); });
    
    zoneLeft.addEventListener('dblclick', (e) => { e.preventDefault(); });
    zoneRight.addEventListener('dblclick', (e) => { e.preventDefault(); });

    window.toggleVideoFullscreen = function(e) {
        if(e) e.stopPropagation();
        if (!document.fullscreenElement && !document.webkitFullscreenElement) {
            if (playerContainer.requestFullscreen) {
                playerContainer.requestFullscreen().catch(() => {
                    if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
                });
            } else if (playerContainer.webkitRequestFullscreen) {
                playerContainer.webkitRequestFullscreen();
            } else if (video.webkitEnterFullscreen) {
                video.webkitEnterFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    };
};

/**
 * Continuous Smooth Horizontal Carousel
 * Supports mouse drag, touch swipe, and infinite looping
 */
function initNatureCarousel() {
    const viewport = document.getElementById('nature-carousel-viewport');
    const track = document.getElementById('nature-carousel-track');
    if (!viewport || !track || !track.children.length) return;

    // The length of one original set of images
    // We can get this from aboutData if available, or assume it's 1/3 of children if we cloned 3x
    const itemCount = (typeof aboutData !== 'undefined' && aboutData.nature && aboutData.nature.images) 
                      ? aboutData.nature.images.length 
                      : track.children.length / 3;

    let posX = 0;
    let baseSpeed = 60; // Pixels per second (slightly faster per user request)
    let isPaused = false;
    let isDragging = false;
    let startX = 0;
    let rafId = null;
    let lastTime = 0;

    const getJumpPoint = () => {
        if (track.children.length > itemCount) {
            // Distance between the start of set 1 and start of set 2
            return track.children[itemCount].offsetLeft - track.children[0].offsetLeft;
        }
        return track.scrollWidth / 3;
    };

    const updateLoop = (time) => {
        if (!track.isConnected) {
            cancelAnimationFrame(rafId);
            return;
        }

        if (!lastTime) lastTime = time;
        const delta = (time - lastTime) / 1000; // Delta in seconds
        lastTime = time;

        if (!isPaused && !isDragging) {
            posX -= baseSpeed * delta;
            
            const jumpPoint = getJumpPoint();
            
            // Seamless jump back
            if (Math.abs(posX) >= jumpPoint) {
                posX += jumpPoint;
            }
            track.style.transform = `translate3d(${posX}px, 0, 0)`;
        }
        rafId = requestAnimationFrame(updateLoop);
    };

    // Interaction handlers
    const onMouseEnter = () => { isPaused = true; };
    const onMouseLeave = () => { if (!isDragging) isPaused = false; };

    const startDrag = (e) => {
        isDragging = true;
        viewport.classList.add('is-dragging');
        startX = (e.pageX || (e.touches && e.touches[0].pageX)) - posX;
    };

    const stopDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        isPaused = false;
        lastTime = 0; // Reset lastTime so the next frame starts fresh
        viewport.classList.remove('is-dragging');
    };

    const onDrag = (e) => {
        if (!isDragging) return;
        
        const x = e.pageX || (e.touches && e.touches[0].pageX);
        posX = x - startX;
        
        const jumpPoint = getJumpPoint();

        // Infinite drag bounds management
        if (posX > 0) {
            posX -= jumpPoint;
            startX = (e.pageX || (e.touches && e.touches[0].pageX)) - posX;
        } else if (Math.abs(posX) >= jumpPoint * 2) {
            posX += jumpPoint;
            startX = (e.pageX || (e.touches && e.touches[0].pageX)) - posX;
        }

        track.style.transform = `translate3d(${posX}px, 0, 0)`;
    };

    // Mobile tap-to-reveal toggle
    viewport.addEventListener('click', (e) => {
        const card = e.target.closest('.nature-img-card');
        if (card) {
            if (Math.abs(startX - (e.pageX || (e.touches && e.touches[0].pageX))) > 5) return;
            const isActive = card.classList.contains('active');
            track.querySelectorAll('.nature-img-card.active').forEach(c => c.classList.remove('active'));
            if (!isActive) {
                card.classList.add('active');
            }
        }
    });

    viewport.addEventListener('mouseenter', onMouseEnter);
    viewport.addEventListener('mouseleave', onMouseLeave);
    
    viewport.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('mousemove', onDrag);

    viewport.addEventListener('touchstart', startDrag, { passive: false });
    window.addEventListener('touchend', stopDrag);
    window.addEventListener('touchmove', onDrag, { passive: false });

    // Start loop
    rafId = requestAnimationFrame(updateLoop);
}

function observeNewElements() {
    document.querySelectorAll('.reveal, .reveal-up, .transition-fade, .reveal-scale, .reveal-vs, .reveal-left, .reveal-right, .reveal-plata').forEach(el => {
        if(window.scrollObserver) window.scrollObserver.observe(el);
    });

    // Mobile: Toggle active class on tap for cards with hidden content
    document.querySelectorAll('.nature-img-card, .bento-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                const isActive = this.classList.contains('active');
                if (!isActive) {
                    document.querySelectorAll('.nature-img-card.active, .bento-card.active').forEach(c => c.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
}

// Mobile Hamburger Menu Logic
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const langSwitcher = document.getElementById('lang-switcher');
    
    if (hamburger && navLinks && langSwitcher) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            langSwitcher.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking a nav item or language switch
        document.querySelectorAll('.nav-item, .lang-switcher span, .logo').forEach(el => {
            el.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                langSwitcher.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
});

window.downloadVideo = function(videoUrl) {
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = videoUrl.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// Global Alanya Video Modal Controllers
window.openAlanyaModal = function() {
    const modal = document.getElementById('alanya-modal');
    const iframe = document.getElementById('alanya-iframe');
    if (!modal || !iframe) return;
    
    // Set YouTube source with autoplay
    iframe.src = 'https://www.youtube.com/embed/TSABb4hCLMo?autoplay=1&rel=0&modestbranding=1&color=white';
    
    // Open modal
    modal.classList.add('active');
    
    // Freeze Background Page
    document.body.classList.add('modal-open');
    
    // Add temporary ESC listener
    const escHandler = (e) => {
        if (e.key === 'Escape') window.closeAlanyaModal(null, true);
    };
    window._currentEscHandler = escHandler;
    document.addEventListener('keydown', escHandler);
};

window.closeAlanyaModal = function(event, force = false) {
    // Only close if clicking overlay or close button
    if (!force && event && event.target !== event.currentTarget) return;
    
    const modal = document.getElementById('alanya-modal');
    const iframe = document.getElementById('alanya-iframe');
    if (!modal) return;
    
    // Start closing animation
    modal.classList.remove('active');
    
    // Restore Background Page
    document.body.classList.remove('modal-open');
    
    // Stop video after transition
    if (iframe) {
        setTimeout(() => {
            iframe.src = '';
        }, 450);
    }
    
    // Remove ESC listener
    if (window._currentEscHandler) {
        document.removeEventListener('keydown', window._currentEscHandler);
        window._currentEscHandler = null;
    }
};

function renderClub() {
    state.currentView = 'club';
    const appEl = document.getElementById('app-content');
    if (!appEl) return;
    
    const data = clubData[state.lang] || clubData.ru;
    
    // Advanced word-by-word reveal for premium feel
    const wrapWords = (text, delayOffset = 0) => {
        if (!text) return '';
        return text.split(' ').map((word, i) => `
            <span class="word-wrap">
                <span class="word-inner" style="transition-delay: ${delayOffset + (i * 0.03)}s">${word}&nbsp;</span>
            </span>
        `).join('');
    };

    // Progressive content reveal for mobile (no giant text walls)
    const renderText = (text, limit = 200) => {
        if (!text) return '';
        // Threshold to show the expand button
        const isLong = text.length > limit;
        if (!isLong) return `<p class="luxe-paragraph">${text}</p>`;
        
        return `
            <div class="expandable-text-container luxe-expand-wrapper">
                <p class="luxe-paragraph expandable-content">${text}</p>
                <button class="read-more-btn luxe-expand-trigger" onclick="toggleLuxeText(this)">
                    <span class="btn-text">${state.lang === 'ru' ? 'Читать далее' : 'Read More'}</span>
                    <span class="btn-icon">↓</span>
                </button>
            </div>
        `;
    };

    const renderSection = (section, index) => {
        const { type, label, title, text, image, items, services, id } = section;
        const revealClass = "reveal-plata";
        
        switch (type) {
            case 'editorial':
            case 'editorial-reverse':
                return `
                    <section id="${id}" class="luxe-section editorial-layout ${type === 'editorial-reverse' ? 'reverse' : ''} ${revealClass}">
                        <div class="container">
                            <div class="editorial-grid">
                                <div class="editorial-media">
                                    <div class="media-frame">
                                        <img src="${image || '/assets/images/placeholder.png'}" alt="${title}" loading="lazy">
                                        <div class="media-overlay"></div>
                                    </div>
                                </div>
                                <div class="editorial-content">
                                    <span class="section-label">${label}</span>
                                    <h2 class="luxe-section-title">${wrapWords(title)}</h2>
                                    ${renderText(text)}
                                    <div class="section-divider"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                `;
            
            case 'reveal-cards':
                return `
                    <section id="${id}" class="luxe-section cards-layout ${revealClass}">
                        <div class="container">
                            <div class="section-header center">
                                <span class="section-label">${label}</span>
                                <h2 class="luxe-section-title center">${wrapWords(title)}</h2>
                            </div>
                            <div class="luxe-cards-grid">
                                ${items.map((item, i) => `
                                    <div class="luxe-mini-card" style="transition-delay: ${i * 0.1}s">
                                        <span class="card-step">0${i + 1}</span>
                                        <h3>${item.title}</h3>
                                        <p>${item.text}</p>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="section-text-block center">
                                ${renderText(text, 500)}
                            </div>
                        </div>
                    </section>
                `;

            case 'cinematic-text':
                return `
                    <section id="${id}" class="luxe-section cinematic-text-layout ${revealClass}">
                        <div class="parallax-bg-wrapper">
                            <img src="${image}" alt="Background" class="parallax-img">
                            <div class="cinematic-overlay-dark"></div>
                        </div>
                        <div class="container">
                            <div class="cinematic-content">
                                <span class="section-label gold">${label}</span>
                                <h2 class="luxe-title-large">${wrapWords(title)}</h2>
                                <div class="cinematic-text-wrap">
                                    ${renderText(text, 250)}
                                </div>
                            </div>
                        </div>
                    </section>
                `;

            case 'accordion-list':
                return `
                    <section id="${id}" class="luxe-section accordion-layout ${revealClass}">
                        <div class="container">
                            <div class="accordion-container">
                                <div class="accordion-info">
                                    <span class="section-label">${label}</span>
                                    <h2 class="luxe-section-title">${wrapWords(title)}</h2>
                                    ${renderText(text)}
                                </div>
                                <div class="luxe-accordion">
                                    ${items.slice(0, 5).map((item, i) => `
                                        <div class="accordion-item" onclick="toggleLuxeAccordion(this)">
                                            <div class="accordion-header">
                                                <span class="item-index">${(i + 1).toString().padStart(2, '0')}</span>
                                                <h3>${item.title}</h3>
                                                <span class="accordion-plus">+</span>
                                            </div>
                                            <div class="accordion-body">
                                                <div class="body-content">
                                                    ${item.text}
                                                </div>
                                            </div>
                                        </div>
                                    `).join('')}
                                    
                                    ${items.length > 5 ? `
                                        <div class="accordion-hidden-items">
                                            ${items.slice(5).map((item, i) => `
                                                <div class="accordion-item" onclick="toggleLuxeAccordion(this)">
                                                    <div class="accordion-header">
                                                        <span class="item-index">${(i + 6).toString().padStart(2, '0')}</span>
                                                        <h3>${item.title}</h3>
                                                        <span class="accordion-plus">+</span>
                                                    </div>
                                                    <div class="accordion-body">
                                                        <div class="body-content">
                                                            ${item.text}
                                                        </div>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                        <button class="read-more-btn accordion-expand-trigger" onclick="expandAccordionList(this)" style="margin-top: 30px;">
                                            <span class="btn-text">${state.lang === 'ru' ? 'Показать все направления' : 'Show All Services'}</span>
                                            <span class="btn-icon">↓</span>
                                        </button>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </section>
                `;

            case 'grid-services':
                return `
                    <section id="${id}" class="luxe-section services-grid-layout ${revealClass}">
                        <div class="container">
                            <div class="section-header">
                                <span class="section-label">${label}</span>
                                <h2 class="luxe-section-title">${wrapWords(title)}</h2>
                            </div>
                            <div class="services-luxe-grid">
                                ${services.map((s, i) => `
                                <div class="service-luxe-item" style="transition-delay: ${i * 0.1}s">
                                    <div class="service-header-luxe">
                                        <div class="service-icon-wrap">${s.icon}</div>
                                        <h4>${s.title}</h4>
                                    </div>
                                    <div class="service-info">
                                        <p>${s.text}</p>
                                    </div>
                                </div>
                                `).join('')}
                            </div>
                        </div>
                    </section>
                `;

            case 'gallery-card': {
                const imgs = section.imageUrls || [];
                const ytId = section.youtubeVideoUrl ? getYouTubeId(section.youtubeVideoUrl) : null;
                const hasMedia = imgs.length > 0 || ytId;
                const sectionId = id;

                // Build carousel slides (lazy-loaded, with aspect-ratio placeholder to prevent layout shift)
                const slidesHtml = imgs.map((url, i) => `
                    <div class="gc-slide ${i === 0 ? 'gc-slide--active' : ''}" aria-hidden="${i !== 0}">
                        <div class="gc-img-wrap">
                            <div class="gc-img-skeleton"></div>
                            <img
                                src="${url}"
                                alt="${section.title} — фото ${i + 1}"
                                loading="${i === 0 ? 'eager' : 'lazy'}"
                                decoding="async"
                                class="gc-img"
                                onload="this.classList.add('gc-img--loaded'); this.previousElementSibling.style.opacity='0';"
                                onerror="this.closest('.gc-img-wrap').classList.add('gc-img-wrap--error'); this.previousElementSibling.style.opacity='0';"
                            >
                        </div>
                    </div>
                `).join('');

                // Build dot indicators
                const dotsHtml = imgs.length > 1 ? `
                    <div class="gc-dots" role="tablist" aria-label="Gallery navigation">
                        ${imgs.map((_, i) => `
                            <button class="gc-dot ${i === 0 ? 'gc-dot--active' : ''}"
                                role="tab"
                                aria-selected="${i === 0}"
                                aria-label="Photo ${i + 1}"
                                onclick="window.gcGoTo('${sectionId}', ${i})">
                            </button>
                        `).join('')}
                    </div>
                ` : '';

                // Empty-state placeholder when no images are configured yet
                const emptyStateHtml = `
                    <div class="gc-empty-state">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" width="48" height="48">
                            <rect x="3" y="3" width="18" height="18" rx="3"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <polyline points="21 15 16 10 5 21"/>
                        </svg>
                        <p>${state.lang === 'ru' ? 'Фотографии будут добавлены' : 'Photos coming soon'}</p>
                    </div>
                `;

                // YouTube embed section
                const ytHtml = ytId ? `
                    <div class="gc-yt-wrap">
                        <div class="gc-yt-label">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/>
                            </svg>
                            <span>${state.lang === 'ru' ? 'Видео об объектах' : 'Property video'}</span>
                        </div>
                        <div class="gc-yt-frame-wrap">
                            <iframe
                                class="gc-yt-iframe"
                                src="https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1&playsinline=1"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                loading="lazy"
                                title="${section.title}"
                            ></iframe>
                        </div>
                    </div>
                ` : '';

                return `
                    <section id="${sectionId}" class="luxe-section gc-section ${revealClass}">
                        <div class="container">
                            <div class="gc-wrapper">

                                <!-- LEFT: Text column -->
                                <div class="gc-text-col">
                                    <span class="section-label">${label}</span>
                                    <h2 class="luxe-section-title">${wrapWords(title)}</h2>
                                    <p class="gc-subtitle-line">${section.subtitle || ''}</p>
                                    <p class="gc-description">${section.description || ''}</p>
                                    <div class="section-divider"></div>
                                    ${section.callToActionLink ? `
                                        <a href="${section.callToActionLink}" target="_blank" rel="noopener noreferrer" class="gc-cta-btn">
                                            <span>${section.callToActionText || (state.lang === 'ru' ? 'Запросить приглашение' : 'Request Invitation')}</span>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                                                <line x1="5" y1="12" x2="19" y2="12"/>
                                                <polyline points="12 5 19 12 12 19"/>
                                            </svg>
                                        </a>
                                    ` : ''}
                                </div>

                                <!-- RIGHT: Media column -->
                                <div class="gc-media-col">

                                    <!-- Image Gallery Carousel -->
                                    ${imgs.length > 0 ? `
                                        <div class="gc-carousel" id="gc-carousel-${sectionId}" aria-roledescription="carousel" aria-label="${section.title}">
                                            <div class="gc-track" id="gc-track-${sectionId}">
                                                ${slidesHtml}
                                            </div>

                                            ${imgs.length > 1 ? `
                                                <button class="gc-arrow gc-arrow--prev" aria-label="Previous photo"
                                                    onclick="window.gcMove('${sectionId}', -1)">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                                        <polyline points="15 18 9 12 15 6"/>
                                                    </svg>
                                                </button>
                                                <button class="gc-arrow gc-arrow--next" aria-label="Next photo"
                                                    onclick="window.gcMove('${sectionId}', 1)">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                                        <polyline points="9 18 15 12 9 6"/>
                                                    </svg>
                                                </button>

                                                <div class="gc-counter" aria-live="polite">
                                                    <span id="gc-current-${sectionId}">1</span>
                                                    <span class="gc-counter-sep">/</span>
                                                    <span>${imgs.length}</span>
                                                </div>

                                                ${dotsHtml}
                                            ` : ''}
                                        </div>
                                    ` : emptyStateHtml}

                                    <!-- YouTube Embed (shown below carousel if configured) -->
                                    ${ytHtml}

                                </div><!-- /gc-media-col -->

                            </div><!-- /gc-wrapper -->
                        </div><!-- /container -->
                    </section>
                `;
            }

            case 'cinematic-footer':
                return `
                    <section id="${id}" class="luxe-section final-cta-layout ${revealClass}">
                        <div class="container">
                            <div class="final-cta-container">
                                <div class="cta-line"></div>
                                <span class="section-label gold">${label}</span>
                                <h2 class="luxe-title-xl">${wrapWords(title)}</h2>
                                <p class="cta-subtitle">${section.subtitle}</p>
                                <a href="https://t.me/fortuna_private_club" target="_blank" class="btn-luxe-cinematic">
                                    <span>${section.btn}</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </a>
                            </div>
                        </div>
                    </section>
                `;
            
            default:
                return '';
        }
    };

    const html = `
        <div class="club-page cinematic-theme transition-fade">
            <!-- LUXE HERO -->
            <section class="cinematic-hero">
                <div class="hero-visual">
                    <img src="/assets/images/club_hero_luxe.png" alt="Fortuna Private Club">
                    <div class="hero-mask"></div>
                </div>
                <div class="hero-content-luxe">
                    <div class="scroll-progress-indicator">
                        <div class="progress-bar"></div>
                    </div>
                    <h1 class="hero-title-main">${wrapWords(data.hero.title)}</h1>
                    <div class="hero-sub-reveal reveal-up" style="transition-delay: 0.8s">
                        <span class="gold-line"></span>
                        <p>${data.hero.subtitle}</p>
                    </div>
                </div>
            </section>

            <!-- MODULAR SECTIONS -->
            <div class="club-sections-container">
                ${data.sections.map((section, index) => renderSection(section, index)).join('')}
            </div>

            <!-- FLOATING PROGRESS REMOVED -->
        </div>
    `;

    appEl.innerHTML = html;
    
    // Re-initialize scroll observer for new elements
    if (window.scrollObserver) {
        appEl.querySelectorAll('.reveal-plata, .reveal-up').forEach(el => window.scrollObserver.observe(el));
    }

    // ─────────────────────────────────────────────────────────────────────────
    // GALLERY-CARD CAROUSEL ENGINE
    // Supports multiple carousel instances on the same page, each by section ID
    // ─────────────────────────────────────────────────────────────────────────
    const gcStateMap = {};  // { [sectionId]: { index, total, autoTimer } }

    function gcInit(sectionId) {
        const track = document.getElementById(`gc-track-${sectionId}`);
        if (!track) return;
        const slides = track.querySelectorAll('.gc-slide');
        if (!slides.length) return;

        gcStateMap[sectionId] = { index: 0, total: slides.length, autoTimer: null };
        gcStartAuto(sectionId);

        // Touch swipe support
        const carousel = document.getElementById(`gc-carousel-${sectionId}`);
        if (!carousel) return;

        let touchStartX = 0;
        carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
        carousel.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) window.gcMove(sectionId, diff > 0 ? 1 : -1);
        }, { passive: true });

        // Pause auto on hover / focus
        carousel.addEventListener('mouseenter', () => gcStopAuto(sectionId));
        carousel.addEventListener('mouseleave', () => gcStartAuto(sectionId));
        carousel.addEventListener('focusin', () => gcStopAuto(sectionId));
        carousel.addEventListener('focusout', () => gcStartAuto(sectionId));
    }

    function gcRender(sectionId) {
        const st = gcStateMap[sectionId];
        if (!st) return;
        const track = document.getElementById(`gc-track-${sectionId}`);
        if (!track) return;

        const slides = track.querySelectorAll('.gc-slide');
        slides.forEach((slide, i) => {
            slide.classList.toggle('gc-slide--active', i === st.index);
            slide.setAttribute('aria-hidden', i !== st.index);
        });

        // Update dot indicators
        const dots = document.querySelectorAll(`#gc-carousel-${sectionId} .gc-dot`);
        dots.forEach((dot, i) => {
            dot.classList.toggle('gc-dot--active', i === st.index);
            dot.setAttribute('aria-selected', i === st.index);
        });

        // Update counter
        const counter = document.getElementById(`gc-current-${sectionId}`);
        if (counter) counter.textContent = st.index + 1;
    }

    window.gcMove = function(sectionId, dir) {
        const st = gcStateMap[sectionId];
        if (!st) return;
        gcStopAuto(sectionId);
        st.index = (st.index + dir + st.total) % st.total;
        gcRender(sectionId);
        gcStartAuto(sectionId);
    };

    window.gcGoTo = function(sectionId, idx) {
        const st = gcStateMap[sectionId];
        if (!st) return;
        gcStopAuto(sectionId);
        st.index = idx;
        gcRender(sectionId);
        gcStartAuto(sectionId);
    };

    function gcStartAuto(sectionId) {
        const st = gcStateMap[sectionId];
        if (!st || st.total <= 1) return;
        gcStopAuto(sectionId);
        st.autoTimer = setInterval(() => {
            if (state.currentView !== 'club') { gcStopAuto(sectionId); return; }
            st.index = (st.index + 1) % st.total;
            gcRender(sectionId);
        }, 5000);
    }

    function gcStopAuto(sectionId) {
        const st = gcStateMap[sectionId];
        if (st && st.autoTimer) { clearInterval(st.autoTimer); st.autoTimer = null; }
    }

    // Initialize all gallery-card carousels present on this page
    data.sections.forEach(sec => {
        if (sec.type === 'gallery-card' && sec.imageUrls && sec.imageUrls.length > 1) {
            gcInit(sec.id);
        }
    });


    window.toggleLuxeText = (btn) => {
        const container = btn.closest('.luxe-expand-wrapper');
        const content = container.querySelector('.expandable-content');
        const isExpanded = container.classList.contains('expanded');
        
        // Asymmetric timing configuration
        const openDuration = 0.6; 
        const closeDuration = 1.2; // Twice as slow, ultra-premium
        const easing = 'cubic-bezier(0.22, 1, 0.36, 1)'; // Extra-smooth cubic
        
        if (isExpanded) {
            // --- CLOSE ---
            // 1. Lock current height in px to ensure transition starts from real value
            const currentHeight = content.offsetHeight;
            content.style.maxHeight = currentHeight + 'px';
            
            // 2. Force reflow
            content.offsetHeight;
            
            // 3. Apply slow transition and target height
            content.style.transition = `max-height ${closeDuration}s ${easing}, opacity ${closeDuration}s ${easing}`;
            content.style.maxHeight = '5.4em'; // Collapsed state
            
            btn.classList.remove('active');
            
            // Toggle Button Text/Icon
            const btnText = btn.querySelector('.btn-text');
            const btnIcon = btn.querySelector('.btn-icon');
            if (btnText) btnText.textContent = state.lang === 'ru' ? 'Читать далее' : 'Read More';
            if (btnIcon) btnIcon.textContent = '↓';
            
            // 4. Delay class removal until transition ends (to keep line-clamp unset & fade smooth)
            if (content._closeTimeout) clearTimeout(content._closeTimeout);
            content._closeTimeout = setTimeout(() => {
                if (!btn.classList.contains('active')) {
                    container.classList.remove('expanded');
                    content.style.transition = ''; // Clean up
                }
            }, closeDuration * 1000);
            
        } else {
            // --- OPEN ---
            // 1. Prepare for expansion
            container.classList.add('expanded'); // Add first to calculate real scrollHeight (line-clamp: unset)
            const fullHeight = content.scrollHeight;
            
            // 2. Reset to collapsed start point for transition
            content.style.transition = 'none';
            content.style.maxHeight = '5.4em';
            
            // 3. Force reflow
            content.offsetHeight;
            
            // 4. Apply transition and target full height
            content.style.transition = `max-height ${openDuration}s ${easing}, opacity ${openDuration}s ${easing}`;
            content.style.maxHeight = fullHeight + 'px';
            btn.classList.add('active');

            // Toggle Button Text/Icon
            const btnText = btn.querySelector('.btn-text');
            const btnIcon = btn.querySelector('.btn-icon');
            if (btnText) btnText.textContent = state.lang === 'ru' ? 'Свернуть' : 'Read Less';
            if (btnIcon) btnIcon.textContent = '↑';
            
            if (content._closeTimeout) clearTimeout(content._closeTimeout);
        }
    };

    window.toggleLuxeAccordion = (item) => {
        const isActive = item.classList.contains('active');
        const parent = item.parentElement;
        const body = item.querySelector('.accordion-body');
        
        // Asymmetric timing
        const openDuration = 0.7;
        const closeDuration = 1.4; // Twice as slow
        const easing = 'cubic-bezier(0.22, 1, 0.36, 1)';

        // Close others with premium slow timing
        parent.querySelectorAll('.accordion-item').forEach(el => {
            if (el !== item && el.classList.contains('active')) {
                const otherBody = el.querySelector('.accordion-body');
                otherBody.style.transition = `max-height ${closeDuration}s ${easing}`;
                otherBody.style.maxHeight = '0';
                
                // Delay class removal for visual continuity
                setTimeout(() => {
                    if (!otherBody.style.maxHeight || otherBody.style.maxHeight === '0px') {
                        el.classList.remove('active');
                    }
                }, closeDuration * 1000);
            }
        });
        
        if (!isActive) {
            // OPEN
            const fullHeight = body.scrollHeight;
            body.style.transition = `max-height ${openDuration}s ${easing}`;
            body.style.maxHeight = fullHeight + 'px';
            item.classList.add('active');
        } else {
            // CLOSE
            body.style.transition = `max-height ${closeDuration}s ${easing}`;
            body.style.maxHeight = '0';
            
            // Delay class removal
            setTimeout(() => {
                if (body.style.maxHeight === '0px' || body.style.maxHeight === '0') {
                    item.classList.remove('active');
                }
            }, closeDuration * 1000);
        }
    };

    window.expandAccordionList = (btn) => {
        const container = btn.previousElementSibling;
        if (!container) return;
        
        const btnText = btn.querySelector('.btn-text');
        const btnIcon = btn.querySelector('.btn-icon');
        const isExpanded = btn.classList.contains('active-expanded');

        if (!isExpanded) {
            // EXPAND
            container.classList.add('active');
            
            // Progressive cinematic reveal of items inside
            const items = container.querySelectorAll('.accordion-item');
            items.forEach((item, i) => {
                // Pre-set state for clean animation
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                item.style.transition = 'none'; 
                
                setTimeout(() => {
                    item.style.transition = 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 200 + (i * 80)); // More pronounced staggering
            });
            
            btn.classList.add('active-expanded');
            if (btnText) btnText.textContent = state.lang === 'ru' ? 'Скрыть направления' : 'Hide Services';
            if (btnIcon) btnIcon.textContent = '↑';
        } else {
            // COLLAPSE
            container.classList.remove('active');
            
            // Scroll back slightly for orientation
            setTimeout(() => {
                btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
            
            btn.classList.remove('active-expanded');
            if (btnText) btnText.textContent = state.lang === 'ru' ? 'Показать все направления' : 'Show All Services';
            if (btnIcon) btnIcon.textContent = '↓';
        }
    };

    // Scroll progress & Navigation highlighting
    window.addEventListener('scroll', handleClubScroll, { passive: true });
    
    function handleClubScroll() {
        if (state.currentView !== 'club') {
            window.removeEventListener('scroll', handleClubScroll);
            return;
        }

        const sections = document.querySelectorAll('.luxe-section');
        const dots = document.querySelectorAll('.club-nav-dot');
        const progressBar = document.querySelector('.progress-bar');
        
        let currentSectionId = '';
        const scrollPos = window.scrollY + window.innerHeight / 3;

        sections.forEach(sec => {
            if (scrollPos >= sec.offsetTop) {
                currentSectionId = sec.id;
            }
        });

        dots.forEach(dot => {
            const href = dot.getAttribute('href').substring(1);
            dot.classList.toggle('active', href === currentSectionId);
        });

        // Overall progress
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        if (progressBar) progressBar.style.height = `${progress}%`;
    }

    // Trigger initial reveal
    requestAnimationFrame(() => {
        const pageEl = appEl.querySelector('.club-page');
        if (pageEl) pageEl.classList.add('visible');
    });
}

