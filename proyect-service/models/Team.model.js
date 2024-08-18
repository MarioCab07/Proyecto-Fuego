const Mongoose= require('mongoose');
const Schema = Mongoose.Schema;

const TeamSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    matches:[{
        type: Schema.Types.ObjectId,
        ref: 'Match'
    }]
},{timestamps:true});

module.exports = Mongoose.model('Team', TeamSchema);