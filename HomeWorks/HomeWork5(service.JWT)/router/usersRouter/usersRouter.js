const router = require('express').Router();

const {userMiddleware} = require('../../middleware');
const {user} = require('../../controllers');
const {tokenMiddleware} = require('../../middleware');

router.post('/', userMiddleware.newUserMiddleware, user.registerNewUser);
router.get(`/:userID`, userMiddleware.presentUserCheck, user.getUserById);

router.put('/:userID',
    userMiddleware.presentUserCheck,
    tokenMiddleware.checkAccessTokenMiddleware,
    userMiddleware.updateUserMiddleware,
    user.updateUser
);
router.delete('/:userID',
    userMiddleware.presentUserCheck,
    tokenMiddleware.checkAccessTokenMiddleware,
    userMiddleware.deleteUserMiddleware,
    user.deleteUser
);

module.exports = router;