module.exports = (UpdateUserData) => {

   const {email, name, password} = UpdateUserData;

    if (!email || !name || !password) {
        throw new Error('Bad request (UpdateUserData is not valid)')
    }
};