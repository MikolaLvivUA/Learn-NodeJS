const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const {userID ,email, name, password} = req.body;
        const query = `UPDATE user SET email = ?, name = ?, password = ? WHERE id = ${userID}`;

        const [updatedUSer] = await provider.promise().query(query, [email, name, password]);

        res.redirect(`users/${userID}`)
    } catch (e) {
        res.json(e.message)
    }

};