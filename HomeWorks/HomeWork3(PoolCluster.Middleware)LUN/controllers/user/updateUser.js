const { provider } = require('../../dataBase');


module.exports = async (req, res) => {
    const {userID ,email, name, password} = req.body;
    const query = `UPDATE user SET email = ${email}, name = ${name}, password = ${password} WHERE id = ${userID}`;
    const [updatedUSer] = await provider.promise().query(query, [userID ,email, name, password]);
    console.log(updatedUSer);
    res.redirect(`users/${userID}`)
};