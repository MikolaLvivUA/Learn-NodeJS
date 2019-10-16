const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const {houseID} = req.params;
        const HouseModel = dataBase.getModel('House');

        HouseModel.destroy({
            where: {
                id: houseID
            }
        });

        res.json(`House id:${houseID} has been deleted`)
    } catch (e) {
        res.status(400).json(e.message)
    }
};