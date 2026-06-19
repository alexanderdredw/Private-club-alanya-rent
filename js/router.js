/**
 * router.js — SEO-Friendly History API Router
 * Fortuna Private Club | fortunarentalanya.com
 *
 * Responsibilities:
 *  1. slugify()       — Convert a title to a URL-safe slug
 *  2. buildRouteMap() — Build a bidirectional map of URL ↔ {view, id}
 *  3. resolveRoute()  — Resolve a pathname to a {view, id}
 *  4. getURL()        — Get the canonical URL for a {view, id}
 *  5. pushRoute()     — Update the browser address bar via History API
 *  6. updateSEO()     — Dynamically set <title>, <meta>, <canonical>, OG tags
 */

const SITE_DOMAIN = 'https://alanya-luxe-premium-rentals.netlify.app';

// ─────────────────────────────────────────────────────────────────
// 1. SLUG GENERATOR
// ─────────────────────────────────────────────────────────────────
function slugify(text) {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .trim()
        // Transliterate common Cyrillic characters for Russian titles
        .replace(/а/g, 'a').replace(/б/g, 'b').replace(/в/g, 'v')
        .replace(/г/g, 'g').replace(/д/g, 'd').replace(/е/g, 'e')
        .replace(/ё/g, 'yo').replace(/ж/g, 'zh').replace(/з/g, 'z')
        .replace(/и/g, 'i').replace(/й/g, 'y').replace(/к/g, 'k')
        .replace(/л/g, 'l').replace(/м/g, 'm').replace(/н/g, 'n')
        .replace(/о/g, 'o').replace(/п/g, 'p').replace(/р/g, 'r')
        .replace(/с/g, 's').replace(/т/g, 't').replace(/у/g, 'u')
        .replace(/ф/g, 'f').replace(/х/g, 'kh').replace(/ц/g, 'ts')
        .replace(/ч/g, 'ch').replace(/ш/g, 'sh').replace(/щ/g, 'shch')
        .replace(/ъ/g, '').replace(/ы/g, 'y').replace(/ь/g, '')
        .replace(/э/g, 'e').replace(/ю/g, 'yu').replace(/я/g, 'ya')
        // Replace non-alphanumeric characters with hyphens
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// ─────────────────────────────────────────────────────────────────
// 2. STATIC PAGE ROUTE DEFINITIONS
// ─────────────────────────────────────────────────────────────────
const STATIC_ROUTES = {
    // URL path → { view, id }
    '/':                           { view: 'home',       id: null },
    '/apartments':                 { view: 'catalog',    id: null },
    '/about-alanya':               { view: 'about',      id: null },
    '/property-management':        { view: 'management', id: null },
    '/private-club':               { view: 'club',       id: null },
    // Landmark pages
    '/about-alanya/alanya-castle':          { view: 'landmark', id: 'castle' },
    '/about-alanya/cleopatra-beach':        { view: 'landmark', id: 'cleopatra' },
    '/about-alanya/red-tower':              { view: 'landmark', id: 'redtower' },
    '/about-alanya/marina':                 { view: 'landmark', id: 'marina' },
    '/about-alanya/dim-cave':               { view: 'landmark', id: 'cave' },
    '/about-alanya/dimcay-river':           { view: 'landmark', id: 'dimcay' },
    // Landmark articles
    '/about-alanya/alanya-castle/article':  { view: 'article',  id: 'castle' },
    '/about-alanya/cleopatra-beach/article':{ view: 'article',  id: 'cleopatra' },
    '/about-alanya/red-tower/article':      { view: 'article',  id: 'redtower' },
    '/about-alanya/marina/article':         { view: 'article',  id: 'marina' },
    '/about-alanya/dim-cave/article':       { view: 'article',  id: 'cave' },
    '/about-alanya/dimcay-river/article':   { view: 'article',  id: 'dimcay' },
};

// Reverse map: { view+id → url path }
const STATIC_REVERSE = {};
for (const [path, target] of Object.entries(STATIC_ROUTES)) {
    const key = target.id ? `${target.view}:${target.id}` : target.view;
    STATIC_REVERSE[key] = path;
}

// ─────────────────────────────────────────────────────────────────
// 3. DYNAMIC ROUTE MAP (built once from apartmentsData)
// ─────────────────────────────────────────────────────────────────
let _apartmentRoutes = null;      // { slug → aptId }
let _apartmentSlugs  = null;      // { aptId → slug }

function buildApartmentRoutes() {
    if (_apartmentRoutes) return;
    _apartmentRoutes = {};
    _apartmentSlugs  = {};

    if (typeof apartmentsData === 'undefined') return;

    apartmentsData.forEach(apt => {
        // Always prefer the English title for slugs (stable, Latin characters)
        const titleEn = (apt.title && apt.title['en']) ? apt.title['en'] : (apt.title['ru'] || '');
        const slug = slugify(titleEn);
        _apartmentRoutes[slug] = apt.id;
        _apartmentSlugs[apt.id] = slug;
    });
}

// ─────────────────────────────────────────────────────────────────
// 4. ROUTE RESOLVER — pathname → { view, id }
// ─────────────────────────────────────────────────────────────────
function resolveRoute(pathname) {
    // Normalise: strip trailing slash (except root)
    const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;

    // Check static routes first
    if (STATIC_ROUTES[path]) {
        return { ...STATIC_ROUTES[path] };
    }

    // Check apartment routes: /apartments/<slug>
    const aptMatch = path.match(/^\/apartments\/(.+)$/);
    if (aptMatch) {
        buildApartmentRoutes();
        const slug = aptMatch[1];
        const aptId = _apartmentRoutes[slug];
        if (aptId) {
            return { view: 'apartment', id: aptId };
        }
    }

    // Fallback to home
    return { view: 'home', id: null };
}

// ─────────────────────────────────────────────────────────────────
// 5. URL GETTER — { view, id } → canonical path
// ─────────────────────────────────────────────────────────────────
function getURL(view, id) {
    // Check static reverse map
    const key = id ? `${view}:${id}` : view;
    if (STATIC_REVERSE[key]) return STATIC_REVERSE[key];

    // Apartment pages
    if (view === 'apartment' && id) {
        buildApartmentRoutes();
        const slug = _apartmentSlugs[id];
        if (slug) return `/apartments/${slug}`;
    }

    return '/';
}

// ─────────────────────────────────────────────────────────────────
// 6. PUSH ROUTE — update the browser address bar
// ─────────────────────────────────────────────────────────────────
function pushRoute(view, id) {
    const path = getURL(view, id);
    const currentPath = window.location.pathname;
    if (currentPath !== path) {
        try {
            history.pushState({ view, id }, '', path);
        } catch(e) {
            console.warn("History API pushState restricted (local file).");
        }
    }
}

// ─────────────────────────────────────────────────────────────────
// 7. SEO META UPDATER
// ─────────────────────────────────────────────────────────────────
const SEO_META = {
    home: {
        title: 'Fortuna Private Club — Premium Apartment Rentals in Alanya, Turkey',
        description: 'Exclusive premium apartments for rent in Alanya, Turkey. Beachfront, designer interiors, pools, and five-star service. Book directly with no commissions.',
    },
    catalog: {
        title: 'All Apartments — Fortuna Private Club | Alanya Rentals',
        description: 'Browse all premium apartments available for rent in Alanya, Turkey. Designer interiors, sea views, and top-tier amenities.',
    },
    about: {
        title: 'About Alanya — Fortuna Private Club | Life on the Mediterranean',
        description: 'Discover Alanya: 300+ sunny days, stunning beaches, historic landmarks, and vibrant lifestyle. Your perfect holiday destination in Turkey.',
    },
    management: {
        title: 'Property Management in Alanya — Fortuna Private Club',
        description: 'Professional property management and apartment furnishing services in Alanya. Maximize your rental income with Fortuna Private Club.',
    },
    club: {
        title: 'About Fortuna Private Club — Exclusive Lifestyle in Alanya',
        description: 'Fortuna Private Club — a premium community for those who choose an exclusive lifestyle on the Turkish Riviera.',
    },
};

const LANDMARK_META = {
    castle:    { title: 'Alanya Castle',      description: 'The iconic medieval fortress of Alanya standing 250 metres above the sea, offering panoramic views of the Mediterranean.' },
    cleopatra: { title: 'Cleopatra Beach',    description: 'The legendary Cleopatra Beach — one of the most beautiful sandy beaches in the Mediterranean, stretching 2km along Alanya\'s shore.' },
    redtower:  { title: 'The Red Tower',      description: 'The iconic Red Tower of Alanya, a 13th century defensive masterpiece and the symbol of the city.' },
    marina:    { title: 'Alanya Marina',      description: 'Alanya\'s modern marina — a gateway to Mediterranean sea adventures, yacht tours, and coastal living.' },
    cave:      { title: 'Dim Cave',           description: 'One of Turkey\'s most spectacular underground caves, featuring stunning stalactites and a crystal underground lake.' },
    dimcay:    { title: 'Dimçay River',       description: 'The peaceful Dimçay River — a lush natural escape just minutes from Alanya\'s beaches, perfect for riverside dining and relaxation.' },
};

function updateSEO(view, id) {
    buildApartmentRoutes();

    let title = 'Fortuna Private Club — Premium Rentals in Alanya';
    let description = 'Exclusive premium apartments for rent in Alanya, Turkey.';
    const canonicalPath = getURL(view, id);
    const canonicalURL  = SITE_DOMAIN + canonicalPath;

    if (view === 'apartment' && id) {
        // Find apartment data
        const apt = typeof apartmentsData !== 'undefined'
            ? apartmentsData.find(a => a.id === id)
            : null;
        if (apt) {
            const aptTitle = (apt.title && apt.title['en']) ? apt.title['en'] : (apt.title['ru'] || '');
            const aptDesc  = (apt.description && apt.description['en']) ? apt.description['en'] : (apt.description['ru'] || '');
            title       = `${aptTitle} — Alanya Rental | Fortuna Private Club`;
            description = aptDesc.replace(/<[^>]*>/g, '').substring(0, 160);
        }
    } else if ((view === 'landmark' || view === 'article') && id) {
        const lm = LANDMARK_META[id];
        if (lm) {
            const suffix = view === 'article' ? ' — Full Article' : ' — Alanya Attraction';
            title       = `${lm.title}${suffix} | Fortuna Private Club`;
            description = lm.description;
        }
    } else if (SEO_META[view]) {
        title       = SEO_META[view].title;
        description = SEO_META[view].description;
    }

    // ── Update <title> ──
    document.title = title;

    // ── Update or create <meta name="description"> ──
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // ── Update <link rel="canonical"> ──
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
    }
    canonical.href = canonicalURL;

    // ── Update Open Graph tags ──
    const ogTags = {
        'og:title':       title,
        'og:description': description,
        'og:url':         canonicalURL,
        'og:type':        view === 'apartment' ? 'product' : 'website',
        'og:site_name':   'Fortuna Private Club',
    };
    for (const [property, content] of Object.entries(ogTags)) {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute('property', property);
            document.head.appendChild(tag);
        }
        tag.content = content;
    }

    // ── Update <html lang> based on the page language state (if available) ──
    // (We don't force English here since the site is bilingual; we keep the current lang)
}

// ─────────────────────────────────────────────────────────────────
// 8. POPSTATE HANDLER — browser Back / Forward
// ─────────────────────────────────────────────────────────────────
function handlePopState(event) {
    let view, id;
    if (event.state && event.state.view) {
        view = event.state.view;
        id   = event.state.id || null;
    } else {
        const resolved = resolveRoute(window.location.pathname);
        view = resolved.view;
        id   = resolved.id;
    }
    // Call the app's navigate function without pushing a new history entry
    if (typeof navigateInternal === 'function') {
        navigateInternal(view, id);
    }
}

window.addEventListener('popstate', handlePopState);

// ─────────────────────────────────────────────────────────────────
// 9. EXPORTS (attached to window for use across scripts)
// ─────────────────────────────────────────────────────────────────
window.router = {
    slugify,
    resolveRoute,
    getURL,
    pushRoute,
    updateSEO,
    buildApartmentRoutes,
    SITE_DOMAIN,
};
