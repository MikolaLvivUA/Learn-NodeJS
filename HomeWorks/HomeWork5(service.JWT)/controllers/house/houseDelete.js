const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {houseID} = req.params;
        const {id} = req.user;
        const {user_id} = req.house;

        if (+user_id !== id) {
            throw new Error(`It's not your house`);
        }

        await houseService.deleteHouse(houseID);

        res.json(`House id:${houseID} has been deleted`)
    } catch (e) {
        res.status(403).json(e.message);
    }
};