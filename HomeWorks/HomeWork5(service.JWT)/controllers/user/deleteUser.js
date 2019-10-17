const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {userID} = req.params;
        const {id} = req.user;

        if(+userID !== id){
            throw new Error (`It's not your user`)
        }

        await userService.deleteUser(userID);

        res.json(`User id:${userID} has been deleted`)

    }catch (e) {
        res.status(403).json(e.message)
    }
};