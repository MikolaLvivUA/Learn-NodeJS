const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const creatingData = req.body;

        const registeredUser = await userService.registerUser(creatingData);
        const {id} = registeredUser;

        res.json(`Your user with id:${id} has been registered please login in`);

    }catch (e) {
        res.json(e.message).status(400);
    }
};