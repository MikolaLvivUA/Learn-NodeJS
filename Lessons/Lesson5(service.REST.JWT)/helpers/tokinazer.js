//Tokinazer буде викликатись в певний момент часу і генерувати нам два секретних ключа.
const jwt = require('jsonwebtoken'); //Реквайрим наш JWT
const {JWT_SECRET, JWT_REFRESH} = require('../config/config');

module.exports = data => {
// data це дані які ми шифрує в ідеалі в токен не шифрується нічого, або шифрується якась не важлива інфа
// jwt.sign створює токен приймає дані , секретне слово, опції в яких можна вказати час життя токена
    const access_token = jwt.sign(data, JWT_SECRET, {expiresIn: '1m'});//створюєм акцес токен
    const refresh_token = jwt.sign({}, JWT_REFRESH, {expiresIn: '24h'});//створюєм рефреш токен

    return { //повертаєм на ззовні наші токени
        access_token,
        refresh_token
    }
};