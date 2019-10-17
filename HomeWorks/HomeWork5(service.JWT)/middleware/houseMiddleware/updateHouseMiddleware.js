const {houseService} = require('../../service');

module.exports = async (req, res, next) => {

    try {
        const {houseID} = req.params;
        const updatingData = req.body;
        const {id} = req.user;
        const {user_id} = req.house;

        if (+user_id !== id) {
            throw new Error(`It's not your house`)
        }

        await houseService.updateHouse(houseID, updatingData);
        next()

    } catch (e) {
        res.status(403).json(e.message);
    }


};