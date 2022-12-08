const express = require('express');
const router = express.Router();


const userCtrl = require('../controllers/user')

router.post('/inscription', userCtrl.createUser)

router.get('/:id', userCtrl.getOneUser)

router.post('/objectif', userCtrl.updateUserObjectif)
 
router.put('/:id', userCtrl.modifyUser)

router.delete('/:id', userCtrl.deleteUser)

router.get('/', userCtrl.getAllUser)

router.post('/email', userCtrl.getOneMail)

router.post('/username', userCtrl.getOneUsername)

router.post('/login', userCtrl.getCookie)

router.post('/find', userCtrl.getUserCity)

module.exports = router;
