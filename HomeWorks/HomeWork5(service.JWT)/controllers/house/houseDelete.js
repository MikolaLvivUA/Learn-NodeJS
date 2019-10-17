
module.exports = async (req, res) => {
    try {
        const {houseID} = req.params;
        res.json(`House id:${houseID} has been deleted`)
    } catch (e) {
        res.status(400).json(e.message)
    }
};