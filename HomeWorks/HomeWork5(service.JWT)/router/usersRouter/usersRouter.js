const router = require('express').Router();

const {userMiddleware, tokenMiddleware} = require('../../middleware');
const {user} = require('../../controllers');

router.post('/', userMiddleware.newUserMiddleware, user.registerNewUser);
router.get(`/:userID`, userMiddleware.presentUserCheck, user.getUserById);
router.get(`/:userID/houses`, userMiddleware.getUserWithHousesMdwar, user.getUserWithHouses );

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