const Player = require('../models/Player.model');

const controller ={};

controller.create = async (req,res,next)=>{
    try {
        const {name,lastname,number,position,team} = req.body;

        const player = new Player({
            name,
            lastname,
            number,
            position,
            team
        });

        const savedPlayer = await player.save();

        if(!savedPlayer){
            return res.status(409).json({message:'Error saving player'});
        }

        return res.status(201).json({message:'Player saved',player:savedPlayer});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:'Internal server error'});
    }
}

controller.findByTeam = async (req,res,next)=>{
    const {team} = req.params;
    
    try {
        const players =  await Player.find({team:team});
        return res.status(200).json({players});
    } catch (error) {
        return res.status(500).json({message:'Internal server error'});
    }
}

controller.findByTeamPosition = async (req,res,next)=>{
    const {team,position} = req.params;
    try {
        const players = Player.find({team:team,position:position});
        return res.status(200).json({players});
    } catch (error) {
        return res.status(500).json({message:'Internal server error'});

    }
    
}

controller.findByName = async(req,res,next)=>{
    const {name,lastname,team} = req.params;
    try {
        const player = await Player.findOne({name:name,lastname:lastname,team:team});

        return res.status(200).json({player});
    } catch (error) {
        return res.status(500).json({message:'Internal server error'});
    }
}

module.exports = controller;