const User = require('../models/User.model');
const {createToken,verifyToken} = require("../utils/jwt.tools")
const controller = {};

controller.register = async(req,res,next)=>{
    try {
        const {username,password} = req.body;

        const user = await User.findOne({username:username});

        if(user){
            return res.status(409).json({message:'Username already exists'});
        }

        const newUser = new User({
            username,
            password
        });

        await newUser.save();

        return res.status(201).json({message:'User registered'});

    } catch (error) {
        console.error(error);
        return res.status(500).json({message:'Internal server error'});
    }
}

controller.login = async(req,res,next)=>{
    try {
        const {username,password} = req.body;

        const user = await User.findOne({username:username});
        if(!user){
            return res.status(404).json({message:'User not found'});
        }

        if(!user.comparePassword(password)){
            return res.status(401).json({message:'Invalid password'});
        }

        const token = await createToken(user._id);

        let _tokens = [...user.tokens];
        const _verifyPromises  = _tokens.map(async (_token) =>{
            const status = await verifyToken(_token);
            return status ? _token : null; 
        })

        _tokens = (await Promise.all(_verifyPromises))
        .filter(_t=> _t)
        .slice(0,4);

        _tokens = [token,..._tokens];
        user.tokens = _tokens;

        await user.save();

        return res.status(200).json({token});

    } catch (error) {
        console.error(error);
        return res.status(500).json({message:'Internal server error'});
    }
}

module.exports = controller;