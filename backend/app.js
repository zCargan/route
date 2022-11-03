const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const ObjectId = require('mongodb').ObjectID;

const Objectif = require('./models/objectif');
const User = require('./models/user');
const Ville = require('./models/ville')

const express = require('express');
const app = express();
app.use(express.json())
app.use(cookieParser());
const cors = require('cors');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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

// ============================================================================== VILLE ==============================================================================

app.get('/ville', (req, res, next) => {
    Ville.find()
        .then(response => res.status(200).json(response))
        .catch(error => res.status(400).json({ error }));
});

app.post('/ville', (req, res) => {
    console.log(req.body)
    const ville = new Ville({
        ...req.body
    })
    ville.save()
        .then(() => res.status(201).json({ message: 'ville ajoutée' }))
        .catch(error => res.status(400).json({ error }));
})


// ============================================================================== EMAIL ==============================================================================

app.post('/email', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(response => {
            if (!response) {
                return res.send("ok")
            }
            else {
                return res.send("not ok")
            }
        })
})


// ============================================================================== MAJ PROFIL ==============================================================================

app.post('/update_profil', (req, res) => {
    let email = req.body.email;
    console.log(req.body)
    User.updateOne({ "email": email }, { $set: req.body })
        .then(() => res.status(201).json({ message: 'Utilisateur modifié !' }))
        .catch(error => res.status(400).json({ error }));
})












app.post('/inscription', (req, res) => {
    console.log(req.body)
    const test = new User({
        ...req.body
    })
    test.save()
        .then(() => res.status(201).json({ message: 'utilisateur ajouté' }))
        .catch(error => res.status(400).json({ error }));
})

app.post('/username', (req, res) => {
    console.log(req.body)
    User.findOne({ username: req.body.username })
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
    //console.log(req.body.email)
    User.findOne({ email: req.body.email })
        .then(response => {
            if (!response) {
                console.log("Utilisateur non trouvé !")
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            if (req.body.mdp == response.password) {
                res.cookie('Id', response._id.toString(), {
                    maxAge: 500000,
                    // expires works the same as the maxAge
                    secure: false, // mettre l'attribut à true une fois que le site est en HTTPS
                    // httpOnly: true,
                    sameSite: 'lax'
                });
                return res.status(200).json(response);
            }
            else {
                console.log("Mot de passe incorrecte")
                return res.status(401).json({ error: 'Mot de passe incorrecte !' });
            }
        })
});

app.get('/user', (req, res, next) => {
    User.findOne({ "_id": ObjectId(req.query.id.split("=")[1]) })
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => res.status(400).json({ error }));
});


app.put('/api/stuff/:id', (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, {
        ...req.body, _id: req.params.id
    })
        .catch(error => res.status(400).json({ error }));
});

app.get('/getcookie', (req, res) => {
    //show the saved cookies
    console.log(req.cookies)
    return res.status(200).json(req.cookies);
});

/*app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie token name`,`encrypted cookie string Value`,{
        maxAge: 5000,
        // expires works the same as the maxAge
        expires: new Date('01 12 2021'),
        secure: false, // mettre l'attribut à true une fois que le site est en HTTPS
        httpOnly: true,
        sameSite: 'lax'
    });
    res.send('Cookie have been saved successfully');
});
*/
app.get('/deletecookie', (req, res) => {
    //show the saved cookies
    res.clearCookie('Id')
    return res.status(200).json(req.cookies);
});
module.exports = app //export la constante pour que l'on puisse l'utiliser partout