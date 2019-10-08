const {provider} = require('../../dataBase');

module.exports = async (req, res) => {
    const {email, name, password} = req.body;//передаєм деструктуризацією дані якімають бути внесені при створені юзера
    const query = (`INSERT INTO user(name, email, password) VALUES (?, ?, ?)`); //знаками питання можна передати те що ми не знаєм які ці параметри будть
    await provider.promise().query(query, [name, email, password]/*передаєм сюди папрметри які мають бути під знаками питання*/);
    res.render('login')
}; //створюєм функцію створення юзерів