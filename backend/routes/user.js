const express = require('express');
const router = express.Router();


const userCtrl = require('../controllers/user')

router.post('/', userCtrl.createUser)

router.get('/:id', userCtrl.getOneUser)
 
router.put('/:id', userCtrl.modifyUser)

router.delete('/:id', userCtrl.deleteUser)

router.get('/', userCtrl.getAllUser)


module.exports = router;