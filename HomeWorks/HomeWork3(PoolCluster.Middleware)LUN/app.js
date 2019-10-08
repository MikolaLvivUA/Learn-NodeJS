const express = require('express'); //require express
const expHbs = require('express-handlebars'); //require handlebars
const path = require('path'); //require path for working with different OC pathes

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

//MODULES

const { renderPage, render404 , user, house} = require ('./controllers');
const { provider } = require ('./dataBase');
const { userMiddleware, houseMiddleware } = require('./middleware');

//GET
app.get('/', renderPage.renderMainPage);
app.get('/login', renderPage.renderLoginPage);
app.get('/register', renderPage.renderRegisterPage);
app.get('/house', renderPage.renderAddHousePage);
app.get('/update', renderPage.renderUpdatePage);
//USER GET
app.get(`/users/:userID`, userMiddleware.presentUserCheck, user.getUserById);
//USER POST
app.post('/newUser', userMiddleware.checkNewUserValidity, user.registerNewUser);
app.post('/users', userMiddleware.checkLoginValidity ,user.userLogin);
//HOUSE GET
app.get(`/houses/:houseID`, houseMiddleware.presentHouseCheck,house.getHouseById);
//HOUSE POST
app.post('/houses', houseMiddleware.checkNewHouseValidity, house.createNewHouse);
app.post(`/search`, houseMiddleware.searchHouseCheck, house.searchHouse);
//USER PATCH
// app.patch('/users/:userID', userMiddleware.presentUserCheck, userMiddleware.checkNewUserValidity, user.updateUser);
//404
app.all('*', render404.render404Page);

app.listen(5000, () => { //create our server port-listener
    console.log('listen port: 5000');
});

