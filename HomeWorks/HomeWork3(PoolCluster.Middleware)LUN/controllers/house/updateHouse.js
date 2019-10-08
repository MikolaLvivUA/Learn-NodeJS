const { provider } = require('../../dataBase');


module.exports = async (req, res) => {
    try {
        console.log(provider);
        const {houseID ,square, city, price} = req.body;
        const query = `UPDATE house SET square = ?, city = ?, price = ? WHERE id = ${houseID}`;

        const [updatedHouse] = await provider.promise().query(query, [square, city, price]);

        console.log(updatedHouse);

        res.redirect(`users/${houseID}`)
    } catch (e) {
        res.json(e.message)
    }

};