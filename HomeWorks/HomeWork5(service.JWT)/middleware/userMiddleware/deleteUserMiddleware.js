const {userService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {userID} = req.params;
        const {id} = req.user;

        if(+userID !== id){
            throw new Error (`It's not your user`)
        }

        await userService.deleteUser(userID);
        next()
    }catch (e) {
        res.status(400).json(e.message)
    }
};