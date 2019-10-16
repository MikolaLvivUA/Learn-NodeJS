const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const creatingData = req.body;
        const registeredUser = await userService.registerUser(creatingData);

        res.json(`Your user with id:${registeredUser.id} has been registered please login in`);
    }catch (e) {
        res.json(e.message)
    }
};