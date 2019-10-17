const dataBase = require('../../dataBase').getInstance();

module.exports = async (userID, square, city, price) => {
    const HouseModel = dataBase.getModel('House');
    const newHouse = await HouseModel.create({user_id: userID, square: square, city: city, price: price});

    return newHouse && newHouse.dataValues;
};