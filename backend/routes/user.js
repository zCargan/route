const express = require("express");
const routerUser = express.Router();

const userCtrl = require('../controllers/user');

routerUser.post('/objectif', userCtrl.updateObjectif);
module.exports = routerUser;