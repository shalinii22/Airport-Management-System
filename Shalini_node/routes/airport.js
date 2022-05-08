const express = require('express');
const router  = express.Router(); 

const airportController = require('../controllers/airport'); 
router.post('/airport', airportController.newAirport); 
router.get('/airports', airportController.getAllAirports);
router.get('/airport/:code', airportController.getAirportByCode);
module.exports = router;
