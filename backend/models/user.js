const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    nom : { type:String, require: true},
    prenom : { type:String, require: true},
    pseudonyme : { type:String, require: true},
    age : { type:Number, require: true},
    email : { type:String, require: true},
    password : { type:String, require: true},
    objectifs : { type:Array, require: true},
})

module.exports = mongoose.model('User', userSchema); 

