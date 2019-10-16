module.exports = (req, res) => {
    try {
        const {userID} = req.params;
        res.redirect(`/users/${userID}`)
    } catch (e) {
        res.json(e.message)
    }
};