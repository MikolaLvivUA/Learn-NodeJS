const {userService} = require('../../service');

module.exports = async(req, res, next) => {
    try {
        const creatingData = req.body;
        const registeredUser = await userService.registerUser(creatingData);

        req.user = registeredUser;
        next()
    }catch (e) {
        res.status(400).json(e.message);
    }
};
