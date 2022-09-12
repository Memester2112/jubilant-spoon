const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./navbar-app/index.html');
const homeStyles = fs.readFileSync('./navbar-app/styles.css');
const homeLogo = fs.readFileSync('./navbar-app/logo.svg');
const homeLogic = fs.readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req,res)=>{
    const url = req.url;
    console.log(url);
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(homePage);
    }
    else if (url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'});
        res.end(homeStyles);
    }
    else if (url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.end(homeLogo);
    }
    else if (url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.end(homeLogic);
    }
    
    else if (url === '/contact'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.end('<h1>CONTACT PAGE</h1>');
    }
    else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.end('<h1>Page not found</h1>');
    }

});

server.listen(5000);
