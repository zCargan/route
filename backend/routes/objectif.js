const express = require("express");
const router = express.Router();

const objectifCtrl = require('../controllers/objectif');



router.post('/', objectifCtrl.createObjectif)

router.get('/:name', objectifCtrl.getOneObjectif)
 
router.put('/:id', objectifCtrl.modifyObjectif)

router.delete('/:id', objectifCtrl.deleteObjectif)

router.get('/', objectifCtrl.getAllObjectif)


module.exports = router;





