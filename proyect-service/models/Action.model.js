const Mongoose= require('mongoose');
const Schema = Mongoose.Schema;

const ActionSchema = new Schema({
    type:{
        type: String,
        required: true,
        trim: true
    },
    minute:{
        type: Number,
        required: true,
        trim: true
    },
    player:{
        type: Schema.Types.ObjectId,
        ref: 'Player'
    },
    match:{
        type: Schema.Types.ObjectId,
        ref: 'Match'
    },
    team:{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }
    
},{timestamps:true});

module.exports = Mongoose.model('Action', ActionSchema);