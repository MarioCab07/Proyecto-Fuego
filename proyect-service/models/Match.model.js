const Mongoose= require('mongoose');
const Schema = Mongoose.Schema;


const MatchSchema = new Schema({
    playday:{
        type: String,
        required: true,
        trim: true
    },
    date:{
        type: Date,
        required: true,
        trim: true
    },
    result:{
        type: String,
        required: true,
        trim: true
    },
    homeTeam:{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    awayTeam:{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    stadium:{
        type: String,
        required: true,
        trim: true
    },
    actions:[{
        type: Schema.Types.ObjectId,
        ref: 'Action'
    }]
},{timestamps:true});

module.exports = Mongoose.model('Match', MatchSchema);