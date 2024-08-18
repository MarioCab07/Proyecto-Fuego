const Mongoose= require('mongoose');
const Schema = Mongoose.Schema;

const PlayerSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    lastname:{
        type: String,
        required: true,
        trim: true
    }
    ,
    number:{
        type: Number,
        required: true,
        trim: true
    },
    team:{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    actions:[{
        type: Schema.Types.ObjectId,
        ref: 'Action'
    }]
},{timestamps:true});

module.exports = Mongoose.model('Player', PlayerSchema);