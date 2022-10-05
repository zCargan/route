const mongoose = require('mongoose');

const objectifSchema = mongoose.Schema({
//id, type, objectif
    type : { type:String, require: true},
    objectif : { type:String, require: true},
    description : { type:String, require: false}
})

module.exports = mongoose.model('Objectif', objectifSchema); 