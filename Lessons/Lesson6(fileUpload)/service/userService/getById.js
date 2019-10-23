const dataBase = require('../../dataBase').getInstance();
//створюєм функцію яка буде брати наших юзерів зв бази по айді
module.exports = async  id => {
    const UserModel = dataBase.getModel('User');
    const user = await UserModel.findByPk(id);

    console.log(user);// нам вертається юзер з метаданими

    return user
};