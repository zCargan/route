<<<<<<< HEAD
const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    confirmed: { type: Boolean, require: true },
    objectifs: { type: Array, require: true },
    city: { type: String, require: true }
})

module.exports = mongoose.model('User', userSchema);

=======
const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmed: { type: Boolean, required: true },
    objectif: { type: Array, required: true },
    city: { type: String, require: false }
});

//userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

>>>>>>> 4b50560 (ajout de la carte)
