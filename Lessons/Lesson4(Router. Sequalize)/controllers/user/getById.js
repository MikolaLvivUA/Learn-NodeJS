module.exports = (req, res) => {

    const user = req.user; // приймаєм в змінну пропертю яка нам приходить з мідлвари

    res.json(user);
};//створюєм функцію пошуку юзера по айді