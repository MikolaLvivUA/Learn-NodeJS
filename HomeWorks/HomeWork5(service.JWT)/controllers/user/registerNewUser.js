module.exports = (req, res) => {
    try {
        const {id} = req.user;
        res.json(`Your user with id:${id} has been registered please login in`);
    }catch (e) {
        res.json(e.message)
    }
};