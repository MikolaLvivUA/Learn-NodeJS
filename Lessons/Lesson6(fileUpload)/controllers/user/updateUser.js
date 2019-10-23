const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const patchUserObject = req.body;
        const {user_id} = req.params;
        const UserModel = dataBase.getModel('User');
        const {id} = req.user; //приймаєм декодовану з токена айдішку нашого юзера

        if (+user_id !== id) {
            throw new Error(`It's not your user`)
        }

        await UserModel.update(patchUserObject, {
            where: {
                id: user_id
            }
        });

        res.json('OK');
    } catch (e) {
        res.json(e.message)
    }
};
