const mongoose = require('mongoose');

const Objectif = require('./models/objectif');
const User = require('./models/user');
const UserTest = require('./models/user_test')

const express = require('express');
const app = express();
app.use(express.json())
const cors = require('cors');

const userRoutes = require('./routes/user');

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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use(cors())
//=============================================ROUTE==================================
app.use('/user', userRoutes);

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
        .then(() => res.status(201).json({ message: 'Objectif ajouté !' }))
        .catch(error => res.status(400).json({ error }));
});

app.get('/objectif', (req, res, next) => {
    Objectif.find()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json({ error }));
});

app.post('/email', (req, res) => {
    UserTest.findOne({ email: req.body.email })
        .then(response => {
            if (!response) {
                return res.send("ok")
            }
            else {
                return res.send("not ok")
            }
        })
})

app.post('/inscription', (req, res) => {
    console.log(req.body)
    const test = new UserTest({
        ...req.body
    })
    test.save()
        .then(() => res.status(201).json({ message: 'utilisateur ajouté' }))
        .catch(error => res.status(400).json({ error }));
})

app.post('/username', (req, res) => {
    console.log(req.body)
    UserTest.findOne({ username: req.body.username })
        .then(response => {
            if (!response) {
                return res.send("ok")

            }
            else {
                return res.send("not ok")
            }
        })
})

app.post('/user', (req, res) => {
    console.log(req.body.email)
     User.findOne({ email: req.body.email })
     .then(response =>  {
        if (!response) {
        console.log("Utilisateur non trouvé !")

        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
        if (req.body.mdp == response.password){
            console.log("Vous êtes connecté")
            return res.status(200).json(response)
        }
        else{
            console.log("Mot de passe incorrecte")
            return res.status(401).json({ error: 'Mot de passe incorrecte !' });
        }
    })
});
app.get('/user', (req, res, next) => {
    User.findOne({ Prenom : req.query.prenom})
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json({ error }));
});


app.put('/api/stuff/:id', (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id
    })
     .catch(error => res.status(400).json({ error }));
});

module.exports = app //export la constante pour que l'on puisse l'utiliser partout