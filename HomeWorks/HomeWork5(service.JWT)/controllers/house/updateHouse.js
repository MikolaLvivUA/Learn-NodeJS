module.exports = (req, res) => {
    try {
        const {houseID} = req.params;
        res.redirect(`/houses/${houseID}`)
    } catch (e) {
        res.json(e.message)
    }
};