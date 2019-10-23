module.exports = (userObject) => {

    const {email, name, password} = userObject; //задаєм змінні які мають бути валідні з нашою базою деструктуризацією

    if (!email || !password || !name){ // перевіряєм на валідність
        throw new Error('User object is not valid')
    }
};