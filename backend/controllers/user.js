const User = require("../models/user");
const app = require("../app");

exports.updateObjectif = (req, res, next) => {
    let keys = Object.keys(req.body)
    let values = Object.values(req.body)
    let prenom_key = keys[0];
    let prenom_value = values[0];
    let prenom_json = {[prenom_key]:prenom_value}
    let objectifs_key = keys[1];
    let objectifs_value = values[1];
    let objectifs_json = {[objectifs_key]:objectifs_value};
    console.log(prenom_json, objectifs_json)
    User.updateOne(prenom_json, {$set:objectifs_json})
    .then(() => res.status(201).json({ message: 'Utilisateur modifié !' }))
    .catch(error => res.status(400).json({ error }));
}