const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, 'js', 'app.js');
let js = fs.readFileSync(jsPath, 'utf8');

const startMarker = '// About View\r\nfunction renderAbout() {';
const altStartMarker = '// About View\nfunction renderAbout() {';
const endMarker = '// Premium Navigation logic';

let startIndex = js.indexOf(startMarker);
if (startIndex === -1) startIndex = js.indexOf(altStartMarker);
const endIndex = js.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find markers', startIndex, endIndex);
    process.exit(1);
}

const newRenderAbout = `// About View
function renderAbout() {
    state.currentView = 'about';
    const appEl = document.getElementById('app-content');
    
    // Helper function to easily access translated strings
    const tr = (block, key) => {
        if(!aboutData || !aboutData[block] || !aboutData[block][key]) return "";
        const item = aboutData[block][key];
        return item[state.lang] || item['en'] || '';
    };

    // 1. Immersive Hero
    const introHtml = \`
        <section class="about-hero-premium">
            <div class="hero-bg parallax" style="background-image: url('https://images.unsplash.com/photo-1542055909-58b991daee9f?q=80&w=2000&auto=format&fit=crop');"></div>
            <div class="hero-overlay"></div>
            <div class="hero-content reveal-up">
                <h1>\${tr('intro', 'headline')}</h1>
                <p class="about-subheadline">\${tr('intro', 'subheadline')}</p>
                <div class="hero-cta-group">
                    <button class="btn-primary" onclick="navigate('catalog'); window.scrollTo(0,0);">\${tr('intro', 'btn_explore')}</button>
                    <button class="btn-secondary" onclick="document.getElementById('about-special').scrollIntoView({behavior: 'smooth'})">\${tr('intro', 'btn_discover')}</button>
                </div>
            </div>
            <div class="scroll-indicator">
                <div class="mouse"><div class="wheel"></div></div>
            </div>
        </section>
    \`;

    // 2. Why Alanya Feels Different
    const specialFeaturesHtml = aboutData.special.features.map((f, i) => \`
        <div class="special-feature-item reveal-up" style="transition-delay: \${i * 0.1}s">
            <h3>\${f.title[state.lang] || f.title['en']}</h3>
            <p>\${f.desc[state.lang] || f.desc['en']}</p>
        </div>
    \`).join('');
    const specialHtml = \`
        <section id="about-special" class="about-section about-special">
            <div class="container">
                <h2 class="section-title reveal-up">\${tr('special', 'title')}</h2>
                <div class="special-grid">
                    \${specialFeaturesHtml}
                </div>
            </div>
        </section>
    \`;

    // 3. Lifestyle Story (Scroll Story Blocks)
    const lifestyleHtml = aboutData.lifestyle.blocks.map((block, i) => \`
        <div class="story-block">
            <div class="story-bg" style="background-image: url('\${block.img}');"></div>
            <div class="story-overlay"></div>
            <div class="story-content reveal-up" style="transition-delay: 0.2s;">
                <span class="story-phase">\${block.phase[state.lang] || block.phase['en']}</span>
                <p class="story-text">\${block.text[state.lang] || block.text['en']}</p>
            </div>
        </div>
    \`).join('');
    const lifestyleSectionHtml = \`
        <section class="lifestyle-scroll-container">
            \${lifestyleHtml}
        </section>
    \`;

    // 4. Iconic Places (Bento Grid)
    const landmarksHtml = aboutData.landmarks.items.map((lm, i) => \`
        <div class="bento-card \${lm.size} reveal-scale" style="transition-delay: \${Math.min(i * 0.1, 0.4)}s">
            <div class="bento-bg" style="background-image: url('\${lm.img}');"></div>
            <div class="bento-overlay-gradient"></div>
            <div class="bento-content">
                <h3>\${lm.name[state.lang] || lm.name['en']}</h3>
                <p>\${lm.desc[state.lang] || lm.desc['en']}</p>
            </div>
        </div>
    \`).join('');
    const bentoHtml = \`
        <section class="about-section about-landmarks">
            <div class="container">
                <h2 class="section-title reveal-up">\${tr('landmarks', 'title')}</h2>
                <div class="bento-grid">
                    \${landmarksHtml}
                </div>
            </div>
        </section>
    \`;

    // 5. Beach & Nature Immersion (Horizontal Scroll)
    const natureImagesHtml = aboutData.nature.images.map(img => \`
        <div class="nature-img-card">
            <img src="\${img}" alt="Nature Alanya" loading="lazy">
        </div>
    \`).join('');
    const natureHtml = \`
        <section class="about-section about-nature about-section-pb">
            <div class="nature-header reveal-up">
                <h2 class="section-title">\${tr('nature', 'title')}</h2>
                <p>\${tr('nature', 'text')}</p>
            </div>
            <div class="horizontal-scroll-container reveal-up">
                \${natureImagesHtml}
            </div>
        </section>
    \`;

    // 6. Food & Atmosphere
    const culinaryCardsHtml = aboutData.culinary.cards.map((c, i) => \`
        <div class="culinary-card reveal-up" style="transition-delay: \${i * 0.1}s">
            <h3>\${c.title[state.lang] || c.title['en']}</h3>
            <p>\${c.desc[state.lang] || c.desc['en']}</p>
        </div>
    \`).join('');
    const culinaryHtml = \`
        <section class="about-section about-culinary">
            <div class="container">
                <h2 class="section-title reveal-up">\${tr('culinary', 'title')}</h2>
                <div class="culinary-grid">
                    \${culinaryCardsHtml}
                </div>
            </div>
        </section>
    \`;

    // 7. Who is this for
    const guestsHtml = aboutData.guests.items.map((g, i) => \`
        <div class="guest-card reveal-up" style="transition-delay: \${i * 0.1}s">
            <div class="guest-icon">\${g.icon}</div>
            <h3>\${g.tag[state.lang] || g.tag['en']}</h3>
            <p>\${g.text[state.lang] || g.text['en']}</p>
        </div>
    \`).join('');
    const guestsSectionHtml = \`
        <section class="about-section about-guests">
            <div class="container">
                <h2 class="section-title reveal-up">\${tr('guests', 'title')}</h2>
                <div class="guests-grid">
                    \${guestsHtml}
                </div>
            </div>
        </section>
    \`;

    // 8. Why Rent Here
    const rentingHtml = \`
        <section class="about-section about-renting">
            <div class="container">
                <h2 class="section-title reveal-up">\${tr('renting', 'title')}</h2>
                <div class="rent-compare-grid reveal-scale">
                    <div class="compare-col hotel">
                        <h3>\${tr('renting', 'comparison').hotel.title[state.lang] || tr('renting', 'comparison').hotel.title['en']}</h3>
                        <p>\${tr('renting', 'comparison').hotel.points[state.lang] || tr('renting', 'comparison').hotel.points['en']}</p>
                    </div>
                    <div class="compare-vs">VS</div>
                    <div class="compare-col apartment">
                        <h3>\${tr('renting', 'comparison').apartment.title[state.lang] || tr('renting', 'comparison').apartment.title['en']}</h3>
                        <p>\${tr('renting', 'comparison').apartment.points[state.lang] || tr('renting', 'comparison').apartment.points['en']}</p>
                    </div>
                </div>
            </div>
        </section>
    \`;

    // 9 & 10. Transition & Conversion
    const conversionHtml = \`
        <section class="about-conversion-block transition-fade">
            <div class="about-bg-motion"></div>
            <div class="container conversion-container reveal-up">
                <h2>\${tr('conversion', 'title')}</h2>
                <p>\${tr('conversion', 'text')}</p>
                <button class="btn-primary cta-btn" onclick="navigate('catalog'); window.scrollTo(0,0);">
                    \${tr('conversion', 'cta')}
                </button>
            </div>
        </section>
    \`;

    appEl.innerHTML = \`
        <div class="about-page premium-version transition-fade">
            \${introHtml}
            \${specialHtml}
            \${lifestyleSectionHtml}
            \${bentoHtml}
            \${natureHtml}
            \${culinaryHtml}
            \${guestsSectionHtml}
            \${rentingHtml}
            \${conversionHtml}
        </div>
    \`;

    observeNewElements();

    // Attach specific scroll observation for parallax elements inside about page
    setTimeout(() => {
        if(window.initScrollEffects) window.initScrollEffects(); 
        window.scrollTo({ top: 0, behavior: 'instant' });
        
        // Custom parallax effect just for About Page elements
        const parallaxBgs = document.querySelectorAll('.about-page .parallax');
        const storyBgs = document.querySelectorAll('.about-page .story-bg');
        
        window.addEventListener('scroll', () => {
            if(state.currentView !== 'about') return;
            const scrollY = window.scrollY;
            
            parallaxBgs.forEach(bg => {
                const speed = 0.4;
                bg.style.transform = \`translateY(\${scrollY * speed}px)\`;
            });
            
            storyBgs.forEach(bg => {
                const rect = bg.parentElement.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                    bg.style.transform = \`translateY(\${(progress - 0.5) * 100}px)\`;
                }
            });
        });

    }, 50);
}

`;

js = js.substring(0, startIndex) + newRenderAbout + js.substring(endIndex);

fs.writeFileSync(jsPath, js, 'utf8');
console.log('App logic updated successfully!');
