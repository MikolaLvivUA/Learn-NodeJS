const {userValidator} = require('../../validators');

module.exports = (req, res, next) => {
    try {
        console.log(22);
        const updateUserData = req.body;

        userValidator.updateUserValidator(updateUserData);
        next()

    }catch (e) {

        res.status(400).json(e.message)

    }

};