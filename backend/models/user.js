const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  Nom: { type: String, required: true },
  Prenom: { type: String, required: true },
  Pseudonyme: { type: String, required: true },
  Age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

//userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);