const http = require('http'); //так ми реквайрим модуль http

const fs = require('fs'); //щоб відмальовувати якісь дані в браузері потрібно підключити fs для того щоб діставати якісь дані

const url = require('url'); //це вбудований модуль ноди який зчитує url парсить їх дістає з них параметри, дані, шляхи і т.д

//функція create server має в собі функцію request і response
//request це те що ми віддаєм на бек а респонсе це те що ми віддаєм на фронт з бека
const server = http.createServer((req, res) =>{
  /*
    // console.log(req); //таким чином ми бачим що віддає нам браузер
    fs.readFile('./index.html', ((err, data) => {
        res.end(data);
    })); // таким чином ми відмальовуєм на сторінці

    // res.end("Hello")//res.end завершає нашу прогрузку
*/
    let {pathname} = url.parse(req.url); // витягуєм pathname за допомогою деструктуризвації

   /* console.log(parsedUrl); /!*з цих повернутих значень нам найкориснішще це   pathname: ,path:,  query:
                             query передаються в url ? і шось то там=)))*!/*/


   //Таким чином ми можемо бігати по урлах
    switch (pathname) {
        case '/':
            fs.readFile('./index.html', (err, data) => {
                err ? console.log('ERROR') : res.end(data);
            });
            break;

        case '/info':
            fs.readFile('./info.html', (err, data) => {
                err ? console.log('ERROR') : res.end(data);
            });
            break;
        default:
            fs.readFile('./404.html', (err, data) => {
                err ? console.log('404 NOT FOUND') : res.end(data);
            });
            break
    }
    // res.end('end')
});


//listen - це лісенер порта в документації прийнято 3000 або 5000
server.listen(3000, (err)=>{
    err ? console.log('ERRRROR') : console.log('Listen 3000');
});