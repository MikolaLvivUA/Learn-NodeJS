const {houseService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.user;
        const {square, city, price} = req.body;

        const newHosue = await houseService.createHouse(id, square, city, price);

        req.house = newHosue;
        next()
    } catch (e) {
        res.status(403).json(e.message);
    }

};