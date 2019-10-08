module.exports = (UpdateUserData) => {

    const {userID, email, name, password} = UpdateUserData;

    if (!UpdateUserData) {
        throw new Error('Bad request (UpdateUserData is not valid)')
    }
};