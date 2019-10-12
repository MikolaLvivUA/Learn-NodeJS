const router = require('express').Router();

const {userMiddleware} = require('../../middleware');
const {user} = require('../../controllers');

router.post('/', userMiddleware.checkNewUserValidity, user.registerNewUser);
router.post('/auth', userMiddleware.checkLoginValidity ,user.userLogin);
router.get(`/:userID`, userMiddleware.presentUserCheck, user.getUserById);
router.put('/:userID', userMiddleware.checkUpdateValidity, userMiddleware.checkUpdUserPresent, user.updateUser);

module.exports = router;