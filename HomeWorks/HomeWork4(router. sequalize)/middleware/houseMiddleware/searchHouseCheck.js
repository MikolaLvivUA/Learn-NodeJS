const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
            const {city} = req.body;
            const HouseModel = dataBase.getModel('House');

            const findingHouses = await HouseModel.findAll({
                where: {
                    city
                },
            });

        if(!findingHouses){
                throw new Error('Not found any houses')
            }

            req.houses = findingHouses;
            next()
    }catch (e) {
            res.status(404).json(e.message);
        }
};