const dataBase= require('../../dataBase').getInstance(); //реквайрим наш конектор до бази даних обовязково вказуєм get instance всюди

module.exports = async (req, res, next) => {
    //Оскільки наш кодж потенційно небезпечний огортаєм його в try catch
    try {
        const {user_id} = req.params; // берем з параметрів юзер айді
        const UserModel = dataBase.getModel('User'); // Вказуєм назву модклі з якою ми працюєм

        const isUserPresent  = await UserModel.findOne({
            where: {
                id: user_id,
                blacklist: false
            },
            attributes: ['name', 'email']//витягуєм з юзера конкретні дані
        }); // Вибираєм юзера по id

        if (!isUserPresent) {
            throw new Error(`User with ID ${user_id} is not present`)
        }

        console.log(isUserPresent.dataValues) // dataValues це корисне навантаження

        [req.user] = isUserPresent; //передаєм наш результат пошуку в  наступний реквест витягуєм також деструктуризацієєю.
        next(); //каже нам що все нормально можна переходити в наступний обробник.

    }catch (e) {
        res.status(400).json(e.message);//в разі помилки вертаєм меседж який ми передали в ерорі вище
    }

};