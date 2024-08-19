const Player = require('../models/Player.model');
const Action = require('../models/Action.model');

const controller = {};

controller.create = async (req,res,next)=>{
    try {
        const {type,minute,player,match,team} = req.body;

        const action = new Action({
            type,
            minute,
            player,
            match,
            team
        });

        const savedAction = await action.save();

        if(!savedAction){
            return res.status(409).json({message:'Error saving action'});
        }

        const playerToUpdate = await Player.findById(player);
        playerToUpdate.actions.push(savedAction._id);
        await playerToUpdate.save();

        return res.status(201).json({message:'Action saved',action:savedAction});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:'Internal server error'});
    }
};

controller.findByMatch = async (req,res,next)=>{
    const {match} = req.params;
    try {
        const actions = await Action.find({match:match});
        return res.status(200).json({actions});
    } catch (error) {
        return res.status(500).json({message:'Internal server error'});
    }
};

controller.findByPlayer = async (req,res,next)=>{
    const {player} = req.params;
    try {
        const actions = await Action.find({player:player});
        return res.status(200).json({actions});
    } catch (error) {
        return res.status(500).json({message:'Internal server error'});
    }
};

controller.findByTeam = async (req,res,next)=>{
    const {team} = req.params;
    try {
        const actions = await Action.find({team:team});
        return res.status(200).json({actions});
    } catch (error) {
        return res.status(500).json({message:'Internal server error'});
    }
};

controller.findByType = async (req,res,next)=>{
    const {type} = req.params;
    try {
        const actions = await Action.find({type:type});
        return res.status(200).json({actions});
    } catch (error) {
        return res.status(500).json({message:'Internal server error'});
    }
};

module.exports = controller;