const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const {houseID} = req.params;
        const updatingData = req.body;
        const HouseModel = dataBase.getModel('House');

        await HouseModel.update(updatingData, {
            where: {
                id: houseID
            }
        });


        res.redirect(`/houses/${houseID}`)
    } catch (e) {
        res.json(e.message)
    }

};