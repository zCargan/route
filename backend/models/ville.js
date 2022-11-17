const mongoose = require('mongoose');


const villeSchema = mongoose.Schema({
    nouvelle_ville: { type: String, require: true }
})

module.exports = mongoose.model('Ville', villeSchema); 