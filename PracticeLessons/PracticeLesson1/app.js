const http = require('http');

const url = require('url');

const fs = require('fs');

//Create server
const server = http.createServer((req, res) => {
    // Parse url.pathname by destructurzation
    let {pathname} = url.parse(req.url);

    //walking between URLs
    switch (pathname) {
        case '/':
            fs.readFile('./index.html', (err, data) => {
                err ? console.log('ERROR') : res.end(data);
            });
            break;

        case '/login':
            fs.readFile('./login.html', (err, data) => {
                err ? console.log('ERROR') : res.end(data);
            });
            break;

        case '/register':
            fs.readFile('./register.html', (err, data) => {
                err ? console.log('ERROR') : res.end(data);
            });
            break;

        default:
            fs.readFile('./404.html', (err, data) => {
                err ? console.log('404 NOT FOUND') : res.end(data);
            });
            break
    }


});

//Create server listener
server.listen(5000, (err) => {
    err ? console.log('Error server die!=)') : console.log('Listen 5000');
});