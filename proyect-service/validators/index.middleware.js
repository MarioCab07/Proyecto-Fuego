const {validationResult} = require("express-validator");
const debug = require("debug")("app:middleware");
module.exports = (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        debug("Hola mundo")
        return res.status(400).json({
            errors: errors.array().map(error=>({
                field:error.param,
                msg:error.msg
            }))

        });
    }
    next();
}