const {userValidator} = require('../../validators')
module.exports = (req, res, next) => {

  try {
        const user = req.body; //передаєм в змінну наші дані з боді

      userValidator.newUserValidator(user); // підключаєм наш валідатор

      next()
  }  catch (e) {

        res.status(400).json(e.message)
  }

};