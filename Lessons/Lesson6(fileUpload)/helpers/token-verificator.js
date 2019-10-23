const jwt = require('jsonwebtoken');
//створюєм верифікатор токенів
const {JWT_SECRET} = require("../config/config");
module.exports = token => {
        let user;

        jwt.verify(token, JWT_SECRET, (err, decoded) => { //метод для верифікації токенів

            if(err) {
                throw new Error('Token is not valid')
            }

            user = decoded; // кажем що наш юзер буде дорівнювати нашому декодованому токену тобто айдішці

            console.log(decoded);
        });
    return user;//ретьорним нашого юзера
};