const express = require('express');
const router = express.Router();


const villeCtrl = require('../controllers/ville')

router.get('/commune', villeCtrl.getAllVille);

module.exports = router;