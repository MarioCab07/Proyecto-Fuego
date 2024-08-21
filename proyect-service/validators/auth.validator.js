const { body } = require('express-validator');

const validators = {};
const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/;

validators.registerValidator = [
    body("username")
        .notEmpty()
        .withMessage("Username is required")
        .isLength({min:4})
        ,
    body("password")
        .notEmpty().withMessage("Password is required")
        .matches(passwordRegexp).withMessage("Password format incorrect")

] 

module.exports = validators;