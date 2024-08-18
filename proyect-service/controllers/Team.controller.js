const Team = require('../models/Team.model');

const controller ={};

controller.create = async (req,res,next)=>{
    try {
        const {name} = req.body;

        const team = new Team({
            name
        });

        const savedTeam = await team.save();

        if(!savedTeam){
            return res.status(409).json({message:'Error saving team'});
        }

        return res.status(201).json({message:'Team saved',team:savedTeam});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:'Internal server error'});
    }
};

module.exports = controller;