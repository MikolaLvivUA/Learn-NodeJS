module.exports = (req, res) => {
    res.end(JSON.stringify(req.params))
}; // створюєм функцію виведення всіх юзерів.