const fs = require('fs');
const jsdom = require('./.temp/node_modules/jsdom');
const { JSDOM } = jsdom;
const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable', url: 'file:///C:/Users/Александр/OneDrive/Рабочий стол/alanya rent website/index.html' });
const window = dom.window;

window.console = {
    log: (...args) => console.log('LOG:', ...args),
    error: (...args) => console.log('ERROR:', ...args),
    warn: (...args) => console.log('WARN:', ...args),
};

window.scrollTo = () => {};
window.IntersectionObserver = class { observe() {} unobserve() {} };

window.addEventListener('error', (e) => {
    console.log('JSDOM ERROR:', e.error);
});

setTimeout(() => {
    console.log('App Content HTML length:', window.document.getElementById('app-content').innerHTML.length);
    process.exit(0);
}, 3000);
