const express = require('express');
const router  = express.Router(); 

const airlinesController = require('../controllers/airlines'); 
router.post('/airlines', airlinesController.newAirlines); 
router.get('/airlines', airlinesController.getAllAirlines);
router.get('/airlines/:airportCode', airlinesController.getAirlinesByAirportCode);
router.post('/airlines/:airlinesCode', airlinesController.addAirlineToAirport); 
router.post('/airlines/remove/airport/:airlinesCode', airlinesController.removeAirlinesFromAirport); 
module.exports = router;
