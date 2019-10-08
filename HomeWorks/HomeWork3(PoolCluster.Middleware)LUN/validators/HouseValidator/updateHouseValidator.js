module.exports = (UpdateHouseData) => {

    const {houseID, square, city, price} = UpdateHouseData;

    if (!UpdateHouseData) {
        throw new Error('Bad request (UpdateHouseData is not valid)')
    }
};