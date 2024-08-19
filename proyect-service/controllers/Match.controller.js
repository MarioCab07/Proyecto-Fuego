const Match = require('../models/Match.model');
const Team = require('../models/Team.model');


const controller = {};

controller.create = async (req,res,next)=>{
    try{
        const {playday,date,result,homeTeam,awayTeam,stadium} = req.body;
        const match = new Match({
            playday,
            date,
            result,
            homeTeam,
            awayTeam,
            stadium
        });
        const savedMatch = await match.save();

        if(!savedMatch){
            return res.status(409).json({message:'Error saving match'});
        }

        const homeTeamToUpdate = await Team.findById(homeTeam);
        const awayTeamToUpdate = await Team.findById(awayTeam);
        homeTeamToUpdate.matches.push(savedMatch._id);
        awayTeamToUpdate.matches.push(savedMatch._id);
        await homeTeamToUpdate.save();
        await awayTeamToUpdate.save();


        return res.status(201).json({message:'Match saved',match:savedMatch});
}catch(error){
    console.error(error);
    return res.status(500).json({message:'Internal server error'});

}}

controller.findAll = async (req,res,next)=>{
    try{
        const matches = await Match.find();
        return res.status(200).json({matches});
    }catch(error){
        return res.status(500).json({message:'Internal server error'});
    }
}

controller.findByPlayday = async (req,res,next)=>{
    try {
     const {playday} = req.params;
     const matches = await Match.find({playday:playday});
     return res.status(200).json({matches});       
    } catch (error) {
        return res.status(500).json({message:'Internal server error'});
    }
}

controller.findByTeam = async (req,res,next)=>{
    try {
        const {team} = req.params;
        const matches = await Match.find({$or:[{homeTeam:team},{awayTeam:team}]});
        return res.status(200).json({matches});
    } catch (error) {
        return res.status(500).json({message:'Internal server error'});
    }
}

module.exports = controller;
