const router = require('express').Router();
const dataBase = require('../../dataBase').getInstance();
const {tokinazer} = require('../../helpers');// реквайрим наш токінайзер таким чином
//ЗРАЗОК!!!!!! ТАК ПИСАТИ НЕ ПРАВИЛЬНО РОЗБИВАТИ НА КОНТРОЛЛЕРИ І СЕРВІСИ!!!! НАПИСАНО ДЛЯ ДЕМОНСТРАЦІІЇ РОБОТИ ТОКЕНІВ
router.post('/', async (req, res) => {
    try {
        const UserModel = dataBase.getModel('User');
        const {email, password} = req.body;

        const isUserPresent = await UserModel.findOne({
            where: {
                email,
                password
            },
            attributes: ['id'] // дістаєм айдішку з нашого юзера.
        });

        const tokens = tokinazer(isUserPresent.dataValues); //формуєм токени// зашиваєм отриману нами айдішку в токінайзер

        if(!isUserPresent) {
            throw new Error('Bla Bla')

        }

        res.json(tokens);//віддаєм на фронт



    } catch (e) {
        res.json('BAD').status(403)
    }
});

module.exports = router; //повертємо на ззовні