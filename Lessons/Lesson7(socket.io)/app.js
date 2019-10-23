const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

const http = require('http').createServer(app); //один з варіантів як створити сервак тепер в нас не передати як сервер наш app
//відповідно в нас буде не app listen а http listen.
const io = require('socket.io')(http);// таким чином ми реквайрим socket.io виконуєм як функцію в якій арнументом передаєм наш сервер

io.on('connection', socket => {
    // console.log(socket);

    /*socket.on('test', () => {
        console.log('EMIT FROM FE', socket.id);//при емітації події на фронтенді, атобто натисканні кнопеи спрацьовую консольлог

        socket.emit('resp') //емітуєм подію на бекенді
    })*/

   /* setInterval(() => {
        socket.emit('resp', {id: socket.id, data: "Hello World"})//мітує подію  раз в секунду.
    }, 1000)*/
    socket.on('message', (data) => {
        console.log(data);// ловимо подію message і консолим дані які нам

        io.emit('respMessage', {id: socket.id, data})
    });

    socket.on('msg', data => {
        console.log(data);
        io.to(`222`).emit(`msg_resp`, data)
    });

    socket.on('disconnect', function(){
        socket.broadcast.emit('user_disc', {id: socket.id}); // при дісконекті емітується подія для всіх крім сендера.
        console.log(socket.id, 'DISCONNECT')
    });

    socket.on('joinroom', data => {
        console.log(data);
        socket.join(data.room_id)//на подію joinroom сокет джойниться в кімнату по айді.
    })
    /*socket.on('disconnect', function(){
        console.log('user disconnected');//таким чином ми виконуєм якусь подію на дісконект.
    });*/
});//якась подія яка виконується коли хтось підключається до нашого сокета.

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));


app.get('/', (req, res) => {
    res.render('main')
});


app.all('*', async (req, res) => {
    res.json(`404`)
});

http.listen(3000, () => {
    console.log('listen 3000');
});