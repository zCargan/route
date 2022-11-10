const mongoose = require('mongoose');

const express = require('express');
const app = express();

const cors = require('cors');

const cookieParser = require('cookie-parser')

const userRoutes = require('./routes/user');
const objRoutes = require('./routes/objectif');

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
app.use(cookieParser())
//=============================================ROUTE==================================

app.use('/user', userRoutes);

app.use('/objectif', objRoutes);

module.exports = app //export la constante pour que l'on puisse l'utiliser partout