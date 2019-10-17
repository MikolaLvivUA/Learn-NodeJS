const router = require('express').Router();

const {userMiddleware, tokenMiddleware} = require('../../middleware');
const {user} = require('../../controllers');

router.post('/', user.registerNewUser);
router.get(`/:userID`, userMiddleware.presentUserCheck, user.getUserById);
router.get(`/:userID/houses`, user.getUserWithHouses );

router.put('/:userID',
    userMiddleware.presentUserCheck,
    tokenMiddleware.checkAccessTokenMiddleware,
    user.updateUser
);
router.delete('/:userID',
    userMiddleware.presentUserCheck,
    tokenMiddleware.checkAccessTokenMiddleware,
    user.deleteUser
);

module.exports = router;