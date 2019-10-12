const router = require('express').Router();

const { houseMiddleware } = require('../../middleware');
const {house} = require('../../controllers');

router.post('/', houseMiddleware.checkNewHouseValidity, house.createNewHouse);
router.get(`/:houseID`, houseMiddleware.presentHouseCheck,house.getHouseById);
router.post(`/auth`, houseMiddleware.searchHouseCheck, house.searchHouse);
router.put('/:houseID', houseMiddleware.checkUpdateHouseValidity, houseMiddleware.checkUpdHousePresent, house.updateHouse);

module.exports = router;