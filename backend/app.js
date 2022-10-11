const mongoose = require('mongoose');
const Objectif = require('./models/objectif');

const express = require('express');
const app = express();

//=============================================DB==================================
mongoose.connect('mongodb+srv://Chapoune:chayae123@cluster0.avokmpx.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
useUnifiedTopology: true})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(()=> console.log('Connexion à MongoDB echoué !'));


//=============================================CORS==================================
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


//=============================================ROUTE==================================
app.post('/api/stuff', (req, res, next) => {
    delete req.body_id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
    .then(()=> res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});


app.post('/api/objectif', (req, res, next) => {
    const obj = new Objectif({
        ...req.body
    });
    obj.save()
    .then(()=> res.status(201).json({ message: 'Objectif ajouté !'}))
    .catch(error => res.status(400).json({ error }));
});



app.get('/api/stuff/:id', (req, res, next) => {
    Objectif.findOne({ _id: req.params.id })
    .then(Objectif => res.status(200).json(Objectif))
    .catch(error => res.status(404).json({ error }));
});

app.get('/objectif', (req, res, next) => {
    Objectif.find()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json({ error }));
});

app.put('/api/stuff/:id', (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id
    })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
});

app.delete('/api/stuff/:id', (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
});


module.exports = app //export la constante pour que l'on puisse l'utiliser partout