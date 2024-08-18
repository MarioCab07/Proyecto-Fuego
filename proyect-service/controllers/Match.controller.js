const Match = require('../models/Match.model');


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

        return res.status(201).json({message:'Match saved',match:savedMatch});
}catch(error){
    console.error(error);
    return res.status(500).json({message:'Internal server error'});

}}
