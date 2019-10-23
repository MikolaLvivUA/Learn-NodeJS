const {userService}= require('../../service'); //реквайрим наш Юзерсервіс

module.exports = async (req, res, next) => {
    //Оскільки наш кодж потенційно небезпечний огортаєм його в try catch
    try {
        const {user_id} = req.params;// берем з параметрів юзер айді

        const isUserPresent = await userService.getById(user_id);

        console.log(isUserPresent);

        if (!isUserPresent) {
            throw new Error(`User with ID ${user_id} is not present`)
        }

        req.user = isUserPresent; //передаєм наш результат пошуку в  наступний реквест витягуєм також деструктуризацієєю.
        next(); //каже нам що все нормально можна переходити в наступний обробник.

    }catch (e) {
        res.status(400).json(e.message);//в разі помилки вертаєм меседж який ми передали в ерорі вище
    }

};