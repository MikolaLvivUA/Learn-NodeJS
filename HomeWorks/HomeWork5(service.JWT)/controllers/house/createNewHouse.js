module.exports = async (req, res) => {
    try {
        const {id} = req.house;
        res.json(`house id:${id} has been created`);
    }catch (e) {
        res.json(e.message)
    }
};