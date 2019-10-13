const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {houseID} = req.params;
        const HouseModel = dataBase.getModel('House');

        const findingHouse = await HouseModel.findByPk(houseID);

        if (!findingHouse ){
            throw new Error(`Bad request`)
        }

        req.house = findingHouse;

        next();

    } catch (e) {
        res.status(400).json(e.message);
    }
};