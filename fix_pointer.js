const fs = require('fs');
['css/style.css', 'dist_deploy/css/style.css'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let css = fs.readFileSync(file, 'utf8');
    
    // Using regex to replace pointer-events for #yt-player specifically
    css = css.replace(/#yt-player\s*\{[^}]*\}/g, match => {
        return match.replace(/pointer-events:\s*none;?/, 'pointer-events: auto;');
    });
    
    fs.writeFileSync(file, css, 'utf8');
    console.log('Fixed CSS in', file);
});
