const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {userID} = req.params;
        const updatingData = req.body;
        const {id} = req.user;

        if(+userID !== id){
            throw new Error (`It's not your user`)
        }

        await userService.updateUser(userID, updatingData);

        res.redirect(`/users/${userID}`)
    } catch (e) {
        res.status(403).json(e.message);
    }
};