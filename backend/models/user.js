const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Nom : { type:String, require: true},
    Prenom : { type:String, require: true},
    Pseudonyme : { type:String, require: true},
    Age : { type:Number, require: true},
    email : { type:String, require: true},
    password : { type:String, require: true},
    objectifs : { type:Array, require: true},
})

module.exports = mongoose.model('User', userSchema); 