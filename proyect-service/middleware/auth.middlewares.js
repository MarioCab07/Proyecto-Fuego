const debug = require('debug')('app:auth.middlewares');
const middleware={};
const {verifyToken}= require("../utils/jwt.tools")
const PREFIX = "Bearer";
const UserModel = require("../models/User.model");


middleware.authentication = async(req,res,next)=>{
    try {
        debug("User authentication")    
        const {authorization} = req.headers;
        
        if(!authorization){
            return res.status(401).send({error:"User not authenticated"});
        }
        const [prefix,token] = authorization.split(" ")
        
        if(prefix !== PREFIX){
            return res.status(401).send({error:"User not authenticated"});
        }

        if(!token){
            return res.status(401).send({error:"User not authenticated"});
        }

        const payload = await verifyToken(token);
        if(!payload){
            return res.status(401).send({error:"User not authenticated"});
        }

        const userId = payload["sub"];
        const user = await UserModel.findById(userId);
        if(!user){
            return res.status(401).send({error:"User not authenticated"});
        }

        const isTokenValid = user.tokens.includes(token);
        if(!isTokenValid){
            return res.status(401).send({error:"User not authenticated"});
        }

        req.user = user;
        req.token = token;
        
        



        next();
    } catch (error) {
        console.error(error);
        return res.status(500).send({error:"Internal Server error"});
    }
}

module.exports=middleware;