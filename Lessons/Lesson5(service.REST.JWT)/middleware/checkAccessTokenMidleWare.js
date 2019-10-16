//створюєм мідлвару яка буде перевіряти наші токени, використовується для люих дій звязаних з авторизацією
//токени шлються в header  це типу службова інформація.
const {tokenVerificator} = require('../helpers');
module.exports = (req, res, next) => {
    try {
        const token = req.get('Authorization'); //сюди ми шлемо наш токен слово authorization пишемо вручну

        if (!token) {
            throw new Error('NO TOKEN'); // Якщо токена нема видаєм ерору
        }

        const userFromToken = tokenVerificator(token);//якщо токен є відправляєм токен на верифікацію. в змінну нам попаде ретьорнута айдішка юзера

        req.user = userFromToken; //засовуєм айдішку нашого юзера в реквест
        next()
    } catch (e) {
        res.status(403).json(e.message)
    }
};