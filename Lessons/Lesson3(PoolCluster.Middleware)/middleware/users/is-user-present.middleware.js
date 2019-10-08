const { provider } = require('../../dataBase'); //реквайрим наш конектор до бази даних

module.exports = async (req, res, next) => {
    //Оскільки наш кодж потенційно небезпечний огортаєм його в try catch
    try {
        const {user_id} = req.params; // берем з параметрів юзер айді

        const query = `SELECT * FROM user WHERE id = ${user_id}`;// виносим кверю(sql запит) в окрему змінну
        // const isUserPresent = users.find(user => user.id === +user_id); // шукаєм конкретного юзера по айді

        const [isUserPresent] = await provider.promise().query(query); // витягуєм наше знашення з бази

        if (!isUserPresent.length/*якщо буде дорівнювати 0*/) {
            throw new Error(`User with ID ${user_id} is not present`)
        }//Якщо юзера нема видаєм ерору

        [req.user] = isUserPresent; //передаєм наш результат пошуку в  наступний реквест витягуєм також деструктуризацієєю.
        next(); //каже нам що все нормально можна переходити в наступний обробник.

    }catch (e) {
        res.status(400).json(e.message);//в разі помилки вертаєм меседж який ми передали в ерорі вище
    }

};