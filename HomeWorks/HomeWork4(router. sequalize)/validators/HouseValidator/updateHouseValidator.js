module.exports = (UpdateHouseData) => {

    const {houseID, square, city, price} = UpdateHouseData;

    if (!square || !city || !price) {
        throw new Error('Bad request (UpdateHouseData is not valid)')
    }
};