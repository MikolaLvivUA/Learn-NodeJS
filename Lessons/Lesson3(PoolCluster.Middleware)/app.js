const express = require('express');

const expHbs = require('express-handlebars');

const path = require('path');


const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));



app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null

}));

app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'static'));


let users = [];

let { user } = require('./controllers'); // таким чином ми реквайрим усе що є в папці controller
let { userMiddleware } = require('./middleware'); // реквайрим нашу мілвару
let { provider } = require('./dataBase');

app.get('/', (req, res)=>{
    res.render('main')
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/users',userMiddleware.checkUserValidityMiddleWare, user.createUser);// відповідно таким чином ми підключили функцію створення юзерів яка лежить в контролерах, просто предавши їй тіло функції.
app.get('/users/:user_id', userMiddleware.isUserPresentMiddleware/*підключаєм нашу мідлвару*/, user.getById);//підключаєм нашу функцію за допомогою якої ми отримуєм юзерів по айді
app.get('/users', user.findAll);//передаєм нашу функцію пошуку всіх юзерів

app.all('*', async /*оскільки запит в базу є асинхроним ставим async*/(req, res) => {

   let [query]/*деструктуризуєм щоб вивести наші дані*/ =  await/*!!!*/provider.promise().query('SELECT*FROM userMiddleware'); //таким чином ми прописуєм якусь кверю до бази даних
    console.log(query);//верне нам величезний обєкт з купою інфи, масив нульове значення якого є наші дані з БД, відповідно дістаєм дані деструктуризацією
    res.json(query);
});

app.listen(3000, () => {
    console.log('listen 3000');
});

