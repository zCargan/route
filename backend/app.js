const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const ObjectId = require('mongodb').ObjectID;

const Objectif = require('./models/objectif');
const User = require('./models/user');
const Ville = require('./models/ville');

const userRoutes = require('./routes/user');
const objRoutes = require('./routes/objectif');
const villeRoutes = require('./routes/ville')

const express = require('express');
const app = express();
app.use(express.json())
app.use(cookieParser());
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//=============================================DB==================================
mongoose.connect('mongodb+srv://Chapoune:chayae123@cluster0.avokmpx.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB echoué !'));


//=============================================CORS==================================
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.set('trust proxy', 1);

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/', true);
xhr.withCredentials = true;
xhr.send(null);
app.use(express.json());
//=============================================ROUTE==================================

app.use('/user', userRoutes);

app.use('/objectif', objRoutes);

app.use('/ville', villeRoutes);

app.get('/getcookie', (req, res) => {
    //show the saved cookies
    console.log(req.cookies)
    return res.status(200).json(req.cookies);
});

app.get('/deletecookie', (req, res) => {
    //show the saved cookies
    res.clearCookie('Id')
        return res.status(200).json({message :"Cookie supprimé"});
});

app.post('/updateUser', (req, res) => {
    let id_value = req.body.id.split("=")[1];
    let id_json = {"_id":ObjectId(id_value)}
    let modif_json = {[Object.keys(req.body)[1]]:req.body.username, [Object.keys(req.body)[2]]:req.body.email}
   User.updateOne(id_json, {$set:modif_json})
    .then(() => res.status(201).json({ message: 'Utilisateur modifié !' }))
    .catch(error => res.status(400).json({ error }));
 });
module.exports = app //export la constante pour que l'on puisse l'utiliser partout