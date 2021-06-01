const express   = require('express');
const router    = express.Router();

const motorhomeController = require('../controller/MotorhomeController');

router.get('/', motorhomeController.readMotorhomes);
router.post('/searchByBrand', motorhomeController.searchMotorhomeByBrand);
router.post('/create', motorhomeController.createMotorhome);
router.post('/update', motorhomeController.updateMotorhome);
router.post('/delete', motorhomeController.deleteMotorhome);

module.exports = {
    router
} 