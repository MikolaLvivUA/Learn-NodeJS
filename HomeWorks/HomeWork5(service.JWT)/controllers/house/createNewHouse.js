const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {id} = req.user;
        const {square, city, price} = req.body;

        const newHouse = await houseService.createHouse(id, square, city, price);

        res.json(`house id:${newHouse.id} has been created`);
    }catch (e) {
        res.status(403).json(e.message);
    }
};