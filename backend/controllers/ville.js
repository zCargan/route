const Villes = require("../models/ville");

exports.getAllVille = (req, res, next) => {
    Villes.find()
        .then(response => res.status(200).json(response))
        .catch(error => res.status(400).json({ error }));
}
