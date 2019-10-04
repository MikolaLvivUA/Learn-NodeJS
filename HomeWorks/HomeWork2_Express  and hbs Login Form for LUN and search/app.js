const express = require('express'); //require express
const expHbs = require('express-handlebars'); //require handlebars
const path = require('path'); //require path for working with different OC pathes


const users = []; //our global users array
const houses = [];


const app = express(); //create our server

app.use(express.json()); //teach our express read JSON files
app.use(express.urlencoded({extended: true})); //teach our express parse JSON files;
app.use(express.static(path.join(__dirname, 'static'))); // teach our express works with static directory

app.engine('.hbs', expHbs({ // setting our template engine
    extname: '.hbs',
    defaultLayout: null //important thing!!!
}));

app.set('view engine', '.hbs'); // our engine will be .hbs files
app.set('views', path.join(__dirname, 'static')); // specify directory where are our .hbs files


app.get('/', (req, res) => {
    res.render('main')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.get('/house', (req, res) => {
    res.render('AddHouse')
});


app.post('/register', (req, res) => {
    const body = req.body;
    body.user_id = users.length + 1;

    users.push(body);
    console.log(body);

    res.redirect('register')
});


app.post('/house', (req, res) => {
    const body = req.body;
    body.house_id = houses.length + 1;

    houses.push(body);
    console.log(body);

    res.redirect(`/house/${body.house_id}`)
});


app.get(`/user/:userID`, (req, res) => {
    const foundUser = users.find(user => +req.params.userID === user.user_id);

    foundUser ? res.json(foundUser) : res.status(404).end('USER DID NOT FIND');
});


app.get(`/house/:houseID`, (req, res) => {
    const foundHouse = houses.find(house => +req.params.houseID === house.house_id);

    foundHouse ? res.json(foundHouse) : res.status(404).end('HOUSE DID NOT FIND')
});

app.post(`/search`, (req, res) => {
    const body = req.body;

    const FoundHouse = houses.find(house => house.city === body.city);
    FoundHouse ? res.redirect(`/house/${FoundHouse.house_id}`) : res.status(404).end('HOUSE DID NOT FIND')
});

app.post('/login', (req, res) => {
    const body = req.body;

    const FoundUser = users.find(user => user.email === body.email && user.password === body.password);
    FoundUser ? res.redirect(`/user/${FoundUser.user_id}`) : res.status(404).end('USER DID NOT FIND');
});


app.all('*', (req, res) => {
    res.json('NOT FOUND SORRY');
});

app.listen(3000, () => { //create our server port-listener
    console.log('listen port: 3000');
});

