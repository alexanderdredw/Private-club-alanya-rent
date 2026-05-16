const http = require('http');
const fs = require('fs');
const path = require('path');

const dir = 'c:\\\\Users\\\\Александр\\\\OneDrive\\\\Рабочий стол\\\\alanya rent website\\\\7 Mah';

const files = fs.readdirSync(dir).filter(f => f.match(/\.(jpg|jpeg|png)$/i));

const html = `<html><body style="display:flex; flex-wrap:wrap;"><br>` + 
    files.map(f => `<div style="width:300px; margin:10px;"><img src="/${encodeURIComponent(f)}" style="width:100%;"><br>${f}</div>`).join('') + 
    `</body></html>`;

http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/view_all.html') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(html);
    } else {
        const file = path.join(dir, decodeURIComponent(req.url.substring(1)));
        if(fs.existsSync(file)) {
            res.end(fs.readFileSync(file));
        } else {
            res.statusCode = 404;
            res.end('Not found');
        }
    }
}).listen(8082, () => {
    console.log('Server running on 8082');
});
