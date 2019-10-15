const Sequalize = require('sequelize'); //називаєм змінну з великої букви тому що секвалайз вертає екземплар класу.
const fs = require('fs');//реквайримо фс
const { resolve } = require('path'); // підключаєм resolve бібліотеки path

//Створюєм самовикликаючу функцію яка буде робити наш конекшн
module.exports = (() => {

    let instance; //створюєм змінну інстанс обовязково має бути летівська для кожного юзера буде споччатку анефайнд
    
    function initConnection() { // створюєм функцію конекшина до бази даних
        const client = new Sequalize('lessonsDB', 'root', 'root', {//створюєм клієнта приймає назву бази даних, логін пароль, і обєкт опцій з хостом і діалектом в діалект ми передаєм тип БД з якою ми працюєм
            host: 'localhost',
            dialect: 'mysql'
        });

        const models = {};//всі наші модельки ми зберігаєм в зміннй моделс
        
        function getModels() { // функція яка буде брати наші моделі
            fs.readdir('./dataBase/models', (err, files) => { // fs.readdir Читає директорію зі всіма модельками і отримує масив зі всіма файлами
                files.forEach(file => {//Ми берем кожен файл по черзі
                    const modelName = file.split('.')[0];//ріжем масив по крапці і берем нульовий елемент(тобто берем тільки назву файла без розширення)
                    models[modelName] = client.import(resolve(`./dataBase/models/${modelName}`))// додаєм до нашого обєкта моделс нашу модель вказуєм нашому імпорту шлях до назв наших моделей, resolve вертає повний шлях до файлу.
                })
            })
        }

        return {//Щоб могти з нашими обєктами працювати ми ретьорнимо ще один обєкт
            setModels: () => getModels(), //Функція яка бере наші файли моделей і проганяє їх.
            getModel: modelName => models[modelName]//Функція яка приймає modelName  повертає з нашого обєкту модельки
        }
    }

    return {//повертає нам функцію
        getInstance: () => {
            if (!instance) { // Якщо конекшина немає иаємо його створити
                instance = initConnection()
            }
            return instance //Якщо конекшн є то просто поверни його
        }
    }
})();


