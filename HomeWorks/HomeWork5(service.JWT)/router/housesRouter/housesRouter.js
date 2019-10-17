const router = require('express').Router();

const {houseMiddleware, tokenMiddleware} = require('../../middleware');
const {house} = require('../../controllers');

router.post('/',
    tokenMiddleware.checkAccessTokenMiddleware,
    houseMiddleware.newHouseMiddleware,
    house.createNewHouse
);

router.get(`/:houseID`, houseMiddleware.presentHouseCheck, house.getHouseById);

router.put('/:houseID',
    houseMiddleware.presentHouseCheck,
    tokenMiddleware.checkAccessTokenMiddleware,
    houseMiddleware.updateHouseMiddleware,
    house.updateHouse
);

router.delete('/:houseID',
    houseMiddleware.presentHouseCheck,
    tokenMiddleware.checkAccessTokenMiddleware,
    houseMiddleware.deleteHouseMiddleware,
    house.houseDelete
);

module.exports = router;