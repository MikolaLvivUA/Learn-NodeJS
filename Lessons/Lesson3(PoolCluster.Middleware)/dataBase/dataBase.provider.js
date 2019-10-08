let mysql2 = require('mysql2'); // реквайрим сам драйвер він є пакетом npm

const pool = mysql2.createPool({
    host: 'localhost', //розміщення DB
    user: 'root', //логін від DB
    password: 'root', //пароль від DB
    database: 'lessonsDB' //Назва DB
});//функція createPool створює нам конекшн він приймає обєкт конфігурацій


module.exports = pool; // експортуєм наш конекшн на зовні