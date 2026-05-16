const http = require('http');
const fs = require('fs');
const path = require('path');

const dir = 'c:\\\\Users\\\\Александр\\\\OneDrive\\\\Рабочий стол\\\\alanya rent website';

http.createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url);
    if (urlPath === '/') urlPath = '/index.html';
    
    // remove query strings
    urlPath = urlPath.split('?')[0];

    const file = path.join(dir, urlPath);
    if(fs.existsSync(file) && fs.statSync(file).isFile()) {
        if(file.endsWith('.js')) res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
        else if(file.endsWith('.css')) res.setHeader('Content-Type', 'text/css; charset=utf-8');
        else if(file.endsWith('.html')) res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(fs.readFileSync(file));
    } else {
        res.statusCode = 404;
        res.end('Not found: ' + urlPath);
    }
}).listen(8090, () => {
    console.log('Server running on 8090');
});
