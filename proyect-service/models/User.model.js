const Mongoose= require('mongoose');
const Schema = Mongoose.Schema;
const crypto = require('crypto');
const { type } = require('os');
const debug = require('debug')('app:models:user');

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    hashedPassword:{
        type: String,
        required: true,
        trim: true
    },
    tokens:{
        type:[String],
        default:[]
        
    },
    salt:{
        type: String,
    }

},{timestamps:true});

UserSchema.methods ={
    encryptPassword : function(password){
        if(!password) return '';
        try {
            const _password =  crypto.pbkdf2Sync(
                password,
                this.salt,
                1000,
                64,
                'sha512'
            ).toString("hex");

            return _password;

        } catch (error) {
            debug(error);
            return "";
        }

    },
    makeSalt: function(){
        return crypto.randomBytes(16).toString('hex');
    },
    comparePassword: function(password){
        return this.hashedPassword === this.encryptPassword(password);
    }
}

UserSchema
    .virtual('password')
    .set(function(password=crypto.randomBytes(16).toString('hex')){
        
        this.salt = this.makeSalt();
        this.hashedPassword = this.encryptPassword(password);

    })

module.exports = Mongoose.model('User', UserSchema);