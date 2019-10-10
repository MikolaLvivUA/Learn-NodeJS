const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    const UserToCreate = req.body;//передаєм деструктуризацією дані якімають бути внесені при створені юзера
    const UserModel = dataBase.getModel('User');

    UserModel.create(UserToCreate);//таким чином ми створюєм нашого юзера
    res.render('login')
}; //створюєм функцію створення юзерів