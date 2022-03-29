const AppError = require('./AppError')

const validateJoke = (content) => {
    if(!content) throw new AppError('content cannnot be empty', 400)
    
}

module.exports = { validateJoke };
