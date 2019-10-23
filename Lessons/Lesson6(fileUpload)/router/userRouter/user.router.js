const router = require('express').Router(); //тиким чином ми підключаєм наш роутер

const {userMiddleware, checkAccessTokenMidleWare} = require('../../middleware');//реквайрим мідлвари в нашому файлі роутера відповідно в апп цього робити вже не треба
const {user} = require('../../controllers');

router.get('/good', (req, res) => {
    res.json('OK');
});//таким чином ми прописуєм наші урли в роутері

router.post('/',userMiddleware.checkUserValidityMiddleWare, user.createUser);
router.get('/:user_id/houses', user.getUserWithHouseByid);
router.get('/:user_id', userMiddleware.isUserPresentMiddleware, user.getById);
router.get('/', user.findAll);
router.put('/:user_id', checkAccessTokenMidleWare, user.updateUser);


module.exports = router;