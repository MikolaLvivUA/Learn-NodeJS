module.exports = (req, res) => {
    try {
        const {userID} = req.params;
        res.json(`User id:${userID} has been deleted`)
    }catch (e) {
        res.status(400).json(e.message)
    }
};