const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const newHouseData = req.body;
        const HouseModel = dataBase.getModel('House');

        await HouseModel.create(newHouseData);

        res.json('house has been created');
    }catch (e) {
        res.json(e.message)
    }
};