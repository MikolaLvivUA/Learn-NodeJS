module.exports= (req, res) => {
    const user = req.user;

    res.redirect(`users/${user.id}`);
};