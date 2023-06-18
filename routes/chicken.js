const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const controllerChicken = require('../controllers/chicken');

router.post('/',controllerChicken.createChicken);
router.put('/:id',controllerChicken.modifyChicken);
router.delete('/:id',controllerChicken.deleteChicken);
router.get('/:id',controllerChicken.getOneChicken);
router.get('/',controllerChicken.getAllChickens);
module.exports= router;
