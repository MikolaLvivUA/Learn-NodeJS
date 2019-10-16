const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {userID} = req.params;

        await userService.deleteUser(userID);

        res.json(`User id:${userID} has been deleted`)
    }catch (e) {
        res.status(400).json(e.message)
    }
};