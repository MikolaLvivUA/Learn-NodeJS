const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const creatingUser = req.body;
        const UserModel = dataBase.getModel('User');

        await UserModel.create(creatingUser);

        res.json('Your user has been registered please login in');
    }catch (e) {
        res.json(e.message)
    }

};