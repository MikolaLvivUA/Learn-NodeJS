const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');
const fileUpload = require('express-fileupload');// реквайрим лібу файлаплоад


const app = express();

const dataBase = require('./dataBase').getInstance();// таким чином ми підключаєм нашу базу даних і зразу виконуєм getInstance
dataBase.setModels();//вказуєм базі щоб вона взнала про моделі

global.appRoot = __dirname; //створюєм в глобальному обєкті змінну аппрут якій передаєм значення папки.

app.use(fileUpload());// задаєм використання ліби для всіх роутів.
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null

}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const { userRouter, houseRouter, authRouter} = require('./router');//підключєм наш роутер в апп файлі

app.get('/', (req, res)=>{
    res.render('main')
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.use('/users', userRouter);//так ми викликаєм наш роутер
app.use('/houses', houseRouter);
app.use('/auth', authRouter);



app.all('*',(req, res) => {
    res.status(404);
});

app.listen(5000, () => {
    console.log('listen 5000');
});

