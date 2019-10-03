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

app.get('/AddHouse', (req, res) => {
    res.render('AddHouse')
});

app.post('/register', (req, res) => {
    let body = req.body;

    body["user_id"] = users.length+1;
    users.push(body);
    console.log(body);

    res.render('register')
});


app.post('/AddHouse', (req, res) => {
    let body = req.body;

    body["house_id"] = houses.length+1;
    houses.push(body);
    console.log(body);

    res.render('AddHouse')
});


app.get(`/user/:userID`, (req, res) => {

    for (let i = 0; i < users.length; i++) {
        userID = users[i].user_id ? res.json(users[i]) : res.json('Sorry not found such user');
    }
});


app.get(`/house/:houseID`, (req, res) => {

    for (let i = 0; i < houses.length; i++) {
        houseID = houses[i].house_id ? res.json(houses[i]) : res.json('Sorry not found such house');
    }
});

app.post(`/search`, (req, res) => {
   let body = req.body;
   houses.forEach((house)=>{
       house.city === body.searchingCity ? res.redirect(`/house/:${house.house_id}`) : res.json(`can't find`)
   })
});

app.post('/login', (req, res) => {
    let body = req.body;
    users.forEach((user) => {
        user.email === body.email && user.password === body.password ? res.redirect(`/user/:${user.user_id}`) : res.json('Sorry uncorrected email or password')
    })
});


app.all('*', (req, res) => {
    res.json('NOT FOUND SORRY');
});

app.listen(3000, () => { //create our server port-listener
    console.log('listen port: 3000');
});

