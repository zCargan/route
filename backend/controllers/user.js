const User = require("../models/user");
const app = require("../app");
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;

exports.updateObjectif = (req, res, next) => {
    let keys = Object.keys(req.body)
    let values = Object.values(req.body)
    let id_value = values[0].split("=")[1];
    let id_json = {"_id":ObjectId(id_value)}
    let objectifs_key = keys[1];
    let objectifs_value = values[1];
    let objectifs_json = {[objectifs_key]:objectifs_value};
    User.updateOne(id_json, {$set:objectifs_json})
    .then(() => res.status(201).json({ message: 'Utilisateur modifié !' }))
    .catch(error => res.status(400).json({ error }));
}