const http = require('http');
const path = require('path');
const fs = require('fs');
const port = 8124;

http.createServer((req,res) => {
    let filePath = '.' + req.url;
    if(filePath == './') filePath = './index.html'

    let extname = String(path.extname(filePath)).toLowerCase();

    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    let contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath,(err,data) => {
        if(err) {
            if(err.code == 'ENOENT') {
                res.writeHead(404,{ 'Content-Type': 'text/html'});
                res.write('Error: 404 Not Found');
                res.end(data,'utf-8');

            } else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: '+err.code+' ..\n');
            }
        } else {
            res.writeHead(200, { 'Content-Type' : contentType});
            res.end(data,'utf-8');
        }
    })

}).listen(port,(err) => {
    if(err) console.log('Somethings went wrong');
    else console.log(`Server is runnig on http://127.0.0.1:${port}/`);
    
})
