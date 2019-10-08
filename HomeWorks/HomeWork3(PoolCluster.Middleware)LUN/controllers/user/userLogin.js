module.exports= (req, res) => {
    const {id} = req.user;

    res.redirect(`users/${id}`);
};