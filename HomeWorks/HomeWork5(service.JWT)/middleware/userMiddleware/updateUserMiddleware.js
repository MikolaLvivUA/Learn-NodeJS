const {userService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {userID} = req.params;
        const updatingData = req.body;
        const {id} = req.user;

        if(+userID !== id){
            throw new Error (`It's not your user`)
        }

        await userService.updateUser(userID, updatingData);

        next()

    } catch (e) {
        res.status(400).json(e.message);
    }
};
