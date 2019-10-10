const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');



const app = express();

const dataBase = require('./dataBase').getInstance();// таким чином ми підключаєм нашу базу даних і зразу виконуєм getInstance
dataBase.setModels();//вказуєм базі щоб вона взнала про моделі

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null

}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const { userRouter, houseRouter } = require('./router');//підключєм наш роутер в апп файлі

app.get('/', (req, res)=>{
    res.render('main')
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.use('/users', userRouter);//так ми викликаєм наш роутер
app.use('/houses', houseRouter);



app.all('*', async /*оскільки запит в базу є асинхроним ставим async*/(req, res) => {

   let [query]/*деструктуризуєм щоб вивести наші дані*/ =  await/*!!!*/provider.promise().query('SELECT*FROM user'); //таким чином ми прописуєм якусь кверю до бази даних
    res.json(query);
});

app.listen(3000, () => {
    console.log('listen 3000');
});

