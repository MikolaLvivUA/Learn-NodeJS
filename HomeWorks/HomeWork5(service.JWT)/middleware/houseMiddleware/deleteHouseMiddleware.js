const {houseService} = require('../../service');

module.exports = (req, res, next) => {
    try {
        const {houseID} = req.params;
        const {id} = req.user;
        const {user_id} = req.house;

        if (+user_id !== id) {
            throw new Error(`It's not your house`);
        }

        houseService.deleteHouse(houseID);
        next()
    } catch (e) {
        res.status(403).json(e.message);
    }
};