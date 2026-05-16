const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const marker = '/* =========================================================\r\n   PREMIUM EDITORIAL "ABOUT ALANYA" EXPERIENCE';
const markerPos = css.indexOf(marker);

const altMarker = '/* =========================================================\n   PREMIUM EDITORIAL "ABOUT ALANYA" EXPERIENCE';
const finalMarkerPos = markerPos !== -1 ? markerPos : css.indexOf(altMarker);

if (finalMarkerPos !== -1) {
    css = css.substring(0, finalMarkerPos);
}

const newCss = `/* =========================================================
   PREMIUM EDITORIAL "ABOUT ALANYA" EXPERIENCE
   ========================================================= */

/* Base & Typography */
.about-page.premium-version {
    background-color: #0d1624;
    color: #f5f5f5;
    font-family: 'Inter', sans-serif;
}
.about-page.premium-version h1, 
.about-page.premium-version h2, 
.about-page.premium-version h3 {
    font-family: 'Playfair Display', serif;
    letter-spacing: -0.02em;
}

/* 1. Immersive Hero */
.about-hero-premium {
    position: relative;
    height: 100vh;
    min-height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
}
.about-hero-premium .hero-bg.parallax {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 110%;
    background-size: cover;
    background-position: center;
    z-index: 1;
    transform: translateZ(0);
}
.about-hero-premium .hero-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(135deg, rgba(13, 22, 36, 0.8) 0%, rgba(13, 22, 36, 0.3) 100%);
    z-index: 2;
}
.about-hero-premium .hero-content {
    position: relative;
    z-index: 3;
    max-width: 900px;
    padding: 0 40px;
}
.about-hero-premium h1 {
    font-size: clamp(3rem, 6vw, 5.5rem);
    line-height: 1.1;
    font-weight: 500;
    margin-bottom: 30px;
    color: #fff;
    text-shadow: 0 10px 40px rgba(0,0,0,0.6);
}
.about-subheadline {
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
    color: rgba(255,255,255,0.9);
    margin-bottom: 50px;
    font-weight: 300;
    line-height: 1.6;
}
.hero-cta-group {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
}
.scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    opacity: 0.7;
    animation: bounceSlow 3s infinite;
}
.scroll-indicator .mouse {
    width: 24px;
    height: 36px;
    border: 2px solid #fff;
    border-radius: 12px;
    position: relative;
}
.scroll-indicator .wheel {
    width: 4px;
    height: 8px;
    background: #fff;
    border-radius: 2px;
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    animation: scrollWheel 2s infinite;
}
@keyframes bounceSlow { 0%, 100% { transform: translate(-50%, 0); } 50% { transform: translate(-50%, 10px); } }
@keyframes scrollWheel { 0% { top: 6px; opacity: 1; } 100% { top: 16px; opacity: 0; } }

/* Shared Section Spacing */
.about-section {
    padding: 140px 0;
    position: relative;
    z-index: 5;
    background-color: #0d1624;
}
.about-section-pt { padding-top: 140px; }
.about-section-pb { padding-bottom: 140px; }
.section-title {
    font-size: clamp(2.5rem, 4.5vw, 4rem);
    margin-bottom: 60px;
    text-align: center;
    font-weight: 500;
    color: #F5F5F5;
}

/* 2. Special Features Grid */
.about-special .container { max-width: 1280px; margin: 0 auto; padding: 0 5%; }
.special-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
}
.special-feature-item {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 24px;
    padding: 50px;
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.5s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.special-feature-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    background: rgba(255,255,255,0.04);
}
.special-feature-item h3 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: var(--color-accent);
}
.special-feature-item p {
    font-size: 1.15rem;
    line-height: 1.7;
    color: rgba(255,255,255,0.7);
    font-family: var(--font-body);
}

/* 3. Lifestyle Story (Scroll Sticky) */
.lifestyle-scroll-container {
    padding: 0;
    margin: 0;
}
.story-block {
    position: relative;
    height: 100vh;
    min-height: 800px;
    display: flex;
    align-items: center;
    overflow: hidden;
}
.story-bg {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 110%;
    background-size: cover;
    background-position: center;
    z-index: 1;
    transform: translateY(0);
}
.story-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to right, rgba(13, 22, 36, 0.9) 0%, rgba(13, 22, 36, 0.2) 100%);
    z-index: 2;
}
.story-content {
    position: relative;
    z-index: 3;
    max-width: 600px;
    margin-left: 10%;
    padding: 40px;
}
.story-phase {
    color: var(--color-accent);
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 20px;
    display: block;
}
.story-text {
    font-size: clamp(1.5rem, 3vw, 2.4rem);
    line-height: 1.4;
    font-family: var(--font-heading);
    color: #fff;
    text-shadow: 0 4px 15px rgba(0,0,0,0.5);
}

/* 4. Bento Landmarks */
.about-landmarks .container { max-width: 1280px; margin: 0 auto; padding: 0 5%; }
.bento-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 350px);
    gap: 24px;
}
.bento-card {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    cursor: pointer;
}
.bento-card.large { grid-column: 1 / 3; grid-row: 1 / 2; }
.bento-card.tall { grid-column: 3 / 4; grid-row: 1 / 3; }
.bento-card.wide { grid-column: 1 / 3; grid-row: 2 / 3; }
.bento-card.small { /* flow normally */ }

.bento-bg {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-size: cover;
    background-position: center;
    transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.bento-overlay-gradient {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to top, rgba(10,12,16,0.95) 0%, rgba(10,12,16,0.1) 70%, transparent 100%);
    transition: opacity 0.5s ease;
}
.bento-content {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 35px;
    z-index: 2;
}
.bento-content h3 {
    font-size: 2rem;
    margin-bottom: 12px;
    font-family: var(--font-heading);
    color: #fff;
    transform: translateY(15px);
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.bento-content p {
    font-size: 1.05rem;
    line-height: 1.6;
    color: rgba(255,255,255,0.8);
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}
.bento-card:hover .bento-bg { transform: scale(1.08); }
.bento-card:hover .bento-content h3 { transform: translateY(0); }
.bento-card:hover .bento-content p { opacity: 1; transform: translateY(0); }

/* 5. Nature Horizontal Gallery */
.about-nature { background: linear-gradient(to bottom, #0d1624, #122238); overflow: hidden; }
.nature-header { max-width: 800px; margin: 0 auto 60px; text-align: center; padding: 0 5%; }
.nature-header p { font-size: 1.3rem; color: rgba(255,255,255,0.7); line-height: 1.8; }
.horizontal-scroll-container {
    display: flex;
    gap: 30px;
    padding: 20px 5vw;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none; /* Firefox */
}
.horizontal-scroll-container::-webkit-scrollbar { display: none; }
.nature-img-card {
    flex: 0 0 600px;
    height: 400px;
    border-radius: 24px;
    overflow: hidden;
    scroll-snap-align: center;
    position: relative;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}
.nature-img-card img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform 1s ease;
}
.nature-img-card:hover img { transform: scale(1.05); }

/* 6. Culinary */
.about-culinary .container { max-width: 1280px; margin: 0 auto; padding: 0 5%; }
.culinary-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}
.culinary-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 20px;
    padding: 50px 40px;
    text-align: center;
    transition: all 0.5s ease;
    backdrop-filter: blur(10px);
}
.culinary-card:hover {
    transform: translateY(-10px);
    background: rgba(255,255,255,0.05);
    box-shadow: 0 20px 40px rgba(200, 169, 126, 0.1);
    border-color: rgba(200, 169, 126, 0.3);
}
.culinary-card h3 { font-size: 1.8rem; margin-bottom: 20px; color: #fff; }
.culinary-card p { font-size: 1.1rem; line-height: 1.7; color: rgba(255,255,255,0.7); }

/* 7. Guests Grid */
.about-guests .container { max-width: 1280px; margin: 0 auto; padding: 0 5%; }
.guests-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}
.guest-card {
    background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
    border: 1px solid rgba(255,255,255,0.04);
    border-radius: 20px;
    padding: 45px 35px;
    text-align: center;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.guest-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.4);
    border-color: rgba(200, 169, 126, 0.2);
}
.guest-icon { font-size: 3.5rem; margin-bottom: 25px; display: inline-block; filter: drop-shadow(0 0 10px rgba(255,255,255,0.2)); }
.guest-card h3 { font-size: 1.5rem; font-family: var(--font-heading); color: var(--color-accent); margin-bottom: 15px; }
.guest-card p { font-size: 1rem; line-height: 1.6; color: rgba(255,255,255,0.6); }

/* 8. Renting Compare */
.about-renting .container { max-width: 1000px; margin: 0 auto; padding: 0 5%; }
.rent-compare-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    background: rgba(255,255,255,0.02);
    border-radius: 24px;
    padding: 60px;
    border: 1px solid rgba(255,255,255,0.05);
}
.compare-col { padding: 20px; }
.compare-col.hotel { opacity: 0.6; }
.compare-col.apartment { border-left: 1px solid rgba(255,255,255,0.1); padding-left: 40px; }
.compare-col h3 { font-size: 1.8rem; margin-bottom: 20px; color: #fff; }
.compare-col .hotel h3 { color: rgba(255,255,255,0.5); }
.compare-col .apartment h3 { color: var(--color-accent); }
.compare-col p { font-size: 1.2rem; line-height: 1.7; color: rgba(255,255,255,0.7); }
.compare-vs {
    position: absolute; left: 50%; transform: translateX(-50%) translateY(-50%);
    background: #0d1624; padding: 10px 20px; font-family: var(--font-heading);
    color: var(--color-accent); font-style: italic; font-size: 1.5rem;
}

/* 9. & 10. Conversion Block */
.about-conversion-block {
    padding: 160px 5%;
    text-align: center;
    background: linear-gradient(to top, rgba(168,142,105,0.08) 0%, transparent 100%);
    position: relative;
    overflow: hidden;
}
.conversion-container { max-width: 800px; margin: 0 auto; position: relative; z-index: 2; }
.conversion-container h2 {
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-family: var(--font-heading);
    margin-bottom: 30px;
    color: #fff;
    line-height: 1.1;
}
.conversion-container p {
    font-size: 1.4rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.8);
    margin-bottom: 50px;
}
.cta-btn {
    font-size: 1.1rem;
    padding: 20px 45px;
    border-radius: 8px;
}
.about-bg-motion {
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at center, rgba(200, 169, 126, 0.05) 0%, transparent 70%);
    animation: slowPulse 8s infinite alternate;
}

/* Responsive Overrides for About Page */
@media (max-width: 1024px) {
    .bento-grid {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
    }
    .bento-card.large { grid-column: 1 / 3; grid-row: 1 / 2; aspect-ratio: 16/9;}
    .bento-card.tall { grid-column: 1 / 2; grid-row: 2 / 3; aspect-ratio: 4/5;}
    .bento-card.wide { grid-column: 1 / 3; grid-row: 3 / 4; aspect-ratio: 16/9;}
    .bento-card.small { grid-column: 2 / 3; grid-row: 2 / 3; aspect-ratio: 4/5;}
    
    .guests-grid { grid-template-columns: repeat(2, 1fr); }
    .culinary-grid { grid-template-columns: repeat(2, 1fr); }
    .story-content { margin-left: 5%; }
}
@media (max-width: 768px) {
    .special-grid { grid-template-columns: 1fr; }
    .bento-grid { grid-template-columns: 1fr; }
    .bento-card.large, .bento-card.tall, .bento-card.wide, .bento-card.small { grid-column: 1 / 2; grid-row: auto; aspect-ratio: 4/3;}
    .horizontal-scroll-container { padding: 20px; gap: 15px; }
    .nature-img-card { flex: 0 0 85vw; height: 300px; }
    .culinary-grid { grid-template-columns: 1fr; }
    .guests-grid { grid-template-columns: 1fr; }
    .rent-compare-grid { grid-template-columns: 1fr; padding: 40px 30px; }
    .compare-col.apartment { border-left: none; border-top: 1px solid rgba(255,255,255,0.1); padding-left: 20px; padding-top: 40px; margin-top: 20px; }
    .about-section { padding: 90px 0; }
}
`;

fs.writeFileSync(cssPath, css + newCss, 'utf8');
console.log('CSS updated successfully!');
