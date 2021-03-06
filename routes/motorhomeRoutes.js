const express   = require('express');
const router    = express.Router();

const motorhomeController = require('../controller/MotorhomeController');

router.get('/', motorhomeController.readMotorhomes);
router.get('/searchById', motorhomeController.searchMotorhomeById);
router.post('/searchByBrand', motorhomeController.searchMotorhomeByBrand);  // Not implemented
router.post('/create', motorhomeController.createMotorhome);
router.post('/update', motorhomeController.updateMotorhome);
router.post('/delete', motorhomeController.deleteMotorhome);

module.exports = {
    router
} 